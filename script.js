//VARIABLES
var femaleNames;
var positivePersonalityTraits;
var negativePersonalityTraits;
var neutralPersonalityTraits;

$.getJSON('https://sirhorns.github.io/Data/femaleNames.json', function (json) {
    femaleNames = json.femaleNames;
});

$.getJSON("https://sirhorns.github.io/Data/positivePersonalityTraits.json", function (json) {
    positivePersonalityTraits = json.positivePersonalityTraits;
});

$.getJSON("https://sirhorns.github.io/Data/negativePersonalityTraits.json", function (json) {
    negativePersonalityTraits = json.negativePersonalityTraits;
});

$.getJSON("https://sirhorns.github.io/Data/neutralPersonalityTraits.json", function (json) {
    neutralPersonalityTraits = json.neutralPersonalityTraits;
});

let hairType = ["straight", "wavy", "curly", "coily"];
//let cut = ["buzz cut", "ear/pixie", "chin/bob", "shoulder/lob", "mid-back", "tailbone", "knee", "foot/floor", 'rapunzel'];
let cut = ["short", "medium", "long"]

let skinTones = ["Ivory", "Beige", "Alabaster", "Honey", "Carotenoid", "Tan", "Caramel", "Bronze", "Mahogany", "Chestnut", "Buff", "Peaches and Cream", "Umber", "Praline", "Espresso Brown", "Porcelain", "Hickory", "Mustard", "Sable", "Almond", "Bisque", "Teak", "Cacao", "Pecan", "Saddle ", "Brown"]

let cupSizes = ["AA", "A", "B", "C", "D", "E", "F", "G", "H"];

const bloodType = ["O-", "O+", "B-", "B+", "A-", "A+", "AB-", "AB+"];

