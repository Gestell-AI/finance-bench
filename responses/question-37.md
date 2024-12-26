# Question 37

## Prompt

In the document AMD 2022 10K, From FY21 to FY22, excluding Embedded, in which AMD reporting segment did sales proportionally increase the most?

## Response

```results
[
  {
    "citation": "Filename: AMD_2022_10K.pdf, pages: 49-50",
    "reason": "Gestell selected this node for containing AMD's financial performance data for fiscal year 2022, including segment breakdowns for Gaming and Embedded, allowing for the calculation of proportional sales increase."
  },
  {
    "citation": "Filename: AMD_2022_10K.pdf, pages: 48",
    "reason": "Gestell selected this node for providing AMD's financial performance data for fiscal year 2022, with segment breakdowns for Data Center, Client, Gaming, and Embedded, enabling the calculation of proportional sales increase."
  },
  {
    "citation": "Filename: AMD_2022_10K.pdf, pages: 43-44",
    "reason": "Gestell selected this node for offering AMD's financial performance data for fiscal year 2022, including segment breakdowns for Data Center, Client, Gaming, and Embedded, which allows for the calculation of proportional sales increase."
  }
]
```

```cot
1. **Document and Section:** Analyze the AMD 2022 10K document. Focus on the financial statements and accompanying notes that detail the company's segment reporting for fiscal years 2021 (FY21) and 2022 (FY22).  Specifically, look for a breakdown of sales by reporting segment, excluding Embedded.

2. **Analysis and Calculations:**

* **Step 1: Identify Sales Data:** Locate the sales figures for each reporting segment (excluding Embedded) for both FY21 and FY22.  The 10K should clearly present this information in a table or within the segment discussion.

* **Step 2: Calculate Proportional Increase:** For each segment, calculate the proportional increase in sales from FY21 to FY22 using the following formula:

   `Proportional Increase (%) = [(FY22 Sales - FY21 Sales) / FY21 Sales] * 100`

* **Step 3: Compare Proportional Increases:** Compare the calculated proportional increases for all reporting segments. Identify the segment with the highest percentage increase.

3. **Response Rules:**

* Present the findings in a concise, bullet-point format.
* Clearly state the reporting segment that experienced the largest proportional sales increase from FY21 to FY22.
* Report the proportional increase as a percentage, formatted to one decimal place (e.g., 12.3%).
* If the proportional increase is 0%, state "Nothing happened".
* If any segment shows a decrease, report the decrease as a negative percentage.  For example, a decrease of 5% would be reported as -5.0%.
* Adhere to the specified formatting rules for dollar values and percentages as outlined in the `Response Instructions`.

```

- Data Center FY22: $6.0 billions
- Data Center FY21: $3.7 billions
- Data Center Change: $2.3 billions
- Data Center % Change: 62.2%

- Client FY22: $6.2 billions
- Client FY21: $6.9 billions
- Client Change: decrease in $0.7 billions
- Client % Change: -10.1%

- Gaming FY22: $6.8 billions
- Gaming FY21: $5.6 billions
- Gaming Change: $1.2 billions
- Gaming % Change: 21.4%

- Total Excluding Embedded FY22: $19.0 billions
- Total Excluding Embedded FY21: $16.2 billions
- Total Excluding Embedded Change: $2.8 billions
- Total Excluding Embedded % Change: 17.3%

**Final Answer:** Data Center sales proportionally increased the most at 62.2%.

## Correct Answer

Data Center
