import { Component, inject, signal } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
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
	router = inject(Router);
	title = "gp-game";

	async ngOnInit() {
		await this.gameState.getGender();
		await this.gameState.getCharacter();
		console.log(this.gameState.gender(), this.gameState.character());
		if (this.gameState.gender() && this.gameState.character())
			this.router.navigateByUrl("/");
		else this.router.navigateByUrl("gender-select");
	}
}
