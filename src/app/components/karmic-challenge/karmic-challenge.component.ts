import { Component, inject } from "@angular/core";
import { GameStateService } from "../../services/game-state.service";

@Component({
	selector: "app-karmic-challenge",
	imports: [],
	templateUrl: "./karmic-challenge.component.html",
	styleUrl: "./karmic-challenge.component.css",
})
export class KarmicChallengeComponent {
	gameState = inject(GameStateService);
}
