// Exercise 6.3 - Scatterplot of star rating vs energy consumption
const drawScatterplot = data => {
    const svg = d3.select("#scatterplot")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    const innerChart = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    xScaleS
        .domain([0, d3.max(data, d => d.star)])
        .range([0, innerWidth])
        .nice();

    yScaleS
        .domain([0, d3.max(data, d => d.energyConsumption)])
        .range([innerHeight, 0])
        .nice();

    rScale
        .domain([0, d3.max(data, d => d.screenSize)])
        .range([0, 12]);

    innerChart
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScaleS(d.star))
        .attr("cy", d => yScaleS(d.energyConsumption))
        .attr("r", d => rScale(d.screenSize))
        .attr("fill", d => colorScale(d.screenTech))
        .attr("stroke", d => colorScale(d.screenTech))
        .attr("fill-opacity", 0.3);

    innerChart
        .append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(d3.axisBottom(xScaleS));

    innerChart
        .append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScaleS));

    svg
        .append("text")
        .attr("class", "axis-label")
        .attr("x", margin.left + innerWidth / 2)
        .attr("y", height - 15)
        .attr("text-anchor", "middle")
        .text("Star rating");

    svg
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("x", -(margin.top + innerHeight / 2))
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .text("Labelled energy consumption (kWh/year)");

    // Legend for the screen technology colours
    const legendItems = d3.select("#scatterplot-legend")
        .selectAll(".legend-item")
        .data(colorScale.domain())
        .join("li")
        .attr("class", "legend-item");

    legendItems
        .append("span")
        .attr("class", "legend-color")
        .style("background-color", d => colorScale(d));

    legendItems
        .append("span")
        .text(d => d);
};
