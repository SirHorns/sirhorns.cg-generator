//VARIABLES
var VCAT;

//Function Creates catgirl and returns the configured object.
function makeCat() {
    VCAT = new Catgirl();
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
    container.id = "NewCatCard";
    container.css("display", "block");

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

        $(".eyeColor", container).text(cat.eyes.naturalColor).css("background-color", cat.eyes.naturalColor);

    } else {
        $(".eyeNormal", container).css('display', 'none');
        $(".eyeConditions", container).css('display', 'block');

        if (cat.eyes.eyeConditions.heterochromia.hasCondition) {
            $(".heterochromia", container).css('display', 'block');
            $(".heterochromiaType", container).text(cat.eyes.eyeConditions.heterochromia.type);

            //Central
            if (cat.eyes.eyeConditions.heterochromia.type == "central") {
                heterochromiaDivSwitch('block', 'none', 'none');

                $(".eyeColor", container).text(cat.eyes.naturalColor).css("background-color", cat.eyes.naturalColor);

                $(".eyeRing", container).text(cat.eyes.ringColor).css("background-color", cat.eyes.ringColor);

                $(".eyeRight", container).text(cat.eyes.right.color).css("background-color", cat.eyes.right.color);

                $(".eyeLeftIrisRing", container).text(cat.eyes.left.iris.ringColor).css("background-color", cat.eyes.left.iris.ringColor);

                $(".eyeRightIrisRing", container).text(cat.eyes.right.iris.ringColor).css("background-color", cat.eyes.right.iris.ringColor);
            }
            //Complete
            else if (cat.eyes.eyeConditions.heterochromia.type == "complete") {
                heterochromiaDivSwitch('none', 'block', 'none');

                $(".eyeLeft", container).text(cat.eyes.left.color).css("background-color", cat.eyes.left.color);

                $(".eyeRight", container).text(cat.eyes.right.color).css("background-color", cat.eyes.right.color);
            }
            //Sectoral
            else if (cat.eyes.eyeConditions.heterochromia.type == "sectoral") {
                heterochromiaDivSwitch('none', 'none', 'block');

                console.warn("Sectoral Display and relating code not finished yet.");
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


    
      $(".hairColor", container).text(cat.hair.color).css("background-color",cat.hair.color);
      $(".hairType", container).text(cat.hair.type);
      $(".hairCut", container).text(cat.hair.cut);
      $(".hairLength", container).text(cat.hair.length);

      $(".earLength", container).text(cat.ears.length);
      $(".earSize", container).text(cat.ears.size);
      $(".earPattern", container).text(cat.ears.patterns);
      $(".earColor", container).text(cat.ears.color);

     
      $(".tailLength", container).text(cat.tail.length);
      $(".tailSize", container).text(cat.tail.size);
      $(".tailPattern", container).text(cat.tail.pattern);
      $(".tailColors", container).text(cat.tail.color);
      $(".tailHairLength", container).text(cat.tail.tailHairLength);
    
      $(".bloodType", container).text(cat.bloodType);
      $(".starSign", container).text(cat.starSign);

    /*  
      $(".earColorMatches", container).text(cat.hair.earColorMatches);
      $(".tailColorMatches", container).text(cat.hair.tailColorMatches);
    
      $(".eyePupilType", container).text(cat.eyes.eyePupilType);
      $(".eyePupilSize", container).text(cat.eyes.eyePupilSize);
      $(".eyeColor", container).text(cat.eyes.eyeColor);
    
      
    
      $(".hasClaws", container).text(cat.claws.hasClaws);
      $(".length", container).text(cat.claws.length);
      $(".sharpness", container).text(cat.claws.sharpness);
      $(".color", container).text(cat.claws.color);
    
      
    
      $(".traitPositive", container).text(cat.miscInfo.traits.traitPositive);
      $(".traitNeutral", container).text(cat.miscInfo.traits.traitNeutral);
      $(".traitNegative", container).text(cat.miscInfo.traits.traitNegative);
     */

    wrapper.append(container);
}

//MISC function
function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

/* function doThing() {
    const newCat = makeCat();

    var mainContainer =
    var div = document.createElement("div");
    div.innerHTML = '<span class="name">' + newCat +'</span>';
    mainContainer.appendChild(div);
} */