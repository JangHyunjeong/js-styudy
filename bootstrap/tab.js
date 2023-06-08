const tabContents = document.querySelectorAll(".tab-content");
const tabButtons = document.querySelectorAll(".tab-button");

// forEach 사용해서 tab구현
// tabButtons.forEach((item, idx) => {
//   item.addEventListener("click", () => {
//     tabButtons.forEach((item) => {
//       item.classList.remove("orange");
//     });
//     tabContents.forEach((item) => {
//       item.classList.remove("show");
//     });

//     item.classList.add("orange");
//     tabContents[idx].classList.add("show");
//   });
// });

// for 사용해서 tab구현
for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", () => {
    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("orange");
      tabContents[i].classList.remove("show");
    }

    tabButtons[i].classList.add("orange");
    tabContents[i].classList.add("show");
  });
}
