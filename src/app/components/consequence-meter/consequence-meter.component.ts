import { Component, HostBinding, inject, Input, signal } from "@angular/core";
import { FontAwesomeModule, SizeProp } from "@fortawesome/angular-fontawesome";
import {
	faFire,
	faWater,
	faWind,
	faEarth,
	faSpaceShuttle,
	faHand,
} from "@fortawesome/free-solid-svg-icons";
import { StoryControllerService } from "../../services/story-controller.service";
import {
	ConsequenceMeter,
	Element,
	ElementIcon,
	Scene,
} from "../../interfaces/types";

@Component({
	selector: "app-consequence-meter",
	imports: [FontAwesomeModule],
	templateUrl: "./consequence-meter.component.html",
	styleUrl: "./consequence-meter.component.css",
})
export class ConsequenceMeterComponent {
	storyController = inject(StoryControllerService);

	@Input()
	type!: ConsequenceMeter;

	@Input()
	element!: Element;

	elementIcon!: ElementIcon;

	handIcon!: ElementIcon;

	scene = signal<Scene | undefined>(undefined);

	ngOnInit() {
		// initialize the scene
		this.scene = this.storyController.currentScene;

		console.info(this.storyController.karmaPoints());

		// Initialize the default hand icon
		this.handIcon = {
			icon: faHand,
			color: "neutral-50",
			// position: 25% if emotionalCore<0; 50% if emotionalCore=0; 75% if emotionalCore> 0
			position:
				(this.scene()?.emotionalCore || 0) < 0
					? 25
					: (this.scene()?.emotionalCore || 0) === 0
					? 50
					: 75,
		};
		// Initliaize the elementIcon wrt element
		switch (this.element) {
			case "fire":
				this.elementIcon = {
					icon: faFire,
					color: "orange-600",
					position: 100 - this.handIcon.position,
				};
				break;
			case "water":
				this.elementIcon = {
					icon: faWater,
					color: "blue-600",
					position: 100 - this.handIcon.position,
				};
				break;
			case "earth":
				this.elementIcon = {
					icon: faEarth,
					color: "stone-800",
					position: 100 - this.handIcon.position,
				};
				break;
			case "air":
				this.elementIcon = {
					icon: faWind,
					color: "sky-300",
					position: 100 - this.handIcon.position,
				};
				break;
			case "ether":
				this.elementIcon = {
					icon: faSpaceShuttle,
					color: "slate-900",
					position: 100 - this.handIcon.position,
				};
				break;
			default:
				this.elementIcon = this.handIcon;
				break;
		}
	}

	// Host binding will apply the karma class defined in css to the host only when input type is karma
	@HostBinding("class.karma") get karmaClass() {
		return this.type === "karma";
	}

	@HostBinding("class.emotional") get emotionalClass() {
		return this.type === "emotional";
	}
}
