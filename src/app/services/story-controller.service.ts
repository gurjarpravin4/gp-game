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
	currentPassageId = signal<string | null>("");
	currentPassage = signal<Passage | undefined>(undefined);

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

	goToPassage(id: string | undefined) {
		this.router.navigateByUrl(`story-passage/${id}`);
		console.log("clicked, pId", id);
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
