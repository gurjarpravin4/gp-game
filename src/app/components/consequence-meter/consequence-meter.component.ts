import { Component, HostBinding, inject, Input, signal } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { StoryControllerService } from "../../services/story-controller.service";
import { ConsequenceMeter, ElementIcon, Scene } from "../../interfaces/types";
import { GameStateService } from "../../services/game-state.service";

@Component({
	selector: "app-consequence-meter",
	imports: [FontAwesomeModule],
	templateUrl: "./consequence-meter.component.html",
	styleUrl: "./consequence-meter.component.css",
})
export class ConsequenceMeterComponent {
	storyController = inject(StoryControllerService);
	gameState = inject(GameStateService);

	@Input()
	type!: ConsequenceMeter;

	@Input()
	icon!: ElementIcon;

	scene = signal<Scene | undefined>(undefined);

	ngOnInit() {
		// initialize the scene
		this.scene = this.storyController.currentScene;

		console.info(this.storyController.karmaPoints());
	}

	getIconPosition(): string {
		return `left: ${this.icon.position}%`;
	}

	// Host binding will apply the karma class defined in css to the host only when input type is karma
	@HostBinding("class.karma") get karmaClass() {
		return this.type === "karma";
	}

	@HostBinding("class.emotional") get emotionalClass() {
		return this.type === "emotional";
	}
}
