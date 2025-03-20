document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Logic
    const languageSelect = document.getElementById('language-select');

    if (!languageSelect) {
        console.error('Language select element not found!');
        return;
    }

    // Language object with translations
    const translations = {
        // 翻译对象内容（保持不变）
    };

    // Function to update page content based on selected language
    function updateLanguage(lang) {
        const t = translations[lang];

        // Helper function to safely update text content
        const updateText = (selector, text) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = text;
            } else {
                console.warn(`Element not found for selector: ${selector}`);
            }
        };

        // Header
        updateText('header h1', t.headerTitle);
        updateText('header p', t.headerSubtitle);
        updateText('#payoff-tab', t.payoffTab);
        updateText('#loan-tab', t.loanTab);

        // Payoff Calculator Section
        updateText('#payoff-calculator h2', t.payoffTitle);
        updateText('label[for="payoff-loan-amount"]', t.payoffLoanAmount);
        updateText('label[for="payoff-total-term"]', t.payoffTotalTerm);
        updateText('label[for="payoff-monthly-payment"]', t.payoffMonthlyPayment);
        updateText('label[for="payoff-months-paid"]', t.payoffMonthsPaid);
        updateText('label[for="payoff-interest-rate"]', t.payoffInterestRate);
        updateText('#payoff-interest-rate + small', t.payoffInterestRateHint);
        updateText('label[for="payoff-type"]', t.payoffType);
        updateText('#payoff-type option[value="none"]', t.payoffTypeNone);
        updateText('#payoff-type option[value="monthly"]', t.payoffTypeMonthly);
        updateText('#payoff-type option[value="lump-sum"]', t.payoffTypeLumpSum);
        updateText('#payoff-type option[value="pay-off-early"]', t.payoffTypePayOffEarly);
        updateText('label[for="payoff-prepayment-amount"]', t.payoffPrepaymentAmount);
        updateText('#payoff-prepayment-amount + small', t.payoffPrepaymentAmountHint);
        updateText('label[for="payoff-prepayment-timing"]', t.payoffPrepaymentTiming);
        updateText('#payoff-prepayment-timing + small', t.payoffPrepaymentTimingHint);
        updateText('label[for="payoff-other-fees"]', t.payoffOtherFees);
        updateText('#payoff-other-fees + small', t.payoffOtherFeesHint);
        updateText('#payoff-form button', t.payoffCalculateButton);
        updateText('#payoff-calculator .calculator-results h2', t.payoffInterestSavings);
        updateText('#payoff-summary p:nth-child(1) strong', t.payoffCalculatedInterestRate);
        updateText('#payoff-summary p:nth-child(2) strong', t.payoffRemainingBalance);
        updateText('#payoff-summary p:nth-child(3) strong', t.payoffOriginalInterest);
        updateText('#payoff-summary p:nth-child(4) strong', t.payoffNewInterest);
        updateText('#payoff-summary p:nth-child(5) strong', t.payoffTotalTerm);
        updateText('#payoff-summary p:nth-child(6) strong', t.payoffRemainingTerm);
        updateText('#payoff-summary p:nth-child(7) strong', t.payoffNewTerm);
        updateText('#payoff-summary p:nth-child(8) strong', t.payoffTotalCost);

        // Loan Calculator Section
        updateText('#loan-calculator h2', t.loanTitle);
        updateText('label[for="auto-price"]', t.loanAutoPrice);
        updateText('label[for="down-payment"]', t.loanDownPayment);
        updateText('label[for="loan-term"]', t.loanTerm);
        updateText('label[for="state"]', t.loanState);
        updateText('label[for="sales-tax"]', t.loanSalesTax);
        updateText('label[for="interest-rate"]', t.loanInterestRate);
        updateText('label[for="other-fees"]', t.loanOtherFees);
        updateText('#loan-form button', t.loanCalculateButton);
        updateText('#loan-calculator .calculator-results h2', t.loanMonthlyPay);
        updateText('.loan-summary p:nth-child(1) strong', t.loanTotalLoan);
        updateText('.loan-summary p:nth-child(2) strong', t.loanSalesTax);
        updateText('.loan-summary p:nth-child(3) strong', t.loanUpfrontPayment);
        updateText('.loan-summary p:nth-child(4) strong', t.loanTotalPayments);
        updateText('.loan-summary p:nth-child(5) strong', t.loanTotalInterest);
        updateText('.loan-summary p:nth-child(6) strong', t.loanTotalCost);
        updateText('#loan-calculator h3', t.loanAmortizationSchedule);
        updateText('#amortization-table th:nth-child(1)', t.loanTableMonth);
        updateText('#amortization-table th:nth-child(2)', t.loanTablePayment);
        updateText('#amortization-table th:nth-child(3)', t.loanTableInterest);
        updateText('#amortization-table th:nth-child(4)', t.loanTablePrincipal);
        updateText('#amortization-table th:nth-child(5)', t.loanTableBalance);

        // Keywords Explanation Section
        updateText('#keywords-explanation h2', t.keywordsTitle);
        updateText('#keywords-explanation p', t.keywordsSubtitle);
        updateText('#keywords-explanation .keyword-section:nth-child(3) h2', t.keywordAutoLoanPayoffCalculator);
        updateText('#keywords-explanation .keyword-section:nth-child(3) p', t.keywordAutoLoanPayoffCalculatorDesc);
        updateText('#keywords-explanation .keyword-section:nth-child(4) h2', t.keywordAutoPayoffCalculator);
        updateText('#keywords-explanation .keyword-section:nth-child(4) p', t.keywordAutoPayoffCalculatorDesc);
        updateText('#keywords-explanation .keyword-section:nth-child(5) h2', t.keywordAutoLoanEarlyPayoffCalculator);
        updateText('#keywords-explanation .keyword-section:nth-child(5) p', t.keywordAutoLoanEarlyPayoffCalculatorDesc);
        updateText('#keywords-explanation .keyword-section:nth-child(6) h2', t.keywordAutoEarlyPayoffCalculator);
        updateText('#keywords-explanation .keyword-section:nth-child(6) p', t.keywordAutoEarlyPayoffCalculatorDesc);
        updateText('#keywords-explanation .keyword-section:nth-child(7) h2', t.keywordEarlyPayoffAutoLoanCalculator);
        updateText('#keywords-explanation .keyword-section:nth-child(7) p', t.keywordEarlyPayoffAutoLoanCalculatorDesc);
        updateText('#keywords-explanation .keyword-section:nth-child(8) h2', t.keywordAutoLoanPayoffEarlyCalculator);
        updateText('#keywords-explanation .keyword-section:nth-child(8) p', t.keywordAutoLoanPayoffEarlyCalculatorDesc);
        updateText('#keywords-explanation .keyword-section:nth-child(9) h2', t.keywordLoanPayoffCalculatorAuto);
        updateText('#keywords-explanation .keyword-section:nth-child(9) p', t.keywordLoanPayoffCalculatorAutoDesc);
        updateText('#keywords-explanation .keyword-section:nth-child(10) h2', t.keywordPayoffAutoLoanEarlyCalculator);
        updateText('#keywords-explanation .keyword-section:nth-child(10) p', t.keywordPayoffAutoLoanEarlyCalculatorDesc);
        updateText('#keywords-explanation .keyword-section:nth-child(11) h2', t.keywordPayoffCalculatorAutoLoan);
        updateText('#keywords-explanation .keyword-section:nth-child(11) p', t.keywordPayoffCalculatorAutoLoanDesc);
        updateText('#keywords-explanation .keyword-section:nth-child(12) h2', t.keywordEarlyAutoLoanPayoffCalculator);
        updateText('#keywords-explanation .keyword-section:nth-child(12) p', t.keywordEarlyAutoLoanPayoffCalculatorDesc);

        // Terms Explanation Section
        updateText('#terms-explanation h2', t.termsTitle);
        updateText('#terms-explanation p', t.termsSubtitle);
        updateText('#terms-explanation .keyword-section:nth-child(3) h2', t.termInterestRate);
        updateText('#terms-explanation .keyword-section:nth-child(3) p', t.termInterestRateDesc);
        updateText('#terms-explanation .keyword-section:nth-child(4) h2', t.termLoanTerm);
        updateText('#terms-explanation .keyword-section:nth-child(4) p', t.termLoanTermDesc);
        updateText('#terms-explanation .keyword-section:nth-child(5) h2', t.termPrincipal);
        updateText('#terms-explanation .keyword-section:nth-child(5) p', t.termPrincipalDesc);
        updateText('#terms-explanation .keyword-section:nth-child(6) h2', t.termMonthlyPayment);
        updateText('#terms-explanation .keyword-section:nth-child(6) p', t.termMonthlyPaymentDesc);
        updateText('#terms-explanation .keyword-section:nth-child(7) h2', t.termRemainingBalance);
        updateText('#terms-explanation .keyword-section:nth-child(7) p', t.termRemainingBalanceDesc);
        updateText('#terms-explanation .keyword-section:nth-child(8) h2', t.termPrepayment);
        updateText('#terms-explanation .keyword-section:nth-child(8) p', t.termPrepaymentDesc);
        updateText('#terms-explanation .keyword-section:nth-child(9) h2', t.termLumpSumPrepayment);
        updateText('#terms-explanation .keyword-section:nth-child(9) p', t.termLumpSumPrepaymentDesc);
        updateText('#terms-explanation .keyword-section:nth-child(10) h2', t.termMonthlyPrepayment);
        updateText('#terms-explanation .keyword-section:nth-child(10) p', t.termMonthlyPrepaymentDesc);
        updateText('#terms-explanation .keyword-section:nth-child(11) h2', t.termPayOffEarly);
        updateText('#terms-explanation .keyword-section:nth-child(11) p', t.termPayOffEarlyDesc);
        updateText('#terms-explanation .keyword-section:nth-child(12) h2', t.termInterestSavings);
        updateText('#terms-explanation .keyword-section:nth-child(12) p', t.termInterestSavingsDesc);
        updateText('#terms-explanation .keyword-section:nth-child(13) h2', t.termTotalLoanAmount);
        updateText('#terms-explanation .keyword-section:nth-child(13) p', t.termTotalLoanAmountDesc);
        updateText('#terms-explanation .keyword-section:nth-child(14) h2', t.termDownPayment);
        updateText('#terms-explanation .keyword-section:nth-child(14) p', t.termDownPaymentDesc);
        updateText('#terms-explanation .keyword-section:nth-child(15) h2', t.termSalesTax);
        updateText('#terms-explanation .keyword-section:nth-child(15) p', t.termSalesTaxDesc);
        updateText('#terms-explanation .keyword-section:nth-child(16) h2', t.termOtherFees);
        updateText('#terms-explanation .keyword-section:nth-child(16) p', t.termOtherFeesDesc);
        updateText('#terms-explanation .keyword-section:nth-child(17) h2', t.termAmortizationSchedule);
        updateText('#terms-explanation .keyword-section:nth-child(17) p', t.termAmortizationScheduleDesc);
        updateText('#terms-explanation .keyword-section:nth-child(18) h2', t.termTotalCost);
        updateText('#terms-explanation .keyword-section:nth-child(18) p', t.termTotalCostDesc);
        updateText('#terms-explanation .keyword-section:nth-child(19) h2', t.termNewLoanTerm);
        updateText('#terms-explanation .keyword-section:nth-child(19) p', t.termNewLoanTermDesc);
        updateText('#terms-explanation .keyword-section:nth-child(20) h2', t.termRemainingTerm);
        updateText('#terms-explanation .keyword-section:nth-child(20) p', t.termRemainingTermDesc);
        updateText('#terms-explanation .keyword-section:nth-child(21) h2', t.termTotalOfPayments);
        updateText('#terms-explanation .keyword-section:nth-child(21) p', t.termTotalOfPaymentsDesc);
        updateText('#terms-explanation .keyword-section:nth-child(22) h2', t.termUpfrontPayment);
        updateText('#terms-explanation .keyword-section:nth-child(22) p', t.termUpfrontPaymentDesc);

        // Footer
        updateText('footer p', t.footerText);
    }

    // Initialize language to English
    updateLanguage('en');

    // Listen for language change
    languageSelect.addEventListener('change', (e) => {
        console.log('Language changed to:', e.target.value);
        updateLanguage(e.target.value);
    });

    // 以下为现有代码（Tab Switching Logic 等）
});


// Language Switcher Logic
const languageSelect = document.getElementById('language-select');

