export interface Story {
	storyId: string;
	name: string;
	passages: Passage[];
}

export interface Passage {
	name: string;
	imageURL: string;
	passageId: string;
	text: string;
	links: Link[];
	cleanText: string;
}

export interface Link {
	linkText: string;
	pId: string;
	original: string;
}
