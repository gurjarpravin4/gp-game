import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { Observable } from "rxjs";
import { Passage, Story } from "../interfaces/types";
import { FemaleCharacter, Keys, MaleCharacter } from "../enums/game-enums";
import { Preferences } from "@capacitor/preferences";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class StoryControllerService {
	constructor() {}
	http = inject(HttpClient);
	router = inject(Router);

	story = signal<Story | null>(null);
	currentPassageId = signal<string | undefined>("");
	currentPassage = signal<Passage | undefined>(undefined);
	karmaMeter = signal<number>(0);
	maxTotalKarma = signal<number>(0);
	divWidthPercent = signal<number | undefined>(50);

	calculateDivWidthPercent() {
		const maxKarma = this.maxTotalKarma() ?? 100;
		let newWidth = 50;
		if (this.karmaMeter() != 0) newWidth += (this.karmaMeter() / maxKarma) * 50;

		console.log(this.karmaMeter(), newWidth);
		this.divWidthPercent.set(newWidth);
	}

	async getCurrentPassageId() {
		// try to fetch current passage id from capacitor
		const pIdString = (await Preferences.get({ key: Keys.currentPassageId }))
			.value;

		// if not found set it to 1 by default
		if (!pIdString) this.currentPassageId.set("1");
		// if found update the signal
		else this.currentPassageId.set(pIdString);
	}

	async setCurrentPassageId(id: string) {
		// update the signal
		this.currentPassageId.set(id);
		// update the capacitor storage
		await Preferences.set({ key: Keys.currentPassageId, value: id });
	}

	async getKarmaMeter() {
		// Fetch the karma meter from capacitor
		let kString = (await Preferences.get({ key: Keys.karmaMeter })).value;
		// typecast it back to number and update the signal variable
		this.karmaMeter.set(Number(kString));
	}

	async setKarmaMeter(karmaPoints: number) {
		// update the signal
		this.karmaMeter.update((oldKarma) => oldKarma + karmaPoints);
		// update capacitor storage
		await Preferences.set({
			key: Keys.karmaMeter,
			value: this.karmaMeter().toString(),
		});

		// calculate new div width based on updated karma
		this.calculateDivWidthPercent();
	}

	goToPassage(id: string | undefined, karmaPoints: number) {
		// update karma based on choice
		this.setKarmaMeter(karmaPoints);
		// if it is the last passage, navigate to the home page
		if (id === "game-home") this.router.navigateByUrl("");
		// else go to the next passage
		else this.router.navigateByUrl(`story-passage/${id}`);
	}

	getStory(character: MaleCharacter | FemaleCharacter | null) {
		this.http.get<Story>(`stories/${character}.json`).subscribe((data) => {
			this.story.set(data);
			console.log(this.story());
		});
	}

	getCurrentPassage(id: string) {
		this.currentPassage.set(
			this.story()?.passages.find((p) => p.passageId === id)
		);
	}
}
