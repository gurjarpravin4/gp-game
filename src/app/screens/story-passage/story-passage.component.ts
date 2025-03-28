import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoryControllerService } from "../../services/story-controller.service";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
	selector: "app-story-passage",
	imports: [NavbarComponent],
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

			// get the passage from the story data
			this.storyManager.getCurrentPassage(this.passageId());

			// set the imageUrl
			this.imgURL = this.storyManager.currentPassage()?.imageURL;

			// update the currentPassageId
			this.storyManager.setCurrentPassageId(this.passageId());
			console.log("passageId updated", this.storyManager.currentPassageId());
		});
	}
}
