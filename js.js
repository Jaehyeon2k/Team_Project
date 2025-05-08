
// "대구관광 지도" 제목 클릭 시 이벤트 처리
const title = document.getElementById('title') || document.getElementById('startTitle');
if (title) {
  title.addEventListener('click', function () {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'flex';

    setTimeout(function () {
      document.getElementById('loadingScreen').style.display = 'none';
      document.getElementById('touristMapScreen').style.display = 'flex';
    }, 2000);
  });
}
const northeasternregion = [
  {
    src: "동화사.jpg",
    caption: "동화사",
   caption2: " 동화사는 대구광역시 동구 팔공산에 위치한 유서 깊은 사찰로,\n"+
            "통일신라 흥덕왕 7년(832년)에 심지왕사가 중창하였습니다.\n"+
            "겨울에도 오동나무 꽃이 피었다는 전설에서 '동화사(桐華寺)'라는 이름이 유래되었으며, 대한불교조계종 제9교구 본사로서 한국 불교의 중심지 중 하나입니다. ",
   mapLink: "https://www.google.com/maps?q=동화사+대구"
  },
  {
    src: "도동 촉백나무.jpg",
    caption: "도동측백나무숲",
    caption2: "대구 도동 측백나무 숲은 대구광역시 동구 도동 산180번지에 위치한 천연기념물 제1호로,\n"+  
              "약 700여 그루의 측백나무가 절벽의 바위틈에 자생하는 희귀한 군락지입니다.\n"+
              "이 숲은 측백나무의 남방 한계선을 보여주는 식물학적 가치와 함께, 약 500년 이상의 역사를 지닌 생태문화유산으로 보존되고 있습니다 .",
    mapLink: "https://www.google.com/maps?q=도동측백나무숲"
  },
  {
    src: "하중도.webp",
    caption: "하중도",
    caption2: "대구 북구 노곡동에 위치한 금호강 하중도는 퇴적물로 형성된 약 22만 ㎡ 규모의 섬으로, 과거 침수지였으나 생태공원으로 탈바꿈하여 시민들의 휴식처로 사랑받고 있습니다 .\n"+
              "이곳은 봄에는 유채꽃과 청보리, 가을에는 코스모스와 억새가 장관을 이루며, ‘금호꽃섬’이라는 이름으로도 알려져 있습니다 .",
      mapLink: "https://www.google.com/maps?q=하중도+대구"
  },
  {
    src: "갓바위.jpg",
    caption: "갓바위",
    caption2: "팔공산 남쪽 능선에 위치한 통일신라 시대의 석불좌상으로, 머리에 갓 모양의 자연석을 얹은 독특한 형태로 인해 '갓바위'라 불립니다.\n"+
              "갓바위 석불은 통일신라 9세기 전후에 조성된 불상으로, 당시 불교의 민간 확산과 신앙 조형물의 지방 전파 양상을 보여주는 중요한 역사유물입니다.",
   mapLink: "https://www.google.com/maps?q=갓바위+팔공산"
  },
];
const JungguDistrict = [
  {
    src: " 약령시 박물관.JPG",
    caption: "약령시 박물관",
    caption2: "대구약령시한의약박물관은 350여 년의 전통을 지닌 대구 약령시의 역사와 한의약 문화를 보존하고 체험할 수 있는 전문 박물관입니다.\n"+
              "3층 역사전시실에서는 약령시의 유래와 발전 과정을 다양한 시각 자료로 소개하며, 2층 체험실에서는 한방 족욕, 한방 비누 만들기 등 다양한 체험 프로그램을 제공합니다. ",
     mapLink: "https://www.google.com/maps?q=약령시+박물관+대구"
  },
  {
    src: "동성로.jfif",
    caption: "동성로",
    caption2: "동성로는 대구광역시 중구에 위치한 대표적인 중심 상업지구로, 1907년 대구읍성의 동쪽 성벽이 철거된 자리에 형성된 거리입니다. \n"+
              "현재는 다양한 상점, 음식점, 문화 시설이 밀집해 있어 대구의 쇼핑과 문화의 중심지로 자리매김하고 있습니다.",
 mapLink: "https://www.google.com/maps?q=동성로+대구"
  },
  {
    src: "경삼감영 공원.jfif",
    caption: "경삼감영 공원",
    caption2: "경상감영공원은 조선시대 경상도 관찰사가 집무하던 경상감영 터에 조성된 역사공원으로, 선화당과 징청각 등 주요 건물이 복원되어 있습니다.\n"+
              "현재는 사적 제538호로 지정되어 대구 도심 속에서 역사와 휴식을 함께 즐길 수 있는 장소로 사랑받고 있습니다.",
   mapLink: "https://www.google.com/maps?q=경상감영공원+대구"
  },
  {
    src: "2.28 중앙공원.jpg",
    caption: "2.28 중앙공원",
    caption2: "2·28기념중앙공원은 1960년 대구에서 발생한 2·28 학생 민주운동을 기념하기 위해 조성된 도심 공원으로, 민주주의의 상징적 공간입니다.\n"+
              "동성로 중심에 위치하여 시민들의 휴식처이자 다양한 문화행사가 열리는 복합문화공간으로 활용되고 있습니다.", 
   mapLink: "https://www.google.com/maps?q=2.28+중앙공원+대구"
  },

];

function loadRegion(regionKey) {
  const regionMap = {
    southwesternregion,
    northeasternregion,
    JungguDistrict 
  };
  const regionData = regionMap[regionKey];
  const container = document.getElementById("regionContainer");
  const title = document.getElementById("regionTitle");

  container.innerHTML = "";
  if (!regionData) return;

  title.textContent = {
    southwesternregion: "동남/서남권 관광지",
    northeasternregion: "동북권 관광지",
    JungguDistrict: "중구권 관광지"
  }[regionKey] || "관광지 상세";

  regionData.forEach(item => {
    const div = document.createElement("div");
    div.className = "example-item";
    div.innerHTML = `
      <img src="${item.src}" alt="${item.caption}">
      <p>&lt;${item.caption}&gt;</p>
      <p class="example-description">${item.caption2}</p>
    `;
    container.appendChild(div);
  });

  showScreen("touristDetailScreen");
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  const target = document.getElementById(id);
  if (target) target.style.display = 'flex';
}

document.addEventListener("DOMContentLoaded", () => {
  showScreen('startScreen');

  document.querySelectorAll('.tourist-item').forEach(item => {
    item.addEventListener('click', () => {
      const regionKey = item.getAttribute('data-region');
      loadRegion(regionKey);
    });
  });

  document.querySelectorAll('.back-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const backId = btn.getAttribute('data-back');
      showScreen(backId);
    });
  });
});
