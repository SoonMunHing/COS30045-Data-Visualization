// Exercise 6.1 - Constants shared by the charts and interactions
const margin = { top: 40, right: 30, bottom: 60, left: 80 };
const width = 800;
const height = 400;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const barColor = "#ffd43b";
const bodyBackgroundColor = "#0d1117";

const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

const binGenerator = d3.bin()
    .value(d => d.energyConsumption);
