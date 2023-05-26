import { Router } from "express";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import bcrypt from "bcryptjs";

// Създава инстаниция за рутера
const router = Router();

// Крайна точка на login метода
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    // Взима имейла и праолата
    const { email, password } = req.body;

    // Хешира паролата
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Проверява дали потребител с съответния имейл и парола дали съществува
    const user = await UserModel.findOne({ email, encryptedPassword });

    if (user) {
      // генерира token и изпраща token response
      res.send(generateTokenResponse(user));
    } else {
      res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
    }
  })
);

// Крайна точка на метода за регистрация
router.post(
  "/register",
  asyncHandler(async (req, res) => {
    // Взима името, имейлът, паролата и адресът
    const { name, email, password, address } = req.body;
    // Проверява дали вече съществува потребител с дадения имейл
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(HTTP_BAD_REQUEST).send("User is already exist, please login!");
      return;
    }
    // Хеширане на паролата
    const encryptedPassword = await bcrypt.hash(password, 10);
    // Създава нов потребител
    const newUser: User = {
      id: "",
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      address,
      isAdmin: false,
    };
    // Добавя потребителя към базата от данни
    const dbUser = await UserModel.create(newUser);
    // Генерира token и изпраща token response
    res.send(generateTokenResponse(dbUser));
  })
);

// Помощна фунция за генериране на token response
const generateTokenResponse = (user: User) => {
  // Генериране на token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "30d",
    }
  );

  // Връща token response
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    address: user.address,
    isAdmin: user.isAdmin,
    token: token,
  };
};

// Маршрут, който взима всички потребители
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await UserModel.find({});
    res.json(users);
  })
);

// Взима определен потребител по ID
router.get('/:id', asyncHandler (
  async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    res.send(user);
  }
));

// Създава нов потребител в базата от данни
router.post(
  "/",
  asyncHandler(async (req, res) => {
    try {
      const { name, email, password, address, isAdmin } = req.body;
      // Хеширане на паролата
      const encryptedPassword = await bcrypt.hash(password, 10);
      // Създава нов потребител
      const user: User = {
        id: "",
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin,
      };
      // Добавя потребителя към базата от данни
      const dbUser = await UserModel.create(user);
      // Генерира token и изпраща token response
      res.send(generateTokenResponse(dbUser));
    } catch (error) {
      res.status(500).send(error);
    }
  })
);

// Модифицира потребител от базата от данни
router.patch('/:id', asyncHandler (
  async (req, res) => {
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
));

// Изтрива потребител от базата от данни
router.delete('/:id', asyncHandler(
  async (req, res) => {
    try {
      const user = await UserModel.findByIdAndRemove(req.params.id);
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
));

export default router;