import express from "express";
import dontenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

// todo: route imports
import allRoutes from "./app/routes/allRoutes.js";
import notFound from "./app/routes/notFound.js";
import DBConnect from "./app/utils/DBConnect.js";

// ==========
// config
// ==========

const PORT = process.env.PORT || 4000;
const app = express();
dontenv.config();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
	cors({
		origin: process.env.ALLOW_CORS_ORIGIN,
		credentials: true,
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
	}),
);

// ==========
// routing
// ==========

app.use("/api/v1/auth", allRoutes);
app.use("*", notFound);

// ==========
// app listen
// ==========

app.listen(PORT, () => {
	console.log("✅ \x1b[32m- app listen on port:\x1b[0m", PORT);
	DBConnect(process.env.MONGO_URI);
});
