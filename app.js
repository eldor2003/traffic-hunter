if (document.querySelector(".reklamaSwiper")) {
  const promotionSwiper = new Swiper(".reklamaSwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 2,
        // centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        slideToClickedSlide: true,
      },
      1200: {
        slidesPerView: 3,
        // centeredSlides: true,
        spaceBetween: 40,
        loop: false,
        grabCursor: true,
        slideToClickedSlide: true,
      },
    },
  });
}
if (document.querySelector(".promotionSwiper")) {
  const promotionSwiper = new Swiper(".promotionSwiper", {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 70,
    loop: true,
    grabCursor: true,
    slideToClickedSlide: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 70,
        loop: true,
        grabCursor: true,
        slideToClickedSlide: true,
      },
    },
  });
}

// Modal ishlash mexanizmi
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");

if (modal && modalImage && closeModal) {
  document.querySelectorAll(".view-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const imgSrc = this.previousElementSibling.src;
      modalImage.src = imgSrc;
      modal.classList.remove("hidden", "flex");
      modal.classList.add("flex");
    });
  });

  closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}

window.addEventListener("DOMContentLoaded", function () {
  const logContainer = document.createElement("div");
  logContainer.style.position = "fixed";
  logContainer.style.bottom = "10px";
  logContainer.style.left = "10px";
  logContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  logContainer.style.color = "white";
  logContainer.style.padding = "10px";
  logContainer.style.zIndex = "9999";
  logContainer.style.fontSize = "14px";
  logContainer.style.borderRadius = "5px";
  logContainer.id = "debug-log";
  document.body.appendChild(logContainer);

  function addLog(message) {
    const logElement = document.createElement("div");
    logElement.textContent = message;
    logContainer.appendChild(logElement);
  }

  addLog("Sahifa to'liq yuklandi");
  addLog("Oyna kengligi: " + window.innerWidth);
});

// Dinamik font o'lchami va chiziq qalinligi funksiyalari
function getFontSize() {
  return window.innerWidth <= 768
    ? "50px"
    : window.innerWidth <= 1400
    ? "50px"
    : "70px";
}

function getStrokeWidth() {
  return window.innerWidth <= 768 ? 20 : window.innerWidth <= 1546 ? 20 : 30;
}
if (document.querySelector("#result_chart1")) {
  var resultOptions1 = {
    series: [80],
    width: 350,
    chart: { type: "radialBar" },
    plotOptions: {
      radialBar: {
        hollow: { size: "68%", background: "transparent" },
        track: { background: "#161423", strokeWidth: "100%", margin: 0 },
        dataLabels: {
          show: true,
          value: {
            fontSize: getFontSize(),
            fontWeight: "800",
            fontFamily: "Gilroy",
            color: "#fff",
            offsetY: 0,
          },
        },
      },
    },
    stroke: { lineCap: "round", width: getStrokeWidth() },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "radial",
        shadeIntensity: 1,
        gradientToColors: ["#FF8831"],
        inverseColors: false,
        stops: [0, 100],
      },
      colors: ["#E26009"],
    },
    labels: [""],
  };
  var resultChart1 = new ApexCharts(
    document.querySelector("#result_chart1"),
    resultOptions1
  );
  resultChart1.render();
}

if (document.querySelector("#result_chart2")) {
  var resultOptions2 = {
    series: [54],
    width: 350, // Kenglik parametri qo'shildi
    chart: { type: "radialBar" },
    plotOptions: {
      radialBar: {
        hollow: { size: "68%", background: "transparent" },
        track: { background: "#161423", strokeWidth: "100%", margin: 0 },
        dataLabels: {
          show: true,
          value: {
            fontSize: getFontSize(),
            fontWeight: "800",
            fontFamily: "Gilroy",
            color: "#fff",
            offsetY: 0,
          },
        },
      },
    },
    stroke: { lineCap: "round", width: getStrokeWidth() },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "radial",
        shadeIntensity: 1,
        gradientToColors: ["#FF8831"],
        inverseColors: false,
        stops: [0, 100],
      },
      colors: ["#E26009"],
    },
    labels: [""],
  };
  var resultChart2 = new ApexCharts(
    document.querySelector("#result_chart2"),
    resultOptions2
  );
  resultChart2.render();
}

