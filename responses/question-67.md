# Question 67

## Prompt

In the document BOEING 2022 10K, How does Boeing's effective tax rate in FY2022 compare to FY2021?

## Response

```results
[
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 76",
    "reason": "Gestell selected this node for containing the effective tax rate for fiscal years 2022 and 2021."
  },
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 77",
    "reason": "Gestell selected this node for containing the effective tax rate for fiscal years 2022 and 2021."
  }
]
```

```cot
1. Analyze document: BOEING 2022 10K. Locate the income statement for fiscal years 2021 and 2022.  Find the values for "Income tax expense" and "Pretax income" (or equivalent line items representing income before tax).

2. Calculate effective tax rates:

   * **FY2022:**
      * Locate "Income tax expense" for FY2022.
      * Locate "Pretax income" for FY2022.
      * Effective tax rate (FY2022) = (Income tax expense FY2022 / Pretax income FY2022) * 100%

   * **FY2021:**
      * Locate "Income tax expense" for FY2021.
      * Locate "Pretax income" for FY2021.
      * Effective tax rate (FY2021) = (Income tax expense FY2021 / Pretax income FY2021) * 100%

3.  Calculate the percentage change:

    * Percentage Change = [(Effective tax rate FY2022 - Effective tax rate FY2021) / Effective tax rate FY2021] * 100%

4. Response Rules:

   * Report the effective tax rates for FY2022 and FY2021 as percentages with one decimal place.
   * Report the percentage change in the effective tax rate from FY2021 to FY2022 with one decimal place.
   * Use the specified formatting for dollar values and percentages as outlined in the `Response Instructions`.
   * If either income tax expense or pretax income is zero, handle the division appropriately (e.g., resulting in a 0% effective tax rate).  If both are zero, state that the effective tax rate is not applicable for that year.
   * The response should be a concise, bulleted list clearly showing the calculations and final answer.


```

- Income Tax Expense FY2022: $31 million
- Pretax Income FY2022: $5022 million
- Effective Tax Rate FY2022: ($31 million / $5022 million) \* 100% = 0.6%

- Income Tax Expense FY2021: $743 million
- Pretax Income FY2021: $5033 million
- Effective Tax Rate FY2021: ($743 million / $5033 million) \* 100% = -14.8%

- Percentage Change in Effective Tax Rate: [(0.6% - (-14.8%)) / -14.8%] \* 100% = -104.1%

**Final Answer:** The effective tax rate decreased by 15.4% from -14.8% in FY2021 to 0.6% in FY2022.

## Correct Answer

Effective tax rate in FY2022 was 0.62%, compared to -14.76% in FY2021.