// Language object with translations
const translations = {
    en: {
        // Header
        headerTitle: "Auto Payoff Calculator",
        headerSubtitle: "Calculate your car loan payoff and savings easily.",
        payoffTab: "Payoff Calculator",
        loanTab: "Loan Calculator",

        // Payoff Calculator Section
        payoffTitle: "Prepayment Calculation",
        payoffLoanAmount: "Loan Amount ($):",
        payoffTotalTerm: "Total Loan Term (months):",
        payoffMonthlyPayment: "Monthly Payment ($):",
        payoffMonthsPaid: "Months Already Paid (months):",
        payoffInterestRate: "Interest Rate (%):",
        payoffInterestRateHint: "Leave blank to calculate automatically",
        payoffType: "Prepayment Type:",
        payoffTypeNone: "No Prepayment",
        payoffTypeMonthly: "Monthly Prepayment",
        payoffTypeLumpSum: "Lump Sum Prepayment",
        payoffTypePayOffEarly: "Pay Off Early",
        payoffPrepaymentAmount: "Prepayment Amount ($):",
        payoffPrepaymentAmountHint: "Additional amount for monthly prepayment or lump sum",
        payoffPrepaymentTiming: "Prepayment Timing (months from now):",
        payoffPrepaymentTimingHint: "When the lump sum or payoff will occur",
        payoffOtherFees: "Other Fees ($):",
        payoffOtherFeesHint: "Prepayment penalties or other fees",
        payoffCalculateButton: "Calculate",
        payoffInterestSavings: "Interest Savings:",
        payoffCalculatedInterestRate: "Calculated Interest Rate:",
        payoffRemainingBalance: "Remaining Balance:",
        payoffOriginalInterest: "Original Interest (Remaining Term):",
        payoffNewInterest: "New Interest with Prepayment:",
        payoffTotalTerm: "Total Loan Term:",
        payoffRemainingTerm: "Remaining Term (Without Prepayment):",
        payoffNewTerm: "New Loan Term with Prepayment:",
        payoffTotalCost: "Total Cost with Prepayment:",

        // Loan Calculator Section
        loanTitle: "Loan Calculator",
        loanAutoPrice: "Auto Price ($):",
        loanDownPayment: "Down Payment ($):",
        loanTerm: "Loan Term (months):",
        loanState: "Your State:",
        loanSalesTax: "Sales Tax (%):",
        loanInterestRate: "Interest Rate (%):",
        loanOtherFees: "Other Fees ($):",
        loanCalculateButton: "Calculate",
        loanMonthlyPay: "Monthly Pay:",
        loanTotalLoan: "Total Loan Amount:",
        loanSalesTax: "Sales Tax:",
        loanUpfrontPayment: "Upfront Payment:",
        loanTotalPayments: "Total of Payments:",
        loanTotalInterest: "Total Loan Interest:",
        loanTotalCost: "Total Cost (interest, tax, fees):",
        loanAmortizationSchedule: "Amortization Schedule",
        loanTableMonth: "Month",
        loanTablePayment: "Payment",
        loanTableInterest: "Interest",
        loanTablePrincipal: "Principal",
        loanTableBalance: "Balance",

        // Keywords Explanation Section
        keywordsTitle: "Understanding Auto Loan Payoff Calculators",
        keywordsSubtitle: "Learn more about the terms related to auto loan payoff calculators and how they can help you save on your car loan.",
        keywordAutoLoanPayoffCalculator: "Auto Loan Payoff Calculator",
        keywordAutoLoanPayoffCalculatorDesc: "An auto loan payoff calculator helps you determine how much you can save on interest by paying off your car loan early. It calculates your remaining balance, interest savings, and new payoff timeline based on your loan details and prepayment plans.",
        keywordAutoPayoffCalculator: "Auto Payoff Calculator",
        keywordAutoPayoffCalculatorDesc: "An auto payoff calculator is a tool that estimates the impact of early payments on your car loan. It shows how much time and money you can save by making extra payments or paying off your loan ahead of schedule.",
        keywordAutoLoanEarlyPayoffCalculator: "Auto Loan Early Payoff Calculator",
        keywordAutoLoanEarlyPayoffCalculatorDesc: "An auto loan early payoff calculator allows you to see the benefits of paying off your car loan before the original term ends. It calculates your interest savings and how early you can be debt-free.",
        keywordAutoEarlyPayoffCalculator: "Auto Early Payoff Calculator",
        keywordAutoEarlyPayoffCalculatorDesc: "An auto early payoff calculator helps you plan an early payoff for your car loan. By entering your loan details and prepayment amounts, you can see how much interest you’ll save and how quickly you can pay off your loan.",
        keywordEarlyPayoffAutoLoanCalculator: "Early Payoff Auto Loan Calculator",
        keywordEarlyPayoffAutoLoanCalculatorDesc: "An early payoff auto loan calculator is designed to show the financial benefits of paying off your car loan early. It provides insights into your remaining balance, interest savings, and adjusted loan term.",
        keywordAutoLoanPayoffEarlyCalculator: "Auto Loan Payoff Early Calculator",
        keywordAutoLoanPayoffEarlyCalculatorDesc: "An auto loan payoff early calculator helps you understand the savings from paying off your car loan ahead of schedule. It calculates your new payoff date and the amount of interest you can save with early payments.",
        keywordLoanPayoffCalculatorAuto: "Loan Payoff Calculator Auto",
        keywordLoanPayoffCalculatorAutoDesc: "A loan payoff calculator for auto loans helps you analyze the effects of making extra payments on your car loan. It shows your remaining balance, interest savings, and how much faster you can pay off your loan.",
        keywordPayoffAutoLoanEarlyCalculator: "Payoff Auto Loan Early Calculator",
        keywordPayoffAutoLoanEarlyCalculatorDesc: "A payoff auto loan early calculator is a tool to estimate the savings from paying off your car loan early. It calculates your interest savings and new loan term based on your prepayment strategy.",
        keywordPayoffCalculatorAutoLoan: "Payoff Calculator Auto Loan",
        keywordPayoffCalculatorAutoLoanDesc: "A payoff calculator for an auto loan helps you determine how much you can save by paying off your car loan early. It provides a detailed breakdown of your interest savings and remaining loan term.",
        keywordEarlyAutoLoanPayoffCalculator: "Early Auto Loan Payoff Calculator",
        keywordEarlyAutoLoanPayoffCalculatorDesc: "An early auto loan payoff calculator shows you how much you can save by paying off your car loan early. It calculates your interest savings, remaining balance, and the new timeline for paying off your loan.",

        // Terms Explanation Section
        termsTitle: "Understanding Auto Loan Terms",
        termsSubtitle: "Learn about the key terms related to auto loans and payoff calculators to make informed financial decisions.",
        termInterestRate: "Interest Rate",
        termInterestRateDesc: "The interest rate is the percentage charged by a lender on the borrowed amount of your auto loan. It determines how much extra you’ll pay on top of the loan principal over time, typically expressed as an annual percentage rate (APR).",
        termLoanTerm: "Loan Term",
        termLoanTermDesc: "The loan term is the length of time you have to repay your auto loan, usually measured in months. A longer loan term means lower monthly payments but higher total interest, while a shorter term reduces interest but increases monthly payments.",
        termPrincipal: "Principal",
        termPrincipalDesc: "The principal is the original amount of money you borrow for your auto loan, excluding interest, taxes, and fees. It’s the base amount that you’ll repay over the loan term, and it decreases as you make payments.",
        termMonthlyPayment: "Monthly Payment",
        termMonthlyPaymentDesc: "The monthly payment is the fixed amount you pay each month to repay your auto loan. It includes both the principal and interest, and sometimes taxes or fees, depending on your loan agreement.",
        termRemainingBalance: "Remaining Balance",
        termRemainingBalanceDesc: "The remaining balance is the amount of your auto loan that you still owe at a given point in time. It decreases as you make payments and can be reduced faster with prepayments.",
        termPrepayment: "Prepayment",
        termPrepaymentDesc: "Prepayment refers to paying extra money toward your auto loan beyond the required monthly payment. This can reduce your remaining balance, save on interest, and shorten your loan term.",
        termLumpSumPrepayment: "Lump Sum Prepayment",
        termLumpSumPrepaymentDesc: "A lump sum prepayment is a one-time extra payment made toward your auto loan. It directly reduces the principal, leading to interest savings and potentially a shorter loan term.",
        termMonthlyPrepayment: "Monthly Prepayment",
        termMonthlyPrepaymentDesc: "Monthly prepayment involves adding an extra amount to your regular monthly payment. This consistent extra payment reduces your principal over time, saving you interest and shortening the loan term.",
        termPayOffEarly: "Pay Off Early",
        termPayOffEarlyDesc: "Paying off early means settling your auto loan in full before the end of the original loan term. This can save you significant interest and free you from debt sooner.",
        termInterestSavings: "Interest Savings",
        termInterestSavingsDesc: "Interest savings refer to the amount of money you save on interest by making prepayments or paying off your auto loan early. It’s calculated as the difference between the original interest and the new interest after prepayments.",
        termTotalLoanAmount: "Total Loan Amount",
        termTotalLoanAmountDesc: "The total loan amount is the full amount you borrow for your auto loan, including the principal, sales tax, and any additional fees, minus your down payment.",
        termDownPayment: "Down Payment",
        termDownPaymentDesc: "A down payment is the initial amount you pay upfront when purchasing a car with a loan. It reduces the total loan amount, lowering your monthly payments and interest costs.",
        termSalesTax: "Sales Tax",
        termSalesTaxDesc: "Sales tax is a percentage-based tax applied to the purchase price of your car. It’s often included in the total loan amount if not paid upfront, increasing the amount you borrow.",
        termOtherFees: "Other Fees",
        termOtherFeesDesc: "Other fees include additional costs associated with your auto loan, such as registration fees, documentation fees, or prepayment penalties. These fees can increase the total cost of your loan.",
        termAmortizationSchedule: "Amortization Schedule",
        termAmortizationScheduleDesc: "An amortization schedule is a table that shows the breakdown of each monthly payment over the life of your auto loan. It details how much of each payment goes toward interest, principal, and the remaining balance.",
        termTotalCost: "Total Cost",
        termTotalCostDesc: "The total cost of your auto loan is the sum of all payments you’ll make, including the principal, interest, sales tax, and other fees. It represents the full price of borrowing.",
        termNewLoanTerm: "New Loan Term",
        termNewLoanTermDesc: "The new loan term is the adjusted length of time it will take to pay off your auto loan after making prepayments. It’s typically shorter than the original loan term due to extra payments.",
        termRemainingTerm: "Remaining Term",
        termRemainingTermDesc: "The remaining term is the number of months left to pay off your auto loan without any prepayments. It’s calculated as the original loan term minus the months you’ve already paid.",
        termTotalOfPayments: "Total of Payments",
        termTotalOfPaymentsDesc: "The total of payments is the sum of all monthly payments you’ll make over the life of your auto loan. It includes both principal and interest, reflecting the full repayment amount.",
        termUpfrontPayment: "Upfront Payment",
        termUpfrontPaymentDesc: "An upfront payment is the initial amount you pay when taking out your auto loan, typically the down payment. It reduces the loan amount and can lower your overall interest costs.",

        // Footer
        footerText: "© 2025 calculator-app.org. All rights reserved."
    },
    zh: {
        // Header
        headerTitle: "汽车贷款提前还款计算器",
        headerSubtitle: "轻松计算您的汽车贷款提前还款和节省的金额。",
        payoffTab: "提前还款计算器",
        loanTab: "贷款计算器",

        // Payoff Calculator Section
        payoffTitle: "提前还款计算",
        payoffLoanAmount: "贷款金额（$）：",
        payoffTotalTerm: "贷款总期限（月）：",
        payoffMonthlyPayment: "每月还款金额（$）：",
        payoffMonthsPaid: "已还款月数（月）：",
        payoffInterestRate: "利率（%）：",
        payoffInterestRateHint: "留空以自动计算",
        payoffType: "提前还款类型：",
        payoffTypeNone: "无提前还款",
        payoffTypeMonthly: "每月提前还款",
        payoffTypeLumpSum: "一次性提前还款",
        payoffTypePayOffEarly: "提前还清贷款",
        payoffPrepaymentAmount: "提前还款金额（$）：",
        payoffPrepaymentAmountHint: "每月提前还款或一次性还款的额外金额",
        payoffPrepaymentTiming: "提前还款时间（从现在起多少个月）：",
        payoffPrepaymentTimingHint: "一次性还款或提前还清的时间",
        payoffOtherFees: "其他费用（$）：",
        payoffOtherFeesHint: "提前还款罚金或其他费用",
        payoffCalculateButton: "计算",
        payoffInterestSavings: "利息节省：",
        payoffCalculatedInterestRate: "计算出的利率：",
        payoffRemainingBalance: "剩余余额：",
        payoffOriginalInterest: "原始利息（剩余期限）：",
        payoffNewInterest: "提前还款后的新利息：",
        payoffTotalTerm: "贷款总期限：",
        payoffRemainingTerm: "剩余期限（无提前还款）：",
        payoffNewTerm: "提前还款后的新贷款期限：",
        payoffTotalCost: "提前还款后的总成本：",

        // Loan Calculator Section
        loanTitle: "贷款计算器",
        loanAutoPrice: "汽车价格（$）：",
        loanDownPayment: "首付款（$）：",
        loanTerm: "贷款期限（月）：",
        loanState: "您的州：",
        loanSalesTax: "销售税（%）：",
        loanInterestRate: "利率（%）：",
        loanOtherFees: "其他费用（$）：",
        loanCalculateButton: "计算",
        loanMonthlyPay: "每月还款：",
        loanTotalLoan: "贷款总额：",
        loanSalesTax: "销售税：",
        loanUpfrontPayment: "首期付款：",
        loanTotalPayments: "总付款额：",
        loanTotalInterest: "贷款总利息：",
        loanTotalCost: "总成本（利息、税费、其他费用）：",
        loanAmortizationSchedule: "还款计划表",
        loanTableMonth: "月份",
        loanTablePayment: "付款",
        loanTableInterest: "利息",
        loanTablePrincipal: "本金",
        loanTableBalance: "余额",

        // Keywords Explanation Section
        keywordsTitle: "了解汽车贷款提前还款计算器",
        keywordsSubtitle: "了解更多关于汽车贷款提前还款计算器的相关术语，以及它们如何帮助您节省贷款费用。",
        keywordAutoLoanPayoffCalculator: "汽车贷款提前还款计算器",
        keywordAutoLoanPayoffCalculatorDesc: "汽车贷款提前还款计算器帮助您计算提前还清汽车贷款可以节省的利息。它会根据您的贷款详情和提前还款计划，计算剩余余额、利息节省和新还款时间表。",
        keywordAutoPayoffCalculator: "汽车提前还款计算器",
        keywordAutoPayoffCalculatorDesc: "汽车提前还款计算器是一个工具，用于估算提前还款对您的汽车贷款的影响。它显示您通过额外还款或提前还清贷款可以节省的时间和金钱。",
        keywordAutoLoanEarlyPayoffCalculator: "汽车贷款提前还清计算器",
        keywordAutoLoanEarlyPayoffCalculatorDesc: "汽车贷款提前还清计算器让您看到在原始贷款期限结束前还清贷款的好处。它会计算您的利息节省以及您可以多早摆脱债务。",
        keywordAutoEarlyPayoffCalculator: "汽车提前还清计算器",
        keywordAutoEarlyPayoffCalculatorDesc: "汽车提前还清计算器帮助您规划汽车贷款的提前还款。通过输入贷款详情和提前还款金额，您可以看到节省的利息以及多快可以还清贷款。",
        keywordEarlyPayoffAutoLoanCalculator: "提前还款汽车贷款计算器",
        keywordEarlyPayoffAutoLoanCalculatorDesc: "提前还款汽车贷款计算器旨在展示提前还清汽车贷款的财务优势。它提供有关剩余余额、利息节省和调整后贷款期限的洞察。",
        keywordAutoLoanPayoffEarlyCalculator: "汽车贷款提前还款计算器",
        keywordAutoLoanPayoffEarlyCalculatorDesc: "汽车贷款提前还款计算器帮助您了解提前还清汽车贷款的节省。它会计算您的新还款日期以及通过提前还款可以节省的利息金额。",
        keywordLoanPayoffCalculatorAuto: "汽车贷款提前还款计算器",
        keywordLoanPayoffCalculatorAutoDesc: "汽车贷款提前还款计算器帮助您分析额外还款对汽车贷款的影响。它显示您的剩余余额、利息节省以及可以多快还清贷款。",
        keywordPayoffAutoLoanEarlyCalculator: "提前还清汽车贷款计算器",
        keywordPayoffAutoLoanEarlyCalculatorDesc: "提前还清汽车贷款计算器是一个工具，用于估算提前还清汽车贷款的节省。它会根据您的提前还款策略计算利息节省和新贷款期限。",
        keywordPayoffCalculatorAutoLoan: "汽车贷款提前还款计算器",
        keywordPayoffCalculatorAutoLoanDesc: "汽车贷款提前还款计算器帮助您确定提前还清汽车贷款可以节省的金额。它提供利息节省和剩余贷款期限的详细分解。",
        keywordEarlyAutoLoanPayoffCalculator: "提前还款汽车贷款计算器",
        keywordEarlyAutoLoanPayoffCalculatorDesc: "提前还款汽车贷款计算器显示您通过提前还清汽车贷款可以节省的金额。它会计算您的利息节省、剩余余额和新还款时间表。",

        // Terms Explanation Section
        termsTitle: "了解汽车贷款术语",
        termsSubtitle: "了解与汽车贷款和提前还款计算器相关的关键术语，以做出明智的财务决策。",
        termInterestRate: "利率",
        termInterestRateDesc: "利率是贷款人向您借入的汽车贷款金额收取的百分比。它决定了您在贷款本金之外需要额外支付的金额，通常以年利率（APR）表示。",
        termLoanTerm: "贷款期限",
        termLoanTermDesc: "贷款期限是您必须偿还汽车贷款的时间长度，通常以月为单位。较长的贷款期限意味着较低的月供但更高的总利息，而较短的期限则减少利息但增加月供。",
        termPrincipal: "本金",
        termPrincipalDesc: "本金是您为汽车贷款借入的原始金额，不包括利息、税费和其他费用。这是您在贷款期限内需要偿还的基本金额，随着还款逐渐减少。",
        termMonthlyPayment: "月供",
        termMonthlyPaymentDesc: "月供是您每月支付的固定金额，用于偿还汽车贷款。它包括本金和利息，有时还包括税费或其他费用，具体取决于您的贷款协议。",
        termRemainingBalance: "剩余余额",
        termRemainingBalanceDesc: "剩余余额是您在某一时间点仍欠的汽车贷款金额。随着您还款，余额会减少，通过提前还款可以更快降低。",
        termPrepayment: "提前还款",
        termPrepaymentDesc: "提前还款是指在所需月供之外向您的汽车贷款额外支付的金额。这可以减少您的剩余余额，节省利息，并缩短贷款期限。",
        termLumpSumPrepayment: "一次性提前还款",
        termLumpSumPrepaymentDesc: "一次性提前还款是向您的汽车贷款一次性额外支付的金额。它直接减少本金，从而节省利息，并可能缩短贷款期限。",
        termMonthlyPrepayment: "每月提前还款",
        termMonthlyPrepaymentDesc: "每月提前还款是指在常规月供之外额外支付的金额。这种持续的额外还款会随着时间减少您的本金，节省利息并缩短贷款期限。",
        termPayOffEarly: "提前还清",
        termPayOffEarlyDesc: "提前还清是指在原始贷款期限结束前全额偿还您的汽车贷款。这可以为您节省大量利息，并让您更早摆脱债务。",
        termInterestSavings: "利息节省",
        termInterestSavingsDesc: "利息节省是指通过提前还款或提前还清汽车贷款节省的利息金额。它是原始利息与提前还款后新利息之间的差额。",
        termTotalLoanAmount: "贷款总额",
        termTotalLoanAmountDesc: "贷款总额是您为汽车贷款借入的全部金额，包括本金、销售税和任何额外费用，减去您的首付款。",
        termDownPayment: "首付款",
        termDownPaymentDesc: "首付款是您在购买汽车并贷款时预先支付的初始金额。它减少了贷款总额，降低了您的月供和利息成本。",
        termSalesTax: "销售税",
        termSalesTaxDesc: "销售税是根据汽车购买价格计算的百分比税。如果未提前支付，它通常包含在贷款总额中，增加了您的借款金额。",
        termOtherFees: "其他费用",
        termOtherFeesDesc: "其他费用包括与您的汽车贷款相关的额外成本，例如注册费、文件费或提前还款罚金。这些费用会增加贷款的总成本。",
        termAmortizationSchedule: "还款计划表",
        termAmortizationScheduleDesc: "还款计划表是一个表格，显示了汽车贷款整个期限内每月的还款明细。它详细说明了每笔付款中利息、本金和剩余余额的分配。",
        termTotalCost: "总成本",
        termTotalCostDesc: "汽车贷款的总成本是您将支付的所有款项之和，包括本金、利息、销售税和其他费用。它代表了借款的全部价格。",
        termNewLoanTerm: "新贷款期限",
        termNewLoanTermDesc: "新贷款期限是您在提前还款后偿还汽车贷款所需的时间长度。由于额外还款，它通常比原始贷款期限短。",
        termRemainingTerm: "剩余期限",
        termRemainingTermDesc: "剩余期限是指在不提前还款的情况下，您还需偿还汽车贷款的剩余月数。它是原始贷款期限减去已支付月数。",
        termTotalOfPayments: "总付款额",
        termTotalOfPaymentsDesc: "总付款额是您在汽车贷款整个期限内将支付的所有月供之和。它包括本金和利息，反映了全部还款金额。",
        termUpfrontPayment: "首期付款",
        termUpfrontPaymentDesc: "首期付款是您在申请汽车贷款时支付的初始金额，通常是首付款。它减少了贷款金额，并可以降低您的总体利息成本。",

        // Footer
        footerText: "© 2025 calculator-app.org。保留所有权利。"
    },
    hi: {
        // Header
        headerTitle: "ऑटो पेऑफ कैलकुलेटर",
        headerSubtitle: "अपने कार लोन की जल्दी चुकौती और बचत की आसानी से गणना करें।",
        payoffTab: "पेऑफ कैलकुलेटर",
        loanTab: "लोन कैलकुलेटर",
    
        // Payoff Calculator Section
        payoffTitle: "पहले से भुगतान की गणना",
        payoffLoanAmount: "लोन राशि ($):",
        payoffTotalTerm: "कुल लोन अवधि (महीने):",
        payoffMonthlyPayment: "मासिक भुगतान ($):",
        payoffMonthsPaid: "पहले से चुकाए गए महीने (महीने):",
        payoffInterestRate: "ब्याज दर (%):",
        payoffInterestRateHint: "स्वचालित रूप से गणना करने के लिए खाली छोड़ें",
        payoffType: "पहले से भुगतान का प्रकार:",
        payoffTypeNone: "कोई पहले से भुगतान नहीं",
        payoffTypeMonthly: "मासिक पहले से भुगतान",
        payoffTypeLumpSum: "एकमुश्त पहले से भुगतान",
        payoffTypePayOffEarly: "जल्दी चुकाएं",
        payoffPrepaymentAmount: "पहले से भुगतान की राशि ($):",
        payoffPrepaymentAmountHint: "मासिक पहले से भुगतान या एकमुश्त राशि के लिए अतिरिक्त राशि",
        payoffPrepaymentTiming: "पहले से भुगतान का समय (अब से कितने महीने बाद):",
        payoffPrepaymentTimingHint: "एकमुश्त राशि या चुकौती कब होगी",
        payoffOtherFees: "अन्य शुल्क ($):",
        payoffOtherFeesHint: "पहले से भुगतान की पेनल्टी या अन्य शुल्क",
        payoffCalculateButton: "गणना करें",
        payoffInterestSavings: "ब्याज बचत:",
        payoffCalculatedInterestRate: "गणना की गई ब्याज दर:",
        payoffRemainingBalance: "शेष राशि:",
        payoffOriginalInterest: "मूल ब्याज (शेष अवधि):",
        payoffNewInterest: "पहले से भुगतान के साथ नया ब्याज:",
        payoffTotalTerm: "कुल लोन अवधि:",
        payoffRemainingTerm: "शेष अवधि (पहले से भुगतान के बिना):",
        payoffNewTerm: "पहले से भुगतान के साथ नई लोन अवधि:",
        payoffTotalCost: "पहले से भुगतान के साथ कुल लागत:",
    
        // Loan Calculator Section
        loanTitle: "लोन कैलकुलेटर",
        loanAutoPrice: "कार की कीमत ($):",
        loanDownPayment: "डाउन पेमेंट ($):",
        loanTerm: "लोन अवधि (महीने):",
        loanState: "आपका राज्य:",
        loanSalesTax: "बिक्री कर (%):",
        loanInterestRate: "ब्याज दर (%):",
        loanOtherFees: "अन्य शुल्क ($):",
        loanCalculateButton: "गणना करें",
        loanMonthlyPay: "मासिक भुगतान:",
        loanTotalLoan: "कुल लोन राशि:",
        loanSalesTax: "बिक्री कर:",
        loanUpfrontPayment: "अग्रिम भुगतान:",
        loanTotalPayments: "कुल भुगतान:",
        loanTotalInterest: "कुल लोन ब्याज:",
        loanTotalCost: "कुल लागत (ब्याज, कर, शुल्क):",
        loanAmortizationSchedule: "ऋणमुक्ति अनुसूची",
        loanTableMonth: "महीना",
        loanTablePayment: "भुगतान",
        loanTableInterest: "ब्याज",
        loanTablePrincipal: "मूलधन",
        loanTableBalance: "शेष राशि",
    
        // Keywords Explanation Section
        keywordsTitle: "ऑटो लोन पेऑफ कैलकुलेटर को समझें",
        keywordsSubtitle: "ऑटो लोन पेऑफ कैलकुलेटर से संबंधित शब्दों के बारे में और जानें और वे आपके कार लोन पर बचत करने में कैसे मदद कर सकते हैं।",
        keywordAutoLoanPayoffCalculator: "ऑटो लोन पेऑफ कैलकुलेटर",
        keywordAutoLoanPayoffCalculatorDesc: "ऑटो लोन पेऑफ कैलकुलेटर आपको यह निर्धारित करने में मदद करता है कि आप अपने कार लोन को जल्दी चुकाकर ब्याज पर कितना बचा सकते हैं। यह आपकी शेष राशि, ब्याज बचत और नई चुकौती समयरेखा की गणना करता है, जो आपके लोन विवरण और पहले से भुगतान की योजना पर आधारित होती है।",
        keywordAutoPayoffCalculator: "ऑटो पेऑफ कैलकुलेटर",
        keywordAutoPayoffCalculatorDesc: "ऑटो पेऑफ कैलकुलेटर एक उपकरण है जो आपके कार लोन पर पहले से भुगतान के प्रभाव का अनुमान लगाता है। यह दिखाता है कि आप अतिरिक्त भुगतान करके या अपने लोन को समय से पहले चुकाकर कितना समय और पैसा बचा सकते हैं।",
        keywordAutoLoanEarlyPayoffCalculator: "ऑटो लोन जल्दी पेऑफ कैलकुलेटर",
        keywordAutoLoanEarlyPayoffCalculatorDesc: "ऑटो लोन जल्दी पेऑफ कैलकुलेटर आपको अपने कार लोन को मूल अवधि से पहले चुकाने के लाभ देखने की अनुमति देता है। यह आपकी ब्याज बचत और आप कितनी जल्दी कर्ज मुक्त हो सकते हैं, इसकी गणना करता है।",
        keywordAutoEarlyPayoffCalculator: "ऑटो जल्दी पेऑफ कैलकुलेटर",
        keywordAutoEarlyPayoffCalculatorDesc: "ऑटो जल्दी पेऑफ कैलकुलेटर आपके कार लोन के लिए जल्दी चुकौती की योजना बनाने में मदद करता है। अपने लोन विवरण और पहले से भुगतान की राशि दर्ज करके, आप देख सकते हैं कि आप कितना ब्याज बचा सकते हैं और कितनी जल्दी अपने लोन को चुका सकते हैं।",
        keywordEarlyPayoffAutoLoanCalculator: "जल्दी पेऑफ ऑटो लोन कैलकुलेटर",
        keywordEarlyPayoffAutoLoanCalculatorDesc: "जल्दी पेऑफ ऑटो लोन कैलकुलेटर आपके कार लोन को जल्दी चुकाने के वित्तीय लाभ दिखाने के लिए डिज़ाइन किया गया है। यह आपकी शेष राशि, ब्याज बचत और समायोजित लोन अवधि के बारे में जानकारी प्रदान करता है।",
        keywordAutoLoanPayoffEarlyCalculator: "ऑटो लोन पेऑफ जल्दी कैलकुलेटर",
        keywordAutoLoanPayoffEarlyCalculatorDesc: "ऑटो लोन पेऑफ जल्दी कैलकुलेटर आपको अपने कार लोन को समय से पहले चुकाने से होने वाली बचत को समझने में मदद करता है। यह आपकी नई चुकौती तारीख और पहले से भुगतान के साथ ब्याज की बचत की राशि की गणना करता है।",
        keywordLoanPayoffCalculatorAuto: "लोन पेऑफ कैलकुलेटर ऑटो",
        keywordLoanPayoffCalculatorAutoDesc: "ऑटो लोन के लिए लोन पेऑफ कैलकुलेटर आपके कार लोन पर अतिरिक्त भुगतान के प्रभावों का विश्लेषण करने में मदद करता है। यह आपकी शेष राशि, ब्याज बचत और आपके लोन को कितनी जल्दी चुका सकते हैं, यह दिखाता है।",
        keywordPayoffAutoLoanEarlyCalculator: "पेऑफ ऑटो लोन जल्दी कैलकुलेटर",
        keywordPayoffAutoLoanEarlyCalculatorDesc: "पेऑफ ऑटो लोन जल्दी कैलकुलेटर आपके कार लोन को जल्दी चुकाने से होने वाली बचत का अनुमान लगाने के लिए एक उपकरण है। यह आपकी पहले से भुगतान की रणनीति के आधार पर ब्याज बचत और नई लोन अवधि की गणना करता है।",
        keywordPayoffCalculatorAutoLoan: "पेऑफ कैलकुलेटर ऑटो लोन",
        keywordPayoffCalculatorAutoLoanDesc: "ऑटो लोन के लिए पेऑफ कैलकुलेटर यह निर्धारित करने में मदद करता है कि आप अपने कार लोन को जल्दी चुकाकर कितना बचा सकते हैं। यह आपकी ब्याज बचत और शेष लोन अवधि का विस्तृत विवरण प्रदान करता है।",
        keywordEarlyAutoLoanPayoffCalculator: "जल्दी ऑटो लोन पेऑफ कैलकुलेटर",
        keywordEarlyAutoLoanPayoffCalculatorDesc: "जल्दी ऑटो लोन पेऑफ कैलकुलेटर आपको दिखाता है कि आप अपने कार लोन को जल्दी चुकाकर कितना बचा सकते हैं। यह आपकी ब्याज बचत, शेष राशि और लोन चुकाने की नई समयरेखा की गणना करता है।",
    
        // Terms Explanation Section
        termsTitle: "ऑटो लोन शब्दों को समझें",
        termsSubtitle: "ऑटो लोन और पेऑफ कैलकुलेटर से संबंधित प्रमुख शब्दों के बारे में जानें ताकि सूचित वित्तीय निर्णय ले सकें।",
        termInterestRate: "ब्याज दर",
        termInterestRateDesc: "ब्याज दर वह प्रतिशत है जो लोनदाता आपके ऑटो लोन की उधार ली गई राशि पर लेता है। यह निर्धारित करता है कि समय के साथ आपको मूलधन के अलावा कितना अतिरिक्त भुगतान करना होगा, आमतौर पर इसे वार्षिक प्रतिशत दर (APR) के रूप में व्यक्त किया जाता है।",
        termLoanTerm: "लोन अवधि",
        termLoanTermDesc: "लोन अवधि वह समय अवधि है जिसमें आपको अपने ऑटो लोन को चुकाना होता है, आमतौर पर इसे महीनों में मापा जाता है। लंबी लोन अवधि का मतलब है कम मासिक भुगतान लेकिन अधिक कुल ब्याज, जबकि छोटी अवधि ब्याज को कम करती है लेकिन मासिक भुगतान को बढ़ाती है।",
        termPrincipal: "मूलधन",
        termPrincipalDesc: "मूलधन वह मूल राशि है जो आप अपने ऑटो लोन के लिए उधार लेते हैं, जिसमें ब्याज, कर और शुल्क शामिल नहीं होते। यह वह आधार राशि है जिसे आप लोन अवधि के दौरान चुकाएंगे, और यह आपके भुगतान के साथ कम होती जाती है।",
        termMonthlyPayment: "मासिक भुगतान",
        termMonthlyPaymentDesc: "मासिक भुगतान वह निश्चित राशि है जो आप हर महीने अपने ऑटो लोन को चुकाने के लिए देते हैं। इसमें मूलधन और ब्याज दोनों शामिल होते हैं, और कभी-कभी कर या शुल्क भी, यह आपके लोन समझौते पर निर्भर करता है।",
        termRemainingBalance: "शेष राशि",
        termRemainingBalanceDesc: "शेष राशि वह राशि है जो आपको किसी दिए गए समय पर अपने ऑटो लोन के लिए अभी भी चुकानी है। यह आपके भुगतान के साथ कम होती जाती है और पहले से भुगतान के साथ तेजी से कम हो सकती है।",
        termPrepayment: "पहले से भुगतान",
        termPrepaymentDesc: "पहले से भुगतान का मतलब है कि आप अपने ऑटो लोन के लिए आवश्यक मासिक भुगतान से अधिक अतिरिक्त राशि का भुगतान करते हैं। इससे आपकी शेष राशि कम हो सकती है, ब्याज की बचत हो सकती है और लोन अवधि छोटी हो सकती है।",
        termLumpSumPrepayment: "एकमुश्त पहले से भुगतान",
        termLumpSumPrepaymentDesc: "एकमुश्त पहले से भुगतान आपके ऑटो लोन के लिए एक बार में किया गया अतिरिक्त भुगतान है। यह सीधे मूलधन को कम करता है, जिससे ब्याज की बचत होती है और संभवतः लोन अवधि छोटी हो सकती है।",
        termMonthlyPrepayment: "मासिक पहले से भुगतान",
        termMonthlyPrepaymentDesc: "मासिक पहले से भुगतान में आपके नियमित मासिक भुगतान में अतिरिक्त राशि जोड़ना शामिल है। यह लगातार अतिरिक्त भुगतान समय के साथ आपके मूलधन को कम करता है, जिससे ब्याज की बचत होती है और लोन अवधि छोटी होती है।",
        termPayOffEarly: "जल्दी चुकाएं",
        termPayOffEarlyDesc: "जल्दी चुकाने का मतलब है कि आप अपने ऑटो लोन को मूल लोन अवधि समाप्त होने से पहले पूरी तरह से चुका देते हैं। इससे आप काफी ब्याज बचा सकते हैं और जल्दी कर्ज मुक्त हो सकते हैं।",
        termInterestSavings: "ब्याज बचत",
        termInterestSavingsDesc: "ब्याज बचत उस राशि को संदर्भित करती है जो आप पहले से भुगतान करके या अपने ऑटो लोन को जल्दी चुकाकर ब्याज पर बचाते हैं। यह मूल ब्याज और पहले से भुगतान के बाद नए ब्याज के बीच का अंतर है।",
        termTotalLoanAmount: "कुल लोन राशि",
        termTotalLoanAmountDesc: "कुल लोन राशि वह पूरी राशि है जो आप अपने ऑटो लोन के लिए उधार लेते हैं, जिसमें मूलधन, बिक्री कर और कोई अतिरिक्त शुल्क शामिल होते हैं, जिसमें से आपका डाउन पेमेंट घटाया जाता है।",
        termDownPayment: "डाउन पेमेंट",
        termDownPaymentDesc: "डाउन पेमेंट वह प्रारंभिक राशि है जो आप लोन के साथ कार खरीदते समय अग्रिम भुगतान करते हैं। यह कुल लोन राशि को कम करता है, जिससे आपके मासिक भुगतान और ब्याज लागत कम होती है।",
        termSalesTax: "बिक्री कर",
        termSalesTaxDesc: "बिक्री कर एक प्रतिशत आधारित कर है जो आपकी कार की खरीद मूल्य पर लागू होता है। यदि इसे अग्रिम भुगतान नहीं किया जाता है, तो यह अक्सर कुल लोन राशि में शामिल हो जाता है, जिससे आपकी उधार ली गई राशि बढ़ जाती है।",
        termOtherFees: "अन्य शुल्क",
        termOtherFeesDesc: "अन्य शुल्क में आपके ऑटो लोन से संबंधित अतिरिक्त लागतें शामिल होती हैं, जैसे पंजीकरण शुल्क, दस्तावेज़ शुल्क, या पहले से भुगतान की पेनल्टी। ये शुल्क आपके लोन की कुल लागत को बढ़ा सकते हैं।",
        termAmortizationSchedule: "ऋणमुक्ति अनुसूची",
        termAmortizationScheduleDesc: "ऋणमुक्ति अनुसूची एक तालिका है जो आपके ऑटो लोन की अवधि के दौरान प्रत्येक मासिक भुगतान का विवरण दिखाती है। यह बताती है कि प्रत्येक भुगतान का कितना हिस्सा ब्याज, मूलधन और शेष राशि की ओर जाता है।",
        termTotalCost: "कुल लागत",
        termTotalCostDesc: "आपके ऑटो लोन की कुल लागत वह सभी भुगतानों का योग है जो आप करेंगे, जिसमें मूलधन, ब्याज, बिक्री कर और अन्य शुल्क शामिल हैं। यह उधार लेने की पूरी कीमत को दर्शाता है।",
        termNewLoanTerm: "नई लोन अवधि",
        termNewLoanTermDesc: "नई लोन अवधि वह समायोजित समय अवधि है जिसमें पहले से भुगतान करने के बाद आपके ऑटो लोन को चुकाने में समय लगेगा। यह आमतौर पर मूल लोन अवधि से छोटी होती है क्योंकि आपने अतिरिक्त भुगतान किया है।",
        termRemainingTerm: "शेष अवधि",
        termRemainingTermDesc: "शेष अवधि वह महीनों की संख्या है जो बिना किसी पहले से भुगतान के आपके ऑटो लोन को चुकाने के लिए बाकी है। यह मूल लोन अवधि से आपके द्वारा पहले से चुकाए गए महीनों को घटाकर गणना की जाती है।",
        termTotalOfPayments: "कुल भुगतान",
        termTotalOfPaymentsDesc: "कुल भुगतान वह सभी मासिक भुगतानों का योग है जो आप अपने ऑटो लोन की अवधि के दौरान करेंगे। इसमें मूलधन और ब्याज दोनों शामिल होते हैं, जो पूरी चुकौती राशि को दर्शाता है।",
        termUpfrontPayment: "अग्रिम भुगतान",
        termUpfrontPaymentDesc: "अग्रिम भुगतान वह प्रारंभिक राशि है जो आप अपने ऑटो लोन लेते समय देते हैं, आमतौर पर डाउन पेमेंट। यह लोन राशि को कम करता है और आपकी कुल ब्याज लागत को कम कर सकता है।",
    
        // Footer
        footerText: "© 2025 calculator-app.org"
    },
    es: {
        // Header
        headerTitle: "Calculadora de pago anticipado de automóviles",
        headerSubtitle: "Calcule fácilmente el pago anticipado y los ahorros de su préstamo para automóvil.",
        payoffTab: "Calculadora de pago anticipado",
        loanTab: "Calculadora de préstamos",
    
        // Payoff Calculator Section
        payoffTitle: "Cálculo de pago anticipado",
        payoffLoanAmount: "Monto del préstamo ($):",
        payoffTotalTerm: "Plazo total del préstamo (meses):",
        payoffMonthlyPayment: "Pago mensual ($):",
        payoffMonthsPaid: "Meses ya pagados (meses):",
        payoffInterestRate: "Tasa de interés (%):",
        payoffInterestRateHint: "Deje en blanco para calcular automáticamente",
        payoffType: "Tipo de pago anticipado:",
        payoffTypeNone: "Sin pago anticipado",
        payoffTypeMonthly: "Pago anticipado mensual",
        payoffTypeLumpSum: "Pago anticipado de suma global",
        payoffTypePayOffEarly: "Pagar antes",
        payoffPrepaymentAmount: "Monto del pago anticipado ($):",
        payoffPrepaymentAmountHint: "Cantidad adicional para pagos anticipados mensuales o de suma global",
        payoffPrepaymentTiming: "Momento del pago anticipado (meses a partir de ahora):",
        payoffPrepaymentTimingHint: "Cuándo se realizará el pago de suma global o la liquidación",
        payoffOtherFees: "Otros cargos ($):",
        payoffOtherFeesHint: "Penalizaciones por pago anticipado u otros cargos",
        payoffCalculateButton: "Calcular",
        payoffInterestSavings: "Ahorro en intereses:",
        payoffCalculatedInterestRate: "Tasa de interés calculada:",
        payoffRemainingBalance: "Saldo restante:",
        payoffOriginalInterest: "Intereses originales (plazo restante):",
        payoffNewInterest: "Nuevos intereses con pago anticipado:",
        payoffTotalTerm: "Plazo total del préstamo:",
        payoffRemainingTerm: "Plazo restante (sin pago anticipado):",
        payoffNewTerm: "Nuevo plazo del préstamo con pago anticipado:",
        payoffTotalCost: "Costo total con pago anticipado:",
    
        // Loan Calculator Section
        loanTitle: "Calculadora de préstamos",
        loanAutoPrice: "Precio del automóvil ($):",
        loanDownPayment: "Pago inicial ($):",
        loanTerm: "Plazo del préstamo (meses):",
        loanState: "Su estado:",
        loanSalesTax: "Impuesto sobre ventas (%):",
        loanInterestRate: "Tasa de interés (%):",
        loanOtherFees: "Otros cargos ($):",
        loanCalculateButton: "Calcular",
        loanMonthlyPay: "Pago mensual:",
        loanTotalLoan: "Monto total del préstamo:",
        loanSalesTax: "Impuesto sobre ventas:",
        loanUpfrontPayment: "Pago inicial:",
        loanTotalPayments: "Pagos totales:",
        loanTotalInterest: "Intereses totales del préstamo:",
        loanTotalCost: "Costo total (intereses, impuestos, cargos):",
        loanAmortizationSchedule: "Calendario de amortización",
        loanTableMonth: "Mes",
        loanTablePayment: "Pago",
        loanTableInterest: "Intereses",
        loanTablePrincipal: "Capital",
        loanTableBalance: "Saldo",
    
        // Keywords Explanation Section
        keywordsTitle: "Entienda la calculadora de pago anticipado de préstamos para automóviles",
        keywordsSubtitle: "Aprenda más sobre los términos relacionados con la calculadora de pago anticipado de préstamos para automóviles y cómo pueden ayudarlo a ahorrar en su préstamo para automóvil.",
        keywordAutoLoanPayoffCalculator: "Calculadora de pago anticipado de préstamos para automóviles",
        keywordAutoLoanPayoffCalculatorDesc: "La calculadora de pago anticipado de préstamos para automóviles le ayuda a determinar cuánto puede ahorrar en intereses al liquidar su préstamo para automóvil antes de tiempo. Calcula su saldo restante, el ahorro en intereses y el nuevo cronograma de pagos, basado en los detalles de su préstamo y su plan de pago anticipado.",
        keywordAutoPayoffCalculator: "Calculadora de pago anticipado de automóviles",
        keywordAutoPayoffCalculatorDesc: "La calculadora de pago anticipado de automóviles es una herramienta que estima el impacto de los pagos anticipados en su préstamo para automóvil. Muestra cuánto tiempo y dinero puede ahorrar al realizar pagos adicionales o liquidar su préstamo antes de tiempo.",
        keywordAutoLoanEarlyPayoffCalculator: "Calculadora de pago anticipado temprano de préstamos para automóviles",
        keywordAutoLoanEarlyPayoffCalculatorDesc: "La calculadora de pago anticipado temprano de préstamos para automóviles le permite ver los beneficios de liquidar su préstamo para automóvil antes del plazo original. Calcula sus ahorros en intereses y qué tan pronto puede estar libre de deudas.",
        keywordAutoEarlyPayoffCalculator: "Calculadora de pago anticipado temprano de automóviles",
        keywordAutoEarlyPayoffCalculatorDesc: "La calculadora de pago anticipado temprano de automóviles le ayuda a planificar la liquidación anticipada de su préstamo para automóvil. Al ingresar los detalles de su préstamo y el monto del pago anticipado, puede ver cuánto interés puede ahorrar y qué tan pronto puede liquidar su préstamo.",
        keywordEarlyPayoffAutoLoanCalculator: "Calculadora de pago anticipado temprano de préstamos para automóviles",
        keywordEarlyPayoffAutoLoanCalculatorDesc: "La calculadora de pago anticipado temprano de préstamos para automóviles está diseñada para mostrar los beneficios financieros de liquidar su préstamo para automóvil antes de tiempo. Proporciona información sobre su saldo restante, ahorros en intereses y el plazo ajustado del préstamo.",
        keywordAutoLoanPayoffEarlyCalculator: "Calculadora de pago anticipado temprano de préstamos para automóviles",
        keywordAutoLoanPayoffEarlyCalculatorDesc: "La calculadora de pago anticipado temprano de préstamos para automóviles le ayuda a entender los ahorros de liquidar su préstamo para automóvil antes de tiempo. Calcula su nueva fecha de liquidación y la cantidad de intereses ahorrados con el pago anticipado.",
        keywordLoanPayoffCalculatorAuto: "Calculadora de pago anticipado de préstamos para automóviles",
        keywordLoanPayoffCalculatorAutoDesc: "La calculadora de pago anticipado de préstamos para automóviles le ayuda a analizar los efectos de los pagos adicionales en su préstamo para automóvil. Muestra su saldo restante, ahorros en intereses y qué tan pronto puede liquidar su préstamo.",
        keywordPayoffAutoLoanEarlyCalculator: "Calculadora de pago anticipado temprano de préstamos para automóviles",
        keywordPayoffAutoLoanEarlyCalculatorDesc: "La calculadora de pago anticipado temprano de préstamos para automóviles es una herramienta para estimar los ahorros de liquidar su préstamo para automóvil antes de tiempo. Calcula los ahorros en intereses y el nuevo plazo del préstamo basado en su estrategia de pago anticipado.",
        keywordPayoffCalculatorAutoLoan: "Calculadora de pago anticipado de préstamos para automóviles",
        keywordPayoffCalculatorAutoLoanDesc: "La calculadora de pago anticipado de préstamos para automóviles le ayuda a determinar cuánto puede ahorrar al liquidar su préstamo para automóvil antes de tiempo. Proporciona un desglose detallado de sus ahorros en intereses y el plazo restante del préstamo.",
        keywordEarlyAutoLoanPayoffCalculator: "Calculadora de pago anticipado temprano de préstamos para automóviles",
        keywordEarlyAutoLoanPayoffCalculatorDesc: "La calculadora de pago anticipado temprano de préstamos para automóviles le muestra cuánto puede ahorrar al liquidar su préstamo para automóvil antes de tiempo. Calcula sus ahorros en intereses, saldo restante y el nuevo cronograma para liquidar el préstamo.",
    
        // Terms Explanation Section
        termsTitle: "Entienda los términos de los préstamos para automóviles",
        termsSubtitle: "Conozca los términos clave relacionados con los préstamos para automóviles y la calculadora de pago anticipado para tomar decisiones financieras informadas.",
        termInterestRate: "Tasa de interés",
        termInterestRateDesc: "La tasa de interés es el porcentaje que el prestamista cobra sobre el monto prestado de su préstamo para automóvil. Determina cuánto pagará adicionalmente al capital con el tiempo, generalmente expresado como una tasa porcentual anual (APR).",
        termLoanTerm: "Plazo del préstamo",
        termLoanTermDesc: "El plazo del préstamo es el período de tiempo en el que debe pagar su préstamo para automóvil, generalmente medido en meses. Un plazo más largo significa pagos mensuales más bajos pero más intereses totales, mientras que un plazo más corto reduce los intereses pero aumenta los pagos mensuales.",
        termPrincipal: "Capital",
        termPrincipalDesc: "El capital es la cantidad original que pide prestada para su préstamo para automóvil, excluyendo intereses, impuestos y cargos. Es la cantidad base que pagará durante el plazo del préstamo, y disminuye con sus pagos.",
        termMonthlyPayment: "Pago mensual",
        termMonthlyPaymentDesc: "El pago mensual es la cantidad fija que paga cada mes para liquidar su préstamo para automóvil. Incluye tanto el capital como los intereses, y a veces impuestos o cargos, dependiendo de su acuerdo de préstamo.",
        termRemainingBalance: "Saldo restante",
        termRemainingBalanceDesc: "El saldo restante es la cantidad que aún debe en su préstamo para automóvil en un momento dado. Disminuye con sus pagos y puede reducirse más rápido con pagos anticipados.",
        termPrepayment: "Pago anticipado",
        termPrepaymentDesc: "El pago anticipado significa pagar una cantidad adicional por encima de su pago mensual requerido para su préstamo para automóvil. Esto puede reducir su saldo restante, ahorrar en intereses y acortar el plazo del préstamo.",
        termLumpSumPrepayment: "Pago anticipado de suma global",
        termLumpSumPrepaymentDesc: "Un pago anticipado de suma global es un pago adicional único realizado hacia su préstamo para automóvil. Reduce directamente el capital, lo que resulta en ahorros en intereses y posiblemente un plazo de préstamo más corto.",
        termMonthlyPrepayment: "Pago anticipado mensual",
        termMonthlyPrepaymentDesc: "El pago anticipado mensual implica agregar una cantidad adicional a su pago mensual regular. Estos pagos adicionales constantes reducen su capital con el tiempo, lo que resulta en ahorros en intereses y un plazo de préstamo más corto.",
        termPayOffEarly: "Pagar antes",
        termPayOffEarlyDesc: "Pagar antes significa liquidar completamente su préstamo para automóvil antes de que termine el plazo original del préstamo. Esto puede ahorrarle una cantidad significativa en intereses y permitirle estar libre de deudas más pronto.",
        termInterestSavings: "Ahorro en intereses",
        termInterestSavingsDesc: "El ahorro en intereses se refiere a la cantidad que ahorra en intereses al realizar pagos anticipados o liquidar su préstamo para automóvil antes de tiempo. Es la diferencia entre los intereses originales y los nuevos intereses después del pago anticipado.",
        termTotalLoanAmount: "Monto total del préstamo",
        termTotalLoanAmountDesc: "El monto total del préstamo es la cantidad completa que pide prestada para su préstamo para automóvil, incluyendo el capital, el impuesto sobre ventas y cualquier cargo adicional, menos su pago inicial.",
        termDownPayment: "Pago inicial",
        termDownPaymentDesc: "El pago inicial es la cantidad inicial que paga por adelantado al comprar un automóvil con un préstamo. Reduce el monto total del préstamo, lo que disminuye sus pagos mensuales y el costo de los intereses.",
        termSalesTax: "Impuesto sobre ventas",
        termSalesTaxDesc: "El impuesto sobre ventas es un impuesto basado en un porcentaje que se aplica al precio de compra de su automóvil. Si no se paga por adelantado, a menudo se incluye en el monto total del préstamo, aumentando la cantidad que pide prestada.",
        termOtherFees: "Otros cargos",
        termOtherFeesDesc: "Otros cargos incluyen costos adicionales relacionados con su préstamo para automóvil, como cargos de registro, cargos por documentación o penalizaciones por pago anticipado. Estos cargos pueden aumentar el costo total de su préstamo.",
        termAmortizationSchedule: "Calendario de amortización",
        termAmortizationScheduleDesc: "El calendario de amortización es una tabla que detalla cada pago mensual durante el plazo de su préstamo para automóvil. Muestra cuánto de cada pago se destina a intereses, capital y el saldo restante.",
        termTotalCost: "Costo total",
        termTotalCostDesc: "El costo total de su préstamo para automóvil es la suma de todos los pagos que realizará, incluyendo el capital, intereses, impuesto sobre ventas y otros cargos. Representa el precio completo de pedir prestado.",
        termNewLoanTerm: "Nuevo plazo del préstamo",
        termNewLoanTermDesc: "El nuevo plazo del préstamo es el período de tiempo ajustado que tomará liquidar su préstamo para automóvil después de realizar pagos anticipados. Por lo general, es más corto que el plazo original del préstamo porque ha realizado pagos adicionales.",
        termRemainingTerm: "Plazo restante",
        termRemainingTermDesc: "El plazo restante es el número de meses que quedan para liquidar su préstamo para automóvil sin pagos anticipados. Se calcula restando los meses ya pagados del plazo original del préstamo.",
        termTotalOfPayments: "Total de pagos",
        termTotalOfPaymentsDesc: "El total de pagos es la suma de todos los pagos mensuales que realizará durante el plazo de su préstamo para automóvil. Incluye tanto el capital como los intereses, representando la cantidad total de reembolso.",
        termUpfrontPayment: "Pago inicial",
        termUpfrontPaymentDesc: "El pago inicial es la cantidad inicial que paga al tomar su préstamo para automóvil, generalmente el pago inicial. Reduce el monto del préstamo y puede disminuir el costo total de los intereses.",
    
        // Footer
        footerText: "© 2025 calculator-app.org. Todos los derechos reservados."
    },
    bn: {
        // Header
        headerTitle: "অটো পেঅফ ক্যালকুলেটর",
        headerSubtitle: "আপনার গাড়ির ঋণ পরিশোধ এবং সঞ্চয় সহজে গণনা করুন।",
        payoffTab: "পেঅফ ক্যালকুলেটর",
        loanTab: "লোন ক্যালকুলেটর",
    
        // Payoff Calculator Section
        payoffTitle: "আগাম পরিশোধের গণনা",
        payoffLoanAmount: "ঋণের পরিমাণ ($):",
        payoffTotalTerm: "মোট ঋণের মেয়াদ (মাস):",
        payoffMonthlyPayment: "মাসিক পেমেন্ট ($):",
        payoffMonthsPaid: "ইতিমধ্যে পরিশোধিত মাস (মাস):",
        payoffInterestRate: "সুদের হার (%):",
        payoffInterestRateHint: "স্বয়ংক্রিয়ভাবে গণনা করতে ফাঁকা রাখুন",
        payoffType: "আগাম পেমেন্টের ধরন:",
        payoffTypeNone: "কোনো আগাম পেমেন্ট নেই",
        payoffTypeMonthly: "মাসিক আগাম পেমেন্ট",
        payoffTypeLumpSum: "এককালীন আগাম পেমেন্ট",
        payoffTypePayOffEarly: "তাড়াতাড়ি পরিশোধ করুন",
        payoffPrepaymentAmount: "আগাম পেমেন্টের পরিমাণ ($):",
        payoffPrepaymentAmountHint: "মাসিক আগাম পেমেন্ট বা এককালীন পরিমাণের জন্য অতিরিক্ত পরিমাণ",
        payoffPrepaymentTiming: "আগাম পেমেন্টের সময় (এখন থেকে কত মাস পরে):",
        payoffPrepaymentTimingHint: "এককালীন পরিমাণ বা পরিশোধ কখন হবে",
        payoffOtherFees: "অন্যান্য ফি ($):",
        payoffOtherFeesHint: "আগাম পেমেন্টের জরিমানা বা অন্যান্য ফি",
        payoffCalculateButton: "গণনা করুন",
        payoffInterestSavings: "সুদের সঞ্চয়:",
        payoffCalculatedInterestRate: "গণনা করা সুদের হার:",
        payoffRemainingBalance: "বাকি ব্যালেন্স:",
        payoffOriginalInterest: "মূল সুদ (বাকি মেয়াদ):",
        payoffNewInterest: "আগাম পেমেন্টের সাথে নতুন সুদ:",
        payoffTotalTerm: "মোট ঋণের মেয়াদ:",
        payoffRemainingTerm: "বাকি মেয়াদ (আগাম পেমেন্ট ছাড়া):",
        payoffNewTerm: "আগাম পেমেন্টের সাথে নতুন ঋণের মেয়াদ:",
        payoffTotalCost: "আগাম পেমেন্টের সাথে মোট খরচ:",
    
        // Loan Calculator Section
        loanTitle: "লোন ক্যালকুলেটর",
        loanAutoPrice: "গাড়ির মূল্য ($):",
        loanDownPayment: "ডাউন পেমেন্ট ($):",
        loanTerm: "ঋণের মেয়াদ (মাস):",
        loanState: "আপনার রাজ্য:",
        loanSalesTax: "বিক্রয় কর (%):",
        loanInterestRate: "সুদের হার (%):",
        loanOtherFees: "অন্যান্য ফি ($):",
        loanCalculateButton: "গণনা করুন",
        loanMonthlyPay: "মাসিক পেমেন্ট:",
        loanTotalLoan: "মোট ঋণের পরিমাণ:",
        loanSalesTax: "বিক্রয় কর:",
        loanUpfrontPayment: "অগ্রিম পেমেন্ট:",
        loanTotalPayments: "মোট পেমেন্ট:",
        loanTotalInterest: "মোট ঋণের সুদ:",
        loanTotalCost: "মোট খরচ (সুদ, কর, ফি):",
        loanAmortizationSchedule: "ঋণ পরিশোধের সময়সূচী",
        loanTableMonth: "মাস",
        loanTablePayment: "পেমেন্ট",
        loanTableInterest: "সুদ",
        loanTablePrincipal: "মূলধন",
        loanTableBalance: "ব্যালেন্স",
    
        // Keywords Explanation Section
        keywordsTitle: "অটো লোন পেঅফ ক্যালকুলেটর বুঝুন",
        keywordsSubtitle: "অটো লোন পেঅফ ক্যালকুলেটর সম্পর্কিত শব্দগুলি সম্পর্কে আরও জানুন এবং এগুলি কীভাবে আপনার গাড়ির ঋণে সঞ্চয় করতে সাহায্য করতে পারে।",
        keywordAutoLoanPayoffCalculator: "অটো লোন পেঅফ ক্যালকুলেটর",
        keywordAutoLoanPayoffCalculatorDesc: "অটো লোন পেঅফ ক্যালকুলেটর আপনাকে নির্ধারণ করতে সাহায্য করে যে আপনি আপনার গাড়ির ঋণ তাড়াতাড়ি পরিশোধ করে সুদে কতটা সঞ্চয় করতে পারেন। এটি আপনার বাকি ব্যালেন্স, সুদের সঞ্চয় এবং নতুন পরিশোধের সময়সূচী গণনা করে, যা আপনার ঋণের বিবরণ এবং আগাম পেমেন্ট পরিকল্পনার উপর ভিত্তি করে।",
        keywordAutoPayoffCalculator: "অটো পেঅফ ক্যালকুলেটর",
        keywordAutoPayoffCalculatorDesc: "অটো পেঅফ ক্যালকুলেটর একটি টুল যা আপনার গাড়ির ঋণে আগাম পেমেন্টের প্রভাব অনুমান করে। এটি দেখায় যে আপনি অতিরিক্ত পেমেন্ট করে বা আপনার ঋণ তাড়াতাড়ি পরিশোধ করে কতটা সময় এবং অর্থ সঞ্চয় করতে পারেন।",
        keywordAutoLoanEarlyPayoffCalculator: "অটো লোন আর্লি পেঅফ ক্যালকুলেটর",
        keywordAutoLoanEarlyPayoffCalculatorDesc: "অটো লোন আর্লি পেঅফ ক্যালকুলেটর আপনাকে আপনার গাড়ির ঋণ মূল মেয়াদের আগে পরিশোধ করার সুবিধাগুলি দেখতে দেয়। এটি আপনার সুদের সঞ্চয় এবং আপনি কত তাড়াতাড়ি ঋণমুক্ত হতে পারেন তা গণনা করে।",
        keywordAutoEarlyPayoffCalculator: "অটো আর্লি পেঅফ ক্যালকুলেটর",
        keywordAutoEarlyPayoffCalculatorDesc: "অটো আর্লি পেঅফ ক্যালকুলেটর আপনার গাড়ির ঋণের জন্য তাড়াতাড়ি পরিশোধের পরিকল্পনা করতে সাহায্য করে। আপনার ঋণের বিবরণ এবং আগাম পেমেন্টের পরিমাণ প্রবেশ করিয়ে, আপনি দেখতে পারেন যে আপনি কতটা সুদ সঞ্চয় করতে পারেন এবং কত তাড়াতাড়ি আপনার ঋণ পরিশোধ করতে পারেন।",
        keywordEarlyPayoffAutoLoanCalculator: "আর্লি পেঅফ অটো লোন ক্যালকুলেটর",
        keywordEarlyPayoffAutoLoanCalculatorDesc: "আর্লি পেঅফ অটো লোন ক্যালকুলেটর আপনার গাড়ির ঋণ তাড়াতাড়ি পরিশোধ করার আর্থিক সুবিধাগুলি দেখানোর জন্য ডিজাইন করা হয়েছে। এটি আপনার বাকি ব্যালেন্স, সুদের সঞ্চয় এবং সমন্বিত ঋণের মেয়াদ সম্পর্কে তথ্য প্রদান করে।",
        keywordAutoLoanPayoffEarlyCalculator: "অটো লোন পেঅফ আর্লি ক্যালকুলেটর",
        keywordAutoLoanPayoffEarlyCalculatorDesc: "অটো লোন পেঅফ আর্লি ক্যালকুলেটর আপনাকে আপনার গাড়ির ঋণ তাড়াতাড়ি পরিশোধ করার ফলে সঞ্চয় বুঝতে সাহায্য করে। এটি আপনার নতুন পরিশোধের তারিখ এবং আগাম পেমেন্টের সাথে সুদের সঞ্চয়ের পরিমাণ গণনা করে।",
        keywordLoanPayoffCalculatorAuto: "লোন পেঅফ ক্যালকুলেটর অটো",
        keywordLoanPayoffCalculatorAutoDesc: "অটো লোনের জন্য লোন পেঅফ ক্যালকুলেটর আপনার গাড়ির ঋণে অতিরিক্ত পেমেন্টের প্রভাব বিশ্লেষণ করতে সাহায্য করে। এটি আপনার বাকি ব্যালেন্স, সুদের সঞ্চয় এবং আপনি কত তাড়াতাড়ি আপনার ঋণ পরিশোধ করতে পারেন তা দেখায়।",
        keywordPayoffAutoLoanEarlyCalculator: "পেঅফ অটো লোন আর্লি ক্যালকুলেটর",
        keywordPayoffAutoLoanEarlyCalculatorDesc: "পেঅফ অটো লোন আর্লি ক্যালকুলেটর আপনার গাড়ির ঋণ তাড়াতাড়ি পরিশোধ করার ফলে সঞ্চয় অনুমান করার জন্য একটি টুল। এটি আপনার আগাম পেমেন্ট কৌশলের উপর ভিত্তি করে সুদের সঞ্চয় এবং নতুন ঋণের মেয়াদ গণনা করে।",
        keywordPayoffCalculatorAutoLoan: "পেঅফ ক্যালকুলেটর অটো লোন",
        keywordPayoffCalculatorAutoLoanDesc: "অটো লোনের জন্য পেঅফ ক্যালকুলেটর আপনাকে নির্ধারণ করতে সাহায্য করে যে আপনি আপনার গাড়ির ঋণ তাড়াতাড়ি পরিশোধ করে কতটা সঞ্চয় করতে পারেন। এটি আপনার সুদের সঞ্চয় এবং বাকি ঋণের মেয়াদের বিস্তারিত বিবরণ প্রদান করে।",
        keywordEarlyAutoLoanPayoffCalculator: "আর্লি অটো লোন পেঅফ ক্যালকুলেটর",
        keywordEarlyAutoLoanPayoffCalculatorDesc: "আর্লি অটো লোন পেঅফ ক্যালকুলেটর আপনাকে দেখায় যে আপনি আপনার গাড়ির ঋণ তাড়াতাড়ি পরিশোধ করে কতটা সঞ্চয় করতে পারেন। এটি আপনার সুদের সঞ্চয়, বাকি ব্যালেন্স এবং ঋণ পরিশোধের নতুন সময়সূচী গণনা করে।",
    
        // Terms Explanation Section
        termsTitle: "অটো লোনের শব্দগুলি বুঝুন",
        termsSubtitle: "অটো লোন এবং পেঅফ ক্যালকুলেটর সম্পর্কিত মূল শব্দগুলি সম্পর্কে জানুন যাতে আপনি সচেতন আর্থিক সিদ্ধান্ত নিতে পারেন।",
        termInterestRate: "সুদের হার",
        termInterestRateDesc: "সুদের হার হল সেই শতাংশ যা ঋণদাতা আপনার অটো লোনের ধার করা পরিমাণের উপর চার্জ করে। এটি নির্ধারণ করে যে সময়ের সাথে সাথে আপনাকে মূলধনের অতিরিক্ত কতটা পরিশোধ করতে হবে, সাধারণত এটি বার্ষিক শতাংশ হার (APR) হিসেবে প্রকাশ করা হয়।",
        termLoanTerm: "ঋণের মেয়াদ",
        termLoanTermDesc: "ঋণের মেয়াদ হল সেই সময়কাল যার মধ্যে আপনাকে আপনার অটো লোন পরিশোধ করতে হবে, সাধারণত এটি মাসে পরিমাপ করা হয়। দীর্ঘ ঋণের মেয়াদ মানে কম মাসিক পেমেন্ট কিন্তু বেশি মোট সুদ, যেখানে ছোট মেয়াদ সুদ কমায় কিন্তু মাসিক পেমেন্ট বাড়ায়।",
        termPrincipal: "মূলধন",
        termPrincipalDesc: "মূলধন হল সেই মূল পরিমাণ যা আপনি আপনার অটো লোনের জন্য ধার করেন, যাতে সুদ, কর এবং ফি অন্তর্ভুক্ত নয়। এটি সেই ভিত্তি পরিমাণ যা আপনি ঋণের মেয়াদ জুড়ে পরিশোধ করবেন, এবং এটি আপনার পেমেন্টের সাথে কমতে থাকে।",
        termMonthlyPayment: "মাসিক পেমেন্ট",
        termMonthlyPaymentDesc: "মাসিক পেমেন্ট হল সেই নির্দিষ্ট পরিমাণ যা আপনি প্রতি মাসে আপনার অটো লোন পরিশোধ করতে দেন। এতে মূলধন এবং সুদ উভয়ই অন্তর্ভুক্ত থাকে, এবং কখনও কখনও কর বা ফিও, এটি আপনার ঋণ চুক্তির উপর নির্ভর করে।",
        termRemainingBalance: "বাকি ব্যালেন্স",
        termRemainingBalanceDesc: "বাকি ব্যালেন্স হল সেই পরিমাণ যা আপনাকে একটি নির্দিষ্ট সময়ে আপনার অটো লোনের জন্য এখনও পরিশোধ করতে হবে। এটি আপনার পেমেন্টের সাথে কমতে থাকে এবং আগাম পেমেন্টের সাথে আরও দ্রুত কমতে পারে।",
        termPrepayment: "আগাম পেমেন্ট",
        termPrepaymentDesc: "আগাম পেমেন্ট মানে আপনি আপনার অটো লোনের জন্য প্রয়োজনীয় মাসিক পেমেন্টের চেয়ে বেশি অতিরিক্ত পরিমাণ পরিশোধ করেন। এটি আপনার বাকি ব্যালেন্স কমাতে পারে, সুদের সঞ্চয় করতে পারে এবং ঋণের মেয়াদ কমাতে পারে।",
        termLumpSumPrepayment: "এককালীন আগাম পেমেন্ট",
        termLumpSumPrepaymentDesc: "এককালীন আগাম পেমেন্ট হল আপনার অটো লোনের জন্য একবারে করা অতিরিক্ত পেমেন্ট। এটি সরাসরি মূলধন কমায়, যার ফলে সুদের সঞ্চয় হয় এবং সম্ভবত ঋণের মেয়াদ কমে যায়।",
        termMonthlyPrepayment: "মাসিক আগাম পেমেন্ট",
        termMonthlyPrepaymentDesc: "মাসিক আগাম পেমেন্টে আপনার নিয়মিত মাসিক পেমেন্টে অতিরিক্ত পরিমাণ যোগ করা জড়িত। এই ধারাবাহিক অতিরিক্ত পেমেন্ট সময়ের সাথে আপনার মূলধন কমায়, যার ফলে সুদের সঞ্চয় হয় এবং ঋণের মেয়াদ কমে।",
        termPayOffEarly: "তাড়াতাড়ি পরিশোধ করুন",
        termPayOffEarlyDesc: "তাড়াতাড়ি পরিশোধ করা মানে আপনি আপনার অটো লোন মূল ঋণের মেয়াদ শেষ হওয়ার আগে সম্পূর্ণ পরিশোধ করেন। এটি আপনাকে উল্লেখযোগ্য পরিমাণে সুদ সঞ্চয় করতে পারে এবং তাড়াতাড়ি ঋণমুক্ত হতে পারে।",
        termInterestSavings: "সুদের সঞ্চয়",
        termInterestSavingsDesc: "সুদের সঞ্চয় বলতে সেই পরিমাণ বোঝায় যা আপনি আগাম পেমেন্ট করে বা আপনার অটো লোন তাড়াতাড়ি পরিশোধ করে সুদে সঞ্চয় করেন। এটি মূল সুদ এবং আগাম পেমেন্টের পর নতুন সুদের মধ্যে পার্থক্য।",
        termTotalLoanAmount: "মোট ঋণের পরিমাণ",
        termTotalLoanAmountDesc: "মোট ঋণের পরিমাণ হল সেই সম্পূর্ণ পরিমাণ যা আপনি আপনার অটো লোনের জন্য ধার করেন, যাতে মূলধন, বিক্রয় কর এবং যেকোনো অতিরিক্ত ফি অন্তর্ভুক্ত থাকে, যা থেকে আপনার ডাউন পেমেন্ট বাদ দেওয়া হয়।",
        termDownPayment: "ডাউন পেমেন্ট",
        termDownPaymentDesc: "ডাউন পেমেন্ট হল সেই প্রাথমিক পরিমাণ যা আপনি ঋণের সাথে গাড়ি কেনার সময় অগ্রিম পরিশোধ করেন। এটি মোট ঋণের পরিমাণ কমায়, যার ফলে আপনার মাসিক পেমেন্ট এবং সুদের খরচ কমে।",
        termSalesTax: "বিক্রয় কর",
        termSalesTaxDesc: "বিক্রয় কর হল একটি শতাংশ ভিত্তিক কর যা আপনার গাড়ির ক্রয় মূল্যের উপর প্রয়োগ করা হয়। যদি এটি অগ্রিম পরিশোধ না করা হয়, তবে এটি প্রায়শই মোট ঋণের পরিমাণে অন্তর্ভুক্ত হয়, যার ফলে আপনার ধার করা পরিমাণ বৃদ্ধি পায়।",
        termOtherFees: "অন্যান্য ফি",
        termOtherFeesDesc: "অন্যান্য ফি-তে আপনার অটো লোন সম্পর্কিত অতিরিক্ত খরচ অন্তর্ভুক্ত থাকে, যেমন রেজিস্ট্রেশন ফি, ডকুমেন্টেশন ফি, বা আগাম পেমেন্টের জরিমানা। এই ফি আপনার ঋণের মোট খরচ বাড়াতে পারে।",
        termAmortizationSchedule: "ঋণ পরিশোধের সময়সূচী",
        termAmortizationScheduleDesc: "ঋণ পরিশোধের সময়সূচী হল একটি টেবিল যা আপনার অটো লোনের মেয়াদ জুড়ে প্রতিটি মাসিক পেমেন্টের বিবরণ দেখায়। এটি দেখায় যে প্রতিটি পেমেন্টের কতটা সুদ, মূলধন এবং বাকি ব্যালেন্সের দিকে যায়।",
        termTotalCost: "মোট খরচ",
        termTotalCostDesc: "আপনার অটো লোনের মোট খরচ হল সেই সমস্ত পেমেন্টের যোগফল যা আপনি করবেন, যাতে মূলধন, সুদ, বিক্রয় কর এবং অন্যান্য ফি অন্তর্ভুক্ত থাকে। এটি ধার করার সম্পূর্ণ মূল্য প্রতিফলিত করে।",
        termNewLoanTerm: "নতুন ঋণের মেয়াদ",
        termNewLoanTermDesc: "নতুন ঋণের মেয়াদ হল সেই সমন্বিত সময়কাল যা আগাম পেমেন্ট করার পর আপনার অটো লোন পরিশোধ করতে সময় লাগবে। এটি সাধারণত মূল ঋণের মেয়াদের চেয়ে ছোট হয় কারণ আপনি অতিরিক্ত পেমেন্ট করেছেন।",
        termRemainingTerm: "বাকি মেয়াদ",
        termRemainingTermDesc: "বাকি মেয়াদ হল সেই মাসের সংখ্যা যা আগাম পেমেন্ট ছাড়া আপনার অটো লোন পরিশোধ করার জন্য বাকি আছে। এটি মূল ঋণের মেয়াদ থেকে আপনার ইতিমধ্যে পরিশোধিত মাসগুলি বাদ দিয়ে গণনা করা হয়।",
        termTotalOfPayments: "মোট পেমেন্ট",
        termTotalOfPaymentsDesc: "মোট পেমেন্ট হল আপনার অটো লোনের মেয়াদ জুড়ে আপনি যে সমস্ত মাসিক পেমেন্ট করবেন তার যোগফল। এতে মূলধন এবং সুদ উভয়ই অন্তর্ভুক্ত থাকে, যা সম্পূর্ণ পরিশোধের পরিমাণ প্রতিফলিত করে।",
        termUpfrontPayment: "অগ্রিম পেমেন্ট",
        termUpfrontPaymentDesc: "অগ্রিম পেমেন্ট হল সেই প্রাথমিক পরিমাণ যা আপনি আপনার অটো লোন নেওয়ার সময় দেন, সাধারণত ডাউন পেমেন্ট। এটি ঋণের পরিমাণ কমায় এবং আপনার মোট সুদের খরচ কমাতে পারে।",
    
        // Footer
        footerText: "© ২০২৫ calculator-app.org"
    },
    ru: {
        // Header
        headerTitle: "Калькулятор досрочного погашения автокредита",
        headerSubtitle: "Легко рассчитайте досрочное погашение автокредита и экономию.",
        payoffTab: "Калькулятор досрочного погашения",
        loanTab: "Калькулятор кредита",
    
        // Payoff Calculator Section
        payoffTitle: "Расчет досрочного погашения",
        payoffLoanAmount: "Сумма кредита ($):",
        payoffTotalTerm: "Общий срок кредита (месяцы):",
        payoffMonthlyPayment: "Ежемесячный платеж ($):",
        payoffMonthsPaid: "Уже выплаченные месяцы (месяцы):",
        payoffInterestRate: "Процентная ставка (%):",
        payoffInterestRateHint: "Оставьте пустым для автоматического расчета",
        payoffType: "Тип досрочного погашения:",
        payoffTypeNone: "Без досрочного погашения",
        payoffTypeMonthly: "Ежемесячное досрочное погашение",
        payoffTypeLumpSum: "Единовременное досрочное погашение",
        payoffTypePayOffEarly: "Погасить досрочно",
        payoffPrepaymentAmount: "Сумма досрочного платежа ($):",
        payoffPrepaymentAmountHint: "Дополнительная сумма для ежемесячных или единовременных досрочных платежей",
        payoffPrepaymentTiming: "Срок досрочного погашения (через сколько месяцев):",
        payoffPrepaymentTimingHint: "Когда будет произведен единовременный платеж или полное погашение",
        payoffOtherFees: "Дополнительные сборы ($):",
        payoffOtherFeesHint: "Штрафы за досрочное погашение или другие сборы",
        payoffCalculateButton: "Рассчитать",
        payoffInterestSavings: "Экономия на процентах:",
        payoffCalculatedInterestRate: "Рассчитанная процентная ставка:",
        payoffRemainingBalance: "Оставшийся баланс:",
        payoffOriginalInterest: "Исходные проценты (оставшийся срок):",
        payoffNewInterest: "Новые проценты с досрочным погашением:",
        payoffTotalTerm: "Общий срок кредита:",
        payoffRemainingTerm: "Оставшийся срок (без досрочного погашения):",
        payoffNewTerm: "Новый срок кредита с досрочным погашением:",
        payoffTotalCost: "Общая стоимость с досрочным погашением:",
    
        // Loan Calculator Section
        loanTitle: "Калькулятор кредита",
        loanAutoPrice: "Стоимость автомобиля ($):",
        loanDownPayment: "Первоначальный взнос ($):",
        loanTerm: "Срок кредита (месяцы):",
        loanState: "Ваш штат:",
        loanSalesTax: "Налог с продаж (%):",
        loanInterestRate: "Процентная ставка (%):",
        loanOtherFees: "Дополнительные сборы ($):",
        loanCalculateButton: "Рассчитать",
        loanMonthlyPay: "Ежемесячный платеж:",
        loanTotalLoan: "Общая сумма кредита:",
        loanSalesTax: "Налог с продаж:",
        loanUpfrontPayment: "Первоначальный платеж:",
        loanTotalPayments: "Общие платежи:",
        loanTotalInterest: "Общие проценты по кредиту:",
        loanTotalCost: "Общая стоимость (проценты, налоги, сборы):",
        loanAmortizationSchedule: "График амортизации",
        loanTableMonth: "Месяц",
        loanTablePayment: "Платеж",
        loanTableInterest: "Проценты",
        loanTablePrincipal: "Основной долг",
        loanTableBalance: "Остаток",
    
        // Keywords Explanation Section
        keywordsTitle: "Поймите калькулятор досрочного погашения автокредита",
        keywordsSubtitle: "Узнайте больше о терминах, связанных с калькулятором досрочного погашения автокредита, и о том, как они могут помочь вам сэкономить на автокредите.",
        keywordAutoLoanPayoffCalculator: "Калькулятор досрочного погашения автокредита",
        keywordAutoLoanPayoffCalculatorDesc: "Калькулятор досрочного погашения автокредита помогает определить, сколько вы можете сэкономить на процентах, погасив автокредит досрочно. Он рассчитывает ваш оставшийся баланс, экономию на процентах и новый график платежей на основе деталей вашего кредита и плана досрочного погашения.",
        keywordAutoPayoffCalculator: "Калькулятор досрочного погашения автомобиля",
        keywordAutoPayoffCalculatorDesc: "Калькулятор досрочного погашения автомобиля — это инструмент, который оценивает влияние досрочных платежей на ваш автокредит. Он показывает, сколько времени и денег вы можете сэкономить, делая дополнительные платежи или погашая кредит досрочно.",
        keywordAutoLoanEarlyPayoffCalculator: "Калькулятор раннего погашения автокредита",
        keywordAutoLoanEarlyPayoffCalculatorDesc: "Калькулятор раннего погашения автокредита позволяет вам увидеть преимущества досрочного погашения автокредита до истечения первоначального срока. Он рассчитывает экономию на процентах и то, как скоро вы можете стать свободным от долгов.",
        keywordAutoEarlyPayoffCalculator: "Калькулятор раннего погашения автомобиля",
        keywordAutoEarlyPayoffCalculatorDesc: "Калькулятор раннего погашения автомобиля помогает планировать досрочное погашение автокредита. Вводя детали кредита и сумму досрочного платежа, вы можете увидеть, сколько процентов вы можете сэкономить и как скоро сможете погасить кредит.",
        keywordEarlyPayoffAutoLoanCalculator: "Калькулятор раннего погашения автокредита",
        keywordEarlyPayoffAutoLoanCalculatorDesc: "Калькулятор раннего погашения автокредита разработан, чтобы показать финансовые выгоды от досрочного погашения автокредита. Он предоставляет информацию о вашем оставшемся балансе, экономии на процентах и скорректированном сроке кредита.",
        keywordAutoLoanPayoffEarlyCalculator: "Калькулятор досрочного погашения автокредита",
        keywordAutoLoanPayoffEarlyCalculatorDesc: "Калькулятор досрочного погашения автокредита помогает понять экономию от досрочного погашения автокредита. Он рассчитывает новую дату погашения и сумму сэкономленных процентов с досрочным погашением.",
        keywordLoanPayoffCalculatorAuto: "Калькулятор погашения кредита для автомобиля",
        keywordLoanPayoffCalculatorAutoDesc: "Калькулятор погашения кредита для автомобиля помогает анализировать влияние дополнительных платежей на ваш автокредит. Он показывает ваш оставшийся баланс, экономию на процентах и то, как скоро вы можете погасить кредит.",
        keywordPayoffAutoLoanEarlyCalculator: "Калькулятор раннего погашения автокредита",
        keywordPayoffAutoLoanEarlyCalculatorDesc: "Калькулятор раннего погашения автокредита — это инструмент для оценки экономии от досрочного погашения автокредита. Он рассчитывает экономию на процентах и новый срок кредита на основе вашей стратегии досрочного погашения.",
        keywordPayoffCalculatorAutoLoan: "Калькулятор погашения автокредита",
        keywordPayoffCalculatorAutoLoanDesc: "Калькулятор погашения автокредита помогает определить, сколько вы можете сэкономить, погасив автокредит досрочно. Он предоставляет подробную информацию о вашей экономии на процентах и оставшемся сроке кредита.",
        keywordEarlyAutoLoanPayoffCalculator: "Калькулятор раннего погашения автокредита",
        keywordEarlyAutoLoanPayoffCalculatorDesc: "Калькулятор раннего погашения автокредита показывает, сколько вы можете сэкономить, погасив автокредит досрочно. Он рассчитывает вашу экономию на процентах, оставшийся баланс и новый график погашения кредита.",
    
        // Terms Explanation Section
        termsTitle: "Поймите термины автокредита",
        termsSubtitle: "Узнайте о ключевых терминах, связанных с автокредитами и калькулятором досрочного погашения, чтобы принимать обоснованные финансовые решения.",
        termInterestRate: "Процентная ставка",
        termInterestRateDesc: "Процентная ставка — это процент, который кредитор взимает с суммы, взятой в долг по вашему автокредиту. Она определяет, сколько дополнительно к основному долгу вам придется выплатить со временем, обычно выражается как годовая процентная ставка (APR).",
        termLoanTerm: "Срок кредита",
        termLoanTermDesc: "Срок кредита — это период времени, в течение которого вы должны выплатить автокредит, обычно измеряется в месяцах. Более длинный срок кредита означает меньшие ежемесячные платежи, но больше процентов в общей сумме, тогда как более короткий срок снижает проценты, но увеличивает ежемесячные платежи.",
        termPrincipal: "Основной долг",
        termPrincipalDesc: "Основной долг — это первоначальная сумма, которую вы берете в долг по автокредиту, без учета процентов, налогов и сборов. Это базовая сумма, которую вы будете выплачивать в течение срока кредита, и она уменьшается с вашими платежами.",
        termMonthlyPayment: "Ежемесячный платеж",
        termMonthlyPaymentDesc: "Ежемесячный платеж — это фиксированная сумма, которую вы платите каждый месяц для погашения автокредита. Она включает как основной долг, так и проценты, а иногда и налоги или сборы, в зависимости от вашего кредитного соглашения.",
        termRemainingBalance: "Оставшийся баланс",
        termRemainingBalanceDesc: "Оставшийся баланс — это сумма, которую вам еще предстоит выплатить по автокредиту на данный момент времени. Она уменьшается с вашими платежами и может быстрее сокращаться с досрочными платежами.",
        termPrepayment: "Досрочный платеж",
        termPrepaymentDesc: "Досрочный платеж означает внесение дополнительной суммы сверх вашего обязательного ежемесячного платежа по автокредиту. Это может уменьшить ваш оставшийся баланс, сэкономить на процентах и сократить срок кредита.",
        termLumpSumPrepayment: "Единовременный досрочный платеж",
        termLumpSumPrepaymentDesc: "Единовременный досрочный платеж — это разовый дополнительный платеж по вашему автокредиту. Он напрямую уменьшает основной долг, что приводит к экономии на процентах и, возможно, к сокращению срока кредита.",
        termMonthlyPrepayment: "Ежемесячный досрочный платеж",
        termMonthlyPrepaymentDesc: "Ежемесячный досрочный платеж предполагает добавление дополнительной суммы к вашему регулярному ежемесячному платежу. Эти постоянные дополнительные платежи со временем уменьшают ваш основной долг, что приводит к экономии на процентах и сокращению срока кредита.",
        termPayOffEarly: "Погасить досрочно",
        termPayOffEarlyDesc: "Погасить досрочно означает полностью выплатить автокредит до окончания первоначального срока кредита. Это может сэкономить вам значительную сумму на процентах и позволит быстрее освободиться от долгов.",
        termInterestSavings: "Экономия на процентах",
        termInterestSavingsDesc: "Экономия на процентах — это сумма, которую вы экономите на процентах, делая досрочные платежи или погашая автокредит досрочно. Это разница между исходными процентами и новыми процентами после досрочного погашения.",
        termTotalLoanAmount: "Общая сумма кредита",
        termTotalLoanAmountDesc: "Общая сумма кредита — это полная сумма, которую вы берете в долг по автокредиту, включая основной долг, налог с продаж и любые дополнительные сборы, за вычетом вашего первоначального взноса.",
        termDownPayment: "Первоначальный взнос",
        termDownPaymentDesc: "Первоначальный взнос — это начальная сумма, которую вы платите авансом при покупке автомобиля с помощью кредита. Это уменьшает общую сумму кредита, что снижает ваши ежемесячные платежи и стоимость процентов.",
        termSalesTax: "Налог с продаж",
        termSalesTaxDesc: "Налог с продаж — это процентный налог, который применяется к стоимости покупки вашего автомобиля. Если он не оплачивается авансом, его часто включают в общую сумму кредита, увеличивая сумму, которую вы берете в долг.",
        termOtherFees: "Дополнительные сборы",
        termOtherFeesDesc: "Дополнительные сборы включают дополнительные расходы, связанные с вашим автокредитом, такие как регистрационные сборы, сборы за документацию или штрафы за досрочное погашение. Эти сборы могут увеличить общую стоимость вашего кредита.",
        termAmortizationSchedule: "График амортизации",
        termAmortizationScheduleDesc: "График амортизации — это таблица, которая детализирует каждый ежемесячный платеж в течение срока вашего автокредита. Она показывает, какая часть каждого платежа идет на проценты, основной долг и оставшийся баланс.",
        termTotalCost: "Общая стоимость",
        termTotalCostDesc: "Общая стоимость вашего автокредита — это сумма всех платежей, которые вы сделаете, включая основной долг, проценты, налог с продаж и другие сборы. Она отражает полную стоимость заимствования.",
        termNewLoanTerm: "Новый срок кредита",
        termNewLoanTermDesc: "Новый срок кредита — это скорректированный период времени, который потребуется для погашения автокредита после внесения досрочных платежей. Обычно он короче первоначального срока кредита, поскольку вы сделали дополнительные платежи.",
        termRemainingTerm: "Оставшийся срок",
        termRemainingTermDesc: "Оставшийся срок — это количество месяцев, оставшихся для погашения автокредита без досрочных платежей. Он рассчитывается путем вычитания уже выплаченных месяцев из первоначального срока кредита.",
        termTotalOfPayments: "Общие платежи",
        termTotalOfPaymentsDesc: "Общие платежи — это сумма всех ежемесячных платежей, которые вы сделаете в течение срока автокредита. Она включает как основной долг, так и проценты, отражая полную сумму погашения.",
        termUpfrontPayment: "Первоначальный платеж",
        termUpfrontPaymentDesc: "Первоначальный платеж — это начальная сумма, которую вы платите при получении автокредита, обычно первоначальный взнос. Это уменьшает сумму кредита и может снизить общую стоимость процентов.",
    
        // Footer
        footerText: "© 2025 calculator-app.org. Все права защищены."
    },
    pt: {
        // Header
        headerTitle: "Calculadora de Pagamento Antecipado de Automóveis",
        headerSubtitle: "Calcule facilmente o pagamento antecipado e as economias do seu empréstimo para automóvel.",
        payoffTab: "Calculadora de Pagamento Antecipado",
        loanTab: "Calculadora de Empréstimo",
    
        // Payoff Calculator Section
        payoffTitle: "Cálculo de Pagamento Antecipado",
        payoffLoanAmount: "Valor do empréstimo ($):",
        payoffTotalTerm: "Prazo total do empréstimo (meses):",
        payoffMonthlyPayment: "Pagamento mensal ($):",
        payoffMonthsPaid: "Meses já pagos (meses):",
        payoffInterestRate: "Taxa de juros (%):",
        payoffInterestRateHint: "Deixe em branco para calcular automaticamente",
        payoffType: "Tipo de pagamento antecipado:",
        payoffTypeNone: "Sem pagamento antecipado",
        payoffTypeMonthly: "Pagamento antecipado mensal",
        payoffTypeLumpSum: "Pagamento antecipado de valor único",
        payoffTypePayOffEarly: "Pagar antecipadamente",
        payoffPrepaymentAmount: "Valor do pagamento antecipado ($):",
        payoffPrepaymentAmountHint: "Valor adicional para pagamentos antecipados mensais ou de valor único",
        payoffPrepaymentTiming: "Momento do pagamento antecipado (meses a partir de agora):",
        payoffPrepaymentTimingHint: "Quando o pagamento de valor único ou a quitação será realizada",
        payoffOtherFees: "Outras taxas ($):",
        payoffOtherFeesHint: "Multas por pagamento antecipado ou outras taxas",
        payoffCalculateButton: "Calcular",
        payoffInterestSavings: "Economia de juros:",
        payoffCalculatedInterestRate: "Taxa de juros calculada:",
        payoffRemainingBalance: "Saldo restante:",
        payoffOriginalInterest: "Juros originais (prazo restante):",
        payoffNewInterest: "Novos juros com pagamento antecipado:",
        payoffTotalTerm: "Prazo total do empréstimo:",
        payoffRemainingTerm: "Prazo restante (sem pagamento antecipado):",
        payoffNewTerm: "Novo prazo do empréstimo com pagamento antecipado:",
        payoffTotalCost: "Custo total com pagamento antecipado:",
    
        // Loan Calculator Section
        loanTitle: "Calculadora de Empréstimo",
        loanAutoPrice: "Preço do automóvel ($):",
        loanDownPayment: "Entrada ($):",
        loanTerm: "Prazo do empréstimo (meses):",
        loanState: "Seu estado:",
        loanSalesTax: "Imposto sobre vendas (%):",
        loanInterestRate: "Taxa de juros (%):",
        loanOtherFees: "Outras taxas ($):",
        loanCalculateButton: "Calcular",
        loanMonthlyPay: "Pagamento mensal:",
        loanTotalLoan: "Valor total do empréstimo:",
        loanSalesTax: "Imposto sobre vendas:",
        loanUpfrontPayment: "Pagamento inicial:",
        loanTotalPayments: "Pagamentos totais:",
        loanTotalInterest: "Juros totais do empréstimo:",
        loanTotalCost: "Custo total (juros, impostos, taxas):",
        loanAmortizationSchedule: "Cronograma de amortização",
        loanTableMonth: "Mês",
        loanTablePayment: "Pagamento",
        loanTableInterest: "Juros",
        loanTablePrincipal: "Principal",
        loanTableBalance: "Saldo",
    
        // Keywords Explanation Section
        keywordsTitle: "Entenda a Calculadora de Pagamento Antecipado de Empréstimos para Automóveis",
        keywordsSubtitle: "Saiba mais sobre os termos relacionados à calculadora de pagamento antecipado de empréstimos para automóveis e como eles podem ajudá-lo a economizar no seu empréstimo para automóvel.",
        keywordAutoLoanPayoffCalculator: "Calculadora de Pagamento Antecipado de Empréstimos para Automóveis",
        keywordAutoLoanPayoffCalculatorDesc: "A calculadora de pagamento antecipado de empréstimos para automóveis ajuda você a determinar quanto pode economizar em juros ao quitar seu empréstimo para automóvel antecipadamente. Ela calcula seu saldo restante, a economia de juros e o novo cronograma de pagamentos, com base nos detalhes do seu empréstimo e no plano de pagamento antecipado.",
        keywordAutoPayoffCalculator: "Calculadora de Pagamento Antecipado de Automóveis",
        keywordAutoPayoffCalculatorDesc: "A calculadora de pagamento antecipado de automóveis é uma ferramenta que estima o impacto dos pagamentos antecipados no seu empréstimo para automóvel. Ela mostra quanto tempo e dinheiro você pode economizar ao fazer pagamentos adicionais ou quitar seu empréstimo antecipadamente.",
        keywordAutoLoanEarlyPayoffCalculator: "Calculadora de Pagamento Antecipado de Empréstimos para Automóveis",
        keywordAutoLoanEarlyPayoffCalculatorDesc: "A calculadora de pagamento antecipado de empréstimos para automóveis permite que você veja os benefícios de quitar seu empréstimo para automóvel antes do prazo original. Ela calcula sua economia de juros e o quão rápido você pode se livrar das dívidas.",
        keywordAutoEarlyPayoffCalculator: "Calculadora de Pagamento Antecipado de Automóveis",
        keywordAutoEarlyPayoffCalculatorDesc: "A calculadora de pagamento antecipado de automóveis ajuda a planejar a quitação antecipada do seu empréstimo para automóvel. Ao inserir os detalhes do seu empréstimo e o valor do pagamento antecipado, você pode ver quanto de juros pode economizar e quão rápido pode quitar seu empréstimo.",
        keywordEarlyPayoffAutoLoanCalculator: "Calculadora de Pagamento Antecipado de Empréstimos para Automóveis",
        keywordEarlyPayoffAutoLoanCalculatorDesc: "A calculadora de pagamento antecipado de empréstimos para automóveis é projetada para mostrar os benefícios financeiros de quitar seu empréstimo para automóvel antecipadamente. Ela fornece informações sobre seu saldo restante, economia de juros e o prazo ajustado do empréstimo.",
        keywordAutoLoanPayoffEarlyCalculator: "Calculadora de Pagamento Antecipado de Empréstimos para Automóveis",
        keywordAutoLoanPayoffEarlyCalculatorDesc: "A calculadora de pagamento antecipado de empréstimos para automóveis ajuda você a entender as economias de quitar seu empréstimo para automóvel antes do prazo. Ela calcula sua nova data de quitação e a quantidade de juros economizada com o pagamento antecipado.",
        keywordLoanPayoffCalculatorAuto: "Calculadora de Pagamento Antecipado de Empréstimos para Automóveis",
        keywordLoanPayoffCalculatorAutoDesc: "A calculadora de pagamento antecipado de empréstimos para automóveis ajuda a analisar os efeitos de pagamentos adicionais no seu empréstimo para automóvel. Ela mostra seu saldo restante, economia de juros e quão rápido você pode quitar seu empréstimo.",
        keywordPayoffAutoLoanEarlyCalculator: "Calculadora de Pagamento Antecipado de Empréstimos para Automóveis",
        keywordPayoffAutoLoanEarlyCalculatorDesc: "A calculadora de pagamento antecipado de empréstimos para automóveis é uma ferramenta para estimar as economias de quitar seu empréstimo para automóvel antecipadamente. Ela calcula a economia de juros e o novo prazo do empréstimo com base na sua estratégia de pagamento antecipado.",
        keywordPayoffCalculatorAutoLoan: "Calculadora de Pagamento Antecipado de Empréstimos para Automóveis",
        keywordPayoffCalculatorAutoLoanDesc: "A calculadora de pagamento antecipado de empréstimos para automóveis ajuda a determinar quanto você pode economizar ao quitar seu empréstimo para automóvel antecipadamente. Ela fornece um detalhamento detalhado da sua economia de juros e do prazo restante do empréstimo.",
        keywordEarlyAutoLoanPayoffCalculator: "Calculadora de Pagamento Antecipado de Empréstimos para Automóveis",
        keywordEarlyAutoLoanPayoffCalculatorDesc: "A calculadora de pagamento antecipado de empréstimos para automóveis mostra quanto você pode economizar ao quitar seu empréstimo para automóvel antecipadamente. Ela calcula sua economia de juros, saldo restante e o novo cronograma para quitar o empréstimo.",
    
        // Terms Explanation Section
        termsTitle: "Entenda os Termos de Empréstimos para Automóveis",
        termsSubtitle: "Conheça os termos-chave relacionados a empréstimos para automóveis e à calculadora de pagamento antecipado para tomar decisões financeiras informadas.",
        termInterestRate: "Taxa de juros",
        termInterestRateDesc: "A taxa de juros é a porcentagem que o credor cobra sobre o valor emprestado do seu empréstimo para automóvel. Ela determina quanto você pagará além do principal ao longo do tempo, geralmente expressa como uma taxa percentual anual (APR).",
        termLoanTerm: "Prazo do empréstimo",
        termLoanTermDesc: "O prazo do empréstimo é o período de tempo em que você deve pagar seu empréstimo para automóvel, geralmente medido em meses. Um prazo mais longo significa pagamentos mensais mais baixos, mas mais juros totais, enquanto um prazo mais curto reduz os juros, mas aumenta os pagamentos mensais.",
        termPrincipal: "Principal",
        termPrincipalDesc: "O principal é o valor original que você toma emprestado para o seu empréstimo para automóvel, excluindo juros, impostos e taxas. É o valor base que você pagará durante o prazo do empréstimo, e ele diminui com seus pagamentos.",
        termMonthlyPayment: "Pagamento mensal",
        termMonthlyPaymentDesc: "O pagamento mensal é o valor fixo que você paga a cada mês para quitar seu empréstimo para automóvel. Ele inclui tanto o principal quanto os juros, e às vezes impostos ou taxas, dependendo do seu contrato de empréstimo.",
        termRemainingBalance: "Saldo restante",
        termRemainingBalanceDesc: "O saldo restante é o valor que você ainda deve no seu empréstimo para automóvel em um determinado momento. Ele diminui com seus pagamentos e pode ser reduzido mais rapidamente com pagamentos antecipados.",
        termPrepayment: "Pagamento antecipado",
        termPrepaymentDesc: "O pagamento antecipado significa pagar um valor adicional acima do seu pagamento mensal exigido para o seu empréstimo para automóvel. Isso pode reduzir seu saldo restante, economizar em juros e encurtar o prazo do empréstimo.",
        termLumpSumPrepayment: "Pagamento antecipado de valor único",
        termLumpSumPrepaymentDesc: "Um pagamento antecipado de valor único é um pagamento adicional único feito para o seu empréstimo para automóvel. Ele reduz diretamente o principal, resultando em economia de juros e possivelmente um prazo de empréstimo mais curto.",
        termMonthlyPrepayment: "Pagamento antecipado mensal",
        termMonthlyPrepaymentDesc: "O pagamento antecipado mensal envolve adicionar um valor extra ao seu pagamento mensal regular. Esses pagamentos adicionais constantes reduzem seu principal ao longo do tempo, resultando em economia de juros e um prazo de empréstimo mais curto.",
        termPayOffEarly: "Pagar antecipadamente",
        termPayOffEarlyDesc: "Pagar antecipadamente significa quitar completamente seu empréstimo para automóvel antes do término do prazo original do empréstimo. Isso pode economizar uma quantia significativa em juros e permitir que você fique livre de dívidas mais cedo.",
        termInterestSavings: "Economia de juros",
        termInterestSavingsDesc: "A economia de juros refere-se ao valor que você economiza em juros ao fazer pagamentos antecipados ou quitar seu empréstimo para automóvel antecipadamente. É a diferença entre os juros originais e os novos juros após o pagamento antecipado.",
        termTotalLoanAmount: "Valor total do empréstimo",
        termTotalLoanAmountDesc: "O valor total do empréstimo é o valor completo que você toma emprestado para o seu empréstimo para automóvel, incluindo o principal, o imposto sobre vendas e quaisquer taxas adicionais, menos sua entrada.",
        termDownPayment: "Entrada",
        termDownPaymentDesc: "A entrada é o valor inicial que você paga adiantado ao comprar um automóvel com um empréstimo. Ela reduz o valor total do empréstimo, o que diminui seus pagamentos mensais e o custo dos juros.",
        termSalesTax: "Imposto sobre vendas",
        termSalesTaxDesc: "O imposto sobre vendas é um imposto baseado em porcentagem aplicado ao preço de compra do seu automóvel. Se não for pago adiantado, ele é frequentemente incluído no valor total do empréstimo, aumentando o valor que você toma emprestado.",
        termOtherFees: "Outras taxas",
        termOtherFeesDesc: "Outras taxas incluem custos adicionais relacionados ao seu empréstimo para automóvel, como taxas de registro, taxas de documentação ou multas por pagamento antecipado. Essas taxas podem aumentar o custo total do seu empréstimo.",
        termAmortizationSchedule: "Cronograma de amortização",
        termAmortizationScheduleDesc: "O cronograma de amortização é uma tabela que detalha cada pagamento mensal durante o prazo do seu empréstimo para automóvel. Ele mostra quanto de cada pagamento é destinado a juros, principal e saldo restante.",
        termTotalCost: "Custo total",
        termTotalCostDesc: "O custo total do seu empréstimo para automóvel é a soma de todos os pagamentos que você fará, incluindo o principal, juros, imposto sobre vendas e outras taxas. Ele reflete o preço total do empréstimo.",
        termNewLoanTerm: "Novo prazo do empréstimo",
        termNewLoanTermDesc: "O novo prazo do empréstimo é o período de tempo ajustado que levará para quitar seu empréstimo para automóvel após fazer pagamentos antecipados. Geralmente é mais curto que o prazo original do empréstimo porque você fez pagamentos adicionais.",
        termRemainingTerm: "Prazo restante",
        termRemainingTermDesc: "O prazo restante é o número de meses que faltam para quitar seu empréstimo para automóvel sem pagamentos antecipados. Ele é calculado subtraindo os meses já pagos do prazo original do empréstimo.",
        termTotalOfPayments: "Total de pagamentos",
        termTotalOfPaymentsDesc: "O total de pagamentos é a soma de todos os pagamentos mensais que você fará durante o prazo do seu empréstimo para automóvel. Ele inclui tanto o principal quanto os juros, representando o valor total de reembolso.",
        termUpfrontPayment: "Pagamento inicial",
        termUpfrontPaymentDesc: "O pagamento inicial é o valor inicial que você paga ao obter seu empréstimo para automóvel, geralmente a entrada. Ele reduz o valor do empréstimo e pode diminuir o custo total dos juros.",
    
        // Footer
        footerText: "© 2025 calculator-app.org. Todos os direitos reservados."
    },
    ur: {
        // Header
        headerTitle: "آٹو پے آف کیلکولیٹر",
        headerSubtitle: "اپنے کار لون کی جلد ادائیگی اور بچت کو آسانی سے حساب کریں۔",
        payoffTab: "پے آف کیلکولیٹر",
        loanTab: "لون کیلکولیٹر",
    
        // Payoff Calculator Section
        payoffTitle: "جلد ادائیگی کا حساب",
        payoffLoanAmount: "لون کی رقم ($):",
        payoffTotalTerm: "لون کی کل مدت (ماہ):",
        payoffMonthlyPayment: "ماہانہ ادائیگی ($):",
        payoffMonthsPaid: "پہلے سے ادا کیے گئے مہینے (ماہ):",
        payoffInterestRate: "سود کی شرح (%):",
        payoffInterestRateHint: "خودکار حساب کے لیے خالی چھوڑیں",
        payoffType: "جلد ادائیگی کی قسم:",
        payoffTypeNone: "کوئی جلد ادائیگی نہیں",
        payoffTypeMonthly: "ماہانہ جلد ادائیگی",
        payoffTypeLumpSum: "ایک مرتبہ جلد ادائیگی",
        payoffTypePayOffEarly: "جلد ادا کریں",
        payoffPrepaymentAmount: "جلد ادائیگی کی رقم ($):",
        payoffPrepaymentAmountHint: "ماہانہ جلد ادائیگی یا ایک مرتبہ رقم کے لیے اضافی رقم",
        payoffPrepaymentTiming: "جلد ادائیگی کا وقت (اب سے کتنے ماہ بعد):",
        payoffPrepaymentTimingHint: "ایک مرتبہ رقم یا ادائیگی کب ہوگی",
        payoffOtherFees: "دیگر فیس ($):",
        payoffOtherFeesHint: "جلد ادائیگی کی جرمانہ یا دیگر فیس",
        payoffCalculateButton: "حساب کریں",
        payoffInterestSavings: "سود کی بچت:",
        payoffCalculatedInterestRate: "حساب شدہ سود کی شرح:",
        payoffRemainingBalance: "باقی بیلنس:",
        payoffOriginalInterest: "اصل سود (باقی مدت):",
        payoffNewInterest: "جلد ادائیگی کے ساتھ نیا سود:",
        payoffTotalTerm: "لون کی کل مدت:",
        payoffRemainingTerm: "باقی مدت (جلد ادائیگی کے بغیر):",
        payoffNewTerm: "جلد ادائیگی کے ساتھ لون کی نئی مدت:",
        payoffTotalCost: "جلد ادائیگی کے ساتھ کل لاگت:",
    
        // Loan Calculator Section
        loanTitle: "لون کیلکولیٹر",
        loanAutoPrice: "کار کی قیمت ($):",
        loanDownPayment: "ڈاؤن پیمنٹ ($):",
        loanTerm: "لون کی مدت (ماہ):",
        loanState: "آپ کا صوبہ:",
        loanSalesTax: "سیلز ٹیکس (%):",
        loanInterestRate: "سود کی شرح (%):",
        loanOtherFees: "دیگر فیس ($):",
        loanCalculateButton: "حساب کریں",
        loanMonthlyPay: "ماہانہ ادائیگی:",
        loanTotalLoan: "کل لون کی رقم:",
        loanSalesTax: "سیلز ٹیکس:",
        loanUpfrontPayment: "ابتدائی ادائیگی:",
        loanTotalPayments: "کل ادائیگیاں:",
        loanTotalInterest: "لون کا کل سود:",
        loanTotalCost: "کل لاگت (سود، ٹیکس، فیس):",
        loanAmortizationSchedule: "قرض کی ادائیگی کا شیڈول",
        loanTableMonth: "ماہ",
        loanTablePayment: "ادائیگی",
        loanTableInterest: "سود",
        loanTablePrincipal: "اصل رقم",
        loanTableBalance: "بیلنس",
    
        // Keywords Explanation Section
        keywordsTitle: "آٹو لون پے آف کیلکولیٹر کو سمجھیں",
        keywordsSubtitle: "آٹو لون پے آف کیلکولیٹر سے متعلقہ اصطلاحات کے بارے میں مزید جانیں اور یہ آپ کے کار لون پر بچت کرنے میں کس طرح مدد کر سکتے ہیں۔",
        keywordAutoLoanPayoffCalculator: "آٹو لون پے آف کیلکولیٹر",
        keywordAutoLoanPayoffCalculatorDesc: "آٹو لون پے آف کیلکولیٹر آپ کو یہ طے کرنے میں مدد کرتا ہے کہ آپ اپنے کار لون کو جلد ادا کرکے سود پر کتنا بچا سکتے ہیں۔ یہ آپ کے باقی بیلنس، سود کی بچت اور نئے ادائیگی کے شیڈول کا حساب لگاتا ہے، جو آپ کے لون کی تفصیلات اور جلد ادائیگی کے منصوبے پر مبنی ہوتا ہے۔",
        keywordAutoPayoffCalculator: "آٹو پے آف کیلکولیٹر",
        keywordAutoPayoffCalculatorDesc: "آٹو پے آف کیلکولیٹر ایک ٹول ہے جو آپ کے کار لون پر جلد ادائیگی کے اثرات کا تخمینہ لگاتا ہے۔ یہ دکھاتا ہے کہ آپ اضافی ادائیگیاں کرکے یا اپنے لون کو وقت سے پہلے ادا کرکے کتنا وقت اور پیسہ بچا سکتے ہیں۔",
        keywordAutoLoanEarlyPayoffCalculator: "آٹو لون جلد پے آف کیلکولیٹر",
        keywordAutoLoanEarlyPayoffCalculatorDesc: "آٹو لون جلد پے آف کیلکولیٹر آپ کو اپنے کار لون کو اصل مدت سے پہلے ادا کرنے کے فوائد دیکھنے کی اجازت دیتا ہے۔ یہ آپ کی سود کی بچت اور آپ کتنی جلدی قرض سے آزاد ہو سکتے ہیں، اس کا حساب لگاتا ہے۔",
        keywordAutoEarlyPayoffCalculator: "آٹو جلد پے آف کیلکولیٹر",
        keywordAutoEarlyPayoffCalculatorDesc: "آٹو جلد پے آف کیلکولیٹر آپ کے کار لون کے لیے جلد ادائیگی کی منصوبہ بندی میں مدد کرتا ہے۔ اپنے لون کی تفصیلات اور جلد ادائیگی کی رقم درج کرکے، آپ دیکھ سکتے ہیں کہ آپ کتنا سود بچا سکتے ہیں اور کتنی جلدی اپنے لون کو ادا کر سکتے ہیں۔",
        keywordEarlyPayoffAutoLoanCalculator: "جلد پے آف آٹو لون کیلکولیٹر",
        keywordEarlyPayoffAutoLoanCalculatorDesc: "جلد پے آف آٹو لون کیلکولیٹر آپ کے کار لون کو جلد ادا کرنے کے مالی فوائد دکھانے کے لیے ڈیزائن کیا گیا ہے۔ یہ آپ کے باقی بیلنس، سود کی بچت اور ایڈجسٹ شدہ لون کی مدت کے بارے میں معلومات فراہم کرتا ہے۔",
        keywordAutoLoanPayoffEarlyCalculator: "آٹو لون پے آف جلد کیلکولیٹر",
        keywordAutoLoanPayoffEarlyCalculatorDesc: "آٹو لون پے آف جلد کیلکولیٹر آپ کو اپنے کار لون کو وقت سے پہلے ادا کرنے سے ہونے والی بچت کو سمجھنے میں مدد کرتا ہے۔ یہ آپ کی نئی ادائیگی کی تاریخ اور جلد ادائیگی کے ساتھ سود کی بچت کی رقم کا حساب لگاتا ہے۔",
        keywordLoanPayoffCalculatorAuto: "لون پے آف کیلکولیٹر آٹو",
        keywordLoanPayoffCalculatorAutoDesc: "آٹو لون کے لیے لون پے آف کیلکولیٹر آپ کے کار لون پر اضافی ادائیگیوں کے اثرات کا تجزیہ کرنے میں مدد کرتا ہے۔ یہ آپ کے باقی بیلنس، سود کی بچت اور آپ کتنی جلدی اپنے لون کو ادا کر سکتے ہیں، یہ دکھاتا ہے۔",
        keywordPayoffAutoLoanEarlyCalculator: "پے آف آٹو لون جلد کیلکولیٹر",
        keywordPayoffAutoLoanEarlyCalculatorDesc: "پے آف آٹو لون جلد کیلکولیٹر آپ کے کار لون کو جلد ادا کرنے سے ہونے والی بچت کا تخمینہ لگانے کے لیے ایک ٹول ہے۔ یہ آپ کی جلد ادائیگی کی حکمت عملی کی بنیاد پر سود کی بچت اور لون کی نئی مدت کا حساب لگاتا ہے۔",
        keywordPayoffCalculatorAutoLoan: "پے آف کیلکولیٹر آٹو لون",
        keywordPayoffCalculatorAutoLoanDesc: "آٹو لون کے لیے پے آف کیلکولیٹر یہ طے کرنے میں مدد کرتا ہے کہ آپ اپنے کار لون کو جلد ادا کرکے کتنا بچا سکتے ہیں۔ یہ آپ کی سود کی بچت اور باقی لون کی مدت کا تفصیلی جائزہ فراہم کرتا ہے۔",
        keywordEarlyAutoLoanPayoffCalculator: "جلد آٹو لون پے آف کیلکولیٹر",
        keywordEarlyAutoLoanPayoffCalculatorDesc: "جلد آٹو لون پے آف کیلکولیٹر آپ کو دکھاتا ہے کہ آپ اپنے کار لون کو جلد ادا کرکے کتنا بچا سکتے ہیں۔ یہ آپ کی سود کی بچت، باقی بیلنس اور لون ادا کرنے کے نئے شیڈول کا حساب لگاتا ہے۔",
    
        // Terms Explanation Section
        termsTitle: "آٹو لون کی اصطلاحات کو سمجھیں",
        termsSubtitle: "آٹو لون اور پے آف کیلکولیٹر سے متعلقہ اہم اصطلاحات کے بارے میں جانیں تاکہ باخبر مالی فیصلے لے سکیں۔",
        termInterestRate: "سود کی شرح",
        termInterestRateDesc: "سود کی شرح وہ فیصد ہے جو قرض دہندہ آپ کے آٹو لون کی ادھار لی گئی رقم پر وصول کرتا ہے۔ یہ طے کرتا ہے کہ وقت کے ساتھ آپ کو اصل رقم کے علاوہ کتنا اضافی ادا کرنا ہوگا، عام طور پر اسے سالانہ فیصد شرح (APR) کے طور پر ظاہر کیا جاتا ہے۔",
        termLoanTerm: "لون کی مدت",
        termLoanTermDesc: "لون کی مدت وہ وقت ہے جس میں آپ کو اپنا آٹو لون ادا کرنا ہوتا ہے، عام طور پر اسے مہینوں میں ناپا جاتا ہے۔ لمبی لون کی مدت کا مطلب کم ماہانہ ادائیگیاں لیکن زیادہ کل سود ہوتا ہے، جبکہ کم مدت سود کو کم کرتی ہے لیکن ماہانہ ادائیگیوں کو بڑھاتی ہے۔",
        termPrincipal: "اصل رقم",
        termPrincipalDesc: "اصل رقم وہ اصل رقم ہے جو آپ اپنے آٹو لون کے لیے ادھار لیتے ہیں، جس میں سود، ٹیکس اور فیس شامل نہیں ہوتے۔ یہ وہ بنیادی رقم ہے جسے آپ لون کی مدت کے دوران ادا کریں گے، اور یہ آپ کی ادائیگیوں کے ساتھ کم ہوتی جاتی ہے۔",
        termMonthlyPayment: "ماہانہ ادائیگی",
        termMonthlyPaymentDesc: "ماہانہ ادائیگی وہ مقررہ رقم ہے جو آپ ہر ماہ اپنے آٹو لون کی ادائیگی کے لیے دیتے ہیں۔ اس میں اصل رقم اور سود دونوں شامل ہوتے ہیں، اور کبھی کبھار ٹیکس یا فیس بھی، یہ آپ کے لون کے معاہدے پر منحصر ہوتا ہے۔",
        termRemainingBalance: "باقی بیلنس",
        termRemainingBalanceDesc: "باقی بیلنس وہ رقم ہے جو آپ کو کسی مخصوص وقت پر اپنے آٹو لون کے لیے ابھی بھی ادا کرنی ہے۔ یہ آپ کی ادائیگیوں کے ساتھ کم ہوتی جاتی ہے اور جلد ادائیگی کے ساتھ تیزی سے کم ہو سکتی ہے۔",
        termPrepayment: "جلد ادائیگی",
        termPrepaymentDesc: "جلد ادائیگی کا مطلب ہے کہ آپ اپنے آٹو لون کے لیے مطلوبہ ماہانہ ادائیگی سے زیادہ اضافی رقم ادا کرتے ہیں۔ اس سے آپ کا باقی بیلنس کم ہو سکتا ہے، سود کی بچت ہو سکتی ہے اور لون کی مدت کم ہو سکتی ہے۔",
        termLumpSumPrepayment: "ایک مرتبہ جلد ادائیگی",
        termLumpSumPrepaymentDesc: "ایک مرتبہ جلد ادائیگی آپ کے آٹو لون کے لیے ایک بار میں کی گئی اضافی ادائیگی ہے۔ یہ براہ راست اصل رقم کو کم کرتی ہے، جس سے سود کی بچت ہوتی ہے اور ممکنہ طور پر لون کی مدت کم ہو سکتی ہے۔",
        termMonthlyPrepayment: "ماہانہ جلد ادائیگی",
        termMonthlyPrepaymentDesc: "ماہانہ جلد ادائیگی میں آپ کی باقاعدہ ماہانہ ادائیگی میں اضافی رقم شامل کرنا شامل ہے۔ یہ مسلسل اضافی ادائیگیاں وقت کے ساتھ آپ کی اصل رقم کو کم کرتی ہیں، جس سے سود کی بچت ہوتی ہے اور لون کی مدت کم ہوتی ہے۔",
        termPayOffEarly: "جلد ادا کریں",
        termPayOffEarlyDesc: "جلد ادا کرنے کا مطلب ہے کہ آپ اپنا آٹو لون اصل لون کی مدت ختم ہونے سے پہلے مکمل طور پر ادا کر دیتے ہیں۔ اس سے آپ کافی سود بچا سکتے ہیں اور جلد قرض سے آزاد ہو سکتے ہیں۔",
        termInterestSavings: "سود کی بچت",
        termInterestSavingsDesc: "سود کی بچت اس رقم سے مراد ہے جو آپ جلد ادائیگی کرکے یا اپنا آٹو لون جلد ادا کرکے سود پر بچاتے ہیں۔ یہ اصل سود اور جلد ادائیگی کے بعد نئے سود کے درمیان فرق ہے۔",
        termTotalLoanAmount: "کل لون کی رقم",
        termTotalLoanAmountDesc: "کل لون کی رقم وہ پوری رقم ہے جو آپ اپنے آٹو لون کے لیے ادھار لیتے ہیں، جس میں اصل رقم، سیلز ٹیکس اور کوئی اضافی فیس شامل ہوتی ہے، جس سے آپ کی ڈاؤن پیمنٹ کو منہا کیا جاتا ہے۔",
        termDownPayment: "ڈاؤن پیمنٹ",
        termDownPaymentDesc: "ڈاؤن پیمنٹ وہ ابتدائی رقم ہے جو آپ لون کے ساتھ کار خریدتے وقت پیشگی ادا کرتے ہیں۔ یہ کل لون کی رقم کو کم کرتی ہے، جس سے آپ کی ماہانہ ادائیگیاں اور سود کی لاگت کم ہوتی ہے۔",
        termSalesTax: "سیلز ٹیکس",
        termSalesTaxDesc: "سیلز ٹیکس ایک فیصد پر مبنی ٹیکس ہے جو آپ کی کار کی خریداری کی قیمت پر عائد ہوتا ہے۔ اگر اسے پیشگی ادا نہ کیا جائے تو یہ اکثر کل لون کی رقم میں شامل ہو جاتا ہے، جس سے آپ کی ادھار لی گئی رقم بڑھ جاتی ہے۔",
        termOtherFees: "دیگر فیس",
        termOtherFeesDesc: "دیگر فیس میں آپ کے آٹو لون سے متعلق اضافی اخراجات شامل ہوتے ہیں، جیسے رجسٹریشن فیس، دستاویزات فیس، یا جلد ادائیگی کی جرمانہ۔ یہ فیس آپ کے لون کی کل لاگت کو بڑھا سکتی ہیں۔",
        termAmortizationSchedule: "قرض کی ادائیگی کا شیڈول",
        termAmortizationScheduleDesc: "قرض کی ادائیگی کا شیڈول ایک جدول ہے جو آپ کے آٹو لون کی مدت کے دوران ہر ماہانہ ادائیگی کی تفصیلات دکھاتا ہے۔ یہ بتاتا ہے کہ ہر ادائیگی کا کتنا حصہ سود، اصل رقم اور باقی بیلنس کی طرف جاتا ہے۔",
        termTotalCost: "کل لاگت",
        termTotalCostDesc: "آپ کے آٹو لون کی کل لاگت وہ تمام ادائیگیوں کا مجموعہ ہے جو آپ کریں گے، جس میں اصل رقم، سود، سیلز ٹیکس اور دیگر فیس شامل ہیں۔ یہ ادھار لینے کی مکمل قیمت کو ظاہر کرتا ہے۔",
        termNewLoanTerm: "لون کی نئی مدت",
        termNewLoanTermDesc: "لون کی نئی مدت وہ ایڈجسٹ شدہ مدت ہے جس میں جلد ادائیگی کے بعد آپ کے آٹو لون کو ادا کرنے میں وقت لگے گا۔ یہ عام طور پر اصل لون کی مدت سے کم ہوتی ہے کیونکہ آپ نے اضافی ادائیگی کی ہے۔",
        termRemainingTerm: "باقی مدت",
        termRemainingTermDesc: "باقی مدت وہ مہینوں کی تعداد ہے جو جلد ادائیگی کے بغیر آپ کے آٹو لون کو ادا کرنے کے لیے باقی ہے۔ یہ اصل لون کی مدت سے آپ کے پہلے سے ادا کیے گئے مہینوں کو منہا کرکے حساب کی جاتی ہے۔",
        termTotalOfPayments: "کل ادائیگیاں",
        termTotalOfPaymentsDesc: "کل ادائیگیاں وہ تمام ماہانہ ادائیگیوں کا مجموعہ ہے جو آپ اپنے آٹو لون کی مدت کے دوران کریں گے۔ اس میں اصل رقم اور سود دونوں شامل ہوتے ہیں، جو مکمل ادائیگی کی رقم کو ظاہر کرتا ہے۔",
        termUpfrontPayment: "ابتدائی ادائیگی",
        termUpfrontPaymentDesc: "ابتدائی ادائیگی وہ ابتدائی رقم ہے جو آپ اپنا آٹو لون لیتے وقت ادا کرتے ہیں، عام طور پر ڈاؤن پیمنٹ۔ یہ لون کی رقم کو کم کرتی ہے اور آپ کی کل سود کی لاگت کو کم کر سکتی ہے۔",
    
        // Footer
        footerText: "© 2025 calculator-app.org"
    },
    id: {
        // Header
        headerTitle: "Kalkulator Pelunasan Awal Mobil",
        headerSubtitle: "Hitung pelunasan awal dan penghematan pinjaman mobil Anda dengan mudah.",
        payoffTab: "Kalkulator Pelunasan Awal",
        loanTab: "Kalkulator Pinjaman",
    
        // Payoff Calculator Section
        payoffTitle: "Perhitungan Pelunasan Awal",
        payoffLoanAmount: "Jumlah Pinjaman ($):",
        payoffTotalTerm: "Jangka Waktu Total Pinjaman (bulan):",
        payoffMonthlyPayment: "Pembayaran Bulanan ($):",
        payoffMonthsPaid: "Bulan yang Sudah Dibayar (bulan):",
        payoffInterestRate: "Suku Bunga (%):",
        payoffInterestRateHint: "Biarkan kosong untuk menghitung secara otomatis",
        payoffType: "Jenis Pelunasan Awal:",
        payoffTypeNone: "Tanpa Pelunasan Awal",
        payoffTypeMonthly: "Pelunasan Awal Bulanan",
        payoffTypeLumpSum: "Pelunasan Awal Sekaligus",
        payoffTypePayOffEarly: "Lunasi Lebih Awal",
        payoffPrepaymentAmount: "Jumlah Pelunasan Awal ($):",
        payoffPrepaymentAmountHint: "Jumlah tambahan untuk pelunasan awal bulanan atau sekaligus",
        payoffPrepaymentTiming: "Waktu Pelunasan Awal (berapa bulan dari sekarang):",
        payoffPrepaymentTimingHint: "Kapan pembayaran sekaligus atau pelunasan akan dilakukan",
        payoffOtherFees: "Biaya Lainnya ($):",
        payoffOtherFeesHint: "Denda pelunasan awal atau biaya lainnya",
        payoffCalculateButton: "Hitung",
        payoffInterestSavings: "Penghematan Bunga:",
        payoffCalculatedInterestRate: "Suku Bunga yang Dihitung:",
        payoffRemainingBalance: "Saldo Tersisa:",
        payoffOriginalInterest: "Bunga Asli (jangka waktu tersisa):",
        payoffNewInterest: "Bunga Baru dengan Pelunasan Awal:",
        payoffTotalTerm: "Jangka Waktu Total Pinjaman:",
        payoffRemainingTerm: "Jangka Waktu Tersisa (tanpa pelunasan awal):",
        payoffNewTerm: "Jangka Waktu Pinjaman Baru dengan Pelunasan Awal:",
        payoffTotalCost: "Total Biaya dengan Pelunasan Awal:",
    
        // Loan Calculator Section
        loanTitle: "Kalkulator Pinjaman",
        loanAutoPrice: "Harga Mobil ($):",
        loanDownPayment: "Uang Muka ($):",
        loanTerm: "Jangka Waktu Pinjaman (bulan):",
        loanState: "Provinsi Anda:",
        loanSalesTax: "Pajak Penjualan (%):",
        loanInterestRate: "Suku Bunga (%):",
        loanOtherFees: "Biaya Lainnya ($):",
        loanCalculateButton: "Hitung",
        loanMonthlyPay: "Pembayaran Bulanan:",
        loanTotalLoan: "Jumlah Total Pinjaman:",
        loanSalesTax: "Pajak Penjualan:",
        loanUpfrontPayment: "Pembayaran Awal:",
        loanTotalPayments: "Total Pembayaran:",
        loanTotalInterest: "Total Bunga Pinjaman:",
        loanTotalCost: "Total Biaya (bunga, pajak, biaya):",
        loanAmortizationSchedule: "Jadwal Amortisasi",
        loanTableMonth: "Bulan",
        loanTablePayment: "Pembayaran",
        loanTableInterest: "Bunga",
        loanTablePrincipal: "Pokok",
        loanTableBalance: "Saldo",
    
        // Keywords Explanation Section
        keywordsTitle: "Pahami Kalkulator Pelunasan Awal Pinjaman Mobil",
        keywordsSubtitle: "Pelajari lebih lanjut tentang istilah-istilah yang terkait dengan kalkulator pelunasan awal pinjaman mobil dan bagaimana mereka dapat membantu Anda menghemat pinjaman mobil Anda.",
        keywordAutoLoanPayoffCalculator: "Kalkulator Pelunasan Awal Pinjaman Mobil",
        keywordAutoLoanPayoffCalculatorDesc: "Kalkulator pelunasan awal pinjaman mobil membantu Anda menentukan berapa banyak yang dapat Anda hemat dalam bunga dengan melunasi pinjaman mobil Anda lebih awal. Kalkulator ini menghitung saldo tersisa, penghematan bunga, dan jadwal pembayaran baru berdasarkan detail pinjaman Anda dan rencana pelunasan awal.",
        keywordAutoPayoffCalculator: "Kalkulator Pelunasan Awal Mobil",
        keywordAutoPayoffCalculatorDesc: "Kalkulator pelunasan awal mobil adalah alat yang memperkirakan dampak pembayaran awal pada pinjaman mobil Anda. Ini menunjukkan berapa banyak waktu dan uang yang dapat Anda hemat dengan melakukan pembayaran tambahan atau melunasi pinjaman Anda lebih awal.",
        keywordAutoLoanEarlyPayoffCalculator: "Kalkulator Pelunasan Awal Pinjaman Mobil",
        keywordAutoLoanEarlyPayoffCalculatorDesc: "Kalkulator pelunasan awal pinjaman mobil memungkinkan Anda melihat manfaat melunasi pinjaman mobil Anda sebelum jangka waktu aslinya. Kalkulator ini menghitung penghematan bunga Anda dan seberapa cepat Anda bisa bebas dari utang.",
        keywordAutoEarlyPayoffCalculator: "Kalkulator Pelunasan Awal Mobil",
        keywordAutoEarlyPayoffCalculatorDesc: "Kalkulator pelunasan awal mobil membantu Anda merencanakan pelunasan awal pinjaman mobil Anda. Dengan memasukkan detail pinjaman dan jumlah pelunasan awal, Anda dapat melihat berapa banyak bunga yang dapat Anda hemat dan seberapa cepat Anda dapat melunasi pinjaman Anda.",
        keywordEarlyPayoffAutoLoanCalculator: "Kalkulator Pelunasan Awal Pinjaman Mobil",
        keywordEarlyPayoffAutoLoanCalculatorDesc: "Kalkulator pelunasan awal pinjaman mobil dirancang untuk menunjukkan manfaat finansial dari melunasi pinjaman mobil Anda lebih awal. Kalkulator ini memberikan informasi tentang saldo tersisa, penghematan bunga, dan jangka waktu pinjaman yang disesuaikan.",
        keywordAutoLoanPayoffEarlyCalculator: "Kalkulator Pelunasan Awal Pinjaman Mobil",
        keywordAutoLoanPayoffEarlyCalculatorDesc: "Kalkulator pelunasan awal pinjaman mobil membantu Anda memahami penghematan dari melunasi pinjaman mobil Anda sebelum waktunya. Kalkulator ini menghitung tanggal pelunasan baru Anda dan jumlah bunga yang dihemat dengan pelunasan awal.",
        keywordLoanPayoffCalculatorAuto: "Kalkulator Pelunasan Pinjaman Mobil",
        keywordLoanPayoffCalculatorAutoDesc: "Kalkulator pelunasan pinjaman mobil membantu menganalisis efek pembayaran tambahan pada pinjaman mobil Anda. Ini menunjukkan saldo tersisa, penghematan bunga, dan seberapa cepat Anda dapat melunasi pinjaman Anda.",
        keywordPayoffAutoLoanEarlyCalculator: "Kalkulator Pelunasan Awal Pinjaman Mobil",
        keywordPayoffAutoLoanEarlyCalculatorDesc: "Kalkulator pelunasan awal pinjaman mobil adalah alat untuk memperkirakan penghematan dari melunasi pinjaman mobil Anda lebih awal. Kalkulator ini menghitung penghematan bunga dan jangka waktu pinjaman baru berdasarkan strategi pelunasan awal Anda.",
        keywordPayoffCalculatorAutoLoan: "Kalkulator Pelunasan Pinjaman Mobil",
        keywordPayoffCalculatorAutoLoanDesc: "Kalkulator pelunasan pinjaman mobil membantu menentukan berapa banyak yang dapat Anda hemat dengan melunasi pinjaman mobil Anda lebih awal. Kalkulator ini memberikan rincian terperinci tentang penghematan bunga dan jangka waktu pinjaman yang tersisa.",
        keywordEarlyAutoLoanPayoffCalculator: "Kalkulator Pelunasan Awal Pinjaman Mobil",
        keywordEarlyAutoLoanPayoffCalculatorDesc: "Kalkulator pelunasan awal pinjaman mobil menunjukkan berapa banyak yang dapat Anda hemat dengan melunasi pinjaman mobil Anda lebih awal. Kalkulator ini menghitung penghematan bunga, saldo tersisa, dan jadwal baru untuk melunasi pinjaman.",
    
        // Terms Explanation Section
        termsTitle: "Pahami Istilah Pinjaman Mobil",
        termsSubtitle: "Pelajari istilah-istilah kunci yang terkait dengan pinjaman mobil dan kalkulator pelunasan awal untuk membuat keputusan finansial yang lebih baik.",
        termInterestRate: "Suku Bunga",
        termInterestRateDesc: "Suku bunga adalah persentase yang dikenakan oleh pemberi pinjaman atas jumlah yang dipinjam untuk pinjaman mobil Anda. Ini menentukan berapa banyak tambahan yang harus Anda bayar di atas pokok seiring waktu, biasanya dinyatakan sebagai tingkat persentase tahunan (APR).",
        termLoanTerm: "Jangka Waktu Pinjaman",
        termLoanTermDesc: "Jangka waktu pinjaman adalah periode waktu di mana Anda harus melunasi pinjaman mobil Anda, biasanya diukur dalam bulan. Jangka waktu yang lebih lama berarti pembayaran bulanan yang lebih rendah tetapi bunga total yang lebih tinggi, sedangkan jangka waktu yang lebih pendek mengurangi bunga tetapi meningkatkan pembayaran bulanan.",
        termPrincipal: "Pokok",
        termPrincipalDesc: "Pokok adalah jumlah awal yang Anda pinjam untuk pinjaman mobil Anda, tidak termasuk bunga, pajak, dan biaya. Ini adalah jumlah dasar yang akan Anda bayar selama jangka waktu pinjaman, dan jumlah ini berkurang seiring pembayaran Anda.",
        termMonthlyPayment: "Pembayaran Bulanan",
        termMonthlyPaymentDesc: "Pembayaran bulanan adalah jumlah tetap yang Anda bayar setiap bulan untuk melunasi pinjaman mobil Anda. Ini mencakup pokok dan bunga, dan terkadang pajak atau biaya, tergantung pada perjanjian pinjaman Anda.",
        termRemainingBalance: "Saldo Tersisa",
        termRemainingBalanceDesc: "Saldo tersisa adalah jumlah yang masih harus Anda bayar untuk pinjaman mobil Anda pada suatu waktu tertentu. Saldo ini berkurang seiring pembayaran Anda dan dapat berkurang lebih cepat dengan pelunasan awal.",
        termPrepayment: "Pelunasan Awal",
        termPrepaymentDesc: "Pelunasan awal berarti membayar jumlah tambahan di atas pembayaran bulanan yang diwajibkan untuk pinjaman mobil Anda. Ini dapat mengurangi saldo tersisa, menghemat bunga, dan mempersingkat jangka waktu pinjaman.",
        termLumpSumPrepayment: "Pelunasan Awal Sekaligus",
        termLumpSumPrepaymentDesc: "Pelunasan awal sekaligus adalah pembayaran tambahan satu kali yang dilakukan untuk pinjaman mobil Anda. Ini langsung mengurangi pokok, sehingga menghemat bunga dan mungkin mempersingkat jangka waktu pinjaman.",
        termMonthlyPrepayment: "Pelunasan Awal Bulanan",
        termMonthlyPrepaymentDesc: "Pelunasan awal bulanan melibatkan penambahan jumlah ekstra pada pembayaran bulanan reguler Anda. Pembayaran tambahan yang konsisten ini mengurangi pokok Anda seiring waktu, menghasilkan penghematan bunga dan jangka waktu pinjaman yang lebih pendek.",
        termPayOffEarly: "Lunasi Lebih Awal",
        termPayOffEarlyDesc: "Melunasi lebih awal berarti melunasi pinjaman mobil Anda sepenuhnya sebelum jangka waktu pinjaman asli berakhir. Ini dapat menghemat jumlah bunga yang signifikan dan memungkinkan Anda bebas dari utang lebih cepat.",
        termInterestSavings: "Penghematan Bunga",
        termInterestSavingsDesc: "Penghematan bunga mengacu pada jumlah yang Anda hemat dalam bunga dengan melakukan pelunasan awal atau melunasi pinjaman mobil Anda lebih awal. Ini adalah selisih antara bunga asli dan bunga baru setelah pelunasan awal.",
        termTotalLoanAmount: "Jumlah Total Pinjaman",
        termTotalLoanAmountDesc: "Jumlah total pinjaman adalah jumlah penuh yang Anda pinjam untuk pinjaman mobil Anda, termasuk pokok, pajak penjualan, dan biaya tambahan apa pun, dikurangi uang muka Anda.",
        termDownPayment: "Uang Muka",
        termDownPaymentDesc: "Uang muka adalah jumlah awal yang Anda bayar di muka saat membeli mobil dengan pinjaman. Ini mengurangi jumlah total pinjaman, sehingga mengurangi pembayaran bulanan dan biaya bunga Anda.",
        termSalesTax: "Pajak Penjualan",
        termSalesTaxDesc: "Pajak penjualan adalah pajak berbasis persentase yang diterapkan pada harga pembelian mobil Anda. Jika tidak dibayar di muka, pajak ini sering dimasukkan ke dalam jumlah total pinjaman, meningkatkan jumlah yang Anda pinjam.",
        termOtherFees: "Biaya Lainnya",
        termOtherFeesDesc: "Biaya lainnya mencakup biaya tambahan yang terkait dengan pinjaman mobil Anda, seperti biaya pendaftaran, biaya dokumentasi, atau denda pelunasan awal. Biaya ini dapat meningkatkan total biaya pinjaman Anda.",
        termAmortizationSchedule: "Jadwal Amortisasi",
        termAmortizationScheduleDesc: "Jadwal amortisasi adalah tabel yang merinci setiap pembayaran bulanan selama jangka waktu pinjaman mobil Anda. Ini menunjukkan berapa banyak dari setiap pembayaran yang digunakan untuk bunga, pokok, dan saldo tersisa.",
        termTotalCost: "Total Biaya",
        termTotalCostDesc: "Total biaya pinjaman mobil Anda adalah jumlah semua pembayaran yang akan Anda lakukan, termasuk pokok, bunga, pajak penjualan, dan biaya lainnya. Ini mencerminkan harga penuh dari peminjaman.",
        termNewLoanTerm: "Jangka Waktu Pinjaman Baru",
        termNewLoanTermDesc: "Jangka waktu pinjaman baru adalah periode waktu yang disesuaikan yang diperlukan untuk melunasi pinjaman mobil Anda setelah melakukan pelunasan awal. Biasanya lebih pendek dari jangka waktu pinjaman asli karena Anda telah melakukan pembayaran tambahan.",
        termRemainingTerm: "Jangka Waktu Tersisa",
        termRemainingTermDesc: "Jangka waktu tersisa adalah jumlah bulan yang tersisa untuk melunasi pinjaman mobil Anda tanpa pelunasan awal. Ini dihitung dengan mengurangi bulan yang sudah dibayar dari jangka waktu pinjaman asli.",
        termTotalOfPayments: "Total Pembayaran",
        termTotalOfPaymentsDesc: "Total pembayaran adalah jumlah semua pembayaran bulanan yang akan Anda lakukan selama jangka waktu pinjaman mobil Anda. Ini mencakup pokok dan bunga, yang mencerminkan jumlah pelunasan penuh.",
        termUpfrontPayment: "Pembayaran Awal",
        termUpfrontPaymentDesc: "Pembayaran awal adalah jumlah awal yang Anda bayar saat mengambil pinjaman mobil Anda, biasanya uang muka. Ini mengurangi jumlah pinjaman dan dapat menurunkan total biaya bunga Anda.",
    
        // Footer
        footerText: "© 2025 calculator-app.org. Hak cipta dilindungi."
    },
    ha: {
        // Header
        headerTitle: "Kalkuleta na Biyan Kuɗi na Mota Da Wuri",
        headerSubtitle: "Yi lissafin biyan kuɗin motar ku da wuri da tanadi cikin sauƙi.",
        payoffTab: "Kalkuleta na Biyan Kuɗi Da Wuri",
        loanTab: "Kalkuleta na Lamuni",
    
        // Payoff Calculator Section
        payoffTitle: "Lissafin Biyan Kuɗi Da Wuri",
        payoffLoanAmount: "Adadin Lamuni ($):",
        payoffMonthlyPayment: "Biyan Kuɗi na Wata-Wata ($):",
        payoffMonthsPaid: "Watanni da Aka Riga Aka Biya (watanni):",
        payoffInterestRate: "Yawan Riba (%):",
        payoffInterestRateHint: "Bar shi a fili don lissafin ta atomatik",
        payoffType: "Nau'in Biyan Kuɗi Da Wuri:",
        payoffTypeNone: "Babu Biyan Kuɗi Da Wuri",
        payoffTypeMonthly: "Biyan Kuɗi Da Wuri na Wata-Wata",
        payoffTypeLumpSum: "Biyan Kuɗi Da Wuri Gaba ɗaya",
        payoffTypePayOffEarly: "Biya Da Wuri",
        payoffPrepaymentAmount: "Adadin Biyan Kuɗi Da Wuri ($):",
        payoffPrepaymentAmountHint: "Ƙarin adadin don biyan kuɗi da wuri na wata-wata ko gaba ɗaya",
        payoffPrepaymentTiming: "Lokacin Biyan Kuɗi Da Wuri (watanni daga yanzu):",
        payoffPrepaymentTimingHint: "Lokacin da za a yi biyan kuɗi gaba ɗaya ko biya gaba ɗaya",
        payoffOtherFees: "Sauran Kuɗaɗe ($):",
        payoffOtherFeesHint: "Tarar biyan kuɗi da wuri ko sauran kuɗaɗe",
        payoffCalculateButton: "Lissafa",
        payoffInterestSavings: "Tanadin Riba:",
        payoffCalculatedInterestRate: "Yawan Riba da Aka Lissafa:",
        payoffRemainingBalance: "Ragowar Ma'auni:",
        payoffOriginalInterest: "Riba ta Asali (lokacin da ya rage):",
        payoffNewInterest: "Sabon Riba tare da Biyan Kuɗi Da Wuri:",
        payoffTotalTerm: "Jimlar Lokacin Lamuni:",
        payoffRemainingTerm: "Lokacin da Ya Rage (ba tare da biyan kuɗi da wuri ba):",
        payoffNewTerm: "Sabon Lokacin Lamuni tare da Biyan Kuɗi Da Wuri:",
        payoffTotalCost: "Jimlar Kuɗin tare da Biyan Kuɗi Da Wuri:",
    
        // Loan Calculator Section
        loanTitle: "Kalkuleta na Lamuni",
        loanAutoPrice: "Farashin Mota ($):",
        loanDownPayment: "Kuɗin Farko ($):",
        loanTerm: "Lokacin Lamuni (watanni):",
        loanState: "Jihar ku:",
        loanSalesTax: "Harajin Sayarwa (%):",
        loanInterestRate: "Yawan Riba (%):",
        loanOtherFees: "Sauran Kuɗaɗe ($):",
        loanCalculateButton: "Lissafa",
        loanMonthlyPay: "Biyan Kuɗi na Wata-Wata:",
        loanTotalLoan: "Jimlar Adadin Lamuni:",
        loanSalesTax: "Harajin Sayarwa:",
        loanUpfrontPayment: "Biyan Kuɗin Farko:",
        loanTotalPayments: "Jimlar Biyan Kuɗi:",
        loanTotalInterest: "Jimlar Riba na Lamuni:",
        loanTotalCost: "Jimlar Kuɗi (riba, haraji, kuɗaɗe):",
        loanAmortizationSchedule: "Jadawalin Rage Kuɗi",
        loanTableMonth: "Wata",
        loanTablePayment: "Biyan Kuɗi",
        loanTableInterest: "Riba",
        loanTablePrincipal: "Asali",
        loanTableBalance: "Ma'auni",
    
        // Keywords Explanation Section
        keywordsTitle: "Fahimci Kalkuleta na Biyan Kuɗi Da Wuri na Lamunin Mota",
        keywordsSubtitle: "Ƙara koyo game da kalmomin da suka shafi kalkuleta na biyan kuɗi da wuri na laminin mota da kuma yadda za su taimaka muku wajen tanadin laminin motar ku.",
        keywordAutoLoanPayoffCalculator: "Kalkuleta na Biyan Kuɗi Da Wuri na Lamunin Mota",
        keywordAutoLoanPayoffCalculatorDesc: "Kalkuleta na biyan kuɗi da wuri na laminin mota yana taimaka muku wajen tantance yawan ribar da za ku iya tanada ta hanyar biyan laminin motar ku da wuri. Yana lissafin ragowar ma'auni, tanadin riba, da sabon jadawalin biyan kuɗi, dangane da bayanan laminin ku da shirin biyan kuɗi da wuri.",
        keywordAutoPayoffCalculator: "Kalkuleta na Biyan Kuɗi Da Wuri na Mota",
        keywordAutoPayoffCalculatorDesc: "Kalkuleta na biyan kuɗi da wuri na mota wani kayan aiki ne da ke kimanta tasirin biyan kuɗi da wuri akan laminin motar ku. Yana nuna yawan lokaci da kuɗin da za ku iya tanada ta hanyar yin ƙarin biyan kuɗi ko biyan laminin ku da wuri.",
        keywordAutoLoanEarlyPayoffCalculator: "Kalkuleta na Biyan Kuɗi Da Wuri na Lamunin Mota",
        keywordAutoLoanEarlyPayoffCalculatorDesc: "Kalkuleta na biyan kuɗi da wuri na laminin mota yana ba ku damar ganin fa'idodin biyan laminin motar ku kafin lokacin asali. Yana lissafin tanadin ribar ku da kuma yadda za ku iya samun 'yanci daga bashi cikin sauri.",
        keywordAutoEarlyPayoffCalculator: "Kalkuleta na Biyan Kuɗi Da Wuri na Mota",
        keywordAutoEarlyPayoffCalculatorDesc: "Kalkuleta na biyan kuɗi da wuri na mota yana taimaka muku wajen tsara biyan laminin motar ku da wuri. Ta hanyar shigar da bayanan laminin ku da adadin biyan kuɗi da wuri, za ku iya ganin yawan ribar da za ku iya tanada da kuma yadda za ku iya biyan laminin ku cikin sauri.",
        keywordEarlyPayoffAutoLoanCalculator: "Kalkuleta na Biyan Kuɗi Da Wuri na Lamunin Mota",
        keywordEarlyPayoffAutoLoanCalculatorDesc: "Kalkuleta na biyan kuɗi da wuri na laminin mota an ƙera shi don nuna fa'idodin kuɗi na biyan laminin motar ku da wuri. Yana ba da bayanai game da ragowar ma'auni, tanadin riba, da lokacin laminin da aka daidaita.",
        keywordAutoLoanPayoffEarlyCalculator: "Kalkuleta na Biyan Kuɗi Da Wuri na Lamunin Mota",
        keywordAutoLoanPayoffEarlyCalculatorDesc: "Kalkuleta na biyan kuɗi da wuri na laminin mota yana taimaka muku wajen fahimtar tanadin biyan laminin motar ku kafin lokaci. Yana lissafin sabon ranar biyan kuɗi da adadin ribar da aka tanada tare da biyan kuɗi da wuri.",
        keywordLoanPayoffCalculatorAuto: "Kalkuleta na Biyan Lamuni na Mota",
        keywordLoanPayoffCalculatorAutoDesc: "Kalkuleta na biyan laminin mota yana taimaka wajen nazarin tasirin ƙarin biyan kuɗi akan laminin motar ku. Yana nuna ragowar ma'auni, tanadin riba, da kuma yadda za ku iya biyan laminin ku cikin sauri.",
        keywordPayoffAutoLoanEarlyCalculator: "Kalkuleta na Biyan Kuɗi Da Wuri na Lamunin Mota",
        keywordPayoffAutoLoanEarlyCalculatorDesc: "Kalkuleta na biyan kuɗi da wuri na laminin mota kayan aiki ne don kimanta tanadin biyan laminin motar ku da wuri. Yana lissafin tanadin riba da sabon lokacin laminin dangane da dabarun biyan kuɗi da wuri.",
        keywordPayoffCalculatorAutoLoan: "Kalkuleta na Biyan Lamunin Mota",
        keywordPayoffCalculatorAutoLoanDesc: "Kalkuleta na biyan laminin mota yana taimaka wajen tantance yawan tanadin da za ku iya samu ta hanyar biyan laminin motar ku da wuri. Yana ba da cikakken bayani game da tanadin ribar ku da lokacin laminin da ya rage.",
        keywordEarlyAutoLoanPayoffCalculator: "Kalkuleta na Biyan Kuɗi Da Wuri na Lamunin Mota",
        keywordEarlyAutoLoanPayoffCalculatorDesc: "Kalkuleta na biyan kuɗi da wuri na laminin mota yana nuna yawan tanadin da za ku iya samu ta hanyar biyan laminin motar ku da wuri. Yana lissafin tanadin ribar ku, ragowar ma'auni, da sabon jadawalin biyan laminin.",
    
        // Terms Explanation Section
        termsTitle: "Fahimci Kalmomin Lamunin Mota",
        termsSubtitle: "Koyi game da mahimman kalmomi masu alaƙa da laminin mota da kalkuleta na biyan kuɗi da wuri don yin yanke shawara na kuɗi da aka sani.",
        termInterestRate: "Yawan Riba",
        termInterestRateDesc: "Yawan riba shine kashi da mai ba da lamuni ke caji akan adadin da aka aro don laminin motar ku. Yana tantance yawan ƙarin da za ku biya a kan asali tare da lokaci, yawanci ana bayyana shi a matsayin kashi na shekara (APR).",
        termLoanTerm: "Lokacin Lamuni",
        termLoanTermDesc: "Lokacin lamuni shine lokacin da za ku biya laminin motar ku, yawanci ana auna shi da watanni. Lokaci mai tsawo yana nufin ƙananan biyan kuɗi na wata-wata amma ƙarin riba gaba ɗaya, yayin da ƙaramin lokaci yana rage riba amma yana ƙara biyan kuɗi na wata-wata.",
        termPrincipal: "Asali",
        termPrincipalDesc: "Asali shine adadin farko da kuka aro don laminin motar ku, ba tare da riba, haraji, da kuɗaɗe ba. Wannan shine adadin asali da za ku biya a lokacin laminin, kuma yana raguwa tare da biyan kuɗin ku.",
        termMonthlyPayment: "Biyan Kuɗi na Wata-Wata",
        termMonthlyPaymentDesc: "Biyan kuɗi na wata-wata shine adadin da aka kayyade da kuke biya kowane wata don biyan laminin motar ku. Ya ƙunshi asali da riba, kuma wani lokacin haraji ko kuɗaɗe, ya danganta da yarjejeniyar laminin ku.",
        termRemainingBalance: "Ragowar Ma'auni",
        termRemainingBalanceDesc: "Ragowar ma'auni shine adadin da har yanzu kuke bin laminin motar ku a wani lokaci. Yana raguwa tare da biyan kuɗin ku kuma yana iya raguwa da sauri tare da biyan kuɗi da wuri.",
        termPrepayment: "Biyan Kuɗi Da Wuri",
        termPrepaymentDesc: "Biyan kuɗi da wuri yana nufin biyan ƙarin adadin sama da biyan kuɗin wata-wata da ake buƙata don laminin motar ku. Wannan na iya rage ragowar ma'auni, tanadin riba, da rage lokacin laminin.",
        termLumpSumPrepayment: "Biyan Kuɗi Da Wuri Gaba ɗaya",
        termLumpSumPrepaymentDesc: "Biyan kuɗi da wuri gaba ɗaya shine ƙarin biyan kuɗi guda ɗaya da aka yi don laminin motar ku. Yana rage asali kai tsaye, wanda ke haifar da tanadin riba da kuma yiwuwar rage lokacin laminin.",
        termMonthlyPrepayment: "Biyan Kuɗi Da Wuri na Wata-Wata",
        termMonthlyPrepaymentDesc: "Biyan kuɗi da wuri na wata-wata ya ƙunshi ƙara ƙarin adadin zuwa biyan kuɗin wata-wata na yau da kullun. Waɗannan ƙarin biyan kuɗi na yau da kullun suna rage asalin ku tare da lokaci, wanda ke haifar da tanadin riba da rage lokacin laminin.",
        termPayOffEarly: "Biya Da Wuri",
        termPayOffEarlyDesc: "Biya da wuri yana nufin biyan laminin motar ku gaba ɗaya kafin lokacin laminin na asali ya ƙare. Wannan na iya tanadar da adadin riba mai yawa kuma yana ba ku damar samun 'yanci daga bashi da sauri.",
        termInterestSavings: "Tanadin Riba",
        termInterestSavingsDesc: "Tanadin riba yana nufin adadin da kuka tanada a kan riba ta hanyar yin biyan kuɗi da wuri ko biyan laminin motar ku da wuri. Wannan shine bambanci tsakanin riba ta asali da sabon riba bayan biyan kuɗi da wuri.",
        termTotalLoanAmount: "Jimlar Adadin Lamuni",
        termTotalLoanAmountDesc: "Jimlar adadin lamuni shine adadin da kuka aro gaba ɗaya don laminin motar ku, wanda ya ƙunshi asali, harajin sayarwa, da duk wani ƙarin kuɗaɗe, ban da kuɗin farko.",
        termDownPayment: "Kuɗin Farko",
        termDownPaymentDesc: "Kuɗin farko shine adadin farko da kuke biya a gaba lokacin da kuke sayen mota tare da lamuni. Yana rage jimlar adadin lamuni, wanda ke rage biyan kuɗin wata-wata da kuɗin riba.",
        termSalesTax: "Harajin Sayarwa",
        termSalesTaxDesc: "Harajin sayarwa shine haraji na kashi da ake amfani da shi akan farashin sayen motar ku. Idan ba a biya shi a gaba ba, yawanci ana haɗa shi cikin jimlar adadin lamuni, wanda ke ƙara adadin da kuka aro.",
        termOtherFees: "Sauran Kuɗaɗe",
        termOtherFeesDesc: "Sauran kuɗaɗe sun ƙunshi ƙarin kuɗaɗe masu alaƙa da laminin motar ku, kamar kuɗin rajista, kuɗin takardu, ko tarar biyan kuɗi da wuri. Waɗannan kuɗaɗe na iya ƙara jimlar kuɗin laminin ku.",
        termAmortizationSchedule: "Jadawalin Rage Kuɗi",
        termAmortizationScheduleDesc: "Jadawalin rage kuɗi wani tebur ne da ke ba da cikakken bayani game da kowane biyan kuɗin wata-wata a lokacin laminin motar ku. Yana nuna yawan kowane biyan kuɗi da ke zuwa riba, asali, da ragowar ma'auni.",
        termTotalCost: "Jimlar Kuɗi",
        termTotalCostDesc: "Jimlar kuɗin laminin motar ku shine adadin duk biyan kuɗin da za ku yi, wanda ya ƙunshi asali, riba, harajin sayarwa, da sauran kuɗaɗe. Yana nuna cikakken farashin aro.",
        termNewLoanTerm: "Sabon Lokacin Lamuni",
        termNewLoanTermDesc: "Sabon lokacin lamuni shine lokacin da aka daidaita wanda zai ɗauka don biyan laminin motar ku bayan yin biyan kuɗi da wuri. Yawanci ya fi ƙanƙanta fiye da lokacin laminin na asali saboda kun yi ƙarin biyan kuɗi.",
        termRemainingTerm: "Lokacin da Ya Rage",
        termRemainingTermDesc: "Lokacin da ya rage shine adadin watanni da suka rage don biyan laminin motar ku ba tare da biyan kuɗi da wuri ba. Ana lissafa shi ta hanyar cire watannin da aka riga aka biya daga lokacin laminin na asali.",
        termTotalOfPayments: "Jimlar Biyan Kuɗi",
        termTotalOfPaymentsDesc: "Jimlar biyan kuɗi shine adadin duk biyan kuɗin wata-wata da za ku yi a lokacin laminin motar ku. Ya ƙunshi asali da riba, wanda ke nuna adadin biyan kuɗi gaba ɗaya.",
        termUpfrontPayment: "Biyan Kuɗin Farko",
        termUpfrontPaymentDesc: "Biyan kuɗin farko shine adadin farko da kuke biya lokacin da kuka ɗauki laminin motar ku, yawanci kuɗin farko. Yana rage adadin lamuni kuma yana iya rage jimlar kuɗin riba.",
    
        // Footer
        footerText: "© 2025 calculator-app.org. Duk haƙƙoƙin mallaka an tanada."
    }
};

