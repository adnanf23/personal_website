const scriptURL = 'https://script.google.com/macros/s/AKfycbwSrg3ewtMbmjIZ3oIPnOiNxYOBs9XDvER22pb4OJAXQyin5fpAfsabdhzlNtEOLeUG/exec'
const form = document.forms['data']
const alertForm = document.getElementById("alertForm")
const submitButton = document.getElementById("submit")
const loadingButton = document.getElementById("loading")


  form.addEventListener('submit', e => {
    e.preventDefault()

    submitButton.style.display = "none"
    loadingButton.style.display = "block"
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then((response) => {
        console.log('Success!', response)
        form.reset()
        submitButton.style.display = "block"
        loadingButton.style.display = "none"
        alertForm.style.display = "block"

        setTimeout(function() {
          alertForm.style.display = "none";
        }, 3000);
      })
      .catch(error => console.error('Error!', error.message))
  })