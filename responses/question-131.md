# Question 131

## Prompt

In the document PFIZER 2021 10K, Did Pfizer grow its PPNE between FY20 and FY21?

## Response

```results
[
  {
    "citation": "Filename: PFIZER_2021_10K.pdf, pages: 87-88",
    "reason": "Gestell selected this node for containing PP&E values for both FY20 and FY21, allowing for a growth comparison."
  }
]
```

```cot
1. Analyze document: PFIZER 2021 10K.  Specifically, locate the balance sheets for fiscal years 2020 (FY20) and 2021 (FY21).  Find the "Property, Plant, and Equipment" (PP&E) values for both years.

2.  Perform Calculation:

*   **Step 1:** Identify the PP&E value for FY20 from the balance sheet. Let's say this value is X.
*   **Step 2:** Identify the PP&E value for FY21 from the balance sheet. Let's say this value is Y.
*   **Step 3:** Calculate the change in PP&E:  Δ PP&E = Y - X
*   **Step 4:** Calculate the percentage change in PP&E: [(Y - X) / X] * 100%

3. Response Rules:

*   Present the findings as a concise bullet point list.
*   State the PP&E values for FY20 and FY21.
*   Report the absolute change (Δ PP&E) in dollars, following the specified formatting rules (millions with 2 decimal places, billions with 1 decimal place and a zero).  If the change is a decrease, use "decrease in $value" format.
*   Report the percentage change in PP&E, formatted to one decimal place.
*   If the change in PP&E is zero, explicitly state "Pfizer did not grow its PPNE between FY20 and FY21".


```

- FY20 PP&E: $13745.00 millions
- FY21 PP&E: $14882.00 millions
- Change in PP&E: $1137.00 millions
- Percentage Change in PP&E: 8.3%

**Final Answer:** Pfizer's PP&E increased by $1137.00 millions (8.3%) between FY20 and FY21.

## Correct Answer

Yes, change in PPNE was positive year over year
