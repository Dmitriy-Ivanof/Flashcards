const number = document.querySelector(".wasd");
const newDiv = document.querySelector("#die-container");
// console.log(number);
number.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { sides, method, action } = e.target;
  // console.log(sides.value, method, action);

  const zapros = await fetch(action, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      num: sides.value,
    }),
  });

  const newZapros = await zapros.text();
  // const newZapros = await zapros.json();

  // newDiv.firstChild?.remove();
  // newDiv.insertAdjacentHTML("beforeend", newZapros);

  newDiv.innerHTML = newZapros;

  // PSEUDO-код:
  // 1 - перехватить событие отправки формы
  // 2 - предотвратить действие по умолчанию для этого события
  // 3 - отправить AJAX-сообщение на сервер
  // 4 - когда сообщение AJAX готово, отображаем новый бросок кубика
});