// Function to update page content based on selected language
function updateLanguage(lang) {
    const t = translations[lang];
    document.documentElement.setAttribute('lang', lang);
    // Header
    document.querySelector('header h1').textContent = t.headerTitle;
    document.querySelector('header p').textContent = t.headerSubtitle;
    document.getElementById('payoff-tab').textContent = t.payoffTab;
    document.getElementById('loan-tab').textContent = t.loanTab;

    // Payoff Calculator Section
    document.querySelector('#payoff-calculator h2').textContent = t.payoffTitle;
    document.querySelector('label[for="payoff-loan-amount"]').textContent = t.payoffLoanAmount;
    document.querySelector('label[for="payoff-total-term"]').textContent = t.payoffTotalTerm;
    document.querySelector('label[for="payoff-monthly-payment"]').textContent = t.payoffMonthlyPayment;
    document.querySelector('label[for="payoff-months-paid"]').textContent = t.payoffMonthsPaid;
    document.querySelector('label[for="payoff-interest-rate"]').textContent = t.payoffInterestRate;
    document.querySelector('#payoff-interest-rate + small').textContent = t.payoffInterestRateHint;
    document.querySelector('label[for="payoff-type"]').textContent = t.payoffType;
    document.querySelector('#payoff-type option[value="none"]').textContent = t.payoffTypeNone;
    document.querySelector('#payoff-type option[value="monthly"]').textContent = t.payoffTypeMonthly;
    document.querySelector('#payoff-type option[value="lump-sum"]').textContent = t.payoffTypeLumpSum;
    document.querySelector('#payoff-type option[value="pay-off-early"]').textContent = t.payoffTypePayOffEarly;
    document.querySelector('label[for="payoff-prepayment-amount"]').textContent = t.payoffPrepaymentAmount;
    document.querySelector('#payoff-prepayment-amount + small').textContent = t.payoffPrepaymentAmountHint;
    document.querySelector('label[for="payoff-prepayment-timing"]').textContent = t.payoffPrepaymentTiming;
    document.querySelector('#payoff-prepayment-timing + small').textContent = t.payoffPrepaymentTimingHint;
    document.querySelector('label[for="payoff-other-fees"]').textContent = t.payoffOtherFees;
    document.querySelector('#payoff-other-fees + small').textContent = t.payoffOtherFeesHint;
    document.querySelector('#payoff-form button').textContent = t.payoffCalculateButton;
    document.querySelector('#payoff-calculator .calculator-results h2').textContent = t.payoffInterestSavings;
    document.querySelector('#payoff-summary p:nth-child(1) strong').textContent = t.payoffCalculatedInterestRate;
    document.querySelector('#payoff-summary p:nth-child(2) strong').textContent = t.payoffRemainingBalance;
    document.querySelector('#payoff-summary p:nth-child(3) strong').textContent = t.payoffOriginalInterest;
    document.querySelector('#payoff-summary p:nth-child(4) strong').textContent = t.payoffNewInterest;
    document.querySelector('#payoff-summary p:nth-child(5) strong').textContent = t.payoffTotalTerm;
    document.querySelector('#payoff-summary p:nth-child(6) strong').textContent = t.payoffRemainingTerm;
    document.querySelector('#payoff-summary p:nth-child(7) strong').textContent = t.payoffNewTerm;
    document.querySelector('#payoff-summary p:nth-child(8) strong').textContent = t.payoffTotalCost;

    // Loan Calculator Section
    document.querySelector('#loan-calculator h2').textContent = t.loanTitle;
    document.querySelector('label[for="auto-price"]').textContent = t.loanAutoPrice;
    document.querySelector('label[for="down-payment"]').textContent = t.loanDownPayment;
    document.querySelector('label[for="loan-term"]').textContent = t.loanTerm;
    document.querySelector('label[for="state"]').textContent = t.loanState;
    document.querySelector('label[for="sales-tax"]').textContent = t.loanSalesTax;
    document.querySelector('label[for="interest-rate"]').textContent = t.loanInterestRate;
    document.querySelector('label[for="other-fees"]').textContent = t.loanOtherFees;
    document.querySelector('#loan-form button').textContent = t.loanCalculateButton;
    document.querySelector('#loan-calculator .calculator-results h2').textContent = t.loanMonthlyPay;
    document.querySelector('.loan-summary p:nth-child(1) strong').textContent = t.loanTotalLoan;
    document.querySelector('.loan-summary p:nth-child(2) strong').textContent = t.loanSalesTax;
    document.querySelector('.loan-summary p:nth-child(3) strong').textContent = t.loanUpfrontPayment;
    document.querySelector('.loan-summary p:nth-child(4) strong').textContent = t.loanTotalPayments;
    document.querySelector('.loan-summary p:nth-child(5) strong').textContent = t.loanTotalInterest;
    document.querySelector('.loan-summary p:nth-child(6) strong').textContent = t.loanTotalCost;
    document.querySelector('#loan-calculator h3').textContent = t.loanAmortizationSchedule;
    document.querySelector('#amortization-table th:nth-child(1)').textContent = t.loanTableMonth;
    document.querySelector('#amortization-table th:nth-child(2)').textContent = t.loanTablePayment;
    document.querySelector('#amortization-table th:nth-child(3)').textContent = t.loanTableInterest;
    document.querySelector('#amortization-table th:nth-child(4)').textContent = t.loanTablePrincipal;
    document.querySelector('#amortization-table th:nth-child(5)').textContent = t.loanTableBalance;

    // Keywords Explanation Section
    document.querySelector('#keywords-explanation h2').textContent = t.keywordsTitle;
    document.querySelector('#keywords-explanation p').textContent = t.keywordsSubtitle;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(3) h2').textContent = t.keywordAutoLoanPayoffCalculator;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(3) p').textContent = t.keywordAutoLoanPayoffCalculatorDesc;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(4) h2').textContent = t.keywordAutoPayoffCalculator;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(4) p').textContent = t.keywordAutoPayoffCalculatorDesc;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(5) h2').textContent = t.keywordAutoLoanEarlyPayoffCalculator;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(5) p').textContent = t.keywordAutoLoanEarlyPayoffCalculatorDesc;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(6) h2').textContent = t.keywordAutoEarlyPayoffCalculator;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(6) p').textContent = t.keywordAutoEarlyPayoffCalculatorDesc;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(7) h2').textContent = t.keywordEarlyPayoffAutoLoanCalculator;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(7) p').textContent = t.keywordEarlyPayoffAutoLoanCalculatorDesc;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(8) h2').textContent = t.keywordAutoLoanPayoffEarlyCalculator;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(8) p').textContent = t.keywordAutoLoanPayoffEarlyCalculatorDesc;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(9) h2').textContent = t.keywordLoanPayoffCalculatorAuto;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(9) p').textContent = t.keywordLoanPayoffCalculatorAutoDesc;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(10) h2').textContent = t.keywordPayoffAutoLoanEarlyCalculator;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(10) p').textContent = t.keywordPayoffAutoLoanEarlyCalculatorDesc;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(11) h2').textContent = t.keywordPayoffCalculatorAutoLoan;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(11) p').textContent = t.keywordPayoffCalculatorAutoLoanDesc;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(12) h2').textContent = t.keywordEarlyAutoLoanPayoffCalculator;
    document.querySelector('#keywords-explanation .keyword-section:nth-child(12) p').textContent = t.keywordEarlyAutoLoanPayoffCalculatorDesc;

    // Terms Explanation Section
    document.querySelector('#terms-explanation h2').textContent = t.termsTitle;
    document.querySelector('#terms-explanation p').textContent = t.termsSubtitle;
    document.querySelector('#terms-explanation .keyword-section:nth-child(3) h2').textContent = t.termInterestRate;
    document.querySelector('#terms-explanation .keyword-section:nth-child(3) p').textContent = t.termInterestRateDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(4) h2').textContent = t.termLoanTerm;
    document.querySelector('#terms-explanation .keyword-section:nth-child(4) p').textContent = t.termLoanTermDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(5) h2').textContent = t.termPrincipal;
    document.querySelector('#terms-explanation .keyword-section:nth-child(5) p').textContent = t.termPrincipalDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(6) h2').textContent = t.termMonthlyPayment;
    document.querySelector('#terms-explanation .keyword-section:nth-child(6) p').textContent = t.termMonthlyPaymentDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(7) h2').textContent = t.termRemainingBalance;
    document.querySelector('#terms-explanation .keyword-section:nth-child(7) p').textContent = t.termRemainingBalanceDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(8) h2').textContent = t.termPrepayment;
    document.querySelector('#terms-explanation .keyword-section:nth-child(8) p').textContent = t.termPrepaymentDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(9) h2').textContent = t.termLumpSumPrepayment;
    document.querySelector('#terms-explanation .keyword-section:nth-child(9) p').textContent = t.termLumpSumPrepaymentDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(10) h2').textContent = t.termMonthlyPrepayment;
    document.querySelector('#terms-explanation .keyword-section:nth-child(10) p').textContent = t.termMonthlyPrepaymentDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(11) h2').textContent = t.termPayOffEarly;
    document.querySelector('#terms-explanation .keyword-section:nth-child(11) p').textContent = t.termPayOffEarlyDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(12) h2').textContent = t.termInterestSavings;
    document.querySelector('#terms-explanation .keyword-section:nth-child(12) p').textContent = t.termInterestSavingsDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(13) h2').textContent = t.termTotalLoanAmount;
    document.querySelector('#terms-explanation .keyword-section:nth-child(13) p').textContent = t.termTotalLoanAmountDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(14) h2').textContent = t.termDownPayment;
    document.querySelector('#terms-explanation .keyword-section:nth-child(14) p').textContent = t.termDownPaymentDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(15) h2').textContent = t.termSalesTax;
    document.querySelector('#terms-explanation .keyword-section:nth-child(15) p').textContent = t.termSalesTaxDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(16) h2').textContent = t.termOtherFees;
    document.querySelector('#terms-explanation .keyword-section:nth-child(16) p').textContent = t.termOtherFeesDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(17) h2').textContent = t.termAmortizationSchedule;
    document.querySelector('#terms-explanation .keyword-section:nth-child(17) p').textContent = t.termAmortizationScheduleDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(18) h2').textContent = t.termTotalCost;
    document.querySelector('#terms-explanation .keyword-section:nth-child(18) p').textContent = t.termTotalCostDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(19) h2').textContent = t.termNewLoanTerm;
    document.querySelector('#terms-explanation .keyword-section:nth-child(19) p').textContent = t.termNewLoanTermDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(20) h2').textContent = t.termRemainingTerm;
    document.querySelector('#terms-explanation .keyword-section:nth-child(20) p').textContent = t.termRemainingTermDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(21) h2').textContent = t.termTotalOfPayments;
    document.querySelector('#terms-explanation .keyword-section:nth-child(21) p').textContent = t.termTotalOfPaymentsDesc;
    document.querySelector('#terms-explanation .keyword-section:nth-child(22) h2').textContent = t.termUpfrontPayment;
    document.querySelector('#terms-explanation .keyword-section:nth-child(22) p').textContent = t.termUpfrontPaymentDesc;

    // Footer
    document.querySelector('footer p').textContent = t.footerText;
}

