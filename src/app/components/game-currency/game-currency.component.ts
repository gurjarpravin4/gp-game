import { Component, inject } from "@angular/core";
import { StoryControllerService } from "../../services/story-controller.service";
import { GameStateService } from "../../services/game-state.service";

@Component({
	selector: "app-game-currency",
	imports: [],
	templateUrl: "./game-currency.component.html",
	styleUrl: "./game-currency.component.css",
})
export class GameCurrencyComponent {
	storyController = inject(StoryControllerService);
	gameState = inject(GameStateService);

	getElementIcon(): string {
		const player = this.gameState.Player();
		return `/icons/${player?.element}.png`;
	}
}
