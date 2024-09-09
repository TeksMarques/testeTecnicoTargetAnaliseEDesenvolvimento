document.addEventListener("DOMContentLoaded", () => {
  const revenue = [
    { day: 1, value: 22174.1664 },
    { day: 2, value: 24537.6698 },
    { day: 3, value: 26139.6134 },
    { day: 4, value: 0.0 },
    { day: 5, value: 0.0 },
    { day: 6, value: 26742.6612 },
    { day: 7, value: 0.0 },
    { day: 8, value: 42889.2258 },
    { day: 9, value: 46251.174 },
    { day: 10, value: 11191.4722 },
    { day: 11, value: 0.0 },
    { day: 12, value: 0.0 },
    { day: 13, value: 3847.4823 },
    { day: 14, value: 373.7838 },
    { day: 15, value: 2659.7563 },
    { day: 16, value: 48924.2448 },
    { day: 17, value: 18419.2614 },
    { day: 18, value: 0.0 },
    { day: 19, value: 0.0 },
    { day: 20, value: 35240.1826 },
    { day: 21, value: 43829.1667 },
    { day: 22, value: 18235.6852 },
    { day: 23, value: 4355.0662 },
    { day: 24, value: 13327.1025 },
    { day: 25, value: 0.0 },
    { day: 26, value: 0.0 },
    { day: 27, value: 25681.8318 },
    { day: 28, value: 1718.1221 },
    { day: 29, value: 13220.495 },
    { day: 30, value: 8414.61 },
  ];

  const daysWithRevenue = revenue.filter((day) => day.value > 0);

  const lowestValue = Math.min(...daysWithRevenue.map((day) => day.value));
  const highestValue = Math.max(...daysWithRevenue.map((day) => day.value));

  const totalRevenue = daysWithRevenue.reduce((acc, day) => acc + day.value, 0);
  const monthlyAverage = totalRevenue / daysWithRevenue.length;

  const daysAboveAverage = daysWithRevenue.filter(
    (day) => day.value > monthlyAverage
  ).length;

  document.getElementById(
    "lowest"
  ).textContent = `O valor de menor faturamento é de: $${lowestValue.toFixed(
    2
  )}`;
  document.getElementById(
    "highest"
  ).textContent = `O valor de maior faturamento é de: $${highestValue.toFixed(
    2
  )}`;
  document.getElementById(
    "aboveAverage"
  ).textContent = `Dias de faturamente acima da média são de: ${daysAboveAverage} dias`;
});
