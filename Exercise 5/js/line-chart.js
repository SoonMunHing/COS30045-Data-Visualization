// Exercise 5.2 - Line chart
const drawLineChart = data => {
    const width = 800;
    const height = 500;
    const margin = { top: 40, right: 30, bottom: 60, left: 90 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select("#line-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    const innerChart = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year))
        .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.averagePrice)])
        .range([innerHeight, 0])
        .nice();

    innerChart
        .append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));

    innerChart
        .append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(yScale));

    svg
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("x", -(margin.top + innerHeight / 2))
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .text("Average spot price ($ per MWh)");

    svg
        .append("text")
        .attr("class", "axis-label")
        .attr("x", margin.left + innerWidth / 2)
        .attr("y", height - 10)
        .attr("text-anchor", "middle")
        .text("Year");

    innerChart
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("r", 4)
        .attr("cx", d => xScale(d.year))
        .attr("cy", d => yScale(d.averagePrice))
        .attr("fill", "#ffd43b");

    const lineGenerator = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.averagePrice));

    innerChart
        .append("path")
        .attr("d", lineGenerator(data))
        .attr("fill", "none")
        .attr("stroke", "#4dabf7")
        .attr("stroke-width", 2);

    const last = data[data.length - 1];
    innerChart
        .append("text")
        .attr("class", "line-label")
        .attr("x", xScale(last.year) - 10)
        .attr("y", yScale(last.averagePrice) - 12)
        .attr("text-anchor", "end")
        .text(`Average price: $${last.averagePrice}`);
};
