// Exercise 4.3 - Responsive SVG container

const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid black");

// Test rectangle
svg
    .append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("width", 414)
    .attr("height", 16)
    .attr("fill", "blue");

// Exercise 4.4 - Load data from CSV
// Path is relative to index.html (site root), not to this js file
d3.csv("data/tvBrandCount.csv", d => {
    return {
        brand: d.brand,
        count: +d.count
    };
}).then(data => {
    console.log(data);
    console.log(data.length);
    console.log(d3.max(data, d => d.count));
    console.log(d3.min(data, d => d.count));
    console.log(d3.extent(data, d => d.count));

    data.sort((a, b) => b.count - a.count);
    console.log(data);

    drawBarChart(data);
});

// Built in Exercise 4.5
function drawBarChart(data) {}
