import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import { OrderStatus } from '../constants/order_status';
import { OrderModel } from '../models/order.model';
import auth from '../middlewares/auth.mid';

const router = Router();
router.use(auth);

// Създава нова поръчка
router.post('/create', asyncHandler(async (req: any, res: any) => {
    const requestOrder = req.body;

    if (requestOrder.items.length <= 0) {
        res.status(HTTP_BAD_REQUEST).send('Количката е празна!');
        return;
    }

    await OrderModel.deleteOne({
        user: req.user.id,
        status: OrderStatus.NEW
    });

    const newOrder = new OrderModel({ ...requestOrder, user: req.user.id });
    await newOrder.save();
    res.send(newOrder);
}));

// Взима новата поръчка за текущия потребител
router.get('/newOrderForCurrentUser', asyncHandler(async (req: any, res) => {
    const order = await getNewOrderForCurrentUser(req);
    if (order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
}));

// Плащане на поръчката
router.post('/pay', asyncHandler(async (req: any, res) => {
    const { paymentId } = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if (!order) {
        res.status(HTTP_BAD_REQUEST).send('Поръчката не е намерена!');
        return;
    }
    order.paymentId = paymentId;
    order.status = OrderStatus.PAYED;
    await order.save();
    res.send(order._id);
}));

// Взима поръчките по ID
router.get('/track/:id', asyncHandler(async (req, res) => {
    const order = await OrderModel.findById(req.params.id);
    res.send(order);
}));

// Взима всички поръчки за определен потребител
router.get('/user/:id', asyncHandler(async (req, res) => {
    const orders = await OrderModel.find({ user: req.params.id });
    res.send(orders);
}));

// Взима всички поръчки 
router.get('/all', asyncHandler(async (req: any, res: any) => {
    const orders = await getAllOrders();
    res.send(orders);
}))

export default router;

async function getNewOrderForCurrentUser(req: any) {
    return await OrderModel.findOne({ user: req.user.id, status: OrderStatus.NEW });
}

async function getAllOrders() {
    return await OrderModel.find();
}
