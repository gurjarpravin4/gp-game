import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Preferences } from "@capacitor/preferences";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
	styles: [],
})
export class AppComponent {
	title = "gp-game";

	fromCapacitorStorage!: boolean;

	constructor() {
		Preferences.set({ key: "isLoaded", value: "true" });

		Preferences.get({ key: "isLoaded" }).then((data) => {
			if (data.value) this.fromCapacitorStorage = data.value == "true";
		});
	}

	getValue() {
		Preferences.get({ key: "isLoaded" }).then((data) => {
			if (data.value) this.fromCapacitorStorage = data.value == "true";
		});
	}

	deleteValue() {
		Preferences.remove({ key: "isLoaded" });
	}
}