function CatGirl() {
    this.basicInfo = {
        info: "This Package includes basic descriptive Info",
        name: "",
        age: "",
        hieght: "",
        wieght: "",
        skinTone: "",
        cupSize: "",
        bodyType:"",
        eyes: {
            hasCatEyes: "false",
            eyeColor: "",
        },
        hair: {
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
            eyePupilType: "",
            eyePupilSize: "",
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

    //TODO: implement selectors for claws and cat eyes. Default random selection on both.
    //hasCatEyes = coinFlip();

    VCAT.basicInfo = getBasicInfoPackage();
    //VCAT.catInfo = getCatInfoPackage(hasCatEyes, hasClaws);
    VCAT.catInfo = getCatInfoPackage();
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
        bodyType:"",
        bodyShape: "",
        eyes: {
            hasCatEyes: "false",
            eyeColor: ""
        },
        hair: {
            hairColor: "",
            hairType: "",
            hairCut: "",
            hairLength: "",
            earColorMatches: "true",
            tailColorMatches: "true"
        }
    }
    

    //RNG a name
    BIP.name = femaleNames[getIndexFloor(femaleNames.length, 0)];

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
    BIP.cupSize = cupSizes[getIndexFloor(cupSizes.length, 0)];

    //RNG Skintone
    //TODDO: implement more skintones, skintone selector/inputter
    BIP.skinTone = skinTones[getIndexFloor(skinTones.length, 0)];

    //RNG Eyes
    //TODO: implement eye selector/cat eye toggle
    // If normal or cat eye not toggled, randomly decide
    BIP.eyes.hasCatEyes = coinFlip();
    BIP.eyes.eyeColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    //RNG Hair
    //Do not get attached, way more steps invovled with configuring hair
    //TODO: implement Hair Editor System.
    //hair VARS
    minHairLength = 0;
    maxHairLength = 260;
    /* 
    short           -7in -17.78cm
    Ear             8-9in 20.32-22.86cm
    Chin            10-11in 25.4-27.94cm
    Neck            12-13in 30.48-33.02cm
    Shoulder        14-15in 35.56-38.1cm
    Armpit          16-17in 40.64-43.18cm

    Armpit          16-19in 40.64-48.26cm
    Bra-strap       18-19in 45.72-48.26cm

    Mid-back        20-21in 50.8-53.34cm
    Waist           22-25in 55.88-63.5cm
    Hip             26-28in 66.04-71.12cm
    Tailbone        33-35in 83.82-88.9cm
    Classic         36-39in 91.44-99.06cm
    Mid-Thigh       40-46in 101.6-116.84cm
    Knee            47-53in 119.38-134.62cm
    Calf            54-64in 137.16-162.56cm
    Ankle           65-69in 165.1-175.26cm
    Floor           +70in +177.8cm
    */

    //hardcoded to be 0-260cm
    let hairLength = getIndexFloat(300, 0).toFixed(2);
    BIP.hair.hairLength = hairLength;
    let hairColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    BIP.hair.hairColor = hairColor;
    let haitCut = ["short","ear","chin","neck","shoulder","armpit","mid-back","waist","hip","tailbone","classic","mid-thigh","knee","calf","ankle","floor"];

    switch (true) {
        case (hairLength < 17.78):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[0];
            break;
        case (hairLength < 23.86):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[1];
            break;
        case (hairLength < 30.48):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[2];
            break;
        case (hairLength < 35.56):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[3];
            break;
        case (hairLength < 40.64 ):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[4];
            break;
        case (hairLength < 50.8):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[5];
            break;
        case (hairLength < 55.88):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[6];
            break;
        case (hairLength < 66.04):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[7];
            break;
        case (hairLength < 83.82):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[8];
            break;
        case (hairLength < 91.44):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[9];
            break;
        case ( hairLength < 101.6):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[10];
            break;
        case (hairLength < 119.38):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[11];
            break;
        case (hairLength < 137.16):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[12];
            break;
        case (hairLength < 165.1):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[13];
            break;
        case (hairLength < 177.8 ):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[14];
            break;
        case ( 177.8 < hairLength):
            BIP.hair.hairType = hairType[getIndexFloor(hairType.length, 0)];
            BIP.hair.hairCut = haitCut[15];
            break;
        default:   
            break;
    }

    //Body RNG.
    let bodyShapes = ["triangle","inverted-triangle","pear","spoon","hourglass","top-hourglass","bottom-hourglass","round","oval","diamond"];
    BIP.bodyShape = bodyShapes[getIndexFloor(bodyShapes.length, 0)];

    let bodyTypes = ["petite","thin","average","slim","skinny","curvaceous","soft","chubby","fit"];
    BIP.bodyType = bodyTypes[getIndexFloor(bodyTypes.length, 0)];

    return BIP;
}
//Cat Info Pulls information from Basic Info.
function getCatInfoPackage(catClaws) {
    //CatPart variables
    var CIP = {
        info: "This Package includes information about the cat parts Info.",
        eyes: {
            eyePupilType: "",
            eyePupilSize: "",
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
    let eyePupilType = ["circle", "oval", "slit"];
    let eyePupilSize = ["wide", "thin", "small", "average", "big"];

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
        CIP.eyes.eyePupilType = eyePupilType[getIndexFloor(eyePupilType.length, null)];
        CIP.eyes.eyePupilSize = eyePupilSize[getIndexFloor(eyePupilSize.length, null)];
    }
    CIP.eyes.eyeColor = VCAT.basicInfo.eyes.eyeColor;

    let hasClaws;
    hasClaws = coinFlip();
    //Generate the Look of the CatGirl's cat claws if catClaws is true.
    if (hasClaws) {
        CIP.claws.hasClaws = true;
        CIP.claws.length = clasLength[getIndexFloor(clasLength.length, null)];
        CIP.claws.sharpness = clawSharpness[getIndexFloor(clawSharpness.length, null)];
        CIP.claws.color = clawColor[getIndexFloor(clawColor.length, null)];
    } else {
        CIP.claws.hasClaws = false;
    }

    //Cat Ears
    let earLength = ["short", "average", "tall"];
    let earSize = ["small", "medium", "large"];
    let earPattern = ["spotted", "solid", "patched"];

    let earColors = "";
    let furLength = "";
    let earFluffy = "";

    //Generate the Look of the CatGirl's cat ears.
    CIP.ears.earLength = earLength[getIndexFloor(earLength.length, 0)];
    CIP.ears.earSize = earSize[getIndexFloor(earSize.length, 0)];
    CIP.ears.earPattern = earPattern[getIndexFloor(earPattern.length, 0)];

    //Generate the Look of the CatGirl's cat tail.
    let tailLength = ["short", "medium", "long"];
    let tailSize = ["small", "medium", "large"];
    let tailPattern = ["spotted", "solid", "patched"];
    CIP.tail.tailLength = tailLength[getIndexFloor(earPattern.length, 0)];
    CIP.tail.tailSize = tailSize[getIndexFloor(earPattern.length, 0)];
    CIP.tail.tailPattern = tailPattern[getIndexFloor(earPattern.length, 0)];
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
    MIP.bloodType = bloodType[getIndexFloor(bloodType.length, 0)];

    //RNG Starsign
    let month = getIndexFloor(12, 0);
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
    MIP.traits.traitPositive = positivePersonalityTraits[getIndexFloor(positivePersonalityTraits.length, 0)];
    MIP.traits.traitNeutral = negativePersonalityTraits[getIndexFloor(negativePersonalityTraits.length, 0)];
    MIP.traits.traitNegative = neutralPersonalityTraits[getIndexFloor(neutralPersonalityTraits.length, 0)];

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

    var htmlElem = document.getElementById("cat-description");
    htmlElem.style.display = "block";
    var tmp = $('#cat-description');


    function displayInfo() {
        var wrapper = $('#wrapper'),
            container = $('.catgirl', wrapper).clone();
        wrapper.empty();

        var tmpCon = container.clone();

        //basicINFO
        $('.name', tmpCon).text(newCat.basicInfo.name);
        $('.age', tmpCon).text(newCat.basicInfo.age);
        $('.hieght', tmpCon).text(newCat.basicInfo.hieght + " cm");
        $('.wieght', tmpCon).text(newCat.basicInfo.wieght + " kg");
        $('.skinTone', tmpCon).text(newCat.basicInfo.skinTone);
        $('.cupSize', tmpCon).text(newCat.basicInfo.cupSize);
        $('.bodyShape', tmpCon).text(newCat.basicInfo.bodyShape);
        $('.bodyType', tmpCon).text(newCat.basicInfo.bodyType);

        $('.hasCatEyes', tmpCon).text(newCat.basicInfo.eyes.hasCatEyes);
        $('.eyeColor', tmpCon).text(newCat.basicInfo.eyes.eyeColor);

        $('.hairColor', tmpCon).text(newCat.basicInfo.hair.hairColor);
        $('.hairType', tmpCon).text(newCat.basicInfo.hair.hairType);
        $('.hairCut', tmpCon).text(newCat.basicInfo.hair.hairCut);
        $('.hairLength', tmpCon).text(newCat.basicInfo.hair.hairLength);
        $('.earColorMatches', tmpCon).text(newCat.basicInfo.hair.earColorMatches);
        $('.tailColorMatches', tmpCon).text(newCat.basicInfo.hair.tailColorMatches);

        //catINFO
        $('.eyePupilType', tmpCon).text(newCat.catInfo.eyes.eyePupilType);
        $('.eyePupilSize', tmpCon).text(newCat.catInfo.eyes.eyePupilSize);
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

        //spicyINFO

        wrapper.append(tmpCon);
    }
}


//RNG functions
function getIndexFloor(max, min) {
    if (min == null) {
        min = 0;
    }
    let index = Math.floor(Math.random() * (max - min) + min);
    return index;
}
function getIndexFloat(max, min) {
    if (min == null) {
        min = 0;
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
    download(JSON.stringify(newCat, null, 2), "Cat-Girl-" + newCat.basicInfo.name + ".json", "text/plain");
}

/* function doThing() {
    const newCat = makeCat();

    var mainContainer =
    var div = document.createElement("div");
    div.innerHTML = '<span class="name">' + newCat +'</span>';
    mainContainer.appendChild(div);
} */
