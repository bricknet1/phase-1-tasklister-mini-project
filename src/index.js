document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = document.querySelector("input[type=text]").value;
      const newListItem = document.createElement('li');
      newListItem.textContent = `${text} `;
      document.querySelector('#tasks').appendChild(newListItem);
      const button = newListItem.appendChild(document.createElement('button'));
      button.textContent = ' X ';
      button.addEventListener('click', (e) => {
        e.target.parentNode.remove();
      })
      form.reset();
    })
});
