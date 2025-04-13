import {
	faEarth,
	faFire,
	faSpaceShuttle,
	faWater,
	faWind,
} from "@fortawesome/free-solid-svg-icons";
import { Ending, EndingKeys, Player } from "../interfaces/types";
import { Gender } from "../enums/game-enums";
// w-276, h-552, rad-117px
export const players: Player[] = [
	{
		firstName: "Akshara",
		lastName: "Naidu",
		gender: Gender.Female,
		element: "ether",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faSpaceShuttle,
		iconColor: "#68169e",
		traits: ["trait1", "trait2", "trait3", "trait4", "trait5", "trait6"],
	},
	{
		firstName: "Anant",
		lastName: "Reddy",
		gender: Gender.Male,
		element: "ether",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faSpaceShuttle,
		iconColor: "#68169e",
		traits: ["trait1", "trait2", "trait3", "trait4", "trait5", "trait6"],
	},
	{
		firstName: "Anika",
		lastName: "Roy",
		gender: Gender.Female,
		element: "air",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faWind,
		iconColor: "#365075",
		traits: ["trait1", "trait2", "trait3", "trait4", "trait5", "trait6"],
	},
	{
		firstName: "Bhumi",
		lastName: "Patel",
		gender: Gender.Female,
		element: "earth",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faEarth,
		iconColor: "#877d62",
		traits: ["trait1", "trait2", "trait3", "trait4", "trait5", "trait6"],
	},
	{
		firstName: "Jhanvi",
		lastName: "Gulabi",
		gender: Gender.Female,
		element: "water",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faWater,
		iconColor: "#61accf",
		traits: ["trait1", "trait2", "trait3", "trait4", "trait5", "trait6"],
	},
	{
		firstName: "Kshitij",
		lastName: "Goyal",
		gender: Gender.Male,
		element: "earth",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faEarth,
		iconColor: "#",
		traits: ["trait1", "trait2", "trait3", "trait4", "trait5", "trait6"],
	},
	{
		firstName: "Samaira",
		lastName: "Mehta",
		gender: Gender.Female,
		element: "fire",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faFire,
		iconColor: "#877d62",
		traits: ["trait1", "trait2", "trait3", "trait4", "trait5", "trait6"],
	},
	{
		firstName: "Samir",
		lastName: "Malhotra",
		gender: Gender.Male,
		element: "air",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faWind,
		iconColor: "#365075",
		traits: ["trait1", "trait2", "trait3", "trait4", "trait5", "trait6"],
	},
	{
		firstName: "Varun",
		lastName: "Dixit",
		gender: Gender.Male,
		element: "water",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faWater,
		iconColor: "#61accf",
		traits: ["trait1", "trait2", "trait3", "trait4", "trait5", "trait6"],
	},
	{
		firstName: "Vikrant",
		lastName: "Ahuja",
		gender: Gender.Male,
		element: "fire",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faFire,
		iconColor: "#877d62",
		traits: ["trait1", "trait2", "trait3", "trait4", "trait5", "trait6"],
	},
];

export const FireEndings: Record<EndingKeys, Ending> = {
	balancedEnlightenment: {
		heading: "The Balanced Enlightenment",
		subHeading: "The Harmonized Soul",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Sustainable Success - Career remains stable, without corruption.",
					"Respected Reputation - Seen as a role model in your industry.",
					"Inner Peace - No guilt over unethical choices.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Slow Progress - Ethical change takes years, not days.",
					"Compromise is Exhausting - Constant pushback from unethical forces.",
					"Self-Doubt - Did you give up too much power?",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Balance is the hardest path, but also the most fulfilling.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"Mentorship - By guiding others, you ensure ethical leadership survives beyond you.",
				],
			},
		],
	},
	ruthlessSuccess: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	isolatedWanderer: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	brokenMartyr: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	shadowedOutcast: {
		heading: "The Shadowed Outcast",
		subHeading: "A Victim of ones own choices",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Brutal Clarity - Learns the true nature of corporate survival.",
					"Freedom from Corruption - No longer trapped in a toxic system.",
					"Chance for Redemption - Can still rebuild, but differently.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Career Collapse - Blacklisted from the industry.",
					"Burned Bridges - No allies remain—you're completely alone.",
					"Loss of Identity - Who are you now, without your power?",
				],
			},
			{
				title: "Lesson",
				subtitle: ["Success without ethics eventually self-destructs."],
			},
			{
				title: "Solution",
				subtitle: [
					"Humble Rebuilding - You can start over, learning from your failures.",
				],
			},
		],
	},
};

export const WaterEndings: Record<EndingKeys, Ending> = {
	balancedEnlightenment: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	ruthlessSuccess: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	isolatedWanderer: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	brokenMartyr: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	shadowedOutcast: {
		heading: "The Shadowed Outcast",
		subHeading: "A Victim of ones own choices",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
};

export const AirEndings: Record<EndingKeys, Ending> = {
	balancedEnlightenment: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	ruthlessSuccess: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	isolatedWanderer: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	brokenMartyr: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	shadowedOutcast: {
		heading: "The Shadowed Outcast",
		subHeading: "A Victim of ones own choices",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
};

export const EarthEndings: Record<EndingKeys, Ending> = {
	balancedEnlightenment: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	ruthlessSuccess: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	isolatedWanderer: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	brokenMartyr: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	shadowedOutcast: {
		heading: "The Shadowed Outcast",
		subHeading: "A Victim of ones own choices",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
};

export const EtherEndings: Record<EndingKeys, Ending> = {
	balancedEnlightenment: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	ruthlessSuccess: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	isolatedWanderer: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	brokenMartyr: {
		heading: "",
		subHeading: "",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
	shadowedOutcast: {
		heading: "The Shadowed Outcast",
		subHeading: "A Victim of ones own choices",
		content: [
			{
				title: "Rewards",
				subtitle: [],
			},
			{
				title: "Punishment",
				subtitle: [],
			},
			{
				title: "Lesson",
				subtitle: [],
			},
			{
				title: "Solution",
				subtitle: [],
			},
		],
	},
};

export const Endings: Record<string, Record<EndingKeys, Ending>> = {
	fire: FireEndings,
	water: WaterEndings,
	air: AirEndings,
	earth: EarthEndings,
	ether: EtherEndings,
};
