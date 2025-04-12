import { Component, Input } from "@angular/core";

@Component({
	selector: "app-trait",
	imports: [],
	templateUrl: "./trait.component.html",
	styleUrl: "./trait.component.css",
})
export class TraitComponent {
	@Input({ required: true })
	trait!: string;
}
