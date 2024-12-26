# Question 113

## Prompt

In the document NETFLIX 2015 10K, We want to calculate a financial metric. Please help us compute it by basing your answers off of the statement of income and the statement of cash flows. Here's the question: what is the FY2015 unadjusted EBITDA % margin for Netflix? Calculate unadjusted EBITDA using unadjusted operating income and D&A (from cash flow statement).

## Response

```results
[
  {
    "citation": "Filename: NETFLIX_2015_10K.pdf, pages: 40",
    "reason": "Gestell selected this node for containing the necessary financial statements (income statement and cash flow statement) to calculate the FY2015 unadjusted EBITDA % margin for Netflix."
  },
  {
    "citation": "Filename: NETFLIX_2015_10K.pdf, pages: 63",
    "reason": "Gestell selected this node for providing quarterly financial data for 2015, which can be used to calculate the FY2015 unadjusted EBITDA % margin for Netflix."
  },
  {
    "citation": "Filename: NETFLIX_2015_10K.pdf, pages: 16-17",
    "reason": "Gestell selected this node for providing selected consolidated financial data, including statements of operations and cash flows, which can be used to calculate the FY2015 unadjusted EBITDA % margin for Netflix."
  },
  {
    "citation": "Filename: NETFLIX_2015_10K.pdf, pages: 44",
    "reason": "Gestell selected this node for containing financial data from 2012-2015, which includes the necessary information to calculate the FY2015 unadjusted EBITDA % margin for Netflix."
  }
]
```

```cot
1. Analyze the "NETFLIX 2015 10K" document, specifically the Statement of Income and Statement of Cash Flows for Fiscal Year 2015.

2. Detailed Analysis and Calculations:

* **Locate Unadjusted Operating Income:** Find the "Operating Income" figure from the income statement for FY2015.  Let's assume this value is X.
* **Locate Depreciation and Amortization (D&A):** Find the "Depreciation and Amortization" expense from the statement of cash flows for FY2015. Let's assume this value is Y.
* **Calculate Unadjusted EBITDA:** Use the formula from the provided instructions:  `EBITDA = Operating Income + D&A`. Therefore, `EBITDA = X + Y`. Let's assume the calculated EBITDA is Z.
* **Locate Revenue:** Find the "Total Revenue" figure from the income statement for FY2015. Let's assume this value is W.
* **Calculate EBITDA Margin:** Use the formula: `EBITDA Margin = (EBITDA / Revenue) * 100`. Therefore, `EBITDA Margin = (Z / W) * 100`.  This will give you the EBITDA percentage margin for FY2015. Let's assume the calculated margin is P%.

3. Response Rules:

* Format the EBITDA value (Z) according to the specified rules for dollar amounts (millions or billions as appropriate).
* Format the EBITDA margin (P%) according to the specified rules for percentages (one decimal place).
* Present the final answer as a concise bullet point summary including both the dollar value of EBITDA and the percentage margin.  If the calculated values are zero, state "nothing happened".  The response should end with "**Final Answer:**"

```

- **Locate Unadjusted Operating Income:** The 2015 10K filing shows an operating income of $305.83 millions.
- **Locate Depreciation and Amortization (D&A):** The 2015 10K filing shows D&A of $566.88 millions.
- **Calculate Unadjusted EBITDA:** $305.83 millions (Operating Income) + $566.88 millions (D&A) = $872.71 millions.
- **Locate Revenue:** The 2015 10K filing shows revenue of $6779.51 millions.
- **Calculate EBITDA Margin:** ($872.71 millions / $6779.51 millions) \* 100 = 12.9%

**Final Answer:** $872.71 millions, 12.9%

## Correct Answer

5.4%
