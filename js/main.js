/* ===================
   img 연결
=================== */

const hairItems = [
  {
    thumb: "images/thumb/hair1.png",
    game: "images/game/hair/hair1.png"
  },
  {
    thumb: "images/thumb/hair2.png",
    game: "images/game/hair/hair2.png"
  },
  {
    thumb: "images/thumb/hair3.png",
    game: "images/game/hair/hair3.png"
  }
];


const clothItems = [
  {
    thumb: "images/thumb/cloth1.png",
    game: "images/game/clothes/cloth1.png"
  },
  {
    thumb: "images/thumb/cloth2.png",
    game: "images/game/clothes/cloth2.png"
  },
  {
    thumb: "images/thumb/cloth3.png",
    game: "images/game/clothes/cloth3.png"
  }
];

const shoesItems = [
  {
    thumb: "images/thumb/shoes1.png",
    game: "images/game/shoes/shoes1.png"
  },
  {
    thumb: "images/thumb/shoes2.png",
    game: "images/game/shoes/shoes2.png"
  }
];

/* ===================
   아이템 클릭 입히기 기능
=================== */

function createItems(list, containerId, targetId) {

  const box = document.getElementById(containerId);
  if (!box) return;

  list.forEach(item => {

    const img = document.createElement("img");

    // ✅ 썸네일
    img.src = item.thumb;

    img.onclick = () => {

      playSFX();

      const gameSrc = item.game;
      let target;

      // ✅ 뒤머리
      if (targetId === "hair" && gameSrc.includes("hair3.png")) {

        target = document.getElementById("hair-back");
        document.getElementById("hair").src = "";

      }

      // ✅ 앞머리
      else if (targetId === "hair") {

        target = document.getElementById("hair");
        document.getElementById("hair-back").src = "";

      }

      // ✅ 옷 / 신발
      else {

        target = document.getElementById(targetId);
      }

      if (!target) return;

      // ✅ 착용 이미지 적용
      target.src = gameSrc;
    };

    box.appendChild(img);
  });
}


createItems(hairItems, "hair-items", "hair");
createItems(clothItems, "cloth-items", "cloth");
createItems(shoesItems, "shoes-items", "shoes");


/* ===================
   다시하기 버튼
=================== */

document.querySelector(".reset-btn").onclick = () => {
  document.getElementById("hair").src = "";
  document.getElementById("cloth").src = "";
  document.getElementById("shoes").src = "";
  document.getElementById("hair-back").src = "";
}

/* ===================
   저장하기 버튼
=================== */

document.querySelector(".save-btn").onclick = () => {

  const target = document.querySelector(".game-wrap");

  html2canvas(target, {
    useCORS: true
  }).then(canvas => {

    const link = document.createElement("a");

    link.download = "pink_gongdu.png"; // 파일명
    link.href = canvas.toDataURL("image/png");

    link.click();
  });
};

/* ===================
   BGM Control
=================== */

const bgm = document.getElementById("bgm");
const bgmBtn = document.getElementById("bgmBtn");

let isPlaying = false;

bgmBtn.addEventListener("click", () => {

  if (!isPlaying) {

    bgm.play();
    bgmBtn.textContent = "🔈 BGM OFF";
    isPlaying = true;

  } else {

    bgm.pause();
    bgmBtn.textContent = "🔊 BGM ON";
    isPlaying = false;

  }

});

/* ===================
   SFX (효과음)
=================== */

const sfx = document.getElementById("sfx");

function playSFX() {
  if (!sfx) return;

  sfx.currentTime = 0; // 연속 클릭 가능하게
  sfx.play();
}






