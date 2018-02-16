import * as d3 from 'd3';

export const initChart = weather => {
  d3.select("svg").remove();

  var vis = d3.select("#graph")
    .append("svg");

  var w = 900;
  var h = 750;
  vis.attr("width", w)
    .attr("height", h);

  vis.text("The Graph")
    .select("#graph");

  var nodes = [{y: ((weather[0].main.temp) * (9/5) - 459.67) * 5, x: 0},
    {y: ((weather[1].main.temp) * (9/5) - 459.67) * 5, x: 100},
    {y: ((weather[2].main.temp) * (9/5) - 459.67) * 5, x: 200},
    {y: ((weather[3].main.temp) * (9/5) - 459.67) * 5, x: 300},
    {y: ((weather[4].main.temp) * (9/5) - 459.67) * 5, x: 400},
    {x: 0, y: 0},
    {x: 0, y: 550},
    {x: 500, y: 550},
    {x: 0, y: 500},
    {x: 0, y: 100},
    {x: 0, y: 150},
    {x: 0, y: 200},
    {x: 0, y: 250},
    {x: 0, y: 300},
    {x: 0, y: 350},
    {x: 0, y: 400},
    {x: 0, y: 450},
    {x: 0, y: 500},
    {x: 0, y: 550},
    {x: 400, y: 550},
    {x: 300, y: 550},
    {x: 200, y: 550},
    {x: 100, y: 550}];

  vis.selectAll("circle .nodes")
    .data(nodes)
    .enter()
    .append("svg:circle")
    .attr("class", "nodes")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", "2px")
    .attr("fill", "black");

  vis.selectAll("circle .nodes")
    .data(nodes)
    .enter()
    .append("svg:circle")
    .attr("class", "nodes")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });

  var links = [
    {source: nodes[0], target: nodes[1]},
    {source: nodes[1], target: nodes[2]},
    {source: nodes[2], target: nodes[3]},
    {source: nodes[3], target: nodes[4]},
    {source: nodes[5], target: nodes[6]},
    {source: nodes[6], target: nodes[7]}
  ];

  vis.selectAll(".line")
    .data(links)
    .enter()
    .append("line")
    .attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; })
    .style("stroke", "rgb(6,120,155)");


};
