import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { FoodModel } from '../models/food.model';
const router = Router();

router.get("/", asyncHandler(
  async (req, res) => {
    const foods = await FoodModel.find();
    res.send(foods);
  }
));

router.get("/search/:searchTerm", asyncHandler(
  async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const foods = await FoodModel.find({ name: { $regex: searchRegex } })
    res.send(foods);
  }
));

router.get("/tags", asyncHandler(
  async (req, res) => {
    const tags = await FoodModel.aggregate([
      {
        $unwind: '$tags'
      },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count'
        }
      }
    ]).sort({ count: -1 });
    const all = {
      name: 'All',
      count: await FoodModel.countDocuments()
    }
    tags.unshift(all);
    res.send(tags);
  }
));

router.get("/tag/:tagName", asyncHandler(
  async (req, res) => {
    const foods = await FoodModel.find({ tags: req.params.tagName })
    res.send(foods);
  }
));

router.get("/:foodId", asyncHandler(
  async (req, res) => {
    const food = await FoodModel.findById(req.params.foodId);
    res.send(food);
  }
));

router.post("/", asyncHandler(
  async (req, res) => {
    try {
      const food = new FoodModel(req.body);
      await food.save();
      res.send(food);
    } catch (error) {
      res.status(500).send(error);
    }
  }
));

router.patch("/:id", asyncHandler(
  async (req, res) => {
    try {
      const food = await FoodModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.send(food);
    } catch (error) {
      res.status(500).send(error);
    }
  }
));

router.delete("/:id", asyncHandler(
  async (req, res) => {
    try {
      const food = await FoodModel.findByIdAndRemove(req.params.id);
      res.send(food);
    } catch (error) {
      res.status(500).send(error);
    }
  }
));

export default router;