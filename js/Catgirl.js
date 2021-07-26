function Catgirl() {
    //Objects
    function Eyes() {
        function Eye() {
            this.color = "#000000";
            this.conditions = ["normal"];
            this.pupil = {
                size: "medium",
                type: "",
            };
            this.iris = {
                color: "#000000",
                ringColor: "#000000",
                size: {},
                patches: [],
                section: {
                    centerTop: {
                        color: "",
                    },
                    centerBottom: {
                        color: "",
                    },
                    leftTop: {
                        color: "",
                    },
                    leftMiddle: {
                        color: "",
                    },
                    leftBottom: {
                        color: "",
                    },
                    rightTop: {
                        color: "",
                    },
                    rightMiddle: {
                        color: "",
                    },
                    rightBottom: {
                        color: "",
                    },
                },
            };
            this.sclera = {
                color: "#FFFFFF"
            };
        };
        var pupilTypes = ["circle", "oval", "slit"];
        var pupilSizes = ["wide", "thin", "small", "average", "big"];
        var eyeConditions = [{name: "heterochromia",weight: 20,},{name: "normal",weight: 80,},];
        var heterochromiaTypes = [{name: "central",weight: 33.3,},{name: "complete",weight: 33.3,},{name: "sectoral",weight: 33.3,},];
        this.naturalColor = "#000000";
        this.ringColor = "#000000";
        this.catLike = false;
        this.eyeConditions = {
            noCondition: true,
            heterochromia: {
                hasCondition: false,
                type: "central",
            },
        };
        
        this.left = new Eye();
        this.right = new Eye();

        //Sets all the information on the catgirl eye object
        this.init = function () {
            this.catLike = coinFlip();
            //this.eyeConditions.heterochromia.hasCondition = coinFlip();
            this.naturalColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            this.left.color = this.naturalColor;
            this.right.color = this.naturalColor;

            
            switch (weighted_random(eyeConditions).name) {
                case "normal":
                    this.eyeConditions.noCondition = true;
                    break;
                case "heterochromia":
                    this.eyeConditions.noCondition = false;
                    this.eyeConditions.heterochromia.hasCondition = true;
                    break;

                default:
                    this.eyeConditions.noCondition = true;
                    break;
            }

            //Set Cat Eye info if the catgirl has cat eyes
            if (this.catLike) {
                var pupilType = pupilTypes[getIndexFloor(pupilTypes.length, null)];
                var pupilSize = pupilSizes[getIndexFloor(pupilSizes.length, null)];

                this.left.pupil.type = pupilType;
                this.right.pupil.type = pupilType;

                this.left.pupil.size = pupilSize;
                this.right.pupil.size = pupilSize;
            }

            //block of code that handles the heterochromia info
            if (this.eyeConditions.heterochromia.hasCondition) {
                if (this.catEyes) {
                    this.eyeConditions.heterochromia.type = weighted_random(eyeConditions).name;
                } else {
                    this.eyeConditions.heterochromia.type = weighted_random(heterochromiaTypes).name;
                }

                switch (this.eyeConditions.heterochromia.type) {
                    case "complete":
                        this.left.color = getHexColor();
                        this.right.color = getHexColor();
                        //set both eyes are just different colors
                        //Possible also can include sectoral colors.
                        break;
                    case "central":
                        var color = getHexColor();
                        this.left.iris.ringColor = color;
                        this.right.iris.ringColor = color;
                        //set the eyes to the same color and innter ring to differ or mixed colors.
                        //Both eyes are the same color
                        //Rings can be same color or differant colors.
                        this.ringColor = color;
                        break;
                    case "sectoral":
                        /* if (coinFlip()) {
                            this.left.conditions[0] = this.eyeConditions.heterochromia.type;
                            var index = getIndexFloor(this.left.iris.section.length, null);
                            this.left.iris.section[index].color = getHexColor();
                            this.left.patches.push(this.left.iris.section[index]);
                        } else {
                            this.right.conditions[0] = this.eyeConditions.heterochromia.type;
                            var index = getIndexFloor(this.right.iris.section.length, null);
                            this.right.iris.section[index].color = getHexColor();
                            this.right.patches.push(this.right,iris.section[index]);
                        } */
                        //set both eyes to the same color, select 1 or more patches to be different matching or mixed colors
                        //Both eyes are the same base color
                        //Patches on eyes can have different colors.
                        break;

                    default:
                        this.left.color = getHexColor();
                        this.right.color = getHexColor();
                        break;
                }
            }
        };

        this.init();
    }
    function Ears() {
        function Ear() {
            this.length = "normal";
            this.size = "normal";
            this.accessoires = [];
            this.pattern - "";
            this.conditions = [];
        };
        var lengths = ["short", "average", "tall"];
        var sizes = ["small", "medium", "large"];
        var patterns = ["spotted", "solid", "patched"];

        this.hasCatEars = true;
        this.left = new Ear();
        this.right = new Ear();

        this.init = function () {
            this.left.length = lengths[getIndexFloor(lengths.length, 0)];
            this.left.pattern = patterns[getIndexFloor(patterns.length, 0)];
            this.left.size = sizes[getIndexFloor(sizes.length, 0)];
        };
        this.init();
    }
    function Hair() {
        var hairCuts = [
            "short",
            "ear",
            "chin",
            "neck",
            "shoulder",
            "armpit",
            "mid-back",
            "waist",
            "hip",
            "tailbone",
            "classic",
            "mid-thigh",
            "knee",
            "calf",
            "ankle",
            "floor",
        ];
        var hairTypes = ["straight", "wavy", "curly", "coily"];
        this.color = "#000000";
        this.length = "300";
        this.cut = "floor";
        this.type = "straight";

        this.init = function () {
            this.color = getHexColor();
            this.length = getIndexFloat(300, 0).toFixed(2);

            switch (true) {
                case this.length < 17.78:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[0];
                    break;
                case this.length < 23.86:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[1];
                    break;
                case this.length < 30.48:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[2];
                    break;
                case this.length < 35.56:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[3];
                    break;
                case this.length < 40.64:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[4];
                    break;
                case this.length < 50.8:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[5];
                    break;
                case this.length < 55.88:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[6];
                    break;
                case this.length < 66.04:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[7];
                    break;
                case this.length < 83.82:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[8];
                    break;
                case this.length < 91.44:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[9];
                    break;
                case this.length < 101.6:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[10];
                    break;
                case this.length < 119.38:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[11];
                    break;
                case this.length < 137.16:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[12];
                    break;
                case this.length < 165.1:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[13];
                    break;
                case this.length < 177.8:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[14];
                    break;
                case 177.8 < this.length:
                    this.type = hairTypes[getIndexFloor(hairTypes.length, 0)];
                    this.cut = hairCuts[15];
                    break;
                default:
                    break;
            }
        };

        this.init();
    }
    function Body() {
        var bodyFigures = [
            "triangle",
            "inverted-triangle",
            "pear",
            "spoon",
            "hourglass",
            "top-heavy hourglass",
            "bottom-heavy hourglass",
            "round",
            "oval",
            "diamond",
        ];
        var bodyTypes = [
            "petite",
            "thin",
            "average",
            "slim",
            "skinny",
            "curvaceous",
            "soft",
            "chubby",
            "fit",
        ];
        var skinTones = [
            "ivory",
            "beige",
            "alabaster",
            "honey",
            "carotenoid",
            "tan",
            "caramel",
            "bronze",
            "mahogany",
            "chestnut",
            "buff",
            "peaches and cream",
            "umber",
            "praline",
            "espresso Brown",
            "porcelain",
            "hickory",
            "mustard",
            "sable",
            "almond",
            "bisque",
            "teak",
            "cacao",
            "pecan",
            "saddle ",
            "brown",
        ];
        var cupSizes = ["AA", "A", "B", "C", "D", "E", "F", "G", "H"];
        this.hieght = "300";
        this.wieght = "110";
        this.cupSize = "DD";
        this.skinTone = "pale";
        this.bodyFigure = "hourglass";
        this.bodyType = "soft";



        this.init = function () {
            //RNF hieght
            //TODO: implement hieght range input
            //re-use const when no hieght range is given.
            //const minH = 115.82;
            //const maxH = 265.176;
            // hard coded range in 115.82cm-265.176cm
            this.hieght = getIndexFloat(265.176, 115.82).toFixed(2);

            //RNG Wieght
            //TODO: implement wieght range input
            //re-use const when no hieght range is given.
            //const minW = 28.57;
            //const maxW = 109.76;
            // hard coded range in 28.57kg-109.76kg
            this.wieght = getIndexFloat(109.76, 28.57).toFixed(2);

            //RNG Cupsize
            //TODO: implement cupsize selector/inputer
            this.cupSize = cupSizes[getIndexFloor(cupSizes.length, 0)];

            //RNG Skintone
            //TODDO: implement more skintones, skintone selector/inputter
            this.skinTone = skinTones[getIndexFloor(skinTones.length, 0)];

            //Body RNG.

            this.bodyFigure = bodyFigures[getIndexFloor(bodyFigures.length, 0)];


            this.bodyType = bodyTypes[getIndexFloor(bodyTypes.length, 0)];
        }

        this.init();
    }
    function Nails() {
        var length = ["short", "average", "long"];
        var sharpness = ["dull", "trimmed", "sharp"];
        var color = ["grey", "white", "opaque", "black"];

        this.hasClaws = false;
        this.init = function () {
            this.hasClaws = coinFlip();

            if (this.hasClaws) {
                this.hasClaws = true;
                this.color = color[getIndexFloor(color.length, null)];
            }
            this.length = length[getIndexFloor(length.length, null)];
            this.sharpness = sharpness[getIndexFloor(sharpness.length, null)];
        };

        this.init();
    }
    function Tail() {
        var lengths = ["short", "medium", "long"];
        var sizes = ["small", "medium", "large"];
        var patterns = ["spotted", "solid", "patched"];

        this.length = "long";
        this.size = "large";
        this.pattern = "patched";
        this.color = "#000000";
        this.patchColor = "#000000";
        this.spotColor = "#000000";

        this.init = function () {
            //Generate the Look of the CatGirl's cat tail.

            length = lengths[getIndexFloor(lengths.length, 0)];
            size = sizes[getIndexFloor(sizes.length, 0)];
            pattern = patterns[getIndexFloor(patterns.length, 0)];
        };

        this.init();
    }
    //Value Returns
    function StarSign() {
        let month = getIndexFloor(12, 1);
        let day;

        switch (month) {
            case 1:
                day = getIndexFloor(31, 1);
                if (day >= 20) {
                    return "Aquarius";
                } else {
                    return "Capricornus";
                }
            case 2:
                day = getIndexFloor(1, 29);
                if (day >= 19) {
                    return "Pisces";
                } else {
                    return "Aquarius";
                }
            case 3:
                day = getIndexFloor(31, 1);
                if (day >= 21) {
                    return "Aries";
                } else {
                    return "Pisces";
                }
            case 4:
                day = getIndexFloor(30, 1);
                if (day >= 20) {
                    return "Taurus";
                } else {
                    return "Aries";
                }
            case 5:
                day = getIndexFloor(31, 1);
                if (day >= 20) {
                    return "Gemini";
                } else {
                    return "Taurus";
                }
            case 6:
                day = getIndexFloor(31, 1);
                if (day >= 22) {
                    return "Cancer";
                } else {
                    return "Gemini";
                }
            case 7:
                day = getIndexFloor(31, 1);
                if (day >= 23) {
                    return "Leo";
                } else {
                    return "Cancer";
                }
            case 8:
                day = getIndexFloor(31, 1);
                if (day >= 23) {
                    return "Virgo";
                } else {
                    return "Leo";
                }
            case 9:
                day = getIndexFloor(30, 1);
                if (day >= 23) {
                    return "Libra";
                } else {
                    return "Virgo";
                }
            case 10:
                day = getIndexFloor(31, 1);
                if (day >= 24) {
                    return "Scorpius";
                } else {
                    return "Libra";
                }
            case 11:
                day = getIndexFloor(30, 1);
                if (day >= 22) {
                    return "Sagittarius";
                } else {
                    return "Scorpius";
                }
            case 12:
                day = getIndexFloor(31, 1);
                if (day >= 22) {
                    return "Capricornus";
                } else {
                    return "Sagittarius";
                }
            default:
                return "Cancer";
        }
    }

    //Variables
    var bloodTypes = ["O-", "O+", "B-", "B+", "A-", "A+", "AB-", "AB+"];

    //HTML Logic
    this.lock = {
        state: "UNLOCK",
        transitions: {
            LOCK: {
                toggle() {
                    this.state = "UNLOCK";
                },
            },
            UNLOCK: {
                toggle() {
                    this.state = "LOCK";
                },
            },
        },
        dispatch(actionName) {
            const action = this.transitions[this.state][actionName];

            if (action) {
                action.call(this);
            } else {
                console.log("Invalid action");
            }
        },
    };
    this.displayed = true;

    //Cat Girl Info
    this.name = "Biannca";
    this.age = "40";
    this.eyes = new Eyes();
    this.ears = new Ears();
    this.hair = new Hair();
    this.body = new Body();
    this.nails = new Nails();
    this.tails = new Tail();
    this.bloodType = "";
    this.starSign = new StarSign();
    this.traits = {
        traitPositive: "",
        traitNeutral: "",
        traitNegative: "",
    };

    //Iiniate Catgirl on first creation.
    this.init = function () {
        //RNG a name
        this.name = femaleNames[getIndexFloor(femaleNames.length, 0)];

        //RNG age
        //TODO: implement age range input with. Possible minimum age of 18.
        //Hard coded range of 18-60.
        this.age = getIndexFloor(60, 18);

        this.bloodType = bloodTypes[getIndexFloor(bloodTypes.length, 0)];

        this.traits.traitPositive = positivePersonalityTraits[getIndexFloor(positivePersonalityTraits.length, 0)];
        this.traits.traitNeutral = negativePersonalityTraits[getIndexFloor(negativePersonalityTraits.length, 0)];
        this.traits.traitNegative = neutralPersonalityTraits[getIndexFloor(neutralPersonalityTraits.length, 0)];};
    this.init();
}