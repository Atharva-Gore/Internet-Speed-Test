const startBtn = document.getElementById("startBtn");
const downloadSpan = document.getElementById("download");
const uploadSpan = document.getElementById("upload");
const pingSpan = document.getElementById("ping");
const loading = document.getElementById("loading");
const summaryText = document.getElementById("summaryText");

startBtn.onclick = () => {
  // Reset
  downloadSpan.textContent = "--";
  uploadSpan.textContent = "--";
  pingSpan.textContent = "--";
  summaryText.textContent = "";
  loading.style.display = "block";

  // Simulate speed test with fake values
  setTimeout(() => {
    const downloadSpeed = (Math.random() * 80 + 10).toFixed(2); // 10–90 Mbps
    const uploadSpeed = (Math.random() * 20 + 5).toFixed(2); // 5–25 Mbps
    const ping = Math.floor(Math.random() * 80) + 10; // 10–90 ms

    downloadSpan.textContent = downloadSpeed;
    uploadSpan.textContent = uploadSpeed;
    pingSpan.textContent = ping;

    loading.style.display = "none";

    let summary = "";
    if (downloadSpeed > 50 && ping < 50) {
      summary = "🚀 Excellent for 4K streaming and gaming!";
    } else if (downloadSpeed > 20) {
      summary = "✅ Good for HD streaming, video calls.";
    } else if (downloadSpeed > 5) {
      summary = "⚠️ Okay for browsing and SD video.";
    } else {
      summary = "❌ Slow connection. Try restarting router.";
    }

    summaryText.textContent = summary;
  }, 2500);
};
