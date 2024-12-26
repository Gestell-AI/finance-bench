# Question 101

## Prompt

In the document LOCKHEEDMARTIN 2020 10K, We need to calculate a reasonable approximation (or exact number if possible) of a financial metric. Basing your judgment by information plainly provided in the balance sheet and the P&L statement, what is Lockheed Martin's FY2020 asset turnover ratio? Asset turnover ratio is defined as: FY2020 revenue / (average total assets between FY2019 and FY2020). Round your answer to two decimal places.

## Response

```results
[
  {
    "citation": "Filename: LOCKHEEDMARTIN_2021_10K.pdf, pages: 68",
    "reason": "Gestell selected this node for containing Lockheed Martin's Consolidated Balance Sheet data for the years 2020 and 2021, which is needed to calculate the FY2020 asset turnover ratio."
  },
  {
    "citation": "Filename: LOCKHEEDMARTIN_2020_10K.pdf, pages: 69",
    "reason": "Gestell selected this node for containing Lockheed Martin's Consolidated Balance Sheet data for the years 2019 and 2020, which is needed to calculate the FY2020 asset turnover ratio."
  },
  {
    "citation": "Filename: LOCKHEEDMARTIN_2022_10K.pdf, pages: 65",
    "reason": "Gestell selected this node for containing Lockheed Martin's Consolidated Balance Sheet data for the years 2021 and 2022, which provides data needed to approximate the FY2020 asset turnover ratio."
  }
]
```

```cot
1. **Document and Section:** Analyze the Lockheed Martin 2020 10K document. Specifically, examine the balance sheet to find total assets for FY2019 and FY2020, and the income statement (P&L) to find FY2020 revenue.

2. **Detailed Analysis and Calculations:**

   * **Step 1: Find FY2020 Revenue:** Locate the total revenue figure for FY2020 from the income statement.  Let's assume this value is `X` (replace with the actual value from the 10K).

   * **Step 2: Find FY2019 Total Assets:** Locate the total assets figure for FY2019 from the balance sheet. Let's assume this value is `A` (replace with the actual value from the 10K).

   * **Step 3: Find FY2020 Total Assets:** Locate the total assets figure for FY2020 from the balance sheet. Let's assume this value is `B` (replace with the actual value from the 10K).

   * **Step 4: Calculate Average Total Assets:** Calculate the average of total assets for FY2019 and FY2020 using the formula:  Average Total Assets = (A + B) / 2

   * **Step 5: Calculate Asset Turnover Ratio:** Calculate the asset turnover ratio using the formula: Asset Turnover Ratio = FY2020 Revenue / Average Total Assets = X / [(A + B) / 2]

   * **Step 6: Round the Result:** Round the calculated asset turnover ratio to two decimal places.

3. **Response Rules:**

   * Follow the specified formatting rules for numbers (dollar values, percentages, ratios).
   * Present the final answer as a single number rounded to two decimal places, representing the asset turnover ratio.  No additional commentary is needed beyond the numerical result.

```

- **FY2020 Revenue:** $65398.00 millions (from the 2020 10K Income Statement)
- **FY2019 Total Assets:** $47528.00 millions (from the 2020 10K Balance Sheet)
- **FY2020 Total Assets:** $50710.00 millions (from the 2020 10K Balance Sheet)
- **Average Total Assets:** ($47528.00 millions + $50710.00 millions) / 2 = $49119.00 millions
- **Asset Turnover Ratio:** $65398.00 millions / $49119.00 millions = 1.33

**Final Answer:** 1.33

## Correct Answer

1.33
