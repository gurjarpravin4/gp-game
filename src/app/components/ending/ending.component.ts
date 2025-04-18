import { Component, effect, HostBinding, inject } from "@angular/core";
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
	scene = this.storyController.currentScene;
	star: IconDefinition = faStar;
	finalEnding!: Ending;
	finalKarmaPoints = 0;
	finalEmotionalCore = 0;
	nextScene!: number;

	constructor() {
		// update next scene whenever the scene changes
		effect(() => {
			// typecast the data from the json to a number else give 0
			this.nextScene = Number(this.scene()?.links[0].to);
		});
		this.finalKarmaPoints = this.storyController.karmaPoints() ?? 0;
		this.finalEmotionalCore = this.storyController.emotionalCore() ?? 0;
		this.getFinalEnding();
		console.log("Final Ending", this.finalEnding);
	}

	@HostBinding("class.scene-wrapper") get SceneWrapper() {
		return true;
	}

	@HostBinding("class.fade-in") get FadeIn() {
		return true;
	}

	getPlayerImage(): string {
		const player = this.gameState.Player();
		return `/images/profile/${player?.firstName}.png`;
	}

	getElementIconURL(): string {
		const player = this.gameState.Player();
		return `/images/game-currency-icons/${player?.element}.png`;
	}

	inRange(points: number, min: number, max: number): boolean {
		return points >= min && points <= max;
	}

	// shadowedOutcast : -35 <= karmaPoints <= -25 & 25 <= emotionalCore <= 35
	// brokenMartyr: -20 <= karmaPoints <= -5 & 5 <= emotionalCore <= 30
	// isolatedWanderer: -5 <= karmaPoints <= 10 & 15 <= emotionalCore <= 25
	// balancedEnlightenment: 5 <= karmaPoints <= 25 & -5 <= emotionalCore <= 10
	// ruthlessSuccess: 25 <= karmaPoints <= 35 & -35 <= emotionalCore <= -20

	getFinalEnding() {
		if (
			this.inRange(this.finalKarmaPoints, -35, -25) &&
			this.inRange(this.finalEmotionalCore, 25, 35)
		)
			this.finalEnding = this.gameState.elementEndings["shadowedOutcast"];
		else if (
			this.inRange(this.finalKarmaPoints, -20, -5) &&
			this.inRange(this.finalEmotionalCore, 5, 30)
		)
			this.finalEnding = this.gameState.elementEndings["brokenMartyr"];
		else if (
			this.inRange(this.finalKarmaPoints, -5, 10) &&
			this.inRange(this.finalEmotionalCore, 15, 25)
		)
			this.finalEnding = this.gameState.elementEndings["isolatedWanderer"];
		else if (
			this.inRange(this.finalKarmaPoints, 5, 25) &&
			this.inRange(this.finalEmotionalCore, -15, 10)
		)
			this.finalEnding = this.gameState.elementEndings["balancedEnlightenment"];
		else if (
			this.inRange(this.finalKarmaPoints, 25, 35) &&
			this.inRange(this.finalEmotionalCore, -35, -20)
		)
			this.finalEnding = this.gameState.elementEndings["ruthlessSuccess"];
	}
}