// Initialize language to English
updateLanguage('en');

// Listen for language change
languageSelect.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});


// Tab Switching Logic
const payoffTab = document.getElementById('payoff-tab');
const loanTab = document.getElementById('loan-tab');
const payoffSection = document.getElementById('payoff-calculator');
const loanSection = document.getElementById('loan-calculator');

payoffTab.addEventListener('click', () => {
    payoffSection.style.display = 'flex';
    loanSection.style.display = 'none';
    payoffTab.classList.add('active');
    loanTab.classList.remove('active');
});

loanTab.addEventListener('click', () => {
    payoffSection.style.display = 'none';
    loanSection.style.display = 'flex';
    payoffTab.classList.remove('active');
    loanTab.classList.add('active');
});

// Dynamically show/hide prepayment fields based on prepayment type
const payoffType = document.getElementById('payoff-type');
const prepaymentAmountGroup = document.getElementById('prepayment-amount-group');
const prepaymentTimingGroup = document.getElementById('prepayment-timing-group');

payoffType.addEventListener('change', () => {
    if (payoffType.value === 'monthly') {
        prepaymentAmountGroup.style.display = 'block';
        prepaymentTimingGroup.style.display = 'none';
        document.getElementById('payoff-prepayment-amount').setAttribute('required', 'true');
    } else if (payoffType.value === 'lump-sum') {
        prepaymentAmountGroup.style.display = 'block';
        prepaymentTimingGroup.style.display = 'block';
        document.getElementById('payoff-prepayment-amount').setAttribute('required', 'true');
        document.getElementById('payoff-prepayment-timing').setAttribute('required', 'true');
    } else if (payoffType.value === 'pay-off-early') {
        prepaymentAmountGroup.style.display = 'none';
        prepaymentTimingGroup.style.display = 'block';
        document.getElementById('payoff-prepayment-amount').removeAttribute('required');
        document.getElementById('payoff-prepayment-timing').setAttribute('required', 'true');
    } else {
        prepaymentAmountGroup.style.display = 'none';
        prepaymentTimingGroup.style.display = 'none';
        document.getElementById('payoff-prepayment-amount').removeAttribute('required');
        document.getElementById('payoff-prepayment-timing').removeAttribute('required');
    }
});

