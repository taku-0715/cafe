$(document).ready(function() {
    $('.drawer').drawer();
  });


  
//ボタン切り替え
let radio_btns = document.querySelectorAll(`input[type='radio'][name='type']`);

for (let target of radio_btns) {
  target.addEventListener(`change`, () => {
    document.querySelector(`#output`).innerHTML = `${target.value} : ${target.checked}`;
  });
}
//ボタン切り替え
