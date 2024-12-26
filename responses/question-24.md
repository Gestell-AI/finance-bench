# Question 24

## Prompt

In the document AMCOR 2023 10K, Has AMCOR's quick ratio improved or declined between FY2023 and FY2022? If the quick ratio is not something that a financial analyst would ask about a company like this, then state that and explain why.

## Response

```results
[
  {
    "citation": "Filename: AMCOR_2023_10K.pdf, pages: 32-34",
    "reason": "Gestell selected this node for containing the necessary financial statements to calculate the quick ratio for fiscal years 2022 and 2023."
  },
  {
    "citation": "Filename: AMCOR_2023_10K.pdf, pages: 52",
    "reason": "Gestell selected this node for providing the balance sheet data needed to calculate the quick ratio for fiscal years 2022 and 2023."
  },
  {
    "citation": "Filename: AMCOR_2023_10K.pdf, pages: 107",
    "reason": "Gestell selected this node for including balance sheet information necessary for calculating the quick ratio for fiscal years 2022 and 2023."
  },
  {
    "citation": "Filename: AMCOR_2023Q4_EARNINGS.pdf, pages: 9",
    "reason": "Gestell selected this node for providing the balance sheet data needed to calculate the quick ratio for fiscal years 2022 and 2023."
  }
]
```

```cot
1. Analyze the AMCOR 2023 10K document, specifically the balance sheets for Fiscal Year 2022 and Fiscal Year 2023.  Extract the values for Total Current Assets, Inventories, and Current Liabilities for both years.

2. **Calculate Quick Ratio for FY2023:**

   * Locate Total Current Assets (TCA) and Inventories for FY2023 from the balance sheet.
   * Calculate Quick Assets: Quick Assets = TCA (FY2023) - Inventories (FY2023)
   * Locate Current Liabilities (CL) for FY2023 from the balance sheet.
   * Calculate Quick Ratio (FY2023): Quick Ratio (FY2023) = Quick Assets / CL (FY2023)

3. **Calculate Quick Ratio for FY2022:**

   * Locate Total Current Assets (TCA) and Inventories for FY2022 from the balance sheet.
   * Calculate Quick Assets: Quick Assets = TCA (FY2022) - Inventories (FY2022)
   * Locate Current Liabilities (CL) for FY2022 from the balance sheet.
   * Calculate Quick Ratio (FY2022): Quick Ratio (FY2022) = Quick Assets / CL (FY2022)

4. **Compare and Determine Change:**

   * Subtract the FY2022 Quick Ratio from the FY2023 Quick Ratio.  This will give the change in the quick ratio.
   * Calculate the percentage change using the formula: [(FY2023 Quick Ratio - FY2022 Quick Ratio) / FY2022 Quick Ratio] * 100%

5. **Respond:**

   * If the calculated change is positive, state that Amcor's quick ratio improved between FY2023 and FY2022.  If negative, state that it declined.  If the change is zero, state that it remained unchanged.
   * Report the change in both dollar and percentage terms, following the specified formatting rules (2 decimal places for quick ratio, 1 decimal place for percentage change).  If the change is zero, state "nothing happened".
   * The final answer should be a concise bullet point list summarizing the calculations and the final result.

```

- **FY2023:**
  - Total Current Assets: $5,308 million
  - Inventories: $2,213 million
  - Current Liabilities: $3,213 million
  - Quick Assets: $5,308 million - $2,213 million = $3,095 million
  - Quick Ratio: $3,095 million / $3,213 million = 0.96
- **FY2022:**
  - Total Current Assets: $5,853 million
  - Inventories: $2,439 million
  - Current Liabilities: $3,722 million
  - Quick Assets: $5,853 million - $2,439 million = $3,414 million
  - Quick Ratio: $3,414 million / $3,722 million = 0.92
- Change in Quick Ratio: 0.96 - 0.92 = 0.04
- Percentage Change in Quick Ratio: (0.04 / 0.92) \* 100% = 4.3%

**Final Answer:** Amcor's quick ratio improved by 0.04 or 4.3% between FY2022 and FY2023.

## Correct Answer

The quick ratio has slightly improved from 0.67 times to 0.69 times between FY 2023 and FY 2022.(3.4% jump)
