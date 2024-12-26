# Question 22

## Prompt

In the document AMCOR 2020 10K, What is Amcor's year end FY2020 net AR (in USD millions)? Address the question by adopting the perspective of a financial analyst who can only use the details shown within the balance sheet.

## Response

```results
[
  {
    "citation": "Filename: AMCOR_2020_10K.pdf, pages: 50",
    "reason": "Gestell selected this node for containing Amcor's FY2020 10K report, which includes a balance sheet with the requested information."
  },
  {
    "citation": "Filename: AMCOR_2020_10K.pdf, pages: 111",
    "reason": "Gestell selected this node for also containing Amcor's FY2020 10K report, which includes a balance sheet with the requested information."
  }
]
```

```cot
1. **Document and Section:** Analyze Amcor's 2020 10K document, specifically the balance sheet section.

2. **Analysis:**

* Locate the "Accounts Receivable" line item on Amcor's FY2020 balance sheet.
* Extract the value of Accounts Receivable at the end of FY2020.  The 10K will likely present this value in USD millions.

3. **Response Rules:**

* Report the value found in the balance sheet as Amcor's year-end FY2020 net Accounts Receivable in USD millions.  Follow the specified formatting rules (2 decimal places for millions).
* If the balance sheet does not explicitly state a value for "Accounts Receivable" or a similar line item representing net accounts receivable, state that the information cannot be determined from the provided balance sheet.
* If the value is zero, state "Nothing happened".


```

- The 2020 10K filing shows trade receivables, net of $1,615.90 million for FY2020.

**Final Answer:** $1,615.90 million

## Correct Answer

$1616.00
