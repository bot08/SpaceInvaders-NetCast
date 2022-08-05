/*
 *  TODO: refactor this buggy shit
*/

// declare a variable
var curentMenu = null
//var bgm = document.getElementById("bgm");


function mainMenu(){
    // menu text
    var menus = ["Start", "Authors", "Exit"]
    var active = 0
    curentMenu = "main"

    function drawMenu() {
        // bg & canvas init
        SI.Game.prototype.initializeCanvas();

        // canvas
        var canvas = document.getElementById("gameview");
        var ctx = canvas.getContext("2d");
        
        // loop for render text & active
        marginFromTop = -200
        for (var i = 0; i < 3; i++) {
            // active
            if(i == active){
                ctx.fillStyle = "red";
            }else{
                ctx.fillStyle = "white";
            }
            // basic
            ctx.textAlign = "center";
            ctx.font = "32px Comic Sans MS";
            marginFromTop = marginFromTop + 100
            // render text
            ctx.fillText(menus[i], canvas.width/2, (canvas.height/2)+marginFromTop);
        }

        // show ver
        renderVer();

        // defoult game font (EXAMPLE)
        //ctx.fillStyle  = SI.Colors.text;
        //ctx.lineWidth = SI.Sizes.lineWidth;
        // custom font
        //ctx.fillStyle = "red";
        //ctx.textAlign = "center";
        //ctx.font = "30px Comic Sans MS";
    }

    // change active menu
    function activeChange(act){
        if(curentMenu == "main"){
            // we calculate ahead (+act)
            if(active+act >= 0 && active+act < 3){
                active = active + act;
                drawMenu();
            }
        }
    }

    // fix double click after another menu (maybe not work)
    if(firstLoad != true){
        // event keydown
        $(document).ready(function() {
            $(document).keydown(function (event) {
                if(gameRun != true && curentMenu == "main"){
                    var key = event.keycode || event.which;
                    switch (key) {
                    case 40:   // down
                        activeChange(1)
                        break;
                    case 38:   // up
                        activeChange(-1)
                        break;
                    case 13:   // enter
                        if(active == 0){
                            startGame()
                        }
                        if(active == 1){
                            authorsMenu()
                        }
                        if(active == 2){
                            if(window.NetCastBack){
                                window.NetCastBack();
                            }
                        }
                        break;
                    case 461:   // back
                        if(window.NetCastBack){
                            window.NetCastBack();
                        }
                        break;
                    }
                }
            })
        });

        var firstLoad = true
    }

    // draw
    drawMenu();
}


function authorsMenu(){
    // menu text
    var menus = ["License", "Back"]
    var active = 0
    curentMenu = "authors"

    function drawMenu() {
        // bg & canvas init
        SI.Game.prototype.initializeCanvas();

        // canvas
        var canvas = document.getElementById("gameview");
        var ctx = canvas.getContext("2d");
        
        // loop for render text & active
        marginFromTop = -150
        for (var i = 0; i < 2; i++) {
            // active
            if(i == active){
                ctx.fillStyle = "red";
            }else{
                ctx.fillStyle = "white";
            }
            // basic
            ctx.textAlign = "left";
            ctx.font = "32px Comic Sans MS";
            marginFromTop = marginFromTop + 100
            // render text
            ctx.fillText(menus[i], 200, (canvas.height/2)+marginFromTop);
        }

        // show ver
        renderVer();

        // info text
        var canvas = document.getElementById("gameview");
        var ctx = canvas.getContext("2d");
        ctx.textAlign = "center";
        ctx.font = "36px Comic Sans MS";
        ctx.fillStyle = "white"
        // render text
        ctx.fillText("There must be text", (canvas.width/2)+100, (canvas.height/2)-150);
        ctx.fillText("There must be text 2", (canvas.width/2)+100, (canvas.height/2)-50);
        ctx.fillText("There must be text 3", (canvas.width/2)+100, (canvas.height/2)+50);
        ctx.fillText("There must be text 4", (canvas.width/2)+100, (canvas.height/2)+150);
    }

    // change active menu
    function activeChange(act){
        if(curentMenu == "authors"){
            // we calculate ahead (+act)
            if(active+act >= 0 && active+act < 2){
                active = active + act;
                drawMenu();
            }
        }
    }

    // event keydown
    $(document).ready(function() {
        $(document).keydown(function (event) {
            if(gameRun != true && curentMenu == "authors"){
                var key = event.keycode || event.which;
                switch (key) {
                case 40:   // down
                    activeChange(1)
                    break;
                case 38:   // up
                    activeChange(-1)
                    break;
                case 13:   // enter
                    // todo
                    if(active == 0){
                        // todo
                    }
                    if(active == 1){
                        mainMenu()
                    }
                    break;
                case 461:   // back
                    mainMenu()
                    break;
                }
            }
        })
    });

    // draw
    drawMenu();
}


