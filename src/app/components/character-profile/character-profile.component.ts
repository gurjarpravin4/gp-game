import { Component, EventEmitter, Input, Output, signal } from "@angular/core";
import { FemaleCharacter, MaleCharacter } from "../../enums/game-enums";

@Component({
	selector: "app-character-profile",
	imports: [],
	templateUrl: "./character-profile.component.html",
	styleUrl: "./character-profile.component.css",
})
export class CharacterProfileComponent {
	imgUrl = signal("");

	@Input({ required: true })
	name!: MaleCharacter | FemaleCharacter;

	@Input({ required: true })
	shadowColor!: string;

	@Output()
	selected = new EventEmitter<MaleCharacter | FemaleCharacter>();

	onSelected() {
		this.selected.emit(this.name);
	}

	ngOnInit() {
		this.imgUrl.set(`images/profile/${this.name}.png`);
	}
}
