sap.ui.define([
	"./Tools"
], function () {
	"use strict";

	// class providing static utility methods.

	return {

             //where is the magic and the magic do stuff

        };
});

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

function onDownload(button_id) {
    download(
        JSON.stringify(catArrayMain[button_id], null, 2),
        "Cat-Girl-" + catArrayMain[button_id].basicInfo.name + ".json",
        "text/plain"
    );
}