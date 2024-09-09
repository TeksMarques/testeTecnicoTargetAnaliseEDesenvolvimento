document.addEventListener("DOMContentLoaded", () => {
  const revenueByState = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Others: 19849.53,
  };

  const totalRevenue = Object.values(revenueByState).reduce(
    (acc, value) => acc + value,
    0
  );

  const percentages = {};
  for (const [state, value] of Object.entries(revenueByState)) {
    percentages[state] = ((value / totalRevenue) * 100).toFixed(2);
  }

  document.getElementById("sp").textContent = `O percentual do valor mensal em SP é de: ${percentages.SP} %`;
  document.getElementById("rj").textContent = `O percentual do valor mensal em RJ é de: ${percentages.RJ} %`;
  document.getElementById("mg").textContent = `O percentual do valor mensal em MG é de: ${percentages.MG} %`;
  document.getElementById("es").textContent = `O percentual do valor mensal em ES é de: ${percentages.ES} %`;
  document.getElementById("others").textContent = `O percentual do valor mensal em outros estados é de: ${percentages.Others} %`;
});
