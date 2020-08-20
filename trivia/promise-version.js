
export function getClue() {
  return fetch("https://jservice.xyz/api/random-clue")
    .then((response) => {
      if (response.ok === false) {
        throw new Error(response.status);
      }
      if (response.ok === true) {
        return response.json();
      }
    })
}
