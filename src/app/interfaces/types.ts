export interface Story {
	storyId: string;
	name: string;
	maxTotalKarma: number;
	passages: Passage[];
}

export interface Passage {
	name: string;
	imageURL: string;
	passageId: string;
	links: Link[];
	text: string;
}

export interface Link {
	linkText: string;
	pId: string;
	karmaPoints: number;
}
