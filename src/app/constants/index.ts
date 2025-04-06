import {
	faEarth,
	faFire,
	faSpaceShuttle,
	faWater,
	faWind,
} from "@fortawesome/free-solid-svg-icons";
import { Player } from "../interfaces/types";
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
		traits: ["trait1", "trait2", "trait3"],
	},
	{
		firstName: "Anant",
		lastName: "Reddy",
		gender: Gender.Male,
		element: "ether",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faSpaceShuttle,
		iconColor: "#68169e",
		traits: ["trait1", "trait2", "trait3"],
	},
	{
		firstName: "Anika",
		lastName: "Roy",
		gender: Gender.Female,
		element: "air",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faWind,
		iconColor: "#365075",
		traits: ["trait1", "trait2", "trait3"],
	},
	{
		firstName: "Bhumi",
		lastName: "Patel",
		gender: Gender.Female,
		element: "earth",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faEarth,
		iconColor: "#877d62",
		traits: ["trait1", "trait2", "trait3"],
	},
	{
		firstName: "Jhanvi",
		lastName: "Gulabi",
		gender: Gender.Female,
		element: "water",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faWater,
		iconColor: "#61accf",
		traits: ["trait1", "trait2", "trait3"],
	},
	{
		firstName: "Kshitij",
		lastName: "Goyal",
		gender: Gender.Male,
		element: "earth",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faEarth,
		iconColor: "#",
		traits: ["trait1", "trait2", "trait3"],
	},
	{
		firstName: "Samaira",
		lastName: "Mehta",
		gender: Gender.Female,
		element: "fire",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faFire,
		iconColor: "#877d62",
		traits: ["trait1", "trait2", "trait3"],
	},
	{
		firstName: "Samir",
		lastName: "Malhotra",
		gender: Gender.Male,
		element: "air",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faWind,
		iconColor: "#365075",
		traits: ["trait1", "trait2", "trait3"],
	},
	{
		firstName: "Varun",
		lastName: "Dixit",
		gender: Gender.Male,
		element: "water",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faWater,
		iconColor: "#61accf",
		traits: ["trait1", "trait2", "trait3"],
	},
	{
		firstName: "Vikrant",
		lastName: "Ahuja",
		gender: Gender.Male,
		element: "fire",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faFire,
		iconColor: "#877d62",
		traits: ["trait1", "trait2", "trait3"],
	},
];
