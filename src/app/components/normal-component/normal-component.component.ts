import { Component, effect, ElementRef, inject } from "@angular/core";
import { StoryControllerService } from "../../services/story-controller.service";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { faHome, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-normal-component",
	imports: [FontAwesomeModule, RouterModule],
	templateUrl: "./normal-component.component.html",
	styles: ``,
})
export class NormalComponentComponent {
	storyController = inject(StoryControllerService);
	scene = this.storyController.currentScene;
	nextScene!: number;

	next() {
		this.storyController.setCurrentSceneId(this.nextScene);
		this.animate();
	}

	homeIcon: IconDefinition = faHome;
	constructor(private host: ElementRef<HTMLElement>) {
		// update next scene whenever the scene changes
		effect(() => {
			// typecast the data from the json to a number else give 0
			this.nextScene = Number(this.scene()?.links[0].to);
		});
	}

	keyFrames: Keyframe[] = [
		{ transform: "scale(0.98)", opacity: 0 },
		{ transform: "scale(1)", opacity: 1 },
	];

	options: KeyframeAnimationOptions = {
		iterations: 1,
		duration: 400,
		easing: "ease-in-out",
		fill: "forwards",
	};

	animate() {
		this.host.nativeElement.animate(this.keyFrames, this.options);
	}
}
