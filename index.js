
const counterHrs = document.getElementById("counterHrs");
const counterMint = document.getElementById("counterMint");
const counterSec = document.getElementById("counterSec");

displayTime();

setInterval(displayTime, 1000)

function displayTime(){
    const date = new Date();
    const Hrs = date.getHours();
    const Mint = date.getMinutes();
    const Sec = date.getSeconds();

    counterHrs.innerHTML = Timeshow(Hrs);
    counterMint.innerHTML = Timeshow(Mint);
    counterSec.innerHTML = Timeshow(Sec);

}

function Timeshow(time){
    return `${time}`.padStart(2, 0)
}