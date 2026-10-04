// Exercise 5.1 - Load data, tidying the column names and converting numbers
d3.csv("data/Ex5_TV_energy_55inchtv_byScreenType.csv", d => {
    return {
        screenTech: d.Screen_Tech,
        meanEnergy: +d["Mean(Labelled energy consumption (kWh/year))"]
    };
}).then(data => {
    data.sort((a, b) => b.meanEnergy - a.meanEnergy);
    drawBarChart(data);
});
