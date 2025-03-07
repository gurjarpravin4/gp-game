import { Injectable, signal } from "@angular/core";
import {
	FemaleCharacters,
	Gender,
	Keys,
	MaleCharacters,
} from "../enums/game-enums";
import { Preferences } from "@capacitor/preferences";

@Injectable({
	providedIn: "root",
})
export class GameStateService {
	isLoaded = signal<boolean>(false);
	gender = signal<Gender | null>(null);
	character = signal<MaleCharacters | FemaleCharacters | null>(null);

	constructor() {}

	async setIsLoaded(value: boolean) {
		this.isLoaded.set(value);
		await Preferences.set({ key: Keys.isLoaded, value: value.toString() });
	}

	async setGender(value: Gender) {
		this.gender.set(value);
		await Preferences.set({ key: Keys.gender, value: value });
	}

	async setCharacter(value: MaleCharacters | FemaleCharacters) {
		this.character.set(value);
		await Preferences.set({ key: Keys.character, value: value });
	}
}
