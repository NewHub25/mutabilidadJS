export function getMethod(type) {
  return fetch(`https://633fcc2ad1fcddf69ca9ca98.mockapi.io/${type}`)
    .then(r => r.json())
    .then(r => {
        return r.map(d => d.name);
    })
}
