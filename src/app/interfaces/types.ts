export interface Story {
	storyId: string;
	name: string;
	maxTotalKarma: number;
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