// Payoff Calculator Logic
document.getElementById('payoff-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const loanAmount = parseFloat(document.getElementById('payoff-loan-amount').value);
    const totalTerm = parseInt(document.getElementById('payoff-total-term').value);
    const monthlyPayment = parseFloat(document.getElementById('payoff-monthly-payment').value);
    const monthsPaid = parseInt(document.getElementById('payoff-months-paid').value);
    let interestRate = parseFloat(document.getElementById('payoff-interest-rate').value) / 100;
    const prepaymentType = document.getElementById('payoff-type').value;
    const prepaymentAmount = parseFloat(document.getElementById('payoff-prepayment-amount').value) || 0;
    const prepaymentTiming = parseInt(document.getElementById('payoff-prepayment-timing').value) || 1;
    const otherFees = parseFloat(document.getElementById('payoff-other-fees').value) || 0;

    // Validate: Months paid should not be greater than total term
    if (monthsPaid >= totalTerm) {
        alert('Months Already Paid cannot be greater than or equal to Total Loan Term! Please adjust your input.');
        return;
    }

    // Calculate remaining term
    const remainingTerm = totalTerm - monthsPaid;

    // If interest rate is not provided, calculate it
    let monthlyInterestRate;
    if (!interestRate) {
        // Use binary search to estimate the interest rate
        let low = 0.0001; // 0.01%
        let high = 1.0; // 100%
        let mid;
        let calculatedPayment;
        const epsilon = 0.01; // Acceptable error for monthly payment

        for (let i = 0; i < 100; i++) { // Limit iterations to avoid infinite loop
            mid = (low + high) / 2;
            monthlyInterestRate = mid / 12;
            calculatedPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalTerm));

            if (Math.abs(calculatedPayment - monthlyPayment) < epsilon) {
                break;
            } else if (calculatedPayment < monthlyPayment) {
                low = mid;
            } else {
                high = mid;
            }
        }

        interestRate = mid;
        monthlyInterestRate = interestRate / 12;
    } else {
        monthlyInterestRate = interestRate / 12;
    }

    // Calculate the balance after monthsPaid using the monthly payment
    let balance = loanAmount;
    for (let month = 1; month <= monthsPaid; month++) {
        const interest = balance * monthlyInterestRate;
        const principal = monthlyPayment - interest;
        balance -= principal;
        if (balance <= 0) break; // Prevent negative balance
    }

    // Calculate remaining interest without prepayment (based on remaining term)
    let remainingBalance = balance;
    let remainingInterestWithoutPrepayment = 0;

    for (let month = 1; month <= remainingTerm; month++) {
        const interest = remainingBalance * monthlyInterestRate;
        remainingInterestWithoutPrepayment += interest;
        const principal = monthlyPayment - interest;
        remainingBalance -= principal;
        if (remainingBalance <= 0) break;
    }

    // Calculate new interest and term with prepayment
    let newBalance = balance;
    let newTerm = 0;
    let newInterest = 0;

    if (prepaymentType === 'pay-off-early') {
        // Pay off early: Pay off the remaining balance after prepaymentTiming months
        for (let month = 1; month <= prepaymentTiming; month++) {
            if (newBalance <= 0) break;
            const interest = newBalance * monthlyInterestRate;
            newInterest += interest;
            const principal = monthlyPayment - interest;
            newBalance -= principal;
        }
        newTerm = prepaymentTiming; // Loan is paid off at prepaymentTiming
        newBalance = 0; // Balance is now 0
    } else if (prepaymentType === 'lump-sum') {
        // Lump sum prepayment: Apply a lump sum at prepaymentTiming
        for (let month = 1; month <= remainingTerm; month++) {
            if (newBalance <= 0) break;
            const interest = newBalance * monthlyInterestRate;
            newInterest += interest;
            const principal = monthlyPayment - interest;
            newBalance -= principal;

            // Apply lump sum at prepaymentTiming
            if (month === prepaymentTiming) {
                newBalance -= prepaymentAmount;
            }

            if (newBalance <= 0) {
                newBalance = 0;
                newTerm = month;
                break;
            }
        }
        if (newTerm === 0) newTerm = remainingTerm; // If loan isn't paid off early
    } else if (prepaymentType === 'monthly') {
        // Monthly prepayment: Apply additional payment each month
        for (let month = 1; month <= remainingTerm; month++) {
            if (newBalance <= 0) break;
            const interest = newBalance * monthlyInterestRate;
            newInterest += interest;
            const principal = monthlyPayment - interest;
            newBalance -= principal;

            // Apply monthly prepayment
            if (newBalance > 0) {
                newBalance -= prepaymentAmount;
            }

            if (newBalance <= 0) {
                newBalance = 0;
                newTerm = month;
                break;
            }
        }
        if (newTerm === 0) newTerm = remainingTerm; // If loan isn't paid off early
    } else {
        // No prepayment
        newInterest = remainingInterestWithoutPrepayment;
        newTerm = remainingTerm;
    }

    const totalCostWithPrepayment = loanAmount + newInterest + otherFees;
    const interestSavings = remainingInterestWithoutPrepayment - newInterest;

    // Update summary
    document.getElementById('interest-savings').textContent = `$${interestSavings.toFixed(2)}`;
    document.getElementById('calculated-interest-rate').textContent = `${(interestRate * 100).toFixed(2)}%`;
    document.getElementById('remaining-balance').textContent = `$${balance.toFixed(2)}`;
    document.getElementById('original-interest').textContent = `$${remainingInterestWithoutPrepayment.toFixed(2)}`;
    document.getElementById('new-interest').textContent = `$${newInterest.toFixed(2)}`;
    document.getElementById('total-term').textContent = `${totalTerm} months`;
    document.getElementById('remaining-term').textContent = `${remainingTerm} months`;
    document.getElementById('new-term').textContent = `${newTerm} months`;
    document.getElementById('total-cost-prepayment').textContent = `$${totalCostWithPrepayment.toFixed(2)}`;
});

