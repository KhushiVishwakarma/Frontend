// GSAP animations
gsap.from(".card, table, form, canvas", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: "power3.out"
  });
  
  // Light/Dark Mode Button
  const themeToggle = document.getElementById("mode-toggle");
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.hasAttribute("data-theme");
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      themeToggle.textContent = "🌙 Dark Mode";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggle.textContent = "☀️ Light Mode";
    }
  });
  
  // Chart.js chart
  const ctx = document.getElementById("performanceChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Referrals",
        data: [20, 40, 65, 120, 90, 130],
        borderWidth: 3,
        fill: true,
        tension: 0.3,
        borderColor: "rgba(78, 115, 223, 1)",
        backgroundColor: "rgba(78, 115, 223, 0.1)"
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });
  
  // Update Chart colors when theme changes
  function updateChartColors() {
    const isDark = document.documentElement.hasAttribute("data-theme");
    chart.data.datasets[0].borderColor = isDark ? "#8ab4f8" : "rgba(78, 115, 223, 1)";
    chart.data.datasets[0].backgroundColor = isDark ? "rgba(138, 180, 248, 0.1)" : "rgba(78, 115, 223, 0.1)";
    chart.update();
  }
  
  themeToggle.addEventListener("click", updateChartColors);
  
  // Campaign form interaction
  document.getElementById("campaignForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ New Campaign Created Successfully!");
    e.target.reset();
  });
  