import Chart from "chart.js/auto";
import { getArrayApi, postApi, createNavContainer } from "./stored";
import { colorName } from "./coloresHtml";
import "./index.css";

const HEADER_USER = document.querySelector(".header_user");
async function crearChart(type) {
  const array = await getArrayApi(type);
  const _data = {
    labels: array.sort(),
    datasets: [
      {
        label: type,
        data: Array(array.length).fill(1),
        backgroundColor: Array(array.length)
          .fill("")
          .map((l) => colorName()),
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
          text: "Métodos y propiedades tipo: " + type,
        },
      },
      cutout: "40%",
    },
  };
  return new Chart(document.getElementById(type), _config);
}

async function loadAddEvent(...types) {
  HEADER_USER.innerHTML = "";
  const chartHandler = {};
  for (let i = 0; i < types.length; i++) {
    HEADER_USER.innerHTML += createNavContainer(types[i]);
  }
  for (let j = 0; j < types.length; j++) {
    chartHandler[types[j]] = await crearChart(types[j]);
  }
  /*
    Buena práctica separar la lógica del HTML y las promesas, puesto que si no hay un orden, no habrá un lienzo donde dibujar los datos en ese milisegundo de momento
  */
  // box.inmutables = await crearChart("myCanvas1", "inmutables");
  // box.mutables = await crearChart("myCanvas1", "mutables");

  HEADER_USER.addEventListener("click", (e) => {
    const targetDataset = e.target.dataset;
    const next = e.target.nextElementSibling;
    if (targetDataset.add && /^[a-zA-Z]+$/.test(next.value)) {
      // Se verifica arriba la entrada del respectivo input
      if (chartHandler[targetDataset.add].data.labels.some((l) => l === next.value)) {
        alert(`Tal propiedad ya existe 🙄:\n**${next.value}** 😱`);
      } else {
        postApi(targetDataset.add, next.value).then(async () => {
          chartHandler[targetDataset.add].data.labels = await getArrayApi(
            targetDataset.add
          );
          chartHandler[targetDataset.add].data.datasets[0].data.push(1);
          chartHandler[targetDataset.add].data.datasets[0].backgroundColor.push(
            colorName()
          );
          chartHandler[targetDataset.add].update();
        });
      }
    }
    if (next) next.value = ""; // Si existe un hermano se le borra su "value"
  });
}
loadAddEvent("inmutables", "mutables", "booleanos");
// loadAddEvent("inmutables");
