# Question 112

## Prompt

In the document MICROSOFT 2023 10K, Has Microsoft increased its debt on balance sheet between FY2023 and the FY2022 period?

## Response

```results
[
  {
    "citation": "Filename: MICROSOFT_2023_10K.pdf, pages: 60",
    "reason": "Gestell selected this node for containing Microsoft's balance sheets for fiscal years ending June 30, 2023 and 2022, which include data on total assets, liabilities, and stockholders' equity, allowing for a comparison of debt levels between the two years."
  },
  {
    "citation": "Filename: MICROSOFT_2023_10K.pdf, pages: 82",
    "reason": "Gestell selected this node for providing a detailed breakdown of the maturities of Microsoft's long-term debt as of June 30, 2023, which is relevant to assessing changes in debt levels."
  },
  {
    "citation": "Filename: MICROSOFT_2016_10K.pdf, pages: 54",
    "reason": "Gestell selected this node for presenting Microsoft Corporation's balance sheets for the fiscal years ending June 30, 2016, and June 30, 2015, which although not the requested years, provides context for historical debt levels."
  },
  {
    "citation": "Filename: MICROSOFT_2023_10K.pdf, pages: 81",
    "reason": "Gestell selected this node for detailing Microsoft's debt structure as of June 30, 2023 and 2022, including total debt figures, which allows for a direct comparison of debt levels between the two years."
  }
]
```

```cot
1. Analyze document: MICROSOFT 2023 10K. Specifically, examine the balance sheets for Fiscal Year 2023 (FY2023) and Fiscal Year 2022 (FY2022).  Locate the line item representing "Total Debt" or a similar comprehensive measure of debt (e.g., "Long-term debt" + "Short-term debt").

2. Data Extraction and Calculation:

* Extract the value of total debt from the FY2023 balance sheet.
* Extract the value of total debt from the FY2022 balance sheet.
* Calculate the change in debt:  FY2023 Total Debt - FY2022 Total Debt.
* Calculate the percentage change: [(FY2023 Total Debt - FY2022 Total Debt) / FY2022 Total Debt] * 100.

3. Response Generation Rules:

* Format dollar values according to the provided guidelines (millions with 2 decimal places, billions with 1 decimal place and a zero).
* Format percentage changes with 1 decimal place.
* If the change in debt is zero, state "Microsoft's debt on the balance sheet remained unchanged between FY2023 and FY2022."
* If the change is positive, state "Microsoft increased its debt on the balance sheet by $X between FY2023 and FY2022, representing a Y% increase."  Replace X with the calculated dollar change and Y with the calculated percentage change.
* If the change is negative, state "Microsoft decreased its debt on the balance sheet by $X between FY2023 and FY2022, representing a Y% decrease." Replace X with the calculated dollar change (formatted as a decrease) and Y with the calculated percentage change.


```

- **FY2023 Total Debt:** $41.99 billions
- **FY2022 Total Debt:** $47.03 billions
- **Change in Debt:** $41.99 billions - $47.03 billions = decrease in $5.04 billions
- **Percentage Change:** (decrease in $5.04 billions / $47.03 billions) \* 100 = -10.7%

**Final Answer:** Microsoft decreased its debt on the balance sheet by $5.04 billions between FY2023 and FY2022, representing a 10.7% decrease.

## Correct Answer

No. Microsoft decreased its debt by $2.5bn in FY 2023 vs FY 2022.
