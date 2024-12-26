# Question 10

## Prompt

In the document ACTIVISIONBLIZZARD 2019 10K, What is the FY2017 - FY2019 3 year average of capex as a % of revenue for Activision Blizzard? Answer in units of percents and round to one decimal place. Calculate (or extract) the answer from the statement of income and the cash flow statement.

## Response

```results
[
  {
    "citation": "Filename: ACTIVISIONBLIZZARD_2019_10K.pdf, pages: 30",
    "reason": "Gestell selected this node for containing the necessary financial statements to calculate the 3-year average of capital expenditures as a percentage of revenue for Activision Blizzard."
  },
  {
    "citation": "Filename: ACTIVISIONBLIZZARD_2019_10K.pdf, pages: 73",
    "reason": "Gestell selected this node for providing the statement of cash flows, which is necessary to extract the capital expenditure data for the calculation."
  },
  {
    "citation": "Filename: ACTIVISIONBLIZZARD_2019_10K.pdf, pages: 70",
    "reason": "Gestell selected this node for providing the statement of operations, which is necessary to extract the revenue data for the calculation."
  },
  {
    "citation": "Filename: ACTIVISIONBLIZZARD_2019_10K.pdf, pages: 62",
    "reason": "Gestell selected this node for containing the consolidated financial statements, including the statement of cash flows and the statement of operations, which are necessary to extract the data for the calculation."
  }
]
```

```cot
1. Correct document and section to analyze: ACTIVISIONBLIZZARD 2019 10K, Statement of Cash Flows and Statement of Income.

2. Detailed analysis and calculations:

*   **Step 1: Extract relevant data from the 10K.** Locate the Statement of Cash Flows and the Statement of Income for fiscal years 2017, 2018, and 2019. Extract the following data for each year:
    *   Capital Expenditures (CapEx): This will be found in the investing activities section of the statement of cash flows.
    *   Revenue (Total Revenues): This will be found in the statement of income.

*   **Step 2: Calculate the annual CapEx as a percentage of revenue.** For each year, divide the CapEx by the revenue and multiply by 100 to express it as a percentage.  For example:
    *   FY2017: (CapEx FY2017 / Revenue FY2017) * 100 = Percentage for FY2017
    *   FY2018: (CapEx FY2018 / Revenue FY2018) * 100 = Percentage for FY2018
    *   FY2019: (CapEx FY2019 / Revenue FY2019) * 100 = Percentage for FY2019

*   **Step 3: Calculate the 3-year average.** Sum the percentages calculated in Step 2 for FY2017, FY2018, and FY2019. Then divide the sum by 3 to obtain the average.

*   **Step 4: Round to one decimal place.** Round the final average percentage to one decimal place as per the prompt's instructions.


3. Response rules:

*   The response should be a concise markdown list.
*   Each step of the calculation should be clearly shown.
*   The final answer should be presented as a percentage rounded to one decimal place.  For example: "The 3-year average of CapEx as a percentage of revenue for Activision Blizzard from FY2017 to FY2019 is X.X%".
*   If any of the required data is missing from the 10K, clearly state this in the response.
*   Follow all formatting instructions specified in the `Response Instructions` section of the provided text.

```

The user is asking for the 3-year average of capital expenditures (capex) as a percentage of revenue for Activision Blizzard, spanning fiscal years 2017 to 2019. I need to extract the capex and revenue figures for each of these years from the provided 10K document, calculate the capex as a percentage of revenue for each year, and then find the average of these percentages.

**Plan:**

1. Find the Statement of Cash Flows to extract Capital Expenditures for 2017, 2018, and 2019.
2. Find the Statement of Income to extract Total Net Revenues for 2017, 2018, and 2019.
3. Calculate the percentage of capex to revenue for each year.
4. Calculate the average of the three percentages.
5. Format the final answer according to the instructions. ($300 / $7,017) \* 100 = 4.27%

- **FY2018:**
  - Capital expenditures: $371 millions (page 73)
  - Total net revenues: $7,500 millions (page 70)
  - Capex as % of revenue: ($371 / $7,500) \* 100 = 4.95%
- **FY2019:**
  - Capital expenditures: $240 millions (page 73)
  - Total net revenues: $6,489 millions (page 70)
  - Capex as % of revenue: ($240 / $6,489) \* 100 = 3.70%
- **3-year average:** (4.27% + 4.95% + 3.70%) / 3 = 4.3%

**Final Answer:** The 3-year average of capex as a % of revenue for Activision Blizzard from FY2017 to FY2019 is 4.3%.

## Correct Answer

1.9%
