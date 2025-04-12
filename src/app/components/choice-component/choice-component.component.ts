import { Component, effect, inject } from "@angular/core";
import { StoryControllerService } from "../../services/story-controller.service";
import { Link } from "../../interfaces/types";

@Component({
	selector: "app-choice-component",
	imports: [],
	templateUrl: "./choice-component.component.html",
	styles: ``,
})
export class ChoiceComponentComponent {
	storyController = inject(StoryControllerService);
	scene = this.storyController.currentScene;

	constructor() {}

	handleChoice(choice: Link) {
		// update the karma points based on the choice made
		this.storyController.setKarmaPoints(choice.karmaPoints);
		// update emotionalCore based on choice made
		this.storyController.setEmotionalCore(choice.emotionalCore);
		// update the current scene id (need to typecast is)
		this.storyController.setCurrentSceneId(Number(choice.to));
	}
}
