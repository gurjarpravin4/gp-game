import {
	Component,
	ElementRef,
	inject,
	signal,
	ViewChild,
} from "@angular/core";
import { GameStateService } from "../../services/game-state.service";
import { ElementRefManagerService } from "../../services/element-ref-manager.service";

@Component({
	selector: "app-splash-screen",
	imports: [],
	templateUrl: "./splash-screen.component.html",
	styles: ``,
})
export class SplashScreenComponent {
	gameState = inject(GameStateService);
	element = inject(ElementRefManagerService);
	showVideo = false;
	showImage = false;

	async loadSplashScreen() {
		this.gameState.setIsLoaded(false);
		setTimeout(() => (this.showVideo = true), 1500);
		setTimeout(() => {
			this.showVideo = false;
			this.showImage = true;
		}, 3500);
		setTimeout(() => (this.showImage = false), 4200);
		// Delay/ wait time for splash screen, will disappearch after 4.5 sec
		setTimeout(() => this.gameState.setIsLoaded(true), 4500);
	}

	ngAfterViewInit() {
		this.loadSplashScreen();
	}
}
