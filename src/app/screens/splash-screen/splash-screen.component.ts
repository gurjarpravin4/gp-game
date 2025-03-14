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
	showSubtitle = signal(false);

	// @ViewChild("titleText", { static: false })
	// titleText!: ElementRef;

	scaleText(element: ElementRef) {
		setTimeout(() => this.element.addClass(element, "scale-[1.1]"), 500);
		setTimeout(() => this.element.removeClass(element, "scale-[1.1]"), 1000);
	}

	typewriteText(text: string, element: ElementRef, onComplete?: () => void) {
		let i = 0;
		const interval = setInterval(() => {
			if (i < text.length) {
				element.nativeElement.innerHTML += text[i];
				i++;
			} else {
				clearInterval(interval);
				if (onComplete) onComplete(); // execute onComplete callback if provided
			}
		}, 75);
	}

	async loadSplashScreen() {
		this.gameState.setIsLoaded(false);
		// Animation for splash screen
		// this.scaleText(this.titleText);
		setTimeout(() => this.showSubtitle.set(true), 1500);
		// Delay/ wait time for splash screen, will disappearch after 3.5 sec
		setTimeout(() => this.gameState.setIsLoaded(true), 2000);

		// this.typewriteText(
		// 	this.gameState.title,
		// 	this.welcomeText,
		// 	() => {
		// 		this.scaleText(this.welcomeText);
		// 		this.showSubtitle.set(true);
		// 	} // scale after typing is done by using onComplete function
		// );
	}

	ngAfterViewInit() {
		this.loadSplashScreen();
	}
}
