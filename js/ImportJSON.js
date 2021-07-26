//JSON Vars
var femaleNames, positivePersonalityTraits, negativePersonalityTraits, neutralPersonalityTraits;
$.getJSON("https://sirhorns.github.io/Data/femaleNames.json",function(json){femaleNames = json.femaleNames;});
$.getJSON("https://sirhorns.github.io/Data/positivePersonalityTraits.json",function(json){positivePersonalityTraits = json.positivePersonalityTraits;});
$.getJSON("https://sirhorns.github.io/Data/negativePersonalityTraits.json",function(json){negativePersonalityTraits = json.negativePersonalityTraits;});
$.getJSON("https://sirhorns.github.io/Data/neutralPersonalityTraits.json",function(json){neutralPersonalityTraits = json.neutralPersonalityTraits;});