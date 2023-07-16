import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "react-auth-kit";
// import refreshApi from "./utils/refreshApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider
				authType={"cookie"}
				authName={"_auth"}
				cookieDomain={window.location.hostname}
				cookieSecure={false}
				// refresh={refreshApi}
			>
				<CookiesProvider>
					<App />
				</CookiesProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
