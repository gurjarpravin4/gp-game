import { Component, effect, inject } from "@angular/core";
import { StoryControllerService } from "../../services/story-controller.service";

@Component({
	selector: "app-normal-component",
	imports: [],
	templateUrl: "./normal-component.component.html",
	styles: ``,
})
export class NormalComponentComponent {
	storyController = inject(StoryControllerService);
	scene = this.storyController.currentScene;
	nextScene!: number;

	constructor() {
		// update next scene whenever the scene changes
		effect(() => {
			// typecast the data from the json to a number else give 0
			this.nextScene = Number(this.scene()?.links[0].to);
		});
	}
}
