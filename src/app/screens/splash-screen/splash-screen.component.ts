import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { GameStateService } from "../../services/game-state.service";
import { ElementRefManagerService } from "../../services/element-ref-manager.service";
import { Gender } from "../../enums/game-enums";

@Component({
	selector: "app-splash-screen",
	imports: [],
	templateUrl: "./splash-screen.component.html",
	styles: ``,
})
export class SplashScreenComponent {
	gameState = inject(GameStateService);
	element = inject(ElementRefManagerService);

	@ViewChild("welcomeText", { static: false })
	welcomeText!: ElementRef;

	scaleText(element: ElementRef) {
		setTimeout(() => this.element.addClass(element, "scale-150"), 500);
		setTimeout(() => this.element.removeClass(element, "scale-150"), 1000);
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

		this.typewriteText(
			"Welcome to gp-game!",
			this.welcomeText,
			() => this.scaleText(this.welcomeText) // scale after typing is done by using onComplete function
		);
        setTimeout(() => this.gameState.setIsLoaded(true), 3500);
	}


	ngAfterViewInit() {
		this.loadSplashScreen();
	}
}
