# Question 63

## Prompt

In the document BOEING 2022 10K, Does Boeing have an improving gross margin profile as of FY2022? If gross margin is not a useful metric for a company like this, then state that and explain why.

## Response

```results
[
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 24-25",
    "reason": "Gestell selected this node for containing Boeing's FY2022 10K report, which includes the necessary financial data (Revenue and Cost of Goods Sold) for the requested analysis."
  },
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 38",
    "reason": "Gestell selected this node for providing additional financial data points for Boeing's FY2022 10K report, including details on revenue and cost of goods sold, which are crucial for the requested analysis."
  },
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 25",
    "reason": "Gestell selected this node for offering a comprehensive overview of Boeing's FY2022 financial performance, including segment-level details on revenue and cost of goods sold, which are essential for the requested analysis."
  },
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 31-32",
    "reason": "Gestell selected this node for providing a detailed breakdown of Boeing's Commercial Airplanes (BCA) segment performance in FY2022, including revenue and cost of goods sold, which are crucial for the requested analysis."
  },
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 27-28",
    "reason": "Gestell selected this node for containing specific information on Boeing's cost of sales for FY2022, a key component in calculating gross margin and assessing the company's profitability."
  },
  {
    "citation": "Filename: BOEING_2018_10K.pdf, pages: 24",
    "reason": "Gestell selected this node for providing cost of sales data for FY2016-2018, which can be used for comparative analysis to assess trends in Boeing's profitability and the usefulness of gross margin as a metric."
  },
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 118",
    "reason": "Gestell selected this node for offering additional context on Boeing's financial statements, including details on assets and liabilities, which can be useful in a comprehensive analysis of the company's financial health and the suitability of gross margin as a key performance indicator."
  }
]
```

```cot
1. Analyze document: BOEING 2022 10K. Specifically, examine the income statement to find Revenue and Cost of Goods Sold (COGS) for FY2022 and prior years (if available for comparison).  Also, review any management discussion and analysis (MD&A) sections that might discuss gross margin or its limitations in the context of Boeing's business.

2. Detailed Analysis:

* **Calculate Gross Margin for FY2022:** Use the formula provided: (Revenue - COGS) / Revenue.  Obtain Revenue and COGS figures from the Boeing 2022 10K income statement.  Calculate the gross margin as a percentage. Format the result to one decimal place (e.g., 10.2%).

* **Calculate Gross Margin for Prior Years (if available):** Repeat the calculation for at least one prior fiscal year to determine if there's an improvement.  Format the result to one decimal place.

* **Compare Gross Margin:** Compare the FY2022 gross margin to the prior year(s).  Determine if there is an improvement (increase) or decline (decrease).  Calculate the percentage change in gross margin between the years. Format the percentage change to one decimal place (e.g., 5.1%).

* **Assess Usefulness of Gross Margin for Boeing:**  The prompt requires assessing whether gross margin is a useful metric for Boeing.  Consider both sides:

    * **Arguments for usefulness:** Gross margin can still provide insights into Boeing's pricing power and cost efficiency in manufacturing its products.  A higher gross margin might indicate better cost control or successful pricing strategies.

    * **Arguments against usefulness:**  Boeing's business is complex, involving long-term contracts, significant R&D expenses, and substantial variations in project costs.  Gross margin might not fully capture the complexities of these factors.  Consider whether other metrics (like operating margin or return on assets) might provide a more comprehensive picture of Boeing's profitability.  The MD&A section might offer insights into this.

3. Response Rules:

* Respond in bullet points.
* Clearly state the calculated gross margin for FY2022 and any prior years used for comparison, formatted according to the specified guidelines.
* Clearly state the percentage change in gross margin between the years compared, formatted to one decimal place.
* If the percentage change is 0, state "Nothing happened".
* Explicitly address the usefulness of gross margin for Boeing, presenting arguments both for and against its usefulness in the context of Boeing's specific business model and complexities.  Support this assessment with reasoning and potentially with information from the 10K's MD&A section.
* Conclude with a final answer that summarizes whether Boeing shows an improving gross margin profile in FY2022, considering both the quantitative data and the qualitative assessment of the metric's usefulness.  The final answer must include both the $ and % changes.  If the change is 0, state "Nothing happened".


```

- 2022 Gross Margin: ($66608 millions - $63106 millions) / $66608 millions = 5.3%
- 2021 Gross Margin: ($62286 millions - $59269 millions) / $62286 millions = 4.8%
- Change in Gross Margin: 5.3% - 4.8% = 0.5%
- Change in Gross Margin Value: $3502 millions - $3017 millions= $485 millions

While Boeing's gross margin shows a slight improvement of 0.5% and $485 million from 4.8% in 2021 to 5.3% in 2022, its usefulness as a standalone metric for assessing Boeing's financial health is limited.

Arguments for its usefulness include providing insights into production cost efficiency and pricing strategies. An improvement, even if small, suggests positive movement in these areas.

However, Boeing's business model involves complex, long-term contracts, substantial research and development expenses, and program accounting that can distort traditional cost allocations. Furthermore, significant charges on development programs, like those mentioned for the VC-25B, KC-46A Tanker, and other defense programs in 2022, can heavily influence cost of sales and thus gross margin. These factors make gross margin a less comprehensive indicator of overall profitability compared to metrics like operating margin or return on assets, which consider a broader range of expenses and business complexities.

**Final Answer:** Boeing's gross margin improved by $485 million and 0.5% in FY2022, but its usefulness as a primary indicator of financial health is limited due to the complexities of Boeing's business model and accounting practices.

## Correct Answer

Yes. Boeing has an improving gross margin profile as of FY2022. Gross profit improved from $3,017 million in FY2021 to $3,502 million in FY2022. Gross margin % improved from 4.8% in FY2021 to 5.3% in FY2022.
