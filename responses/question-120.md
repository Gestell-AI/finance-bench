# Question 120

## Prompt

In the document PEPSICO 2021 10K, What is the FY2021 capital expenditure amount (in USD billions) for PepsiCo? Respond to the question by assuming the perspective of an investment analyst who can only use the details shown within the statement of cash flows.

## Response

```results
[
  {
    "citation": "Filename: PEPSICO_2021_10K.pdf, pages: 52-53",
    "reason": "Gestell selected this node for containing the relevant financial statement data for PepsiCo's 2021 10K report, specifically detailing cash flow activities including capital expenditures."
  },
  {
    "citation": "Filename: PEPSICO_2021_10K.pdf, pages: 63",
    "reason": "Gestell selected this node for providing a detailed breakdown of PepsiCo's cash flow statement, which includes information on capital expenditures."
  },
  {
    "citation": "Filename: PEPSICO_2021_10K.pdf, pages: 63",
    "reason": "Gestell selected this node for offering specific financial data on PepsiCo's cash flow, including details about capital spending."
  },
  {
    "citation": "Filename: PEPSICO_2021_10K.pdf, pages: 109",
    "reason": "Gestell selected this node for containing supplementary financial information, including details on capital spending and cash flow."
  },
  {
    "citation": "Filename: PEPSICO_2023Q1_EARNINGS.pdf, pages: 6",
    "reason": "Gestell selected this node for presenting PepsiCo's condensed consolidated statement of cash flows, which includes capital expenditures data."
  },
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 64",
    "reason": "Gestell selected this node for providing PepsiCo's consolidated statement of cash flows, which includes capital expenditure data for FY2021."
  },
  {
    "citation": "Filename: PEPSICO_2022_10K.pdf, pages: 53",
    "reason": "Gestell selected this node for presenting PepsiCo's cash flow activities for 2021 and 2022, including capital expenditures."
  },
  {
    "citation": "Filename: PEPSICO_2021_10K.pdf, pages: 63",
    "reason": "Gestell selected this node for detailing PepsiCo's investing activities, which includes capital expenditure data for FY2021."
  }
]
```

```cot
1. **Document and Section:** Analyze the PepsiCo 2021 10K document, specifically the Statement of Cash Flows section.

2. **Analysis and Calculations:**

*   Locate the "Cash flows from investing activities" section within the statement of cash flows.
*   Identify the line item representing "Capital expenditures" or a similar description (e.g., "Purchases of property, plant, and equipment").  The exact wording may vary slightly.
*   Extract the numerical value for capital expenditures for the fiscal year 2021.  This value will be negative since it represents cash outflow.
*   Convert the value from the statement of cash flows to billions of USD.  If the value is given in millions, divide by 1000.  If it is given in thousands, divide by 1,000,000.  Round to one decimal place.

3. **Response Rules:**

*   Format the final answer as a positive number in billions of USD with one decimal place, preceded by a dollar sign ($).  For example: $2.5 billion.
*   If the value is zero, respond with "Nothing happened".
*   Do not include any additional commentary or analysis beyond the requested capital expenditure amount.

```

- Locate the Consolidated Statement of Cash Flows in the PepsiCo 2021 10K.
- Find the line item "Capital spending" under Investing Activities.
- The value for 2021 is $(4,625) million.
- Convert this to billions: $4,625 million / $1,000 million/billion = $4.6 billion.

**Final Answer:** $4.6 billions

## Correct Answer

$4.60