// Loan Calculator Logic
document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const autoPrice = parseFloat(document.getElementById('auto-price').value);
    const downPayment = parseFloat(document.getElementById('down-payment').value);
    const loanTerm = parseInt(document.getElementById('loan-term').value);
    const salesTaxRate = parseFloat(document.getElementById('sales-tax').value) / 100;
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const otherFees = parseFloat(document.getElementById('other-fees').value) || 0;

    // Calculate loan details
    const salesTax = autoPrice * salesTaxRate;
    const loanAmount = autoPrice - downPayment + salesTax + otherFees;
    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
    const totalPayments = monthlyPayment * loanTerm;
    const totalInterest = totalPayments - loanAmount;

    // Update summary
    document.getElementById('monthly-pay').textContent = `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('total-loan').textContent = `$${loanAmount.toFixed(2)}`;
    document.getElementById('sales-tax-result').textContent = `$${salesTax.toFixed(2)}`;
    document.getElementById('upfront-payment').textContent = `$${downPayment.toFixed(2)}`;
    document.getElementById('total-payments').textContent = `$${totalPayments.toFixed(2)}`;
    document.getElementById('total-interest').textContent = `$${totalInterest.toFixed(2)}`;
    document.getElementById('total-cost').textContent = `$${(totalInterest + salesTax + otherFees).toFixed(2)}`;

    // Amortization Schedule
    let balance = loanAmount;
    const tableBody = document.querySelector('#amortization-table tbody');
    tableBody.innerHTML = '';

    for (let month = 1; month <= loanTerm; month++) {
        const interest = balance * monthlyInterestRate;
        const principal = monthlyPayment - interest;
        balance -= principal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${month}</td>
            <td>$${monthlyPayment.toFixed(2)}</td>
            <td>$${interest.toFixed(2)}</td>
            <td>$${principal.toFixed(2)}</td>
            <td>$${balance.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    }
});