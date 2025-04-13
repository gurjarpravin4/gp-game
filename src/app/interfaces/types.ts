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
	sceneType: "stage" | "normal" | "choice" | "consequence" | "ending";
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
	emotionalCore: number;
}

export interface ElementIcon {
	iconURL: string;
	position: number;
}

export type Element = "fire" | "water" | "earth" | "air" | "ether" | "hand";

export type ConsequenceMeter = "karma" | "emotional";

export type EndingKeys =
	| "balancedEnlightenment"
	| "ruthlessSuccess"
	| "isolatedWanderer"
	| "brokenMartyr"
	| "shadowedOutcast";

export interface Ending {
	heading: string;
	subHeading: string;
	content: EndingContent[];
}

export interface EndingContent {
	title: "Rewards" | "Punishment" | "Lesson" | "Solution";
	subtitle: string[];
}
