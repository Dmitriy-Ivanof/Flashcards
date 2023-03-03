const answerForm = document.querySelector('.answerForm');
const divOne = document.querySelector('.newText');

let count = 0;

answerForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  count += 1;
  if (count > 5) {
    window.location.assign('/topic');
  }

  const { text, method, action } = event.target;
  console.log(text.value);
  console.log(count);
  const zapros = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: text.value,
      countNum: count,
    }),
  });

  const newZapros = await zapros.json();
  divOne.innerHTML = newZapros;
});
