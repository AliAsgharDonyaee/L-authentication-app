import { object, string } from "yup";

const getCharacterValidationError = (str) => {
	return `Your password must have at least 1 ${str} character`;
};

export const SigninSchema = object({
	email: string().email("😑 Invalid email").required("😑 What are you doing"),

	password: string()
		.required("🤬 What doing")
		.min(8, "😑 Password must have at least 8 characters")
		.matches(/[0-9]/, getCharacterValidationError("digit"))
		.matches(/[a-z]/, getCharacterValidationError("lowercase"))
		.matches(/[A-Z]/, getCharacterValidationError("uppercase")),
});
