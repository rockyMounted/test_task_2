

let totalTitle = document.querySelector(".content-total-title")


const selectedPlan = document.querySelector(".content-select-title");

function renderSum(value) {
  totalTitle.innerHTML = `<span class="content-total-title">Total: <span class="content-total-number">$${value}<sup class="content-total-number-sup">us</sup></span></span>`;
}

function renderLicensePlan(value) {
  selectedPlan.innerHTML = `<span>Selected plan: #${value}</span>`;
}

function onUpdate() {
  let selectNum = document.getElementById('selectNum')
  selectNum.value
  var button = checkedButton();
  let res = renderSum(button.dataset.price * selectNum.value);
  renderLicensePlan(button.value)
}

function checkedButton() {
  var radios = document.getElementsByName("radioButton");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      return radios[i]
    }
  }
}



