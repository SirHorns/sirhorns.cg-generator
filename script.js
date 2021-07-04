var femaleNames = ["Emily", "Hannah", "Madison", "Ashley", "Sarah", "Alexis", "Samantha", "Jessica", "Elizabeth", "Taylor",
    "Lauren", "Alyssa", "Kayla", "Abigail", "Brianna", "Olivia", "Emma", "Megan", "Grace", "Victoria", "Rachel", "Anna", "Sydney",
    "Destiny", "Morgan", "Jennifer", "Jasmine", "Haley", "Julia", "Kaitlyn", "Nicole", "Amanda", "Katherine", "Natalie", "Hailey",
    "Alexandra", "Savannah", "Chloe", "Rebecca", "Stephanie", "Maria", "Sophia", "Mackenzie", "Allison", "Isabella", "Amber", "Mary",
    "Danielle", "Gabrielle", "Jordan", "Brooke", "Michelle", "Sierra", "Katelyn", "Andrea", "Madeline", "Sara", "Kimberly", "Courtney",
    "Erin", "Brittany", "Vanessa", "Jenna", "Jacqueline", "Caroline", "Faith", "Makayla", "Bailey", "Paige", "Shelby", "Melissa",
    "Kaylee", "Christina", "Trinity", "Mariah", "Caitlin", "Autumn", "Marissa", "Breanna", "Angela", "Catherine", "Zoe", "Briana",
    "Jada", "Laura", "Claire", "Alexa", "Kelsey", "Kathryn", "Leslie", "Alexandria", "Sabrina", "Mia", "Isabel", "Molly", "Leah",
    "Katie", "Gabriella", "Cheyenne", "Cassandra", "Tiffany", "Erica", "Lindsey", "Kylie", "Amy", "Diana", "Cassidy", "Mikayla",
    "Ariana", "Margaret", "Kelly", "Miranda", "Maya", "Melanie", "Audrey", "Jade", "Gabriela", "Caitlyn", "Angel", "Jillian",
    "Alicia", "Jocelyn", "Erika", "Lily", "Heather", "Madelyn", "Adriana", "Arianna", "Lillian", "Kiara", "Riley", "Crystal",
    "Mckenzie", "Meghan", "Skylar", "Ana", "Britney", "Angelica", "Kennedy", "Chelsea", "Daisy", "Kristen", "Veronica", "Isabelle",
    "Summer", "Hope", "Brittney", "Lydia", "Hayley", "Evelyn", "Bethany", "Shannon", "Michaela", "Karen", "Jamie", "Daniela",
    "Angelina", "Kaitlin", "Karina", "Sophie", "Sofia", "Diamond", "Payton", "Cynthia", "Alexia", "Valerie", "Monica", "Peyton",
    "Carly", "Bianca", "Hanna", "Brenda", "Rebekah", "Alejandra", "Mya", "Avery", "Brooklyn", "Ashlyn", "Lindsay", "Ava",
    "Desiree", "Alondra", "Camryn", "Ariel", "Naomi", "Jordyn", "Kendra", "Mckenna", "Holly", "Julie", "Kendall", "Kara", "Jasmin",
    "Selena", "Esmeralda", "Amaya", "Kylee", "Maggie", "Makenzie", "Claudia", "Kyra", "Cameron", "Karla", "Kathleen", "Abby", "Delaney",
    "Amelia", "Casey", "Serena", "Savanna", "Aaliyah", "Giselle", "Mallory", "April", "Raven", "Adrianna", "Christine", "Kristina",
    "Nina", "Asia", "Natalia", "Valeria", "Aubrey", "Lauryn", "Kate", "Patricia", "Jazmin", "Rachael", "Katelynn", "Cierra", "Alison",
    "Macy", "Nancy", "Elena", "Kyla", "Katrina", "Jazmine", "Joanna", "Tara", "Gianna", "Juliana", "Fatima", "Allyson", "Gracie", "Sadie"];

