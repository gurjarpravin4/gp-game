import { Component, inject } from "@angular/core";
import { StoryControllerService } from "../../services/story-controller.service";
import { ElementRefManagerService } from "../../services/element-ref-manager.service";

@Component({
	selector: "app-navbar",
	imports: [],
	templateUrl: "./navbar.component.html",
	styles: ``,
})
export class NavbarComponent {
	storyManager = inject(StoryControllerService);
	elRefManager = inject(ElementRefManagerService);

	ngOnInit() {}
}
