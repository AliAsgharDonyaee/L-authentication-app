import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		fullName: { type: String, required: false, trim: true },
		email: {
			type: String,
			required: false,
			unique: false,
			trim: true,
		},
		password: {
			type: String,
			required: false,
		},
		phoneNumber: { type: String, trim: true },
		isActive: { type: Boolean, default: false },
	},
	{ timestamps: true },
);

const User = mongoose.model("User", UserSchema);
export default User;
