import { Component, inject } from "@angular/core";
import { Preferences } from "@capacitor/preferences";
import { Keys } from "../../enums/game-enums";
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
		// get the current passage
		this.storyManager.loadStory();
		// get current karma points
		// get maxTotalKarma if it is undefined, set it to 100 by default
	}

	async clearData() {
		// remove data from ionic storage
		await Preferences.remove({ key: Keys.gender });
		await Preferences.remove({ key: Keys.character });
		await Preferences.remove({ key: Keys.currentSceneId });
		// set the project varaibles as undefined
		this.gameState.gender.set(undefined);
		this.gameState.character.set(undefined);
		this.storyManager.currentSceneId.set(undefined);
		// navigate to home
		this.router.navigateByUrl("gender-select");
	}
}
