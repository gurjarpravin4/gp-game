import { Component, effect, inject } from "@angular/core";
import { StoryControllerService } from "../../services/story-controller.service";
import { ConsequenceMeterComponent } from "../consequence-meter/consequence-meter.component";

@Component({
	selector: "app-consequence-component",
	imports: [ConsequenceMeterComponent],
	templateUrl: "./consequence-component.component.html",
	styleUrl: "./consequence-component.component.css",
})
export class ConsequenceComponentComponent {
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
