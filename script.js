const startBtn = document.getElementById("startBtn");
const downloadSpan = document.getElementById("download");
const uploadSpan = document.getElementById("upload");
const pingSpan = document.getElementById("ping");
const loading = document.getElementById("loading");
const summaryText = document.getElementById("summaryText");

startBtn.onclick = () => {
  const st = new Speedtest();

  // Reset previous results
  downloadSpan.textContent = "--";
  uploadSpan.textContent = "--";
  pingSpan.textContent = "--";
  summaryText.textContent = "";
  loading.style.display = "block";

  st.onupdate = data => {
    if (data.download !== undefined) {
      downloadSpan.textContent = (data.download / 1e6).toFixed(2);
    }
    if (data.upload !== undefined) {
      uploadSpan.textContent = (data.upload / 1e6).toFixed(2);
    }
    if (data.ping !== undefined) {
      pingSpan.textContent = data.ping.toFixed(0);
    }
  };

  st.onend = () => {
    loading.style.display = "none";

    const download = parseFloat(downloadSpan.textContent);
    const ping = parseFloat(pingSpan.textContent);

    let summary = "";

    if (isNaN(download) || isNaN(ping)) {
      summary = "Could not determine connection quality.";
    } else if (download > 50 && ping < 50) {
      summary = "🚀 Excellent for 4K streaming and gaming!";
    } else if (download > 20) {
      summary = "✅ Good for HD streaming, video calls, browsing.";
    } else if (download > 5) {
      summary = "⚠️ Okay for basic browsing, may buffer on video.";
    } else {
      summary = "❌ Slow connection. Try restarting your router.";
    }

    summaryText.textContent = summary;
  };

  st.start();
};
