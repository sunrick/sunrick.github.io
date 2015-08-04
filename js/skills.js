  var width = 960,
  height = 600

  var color = d3.scale.category10();

  var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("id","skills");

  var force = d3.layout.force()
  .gravity(0.05)
  .distance(85)
  .charge(-100)
  .size([width, height]);

  d3.json("graph.json", function(error, json) {
    if (error) throw error;

    force
    .nodes(json.nodes)
    .links(json.links)
    .start();

    var link = svg.selectAll(".link")
    .data(json.links)
    .enter().append("line")
    .attr("class", "link");

    var node = svg.selectAll(".node")
    .data(json.nodes)
    .enter().append("g")
    .attr("class", "node")
    .call(force.drag);

    node.append("circle")
    .attr("class", "test")
    .attr("r", 30)
    .style("fill", function(d) { return color(d.group); })

    node.append("text")
    .attr("x", 0)
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(function(d) { return d.name });

    force.on("tick", function() {
      link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });

      node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    });
  });