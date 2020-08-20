export function getClue(cb) {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState !== XMLHttpRequest.DONE) return;
    if (request.status !== 200) {
      cb(request.status);
    }
    if (request.status === 200) {
      let clueInfo = JSON.parse(request.responseText);
      cb(null, clueInfo);
    }
  });
  request.open("GET", "https://jservice.xyz/api/random-clue");
  request.send();
}
