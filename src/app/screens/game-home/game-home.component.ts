import { Component, inject } from "@angular/core";
import { Preferences } from "@capacitor/preferences";
import { Keys } from "../../enums/game-enums";
import { GameStateService } from "../../services/game-state.service";
import { Router } from "@angular/router";
import { StoryControllerService } from "../../services/story-controller.service";
import { players } from "../../constants";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faPlay, faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { CharacterCapsuleComponent } from "../../components/character-capsule/character-capsule.component";
import { KarmicChallengeComponent } from "../../components/karmic-challenge/karmic-challenge.component";
import { GameCurrencyComponent } from "../../components/game-currency/game-currency.component";
import { TraitComponent } from "../../components/trait/trait.component";

@Component({
	selector: "app-game-home",
	imports: [
		FontAwesomeModule,
		CharacterCapsuleComponent,
		KarmicChallengeComponent,
		GameCurrencyComponent,
		TraitComponent,
	],
	templateUrl: "./game-home.component.html",
	styleUrl: "./game-home.component.css",
})
export class GameHomeComponent {
	gameState = inject(GameStateService);
	storyManager = inject(StoryControllerService);
	router = inject(Router);
	play = faPlay;
	restart = faArrowRotateLeft;

	ngOnInit() {
		// Find the player from the players list whose name is the same as the selected character
		this.gameState.Player.set(
			players.find(
				(p) => p.firstName === this.gameState.character()?.toString()
			)
		);
		console.table(this.gameState.Player());

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
		await Preferences.clear();
		// set the project varaibles as undefined
		this.gameState.gender.set(undefined);
		this.gameState.character.set(undefined);
		this.storyManager.currentSceneId.set(undefined);
		this.gameState.Player.set(undefined);
		// navigate to home
		this.router.navigateByUrl("gender-select");
	}
}
