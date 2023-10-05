function calculateCompoundInterest(
  principal,
  rate,
  time,
  compoundingFrequency
) {
  // Convert rate to decimal form
  rate = rate / 100;

  // Calculate compound interest formula components
  const n = compoundingFrequency; // Number of times interest is compounded per time period
  const nt = n * time; // Total number of compounding periods

  // Calculate compound interest
  const compoundInterest = principal * Math.pow(1 + rate / n, nt) - principal;

  return compoundInterest;
}

// Example usage
const principalAmount = 1000; // Principal amount (initial investment)
const annualInterestRate = 5; // Annual interest rate (in percentage)
const timePeriod = 3; // Time in years
const compoundingFrequency = 12; // Compounding frequency (e.g., monthly)

const interest = calculateCompoundInterest(
  principalAmount,
  annualInterestRate,
  timePeriod,
  compoundingFrequency
);
console.log("Compound Interest:", interest.toFixed(2));
