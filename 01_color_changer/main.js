const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function (btn) {

    btn.addEventListener('click', function (event) {

        // ********Using If statement*******

        if (event.target.id == "green") {

            body.style.backgroundColor = event.target.id

        } if (event.target.id == "yellow") {

            body.style.backgroundColor = event.target.id

        } if (event.target.id == "gray") {

            body.style.backgroundColor = event.target.id

        } if (event.target.id == "blue") {

            body.style.backgroundColor = event.target.id

        } if (event.target.id == "pink") {

            body.style.backgroundColor = event.target.id

        }


        // ***************Using Switch case*************
        switch (event) {
            case event: event.target.id == '',
                body.style.backgroundColor = event.target.id

                break;


        }
    })

})