var positivePersonalityTraits = ["Accessible", "Active", "Adaptable", "Admirable", "Adventurous", "Agreeable", "Alert",
    "Allocentric", "Amiable", "Anticipative", "Appreciative", "Articulate", "Aspiring", "Athletic", "Attractive", "Balanced",
    "Benevolent", "Brilliant", "Calm", "Capable", "Captivating", "Caring", "Challenging", "Charismatic", "Charming", "Cheerful",
    "Clean", "Clear-headed", "Clever", "Colorful", "Companionly", "Compassionate", "Conciliatory", "Confident", "Conscientious",
    "Considerate", "Constant", "Contemplative", "Cooperative", "Courageous", "Courteous", "Creative", "Cultured", "Curious", "Daring",
    "Debonair", "Decent", "Decisive", "Dedicated", "Deep", "Dignified", "Directed", "Disciplined", "Discreet", "Dramatic", "Dutiful",
    "Dynamic", "Earnest", "Ebullient", "Educated", "Efficient", "Elegant", "Eloquent", "Empathetic", "Energetic", "Enthusiastic",
    "Esthetic", "Exciting", "Extraordinary", "Fair", "Faithful", "Farsighted", "Felicific", "Firm", "Flexible", "Focused", "Forecful",
    "Forgiving", "Forthright", "Freethinking", "Friendly", "Fun-loving", "Gallant", "Generous", "Gentle", "Genuine", "Good-natured",
    "Gracious", "Hardworking", "Healthy", "Hearty", "Helpful", "Herioc", "High-minded", "Honest", "Honorable", "Humble", "Humorous",
    "Idealistic", "Imaginative", "Impressive", "Incisive", "Incorruptible", "Independent", "Individualistic", "Innovative", "Inoffensive",
    "Insightful", "Insouciant", "Intelligent", "Intuitive", "Invulnerable", "Kind", "Knowledge", "Leaderly", "Leisurely", "Liberal",
    "Logical", "Lovable", "Loyal", "Lyrical", "Magnanimous", "Many-sided", "Masculine", "Mature", "Methodical", "Maticulous", "Moderate",
    "Modest", "Multi-leveled", "Neat", "Nonauthoritarian", "Objective", "Observant", "Open", "Optimistic", "Orderly", "Organized", "Original",
    "Painstaking", "Passionate", "Patient", "Patriotic", "Peaceful", "Perceptive", "Perfectionist", "Personable", "Persuasive", "Planful",
    "Playful", "Polished", "Popular", "Practical", "Precise", "Principled", "Profound", "Protean", "Protective", "Providential", "Prudent",
    "Punctual", "Pruposeful", "Rational", "Realistic", "Reflective", "Relaxed", "Reliable", "Resourceful", "Respectful", "Responsible",
    "Responsive", "Reverential", "Romantic", "Rustic", "Sage", "Sane", "Scholarly", "Scrupulous", "Secure", "Selfless", "Self-critical",
    "Self-defacing", "Self-denying", "Self-reliant", "Self-sufficent", "Sensitive", "Sentimental", "Seraphic", "Serious", "Sexy", "Sharing",
    "Shrewd", "Simple", "Skillful", "Sober", "Sociable", "Solid", "Sophisticated", "Spontaneous", "Sporting", "Stable", "Steadfast",
    "Steady", "Stoic", "Strong", "Studious", "Suave", "Subtle", "Sweet", "Sympathetic", "Systematic", "Tasteful", "Teacherly", "Thorough",
    "Tidy", "Tolerant", "Tractable", "Trusting", "Uncomplaining", "Understanding", "Undogmatic", "Unfoolable", "Upright", "Urbane",
    "Venturesome", "Vivacious", "Warm", "Well-bred", "Well-read", "Well-rounded", "Winning", "Wise", "Witty", "Youthful"];

