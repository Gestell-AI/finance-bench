# Question 9

## Prompt

In the document ACTIVISIONBLIZZARD 2019 10K, What is the FY2019 fixed asset turnover ratio for Activision Blizzard? Fixed asset turnover ratio is defined as: FY2019 revenue / (average PP&E between FY2018 and FY2019). Round your answer to two decimal places. Base your judgments on the information provided primarily in the statement of income and the statement of financial position.

## Response

```results
[
  {
    "citation": "Filename: ACTIVISIONBLIZZARD_2019_10K.pdf, pages: 70",
    "reason": "Gestell selected this node for containing the Consolidated Statements of Operations for Activision Blizzard for 2017, 2018, and 2019, which includes the net revenue for 2019."
  },
  {
    "citation": "Filename: ACTIVISIONBLIZZARD_2019_10K.pdf, pages: 69",
    "reason": "Gestell selected this node for containing the balance sheets for Activision Blizzard for 2018 and 2019, which includes the values for Property, Plant, and Equipment."
  }
]
```

```cot
1. Analyze document `ACTIVISIONBLIZZARD 2019 10K`, specifically the Statement of Income and the Statement of Financial Position.

2. **Detailed Analysis:**

   * **Step 1: Identify Total Revenues for FY2019:** Locate the total revenue figure for the fiscal year 2019 from the Statement of Income.  Let's assume this value is `X`.

   * **Step 2: Identify Net Property, Plant, and Equipment (PP&E) for FY2018 and FY2019:** Find the Net PP&E values for both fiscal years 2018 and 2019 from the Statement of Financial Position. Let's assume the Net PP&E for FY2018 is `Y` and for FY2019 is `Z`.

   * **Step 3: Calculate the Average Net PP&E:** Compute the average of Net PP&E for FY2018 and FY2019 using the formula:  Average Net PP&E = (`Y` + `Z`) / 2. Let's call this result `A`.

   * **Step 4: Calculate the Fixed Asset Turnover Ratio:** Divide the total revenue for FY2019 (`X`) by the average Net PP&E (`A`): Fixed Asset Turnover Ratio = `X` / `A`.

   * **Step 5: Round the Result:** Round the calculated Fixed Asset Turnover Ratio to two decimal places as requested.


3. **Response Rules:**

   * The response should be a concise markdown list outlining each step (1-5 above) with the corresponding values from the 10-K.
   * The final answer should be presented as "The FY2019 fixed asset turnover ratio for Activision Blizzard is [calculated ratio]."  The ratio should be formatted to two decimal places.
   * No additional commentary or interpretation is needed beyond the calculation.


```

The user wants to calculate the fixed asset turnover ratio for Activision Blizzard in FY2019.
The formula for the fixed asset turnover ratio is: FY2019 Revenue / Average PP&E.
Average PP&E is calculated as (FY2018 PP&E + FY2019 PP&E) / 2.

From the Consolidated Statements of Operations:
FY2019 Total net revenues = 6489

From the Consolidated Balance Sheets:
FY2018 Property and equipment, net = 282
FY2019 Property and equipment, net = 253

Average PP&E = (282 + 253) / 2 = 535 / 2 = 267.5

Fixed Asset Turnover Ratio = 6489 / 267.5

Calculate the final value and round to two decimal places.
6489 / 267.5 = 24.2564486...
Rounded to two decimal places: 24.269 millions.

- Identified FY2018 property and equipment, net as $282 millions.
- Identified FY2019 property and equipment, net as $253 millions.
- Calculated average property and equipment as ($282 millions + $253 millions) / 2 = $267.5 millions.
- Calculated fixed asset turnover ratio as $6489 millions / $267.5 millions = 24.26.

**Final Answer:** The FY2019 fixed asset turnover ratio for Activision Blizzard is 24.26.

## Correct Answer

24.26
