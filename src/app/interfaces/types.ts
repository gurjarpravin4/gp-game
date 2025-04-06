import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Gender } from "../enums/game-enums";

export interface Player {
	firstName: string | undefined;
	lastName: string | undefined;
	element: Element | undefined;
	karmicChallenge: string | undefined;
	elementIcon: IconDefinition | undefined;
	iconColor: string;
	traits: string[] | undefined;
	gender: Gender | undefined;
}

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