var negativePersonalityTraits = ["Abrasive", "Abrupt", "Agonizing", "Aimless", "Airy", "Aloof", "Amoral", "Angry", "Anxious",
    "Apathetic", "Arbitrary", "Argumentative", "Arrogantt", "Artificial", "Asocial", "Assertive", "Astigmatic", "Barbaric", "Bewildered",
    "Bizarre", "Bland", "Blunt", "Biosterous", "Brittle", "Brutal", "Calculating", "Callous", "Cantakerous", "Careless", "Cautious", "Charmless",
    "Childish", "Clumsy", "Coarse", "Cold", "Colorless", "Complacent", "Complaintive", "Compulsive", "Conceited", "Condemnatory", "Conformist",
    "Confused", "Contemptible", "Conventional", "Cowardly", "Crafty", "Crass", "Crazy", "Criminal", "Critical", "Crude", "Cruel", "Cynical", "Decadent",
    "Deceitful", "Delicate", "Demanding", "Dependent", "Desperate", "Destructive", "Devious", "Difficult", "Dirty", "Disconcerting", "Discontented",
    "Discouraging", "Discourteous", "Dishonest", "Disloyal", "Disobedient", "Disorderly", "Disorganized", "Disputatious", "Disrespectful",
    "Disruptive", "Dissolute", "Dissonant", "Distractible", "Disturbing", "Dogmatic", "Domineering", "Dull", "Easily Discouraged", "Egocentric",
    "Enervated", "Envious", "Erratic", "Escapist", "Excitable", "Expedient", "Extravagant", "Extreme", "Faithless", "False", "Fanatical", "Fanciful",
    "Fatalistic", "Fawning", "Fearful", "Fickle", "Fiery", "Fixed", "Flamboyant", "Foolish", "Forgetful", "Fraudulent", "Frightening", "Frivolous",
    "Gloomy", "Graceless", "Grand", "Greedy", "Grim", "Gullible", "Hateful", "Haughty", "Hedonistic", "Hesitant", "Hidebound", "High-handed", "Hostile",
    "Ignorant", "Imitative", "Impatient", "Impractical", "Imprudent", "Impulsive", "Inconsiderate", "Incurious", "Indecisive", "Indulgent", "Inert",
    "Inhibited", "Insecure", "Insensitive", "Insincere", "Insulting", "Intolerant", "Irascible", "Irrational", "Irresponsible", "Irritable", "Lazy",
    "Libidinous", "Loquacious", "Malicious", "Mannered", "Mannerless", "Mawkish", "Mealymouthed", "Mechanical", "Meddlesome", "Melancholic",
    "Meretricious", "Messy", "Miserable", "Miserly", "Misguided", "Mistaken", "Money-minded", "Monstrous", "Moody", "Morbid", "Muddle-headed",
    "Naive", "Narcissistic", "Narrow", "Narrow-minded", "Natty", "Negativistic", "Neglectful", "Neurotic", "Nihilistic", "Obnoxious", "Obsessive",
    "Obvious", "Odd", "Offhand", "One-dimensional", "One-sided", "Opinionated", "Opportunistic", "Oppressed", "Outrageous", "Overimaginative",
    "Paranoid", "Passive", "Pedantic", "Perverse", "Petty", "Pharissical", "Phlegmatic", "Plodding", "Pompous", "Possessive", "Power-hungry",
    "Predatory", "Prejudiced", "Presumptuous", "Pretentious", "Prim", "Procrastinating", "Profligate", "Provocative", "Pugnacious", "Puritanical",
    "Quirky", "Reactionary", "Reactive", "Regimental", "Regretful", "Repentant", "Repressed", "Resentful", "Ridiculous", "Rigid", "Ritualistic",
    "Rowdy", "Ruined", "Sadistic", "Sanctimonious", "Scheming", "Scornful", "Secretive", "Sedentary", "Selfish", "Self-indulgent", "Shallow",
    "Shortsighted", "Shy", "Silly", "Single-minded", "Sloppy", "Slow", "Sly", "Small-thinking", "Softheaded", "Sordid", "Steely", "Stiff",
    "Strong-willed", "Stupid", "Submissive", "Superficial", "Superstitious", "Suspicious", "Tactless", "Tasteless", "Tense", "Thievish",
    "Thoughtless", "Timid", "Transparent", "Treacherous", "Trendy", "Troublesome", "Unappreciative", "Uncaring", "Uncharitable", "Unconvincing",
    "Uncooperative", "Uncreative", "Uncritical", "Unctuous", "Undisciplined", "Unfriendly", "Ungrateful", "Unhealthy", "Unimaginative",
    "Unimpressive", "Unlovable", "Unpolished", "Unprincipled", "Unrealistic", "Unreflective", "Unreliable", "Unrestrained", "Unself-critical",
    "Unstable", "Vacuous", "Vague", "Venal", "Venomous", "Vindictive", "Vulnerable", "Weak", "Weak-willed", "Well-meaning", "Willful", "Wishful", "Zany"];

