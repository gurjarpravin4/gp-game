import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoryControllerService } from "../../services/story-controller.service";

@Component({
	selector: "app-story-passage",
	imports: [],
	templateUrl: "./story-passage.component.html",
	styles: ``,
})
export class StoryPassageComponent {
	route = inject(ActivatedRoute);
	storyManager = inject(StoryControllerService);

	passageId = signal<string>("");
	imgURL!: string | undefined;

	ngOnInit() {
		// subscribe to route params so that the component re-initializes when they change
		this.route.params.subscribe((params) => {
			// fetch the passageId from route params
			this.passageId.set(params["passageId"]);
			console.log("passageId", this.passageId());
			// get the passage from the story data
			this.storyManager.getCurrentPassage(this.passageId());
			console.log("passage", this.storyManager.currentPassage());
			// set the imageUrl
			this.imgURL = this.storyManager.currentPassage()?.imageURL;
			// update the currentPassageId
			this.storyManager.setCurrentPassageId(this.passageId());
		});
	}
}
