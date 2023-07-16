import express from "express";
import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

const router = express.Router();

// ==========
// routers sign up
// ==========

router.post("/login", async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({ email });
	return res.status(StatusCodes.OK).send({
		statusCode: StatusCodes.OK,
		data: user,
	});
});

router.post("/signup", async (req, res) => {
	const { body } = req;

	const user = await User.findOne({ email: body.email });
	if (user) {
		const message = `this ${body.email} have already registered, please login`;
		return res.status(StatusCodes.BAD_REQUEST).send({
			statusCode: StatusCodes.BAD_REQUEST,
			message,
		});
	}
	await User.create({ fullName: `${body.fname} ${body.lname}`, email: body.email, password: body.password });
	const findUser = await User.find({ email: body.email });
	return res.status(StatusCodes.OK).send({
		statusCode: StatusCodes.OK,
		data: findUser,
	});
});

// ==========
// routers sign in
// ==========

router.post("/signin", async (req, res) => {
	const { email, password } = req.body;
	console.log(req.body);

	const findUser = await User.findOne({ email });
	if (!findUser) {
		const message = `Email or password does not match !`;
		return res.status(StatusCodes.BAD_REQUEST).send({
			statusCode: StatusCodes.BAD_REQUEST,
			message,
		});
	}
	if (findUser.password !== password) {
		const message = `Email or password does not match !!`;
		return res.status(StatusCodes.BAD_REQUEST).send({
			statusCode: StatusCodes.BAD_REQUEST,
			message,
		});
	}
	const jwtToken = jwt.sign({ id: findUser._id, email: findUser.email }, process.env.JWT_SECRET);
	return res.json({ message: "Welcome Back!", token: jwtToken });
});

export default router;
