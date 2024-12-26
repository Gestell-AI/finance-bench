# Question 71

## Prompt

In the document CORNING 2020 10K, Based on the information provided primarily in the balance sheet and the statement of income, what is FY2020 days payable outstanding (DPO) for Corning? DPO is defined as: 365 \* (average accounts payable between FY2019 and FY2020) / (FY2020 COGS + change in inventory between FY2019 and FY2020). Round your answer to two decimal places.

## Response

```results
[
  {
    "citation": "Filename: CORNING_2020_10K.pdf, pages: 27",
    "reason": "Gestell selected this node for containing the necessary financial statement data for FY2019 and FY2020 to calculate DPO."
  },
  {
    "citation": "Filename: CORNING_2021_10K.pdf, pages: 32-33",
    "reason": "Gestell selected this node for containing the necessary financial statement data for FY2019 and FY2020 to calculate DPO."
  },
  {
    "citation": "Filename: CORNING_2020_10K.pdf, pages: 33",
    "reason": "Gestell selected this node for containing the necessary financial statement data for FY2019 and FY2020 to calculate DPO."
  }
]
```

```cot
1. **Document and Section:** CORNING 2020 10K, Balance Sheet and Statement of Income.  Specifically, we need to extract data on Accounts Payable for FY2019 and FY2020, Inventory for FY2019 and FY2020, and Cost of Goods Sold (COGS) for FY2020.

2. **Detailed Analysis and Calculations:**

   * **Step 1: Identify Accounts Payable for FY2019 and FY2020:** Locate the values for Accounts Payable from the balance sheet for both fiscal years 2019 and 2020. Let's assume these values are:
      * Accounts Payable FY2019: $X
      * Accounts Payable FY2020: $Y

   * **Step 2: Calculate Average Accounts Payable:**
      * Average Accounts Payable = ($X + $Y) / 2

   * **Step 3: Identify Inventory for FY2019 and FY2020:** Locate the values for Inventory from the balance sheet for both fiscal years 2019 and 2020. Let's assume these values are:
      * Inventory FY2019: $A
      * Inventory FY2020: $B

   * **Step 4: Calculate Change in Inventory:**
      * Change in Inventory = $B - $A

   * **Step 5: Obtain COGS for FY2020:** Locate the value for Cost of Goods Sold (COGS) from the income statement for FY2020. Let's assume this value is:
      * COGS FY2020: $C

   * **Step 6: Calculate the Denominator:**
      * Total Cost = $C + ($B - $A)

   * **Step 7: Calculate Days Payable Outstanding (DPO):**
      * DPO = (365 * Average Accounts Payable) / Total Cost
      * DPO = (365 * (($X + $Y) / 2)) / ($C + ($B - $A))

3. **Response Rules:**

   * Replace $X, $Y, $A, $B, and $C with the actual values from the CORNING 2020 10K financial statements.
   * Perform the calculations as outlined above.
   * Round the final DPO value to two decimal places.
   * Present the final answer as a single number with two decimal places, following the specified formatting rules for numerical values in the Response Instructions.  If the calculation results in a value of 0, state "Nothing happened".  The response should not include any percentage change.

```

- **Accounts Payable:**
  - FY2019: $1358 millions
  - FY2020: $1269 millions
- **Average Accounts Payable:** ($1358 + $1269) / 2 = $1313.50 millions
- **Inventory:**
  - FY2019: $2384 millions
  - FY2020: $2583 millions
- **Change in Inventory:** $2583 - $2384 = $199 millions
- **FY2020 Cost of Goods Sold (COGS):** $6758 millions
- **Total Cost:** $6758 + $199 = $6957 millions
- **Days Payable Outstanding (DPO):** (365 \* $1313.50) / $6957 = 68.88

**Final Answer:** 68.88

## Correct Answer

63.86
