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
		karmicChallenge: "Attainment vs Contentment",
		elementIcon: faSpaceShuttle,
		iconColor: "#68169e",
		traits: [
			"Visionary",
			"Self-Reliant",
			"Restless",
			"Detached",
			"Wealth-Driven",
			"Hollowness",
			"Deep Thinker",
		],
	},
	{
		firstName: "Anant",
		lastName: "Reddy",
		gender: Gender.Male,
		element: "ether",
		karmicChallenge: "Attainment vs Contentment",
		elementIcon: faSpaceShuttle,
		iconColor: "#68169e",
		traits: [
			"Visionary",
			"Self-Reliant",
			"Restless",
			"Detached",
			"Wealth-Driven",
			"Hollowness",
			"Deep Thinker",
		],
	},
	{
		firstName: "Anika",
		lastName: "Roy",
		gender: Gender.Female,
		element: "air",
		karmicChallenge: "Knowledge vs Action",
		elementIcon: faWind,
		iconColor: "#365075",
		traits: [
			"Aloof",
			"Overthinker",
			"Free Spirited",
			"Observant",
			"Highly Intellectual",
			"Stubborn",
			"Indecisive",
		],
	},
	{
		firstName: "Samir",
		lastName: "Malhotra",
		gender: Gender.Male,
		element: "air",
		karmicChallenge: "Knowledge vs Action",
		elementIcon: faWind,
		iconColor: "#365075",
		traits: [
			"Aloof",
			"Overthinker",
			"Free Spirited",
			"Observant",
			"Highly Intellectual",
			"Stubborn",
			"Indecisive",
		],
	},
	{
		firstName: "Bhumi",
		lastName: "Patel",
		gender: Gender.Female,
		element: "earth",
		karmicChallenge: "Sacrifice vs Self Preservation",
		elementIcon: faEarth,
		iconColor: "#877d62",
		traits: [
			"Resilient",
			"Protective",
			"Self-effacing",
			"Resisting Change",
			"Determined",
			"Inflexible",
			"Wise",
		],
	},
	{
		firstName: "Kshitij",
		lastName: "Goyal",
		gender: Gender.Male,
		element: "earth",
		karmicChallenge: "Sacrifice vs Self Preservation",
		elementIcon: faEarth,
		iconColor: "#",
		traits: [
			"Resilient",
			"Protective",
			"Self-effacing",
			"Resisting Change",
			"Determined",
			"Inflexible",
			"Wise",
		],
	},
	{
		firstName: "Jhanvi",
		lastName: "Gulati",
		gender: Gender.Female,
		element: "water",
		karmicChallenge: "Expression vs Stability",
		elementIcon: faWater,
		iconColor: "#61accf",
		traits: [
			"Expressive",
			"Adaptable",
			"Emotional",
			"Conflicted Mind",
			"Empathetic",
			"Fear of Failure",
			"Idealisitc",
		],
	},
	{
		firstName: "Varun",
		lastName: "Dixit",
		gender: Gender.Male,
		element: "water",
		karmicChallenge: "Expression vs Stability",
		elementIcon: faWater,
		iconColor: "#61accf",
		traits: [
			"Expressive",
			"Adaptable",
			"Emotional",
			"Conflicted Mind",
			"Empathetic",
			"Fear of Failure",
			"Idealisitc",
		],
	},
	{
		firstName: "Samaira",
		lastName: "Mehta",
		gender: Gender.Female,
		element: "fire",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faFire,
		iconColor: "#877d62",
		traits: [
			"Career Driven",
			"Dynamic",
			"Fearless",
			"Over-competitive",
			"Short Tempered",
			"Stubborn",
			"Egoistic",
		],
	},
	{
		firstName: "Vikrant",
		lastName: "Ahuja",
		gender: Gender.Male,
		element: "fire",
		karmicChallenge: "Power vs Responsibility",
		elementIcon: faFire,
		iconColor: "#877d62",
		traits: [
			"Career Driven",
			"Dynamic",
			"Fearless",
			"Over-competitive",
			"Short Tempered",
			"Stubborn",
			"Egoistic",
		],
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
		heading: "The Ruthless Success",
		subHeading: "The Unstoppable Titan",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Wealth & Status - Owns multiple businesses, is globally recognized.",
					"Strategic Genius - Knows how to navigate power games with precision.",
					"Security & Influence - No financial worries; your word dictates policies",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"No Genuine Relationships - Everyone around you is either an ally or a pawn.",
					"Emotional Isolation - Power doesn’t erase loneliness.",
					"Endless Paranoia - Success built on lies requires constant vigilance.",
				],
			},
			{
				title: "Lesson",
				subtitle: ["Winning everything means nothing if you lose yourself."],
			},
			{
				title: "Solution",
				subtitle: [
					"You can establish corporate ethics reforms, using his influence to bring change.",
				],
			},
		],
	},
	isolatedWanderer: {
		heading: "The Isolated Wanderer",
		subHeading: "The lost seeker",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Ultimate Freedom - No obligations, no corporate chains.",
					"Spiritual Enlightenment - You gain profound wisdom and clarity.",
					"Inner Peace - Free from ego-driven ambition.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Material Instability - No steady income or financial security",
					"Distant from Society - Hard for others to relate to you.",
					"Uncertain Legacy - Your work may be forgotten.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Sometimes, real wisdom comes from stepping away from illusions of power.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"Teach Others - You can combine your corporate knowledge with your wisdom to help lost souls.",
				],
			},
		],
	},
	brokenMartyr: {
		heading: "The Broken Martyr",
		subHeading: "Selfless but forgotten",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Moral Integrity - You never compromised your principles.",
					"Realized Who your True Friends Are - Meera and a few others stay by your side.",
					"Positive Impact - You help small businesses and ethical ventures.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Financial Struggles - Lacks funding and corporate security.",
					"Limited Reach - Change happens in small circles, not on a global scale.",
					"Self-Doubt - Sometimes wonders if you made the right choice",
				],
			},
			{
				title: "Lesson",
				subtitle: ["True impact often comes from small but meaningful changes"],
			},
			{
				title: "Solution",
				subtitle: [
					"You can use your past connections to scale your ethical work without compromising values.",
				],
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
					"Burned Bridges - No allies remain - you're completely alone.",
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
		heading: "The Balanced Enlightenment",
		subHeading: "The harmonized soul",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Respect and control - You gain a respected position in the art industry while keeping creative control.",
					"Balanced stability - You thrive creatively without compromising and also find financial stability.",
					"Inspires and valued - You become a mentor to young artists, ensuring that true creativity thrives and also keeps relationships intact.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Walk on tightrope - Constantly under scrutiny, as both corporate and underground circles question your neutrality.",
					"Creative conflicts - You're constantly torn between freedom and funding, forcing you to make tough calls frequently",
					"Less fulfilled - Never achieves total artistic freedom, but also never lose yourself to the system.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"True success comes from knowing when to fight and when to compromise.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"You with the help of your negotiation skills can create a space for other struggling artists in mainstream platforms.",
				],
			},
		],
	},
	ruthlessSuccess: {
		heading: "The Ruthless Success",
		subHeading: "The unstoppable Titan",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Mainstream recognition - You become a famous, wealthy artist, receiving global recognition.",
					"Financial stability - You gain exclusive sponsorships and permanent exhibits in prestigious galleries.",
					"Influential figure - You've power and influence in the art world",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Become a pawn- Trapped in a system that you once fought against",
					"Loss of originality -  Creatively unfulfilled, producing what sells rather than what you love.",
					"Isolation - All personal relationships are affected.",
				],
			},
			{
				title: "Lesson",
				subtitle: ["Art and commerce rarely mix without sacrifice."],
			},
			{
				title: "Solution",
				subtitle: [
					"If you use your wealth to support underground artists, you can rebuild your lost connections",
				],
			},
		],
	},
	isolatedWanderer: {
		heading: "The Isolated Wanderer",
		subHeading: "The lost seeker",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Total artistic integrity - no compromises, no censorship.",
					"Self-sufficient - You rely on small but loyal patrons.",
					"Inner peace - You find peace in solitude, away from the politics of the industry",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"No recognition - Forgotten by the larger art world.",
					"Financial instability - Constantly struggling to sustain herself.",
					"A fading identity - Isolated from friends and past connections, as you choose solitude over social ties.",
				],
			},
			{
				title: "Lesson",
				subtitle: ["Freedom comes at the cost of comfort and stability."],
			},
			{
				title: "Solution",
				subtitle: ["Freedom comes at the cost of comfort and stability."],
			},
		],
	},
	brokenMartyr: {
		heading: "The Broken Martyr",
		subHeading: "Selfless but forgotten",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Gain significance from communities - In time, people recognize your fight and sacrifice.",
					"Makes art your powerful tool - You make powerful works of art that become legendary over time.",
					"Respect - You gain respect from other struggling artists",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Severe burnout and exhaustion - You become emotionally exhausted, disconnected from personal relationships.",
					"Financial instability - The industry blacklists you making you difficult to make ends meet.",
					"Career stagnation - You continue struggling and your name is blacklisted making you difficult to rise.",
				],
			},
			{
				title: "Lesson",
				subtitle: ["Sometimes, truth is a lonely road"],
			},
			{
				title: "Solution",
				subtitle: [
					"The younger and newer artists help your work getting recognised",
				],
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
					"Influential figure - You gain massive influence, seen as a leader in the art world.",
					"Has global recognition - You become a known figure in the industry making your art reach to big people.",
					"Financially stable - You no longer need to struggle",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Loss of power - Your original voice is completely erased.",
					"Seen as a puppet - You realize too late that you're a puppet. Once the group using you is done, you're discarded.",
					"Becomes distant - Everyone tries to warn you but you ignore them",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Being part of a movement means nothing if you don’t control your own voice",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"You eventually break away, but has to start from scratch, fighting to reclaim your own voice.",
				],
			},
		],
	},
};

