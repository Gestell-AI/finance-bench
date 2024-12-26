# Question 125

## Prompt

In the document PEPSICO 2022 10K, What is the FY2022 unadjusted EBITDA % margin for PepsiCo? Calculate unadjusted EBITDA using unadjusted operating income and D&A (from cash flow statement). Give a response to the question by relying on the details shown in the statement of cash flows and the P&L statement.

## Response

```results
[
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 42",
    "reason": "Gestell selected this node for containing the PepsiCo 2022 10K document and relevant financial data."
  },
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 45-46",
    "reason": "Gestell selected this node for providing additional context on PepsiCo's 2022 performance, which is helpful for the calculation."
  },
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 73",
    "reason": "Gestell selected this node for including details on PepsiCo's assets and capital spending, which could be relevant to the calculation."
  },
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 4-9",
    "reason": "Gestell selected this node for offering a company overview and operational structure, which provides context for the financial data."
  },
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 56",
    "reason": "Gestell selected this node for containing information on PepsiCo's return on invested capital (ROIC), which is relevant to financial analysis."
  },
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 74-76",
    "reason": "Gestell selected this node for providing financial data, including amortization and depreciation, which is relevant to the calculation."
  },
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 40",
    "reason": "Gestell selected this node for providing financial performance data for 2022, including operating profit, which is crucial for the calculation."
  },
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 111",
    "reason": "Gestell selected this node for containing PepsiCo's statement of cash flows for 2022, which includes depreciation and amortization."
  },
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 67",
    "reason": "Gestell selected this node for providing PepsiCo's statement of equity, which is relevant to financial analysis."
  },
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 56-61",
    "reason": "Gestell selected this node for detailing PepsiCo's critical accounting policies and estimates, which is relevant to financial analysis."
  }
]
```

```cot
1. **Document and Section:** Analyze the PepsiCo 2022 10K document. Specifically, focus on the Statement of Cash Flows and the Profit & Loss (P&L) statement to extract the necessary data for EBITDA calculation.

2. **Detailed Analysis and Calculations:**

   * **Step 1: Locate Unadjusted Operating Income:** Find the "Unadjusted Operating Income" figure from the P&L statement for FY2022.  Let's assume this value is X.

   * **Step 2: Locate Depreciation and Amortization (D&A):** Find the "Depreciation and Amortization" figure from the Statement of Cash Flows for FY2022. Let's assume this value is Y.

   * **Step 3: Calculate Unadjusted EBITDA:** Use the formula:  Unadjusted EBITDA = Unadjusted Operating Income + D&A.  Therefore, Unadjusted EBITDA = X + Y. Let's assume the result is Z.

   * **Step 4: Locate Net Revenue (or Total Revenues):** Find the "Net Revenue" or "Total Revenues" figure from the P&L statement for FY2022. Let's assume this value is W.

   * **Step 5: Calculate Unadjusted EBITDA Margin:** Use the formula: Unadjusted EBITDA Margin = (Unadjusted EBITDA / Net Revenue) * 100.  Therefore, Unadjusted EBITDA Margin = (Z / W) * 100.  This will give the percentage margin. Let's assume the result is P%.

3. **Response Rules:**

   * Present the final answer as a bullet point.
   * Format the Unadjusted EBITDA as a dollar value according to the specified formatting rules (millions with 2 decimal places, billions with 1 decimal place and a zero).
   * Format the Unadjusted EBITDA Margin as a percentage with 1 decimal place.
   * If the calculated values are zero, state "nothing happened".  The response should clearly indicate if there was no change.


```

- **Locate Unadjusted Operating Profit:** The 2022 10K (page 40) lists PepsiCo's operating profit as $11512 million.

- **Locate Depreciation and Amortization:** The 2022 10K (page 74) lists PepsiCo's total depreciation and amortization as $2685 million. It also lists amortization of intangible assets as $78 million. Total D&A is $2685 + $78 = $2763 million.

- **Calculate Unadjusted EBITDA:** Unadjusted EBITDA = Operating Profit + D&A = $11512 million + $2763 million = $14275 million

- **Locate Net Revenue:** The 2022 10K (page 40) lists PepsiCo's net revenue as $86392 million.

- **Calculate Unadjusted EBITDA Margin:** Unadjusted EBITDA Margin = (Unadjusted EBITDA / Net Revenue) _ 100 = ($14275 million / $86392 million) _ 100 = 16.5%

**Final Answer:** $14275.00 million, 16.5%

## Correct Answer

16.5%
