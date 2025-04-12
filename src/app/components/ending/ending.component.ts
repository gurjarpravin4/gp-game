import { Component, inject } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faStar, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { GameStateService } from "../../services/game-state.service";
import { StoryControllerService } from "../../services/story-controller.service";
import { Ending } from "../../interfaces/types";

@Component({
	selector: "app-ending",
	imports: [FontAwesomeModule],
	templateUrl: "./ending.component.html",
	styleUrl: "./ending.component.css",
})
export class EndingComponent {
	gameState = inject(GameStateService);
	storyController = inject(StoryControllerService);
	star: IconDefinition = faStar;
	finalEnding!: Ending;

	constructor() {
		this.getFinalEnding();
		console.log("Final Ending", this.finalEnding);
	}

	getPlayerImage(): string {
		const player = this.gameState.Player();
		return `/images/profile/${player?.firstName}.png`;
	}

	getElementIconURL(): string {
		const player = this.gameState.Player();
		return `/images/game-currency-icons/${player?.element}.png`;
	}

	getFinalEnding() {
		switch (this.storyController.karmaPoints()) {
			case -35 || -25 || 25 || 35:
				this.finalEnding = this.gameState.elementEndings["shadowedOutcast"];
				break;
		}
	}
}
