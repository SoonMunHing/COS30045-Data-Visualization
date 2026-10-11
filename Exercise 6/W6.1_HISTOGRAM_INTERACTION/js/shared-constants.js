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

// Exercise 6.3 - Scales for the scatterplot
const xScaleS = d3.scaleLinear();
const yScaleS = d3.scaleLinear();
const rScale = d3.scaleRadial();
const colorScale = d3.scaleOrdinal()
    .domain(["LCD", "LED", "OLED"])
    .range(["#4dabf7", "#69db7c", "#ff8787"]);

const binGenerator = d3.bin()
    .value(d => d.energyConsumption);

// Exercise 6.2 - Filter buttons for screen technology
const filters_screen = [
    { id: "all", label: "All", isActive: true },
    { id: "LCD", label: "LCD", isActive: false },
    { id: "LED", label: "LED", isActive: false },
    { id: "OLED", label: "OLED", isActive: false }
];

// Exercise 6.2 extension - Filter buttons for the most common screen sizes
const filters_size = [
    { id: "all", label: "All sizes", isActive: true },
    { id: "24", label: '24"', isActive: false },
    { id: "32", label: '32"', isActive: false },
    { id: "55", label: '55"', isActive: false },
    { id: "65", label: '65"', isActive: false },
    { id: "98", label: '98"', isActive: false }
];
