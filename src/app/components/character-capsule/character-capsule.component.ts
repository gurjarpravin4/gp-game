import { Component, HostBinding, inject } from "@angular/core";
import { GameStateService } from "../../services/game-state.service";

@Component({
	selector: "app-character-capsule",
	imports: [],
	templateUrl: "./character-capsule.component.html",
	styleUrl: "./character-capsule.component.css",
})
export class CharacterCapsuleComponent {
	gamestate = inject(GameStateService);

	// conditionally applies the bg image class depending on the player's element
	@HostBinding("class") get applyElementBgClass() {
		const element = this.gamestate.Player()?.element;
		return element ? `${element}-bg` : "element-not-found";
	}

	// Conditionally return the path of the image depending on the player
	getPlayerImage(): string {
		const playerName = this.gamestate.Player()?.firstName;
		return playerName ? `/images/capsules-images/${playerName}.png` : "";
	}

	// Conditionally return the path of the image depending on the element
	getElementImage(): string {
		const element = this.gamestate.Player()?.element;
		return element ? `/icons/${element}.png` : "";
	}
}
