# Question 15

## Prompt

In the document ADOBE 2022 10K, Does Adobe have an improving Free cashflow conversion as of FY2022?

## Response

```results
[
  {
    "citation": "Filename: ADOBE_2022_10K.pdf, pages: 57",
    "reason": "Gestell selected this node for containing the Consolidated Statements of Cash Flows for fiscal years 2020, 2021, and 2022, which includes data necessary to assess Adobe's free cash flow and free cash flow conversion."
  }
]
```

```cot
1. Analyze document: ADOBE 2022 10K.  Specifically, locate the sections reporting Free Cash Flow (FCF) for fiscal years 2021 and 2022.  The exact location of this data will vary depending on the 10K's structure, but it will likely be in the statement of cash flows or a related financial statement analysis section.  Also locate Net Income for both years.

2. Detailed Analysis and Calculations:

* **Step 1: Find FCF for FY2021 and FY2022:** Extract the Free Cash Flow figures for both fiscal years from the 10K. Let's assume (for the purpose of this plan) that the 10K reports the following:
    * FY2021 FCF: $X
    * FY2022 FCF: $Y

* **Step 2: Find Net Income for FY2021 and FY2022:** Extract the Net Income figures for both fiscal years from the 10K. Let's assume the 10K reports the following:
    * FY2021 Net Income: $A
    * FY2022 Net Income: $B

* **Step 3: Calculate FCF Conversion for FY2021:**
    * FCF Conversion FY2021 = (FY2021 FCF / FY2021 Net Income) * 100%

* **Step 4: Calculate FCF Conversion for FY2022:**
    * FCF Conversion FY2022 = (FY2022 FCF / FY2022 Net Income) * 100%

* **Step 5: Calculate the Percentage Change in FCF Conversion:**
    * Percentage Change = [(FCF Conversion FY2022 - FCF Conversion FY2021) / FCF Conversion FY2021] * 100%

3. Response Rules:

*   Report the FCF conversion for both FY2021 and FY2022 as percentages, formatted to one decimal place.
*   Report the percentage change in FCF conversion from FY2021 to FY2022, formatted to one decimal place, using the tilde (~) symbol to indicate an approximation.  The response should clearly state whether the change represents an improvement or decline.  If the percentage change is zero, state that there was no change.
*   Use the specified formatting for dollar values and percentages as outlined in the provided `Response Instructions`.
*   Present the findings concisely as bullet points.


```

- **FY2021:**

  - Net Income: $4,822 millions
  - Net Cash Provided by Operating Activities: $7,230 millions
  - Purchases of Property and Equipment : $348 millions

- **FY2022:**

  - Net Income: $4,756 millions
  - Net Cash Provided by Operating Activities: $7,838 millions
  - Purchases of Property and Equipment : $442 millions

- **Free Cash Flow (FCF) Calculation:**

  - FCF = Net Cash Provided by Operating Activities - Purchases of Property and Equipment
  - FY2021 FCF: $7,230 millions - $348 millions = $6,882 millions
  - FY2022 FCF: $7,838 millions - $442 millions = $7,396 millions

- **FCF Conversion Calculation:**

  - FCF Conversion = (FCF / Net Income) \* 100%
  - FY2021 FCF Conversion: ($6,882 millions / $4,822 millions) \* 100% = 142.7%
  - FY2022 FCF Conversion: ($7,396 millions / $4,756 millions) \* 100% = 155.5%

- **Change in FCF Conversion:**
  - Change: 155.5% - 142.7% = 12.8%

**Final Answer:** FCF conversion has improved by ~12.8% from 142.7% in 2021 to 155.5% in 2022.

## Correct Answer

Yes, the FCF conversion (using net income as the denominator) for Adobe has improved by ~13% from 143% in 2021 to 156% in 2022