var neutralPersonalityTraits = ["Absentminded", "Aggressive", "Ambitious", "Amusing", "Artful", "Ascetic", "Authoritarian", "Big-thinking",
    "Boyish", "Breezy", "Businesslike", "Busy", "Casual", "Crebral", "Chummy", "Circumspect", "Competitive", "Complex", "Confidential", "Conservative",
    "Contradictory", "Crisp", "Cute", "Deceptive", "Determined", "Dominating", "Dreamy", "Driving", "Droll", "Dry", "Earthy", "Effeminate", "Emotional",
    "Enigmatic", "Experimental", "Familial", "Folksy", "Formal", "Freewheeling", "Frugal", "Glamorous", "Guileless", "High-spirited", "Huried", "Hypnotic",
    "Iconoclastic", "Idiosyncratic", "Impassive", "Impersonal", "Impressionable", "Intense", "Invisible", "Irreligious", "Irreverent", "Maternal", "Mellow",
    "Modern", "Moralistic", "Mystical", "Neutral", "Noncommittal", "Noncompetitive", "Obedient", "Old-fashined", "Ordinary", "Outspoken", "Paternalistic",
    "Physical", "Placid", "Political", "Predictable", "Preoccupied", "Private", "Progressive", "Proud", "Pure", "Questioning", "Quiet", "Religious", "Reserved",
    "Restrained", "Retiring", "Sarcastic", "Self-conscious", "Sensual", "Skeptical", "Smooth", "Soft", "Solemn", "Solitary", "Stern", "Stoiid", "Strict", "Stubborn",
    "Stylish", "Subjective", "Surprising", "Soft", "Tough", "Unaggressive", "Unambitious", "Unceremonious", "Unchanging", "Undemanding", "Unfathomable", "Unhurried",
    "Uninhibited", "Unpatriotic", "Unpredicatable", "Unreligious", "Unsentimental", "Whimsical"
];

let hairType = ["straight", "wavy", "curly", "coily"];
//let cut = ["buzz cut", "ear/pixie", "chin/bob", "shoulder/lob", "mid-back", "tailbone", "knee", "foot/floor", 'rapunzel'];
let cut = ["Short", "Medium", "Long"]

let skinTones = ["Ivory", "Beige", "Alabaster", "Honey", "Carotenoid", "Tan", "Caramel", "Bronze", "Mahogany", "Chestnut", "Buff", "Peaches and Cream", "Umber", "Praline", "Espresso Brown", "Porcelain", "Hickory", "Mustard", "Sable", "Almond", "Bisque", "Teak", "Cacao", "Pecan", "Saddle ", "Brown"]

let cupSizes = ["AA", "A", "B", "C", "D", "E", "F", "G", "H"];

/* Name: Bianca
Hieght: 204.81cm
Wieght: 73.72kg
Age: 38
Blood Type: AB-
Star Sign: Libra
Personality Traits: 
 Trait: Compassionate
 Trait: Excitable
 Trait: Authoritarian */

const avgW = 0;
const avgH = 0;



const bloodType = ["O-", "O+", "B-", "B+", "A-", "A+", "AB-", "AB+"];

/* function CatGirl() {
    this.name = getName();
    this.hieght = getHieght();
    this.wieght = getWeight();
    this.bloodType = getBoodType();
    this.age = getAge();
    this.birthday = "";
    this.starSign = getStarSign();
    this.traits = getPersoanlityTraits();
} */

