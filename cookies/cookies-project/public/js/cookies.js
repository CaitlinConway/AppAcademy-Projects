
window.addEventListener(`DomContentLoaded`, (event) => {
  console.log("This loads when DOM is ready.");
});
document.cookie = "monster_name=cookie";
document.cookie = "favorite_cookie=snickerdoodle";
//window.alert("Cookies are here");

const setCookie = function (name, value) {
  const getCookie = document.cookie = name + '=' + value;
}

setCookie("chocolate", "chocolate-chip");

const getCookies = function () {
  return document.cookie.split(";");
}

const getCookieValue = function (name) {
  let arr = getCookies();
  for (let i = 0; i < arr.length; ++i) {
    let ele = arr[i];
    if (ele.indexOf(name) === -1) {
      return null;
    }
    if (ele.indexOf(name) > -1) {
      let newEle = ele.split("=");
      return newEle[1];
    }
  }
}

let deleteCookie = function (name) {
  if (getCookieValue(name) === null) {
    return "Cookie not found.";
  }
  let arr = getCookies();
  for (let i = 0; i < arr.length; ++i) {
    let ele = arr[i];
    if (ele.indexOf(name) > -1) {
      arr.splice(arr.indexOf(ele), 1);
    }
  }
  return document.cookies = arr.join("; ");
}

console.log(document.cookies);
console.log(deleteCookie("monster_nameee"));
