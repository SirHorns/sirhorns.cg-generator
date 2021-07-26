//VARIABLES
//catgirlArrays
var catArrayMain = [];
var catArrayTrash = [];

//Function Creates catgirl and returns the configured object.
function makeCat() {
    var VCAT = new Catgirl();
    return VCAT;
}
function rerollCat() {
    exportInfo(makeCat());
}
function generateCat() {
    exportInfo(makeCat());
}

//HTML FUNCTIONS
//Creates a cat girl then exports it to a new html card
function exportToCatCard() {
    //Gets the card template
    var wrapper = $(".catcard-container");
    var container = $("#CatCardTemplate").clone();
    wrapper.empty();

    //Loops through array of catgirls and makes each a seperate card with their info in it.
    for (var i in catArrayMain) {
        //create clone of containers to populate with data
        var tmpCon = container.clone();

        //SetIDs of html elements
        tmpCon.attr("id", "catCard" + i);
        $(".button_removeCat", tmpCon).attr("id", i);
        $(".button_reload", tmpCon).attr("id", i);
        $(".button_lock", tmpCon).attr("id", i);
        $(".button_json", tmpCon).attr("id", i);

        //unhide the card.
        tmpCon.css("display", "block");

        //check if catgirl object is locked or not before setting the html lock buttons svg
        //currently all cards are reloaded when I new one is added.
        //TODO: only append cards instead of remaking them all
        if (catArrayMain[i].lock.state == "UNLOCK") {
            $(".icon-unlocked", tmpCon).css("display", "block");
            $(".icon-locked", tmpCon).css("display", "none");
        } else {
            $(".icon-unlocked", tmpCon).css("display", "none");
            $(".icon-locked", tmpCon).css("display", "block");
        }

        //Call export info function
        tmpCon = exportInfo(i, tmpCon);

        //TODO: Actually do something with this display bool
        catArrayMain[i].displayed = true;

        //append new card into html div of hidden cards/
        wrapper.append(tmpCon);
    }
}

//Updates an existing html cat girl card
function exportCatToHTMLCard(index) {
    var elemID = "#catCard" + index;

    exportInfo(index, $(elemID));
}

