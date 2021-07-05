//VARIABLES
var femaleNames;
var positivePersonalityTraits;
var negativePersonalityTraits;
var neutralPersonalityTraits; 

$.getJSON('https://sirhorns.github.io/Data/femaleNames.json', function (json) {
    femaleNames = json.femaleNames;
});

$.getJSON("https://sirhorns.github.io/Data/positivePersonalityTraits.json", function (json) {
    positivePersonalityTraits= json.positivePersonalityTraits;
});

$.getJSON("https://sirhorns.github.io/Data/negativePersonalityTraits.json", function (json) {
    negativePersonalityTraits= json.negativePersonalityTraits;
});

$.getJSON("https://sirhorns.github.io/Data/neutralPersonalityTraits.json", function (json) {
    neutralPersonalityTraits= json.neutralPersonalityTraits;
});

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
    CIP.tail.tailLength = tailLength[getIndexFloor(earPattern.length, 1)];
    CIP.tail.tailSize = tailSize[getIndexFloor(earPattern.length, 1)];
    CIP.tail.tailPattern = tailPattern[getIndexFloor(earPattern.length, 1)];
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
