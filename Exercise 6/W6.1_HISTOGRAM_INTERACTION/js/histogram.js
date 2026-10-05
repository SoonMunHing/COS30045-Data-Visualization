// Exercise 6.1 - Histogram of TV energy consumption
const drawHistogram = data => {
    const svg = d3.select("#histogram")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    const innerChart = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const bins = binGenerator(data);
    console.log(bins);
};
