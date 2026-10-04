// Exercise 5.1 - Bar chart
const drawBarChart = data => {
    const width = 800;
    const height = 500;
    const margin = { top: 40, right: 30, bottom: 60, left: 90 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select("#bar-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    const innerChart = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const xScale = d3.scaleBand()
        .domain(data.map(d => d.screenTech))
        .range([0, innerWidth])
        .padding(0.3);

    // Extra 10% headroom so the value labels fit above the tallest bar
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.meanEnergy) * 1.1])
        .range([innerHeight, 0]);

    innerChart
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.screenTech))
        .attr("y", d => yScale(d.meanEnergy))
        .attr("width", xScale.bandwidth())
        .attr("height", d => innerHeight - yScale(d.meanEnergy));

    innerChart
        .selectAll(".bar-label")
        .data(data)
        .join("text")
        .attr("class", "bar-label")
        .attr("x", d => xScale(d.screenTech) + xScale.bandwidth() / 2)
        .attr("y", d => yScale(d.meanEnergy) - 8)
        .attr("text-anchor", "middle")
        .text(d => d.meanEnergy.toFixed(1));

    innerChart
        .append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(d3.axisBottom(xScale).tickSize(0).tickPadding(10));

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
        .text("Mean energy consumption (kWh/year)");
};
