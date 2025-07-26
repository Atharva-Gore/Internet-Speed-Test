const startBtn = document.getElementById("startBtn");
const downloadSpan = document.getElementById("download");
const uploadSpan = document.getElementById("upload");
const pingSpan = document.getElementById("ping");

startBtn.onclick = () => {
  const st = new Speedtest();
  
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
    startBtn.disabled = false;
    startBtn.textContent = "Start Test";
  };

  startBtn.disabled = true;
  startBtn.textContent = "Testing...";

  st.start();
};
