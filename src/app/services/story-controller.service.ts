import { effect, inject, Injectable, signal } from "@angular/core";
import { Element, Scene, Story } from "../interfaces/types";
import { HttpClient } from "@angular/common/http";
import { GameStateService } from "./game-state.service";
import { FemaleCharacter, Keys, MaleCharacter } from "../enums/game-enums";
import { Preferences } from "@capacitor/preferences";
import { Router } from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class StoryControllerService {
	router = inject(Router);
	http = inject(HttpClient);
	gameState = inject(GameStateService);

	story = signal<Story | undefined>(undefined);
	character = signal<MaleCharacter | FemaleCharacter | undefined>(undefined);
	currentSceneId = signal<number | undefined>(undefined);
	currentScene = signal<Scene | undefined>(undefined);
	karmaPoints = signal<number | undefined>(undefined);
	emotionalCore = signal<number | undefined>(undefined);
	maxKarmaPoints = 100;

	constructor() {
		// load the character which is already saved in the game state service
		this.character.set(this.gameState.character());
		// load the character's story and the current scene
		this.loadStory();
		// Auto-update the scene when sceneId changes
		effect(() => {
			this.getCurrentScene();
			console.log("called from effect");
		});
	}

	loadStory() {
		this.http
			.get<Story>(`stories/${this.gameState.Player()?.firstName}.json`)
			.subscribe((data) => {
				// set the story
				this.story.set(data);
				// get the current scene id
				this.getCurrentSceneId();
				// get karma points
				this.getKarmaPoints();
				// update maxKarmaPoints
				this.maxKarmaPoints = data.maxTotalKarma;
				// get Emotional core
				this.getEmotionalCore();
			});
	}

	// Functions to update capacitor storage
	async setCurrentSceneId(id: number) {
		// if current scene id has to be set to 0 that means the story is over and navigate back to home
		if (id === 0) this.router.navigateByUrl("");
		// update capacitor storage
		await Preferences.set({ key: Keys.currentSceneId, value: id.toString() });
		// update signal value
		this.currentSceneId.set(id);
	}

	async getCurrentSceneId() {
		// try to get it from capacitor storage
		const id = (await Preferences.get({ key: Keys.currentSceneId })).value;
		// update the signal value, need to typecast as it is saved in capacitor storage as a string
		this.currentSceneId.set(Number(id) || 0);
		console.log("scene id", this.currentSceneId());
	}

	async setKarmaPoints(points: number) {
		// calculate the new karma points by adding the newly passed value to the old karmaPoints value
		const newKarma = (this.karmaPoints() ?? 0) + points;
		// update signal value
		this.karmaPoints.set(newKarma);
		// update capacitor storage
		await Preferences.set({
			key: Keys.karmaPoints,
			value: newKarma.toString(),
		});
	}

	async getKarmaPoints() {
		// fetch karma points from ionic storage
		const points = Number(
			(await Preferences.get({ key: Keys.karmaPoints })).value
		);
		// update signal value
		this.karmaPoints.set(points || 0);
		console.log("Karma points", this.karmaPoints());
	}

	async setEmotionalCore(points: number) {
		// calculate the new core points by adding the newly passed value to the old emotionalCore value
		const newCore = (this.emotionalCore() ?? 0) + points;
		// update signal value
		this.emotionalCore.set(newCore);
		// update capacitor storage
		await Preferences.set({
			key: Keys.emotionalCore,
			value: newCore.toString(),
		});
	}

	async getEmotionalCore() {
		// fetch emotionalCore from ionic storage
		const points = Number(
			(await Preferences.get({ key: Keys.emotionalCore })).value
		);
		// update signal value
		this.emotionalCore.set(points || 0);
		console.log("Emotional Core", this.emotionalCore());
	}

	// function to get the current scene
	getCurrentScene() {
		// find the current scene from the story scenes array
		const scene = this.story()?.scenes.find(
			(s) => s.id === this.currentSceneId()
		);
		// update the signal
		this.currentScene.set(scene);
		console.table(this.currentScene());
	}
}
