import mongoose from "mongoose";

const DBConnect = (MONGO_URI) => {
	// if (MONGO_URI) {
	// 	throw new Error("Add Mongo URI to .env");
	// }
	mongoose
		.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("✅ \x1b[32m- MongoDB connected\x1b[0m");
		})
		.catch((error) => console.log(`🗿 \x1b[31m- Failed to connect to MongoDB\x1b[0m\n`, error));
};
export default DBConnect;
