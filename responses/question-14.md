# Question 14

## Prompt

In the document ADOBE 2022 10K, Does Adobe have an improving operating margin profile as of FY2022? If operating margin is not a useful metric for a company like this, then state that and explain why.

## Response

```results
[
  {
    "citation": "Filename: ADOBE_2022_10K.pdf, pages: 40",
    "reason": "Gestell selected this node for containing information on Adobe's financial performance in fiscal year 2022, including details on revenue growth across its business segments and key financial metrics such as remaining performance obligations and cash flows.  This is relevant to assessing Adobe's operating margin profile."
  },
  {
    "citation": "Filename: ADOBE_2022_10K.pdf, pages: 36-37",
    "reason": "Gestell selected this node for its discussion of Adobe's critical accounting policies and estimates, including revenue recognition and income taxes. This is relevant to understanding the context of Adobe's financial reporting and how it might affect the interpretation of operating margin."
  },
  {
    "citation": "Filename: ADOBE_2022_10K.pdf, pages: 1-2",
    "reason": "Gestell selected this node for being Adobe's 2022 10K filing, which is the primary source for the requested information.  It contains the financial statements and related disclosures necessary to assess Adobe's operating margin profile."
  }
]
```

```cot
1. Analyze document: ADOBE 2022 10K.  Specifically, examine the income statement to find the operating margin for FY2022 and prior fiscal years.  Also, review any accompanying notes or management discussion and analysis (MD&A) sections that might discuss operating margin trends or limitations of the metric for Adobe's business model.

2. Analysis:
   * Locate the operating margin data for FY2022 and at least one prior fiscal year from Adobe's income statement.  Calculate the percentage change in operating margin between these years.  The formula is: `[(Operating Margin FY2022 - Operating Margin Prior Year) / Operating Margin Prior Year] * 100%`.
   * If the operating margin data is not readily available, look for related metrics such as operating income and revenue to calculate the operating margin for each year.  Operating Margin = (Operating Income / Revenue) * 100%.
   * Review the MD&A section to see if Adobe discusses the usefulness of operating margin as a performance indicator for its business.  Consider whether Adobe's business model (e.g., subscription-based revenue, significant R&D investment) might make operating margin less informative than other metrics.

3. Response Rules:
   * If the operating margin improved from the prior year to FY2022, state the percentage increase.  Format the percentage change according to the provided guidelines (one decimal place).
   * If the operating margin decreased or remained unchanged, state the percentage decrease or that "nothing happened," respectively.
   * If the MD&A or other sections of the 10K indicate that operating margin is not a useful metric for assessing Adobe's performance, explain why, citing specific reasons from the document.  This explanation should be concise and clear.
   * Format all numerical values according to the provided guidelines.  The final answer should include both the dollar and percentage changes if applicable.  If the change is zero, state "nothing happened".
   * The response should be in a short, concise, clear breakdown as bullet points.

```

- **2022 Operating Income:** $6.10 billions (Located on page 54 of the 10K)
- **2022 Revenue:** $17.61 billions (Located on page 54 of the 10K)
- **2022 Operating Margin:** 34.6% ($6.10 billions / $17.61 billions)
- **2021 Operating Income:** $5.86 billions (Located on page 55 of the 10K)
- **2021 Revenue:** $15.79 billions (Located on page 55 of the 10K)
- **2021 Operating Margin:** 37.1% ($5.86 billions / $15.79 billions)
- **Change in Operating Margin:** -2.5% ((34.6% - 37.1%) / 37.1%)

**Final Answer:** Operating margin decreased by 2.5% from 37.1% in 2021 to 34.6% in 2022. While the 10K doesn't explicitly say operating margin is _not_ useful, it doesn't highlight it as a key performance indicator either. Instead, Adobe emphasizes metrics like ARR (Annual Recurring Revenue) and remaining performance obligations, which are more relevant for subscription-based businesses.

## Correct Answer

No the operating margins of Adobe have recently declined from 36.8% in FY 2021 to 34.6% in FY2022. A drop by 2.2% in a year.