// Oyna hajmi o'zgarganda yangilash
window.addEventListener("resize", function () {
  if (typeof resultChart1 !== "undefined") {
    resultChart1.updateOptions({
      plotOptions: {
        radialBar: {
          dataLabels: { value: { fontSize: getFontSize() } },
        },
      },
      stroke: { width: getStrokeWidth() },
    });
  }
  if (typeof resultChart2 !== "undefined") {
    resultChart2.updateOptions({
      plotOptions: {
        radialBar: {
          dataLabels: { value: { fontSize: getFontSize() } },
        },
      },
      stroke: { width: getStrokeWidth() },
    });
  }
});

// ==================== //
var chartDom = document.getElementById("seo_chart");
var seo_chart = echarts.init(chartDom);

// Random qiymatlarni generatsiya qiluvchi funksiya
function generateRandomData(points, min, max) {
  return Array.from(
    { length: points },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

// Grafik konfiguratsiyasi
var option = {
  tooltip: {
    trigger: "axis",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    textStyle: { color: "#000" },
    borderWidth: 1,
  },
  legend: {
    data: ["Graph 1", "Graph 2", "Graph 3", "Graph 4"],
    top: "5%",
    textStyle: { color: "#3D3D3D" },
  },
  grid: {
    left: "10%",
    right: "10%",
    bottom: "15%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [
      "01/02",
      "02/02",
      "03/02",
      "04/02",
      "05/02",
      "06/02",
      "07/02",
      "08/02",
      "09/02",
      "10/02",
      "11/02",
      "12/02",
      "13/02",
      "14/02",
      "15/02",
      "16/02",
      "17/02",
      "18/02",
      "19/02",
      "20/02",
    ],
    axisLine: { lineStyle: { color: "#3D3D3D" } },
    axisLabel: {
      align: "center",
      interval: 0,
    },
    splitLine: {
      show: true,
      lineStyle: { color: "#3D3D3D", width: 0.785 },
    },
  },
  yAxis: {
    type: "value",
    axisLine: { lineStyle: { color: "#3D3D3D" } },
    axisLabel: {
      formatter: function (value) {
        return value;
      },
    },
    splitLine: {
      show: false, // Gorizontal chiziqlar olib tashlandi
    },
    min: 0, // Y o'qi kamida -50
    max: 100,
  },
  series: [
    {
      name: "Graph 1",
      type: "line",
      smooth: true,
      data: generateRandomData(20, 0, 100), // Tasodifiy qiymatlar
      lineStyle: { color: "#FD8806", width: 2.354 },
      areaStyle: { color: "rgba(253, 136, 6, 0.2)" },
    },
    {
      name: "Graph 2",
      type: "line",
      smooth: true,
      data: generateRandomData(20, 0, 100), // Tasodifiy qiymatlar
      lineStyle: { color: "#C5200C", width: 2.354 },
      areaStyle: { color: "rgba(197, 32, 12, 0.2)" },
    },
    {
      name: "Graph 3",
      type: "line",
      smooth: true,
      data: generateRandomData(20, 0, 100), // Tasodifiy qiymatlar
      lineStyle: { color: "#FF8743", width: 2.354 },
      areaStyle: { color: "rgba(255, 135, 67, 0.2)" },
    },
    {
      name: "Graph 4",
      type: "line",
      smooth: true,
      data: generateRandomData(20, 0, 100), // Tasodifiy qiymatlar
      lineStyle: { color: "#DB3031", width: 2.354 },
      areaStyle: { color: "rgba(219, 48, 49, 0.2)" },
    },
  ],
};

// Grafikni yuklash
seo_chart.setOption(option);