function CatGirl() {
    this.basicInfo = {
        info: "This Package includes basic descriptive Info",
        name: "",
        age: "",
        hieght: "",
        wieght: "",
        skinTone: "",
        cupSize: "",
        eyes: {
            hasCatEyes: "false",
            eyeColor: "",
        },
        hairStyle: {
            hairColor: "",
            hairType: "",
            hairCut: "",
            hairLength: "",
            earColorMatches: "true",
            tailColorMatches: "true"
        }
    }

    this.catInfo = {
        info: "This Package includes information about the cat parts Info.",
        eyes: {
            pupilType: "",
            pupilSize: "",
            eyeColor: ""
        },
        ears: {
            earLength: "",
            earSize: "",
            earPattern: "",
            earColors: [],
            furLength: "",
            isFluffy: ""
        },
        claws: {
            hasClaws: "false",
            length: "",
            sharpness: "",
            color: ""
        },
        tail: {
            tailLength: "",
            tailSize: "",
            tailPattern: "",
            tailColors: [],
            tailHairLength: "",
            isFluffy: ""
        }
    }

    this.miscInfo = {
        info: "This Package includes Misc Info that might not fit anywhere else.",
        bloodType: "",
        starSign: "",
        traits: {
            traitPositive: "",
            traitNeutral: "",
            traitNegative: "",
        }
    }
    this.spiceyInfo = {
        info: "This Package includes Spicey Info"
    }
}

var VCAT;

function makeCat() {

    VCAT = new CatGirl;
    let hasClaws;
    //let hasCatEyes;


    //TODO: implement selectors for claws and cat eyes. Default random selection on both.
    //hasCatEyes = coinFlip();
    hasClaws = coinFlip();

    VCAT.basicInfo = getBasicInfoPackage();
    //VCAT.catInfo = getCatInfoPackage(hasCatEyes, hasClaws);
    VCAT.catInfo = getCatInfoPackage(hasClaws);
    VCAT.miscInfo = getMiscInfoPackage();

    //console.log(JSON.stringify(VCAT, null, 4));
    return VCAT;
}

