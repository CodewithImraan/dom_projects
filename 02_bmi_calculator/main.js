const form = document.querySelector("form")

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const height = parseInt(document.querySelector('.height').value)
    const weight = parseInt(document.querySelector('.weight').value)
    const results = document.querySelector('#result')

    if (height == '' || height < 0 || isNaN(height)) {

        results.innerHTML = "please enter valid height"

    } else if (weight == '' || weight < 0 || isNaN(weight)) {

        results.innerHTML = "please enter valid weight"

    } else {
        const bmiOp = (weight / ((height * height) / 10000)).toFixed(2)

        results.innerHTML = `${bmiOp}`

        if (bmiOp <= 18.5) {
            results.innerHTML = `you're underweight ${bmiOp}`
        }
        if (bmiOp > 18.5 && bmiOp < 24.9) {
            results.innerHTML = `Damn You're Healthy ${bmiOp}`;
            results.style.color = 'green';

        }
        if (bmiOp > 25.0 && bmiOp < 29.9) {
            results.innerHTML = `you're OverWeight ${bmiOp}`
        }
        if (bmiOp >= 30.0) {
            results.innerHTML = `You need to work on your Body ${bmiOp}`;
        }

    }
})