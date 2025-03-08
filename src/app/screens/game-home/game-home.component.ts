import { Component, inject } from "@angular/core";
import { Preferences } from "@capacitor/preferences";
import { Keys } from "../../enums/game-enums";
import { GameStateService } from "../../services/game-state.service";

@Component({
	selector: "app-game-home",
	imports: [],
	templateUrl: "./game-home.component.html",
	styles: ``,
})
export class GameHomeComponent {
    gameState = inject(GameStateService)

	async clearData() {
		await Preferences.remove({ key: Keys.gender });
		await Preferences.remove({ key: Keys.character });
        this.gameState.gender.set(null)
        this.gameState.character.set(null)
	}
}
