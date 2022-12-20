const button = document.querySelector(".btn");
const postContainer = document.querySelector(".post-container")

button.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark-mode");
});

const x = articles.map(function (each) {
  const { title, date, length, snippet } = each;

  const formatDate = moment(date).format(`MMMM Do, YYYY`);
  // go to momentjs.com,select which type of format date you want
  // go to cdnjs.com. copy paste script code to html body above app.js
  // console.log(moment);
  // to see if its working
  // u will see// ƒ f(){return e.apply(null,arguments)}//
  return `
      <h2 class="post-title">${title}</h2>
      <span class="post-date">${formatDate}, ${length} min read</span>
      <p class="post-text">
        ${snippet}
      </p>
    </div>`;
}).join("");
console.log(x);
postContainer.innerHTML = x;
