# Question 30

## Prompt

In the document AMCOR 2023Q4 EARNINGS, How much was the Real change in Sales for AMCOR in FY 2023 vs FY 2022, if we exclude the impact of FX movement, passthrough costs and one-off items?

## Response

```results
[
  {
    "citation": "Filename: AMCOR_2023Q4_EARNINGS.pdf, pages: 1",
    "reason": "Gestell selected this node for containing Amcor's financial results for fiscal year 2023, including net sales figures that can be used to calculate the real change in sales after accounting for FX, passthrough costs, and one-off items."
  },
  {
    "citation": "Filename: AMCOR_2023Q4_EARNINGS.pdf, pages: 14",
    "reason": "Gestell selected this node for providing Amcor's financial performance data for fiscal years 2022 and 2023, including key financial metrics and a reconciliation of adjusted EBIT growth to comparable constant currency growth, which helps in understanding the impact of various factors on sales."
  },
  {
    "citation": "Filename: AMCOR_2023_10K.pdf, pages: 32-34",
    "reason": "Gestell selected this node for offering a detailed breakdown of Amcor's performance across its Flexibles and Rigid Packaging segments, including net sales data, and an analysis of the impact of currency fluctuations, raw material costs, and disposed operations on the company's financial performance."
  },
  {
    "citation": "Filename: AMCOR_2023Q4_EARNINGS.pdf, pages: 10",
    "reason": "Gestell selected this node for presenting Amcor's financial performance data for fiscal year 2023, with a breakdown of net sales growth by product category (Flexibles, Rigid, and Packaging), and an analysis of the impact of foreign exchange, raw material costs, and other factors on the reported growth figures."
  },
  {
    "citation": "Filename: AMCOR_2023_10K.pdf, pages: 50",
    "reason": "Gestell selected this node for providing Amcor plc's consolidated statements of income for fiscal years 2021, 2022, and 2023, which includes net sales data that can be used to calculate the real change in sales after accounting for various factors."
  }
]
```

```cot
1. Analyze the AMCOR 2023Q4 EARNINGS document, specifically focusing on the sections detailing sales figures for FY2023 and FY2022.  Pay close attention to any breakdowns of sales that isolate the impact of FX movement, passthrough costs, and one-off items.  Look for tables or explanations that provide sales figures adjusted for these factors.

2. **Data Extraction and Calculation:**

   * **Locate FY2023 Adjusted Sales:** Find the reported sales figure for FY2023 that explicitly excludes the effects of FX movement, passthrough costs, and one-off items. Let's call this value "Adjusted Sales FY2023".
   * **Locate FY2022 Adjusted Sales:** Find the comparable sales figure for FY2022, also adjusted to exclude the same factors. Let's call this value "Adjusted Sales FY2022".
   * **Calculate the Real Change:** Subtract the Adjusted Sales FY2022 from the Adjusted Sales FY2023.
      * Real Change = Adjusted Sales FY2023 - Adjusted Sales FY2022
   * **Calculate the Percentage Change:** Divide the Real Change by Adjusted Sales FY2022 and multiply by 100.
      * Percentage Change = (Real Change / Adjusted Sales FY2022) * 100

3. **Response Rules:**

   * Format the Real Change according to the specified rules for dollar values (millions or billions as appropriate).
   * Format the Percentage Change with one decimal place.
   * If the Real Change is zero, state "Nothing happened".
   * Present the final answer as a concise bullet point list including both the dollar and percentage changes.  Use the exact wording from the response instructions.

```

The user wants to find the real change in sales between FY 2023 and FY 2022, excluding the impact of FX movement, passthrough costs, and one-off items.

I need to look for sales figures that are adjusted for these factors in the AMCOR 2023Q4 EARNINGS document.

Page 1 of the AMCOR_2023Q4_EARNINGS.pdf provides a table with "Comparable constant currency △%". This seems to be the relevant data.

The table shows that for Net sales, the "Comparable constant currency △%" is "-". This means there was no change on a comparable constant currency basis.

To confirm this, I will check page 10 of the same document. This page provides a breakdown of Net Sales growth.

On page 10, for the twelve months ended June 30, the "Comparable Constant Currency Growth %" for Total Net Sales is listed as 0.0%.

This confirms that when excluding the impact of FX movement, passthrough costs, and one-off items, there was no change in sales between FY 2023 and FY 2022. for FY 2023 were $14,694 millions.

- Net sales for FY 2022 were $14,544 millions.
- The comparable constant currency growth for net sales is shown as 0.0%.
- This indicates that after excluding the impact of foreign exchange, raw material pass-through, and items affecting comparability, there was no change in sales.

**Final Answer:** Nothing happened

## Correct Answer

The Real Growth was flat in FY 2023 vs FY 2022.
