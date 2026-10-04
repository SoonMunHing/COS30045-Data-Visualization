// Exercise 4.3 - Responsive SVG container

const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 500 1000")
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
// Exercise 4.6 - Scales: xScale maps count to bar width, yScale spaces the brands
const drawBarChart = data => {
    // Domain uses d3.max (740) rather than a fixed value so the longest bar fills the chart
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.count)])
        .range([0, 500]);

    const yScale = d3.scaleBand()
        .domain(data.map(d => d.brand))
        .range([0, 1000])
        .padding(0.2);

    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("width", d => xScale(d.count))
        .attr("height", yScale.bandwidth())
        .attr("x", 0)
        .attr("y", d => yScale(d.brand))
        .attr("fill", "steelblue");
};
