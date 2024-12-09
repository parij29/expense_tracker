const expenseData = {
  labels: ["Food", "Rent", "Utilities", "Shopping", "Transport", "Others"],
  values: [1200, 1500, 800, 700, 300, 500],
};

const incomeExpenseData = {
  labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  income: [7000, 8000, 7500, 7200, 7700, 8300],
  expenses: [6500, 7200, 6800, 6900, 7100, 7600],
};

// Expense Donut Chart
const ctx1 = document.getElementById("expenseChart").getContext("2d");
new Chart(ctx1, {
  type: "doughnut",
  data: {
    labels: expenseData.labels,
    datasets: [
      {
        data: expenseData.values,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  },
});

// Income vs Expenses Line Chart
const ctx2 = document.getElementById("incomeExpenseChart").getContext("2d");
new Chart(ctx2, {
  type: "line",
  data: {
    labels: incomeExpenseData.labels,
    datasets: [
      {
        label: "Income",
        data: incomeExpenseData.income,
        borderColor: "#36A2EB",
        fill: false,
      },
      {
        label: "Expenses",
        data: incomeExpenseData.expenses,
        borderColor: "#FF6384",
        fill: false,
      },
    ],
  },
});
