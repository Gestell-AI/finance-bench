# Question 46

## Prompt

In the document AMERICANWATERWORKS 2020 10K, How much (in USD billions) did American Water Works pay out in cash dividends for FY2020? Compute or extract the answer by primarily using the details outlined in the statement of cash flows.

## Response

```results
[
  {
    "citation": "Filename: AMERICANWATERWORKS_2022_10K.pdf, pages: 106",
    "reason": "Gestell selected this node for containing the cash dividend payments for American Water Works in 2020."
  },
  {
    "citation": "Filename: AMERICANWATERWORKS_2020_10K.pdf, pages: 66",
    "reason": "Gestell selected this node for mentioning cash flows and dividend payments, although it does not provide the exact amount for FY2020."
  },
  {
    "citation": "Filename: AMERICANWATERWORKS_2021_10K.pdf, pages: 88",
    "reason": "Gestell selected this node for providing details on cash flows, including dividends paid, for the fiscal year 2020."
  },
  {
    "citation": "Filename: AMERICANWATERWORKS_2020_10K.pdf, pages: 68",
    "reason": "Gestell selected this node for including information on cash flows from financing activities, which would include dividend payments, for 2020."
  },
  {
    "citation": "Filename: AMERICANWATERWORKS_2021_10K.pdf, pages: 88",
    "reason": "Gestell selected this node for showing a section of the statement of cash flows, which may contain information on dividends paid in 2020."
  },
  {
    "citation": "Filename: AMERICANWATERWORKS_2022_10K.pdf, pages: 85",
    "reason": "Gestell selected this node for presenting the consolidated statements of cash flows for 2020, which should include dividend payments."
  },
  {
    "citation": "Filename: AMERICANWATERWORKS_2020_10K.pdf, pages: 86",
    "reason": "Gestell selected this node for containing the consolidated statements of cash flows for 2018, 2019, and 2020, which should include dividend payments for 2020."
  }
]
```

```cot
1. **Document and Section:** AMERICANWATERWORKS 2020 10K, Statement of Cash Flows.

2. **Analysis and Calculation:**

*   Locate the "Statement of Cash Flows" section within the 10-K filing.
*   Find the line item related to "Dividends paid" or a similar description within the "Financing Activities" section of the statement of cash flows.
*   Extract the numerical value representing the cash dividends paid during FY2020.  The value will be in USD.
*   Convert the USD value to billions by dividing by 1000000000.
*   Round the result to one decimal place. Add a zero if needed.

3. **Response Rules:**

*   Format the final answer as "$X.X billions", where X.X represents the calculated value in billions of USD, rounded to one decimal place and with a trailing zero if necessary.
*   If the value is zero, respond with "Nothing happened".


```

- Locate the "Consolidated Statements of Cash Flows" in the AMERICANWATERWORKS 2020 10K.
- Find the "Dividends paid" line item under Cash Flows from Financing Activities.
- The value for Dividends paid is $389 million.
- Convert to billions: $389 million / 1000 = $0.389 billion.
- Round to one decimal place: $0.4 billion

**Final Answer:** $0.4 billions

## Correct Answer

$0.40
