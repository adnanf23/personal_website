const scriptURL = 'https://script.google.com/macros/s/AKfycbwSrg3ewtMbmjIZ3oIPnOiNxYOBs9XDvER22pb4OJAXQyin5fpAfsabdhzlNtEOLeUG/exec'
  const form = document.forms['data']
  const alertForm = document.getElementById("alertForm")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then((response) => {
        console.log('Success!', response)
        form.reset()
        alertForm.style.display = "block"
      })
      .catch(error => console.error('Error!', error.message))
  })