export const AirEndings: Record<EndingKeys, Ending> = {
	balancedEnlightenment: {
		heading: "The Balanced Enlightenment",
		subHeading: "The harmonized soul",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Inner peace - You pursue your career without compromising on your relationships, making you stress free. ",
					"Balanced stability - You excel intellectually without isolating yourself emotionally.",
					"Respected and valued - You're both respected for your intellect and valued for your emotional wisdom.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Mild emotional detachment - You never fully let go of your need for control over emotions.",
					"Difficulty in balance- You're not always able to make time for your closed ones, leading to subtle rifts.",
					"Compromises in ambition - You achieve success, but not at the highest level you could have.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Balance is not about choosing one side; it is about knowing when to give and when to hold back.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"You learn emotional regulation to ensure you do not fall into old habits of emotional detachment, setting clear boundaries",
				],
			},
		],
	},
	ruthlessSuccess: {
		heading: "The Ruthless Success",
		subHeading: "The unstoppable Titan",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Intellectual mastery and career dominance - You are revered in your field, becoming an influential figure.",
					"Freedom from emotional burdens - No one can hold you back or emotionally manipulate you.",
					"Influence over society - Your work impacts the world, shaping future generations",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Complete emotional isolation - You lose meaningful connections with Anaya and your family and friends",
					"An underlying emptiness - Success feels hollow without people to share it with.",
					"No safe space for vulnerability - You've no one to confide in when you struggle internally",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"To conquer the world, sometimes you must leave pieces of yourself behind.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"You can actively seek reconnection mending your relationships over time although it would take effort but your respect would increase more.",
				],
			},
		],
	},
	isolatedWanderer: {
		heading: "The Isolated Wanderer",
		subHeading: "The lost seeker",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Absolute freedom - You're no longer tied to expectations, relationships, or societal norms.",
					"Endless self-exploration - You can reinvent yourself as you see fit.",
					"Escape from past burdens - You don't have to deal with the weight of your previous life.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Eternal restlessness - You keep searching but never truly finds meaning or peace",
					"No deep relationships - Everyone from your past either move on or forget about you.",
					"A fading identity - Without a stable presence, your legacy and impact on the world weaken over time.",
				],
			},
			{
				title: "Lesson",
				subtitle: ["Running from the world does not free you from yourself."],
			},
			{
				title: "Solution",
				subtitle: [
					"You can still start over - not as an intellectual, not as a caretaker, but as an observer, slowly learning to engage with the world again freshly.",
				],
			},
		],
	},
	brokenMartyr: {
		heading: "The Broken Martyr",
		subHeading: "Selfless but forgotten",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Loved and needed by everyone - Anaya, Avantika, your family, friends cherish you and rely on you deeply.",
					"Respected for your sacrifices - You're remembered as a kind soul who gave everything for others.",
					"A lasting emotional impact - Your kindness shapes the lives of those you helped.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Severe burnout and exhaustion - You lose yourself while taking care of others.",
					"Your own dreams remain unfulfilled - You never get the chance to pursue your own goals.",
					"People take you for granted - No one realizes how much you're suffering until it’s too late.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Even the strongest bridges collapse when no one holds them up",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"If realised, you can still step away, setting boundaries for your own good.",
				],
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
					"No more obligations - You're free from relationships, responsibilities, and societal expectations.",
					"Emotional self-preservation - You no longer have to deal with the pain of being used or misunderstood.",
					"A complete restart - You can build a new life with the support of you career if you choose to.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Total erasure from your past life - Anaya, your partner and family stop reaching out to you, assuming you're gone forever.",
					"Loneliness and regret - Even though you wanted freedom, a part of you misses the connections you once had.",
					"A life of anonymity - Your intellect, relationships, and past influence are all forgotten",
				],
			},
			{
				title: "Lesson",
				subtitle: ["Sometimes, the only way to stop the pain is to disappear"],
			},
			{
				title: "Solution",
				subtitle: [
					"You can return back to your old life by attempting to make small, careful interactions and not involving too much of yourself.",
				],
			},
		],
	},
};

