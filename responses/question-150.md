# Question 150

## Prompt

In the document WALMART 2020 10K, What is the FY2018 - FY2020 3 year average unadjusted EBITDA % margin for Walmart? Define unadjusted EBITDA as unadjusted operating income + depreciation and amortization from the cash flow statement. Answer in units of percents and round to one decimal place. Calculate what was asked by utilizing the line items clearly shown in the P&L statement and the cash flow statement.

## Response

```results
[
  {
    "citation": "Filename: WALMART_2020_10K.pdf, pages: 35",
    "reason": "Gestell selected this node for containing Walmart's balance sheet data for fiscal years 2018, 2019, and 2020, which is needed to calculate the 3-year average unadjusted EBITDA % margin."
  },
  {
    "citation": "Filename: WALMART_2020_10K.pdf, pages: 56",
    "reason": "Gestell selected this node for containing Walmart's consolidated statements of cash flows for fiscal years 2018, 2019, and 2020, which is needed to calculate the 3-year average unadjusted EBITDA % margin."
  },
  {
    "citation": "Filename: WALMART_2020_10K.pdf, pages: 51",
    "reason": "Gestell selected this node for containing Walmart's consolidated statements of income for fiscal years 2018, 2019, and 2020, which is needed to calculate the 3-year average unadjusted EBITDA % margin."
  }
]
```

```cot
1. Correct document and section to analyze: WALMART 2020 10K, specifically the Consolidated Statements of Income (P&L) and Consolidated Statements of Cash Flows.

2. Detailed analysis and calculations:

*   **Step 1: Locate necessary data points.**  Extract the following data from the Walmart 2020 10K:
    *   Unadjusted Operating Income (or EBIT): This will be found in the Consolidated Statements of Income. Obtain this value for FY2018, FY2019, and FY2020.
    *   Depreciation and Amortization: This will be found in the Consolidated Statements of Cash Flows. Obtain this value for FY2018, FY2019, and FY2020.
    *   Total Revenue: This will be found in the Consolidated Statements of Income. Obtain this value for FY2018, FY2019, and FY2020.

*   **Step 2: Calculate unadjusted EBITDA for each year.** For each fiscal year (FY2018, FY2019, and FY2020), perform the following calculation:
    *   Unadjusted EBITDA = Unadjusted Operating Income + Depreciation and Amortization

*   **Step 3: Calculate the unadjusted EBITDA margin for each year.** For each fiscal year, calculate the EBITDA margin using the following formula:
    *   Unadjusted EBITDA Margin = (Unadjusted EBITDA / Total Revenue) * 100

*   **Step 4: Calculate the 3-year average unadjusted EBITDA margin.** Sum the unadjusted EBITDA margins calculated in Step 3 for FY2018, FY2019, and FY2020. Then, divide the sum by 3 to obtain the average.

3. Response rules:

*   Present the final answer as a percentage rounded to one decimal place.
*   Use Markdown formatting as specified in the provided instructions.  Specifically, format percentages with one decimal place.
*   If the calculation results in a zero value, state "nothing happened".
*   The response should be concise and presented as bullet points outlining each step.  Do not include example responses.

```

- **FY2018 Unadjusted EBITDA:** $20437 millions + $10529 millions = $30966 millions
- **FY2018 Unadjusted EBITDA Margin:** ($30966 millions / $500343 millions) \* 100 = 6.2%
- **FY2019 Unadjusted EBITDA:** $21957 millions + $10678 millions = $32635 millions
- **FY2019 Unadjusted EBITDA Margin:** ($32635 millions / $514405 millions) \* 100 = 6.3%
- **FY2020 Unadjusted EBITDA:** $20568 millions + $10987 millions = $31555 millions
- **FY2020 Unadjusted EBITDA Margin:** ($31555 millions / $523964 millions) \* 100 = 6.0%
- **3-Year Average Unadjusted EBITDA Margin:** (6.2% + 6.3% + 6.0%) / 3 = 6.2%

**Final Answer:** 6.2%

## Correct Answer

6.2%