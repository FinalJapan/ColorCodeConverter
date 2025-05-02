const color = "red"; // ユーザーの入力
const temp = document.createElement("div");
temp.style.color = color;
document.body.appendChild(temp);
const hex = getComputedStyle(temp).color; // rgb(255, 0, 0)
document.body.removeChild(temp);
