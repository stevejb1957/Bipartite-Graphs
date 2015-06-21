var ctx;
var canvas;
var x;
var y;

function run()
{
    drawTitle();
}

function drawTitle()
{
    var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.fillStyle = "rgba(79, 33, 235, 0.72)";
    ctx.shadowColor = "#000";
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 3;
    ctx.font = "bold 80px Ariel";
    ctx.fillText("Bipartite Graphs",280,100);
    ctx.strokeText("Bipartite Graphs",280,100);
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.fillStyle = "black";
}

window.onload = run;


function drawVertex(x,y)
{
    var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.beginPath();
    ctx.arc(x,y,10,0,2 * Math.PI,false);
    ctx.closePath();
    ctx.fill();
}

for(var x = 400; x < 800; x += 300)    
{
    for(var y = 300; y < 700; y += 100)
    {
        drawVertex(x, y);
    }    
}
