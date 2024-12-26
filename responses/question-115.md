# Question 115

## Prompt

In the document NIKE 2018 10K, We need to calculate a reasonable approximation (or exact number if possible) of a financial metric. Basing your judgment by information plainly provided in the statement of income, what is Nike's three year average of cost of goods sold as a % of revenue from FY2016 to FY2018? Answer in units of percents and round to one decimal place.

## Response

```results
[
  {
    "citation": "Filename: NIKE_2018_10K.pdf, pages: 23",
    "reason": "Gestell selected this node for containing Nike's Statement of Income for fiscal years 2016, 2017, and 2018, with figures for Cost of Goods Sold and Revenue."
  }
]
```

```cot
1. **Document and Section:** Analyze the NIKE 2018 10K document. Specifically, focus on the Statement of Income for fiscal years 2016, 2017, and 2018.

2. **Detailed Analysis and Calculations:**

* **Step 1: Locate the Cost of Goods Sold (COGS) and Revenue for each fiscal year (FY2016, FY2017, FY2018).**  Extract the values for COGS and Revenue from the Statement of Income for each of the three fiscal years.

* **Step 2: Calculate the COGS as a percentage of revenue for each year.** For each year, divide the COGS by the Revenue and multiply by 100 to express it as a percentage.

    * **FY2016:** (COGS FY2016 / Revenue FY2016) * 100 = Percentage for FY2016
    * **FY2017:** (COGS FY2017 / Revenue FY2017) * 100 = Percentage for FY2017
    * **FY2018:** (COGS FY2018 / Revenue FY2018) * 100 = Percentage for FY2018

* **Step 3: Calculate the three-year average.** Sum the percentages calculated in Step 2 for FY2016, FY2017, and FY2018, then divide by 3.

    * Three-Year Average = (Percentage for FY2016 + Percentage for FY2017 + Percentage for FY2018) / 3

* **Step 4: Round to one decimal place.** Round the final three-year average percentage to one decimal place.


3. **Response Rules:**

*   Present the final answer as a single bullet point.
*   Format the percentage with one decimal place (e.g., 6.9%).
*   The response should clearly state the three-year average COGS as a percentage of revenue.  No additional commentary is needed.

```

- FY2016: ($20441/$36397) \* 100 = 56.2%
- FY2017: ($19038/$34350) \* 100 = 55.4%
- FY2018: ($17405/$32376) \* 100 = 53.8%
- Three-year average: (56.2% + 55.4% + 53.8%) / 3 = 55.1%

**Final Answer:** 55.1%

## Correct Answer

55.1%
