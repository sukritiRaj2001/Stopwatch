var isStop = true;
var s = 0;
var min = 0;
var hr = 0;

function start() {
    console.log("starting");
    if (isStop) {
        isStop = false;
        timer();
    }
}

function timer() {
    console.log("timer");
    if (!isStop) {
        s++;
        if (s === 60) {
            s = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hr++;
        }

        document.querySelector('h1').innerHTML = 
            (hr < 10 ? "0" + hr : hr) + " : " +
            (min < 10 ? "0" + min : min) + " : " +
            (s < 10 ? "0" + s : s);

        setTimeout(timer, 1000);
    }
}

function stop() {
    console.log("stopping");
    isStop = true;
}

function reset() {
    isStop = true;
    s = 0;
    min = 0;
    hr = 0;
    document.querySelector('h1').innerHTML = "00 : 00 : 00";
}
