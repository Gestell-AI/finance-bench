# Question 12

## Prompt

In the document ADOBE 2016 10K, What is Adobe's year-over-year change in unadjusted operating income from FY2015 to FY2016 (in units of percents and round to one decimal place)? Give a solution to the question by using the income statement.

## Response

```results
[
  {
    "citation": "Filename: ADOBE_2016_10K.pdf, pages: 62",
    "reason": "Gestell selected this node for containing Adobe's consolidated statements of income for fiscal years 2014, 2015, and 2016, which includes the necessary data to calculate the year-over-year change in unadjusted operating income."
  },
  {
    "citation": "Filename: ADOBE_2015_10K.pdf, pages: 60",
    "reason": "Gestell selected this node for providing Adobe's consolidated statements of income for fiscal years 2013, 2014, and 2015, offering data for FY2015 needed in the calculation."
  },
  {
    "citation": "Filename: ADOBE_2017_10K.pdf, pages: 94",
    "reason": "Gestell selected this node for mentioning that the full report contains Adobe's income statement for fiscal years 2015 and 2016, although the specific data is not included in the excerpt."
  }
]
```

```cot
1. **Document and Section:** Analyze the ADOBE 2016 10K document, specifically the income statement for fiscal years 2015 and 2016.

2. **Analysis and Calculation:**

* **Locate Unadjusted Operating Income:** Find the values for "Operating Income" (or a similar line item representing unadjusted operating income) for both FY2015 and FY2016 on Adobe's income statement.  Let's assume these values are:
    * FY2015 Operating Income: $X
    * FY2016 Operating Income: $Y

* **Calculate Year-over-Year Change:** Determine the change in operating income from FY2015 to FY2016:
    * Change in Operating Income = $Y - $X

* **Calculate Percentage Change:** Compute the percentage change in operating income:
    * Percentage Change = [( $Y - $X ) / $X] * 100%

* **Round to One Decimal Place:** Round the calculated percentage change to one decimal place.

3. **Response Rules:**

*   Format the percentage change with one decimal place (e.g., 10.1%).
*   If the percentage change is 0, state "Nothing happened".
*   Present the final answer as a concise bullet point, including both the dollar change and the percentage change.  For example:
    * Operating Income increased by $Z and 10.1% year-over-year.
    * Or, if the change is zero: Nothing happened.


```

- FY2015 Operating Income: $903.095 millions
- FY2016 Operating Income: $1493.602 millions
- Change in Operating Income: $1493.602 millions - $903.095 millions = $590.507 millions
- Percentage Change: ($590.507 millions / $903.095 millions) \* 100% = 65.4%

**Final Answer:** Operating income increased by $590.51 millions and 65.4% year-over-year.

## Correct Answer

65.4%
