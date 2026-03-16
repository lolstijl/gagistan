const targetTimeText = "28/03/2026, 23:00"
const targetTime = new Date("Mar 28, 2026 23:00:00").getTime();

const timer = document.getElementById("liltimer");

const updateTime = () => {
    const currentTime = new Date().getTime();
    const distance = targetTime - currentTime;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor(distance % (1000*60*60*24) / (1000*60*60));
    const minutes = Math.floor(distance % (1000*60*60) / (1000*60));
    const seconds = Math.floor(distance % (1000*60) / (1000));

    document.getElementById("lildays").innerText = days.toString().padStart(2, '0');
    document.getElementById("lilhours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("lilminutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("lilseconds").innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(interval);
        timer.innerText = targetTimeText;
    }
}

const interval = setInterval(updateTime, 1000);

updateTime();