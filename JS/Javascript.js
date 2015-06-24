var ctx;
var canvas;
var x;
var y;
var graph = { vertices: [], edges: [] };
var ctx = document.getElementById('my_canvas').getContext('2d'); 

window.onload = run;

function run()
{
    drawTitle();
    buildGraph();
    drawGraph();
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

function buildGraph()
{
    generateVertexSet();
    generateEdgeSet();
}

function generateVertexSet()
{
    for(var x = 400; x < 800; x += 300)    
    {
        for(var y = 300; y < 700; y += 100)
        {
            graph.vertices.push({ x: x, y: y});
        }    
    }    
}

function generateEdgeSet()
{
    for (var i = 4; i < graph.vertices.length; i++) 
    {
        for (var j = 0; j < graph.vertices.length; j++) 
        {
            if (i != j)
            {
                connectVertices(i, j);
            }
        }
    }
}

function connectVertices(vertexIndex1, vertexIndex2)
{
    var edge = { from: graph.vertices[vertexIndex1], 
                 to:   graph.vertices[vertexIndex2] };
    if (!areVerticesConnected(edge.from, edge.to))
    {
        logConnection(vertexIndex1, vertexIndex2);
        graph.edges.push(edge);
    }
} 

function logConnection(vertexIndex1, vertexIndex2)
{
    console.log("Connecting " + vertexIndex1 + " to " + vertexIndex2);    
}

function areVerticesConnected(vertex1, vertex2)
{
    for (var i = 0; i < graph.edges.length; i++) 
    {
        var fromVertex = graph.edges[i].from;
        var toVertex = graph.edges[i].to;
        if ((areEqual(fromVertex, vertex1) && areEqual(toVertex, vertex2)) ||
            (areEqual(fromVertex, vertex2) && areEqual(toVertex, vertex1)))
        {
            return true;
        }
    }
    return false;
}

function areEqual(vertex1, vertex2)
{
    return vertex1.x == vertex2.x && vertex1.y == vertex2.y;
}

function drawGraph()
{
    for (var i = 0; i < graph.vertices.length; i++) 
    {
        drawVertex(graph.vertices[i]);
    }
    for (var i = 0; i < graph.edges.length; i++) 
    {
        drawEdge(graph.edges[i]);
    }
}

function drawVertex(vertex)
{
    ctx.beginPath();
    ctx.arc(vertex.x, vertex.y, 10, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
}

function drawEdge(edge)
{
    ctx.beginPath();
    ctx.moveTo(edge.from.x, edge.from.y);
    ctx.lineTo(edge.to.x, edge.to.y);
    ctx.strokeStyle = "red";
    ctx.lineWidth = "3";
    ctx.stroke();
    ctx.closePath();
}