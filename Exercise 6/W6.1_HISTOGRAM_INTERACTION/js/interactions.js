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
            .attr("opacity", tv => updatedData.includes(tv) ? 1 : 0.05);
    };

    addButtons("filters_screen", filters_screen);
    addButtons("filters_size", filters_size);
};

// Exercise 6.4 - Tooltip (to be completed)
const createTooltip = () => {};

const handleMouseEvents = () => {};
