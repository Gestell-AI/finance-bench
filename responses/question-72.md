# Question 72

## Prompt

In the document CORNING 2021 10K, Taking into account the information outlined in the income statement, what is the FY2019 - FY2021 3 year average unadjusted operating income % margin for Corning? Answer in units of percents and round to one decimal place.

## Response

```results
[
  {
    "citation": "Filename: CORNING_2021_10K.pdf, pages: 65",
    "reason": "Gestell selected this node for containing the income statement data for Corning for fiscal years 2019, 2020, and 2021, which includes the necessary values for 'Operating Income' and 'Net Sales' to calculate the operating income margin."
  },
  {
    "citation": "Filename: CORNING_2022_10K.pdf, pages: 58",
    "reason": "Gestell selected this node for providing the income statement data for Corning for fiscal years 2019, 2020, and 2021, which includes the necessary values for 'Operating Income' and 'Net Sales' to calculate the operating income margin."
  },
  {
    "citation": "Filename: CORNING_2020_10K.pdf, pages: 70",
    "reason": "Gestell selected this node for containing the income statement data for Corning for fiscal years 2019, 2020, and 2018, which includes the necessary values for 'Operating Income' and 'Net Sales' to calculate the operating income margin."
  }
]
```

```cot
1. **Document and Section:** Analyze the CORNING 2021 10K document. Specifically, focus on the income statement for fiscal years 2019, 2020, and 2021.

2. **Analysis and Calculations:**

* **Step 1: Locate Operating Income:** For each fiscal year (FY2019, FY2020, FY2021), find the value of "Operating Income" from the income statement.  Let's denote these values as OI_2019, OI_2020, and OI_2021 respectively.

* **Step 2: Locate Net Sales:** For each fiscal year (FY2019, FY2020, FY2021), find the value of "Net Sales" (or a similar line item representing total revenue) from the income statement. Let's denote these values as NS_2019, NS_2020, and NS_2021 respectively.

* **Step 3: Calculate Operating Income Margin for Each Year:** For each year, calculate the operating income margin using the formula:

   Operating Income Margin = (Operating Income / Net Sales) * 100

   Calculate this for each year: OIM_2019, OIM_2020, OIM_2021.

* **Step 4: Calculate the 3-Year Average:** Add the three annual operating income margins (OIM_2019, OIM_2020, OIM_2021) and divide by 3:

   3-Year Average Operating Income Margin = (OIM_2019 + OIM_2020 + OIM_2021) / 3

3. **Response Rules:**

*   Format the final 3-year average operating income margin as a percentage with one decimal place (e.g., 12.3%).
*   The response should be concise and clearly state the calculated 3-year average.  No additional commentary is needed beyond the final answer.
*   If any of the required data is missing from the 10K, clearly state that the calculation cannot be performed due to missing data.


```

- **FY2019 Operating Income:** $1306 million
- **FY2019 Net Sales:** $11503 million
- **FY2019 Operating Margin:** ($1306/$11503) \* 100 = 11.3%

- **FY2020 Operating Income:** $509 million
- **FY2020 Net Sales:** $11303 million
- **FY2020 Operating Margin:** ($509/$11303) \* 100 = 4.5%

- **FY2021 Operating Income:** $2112 million
- **FY2021 Net Sales:** $14082 million
- **FY2021 Operating Margin:** ($2112/$14082) \* 100 = 15.0%

- **3-Year Average Operating Margin:** (11.3% + 4.5% + 15.0%) / 3 = 10.3%

**Final Answer:** 10.3%

## Correct Answer

10.3%
