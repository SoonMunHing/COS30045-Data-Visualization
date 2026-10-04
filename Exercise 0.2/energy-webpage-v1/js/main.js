// Exercise 4.3 - Responsive SVG container

const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 1600")
    .style("border", "1px solid black");

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

// Exercise 4.5 - Bar chart
// 96 bars x 16px spacing = 1536, fits the 1600-high viewBox
function drawBarChart(data) {
    const barHeight = 12;
    const barSpacing = 16;

    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("width", d => d.count)
        .attr("height", barHeight)
        .attr("x", 0)
        .attr("y", (d, i) => i * barSpacing)
        .attr("fill", "steelblue");
}
