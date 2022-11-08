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

export function createNavContainer(typeID) {
  return `
<nav class="nav_user d-flex flex-column flex-md-row flex-lg-column justify-content-around align-items-center gap-3 my-3">
  <article class="article_canvas">
    <canvas id="${typeID}"></canvas>
  </article>
  <article class="article_input gap-2">
    <button class="btn btn-primary" data-add="${typeID}">
      <ion-icon name="add"></ion-icon>
    </button>
    <input
      class="user_input text-center p-1 rounded-3 border-0"
      id=""
      placeholder="Agrega una propiedad"
    />
  </article>
</nav>;
`
}