//[BASE REQUIRED PACKAGE INFO]
function getBasicInfoPackage() {
    //VARS
    //Basic Info Package
    let BIP = {
        info: "This Package includes basic descriptive Info",
        name: "",
        age: "",
        hieght: "",
        wieght: "",
        skinTone: "",
        cupSize: "",
        eyes: {
            hasCatEyes: "false",
            eyeColor: ""
        },
        hairStyle: {
            hairColor: "",
            hairType: "",
            hairCut: "",
            hairLength: "",
            earColorMatches: "true",
            tailColorMatches: "true"
        }
    }
    //HairStyle VARS
    minHairLength = 0;
    maxHairLength = 260;
    //hardcoded to be 0-260cm
    let hairLength = getIndexFloat(260, 0).toFixed(2);
    BIP.hairStyle.hairLength = hairLength;
    let hairColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    BIP.hairStyle.hairColor = hairColor;

    //RNG a name
    BIP.name = femaleNames[getIndexFloor(femaleNames.length, 1)];

    //RNG age 
    //TODO: implement age range input with. Possible minimum age of 18.
    //Hard coded range of 18-60.
    BIP.age = getIndexFloor(60, 18);

    //RNF hieght
    //TODO: implement hieght range input
    //re-use const when no hieght range is given.
    //const minH = 115.82;
    //const maxH = 265.176;
    // hard coded range in 115.82cm-265.176cm
    BIP.hieght = getIndexFloat(265.176, 115.82).toFixed(2);

    //RNG Wieght
    //TODO: implement wieght range input
    //re-use const when no hieght range is given.
    //const minW = 28.57;
    //const maxW = 109.76;
    // hard coded range in 28.57kg-109.76kg
    BIP.wieght = getIndexFloat(109.76, 28.57).toFixed(2);

    //RNG Cupsize
    //TODO: implement cupsize selector/inputer
    BIP.cupSize = cupSizes[getIndexFloor(cupSizes.length, 1)];

    //RNG Skintone
    //TODDO: implement more skintones, skintone selector/inputter
    BIP.skinTone = skinTones[getIndexFloor(skinTones.length, 1)];

    //RNG Eyes
    //TODO: implement eye selector/cat eye toggle
    // If normal or cat eye not toggled, randomly decide
    BIP.eyes.hasCatEyes = coinFlip();
    BIP.eyes.eyeColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    //RNG Hair
    //Do not get attached, way more steps invovled with configuring hair
    //TODO: implement Hair Editor System.
    let hss;
    if (hairLength < 20) {
        hss = "s";
    }
    else if (20 < hairLength < 80) {
        hss = "av";
    }
    else if (hairLength > 80) {
        hss = "l";
    };

    switch (hss) {
        case "s":
            BIP.hairStyle.hairType = hairType[getIndexFloor(hairType.length, 1)];
            BIP.hairStyle.hairCut = cut[0];
            break;
        case "av":
            BIP.hairStyle.hairType = hairType[getIndexFloor(hairType.length, 1)];
            BIP.hairStyle.hairCut = cut[1];
            break;
        case "l":
            BIP.hairStyle.hairType = hairType[getIndexFloor(hairType.length, 1)];
            BIP.hairStyle.hairCut = cut[2];
            break;
        default:
            console.log(hairLength);
            console.log("End of HairStyle Switch: Something Messed up.");
            break;
    }


    return BIP;
}
//Cat Info Pulls information from Basic Info.
function getCatInfoPackage(catClaws) {
    //CatPart variables
    var CIP = {
        info: "This Package includes information about the cat parts Info.",
        eyes: {
            pupilType: "",
            pupilSize: "",
            eyeColor: ""
        },
        ears: {
            earLength: "",
            earSize: "",
            earPattern: "",
            earColors: [],
            furLength: "",
            isFluffy: ""
        },
        tail: {
            tailLength: "",
            tailSize: "",
            tailPattern: "",
            tailColors: [],
            tailHairLength: "",
            isFluffy: ""
        },
        claws: {
            hasClaws: "",
            length: "",
            sharpness: "",
            color: ""
        }
    }

    //Cat Eyes
    let pupilType = ["circle", "oval", "slit"];
    let pupilSize = ["wide", "thin", "small", "average", "big"];

    //size rng withing resonable range
    //colors will pull from hair color
    //hairLength rng withing resonable range
    //isFluffy not sure if keeping, will link with tail

    //Cat Tail
    //length rng withing resonable range
    //size rng withing resonable range
    //colors will pull from hair color
    //hairLength rng withing resonable range
    //isFluffy not sure if keeping, will link with ears

    //Cat Claw
    clasLength = ["short", "average", "long"];
    clawSharpness = ["dull", "trimmed", "sharp"];
    clawColor = ["grey", "white", "opaque", "black"];

    //Generate the Look of the CatGirl's cat eye if catEye is true.
    if (VCAT.basicInfo.eyes.hasCatEyes) {
        CIP.eyes.pupilType = pupilType[getIndexFloor(pupilType.length, null)];
        CIP.eyes.pupilSize = pupilSize[getIndexFloor(pupilSize.length, null)];
        CIP.eyes.eyeColor = VCAT.basicInfo.eyes.eyeColor;
    }

    //Generate the Look of the CatGirl's cat claws if catClaws is true.
    if (catClaws) {
        CIP.claws.length = clasLength[getIndexFloor(clasLength.length, null)];
        CIP.claws.sharpness = clawSharpness[getIndexFloor(clawSharpness.length, null)];
        CIP.claws.color = clawColor[getIndexFloor(clawColor.length, null)];
    }

    //Cat Ears
    let earL = ["short", "average", "tall"];
    let earS = ["small", "medium", "large"];
    let earPattern = ["spotted", "solid", "patched"];
    let earColors = "";
    let furLength = "";
    let earFluffy = "";

    //Generate the Look of the CatGirl's cat ears.
    CIP.ears.earLength = earL[getIndexFloor(earL.length, 1)];
    CIP.ears.earSize = earS[getIndexFloor(earS.length, 1)];
    CIP.ears.earPattern = earPattern[getIndexFloor(earPattern.length, 1)];

    //Generate the Look of the CatGirl's cat tail.
    let tailLength = ["short", "medium", "long"];
    let tailSize = ["small", "medium", "large"];
    let tailPattern = ["spotted", "solid", "patched"];
    CIP.tail.tailLength = tailLength[getIndexFloor(tailLength.length, 1)];
    CIP.tail.tailSize = tailSize[getIndexFloor(tailSize.length, 1)];
    CIP.tail.tailPattern = tailPattern[getIndexFloor(tailPattern.length, 1)];
    CIP.tail.tailColors = [];


    return CIP;
}


