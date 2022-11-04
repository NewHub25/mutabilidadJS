import Chart from "chart.js/auto";
import "./api";
import "./index.css";

const inmutables = [
  "replace",
  "join",
  "split",
  "slice",
  "toString",
  "substring",
  "concat",
  "flat",
  "padStart",
  "padEnd",
  "map",
  "reduce",
  "filter",
  "trim",
  "repeat",
].sort();
const mutables = [
  "unshift",
  "shift",
  "pop",
  "splice",
  "fill",
  "copyWithin",
  "sort",
  "length",
].sort();

function colorRandomLight() {
  const random = () => Math.floor(Math.random() * 155) + 100;
  const r = random().toString(16);
  const g = random().toString(16);
  const b = random().toString(16);
  return "#" + r + g + b;
}

const dataInmutables = {
  labels: inmutables,
  datasets: [
    {
      label: "inmutables", //?
      data: Array(inmutables.length).fill(1),
      backgroundColor: Array(inmutables.length)
        .fill(1)
        .map((l) => colorRandomLight()),
    },
  ],
};
const dataMutables = {
  labels: mutables,
  datasets: [
    {
      label: "mutables",
      data: Array(mutables.length).fill(1),
      backgroundColor: Array(mutables.length)
        .fill(1)
        .map((l) => colorRandomLight()),
    },
  ],
};
const configInmutable = {
  type: "doughnut",
  data: dataInmutables,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "left",
      },
      title: {
        display: true,
        text: "Métodos inmutables",
      },
    },
    cutout: "30%",
  },
};
const configMutable = {
  type: "doughnut",
  data: dataMutables,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Métodos mutables",
      },
    },
    cutout: "50%",
  },
};
const myChart1 = new Chart(
  document.getElementById("myCanvas1"),
  configInmutable
);
const myChart2 = new Chart(document.getElementById("myCanvas2"), configMutable);

// const BUTTONS = document.querySelectorAll('[data-add]');
// const INPUTS = document.querySelectorAll(".user_input");
const box = {
  data: {
    inmutables: inmutables,
    mutables: mutables,
  },
  charts: {
    inmutables: myChart1,
    mutables: myChart2,
  },
};
