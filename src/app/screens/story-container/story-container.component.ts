import { Component, computed, inject, Signal } from "@angular/core";
import { StoryControllerService } from "../../services/story-controller.service";
import { StageComponentComponent } from "../../components/stage-component/stage-component.component";
import { NormalComponentComponent } from "../../components/normal-component/normal-component.component";
import { ChoiceComponentComponent } from "../../components/choice-component/choice-component.component";
import { ConsequenceComponentComponent } from "../../components/consequence-component/consequence-component.component";

@Component({
	selector: "app-story-container",
	imports: [
		StageComponentComponent,
		NormalComponentComponent,
		ChoiceComponentComponent,
		ConsequenceComponentComponent,
	],
	templateUrl: "./story-container.component.html",
	styles: ``,
})
export class StoryContainerComponent {
	storyController = inject(StoryControllerService);
	// get the current scene from the story controller via a computed signal. the this.currentScene() auto updates as and when the story controller signal changes
	currentScene = computed(() => this.storyController.currentScene());

	ngOnInit() {
		console.log("Current scene from container", this.currentScene());
	}
}