//[MISC INFO NOT REQUIRED]
function getMiscInfoPackage() {
    let MIP = {
        info: "This Package includes Misc Info that might not fit anywhere else.",
        bloodType: "",
        starSign: "",
        traits: {
            traitPositive: "",
            traitNeutral: "",
            traitNegative: "",
        }
    }

    //RNG BloodType
    MIP.bloodType = bloodType[getIndexFloor(bloodType.length, 1)];

    //RNG Starsign
    let month = getIndexFloor(12, 1);
    let day;

    switch (month) {
        case 1:
            day = getIndexFloor(1, 31);
            if (day >= 20) {
                MIP.starSign = "Aquarius";
            } else {
                MIP.starSign = "Capricornus";
            }
        case 2:
            day = getIndexFloor(1, 29);
            if (day >= 19) {
                MIP.starSign = "Pisces";
            } else {
                MIP.starSign = "Aquarius";
            }
        case 3:
            day = getIndexFloor(1, 31);
            if (day >= 21) {
                MIP.starSign = "Aries";
            } else {
                MIP.starSign = "Pisces";
            }
        case 4:
            day = getIndexFloor(1, 30);
            if (day >= 20) {
                MIP.starSign = "Taurus";
            } else {
                MIP.starSign = "Aries";
            }
        case 5:
            day = getIndexFloor(1, 31);
            if (day >= 20) {
                MIP.starSign = "Gemini";
            } else {
                MIP.starSign = "Taurus";
            }
        case 6:
            day = getIndexFloor(1, 31);
            if (day >= 22) {
                MIP.starSign = "Cancer";
            } else {
                MIP.starSign = "Gemini";
            }
        case 7:
            day = getIndexFloor(1, 31);
            if (day >= 23) {
                MIP.starSign = "Leo";
            } else {
                MIP.starSign = "Cancer";
            }
        case 8:
            day = getIndexFloor(1, 31);
            if (day >= 23) {
                MIP.starSign = "Virgo";
            } else {
                MIP.starSign = "Leo";
            }
        case 9:
            day = getIndexFloor(1, 30);
            if (day >= 23) {
                MIP.starSign = "Libra";
            } else {
                MIP.starSign = "Virgo";
            }
        case 10:
            day = getIndexFloor(1, 31);
            if (day >= 24) {
                MIP.starSign = "Scorpius";
            } else {
                MIP.starSign = "Libra";
            }
        case 11:
            day = getIndexFloor(1, 30);
            if (day >= 22) {
                MIP.starSign = "Sagittarius";
            } else {
                MIP.starSign = "Scorpius";
            }
        case 12:
            day = getIndexFloor(1, 31);
            if (day >= 22) {
                MIP.starSign = "Capricornus";
            } else {
                MIP.starSign = "Sagittarius";
            }
        default:
            break;
    }

    //RNG Personality Traits
    MIP.traits.traitPositive = positivePersonalityTraits[getIndexFloor(positivePersonalityTraits.length, 1)];
    MIP.traits.traitNeutral = negativePersonalityTraits[getIndexFloor(negativePersonalityTraits.length, 1)];
    MIP.traits.traitNegative = neutralPersonalityTraits[getIndexFloor(neutralPersonalityTraits.length, 1)];

    return MIP;
}
function getSpiceyInfoPackage() {
    let SIP = {
        info: "This Package includes Spicey Info"
    }

    return SIP;
}

var newCat;

