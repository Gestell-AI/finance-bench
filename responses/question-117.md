# Question 117

## Prompt

In the document NIKE 2021 10K, When primarily referencing the income statement and the statement of financial position, what is the FY2021 inventory turnover ratio for Nike? Inventory turnover ratio is defined as: (FY2021 COGS) / (average inventory between FY2020 and FY2021). Round your answer to two decimal places.

## Response

```results
[
  {
    "citation": "Filename: NIKE_2021_10K.pdf, pages: 92",
    "reason": "Gestell selected this node for containing the income statement and statement of financial position for fiscal year 2021 (FY2021), including the Cost of Goods Sold (COGS) for FY2021 and inventory values for both FY2020 and FY2021."
  },
  {
    "citation": "Filename: NIKE_2021_10K.pdf, pages: 60",
    "reason": "Gestell selected this node for containing the income statement and statement of financial position for fiscal year 2021 (FY2021), including the Cost of Goods Sold (COGS) for FY2021 and inventory values for both FY2020 and FY2021."
  },
  {
    "citation": "Filename: NIKE_2021_10K.pdf, pages: 33",
    "reason": "Gestell selected this node for containing the income statement and statement of financial position for fiscal year 2021 (FY2021), including the Cost of Goods Sold (COGS) for FY2021 and inventory values for both FY2020 and FY2021."
  }
]
```

```cot
1. Analyze the NIKE 2021 10K document, specifically the income statement and balance sheet for fiscal years 2020 and 2021.

2. Extract the following data points:
    * **FY2021 Cost of Goods Sold (COGS):** Locate the COGS figure from the FY2021 income statement.
    * **FY2020 Ending Inventory:** Find the inventory value at the end of FY2020 from the FY2020 balance sheet.
    * **FY2021 Ending Inventory:** Find the inventory value at the end of FY2021 from the FY2021 balance sheet.

3. Calculate the average inventory:
    * **Average Inventory** = (FY2020 Ending Inventory + FY2021 Ending Inventory) / 2

4. Calculate the inventory turnover ratio:
    * **Inventory Turnover Ratio** = FY2021 COGS / Average Inventory

5. Round the final answer to two decimal places.

6. Response Rules:
    * Format the final answer as a ratio with two decimal places (e.g., 4.69).
    * Do not include any additional text or interpretation beyond the calculated ratio.


```

- **FY2021 COGS:** $24576 million
- **FY2020 Ending Inventory:** $676 million
- **FY2021 Ending Inventory:** $606 million
- **Average Inventory:** ($676 million + $606 million) / 2 = $641 million
- **Inventory Turnover Ratio:** $24576 million / $641 million = 38.34

**Final Answer:** 38.34

## Correct Answer

3.46
