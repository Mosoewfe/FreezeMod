var temp1Var = 100; // default so tool doesn't set undefined before first use

async function _amyfunction(message, defaultValue = "") {
    return new Promise(resolve => {
        promptInput(message, (result) => {
            resolve(result);
        }, "freezeMod is asking you...", defaultValue);
    })
}

elements.freeze = {
    color: ["#00008B", "#ADD8E6"],
    tool: function (pixel) {
        pixel.temp = 1200;
        pixelTempCheck(pixel);
    },
    category: "tools"
}

elements.superHeat ={
    
}

elements.setTemp = {
    color: ['#ff0000', '#ffb300', '#80ff00', '#00ff33', '#00e6ff', '#0033ff', '#b300ff'],
    tool: function (pixel) {
        pixel.temp = temp1Var;
        pixelTempCheck(pixel);
    },
    onSelect: async function () {
        var answer1 = await _amyfunction("Please input what temperature you would like", temp1Var);
        if (!answer1) { return }
        temp1Var = Number(answer1);
    },
    category: "tools"
}