//HTML FUNCTIONS
function exportToCatCard() {
    newCat = makeCat();
    displayInfo();


    function displayInfo() {
        var wrapper = $('#wrapper'),
            container = $('.catgirl', wrapper).clone();
        wrapper.empty();

        var tmpCon = container.clone();

        //basicINFO
        $('.name', tmpCon).text(newCat.basicInfo.name);
        $('.age', tmpCon).text(newCat.basicInfo.age);
        $('.hieght', tmpCon).text(newCat.basicInfo.hieght);
        $('.wieght', tmpCon).text(newCat.basicInfo.wieght);
        $('.skinTone', tmpCon).text(newCat.basicInfo.skinTone);
        $('.cupSize', tmpCon).text(newCat.basicInfo.cupSize);

        $('.hasCatEyes', tmpCon).text(newCat.basicInfo.eyes.hasCatEyes);
        $('.eyeColor', tmpCon).text(newCat.basicInfo.eyes.eyeColor);

        $('.hairColor', tmpCon).text(newCat.basicInfo.hairStyle.hairColor);
        $('.hairType', tmpCon).text(newCat.basicInfo.hairStyle.hairType);
        $('.hairCut', tmpCon).text(newCat.basicInfo.hairStyle.hairCut);
        $('.hairLength', tmpCon).text(newCat.basicInfo.hairStyle.hairLength);
        $('.earColorMatches', tmpCon).text(newCat.basicInfo.hairStyle.earColorMatches);
        $('.tailColorMatches', tmpCon).text(newCat.basicInfo.hairStyle.tailColorMatches);

        //catINFO
        $('.pupilType', tmpCon).text(newCat.catInfo.eyes.pupilType);
        $('.pupilSize', tmpCon).text(newCat.catInfo.eyes.pupilSize);
        $('.eyeColor', tmpCon).text(newCat.catInfo.eyes.eyeColor);

        $('.earLength', tmpCon).text(newCat.catInfo.ears.earLength);
        $('.earSize', tmpCon).text(newCat.catInfo.ears.earSize);
        $('.earPattern', tmpCon).text(newCat.catInfo.ears.earPattern);
        $('.earColors', tmpCon).text(newCat.catInfo.ears.earColors);
        $('.furLength', tmpCon).text(newCat.catInfo.ears.furLength);
        $('.isFluffy', tmpCon).text(newCat.catInfo.ears.isFluffy);

        $('.hasClaws', tmpCon).text(newCat.catInfo.claws.hasClaws);
        $('.length', tmpCon).text(newCat.catInfo.claws.length);
        $('.sharpness', tmpCon).text(newCat.catInfo.claws.sharpness);
        $('.color', tmpCon).text(newCat.catInfo.claws.color);

        $('.tailLength', tmpCon).text(newCat.catInfo.tail.tailLength);
        $('.tailSize', tmpCon).text(newCat.catInfo.tail.tailSize);
        $('.tailPattern', tmpCon).text(newCat.catInfo.tail.tailPattern);
        $('.tailColors', tmpCon).text(newCat.catInfo.tail.tailColors);
        $('.tailHairLength', tmpCon).text(newCat.catInfo.tail.tailHairLength);
        $('.isFluffy', tmpCon).text(newCat.catInfo.tail.isFluffy);

        //miscINFO
        $('.bloodType', tmpCon).text(newCat.miscInfo.bloodType);
        $('.starSign', tmpCon).text(newCat.miscInfo.starSign);

        $('.traitPositive', tmpCon).text(newCat.miscInfo.traits.traitPositive);
        $('.traitNeutral', tmpCon).text(newCat.miscInfo.traits.traitNeutral);
        $('.traitNegative', tmpCon).text(newCat.miscInfo.traits.traitNegative);

        wrapper.append(tmpCon);
    }
}


//RNG functions
function getIndexFloor(max, min) {
    if (min == null) {
        min = 1;
    }
    let index = Math.floor(Math.random() * (max - min) + min);
    return index;
}
function getIndexFloat(max, min) {
    if (min == null) {
        min = 1;
    }
    let index = Math.random() * (max - min) + min;
    return index;
}
function coinFlip() {
    if (getIndexFloat(2, 0) > 1) {
        return true;
    } else {
        return false;
    }
}

//MISC function
function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function onDownload() {
    download(JSON.stringify(newCat, null, 2), "Cat-Girl-" + newCat + ".json", "text/plain");
}

/* function doThing() {
    const newCat = makeCat();

    var mainContainer =
    var div = document.createElement("div");
    div.innerHTML = '<span class="name">' + newCat +'</span>';
    mainContainer.appendChild(div);
} */
