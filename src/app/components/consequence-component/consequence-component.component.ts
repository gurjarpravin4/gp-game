import { Component, effect, inject } from "@angular/core";
import { StoryControllerService } from "../../services/story-controller.service";
import { ConsequenceMeterComponent } from "../consequence-meter/consequence-meter.component";
import { ElementIcon } from "../../interfaces/types";
import { GameStateService } from "../../services/game-state.service";

@Component({
	selector: "app-consequence-component",
	imports: [ConsequenceMeterComponent],
	templateUrl: "./consequence-component.component.html",
	styleUrl: "./consequence-component.component.css",
})
export class ConsequenceComponentComponent {
	storyController = inject(StoryControllerService);
	gameState = inject(GameStateService);
	scene = this.storyController.currentScene;
	nextScene!: number;

	elementIcon!: ElementIcon;
	karmaIcon!: ElementIcon;

	getElementIconURL(): string {
		const player = this.gameState.Player();
		return `/images/game-currency-icons/${player?.element}.png`;
	}

	getKarmaIconPosition(): number {
		if ((this.scene()?.karmaPoints || 0) < 0) return 25;
		else if ((this.scene()?.karmaPoints || 0) > 0) return 75;
		return 50;
	}

	getElementIconPosition(): number {
		return 100 - this.getKarmaIconPosition();
	}

	constructor() {
		// update next scene whenever the scene changes
		effect(() => {
			// typecast the data from the json to a number else give 0
			this.nextScene = Number(this.scene()?.links[0].to);
		});

		console.table(this.scene());
		this.elementIcon = {
			iconURL: this.getElementIconURL(),
			position: this.getElementIconPosition(),
		};

		this.karmaIcon = {
			iconURL: "/images/game-currency-icons/karma.png",
			position: this.getKarmaIconPosition(),
		};

		console.table([this.karmaIcon, this.elementIcon]);
	}
}