export const EarthEndings: Record<EndingKeys, Ending> = {
	balancedEnlightenment: {
		heading: "The Balanced Enlightenment",
		subHeading: "The Harmonized Soul",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Satisfied Success- You retain credibility as a true journalist",
					"Balanced relationships - You keep your relationships intact while juggling.",
					"Inner Peace - No guilt over unethical choices",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Slow progress - Faces constant conflict wondering if you compromised too much",
					"Division of opinions - Some see you as too passive while others see you as radical.",
					"Self-Doubt - Although your work is making an impact, it is not reaching to scale you dreamed.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Balance is difficult, but it provides stability and peace. Some compromises are necessary, but not at the cost of one's soul.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"You can build alliances with independent media groups to maintain credibility while still having a mainstream presence",
				],
			},
		],
	},
	ruthlessSuccess: {
		heading: "The Ruthless Success",
		subHeading: "The unstoppable titan",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Control and Success - Unmatched influence and financial stability.",
					"Strategic Handling - Ability to shape society in subtle ways strategically.",
					"Security & Respect - No financial worries; respected by high profile people",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"No Genuine Relationships - Your personal relationships are affected; your old allies no longer trust you",
					"Endless guilt - Constant ethical dilemmas over justice and personal gain.",
					"No inner peace - You've all the power that you require but your mind never finds peace",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Power is not evil, but it always comes at the cost of something else",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"Redefine power as a tool for subtle reform. You can use your influence to shift narratives slowly - introducing truth in controlled ways.",
				],
			},
		],
	},
	isolatedWanderer: {
		heading: "The Isolated Wanderer",
		subHeading: "The lost seeker",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Ultimate Freedom - You gain ethical purity, never sold out.",
					"Truth fully uncovered - Truth is exposed fully, leading to some justice.",
					"Inner Peace - Freedom from journalistic control, allowing full creative independence.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Financial Instability - Struggles to keep yourself stable and secure",
					"Distant from Society - Lose contact with many people from your past, including your partner.",
					"Emotional stress - Work alone with limited reach.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Absolute truth has a cost. The world doesn’t always reward honesty.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"Teach Others - You can build network instead of rejecting the system entirely by finding like-minded allies",
				],
			},
		],
	},
	brokenMartyr: {
		heading: "The Broken Martyr",
		subHeading: "Selfless but forgotten",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Social change - You exposed the corruption and changed the system.",
					"Recognition - You earn respect as an uncompromising truth-seeker.",
					"Becomes a role model - You inspire future generations to fight for the truth",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Struggled Life - You lose all financial security, your personal relationships.",
					"Physical and emotional toll: Your body and spirit are broken by the relentless work and sacrifice. ",
					"Disturbed state of mind - Despite the success, you're constantly in ambiguity.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Self-sacrifices shape the world, but the cost of heroism can be too high.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"Instead of burning out, you can mentor young journalists who will carry your mission forward while you regain strength.",
				],
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
					"Brutal Clarity - Learns the true nature of journalism world.",
					"Freedom from Corruption - No longer trapped in a toxic system.",
					"Chance for Redemption - Can still rebuild, but differently.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Career Collapse - You're turned away by many industries naming you as a fraud and traitor.",
					"Relationships crumble- All your once allies and your partner get distant from you due to your condition.",
					"Self-doubt - Occasionally confronted with the thoughts of justifying your decisions.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Walking away can be an act of wisdom or cowardice - it depends on how one chooses to live afterward.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"Find purpose outside of journalism by contributing in different ways without being in the direct line of fire",
				],
			},
		],
	},
};

