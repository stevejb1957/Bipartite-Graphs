var ctx;
var canvas;
var x;
var y;
var graph = { vertices: [], edges: [] };
var ctx = document.getElementById('my_canvas').getContext('2d'); 

function run()
{
    drawTitle();
    buildGraph();
}

function drawTitle()
{
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

function drawVertex(vertex)
{
    ctx.beginPath();
    ctx.arc(vertex.x, vertex.y, 10, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
}

function drawEdge(vertex1, vertex2)
{
    ctx.beginPath();
    ctx.moveTo(vertex1.x, vertex1.y);
    ctx.lineTo(vertex2.x, vertex2.y);
    ctx.stroke();
    ctx.closePath();
}

function buildGraph()
{
    populateVertexSet();
    drawVertices();
    drawEdgesBetweenAllVertices();
}

function populateVertexSet()
{
    for(var x = 400; x < 800; x += 300)    
    {
        for(var y = 300; y < 700; y += 100)
        {
            graph.vertices.push({ x: x, y: y});
        }    
    }    
}

function drawVertices()
{
    for (var i = 0; i < graph.vertices.length; i++) 
    {
        drawVertex(graph.vertices[i]);
    }
}

function drawEdgesBetweenAllVertices()
{
    for (var i = 0; i < graph.vertices.length; i++) 
    {
        for (var j = 0; j < graph.vertices.length; j++) 
        {
            if (i != j)
            {
                drawEdge(graph.vertices[i], graph.vertices[j]);
            }
        }
    }
}