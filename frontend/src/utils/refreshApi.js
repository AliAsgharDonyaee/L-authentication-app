import axios from "axios";
import { createRefresh } from "react-auth-kit";

export default function refreshApi() {
	const refreshApi = createRefresh({
		interval: 1,
		refreshApiCallback: async ({
			authToken,
			authTokenExpireAt,
			refreshToken,
			refreshTokenExpiresAt,
			authUserState,
		}) => {
			try {
				const response = await axios.post(
					"/refresh",
					{ refresh: refreshToken },
					{
						headers: { Authorization: `Bearer ${authToken}` },
					},
				);
				return {
					isSuccess: true,
					newAuthToken: response.data.token,
					newAuthTokenExpireIn: 10,
					newRefreshTokenExpiresIn: 60,
				};
			} catch (error) {
				console.error(error);
				return {
					isSuccess: false,
				};
			}
		},
	});
	return refreshApi;
}
