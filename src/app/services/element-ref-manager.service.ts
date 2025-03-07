import {
	ElementRef,
	inject,
	Injectable,
	Renderer2,
	RendererFactory2,
} from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ElementRefManagerService {
	renderer!: Renderer2;
	redererFactory2 = inject(RendererFactory2);

	constructor() {
		this.renderer = this.redererFactory2.createRenderer(null, null);
	}

	addClass(element: ElementRef, className: string) {
		this.renderer.addClass(element.nativeElement, className);
	}

	removeClass(element: ElementRef, className: string) {
		this.renderer.removeClass(element.nativeElement, className);
	}
}