export const EtherEndings: Record<EndingKeys, Ending> = {
	balancedEnlightenment: {
		heading: "The Balamced Enlightenent",
		subHeading: "The Harmonized Soul",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Inner Peace - You feel content, knowing your success has meaning.",
					"Healthy Relationships - You've friends, family, and a loving partner who respect you.",
					"Sustained Success - Your career thrives without resorting to unethical practices",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Unfulfilled ‘What-Ifs’ - You wonder whether you could have achieved more if you had taken riskier paths.",
					"Less Power - You aren't at the very top of the corporate world and sometimes struggles against unethical competitors.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Success isn’t about reaching the highest peak; it’s about building a mountain you can live on.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"You can set clear boundaries for what you’re willing to sacrifice.",
				],
			},
		],
	},
	ruthlessSuccess: {
		heading: "The Ruthless Success",
		subHeading: "The unstoppable Titan",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Unlimited Power - You dictate global markets and command respect (or fear).",
					"Extreme Wealth - You never worry about money again.",
					"Legacy of Influence - Your name is etched in financial history.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Constant Paranoia - You can’t tell friend from enemy—everyone is a potential threat.",
					"No Genuine Love or Trust - Your relationships are transactional, lacking real emotional depth.",
					"Moral Corruption - You slowly lose sight of who you were once.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"A throne built on power alone is never truly safe—it only takes one stronger player to take it away",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"Redirect your power towards meaningful impact and diversify your power by building alliances, not just dominance.",
				],
			},
		],
	},
	isolatedWanderer: {
		heading: "The Isolated Wanderer",
		subHeading: "The lost seeker",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Spiritual Growth - You understand yourself more than ever.",
					"Freedom - No obligations, no corporate chains—just adventure and learning.",
					"Profound Experiences - You see and understand the world in a way few others do.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"No Stability - You've no financial security and sometimes struggles to survive",
					"No Deep Connections - You move on too often to form lasting relationships.",
					"Eternal Restlessness - You never truly find ‘home’—you're always searching.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"The journey of self-discovery is endless - be sure you're not just running away while searching for meaning",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"Create a sustainable way to live while still exploring while maintaining one anchor in your life.",
				],
			},
		],
	},
	brokenMartyr: {
		heading: "The Broken Martyr",
		subHeading: "Selfless but forgotten",
		content: [
			{
				title: "Rewards",
				subtitle: [
					"Unshakable Integrity - You never compromised your ethics.",
					"Respected as a Symbol - People admire your principles.",
					"Personal Satisfaction - You know you never sold out.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Financial Struggles - You're left with nothing, barely surviving.",
					"Lack of Influence - You've no real power to change things at a larger level.",
					"Bitterness Over Being Forgotten - Society moves on, leaving you behind.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"Standing by your beliefs is noble - but sometimes, change requires playing the game, not walking away from it.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"Connect with others who share your values and build something together. Find ways to create influence without self-destruction.",
				],
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
					"Unmatched Financial Power - You can buy anything, control markets, and shape industries.",
					"Influence in the Dark - You're a key player behind global power structures.",
					"Survival at Any Cost - You will never be taken down easily.",
				],
			},
			{
				title: "Punishment",
				subtitle: [
					"Total Isolation - No real friends, no family—just shadows.",
					"No Inner Peace - Haunted by the lives you destroyed, unable to truly trust anyone.",
					"Eventual Downfall - A lifetime of betrayals means someone is always waiting to strike back.",
				],
			},
			{
				title: "Lesson",
				subtitle: [
					"If you betray everything to win, don’t be surprised when you have no one left to celebrate with.",
				],
			},
			{
				title: "Solution",
				subtitle: [
					"Use your resources to create something meaningful beyond personal gain.",
				],
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
