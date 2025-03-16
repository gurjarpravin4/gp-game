import { Component, inject } from "@angular/core";
import { Preferences } from "@capacitor/preferences";
import { FemaleCharacter, Keys, MaleCharacter } from "../../enums/game-enums";
import { GameStateService } from "../../services/game-state.service";
import { Router } from "@angular/router";
import { StoryControllerService } from "../../services/story-controller.service";

@Component({
	selector: "app-game-home",
	imports: [],
	templateUrl: "./game-home.component.html",
	styles: ``,
})
export class GameHomeComponent {
	gameState = inject(GameStateService);
	storyManager = inject(StoryControllerService);
	router = inject(Router);

	ngOnInit() {
		// get the character's story
		this.storyManager.getStory(this.gameState.character());
		// get the current passage
		this.storyManager.getCurrentPassageId();
		// get current karma points
		this.storyManager.getKarmaMeter();
		// get maxTotalKarma if it is undefined, set it to 100 by default
		this.storyManager.maxTotalKarma.set(
			this.storyManager.story()?.maxTotalKarma ?? 100
		);
	}

	async clearData() {
		await Preferences.remove({ key: Keys.gender });
		await Preferences.remove({ key: Keys.character });
		await Preferences.remove({ key: Keys.currentPassageId });
		this.gameState.gender.set(null);
		this.gameState.character.set(null);
		this.storyManager.setCurrentPassageId("1");
		this.storyManager.setKarmaMeter(-this.storyManager.karmaMeter());
		this.storyManager.divWidthPercent.set(50);
	}
}
