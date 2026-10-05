// Exercise 4.2 - Drawing with D3
// This file runs after d3.v7.min.js has loaded (see the script tags in index.html)


// ---------------------------------
// Step 2: Selecting and styling elements
// ---------------------------------

// Change the main heading colour
d3.select("h1")
    .style("color", "limegreen");

// Experiment: all the small yellow labels turn light blue
d3.selectAll(".eyebrow")
    .style("color", "#4dabf7");

// Experiment: give every appliance tag a green outline
d3.selectAll(".tag")
    .style("border", "1px solid limegreen");

// Experiment: give the svg a border so its area is visible
d3.select("svg")
    .style("border", "1px solid #29343e")
    .style("border-radius", "10px");


// ---------------------------------
// Step 3: Appending a paragraph
// ---------------------------------

// d3.select("div") only picks the FIRST div on the page,
// which is the section-title div in THE SUSPECTS (Appliances) section
d3.select("div")
    .append("p")
    .text("Purchasing a low energy consumption TV will help with your energy bills!");

// Test: selectAll would add the paragraph to EVERY div on the page
// d3.selectAll("div")
//     .append("p")
//     .text("Purchasing a low energy consumption TV will help with your energy bills!");


// ---------------------------------
// Step 4: Drawing a rectangle in the svg
// ---------------------------------

// Test: a bare rect has no size, so nothing shows on screen
// d3.select("svg")
//     .append("rect");

// Rectangle with position, size and colour
d3.select("svg")
    .append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 30)
    .attr("fill", "limegreen");
