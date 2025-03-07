import { Component, inject } from "@angular/core";
import { GameStateService } from "../../services/game-state.service";

@Component({
	selector: "app-splash-screen",
	imports: [],
	templateUrl: "./splash-screen.component.html",
	styles: ``,
})
export class SplashScreenComponent {
	gameState = inject(GameStateService);
}
