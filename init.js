/////////////////////////////////////// globals /////////////////////////////////////////////
var canvasX = 1920;
var canvasY = 1080;
var stage = new createjs.Stage("wrapper");
var container = new createjs.Container();
var objects = {};
var Queue = new createjs.LoadQueue();
    
/////////////////////////////////////// class /////////////////////////////////////////////



/////////////////////////////////////// methods /////////////////////////////////////////////
function init(){
    createjs.MotionGuidePlugin.install();
    container = new createjs.Container();
    stage.addChild(container);

    stage.enableMouseOver();
    createjs.Touch.enable(stage);
    stage.update();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    init_adjust_screen();    
    init_initSceneOne();
}

function init_adjust_screen(){
    canvas = document.getElementById("wrapper");
    canvas.width = 1920;
    canvas.height = 1080;
    if(document.documentElement.clientWidth <= document.documentElement.clientHeight){
        //alert("?");
        screen = 0;
        //text.set({x:570, y:190, rotation:90});
        canvas.width = 1080;
        canvas.height = 1920;
        container.rotation = 90;
        container.x = 1080;
    }
};

function init_initSceneOne(){
    Queue.on("complete", init_HandleCompleteSceneOne, this);
    Queue.loadManifest([
        {id:"init", src:"img/init.png"},
        {id:"init_select", src:"img/init_select.png"},
    ]); 
}


function init_HandleCompleteSceneOne() {
    objects["init"] = new createjs.Bitmap(Queue.getResult("init")).set({scaleX: 0.24, scaleY:0.24});

    var but1 = new createjs.Shape(); objects["but1"] = but1;
    but1.graphics.beginFill("red").drawRect(0,0,800,300); but1.set({x:850, y:820, scaleX:0.3, scaleY:0.3, rotation:0, alpha:0.01});
    but1.addEventListener("click", onbut1Clicked);

    init_drawSceneOne();
}


function init_drawSceneOne(){
    container.addChild(objects["init"]);
    //container.addChild(objects["init_select"]);
    container.addChild(objects["but1"]);

    stage.update();
}

function loadlevel1(){
    removeelements();
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";   
    oScript.src="app.js";
    document.getElementById("effect").volume = 0.5;
    document.getElementById("myaudio").volume = 0.2;
    document.getElementById("myaudio").play();
    oHead.appendChild(oScript);
}
function loadlevel2(){
    removeelements();
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";   
    oScript.src="level2.js";
    document.getElementById("effect").volume = 0.5;
    document.getElementById("myaudio").volume = 0.2;
    document.getElementById("myaudio").play();
    oHead.appendChild(oScript);
}
function loadlevel3(){
    removeelements();
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";   
    oScript.src="level3.js";
    document.getElementById("effect").volume = 0.5;
    document.getElementById("myaudio").volume = 0.2;
    document.getElementById("myaudio").play();
    oHead.appendChild(oScript);
}
function loadduniao(){
    removeelements();
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";   
    oScript.src="duniao.js";
    document.getElementById("effect").volume = 0.5;
    document.getElementById("myaudio").volume = 0.2;
    document.getElementById("myaudio").play();
    oHead.appendChild(oScript);
}        
function loadecho(){
    removeelements();
    var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";   
    oScript.src="echo.js";
    document.getElementById("effect").volume = 0.5;
    document.getElementById("myaudio").volume = 0.2;
    document.getElementById("myaudio").play();
    oHead.appendChild(oScript);
}
function removeelements(){
    container.removeChild(objects["but1"]);
    container.removeChild(objects["but2"]);
    container.removeChild(objects["but3"]);
    container.removeChild(objects["but4"]);
    container.removeChild(objects["but5"]);
    container.removeChild(objects["but6"]);
    container.removeChild(objects["init"]);
}
function onbut1Clicked(){
    container.removeChild(objects["init"]);
    objects["init"] = new createjs.Bitmap(Queue.getResult("init_select")).set({scaleX: 0.5, scaleY:0.5});
    container.addChild(objects["init"]);

    var but2 = new createjs.Shape(); objects["but1"] = but2;
    but2.graphics.beginFill("red").drawRect(0,0,1200,250); but2.set({x:1100, y:250, scaleX:0.3, scaleY:0.3, rotation:0, alpha:0.01});
    but2.addEventListener("click", loadduniao);

    var but3 = new createjs.Shape(); objects["but2"] = but3;
    but3.graphics.beginFill("red").drawRect(0,0,600,200); but3.set({x:1240, y:480, scaleX:0.3, scaleY:0.3, rotation:0, alpha:0.01});
    but3.addEventListener("click", loadlevel1);

    var but4 = new createjs.Shape(); objects["but3"] = but4;
    but4.graphics.beginFill("red").drawRect(0,0,600,200); but4.set({x:1240, y:540, scaleX:0.3, scaleY:0.3, rotation:0, alpha:0.01});
    but4.addEventListener("click", loadlevel2);

    var but5 = new createjs.Shape(); objects["but4"] = but5;
    but5.graphics.beginFill("red").drawRect(0,0,600,200); but5.set({x:1240, y:600, scaleX:0.3, scaleY:0.3, rotation:0, alpha:0.01});
    but5.addEventListener("click", loadlevel3);

    var but6 = new createjs.Shape(); objects["but5"] = but6;
    but6.graphics.beginFill("red").drawRect(0,0,1200,250); but6.set({x:1100, y:700, scaleX:0.3, scaleY:0.3, rotation:0, alpha:0.01});
    but6.addEventListener("click", loadecho);

    container.addChild(but2);
    container.addChild(but3);
    container.addChild(but4);
    container.addChild(but5);
    container.addChild(but6);
}

///////////////////////////////////////Now we are on a go/////////////////////////////////////////
init();
//////////////////////////////////////////////////////////////////////////////////////////////////