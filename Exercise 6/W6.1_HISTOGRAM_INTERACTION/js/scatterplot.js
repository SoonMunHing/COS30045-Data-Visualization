// Exercise 6.3 - Scatterplot of star rating vs energy consumption
const drawScatterplot = data => {
    const svg = d3.select("#scatterplot")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    innerChartS = svg
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

    innerChartS
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScaleS(d.star))
        .attr("cy", d => yScaleS(d.energyConsumption))
        .attr("r", d => rScale(d.screenSize))
        .attr("fill", d => colorScale(d.screenTech))
        .attr("opacity", 0.5);

    innerChartS
        .append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(d3.axisBottom(xScaleS));

    innerChartS
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

    // Legend in the top right corner of the chart
    const legend = svg
        .append("g")
        .attr("transform", `translate(${width - margin.right - 70}, ${margin.top})`);

    colorScale.domain().forEach((tech, i) => {
        const legendItem = legend
            .append("g")
            .attr("transform", `translate(0, ${i * 20})`);

        legendItem
            .append("rect")
            .attr("width", 14)
            .attr("height", 14)
            .attr("fill", colorScale(tech));

        legendItem
            .append("text")
            .attr("class", "legend-label")
            .attr("x", 22)
            .attr("y", 12)
            .text(tech);
    });
};
