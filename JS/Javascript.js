var ctx;
var canvas;
var x;
var y;

function title()
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
}

window.onload = title;


function vertex(x,y)
{
    var ctx = document.getElementById('my_canvas').getContext('2d'); 
    ctx.arc(x,y,10,0,2 * Math.PI,false);
    ctx.fill();
}

for(x=400;x<800;x=x+300)
    
{
for(y=300;y<700;y=y+100)
{
    vertex(x,y);
}
    
}