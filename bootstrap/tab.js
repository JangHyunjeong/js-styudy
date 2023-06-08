const tab = document.querySelector(".list");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

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
// for (let i = 0; i < tabButtons.length; i++) {
//   tabButtons[i].addEventListener("click", () => {
//     for (let i = 0; i < tabButtons.length; i++) {
//       tabButtons[i].classList.remove("orange");
//       tabContents[i].classList.remove("show");
//     }

//     tabButtons[i].classList.add("orange");
//     tabContents[i].classList.add("show");
//   });
// }

// 이벤트 버블링 응용하여, addEventListenr줄이기
function TabOpen(id) {
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("orange");
    tabContents[i].classList.remove("show");
  }

  tabButtons[id].classList.add("orange");
  tabContents[id].classList.add("show");
}

tab.addEventListener("click", function (e) {
  TabOpen(e.target.dataset.id);
});
