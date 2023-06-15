function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.dataset.id);
  event.target.style.cursor = "move";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var dropArea = document.querySelector(".drop-area");
  var data = event.dataTransfer.getData("text");
  console.log(data);

  // if (dropArea.children[0].className == "empty") {
  //   dropArea.innerHTML = `<ul class="product-list" ondrop="drop(event)" ondragover="allowDrop(event)" ></ul>`;
  // }
  // dropArea.querySelector("ul").appendChild(document.getElementById(data));
}

//https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/drag_event
