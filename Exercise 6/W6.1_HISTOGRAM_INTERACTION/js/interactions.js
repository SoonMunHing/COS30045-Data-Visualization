// Exercise 6.2 - Filter the histogram by screen technology and screen size
const populateFilters = data => {
    const addButtons = (containerId, filters) => {
        d3.select(`#${containerId}`)
            .selectAll(".filter")
            .data(filters)
            .join("button")
            .attr("class", d => `filter ${d.isActive ? "active" : ""}`)
            .text(d => d.label)
            .on("click", (e, d) => {
                console.log("DOM event", e);
                console.log("Attached datum", d);

                if (!d.isActive) {
                    filters.forEach(filter => {
                        filter.isActive = d.id === filter.id;
                    });

                    d3.selectAll(`#${containerId} .filter`)
                        .classed("active", filter => filter.id === d.id);

                    updateHistogram(data);
                }
            });
    };

    const updateHistogram = data => {
        const screenId = filters_screen.find(f => f.isActive).id;
        const sizeId = filters_size.find(f => f.isActive).id;

        const updatedData = data.filter(tv =>
            (screenId === "all" || tv.screenTech === screenId) &&
            (sizeId === "all" || tv.screenSize === +sizeId)
        );

        const updatedBins = binGenerator(updatedData);

        d3.selectAll("#histogram rect")
            .data(updatedBins)
            .transition()
            .duration(500)
            .ease(d3.easeCubicInOut)
            .attr("y", d => yScale(d.length))
            .attr("height", d => innerHeight - yScale(d.length));

        // Extension - fade out the scatterplot dots that are filtered out
        d3.selectAll("#scatterplot circle")
            .transition()
            .duration(500)
            .attr("opacity", tv => updatedData.includes(tv) ? 0.5 : 0.05);
    };

    addButtons("filters_screen", filters_screen);
    addButtons("filters_size", filters_size);
};

// Exercise 6.4 - Tooltip for the scatterplot
const createTooltip = () => {
    const tooltip = innerChartS
        .append("g")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("pointer-events", "none");

    tooltip
        .append("rect")
        .attr("width", tooltipWidth)
        .attr("height", tooltipHeight)
        .attr("rx", 3)
        .attr("ry", 3)
        .attr("fill", barColor)
        .attr("fill-opacity", 0.9);

    tooltip
        .append("text")
        .text("NA")
        .attr("x", tooltipWidth / 2)
        .attr("y", tooltipHeight / 2 + 2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", bodyBackgroundColor)
        .style("font-weight", 900);
};

const handleMouseEvents = () => {
    innerChartS.selectAll("circle")
        .on("mouseenter", (e, d) => {
            // Extension - show the brand and screen size, widening the box to fit
            const text = d3.select(".tooltip text")
                .text(`${d.brand} ${d.screenSize}"`);
            const boxWidth = Math.max(tooltipWidth, text.node().getBBox().width + 16);

            d3.select(".tooltip rect").attr("width", boxWidth);
            text.attr("x", boxWidth / 2);

            const cx = +e.target.getAttribute("cx");
            const cy = +e.target.getAttribute("cy");

            d3.select(".tooltip")
                .attr("transform", `translate(${cx - boxWidth / 2}, ${cy - 1.5 * tooltipHeight})`)
                .transition()
                .duration(200)
                .style("opacity", 1);
        })
        .on("mouseleave", () => {
            d3.select(".tooltip")
                .interrupt()
                .style("opacity", 0)
                .attr("transform", "translate(0, 500)");
        });
};
