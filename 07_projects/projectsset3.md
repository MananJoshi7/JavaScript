## Project 3 Digital Clock

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: #212121;
            color: #fff;
        }
        .center{
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        #clock{
            font-size: 40px;
            background-color: orange;
            padding: 20px 50px;
            margin-top: 10px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="center">
        <div id="banner"><span>Your Local Time</span></div>
        <div id="clock"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>

```


``` Javascript
const clock = document.getElementById('clock')
setInterval( ()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)


```
