# Exercise 3 – Data Story: TV Energy Consumption

# TV Energy Consumption Data Visualisation

## Data Story

### Audience

The main audience for this visualisation is consumers who are interested in buying a television and want to understand its energy consumption. It may also be useful for households that are concerned about electricity usage, energy efficiency and environmental impact.

### Audience Interest

Consumers normally consider factors such as TV size, brand and features when choosing a television. However, energy consumption can also affect the long-term cost of using a TV. This visualisation helps users explore the TV energy consumption dataset and compare different televisions based on their characteristics.

The story focuses on how TV size relates to energy consumption. TVs are grouped into Small, Medium and Large categories to make the data easier to understand and compare. The visualisation allows the audience to identify patterns and consider energy efficiency when choosing a television.

The purpose of the visualisation is not to recommend one specific television, but to help the audience make a more informed decision based on the available data.

---

## About the Data

### Data Source

The visualisation uses the provided TV energy consumption dataset. The dataset contains information about televisions and their energy-related characteristics. The original dataset was used as the main source for the analysis and visualisation.

### Data Processing

The data was processed using KNIME Analytics Platform. Data processing included checking and preparing the dataset before it was used for visualisation.

A new size category was created to make TV sizes easier to compare:

* **Small:** less than 43 inches
* **Medium:** 44 to 65 inches
* **Large:** more than 66 inches

A KNIME expression was used to create these categories.

The processed data was then used to create the visualisations presented on the website.

### Privacy

The dataset contains information about television products rather than personal information about individuals. Therefore, the visualisation does not collect or display personal or sensitive information.

### Accuracy and Limitations

The visualisation is based on the information available in the provided dataset. The accuracy of the results depends on the accuracy and completeness of the original data.

The dataset may not contain every television currently available on the market, so the results should not be treated as a complete representation of all TVs.

The size categories also simplify continuous screen-size data into three groups. Based on the specified category rules, values of exactly **43 inches and 66 inches are not included in the Small, Medium or Large categories**. This should be considered when interpreting the results.

Energy consumption can also be affected by factors that may not be represented in the dataset, such as user settings, brightness, viewing time and actual usage conditions.

### Ethics

The visualisation aims to represent the data fairly and clearly without intentionally misleading the audience. The data has not been changed to support a particular conclusion.

The visualisation should be interpreted as a tool for exploring TV energy consumption rather than as direct purchasing advice. Factors other than energy consumption may also influence which television is suitable for an individual consumer.

---

## AI Declaration

I used Generative AI to help me understand how to create a KNIME expression for categorising television sizes into Small, Medium and Large groups. I also used Generative AI to assist with organising and improving the wording and structure of the README and Data Story. I reviewed the suggestions and applied them to my own work.
