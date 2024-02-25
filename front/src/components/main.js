import React, { useEffect } from "react";
import "./main.css";
import Chart from "chart.js/auto";
import maskGroupImage from "./Mask group.svg"; // Make sure to import the actual image path

function useDataFetching() {
  const renderBarCharts = (data) => {
    const statistics = [
      "mean_salary",
      "median_salary",
      "mode_salary",
      "std_deviation_salary",
      "min_salary",
      "max_salary",
    ];

    statistics.forEach((statistic, index) => {
      const ctx = document.getElementById(`barChart${index}`).getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: [statistic.replace("_", " ")],
          datasets: [
            {
              label: statistic.replace("_", " "),
              data: [data[statistic]],
              backgroundColor: "rgba(255, 255, 255, 0.6)", // White with 60% opacity
borderColor: "rgba(255, 255, 255, 1)",      // White with full opacity
     // Keep border color fully opaque
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "black", // Set text color to black
              },
            },
            x: {
              ticks: {
                color: "black", // Set text color to black
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "black", // Set legend text color to black
              },
            },
          },
        },
      });
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/statistics");
        const data = await response.json();
        renderBarCharts(data);
      } catch (error) {
        console.error("Error fetching salary statistics:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="main-container">
        <div className="statistics-container">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="chart-box" key={index}>
              <canvas id={`barChart${index}`}></canvas>
            </div>
          ))}
        </div>
        <div className="vertical-rectangle">
          <div className="content-container">
            <img src={maskGroupImage} alt="Mask Group" className="image" />
            <h1>About the Data</h1>
          </div>
          <h2>Write ~150 to 200 word introduction to your chosen data </h2>
        </div>
      </div>
    </div>
  );
}

function App() {
  useDataFetching();

  return (
    <div className="App">
      <div className="main-container">
        <div className="statistics-container">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="chart-box" key={index}>
              <canvas id={`barChart${index}`}></canvas>
            </div>
          ))}
        </div>
        <div className="vertical-rectangle">
          <div className="content-container">
            <img src={maskGroupImage} alt="Mask Group" className="image" />
            <h1>About the Data</h1>
          </div>
          <p>The provided data offers insights into the job market for various data-related roles across different countries and companies in 2023. It showcases positions like Data Engineers, Data Scientists, Analytics Engineers, Business Intelligence Developers, and Machine Learning Engineers, each categorized by their employment type, experience level, expertise level, salary, salary currency, company location, employee residence, and company size. </p>
          <p>The data reflects the competitive nature of the field, with salary ranges varying significantly based on the role's expertise and location. For instance, senior-level roles command higher salaries, often exceeding $200,000 in the United States. Moreover, the data underscores the global nature of the tech industry, with job opportunities spanning the United States, United Kingdom, Germany, and Sweden.</p>
          <p>These figures provide valuable insights for job seekers and employers alike, assisting them in understanding prevailing salary trends and market demands for different data-related positions. The data also highlights the impact of factors such as job specialization, geographical location, and company size on compensation packages, allowing professionals to make informed decisions regarding their career paths and employers to stay competitive in attracting top talent.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
