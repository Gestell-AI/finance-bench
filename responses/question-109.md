# Question 109

## Prompt

In the document MGMRESORTS 2022Q4 EARNINGS, Which region had the worst topline performance for MGM during FY2022?

## Response

```results
[
  {
    "citation": "Filename: MGMRESORTS_2022_10K.pdf, pages: 37-41",
    "reason": "Gestell selected this node for containing information on MGM Resorts International's financial performance for fiscal year 2022, including a comparison of revenue across different segments such as Las Vegas Strip, Regional Operations, and MGM China."
  },
  {
    "citation": "Filename: MGMRESORTS_2022_10K.pdf, pages: 34-36",
    "reason": "Gestell selected this node for providing details on MGM Resorts International's financial performance and operational results for the year ended December 31, 2022, including information on visitor volumes in Las Vegas and Macau, which are key indicators of regional performance."
  },
  {
    "citation": "Filename: MGMRESORTS_2022_10K.pdf, pages: 46-48",
    "reason": "Gestell selected this node for offering insights into MGM Resorts International's major transactions in 2022, including acquisitions and divestitures, which can impact the financial performance of different regions."
  }
]
```

```cot
1. Correct Document and Section: Analyze the "MGMRESORTS 2022Q4 EARNINGS" document. Focus on the sections reporting regional revenue performance for the fiscal year 2022 (FY2022).  This will likely be in a section summarizing financial results by region or geographic segment.

2. Detailed Analysis and Calculations:

*   **Identify Regional Revenue Data:** Locate the data presenting revenue figures for each region MGM operates in for FY2022.  The document should clearly label each region (e.g., MGM China, Las Vegas, etc.).
*   **Calculate Revenue Changes:** For each region, determine the percentage change in revenue from the previous fiscal year.  This requires the revenue figures for both FY2022 and FY2021. The percentage change is calculated as: `[(FY2022 Revenue - FY2021 Revenue) / FY2021 Revenue] * 100`.
*   **Compare Regional Performance:** Compare the percentage change in revenue across all regions. Identify the region with the largest negative percentage change (i.e., the largest revenue decline).  This region represents the worst topline performance.

3. Response Rules:

*   The response should clearly state the region with the worst topline performance.
*   The response must quantify the performance of the worst-performing region using the percentage change in revenue calculated in step 2.
*   The response should also mention that other regions experienced revenue increases, providing context to the worst-performing region's decline.
*   The response must adhere to the specified formatting rules for numbers (dollar amounts, percentages, etc.) as detailed in the `Search Result Instructions`.
*   The final answer should follow the exact format specified in the prompt.


```

- MGM China's revenue in FY2022: $674.00 millions
- MGM China's revenue in FY2021: $1207.00 millions
- Change in revenue: $674.00 millions - $1207.00 millions = decrease in $533.00 millions
- Percentage change in revenue: (decrease in $533.00 millions / $1207.00 millions) \* 100% = -44.1%

Other regions, such as Las Vegas Strip Resorts and Regional Operations, saw revenue increases.

**Final Answer:** MGM China experienced the worst topline performance amongst the other regions presented. Its revenue declined 44.1% in FY2022 whereas the other regions presented increased their revenues.

## Correct Answer

MGM China experienced the worst topline performance amongst the other regions presented. Its revenue declined 44% in FY2022 whereas the other regions presented increased their revenues.
