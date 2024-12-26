# Question 43

## Prompt

In the document AMERICANEXPRESS 2022 10K, How much has the effective tax rate of American Express changed between FY2021 and FY2022?

## Response

```results
[
  {
    "citation": "Filename: AMERICANEXPRESS_2022_10K.pdf, pages: 49",
    "reason": "Gestell selected this node for containing the effective tax rate for American Express in 2021 and 2022."
  },
  {
    "citation": "Filename: AMERICANEXPRESS_2022_10K.pdf, pages: 146",
    "reason": "Gestell selected this node for containing the effective tax rate for American Express in 2021 and 2022."
  },
  {
    "citation": "Filename: AES_2022_10K.pdf, pages: 190-191",
    "reason": "Gestell selected this node for containing the effective tax rate for American Express in 2021 and 2022."
  }
]
```

```cot
1. Analyze the AMERICANEXPRESS 2022 10K document, specifically the income statement sections for Fiscal Year 2021 and Fiscal Year 2022.  Locate the values for "Income tax expense" and "Net income" for both years.

2. **Calculate the effective tax rate for FY2021:**

   * Obtain the "Income tax expense" and "Net income" for FY2021 from the 10K.
   * Effective Tax Rate (FY2021) = (Income tax expense FY2021 / Net income FY2021) * 100

3. **Calculate the effective tax rate for FY2022:**

   * Obtain the "Income tax expense" and "Net income" for FY2022 from the 10K.
   * Effective Tax Rate (FY2022) = (Income tax expense FY2022 / Net income FY2022) * 100

4. **Calculate the change in the effective tax rate:**

   * Change in Effective Tax Rate = Effective Tax Rate (FY2022) - Effective Tax Rate (FY2021)

5. **Calculate the percentage change in the effective tax rate:**

   * Percentage Change = [(Effective Tax Rate (FY2022) - Effective Tax Rate (FY2021)) / Effective Tax Rate (FY2021)] * 100


3. **Response Rules:**

* Respond in a cleanly formatted Markdown list.
* Present the calculations as a step-by-step process.
* The final answer must include both the numerical change and the percentage change in the effective tax rate, formatted according to the provided guidelines (1 decimal place for percentages, etc.).
* If the change is zero, state that "nothing happened".
* The response should end with a final answer section summarizing the change.


```

The user wants to find the change in American Express's effective tax rate between FY2021 and FY2022 using the provided 10K document.

**Plan:**

1. Find the Income Tax Expense and Net Income for both years.
2. Calculate the effective tax rate for each year.
3. Calculate the absolute and percentage change in the effective tax rate. the Income Tax Expense and Net Income for both 2021 and 2022.

- From the Consolidated Statements of Income (page 4 of the PDF), we find:
  - 2021 Income Tax Expense: $2.6 billions
  - 2021 Net Income: $7.9 billions
  - 2022 Income Tax Expense: $2.1 billions
  - 2022 Net Income: $7.5 billions
- Calculate the effective tax rate for 2021: ($2.6 billions / $7.9 billions) \* 100 = 32.9%
- Calculate the effective tax rate for 2022: ($2.1 billions / $7.5 billions) \* 100 = 28.0%
- Calculate the change in effective tax rate: 28.0% - 32.9% = -4.9%

**Final Answer**
The effective tax rate of American Express decreased by 4.9%.

## Correct Answer

The effective tax rate for American Express has changed/dropped from 24.6% in FY 2021 to 21.6% in FY 2022.
