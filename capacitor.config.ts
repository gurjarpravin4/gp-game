import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.karmaquest.app",
	appName: "KarmaQuest",
	webDir: "dist/gp-game/browser",
	plugins: {
		SplashScreen: {
			launchShowDuration: 1500,
			launchAutoHide: true,
			launchFadeOutDuration: 500,
			backgroundColor: "#2f0446",
			androidSplashResourceName: "splash",
			androidScaleType: "CENTER_CROP",
			showSpinner: true,
			androidSpinnerStyle: "large",
			iosSpinnerStyle: "small",
			spinnerColor: "#999999",
			splashFullScreen: true,
			splashImmersive: true,
			layoutName: "launch_screen",
			useDialog: true,
		},
	},
};

export default config;
