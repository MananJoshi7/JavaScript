## Project 2 BMI Calculator

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>BMI Calculator</title>
</head>
<body>
    <div class="container">
        <h1>BMI Calculator</h1>
        <form action="">
            <p><label>Height in CM: </label><input type="text" id="height"></p>
            <p><label>Weight in KG: </label><input type="text" id="weight"></p>
            <button>Calculate</button>
            <div id="results"></div>
            <div id="weight-guide">
                <h3>BMI Weight Guide</h3>
                <p>Under Weight = Less than 18.6</p>
                <p>Normal Range = 18.6 and 24.9</p>
                <p>Overweight = Greater than 24.9</p>
            </div>
        </form>
    </div>
</body>
<script src="script.js"></script>
</html>

```


``` Javascript
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight";
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
       
    if(bmi < 18.6){
        results.innerHTML = `<span>Your BMI is ${bmi} - You are underweight`
    }
    else if(bmi < 24.9){
        results.innerHTML = `<span>Your BMI is ${bmi} - You are in the normal weight range`
    }
    else{
        results.innerHTML = `<span>Your BMI is ${bmi} - You are overweight`
    }

    }
})

```