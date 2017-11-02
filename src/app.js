document.addEventListener('DOMContentLoaded', event => {
  const element = (selector) => {
    return document.querySelector(selector)
  }

  const isSubmit = event => event.ctrlKey && event.keyCode === 13

  const runFile = (event) => {
    event.preventDefault()
    console.log('>>')
  }

  const onKeyDown = (event) => {
    if (isSubmit(event)) {
      return runFile(event)
    }
  }

  element('#execFile').addEventListener('click', runFile)
  element('#editor').addEventListener('keydown', onKeyDown)
})
