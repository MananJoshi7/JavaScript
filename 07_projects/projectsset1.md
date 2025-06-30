# Projects related to DOM

# Solution code

## project 1

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <a href="/" arria-current="page">Home</a>
        <a target="_blank" href="www.google.com">Google</a>
    </nav>
    <div class="canvas">
        <h1>Color Scheme Switcher</h1>
        <span class="button" id="grey"></span>
        <span class="button" id="white"></span>
        <span class="button" id="blue"></span>
        <span class="button" id="yellow"></span>
        <h2>Try Clicking on one of the colors above <span>to change the background color of the page!</span></h2>
    </div>
    <script src="script.js"></script>
</body>
</html>

```

``` CSS
body{
    background-color: #fff;
    padding: 10px 30px;
    border-radius: 8px;
    color: #212121;
    text-decoration: none;
    border: 2px solid black;
}
.button{
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
#grey{
    background-color: grey;
}
#white{
    background-color: white;
}
#blue{
    background-color: blue;
}
#yellow{
    background-color: yellow;
}

```

``` Javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach( (button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target)
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
            default:
                break;
        }
    })
} )

```