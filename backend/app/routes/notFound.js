import express from "express";

const router = express.Router();

router.use("/", (req, res) => {
	res.send("pages not found");
});

export default router;
