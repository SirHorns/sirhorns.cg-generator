function Tools()
{
    const self = 
    {

    }
}

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

function onDownload() {
    if (VCAT === undefined) {
       console.warn("No catgirl created yet.");
    }else{
        download(JSON.stringify(VCAT, null, 2),"Cat-Girl-" + VCAT.name + ".json","text/plain"); 
        
    }
    
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