const mockApi = "https://633fcc2ad1fcddf69ca9ca98.mockapi.io/";

export function getArrayApi(type) {
  return fetch(mockApi + type)
    .then((response) => response.json())
    .then((result) => {
      return result.map((d) => d.name);
    });
}

export function postApi(type, method) {
  const body = {
    name: method,
    created: new Date().toString().match(/[\w\s:]+(?= GMT)/g)[0],
  };
  return fetch(mockApi + type, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(
        "%cAgregado a la API con éxito",
        "color: gold; background: #112"
      );
      console.table(result);
      return result;
    })
    .catch((e) => console.error(e));
}

export function colorRandomLight() {
  const random = () => Math.floor(Math.random() * 155) + 100;
  const r = random().toString(16);
  const g = random().toString(16);
  const b = random().toString(16);
  return "#" + r + g + b;
}
