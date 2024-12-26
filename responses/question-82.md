# Question 82

## Prompt

In the document GENERALMILLS 2019 10K, What is the FY2019 cash conversion cycle (CCC) for General Mills? CCC is defined as: DIO + DSO - DPO. DIO is defined as: 365 _ (average inventory between FY2018 and FY2019) / (FY2019 COGS). DSO is defined as: 365 _ (average accounts receivable between FY2018 and FY2019) / (FY2019 Revenue). DPO is defined as: 365 \* (average accounts payable between FY2018 and FY2019) / (FY2019 COGS + change in inventory between FY2018 and FY2019). Round your answer to two decimal places. Address the question by using the line items and information shown within the income statement and the balance sheet.

## Response

```results
[
  {
    "citation": "Filename: GENERALMILLS_2020_10K.pdf, pages: 25-26",
    "reason": "Gestell selected this node for containing the necessary financial statement data for FY2018 and FY2019, including Inventory, Cost of Goods Sold (COGS), Accounts Receivable, Revenue, and Accounts Payable."
  }
]
```

```cot
1. Analyze the General Mills 2019 10K document, specifically the income statement and balance sheet for fiscal years 2018 and 2019.  Extract the following data points: FY2018 Inventory, FY2019 Inventory, FY2018 Accounts Receivable, FY2019 Accounts Receivable, FY2018 Accounts Payable, FY2019 Accounts Payable, FY2019 Cost of Goods Sold (COGS), and FY2019 Revenue.

2. **Calculate DIO (Days Inventory Outstanding):**

   * Calculate the average inventory: (FY2018 Inventory + FY2019 Inventory) / 2
   * Apply the DIO formula: 365 * (average inventory) / (FY2019 COGS)

3. **Calculate DSO (Days Sales Outstanding):**

   * Calculate the average accounts receivable: (FY2018 Accounts Receivable + FY2019 Accounts Receivable) / 2
   * Apply the DSO formula: 365 * (average accounts receivable) / (FY2019 Revenue)

4. **Calculate DPO (Days Payable Outstanding):**

   * Calculate the change in inventory: FY2019 Inventory - FY2018 Inventory
   * Calculate the average accounts payable: (FY2018 Accounts Payable + FY2019 Accounts Payable) / 2
   * Apply the DPO formula: 365 * (average accounts payable) / (FY2019 COGS + change in inventory)

5. **Calculate CCC (Cash Conversion Cycle):**

   * Apply the CCC formula: DIO + DSO - DPO

6. **Format the Final Answer:**

   * Round the final CCC value to two decimal places.  Present the final answer as a single number representing the CCC in days.  No percentage change is needed as the prompt only asks for the CCC value.  If the calculation results in a value of 0, state "nothing happened".

```

- **Inventory:**
  - FY2018: $1257.00 millions
  - FY2019: $1188.00 millions
- **Accounts Receivable:**
  - FY2018: $1389.00 millions
  - FY2019: $1269.00 millions
- **Accounts Payable:**
  - FY2018: $1561.00 millions
  - FY2019: $1414.00 millions
- **FY2019 COGS:** $10380.00 millions
- **FY2019 Revenue:** $16872.00 millions

- **Average Inventory:** ($1257.00 millions+ $1188.00 millions) / 2 = $1222.50 millions

- **DIO:** 365 \* ($1222.50 millions / $10380.00 millions) = 42.86

- **Average Accounts Receivable:** ($1389.00 millions + $1269.00 millions) / 2 = $1329.00 millions

- **DSO:** 365 \* ($1329.00 millions / $16872.00 millions) = 28.62

- **Change in Inventory:** $1188.00 millions - $1257.00 millions = decrease in $69.00 millions

- **Average Accounts Payable:** ($1561.00 millions + $1414.00 millions) / 2 = $1487.50 millions

- **DPO:** 365 \* ($1487.50 millions / ($10380.00 millions - $69.00 millions)) = 52.31

- **CCC:** 42.86 + 28.62 - 52.31 = 19.17

**Final Answer:** 19.17

## Correct Answer

-3.7
