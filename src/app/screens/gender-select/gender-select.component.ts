import { Component, inject } from "@angular/core";
import { GameStateService } from "../../services/game-state.service";
import { Gender } from "../../enums/game-enums";
import { Router } from "@angular/router";

@Component({
	selector: "app-gender-select",
	imports: [],
	templateUrl: "./gender-select.component.html",
	styles: ``,
})
export class GenderSelectComponent {
	gameState = inject(GameStateService);
	router = inject(Router);
	genders: Gender[] = Object.values(Gender);

	async selectGender(gender: string) {
		try {
			await this.gameState.setGender(gender);
			console.log(this.gameState.gender());
			this.router.navigateByUrl("character-select");
		} catch {
			console.log("error");
		}
	}
}
