import { Component, effect, inject } from "@angular/core";
import { StoryControllerService } from "../../services/story-controller.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { faHome, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-stage-component",
	imports: [FontAwesomeModule, RouterModule],
	templateUrl: "./stage-component.component.html",
	styles: ``,
})
export class StageComponentComponent {
	storyController = inject(StoryControllerService);
	scene = this.storyController.currentScene;
	nextScene!: number;

	homeIcon: IconDefinition = faHome;

	constructor() {
		// update next scene whenever the scene changes
		effect(() => {
			// typecast the data from the json to a number else give 0
			this.nextScene = Number(this.scene()?.links?.[0]?.to);
		});
	}
}