//Exports directly to html if it exists or returns the cloned html container to be used.
function exportInfo(cat) {
    var wrapper = $(".catcard-container");
    var container = $("#CatCardTemplate");
    wrapper.empty();

    $(".name", container).text(cat.name);
    $(".age", container).text(cat.age);


    $(".hieght", container).text(cat.body.hieght + " cm");
    $(".wieght", container).text(cat.body.wieght + " kg");
    $(".skinTone", container).text(cat.body.skinTone);
    $(".cupSize", container).text(cat.body.cupSize);
    $(".bodyFigure", container).text(cat.body.bodyFigure);
    $(".bodyType", container).text(cat.body.bodyType);

    $(".hasCatEyes", container).text(cat.eyes.catLike);

    //If cat eyes have no conditions
    if (cat.eyes.eyeConditions.noCondition) {
        $(".eyeNormal", container).css('display', 'block');
        $(".heterochromia", container).css('display', 'none');

        $(".eyeColor", container).text(cat.eyes.naturalColor);
        $(".eyeColorExample", container).css("background-color", cat.eyes.naturalColor);

    } else {
        $(".eyeNormal", container).css('display', 'none');
        $(".eyeConditions", container).css('display', 'block');

        if (cat.eyes.eyeConditions.heterochromia.hasCondition) {
            $(".heterochromia", container).css('display', 'block');
            $(".heterochromiaType", container).text(cat.eyes.eyeConditions.heterochromia.type);

            //Central
            if (cat.eyes.eyeConditions.heterochromia.type == "central") {
                console.log("Inside Central: " + cat.eyes.eyeConditions.heterochromia.type);
                heterochromiaDivSwitch('block', 'none', 'none');

                $(".eyeColor", container).text(cat.eyes.naturalColor);
                $(".eyeColorExample", container).css("background-color", cat.eyes.naturalColor);

                $(".eyeRing", container).text(cat.eyes.ringColor);
                $(".eyeRingColorExample", container).css("background-color", cat.eyes.ringColor);





                $(".eyeRight", container).text(cat.eyes.right.color);
                $(".eyeRightColorExample", container).css("background-color", cat.eyes.right.color);

                $(".eyeLeftIrisRing", container).text(cat.eyes.left.iris.ringColor);
                $(".eyeLeftIrisRingColorExample", container).css("background-color", cat.eyes.left.iris.ringColor);

                $(".eyeRightIrisRing", container).text(cat.eyes.right.iris.ringColor);
                $(".eyeRightIrisRingColorExample", container).css("background-color", cat.eyes.right.iris.ringColor);
            }
            //Complete
            else if (cat.eyes.eyeConditions.heterochromia.type == "complete") {
                console.log("Inside Complete: " + cat.eyes.eyeConditions.heterochromia.type);
                heterochromiaDivSwitch('none', 'block', 'none');

                $(".eyeLeft", container).text(cat.eyes.left.color);
                $(".eyeLeftColorExample", container).css("background-color", cat.eyes.left.color);

                $(".eyeRight", container).text(cat.eyes.right.color);
                $(".eyeRightColorExample", container).css("background-color", cat.eyes.right.color);
            }
            //Sectoral
            else if (cat.eyes.eyeConditions.heterochromia.type == "sectoral") {
                heterochromiaDivSwitch('none', 'none', 'block');

                console.log("Inside Sectoral: " + cat.eyes.eyeConditions.heterochromia.type);
            };

            function heterochromiaDivSwitch(central, complete, sectoral) {
                $("#heterochromiaCentral", container).css('display', central);
                $("#heterochromiaComplete", container).css('display', complete);
                $("#heterochromiaSectoral", container).css('display', sectoral);
            }

            switch (cat.eyes.eyeConditions.heterochromia.type) {
                case "central":

                    break;
                case "complete":

                    break;
                case "sectoral":


                    break;

                default:
                    console.error("Reached end up exportInfo() Switch.");
                    break;
            }
        }

    }


    /*
      $(".hairColor", container).text(cat.hair.hairColor);
      $(".hairColorExample", container).css("background-color",cat.hair.hairColor);
      $(".hairType", container).text(cat.hair.hairType);
      $(".hairCut", container).text(cat.hair.hairCut);
      $(".hairLength", container).text(cat.hair.hairLength);
      $(".earColorMatches", container).text(cat.hair.earColorMatches);
      $(".tailColorMatches", container).text(cat.hair.tailColorMatches);
    
      $(".eyePupilType", container).text(catArrayMain[index].catInfo.eyes.eyePupilType);
      $(".eyePupilSize", container).text(catArrayMain[index].catInfo.eyes.eyePupilSize);
      $(".eyeColor", container).text(catArrayMain[index].catInfo.eyes.eyeColor);
    
      $(".earLength", container).text(catArrayMain[index].catInfo.ears.earLength);
      $(".earSize", container).text(catArrayMain[index].catInfo.ears.earSize);
      $(".earPattern", container).text(catArrayMain[index].catInfo.ears.earPattern);
      $(".earColors", container).text(catArrayMain[index].catInfo.ears.earColors);
      $(".furLength", container).text(catArrayMain[index].catInfo.ears.furLength);
      $(".isFluffy", container).text(catArrayMain[index].catInfo.ears.isFluffy);
    
      $(".hasClaws", container).text(catArrayMain[index].catInfo.claws.hasClaws);
      $(".length", container).text(catArrayMain[index].catInfo.claws.length);
      $(".sharpness", container).text(catArrayMain[index].catInfo.claws.sharpness);
      $(".color", container).text(catArrayMain[index].catInfo.claws.color);
    
      $(".tailLength", container).text(catArrayMain[index].catInfo.tail.tailLength);
      $(".tailSize", container).text(catArrayMain[index].catInfo.tail.tailSize);
      $(".tailPattern", container).text(catArrayMain[index].catInfo.tail.tailPattern);
      $(".tailColors", container).text(catArrayMain[index].catInfo.tail.tailColors);
      $(".tailHairLength", container).text(catArrayMain[index].catInfo.tail.tailHairLength);
      $(".isFluffy", container).text(catArrayMain[index].catInfo.tail.isFluffy);
    
      $(".bloodType", container).text(catArrayMain[index].miscInfo.bloodType);
      $(".starSign", container).text(catArrayMain[index].miscInfo.starSign);
    
      $(".traitPositive", container).text(catArrayMain[index].miscInfo.traits.traitPositive);
      $(".traitNeutral", container).text(catArrayMain[index].miscInfo.traits.traitNeutral);
      $(".traitNegative", container).text(catArrayMain[index].miscInfo.traits.traitNegative);
     */

    wrapper.append(container);
}

function lockToggle(button) {
    catArrayMain[button.id].lock.dispatch("toggle");

    var wrapper = $("#catCard" + button.id);
    var container = $(".button_lock", wrapper);

    if (catArrayMain[button.id].lock.state == "UNLOCK") {
        $(".icon-unlocked", container).css("display", "block");
        $(".icon-locked", container).css("display", "none");
    } else {
        $(".icon-unlocked", container).css("display", "none");
        $(".icon-locked", container).css("display", "block");
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
function getHexColor() {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

//MISC function
function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function onDownload(button_id) {
    download(
        JSON.stringify(catArrayMain[button_id], null, 2),
        "Cat-Girl-" + catArrayMain[button_id].basicInfo.name + ".json",
        "text/plain"
    );
}

/* function doThing() {
    const newCat = makeCat();

    var mainContainer =
    var div = document.createElement("div");
    div.innerHTML = '<span class="name">' + newCat +'</span>';
    mainContainer.appendChild(div);
} */

function weighted_random(options) {
    var weights = [];

    for (var i = 0; i < options.length; i++) {
        weights[i] = options[i].weight + (weights[i - 1] || 0);
    }

    var random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++) {
        if (weights[i] > random) {
            break;
        }
    }
    return options[i];
}
