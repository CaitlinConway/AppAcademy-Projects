window.addEventListener("DOMContentLoaded", (event) => {


  // ** Phase 1B: Update license with event delegation and event.target **
  const form = document.getElementById("drivers-license-form");
  const formNodeList = document.querySelectorAll("form__field");
  const licenseNodeList = document.querySelectorAll(".license__info");
  const submitButton = document.querySelector(".form__submit");
  const license = document.getElementById("drivers-license-card");
  const checkbox = document.getElementById("donor-status");
  const donorStatus = document.getElementById("card-donor-status");

  form.addEventListener("focus", (event) => {
    event.target.style.backgroundColor = "lightgreen";
  }, true);
  form.addEventListener("blur", (event) => {
    event.target.style.backgroundColor = "initial";
  }, true);

  form.addEventListener("input", (event) => {
    licenseNodeList.forEach(field => {
      if (field.id.includes(event.target.id)) {
        field.innerHTML = event.target.value;
        if (checkbox.checked) {
          donorStatus.innerHTML = "donor";
        }
        else {
          donorStatus.innerHTML = "non-donor";
        }
      }
    });
  });
  const checkNums = event => {
    const liNum = document.getElementById("license-num").value;
    const liNumConfirm = document.getElementById("license-num-confirm").value;
    if (liNum !== liNumConfirm) {
      alert("License numbers do not match");
      const liNumEle = document.getElementById("license-num");
      const liNumConfirmEle = document.getElementById("license-num-confirm");
      liNumEle.style.backgroundColor = "lightcoral";
      liNumConfirmEle.style.backgroundColor = "lightcoral";
    }
    else {
      alert("License nums match!");
    }
  }

  let count = 0;
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    count++;
    submitButton.innerHTML = count;
    checkNums();
  });
});
  // ** Phase 2: Add focus and blur events to form inputs **


  // ** Phase 3: Check that license numbers match **


  // ** Phase 4: Update submit button click count **
