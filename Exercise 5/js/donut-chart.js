// Exercise 5.3 - Donut chart
const drawDonutChart = data => {
    const width = 800;
    const height = 500;
    const padding = 20;
    const radius = Math.min(width, height) / 2 - padding;

    const svg = d3.select("#donut-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    const donutContainer = svg
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.category))
        .range(["#ffd43b", "#4dabf7", "#ff8787"]);

    const pie = d3.pie()
        .value(d => d.count)
        .sort(null);

    const arcGenerator = d3.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius)
        .padAngle(0.02)
        .cornerRadius(4);

    const arcs = pie(data);

    donutContainer
        .selectAll("path")
        .data(arcs)
        .join("path")
        .attr("d", arcGenerator)
        .attr("fill", d => colorScale(d.data.category));

    donutContainer
        .selectAll(".donut-label")
        .data(arcs)
        .join("text")
        .attr("class", "donut-label")
        .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .text(d => `${d.data.category}: ${d.data.count}`);
};
