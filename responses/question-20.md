# Question 20

## Prompt

In the document AMAZON 2017 10K, What is Amazon's year-over-year change in revenue from FY2016 to FY2017 (in units of percents and round to one decimal place)? Calculate what was asked by utilizing the line items clearly shown in the statement of income.

## Response

```results
[
  {
    "citation": "Filename: AMAZON_2017_10K.pdf, pages: 38",
    "reason": "Gestell selected this node for containing Amazon's consolidated statements of operations for fiscal years 2015, 2016, and 2017, which includes the necessary revenue data to calculate the year-over-year change."
  },
  {
    "citation": "Filename: AMAZON_2017_10K.pdf, pages: 39",
    "reason": "Gestell selected this node for providing Amazon's Consolidated Statements of Comprehensive Income for fiscal years 2015, 2016, and 2017, which includes net income data that can be used to infer revenue changes."
  },
  {
    "citation": "Filename: AMAZON_2017_10K.pdf, pages: 37",
    "reason": "Gestell selected this node for presenting Amazon's consolidated statements of cash flows for fiscal years 2015, 2016, and 2017, which includes information that can be used to indirectly estimate revenue changes."
  },
  {
    "citation": "Filename: AMAZON_2017_10K.pdf, pages: 72",
    "reason": "Gestell selected this node for containing unaudited quarterly financial data for Amazon in 2016, which can be used to estimate the annual revenue for 2016."
  },
  {
    "citation": "Filename: AMAZON_2019_10K.pdf, pages: 70",
    "reason": "Gestell selected this node for providing unaudited quarterly financial data for Amazon in 2017 and 2018, which can be used to estimate the annual revenue for 2017."
  }
]
```

```cot
1. **Document and Section:** Analyze the AMAZON 2017 10K document. Specifically, focus on the Statement of Income (also known as the Income Statement) for fiscal years 2016 and 2017.  Locate the "Net sales" or "Total revenues" line item for both years.

2. **Analysis and Calculation:**

* **Step 1: Find Net Sales for FY2016:** Locate the "Net sales" figure for fiscal year 2016 from the income statement. Let's assume this value is X.
* **Step 2: Find Net Sales for FY2017:** Locate the "Net sales" figure for fiscal year 2017 from the income statement. Let's assume this value is Y.
* **Step 3: Calculate the change in revenue:**  Subtract the FY2016 net sales from the FY2017 net sales:  Change = Y - X
* **Step 4: Calculate the percentage change:** Divide the change in revenue by the FY2016 net sales and multiply by 100: Percentage Change = [(Y - X) / X] * 100
* **Step 5: Round the percentage change:** Round the result from Step 4 to one decimal place.

3. **Response Rules:**

*   Format the percentage change with one decimal place (e.g., 20.5%).
*   If the percentage change is 0, state "Nothing happened".
*   Present the final answer as a concise bullet point, including both the dollar change (from Step 3) and the percentage change (from Step 5).  Use the specified formatting for dollar values and percentages as detailed in the `Response Instructions`.  For example:
    * Revenue increased by $100.00 millions (20.5%)
    * Revenue decreased by $100.00 millions (-20.5%)
    * Nothing happened


```

- 2016 Net Sales: $135,987 million
- 2017 Net Sales: $177,866 million
- Change in Revenue: $177,866 million - $135,987 million = $41,879 million
- Percentage Change in Revenue: ($41,879 million / $135,987 million) \* 100% = 30.8%

**Final Answer:** Revenue increased by $41,879.00 millions (30.8%)

## Correct Answer

30.8%
