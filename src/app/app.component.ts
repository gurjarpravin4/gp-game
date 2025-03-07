import { Component, inject, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Preferences } from "@capacitor/preferences";
import { GameStateService } from "./services/game-state.service";
import { SplashScreenComponent } from "./screens/splash-screen/splash-screen.component";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, SplashScreenComponent],
	templateUrl: "./app.component.html",
	styles: [],
})
export class AppComponent {
	gameState = inject(GameStateService);
	title = "gp-game";

	constructor() {
		this.gameState.setIsLoaded(false);
        console.log("timer running, splash screen should be displayed");
		console.log(this.gameState.isLoaded());
		setTimeout(() => {
            console.log("timer over, splash screen should no longer be displayed");
			this.gameState.setIsLoaded(true);
			console.log(this.gameState.isLoaded());
		}, 3000);
	}
}
