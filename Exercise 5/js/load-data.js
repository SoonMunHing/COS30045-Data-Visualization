// Exercise 5.1 - Load data, tidying the column names and converting numbers
d3.csv("data/Ex5_TV_energy_55inchtv_byScreenType.csv", d => {
    return {
        screenTech: d.Screen_Tech.toUpperCase(),
        meanEnergy: +d["Mean(Labelled energy consumption (kWh/year))"]
    };
}).then(data => {
    data.sort((a, b) => b.meanEnergy - a.meanEnergy);
    drawBarChart(data);
});

// Exercise 5.2 - Load spot prices, reading year and price as numbers
d3.csv("data/ARE_Spot_Prices.csv", d => {
    return {
        year: +d.Year,
        averagePrice: +d["Average Price (notTas-Snowy)"]
    };
}).then(data => {
    console.log(data);
    drawLineChart(data);
});

// Exercise 5.3 - Load TV counts by screen size
d3.csv("data/Ex5_TV_screensize_counts.csv", d => {
    return {
        category: d.Screensize_Category,
        count: +d.Count
    };
}).then(data => {
    // No sort: keep the CSV's size order so slices follow a natural size sequence
    drawDonutChart(data);
});
