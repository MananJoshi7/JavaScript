``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: #212121; color:#fff">
    <h1>Start should change the background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="script.js"></script>
</body>
</html>

```

``` Javascript
// generate a random color

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId

const startChangingColor = () => {

    const changeBgcolor = () => {
        document.body.style.backgroundColor = randomColor();
    }

    intervalId = setInterval(changeBgcolor, 1000);
};
const stopChangingColor = () => {
    clearInterval(intervalId)
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor)

```