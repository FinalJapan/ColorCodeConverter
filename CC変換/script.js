function convertColor() {
    let colorName = document.getElementById("colorInput").value.trim();
  
    // 日本語から英語に変換
    const colorDictionary = {
      "赤": "red", "青": "blue", "緑": "green", "黄": "yellow",
      "黒": "black", "白": "white", "空色": "skyblue",
      "ピンク": "pink", "オレンジ": "orange", "紫": "purple",
      "灰色": "gray", "茶色": "brown", "金": "gold", "銀": "silver"
    };
    if (colorDictionary[colorName]) {
      colorName = colorDictionary[colorName];
    }
  
    const preview = document.getElementById("previewBox");
  
    // 仮の要素で色を取得
    const tempDiv = document.createElement("div");
    tempDiv.style.color = colorName;
    document.body.appendChild(tempDiv);
    const rgb = getComputedStyle(tempDiv).color;
    document.body.removeChild(tempDiv);
  
    // 色が無効だった場合
    const rgbValues = rgb.match(/\d+/g);
    if (!rgbValues) {
      alert("色が認識できませんでした。例：赤, 青, red, blue");
      return;
    }
  
    // RGB → HEXに変換
    const hex = "#" + rgbValues.map(v => {
      return parseInt(v).toString(16).padStart(2, '0');
    }).join("");
  
    // プレビュー表示＋Hex表示
    preview.style.backgroundColor = colorName;
    document.getElementById("hexOutput").textContent = hex;
  }
  
  // 🔁 Enterキーで変換を実行できるようにする
document.getElementById("colorInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      convertColor();
    }
  });
  
  function copyHex() {
    const hex = document.getElementById("hexOutput").textContent;
    navigator.clipboard.writeText(hex).then(() => {
      alert("コピーしました！👉 " + hex);
    });
  }
  
