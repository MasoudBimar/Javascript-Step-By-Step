const root = document.documentElement;
const styles = getComputedStyle(root);

const palette = {
    primary: styles.getPropertyValue("--primary").trim() || "#0f6b5a",
    accent: styles.getPropertyValue("--accent").trim() || "#f2b441",
    text: styles.getPropertyValue("--text").trim() || "#1f1c1a",
    muted: styles.getPropertyValue("--muted").trim() || "#6f6259"
};

let currentCity;
let trafficChart = undefined;
let expansionChart = undefined;
let energyChart = undefined;

const axisColor = "rgba(31, 28, 26, 0.25)";
const gridColor = "rgba(31, 28, 26, 0.08)";

const cities = new Set(["London", "Paris", "Tokyo", "New York"]);
const weekdays = new Set(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
const energyTypes = new Set(["Renewables", "Natural Gas", "Grid"]);

const trafficData = new Map([
    ['London', [2.8, 3.1, 3.5, 3.2, 3.9, 4.4, 3.7]],
    ['Paris', [3.2, 3.9, 4.4, 3.7, 2.8, 3.1, 3.5,]],
    ['Tokyo', [3.9, 4.4, 3.7, 2.8, 3.1, 3.5, 3.2]],
    ['NewYork', [3.5, 3.2, 3.9, 2.8, 3.1, 4.4, 3.7]]
]);
const expansionData = new Map([
    ['London', [14, 11, 16, 9, 2, 11, 15]],
    ['Paris', [16, 15, 26, 13, 17, 7, 2]],
    ['Tokyo', [18, 17, 36, 19, 4, 16, 15]],
    ['NewYork', [20, 19, 46, 23, 3, 8, 11]]
]);
const energyData = new Map([
    ['London', [58, 27, 15]],
    ['Paris', [64, 17, 5]],
    ['Tokyo', [48, 37, 25]],
    ['NewYork', [78, 47, 35]]
]);

const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            labels: {
                color: palette.text
            }
        },
        tooltip: {
            backgroundColor: "rgba(31, 28, 26, 0.9)",
            padding: 12,
            titleColor: "#fff",
            bodyColor: "#fff"
        }
    },
    scales: {
        x: {
            ticks: { color: palette.muted },
            grid: { color: gridColor }
        },
        y: {
            ticks: { color: palette.muted },
            grid: { color: gridColor }
        }
    }
};

function buildCharts() {
    const trafficChartRef = document.getElementById("trafficChart");
    const expansionChartRef = document.getElementById("expansionChart");
    const energyChartRef = document.getElementById("energyChart");

    if (!trafficChartRef || !expansionChartRef || !energyChartRef || !window.Chart) {
        return;
    }

    trafficChart = new Chart(trafficChartRef, {
        type: "line",
        data: {
            labels: Array.from(cities),
            datasets: [
                {
                    label: "Ridership (M)",
                    data: [],
                    borderColor: palette.primary,
                    backgroundColor: "rgba(15, 107, 90, 0.2)",
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 4
                }
            ]
        },
        options: {
            ...baseOptions,
            scales: {
                ...baseOptions.scales,
                y: {
                    ...baseOptions.scales.y,
                    ticks: {
                        color: palette.muted,
                        callback: (value) => `${value}M`
                    }
                }
            }
        }
    });

    expansionChart = new Chart(expansionChartRef, {
        type: "bar",
        data: {
            labels: Array.from(weekdays),
            datasets: [
                {
                    label: "Projects",
                    data: [],
                    backgroundColor: [palette.primary, palette.accent, "#3f7f6b", "#c9792b"],
                    borderRadius: 10
                }
            ]
        },
        options: {
            ...baseOptions,
            scales: {
                ...baseOptions.scales,
                y: {
                    ...baseOptions.scales.y,
                    beginAtZero: true
                }
            }
        }
    });

    energyChart = new Chart(energyChartRef, {
        type: "doughnut",
        data: {
            labels: Array.from(energyTypes),
            datasets: [
                {
                    data: [],
                    backgroundColor: [palette.primary, palette.accent, "#b68a5c"],
                    borderWidth: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: palette.text,
                        boxWidth: 14
                    }
                }
            },
            cutout: "65%"
        }
    });

    changeCity('London');
}

function changeCity(city, event) {
    event?.preventDefault();
    if (city !== currentCity) {

        trafficChart.data.datasets[0].data = Array.from(trafficData.get(city));
        expansionChart.data.datasets[0].data = Array.from(expansionData.get(city));
        energyChart.data.datasets[0].data = Array.from(energyData.get(city));

        trafficChart.update();
        expansionChart.update();
        energyChart.update();
        currentCity = city;
    }

}

document.addEventListener("DOMContentLoaded", buildCharts);

