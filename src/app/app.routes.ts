import { Routes } from "@angular/router";
import { GenderSelectComponent } from "./screens/gender-select/gender-select.component";
import { CharacterSelectComponent } from "./screens/character-select/character-select.component";
import { GameHomeComponent } from "./screens/game-home/game-home.component";
import { StoryContainerComponent } from "./screens/story-container/story-container.component";
import { EndingComponent } from "./components/ending/ending.component";

export const routes: Routes = [
	{ path: "gender-select", component: GenderSelectComponent },
	{ path: "character-select", component: CharacterSelectComponent },
	{ path: "", component: GameHomeComponent },
	{ path: "story-container", component: StoryContainerComponent },
	{ path: "ending", component: EndingComponent },
];