function loseMenu(){
    // menu text
    var menus = ["Retry", "Back to menu"]
    var active = 0
    curentMenu = "lose"

    function drawMenu() {
        // bg & canvas init
        SI.Game.prototype.initializeCanvas();

        // canvas
        var canvas = document.getElementById("gameview");
        var ctx = canvas.getContext("2d");
        
        // info text
        var canvas = document.getElementById("gameview");
        var ctx = canvas.getContext("2d");
        ctx.textAlign = "center";
        ctx.font = "56px Comic Sans MS";
        ctx.fillStyle = "white"
        // render text
        ctx.fillText("Defeat", (canvas.width/2), (canvas.height/2)-110);

        // loop for render text & active
        marginFromTop = -100
        for (var i = 0; i < 2; i++) {
            // active
            if(i == active){
                ctx.fillStyle = "red";
            }else{
                ctx.fillStyle = "white";
            }
            // basic
            ctx.textAlign = "center";
            ctx.font = "32px Comic Sans MS";
            marginFromTop = marginFromTop + 100
            // render text
            ctx.fillText(menus[i], canvas.width/2, (canvas.height/2)+marginFromTop);
        }

        // show ver
        renderVer();
    }

    // change active menu
    function activeChange(act){
        if(curentMenu == "lose"){
            // we calculate ahead (+act)
            if(active+act >= 0 && active+act < 2){
                active = active + act;
                drawMenu();
            }
        }
    }

    // event keydown
    $(document).ready(function() {
        $(document).keydown(function (event) {
            if(gameRun != true && curentMenu == "lose"){
                var key = event.keycode || event.which;
                switch (key) {
                case 40:   // down
                    activeChange(1)
                    break;
                case 38:   // up
                    activeChange(-1)
                    break;
                case 13:   // enter
                    if(active == 0){
                        startGame()
                    }
                    if(active == 1){
                        mainMenu()
                    }
                    break;
                case 461:   // back
                    mainMenu()
                    break;
                }
            }
        })
    });

    // draw
    drawMenu();
}


function winMenu(){
    // menu text
    var menus = ["Retry", "Back to menu"]
    var active = 0
    curentMenu = "win"

    function drawMenu() {
        // bg & canvas init
        SI.Game.prototype.initializeCanvas();

        // canvas
        var canvas = document.getElementById("gameview");
        var ctx = canvas.getContext("2d");
        
        // info text
        var canvas = document.getElementById("gameview");
        var ctx = canvas.getContext("2d");
        ctx.textAlign = "center";
        ctx.font = "56px Comic Sans MS";
        ctx.fillStyle = "white"
        // render text
        ctx.fillText("Victory", (canvas.width/2), (canvas.height/2)-110);

        // loop for render text & active
        marginFromTop = -100
        for (var i = 0; i < 2; i++) {
            // active
            if(i == active){
                ctx.fillStyle = "red";
            }else{
                ctx.fillStyle = "white";
            }
            // basic
            ctx.textAlign = "center";
            ctx.font = "32px Comic Sans MS";
            marginFromTop = marginFromTop + 100
            // render text
            ctx.fillText(menus[i], canvas.width/2, (canvas.height/2)+marginFromTop);
        }

        // show ver
        renderVer();
    }

    // change active menu
    function activeChange(act){
        if(curentMenu == "win"){
            // we calculate ahead (+act)
            if(active+act >= 0 && active+act < 2){
                active = active + act;
                drawMenu();
            }
        }
    }

    // event keydown
    $(document).ready(function() {
        $(document).keydown(function (event) {
            if(gameRun != true && curentMenu == "win"){
                var key = event.keycode || event.which;
                switch (key) {
                case 40:   // down
                    activeChange(1)
                    break;
                case 38:   // up
                    activeChange(-1)
                    break;
                case 13:   // enter
                    if(active == 0){
                        startGame()
                    }
                    if(active == 1){
                        mainMenu()
                    }
                    break;
                case 461:   // back
                    mainMenu()
                    break;
                }
            }
        })
    });

    // draw
    drawMenu();
}



// Start
function startGame(){
    gameRun = true;
    var game = new SI.Game();
	//bgm.play();
    game.start();
}

// render info
function renderVer(){
    // canvas
    var canvas = document.getElementById("gameview");
    var ctx = canvas.getContext("2d");
    ctx.textAlign = "right";
    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "white"
    // render text
    ctx.fillText("ver 1.0.0 dev build", canvas.width-11, canvas.height-11);
}