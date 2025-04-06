import { ElementRef, inject, Injectable, signal } from "@angular/core";
import {
	FemaleCharacter,
	Gender,
	Keys,
	MaleCharacter,
} from "../enums/game-enums";
import { Preferences } from "@capacitor/preferences";
import { Player } from "../interfaces/types";

@Injectable({
	providedIn: "root",
})
export class GameStateService {
	readonly title = "KarmaQuest";
	readonly subtitle = "The game of consequences";
	isLoaded = signal<boolean | undefined>(false);
	gender = signal<Gender | undefined>(undefined);
	character = signal<MaleCharacter | FemaleCharacter | undefined>(undefined);
	Player = signal<Player | undefined>(undefined);

	async setIsLoaded(value: boolean) {
		this.isLoaded.set(value);
		await Preferences.set({ key: Keys.isLoaded, value: value.toString() });
	}

	async setGender(value: string) {
		this.gender.set(value as Gender);
		await Preferences.set({ key: Keys.gender, value: value });
	}

	async setCharacter(value: MaleCharacter | FemaleCharacter) {
		this.character.set(value);
		await Preferences.set({ key: Keys.character, value: value });
		console.log(value);
	}

	async getIsLoaded(key: Keys) {
		this.isLoaded.set((await Preferences.get({ key: key }))?.value == "true");
	}

	async getGender() {
		const genderString = (await Preferences.get({ key: Keys.gender })).value;
		console.log("Gender", genderString);
		// parse a string to an enum
		if (genderString && Object.values(Gender).includes(genderString as Gender))
			this.gender.set(genderString as Gender);
		else this.gender.set(undefined);
	}

	async removeGender() {
		await Preferences.remove({ key: Keys.gender });
		this.gender.set(undefined);
	}

	async getCharacter() {
		const chString = (await Preferences.get({ key: Keys.character })).value;
		console.log("Character", chString);
		if (!chString) {
			this.character.set(undefined);
			return;
		}
		await this.getGender();
		if (
			this.gender() === Gender.Male &&
			Object.values(MaleCharacter).includes(chString as MaleCharacter)
		)
			this.character.set(chString as MaleCharacter);
		else if (
			this.gender() === Gender.Female &&
			Object.values(FemaleCharacter).includes(chString as FemaleCharacter)
		)
			this.character.set(chString as FemaleCharacter);
		else this.character.set(undefined);
	}
}
