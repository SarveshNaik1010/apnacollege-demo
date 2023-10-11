const a = async function () {
  const obj = {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Users",
          backgroundColor: "rgb(125, 166, 255)",
          data: [5, 3, 2.5, 4],
        },
      ],
    },
  };
  const res = await fetch(
    `https://quickchart.io/chart?c=${JSON.stringify(obj)}`
  );
  const img = document.querySelector(".img");
  img.src = res.url;
};
a();

const displayWord = function (str) {
  const chatCodeA = 97;
  let n = 0;
  let word = "";
  for (let i = 0; i < str.length; i++) {
    const finalPoint = str.charCodeAt(i);
    for (let j = chatCodeA; j <= finalPoint; j++) {
      if (j == finalPoint) {
        word += String.fromCharCode(j);
        console.log(`${word}`);
      } else {
        console.log(`${word}${String.fromCharCode(j)}`);
      }
      n++;
    }
  }
  console.log(n);
};

displayWord("hello");
