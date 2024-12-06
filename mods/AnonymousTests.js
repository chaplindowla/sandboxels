// Mod Made By Anonymous, ye, call me Anon Or Anonymous
// Just Some Of My Tests
// idk i made this bc i wat bored










elements.stranger_matter = {
    color: elements.strange_matter.color,
    category: "Custom Mod",
    stateHigh: "virus",
tempHigh: 100,
    behavior: [
        "XX|CR:stranger_matter%5 AND CH:stranger_matter AND M2%50|XX",
        "XX AND CH:stranger_matter AND M2%20|CR:stranger_matter%5 AND DL%5|XX AND CH:stranger_matter AND M2%20",
        "M2|M1 AND CR:stranger_matter%5 AND CH:stranger_matter|M2"
    ]
}



elements.line1 = {
    color: "#ffff00",
    name: "Horizontal Line",
    customColor: true,
    behavior: [
        "XX|XX|XX",
        "CR:line1|XX|CR:line1",
        "XX|XX|XX"
    ],
    category: "Custom Mod",
    reactions: {
        head: {elem1: null, elem2: null},
        body: {elem1: null, elem2: null}
    }
}

elements.line2 = {
    color: "#ffff00",
    name: "Vertical Line",
    customColor: true,
    behavior: [
        "XX|CR:line2|XX",
        "XX|XX|XX",
        "XX|CR:line2|XX"
    ],
    category: "Custom Mod",

}



elements.linescore = {
    name: "Lines Core",
    color: ["#000000", "#00ffff"],
    category: "Custom Mod",
    behavior: [
        "XX|CR:line2|XX",
        "CR:line1|XX|CR:line1",
        "XX|CR:line2|XX",
    ],
    tick: function(pixel) {
        // Define the colors array
        const colors = ["#000000", "#00ffff"];
        // Randomly select a color from the array
        pixel.color = colors[Math.floor(Math.random() * colors.length)];
    }
}

elements.reactest = {
    name: "Reactions Test",
    category: "Custom Mod",
    behavior: behaviors.POWDER,
    reactions: {
        sawdust: {elem1: null, elem2: "rock"}
    }
}

elements.customvirus = {
    name: "Virus But Better",
    behavior: [
       "XX|XX AND CH:customvirus|XX",
       "XX AND CH:customvirus|XX|XX AND CH:customvirus",
       "M2|M1 AND CH:customvirus|M2",
       
    ],
    color: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff", "#000000"],
    category: "Custom Mod",
    tick: function(pixel) {
        // Define the colors array
        const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff", "#000000"];
        // Randomly select a color from the array
        pixel.color = colors[Math.floor(Math.random() * colors.length)];
    }
}

elements.truevoid = {
    name: "Static Void",
    color: "#000000",
    behavior: [
      "XX|DL|XX",
      "DL|XX|DL",
      "M2|DL AND M1|M2",
       
    ],
    color: "#ffffff",
    category: "Custom Mod",
    tick: function(pixel) {
        // Define the colors array
        const colors2 = [
            "#ffffff", "#eeeeee", "#dddddd", "#cccccc", "#bbbbbb",
            "#aaaaaa", "#999999", "#888888", "#777777", "#666666",
            "#555555", "#444444", "#333333", "#222222", "#111111",
            "#000000", "#f7f7f7", "#f0f0f0", "#e9e9e9", "#e2e2e2",
            "#dbdbdb", "#d4d4d4", "#cdcdcd", "#c6c6c6", "#bfbfbf",
            "#b8b8b8", "#b1b1b1", "#aaaaaa", "#a3a3a3", "#9c9c9c",
            "#959595", "#8e8e8e", "#878787", "#808080", "#797979",
            "#727272", "#6b6b6b", "#646464", "#5d5d5d", "#565656",
            "#4f4f4f", "#484848", "#414141", "#3a3a3a", "#333333",
            "#2c2c2c", "#252525", "#1e1e1e", "#171717", "#101010",
            "#0b0b0b", "#f5f5f5", "#f2f2f2", "#efefef", "#ececec",
            "#e9e9e9", "#e6e6e6", "#e3e3e3", "#e0e0e0", "#dddddd",
            "#dada", "#d7d7d7", "#d4d4d4", "#d1d1d1", "#cecece",
            "#cbcbcb", "#c8c8c8", "#c5c5c5", "#c2c2c2", "#bfbfbf"
        ]
        // Randomly select a color from the array
        pixel.color = colors2[Math.floor(Math.random() * colors2.length)];
    }
}
elements.heater2 = {
    name: "Custom Heater",
    color: "#ff0000",
    behavior: [
        "XX|CO:-2000 AND CR:plasma%20|XX",
        "CO:-2000 AND CR:plasma%20|XX|CO:-2000 AND CR:plasma%20",
        "XX|CO:-2000 AND CR:plasma%20|XX",
    ],
    category: "Custom Mod",

}
elements.tool1 = {
    name: "Exploder",
    color: "#cc1a1a",
    extraInfo:"Explodes A Pixel If Found",
    tool: function(pixel) {
        if (pixel && (pixel.element !== "fire" && pixel.element !== "smoke" && pixel.element !== "explosion")) {
            pixel.element = "explosion";
        } else {
            console.log("No suitable element found");
        }
    },
    category: "tools"
};
elements.tool2 = {
    name: "Burner",
    color: elements.fire.color,
    extraInfo:"Sets Pixel Burning Property To True, imagine burning water or snow XDDDD",
    category: "tools",
    tool: function(pixel) {
        if (pixel && (pixel.element !== "fire" && pixel.element !== "smoke")) {
            pixel.burning = true
        }
    }
} 
elements.tool3 = {
    name: "Extinguisher",
    color: "#ee0000",
    extraInfo:"This is nice, no fire, no problems, isn't that good?",
    category: "tools",
    tool: function(pixel) {
        if (pixel) {
            pixel.burning = false
        }
    }
}
elements.walking_pixel_test = {
    color: ["#00ff00", "#0000ff", "#aaffaa", "#aaaaff"],
    behavior: [
        "XX|M2%15|XX",
        "M2%20|XX|M2%20",
        "M2|M1|M2",
    ],
    category: "Custom Mod"
}
elements.tempinfinity = {
    name: "Temp = Infinity",
    color: ["#ff0000", "#ffaaaa", "#ffbbbb", "#ffcccc"],
    category: "tools",
    tool: function(pixel) {
        if (pixel) {
            for (i=0; i<10; i++) {
                pixel.temp += Math.pow(10, 100)*Math.pow(10, 100)*Math.pow(Math.pow(10, 100), Math.pow(10, 100))
            }
        }
    }
}
elements.converter = {
    name: "Converter",
    color: ["#ffffff", "#000000", "#ffffff"],
    category: "tools",
    userInput: null, // Add a property to hold user input
    onSelect: function(pixel) {
        this.userInput = prompt("What Pixel To Replace The Current Pixel With?");
        // You might want to call tool here if applicable
    },
    tool: function(pixel) {
        if (pixel && this.userInput) { // Check if userInput is set
            pixel.element = this.userInput; // Use the stored userInput
        }
    }
}

