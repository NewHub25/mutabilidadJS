import Chart from "chart.js/auto";
import { getArrayApi, colorRandomLight, postApi } from "./stored";
import "./index.css";

async function crearChart(canvasID, type) {
  const array = await getArrayApi(type);
  const _data = {
    labels: array,
    datasets: [
      {
        label: type,
        data: Array(array.length).fill(1),
        backgroundColor: Array(array.length)
          .fill("")
          .map((l) => colorRandomLight()),
      },
    ],
  };
  const _config = {
    type: "doughnut",
    data: _data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "left",
        },
        title: {
          display: true,
          text: "Métodos " + type,
        },
      },
      cutout: "40%",
    },
  };
  return new Chart(document.getElementById(canvasID), _config);
}
const myChart1 = crearChart("myCanvas1", "inmutables");
const myChart2 = crearChart("myCanvas2", "mutables");

async function loadAddEvent() {
  const box = {};
  box.inmutables = await myChart1;
  box.mutables = await myChart2;
  
  document.querySelector(".header_user").addEventListener("click", (e) => {
    const targetDataset = e.target.dataset;
    const next = e.target.nextElementSibling;
    if (targetDataset.add && /^[a-zA-Z]+$/.test(next.value)) {
      if (box[targetDataset.add].data.labels.some((l) => l === next.value)) {
        alert(`Tal método ya existe 🙄:\n**${next.value}** 😱`);
      } else {
        postApi(targetDataset.add, next.value).then(async (r) => {
          box[targetDataset.add].data.labels = await getArrayApi(
            targetDataset.add
          );
          box[targetDataset.add].data.datasets[0].data.push(1);
          box[targetDataset.add].update();
        });
      }
    }
    if (next) next.value = ""; // Si existe un hermano se le borra su "value"
  });
}
loadAddEvent();
