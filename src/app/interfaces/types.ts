import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface Story {
	storyId: string;
	name: string;
	maxTotalKarma: number;
	element: Element;
	scenes: Scene[];
}

export interface Scene {
	id: number;
	sceneType: "stage" | "normal" | "choice" | "consequence";
	imageURL?: string;
	title?: string;
	subtitle?: string;
	karmaPoints?: number;
	emotionalCore?: number;
	links: Link[];
}

export interface Link {
	text: string;
	to: string;
	karmaPoints: number;
}

export interface ElementIcon {
	icon: IconDefinition;
	color: string;
	position: number;
}

export type Element = "fire" | "water" | "earth" | "air" | "ether" | "hand";

export type ConsequenceMeter = "karma" | "emotional";
