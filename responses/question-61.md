# Question 61

## Prompt

In the document BOEING 2022 10K, Are there any product categories / service categories that represent more than 20% of Boeing's revenue for FY2022?

## Response

```results
[
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 24-25",
    "reason": "Gestell selected this node for containing Boeing's consolidated financial results for fiscal year 2022, including a detailed breakdown of revenues across its four segments."
  },
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 55",
    "reason": "Gestell selected this node for presenting Boeing's Consolidated Statements of Operations for 2022, providing data on revenues, costs, expenses, and net losses."
  },
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 25",
    "reason": "Gestell selected this node for detailing Boeing's financial performance in 2022, including segment-level results for Commercial Airplanes, Defense, Space & Security, and Global Services."
  },
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 42-49",
    "reason": "Gestell selected this node for providing Boeing's fiscal year 2022 financial performance across its segments, including a cash flow summary and analysis of operating, investing, and financing activities."
  },
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 115",
    "reason": "Gestell selected this node for offering a detailed breakdown of Boeing's revenues by geographical customer location for 2022."
  },
  {
    "citation": "Filename: BOEING_2022_10K.pdf, pages: 56",
    "reason": "Gestell selected this node for presenting Boeing's consolidated statements of comprehensive income for 2022, including details on net losses and other comprehensive income components."
  },
  {
    "citation": "Filename: BOEING_2018_10K.pdf, pages: 112-114",
    "reason": "Gestell selected this node for providing a comprehensive overview of Boeing's financial performance in 2022, including revenue breakdowns by geographical location, segment, and contract type."
  }
]
```

```cot
1. **Document and Section:** Analyze the "BOEING 2022 10K" document.  Specifically, focus on the revenue segments disclosed in the financial statements (likely the income statement or a related segment reporting section).

2. **Analysis:**
    * Locate the revenue breakdown by product or service category for the fiscal year 2022 (FY2022).  The 10-K should explicitly detail the revenue contribution of each segment.
    * Identify the revenue for each product/service category.
    * Calculate the percentage of total revenue for each category:  `(Revenue of Category / Total Revenue) * 100%`
    * Identify any categories where the calculated percentage exceeds 20%.

3. **Response Rules:**
    * Present the findings as a concise, bulleted list.
    * For each category exceeding 20% of revenue, state the category name and its percentage contribution to total revenue, formatted according to the specified guidelines (e.g., 21.5%).
    * If no category exceeds 20%, state: "No product or service category represents more than 20% of Boeing's revenue for FY2022."
    * Use Markdown formatting as instructed.  Include dollar values and percentages as specified.
    * The final answer should be a clear statement indicating whether any categories exceeded the 20% threshold and, if so, which ones.

```

- **Total Revenue:** $66608.00 million
- Commercial Airplanes: $25867.00 million, 38.8%
- Defense, Space & Security: $23162.00 million, 34.8%
- Global Services: $17611.00 million, 26.4%

**Final Answer:** Yes, three product/service categories represent more than 20% of Boeing's revenue for FY2022: Commercial Airplanes (38.8%), Defense, Space & Security (34.8%), and Global Services (26.4%).

## Correct Answer

Yes. Boeing has product and service categories that represent more than 20% of Boeing's revenue for FY2022. These categories are Commercial Airplanes which comprises 39% of total revenue, Defence which comprises 35% of total revenue and Services which comprises 26% of total revenue.
