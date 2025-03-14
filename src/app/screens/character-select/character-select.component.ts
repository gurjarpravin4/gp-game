import { Component, inject } from "@angular/core";
import { GameStateService } from "../../services/game-state.service";
import { Router } from "@angular/router";
import { FemaleCharacter, Gender, MaleCharacter } from "../../enums/game-enums";
import { CharacterProfileComponent } from "../../components/character-profile/character-profile.component";

@Component({
	selector: "app-character-select",
	imports: [CharacterProfileComponent],
	templateUrl: "./character-select.component.html",
	styles: ``,
})
export class CharacterSelectComponent {
	gameState = inject(GameStateService);
	router = inject(Router);
	characters!: MaleCharacter[] | FemaleCharacter[];

	ngOnInit() {
		this.gameState.getGender();
		console.log(this.gameState.gender());
		if (!this.gameState.gender()) this.router.navigateByUrl("gender-select");

		this.characters =
			this.gameState.gender() === Gender.Male
				? Object.values(MaleCharacter)
				: Object.values(FemaleCharacter);
	}

	async selectCharacter(character: MaleCharacter | FemaleCharacter) {
		this.gameState.setCharacter(character);
		this.router.navigateByUrl("/");
		console.log(this.gameState.character());
	}

	navigateBack() {
		this.gameState.removeGender();
		this.router.navigateByUrl("gender-select");
	}
}
