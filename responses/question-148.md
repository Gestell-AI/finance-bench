# Question 148

## Prompt

In the document WALMART 2018 10K, What is FY2018 days payable outstanding (DPO) for Walmart? DPO is defined as: 365 \* (average accounts payable between FY2017 and FY2018) / (FY2018 COGS + change in inventory between FY2017 and FY2018). Round your answer to two decimal places. Please base your judgments on the information provided primarily in the statement of financial position and the P&L statement.

## Response

```results
[
  {
    "citation": "Filename: WALMART_2018_10K.pdf, pages: 50",
    "reason": "Gestell selected this node for containing Walmart's financial statements for fiscal year 2018, including the balance sheet and income statement, which contain the necessary data points (Accounts Payable, Cost of Goods Sold, and Inventory) to calculate the Days Payable Outstanding (DPO)."
  }
]
```

```cot
1. Analyze the Walmart 2018 10K document, specifically the statement of financial position and the profit and loss (P&L) statement.  Extract the following data for FY2017 and FY2018: Accounts Payable, Inventory, and Cost of Goods Sold (COGS).

2. **Calculations:**

   * **Step 1: Identify Accounts Payable for FY2017 and FY2018:** Locate the "Accounts Payable" figures from the balance sheet for both fiscal years. Let's assume these values are:
      * FY2017 Accounts Payable = X
      * FY2018 Accounts Payable = Y

   * **Step 2: Calculate Average Accounts Payable:**
      * Average Accounts Payable = (X + Y) / 2

   * **Step 3: Identify Inventory for FY2017 and FY2018:** Locate the "Inventory" figures from the balance sheet for both fiscal years. Let's assume these values are:
      * FY2017 Inventory = A
      * FY2018 Inventory = B

   * **Step 4: Calculate Change in Inventory:**
      * Change in Inventory = B - A

   * **Step 5: Obtain COGS for FY2018:** Locate the "Cost of Goods Sold" from the P&L statement for FY2018. Let's assume this value is:
      * FY2018 COGS = C

   * **Step 6: Calculate the Denominator:**
      * Total Cost = C + (B - A)

   * **Step 7: Calculate Days Payable Outstanding (DPO):**
      * DPO = (365 * Average Accounts Payable) / Total Cost
      * DPO = (365 * ((X + Y) / 2)) / (C + (B - A))

3. **Response Rules:**

   * Round the final DPO value to two decimal places.
   * Present the final answer as a single number with two decimal places, representing the calculated DPO for FY2018.  No additional commentary is needed.
   * Use the exact values from the financial statements; do not substitute example values.


```

- **FY2017 Accounts Payable:** $42.05 billions
- **FY2018 Accounts Payable:** $46.14 billions
- **Average Accounts Payable:** ($42.05 billions + $46.14 billions) / 2 = $44.095 billions
- **FY2017 Inventory:** $43.05 billions
- **FY2018 Inventory:** $43.78 billions
- **Change in Inventory:** $43.78 billions - $43.05 billions = $0.73 billions
- **FY2018 COGS:** $373.39 billions
- **Total Cost:** $373.39 billions + $0.73 billions = $374.12 billions
- **FY2018 DPO:** (365 \* $44.095 billions) / $374.12 billions = 42.69

**Final Answer:** 42.69

## Correct Answer

42.69
