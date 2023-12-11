const btn = document.querySelector(".btn");

function hi() {
  const data = document.querySelector(".todo").value;
  fetch("http://localhost:3100/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task: data }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json(); // Use res.text() to handle a text response
    })
    .then(
      (text) => console.log(text), // Log the text response
      (error) => console.error("Error:", error)
    );

  setTimeout(show, 1000);
}

async function show() {
  const response = await fetch("http://localhost:3100/list");
  const movies = await response.json();

  const todoListContainer = document.getElementById("todoList");
  todoListContainer.innerHTML = "";

  movies.forEach(function (todoText) {
    const listItem = document.createElement("li");
    listItem.textContent = todoText.task;
    todoListContainer.appendChild(listItem);
  });
}

btn.addEventListener("click", hi);
