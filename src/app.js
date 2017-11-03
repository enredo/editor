const loader = require('monaco-loader')
const EnredoMonacoConfig = require('./enredo.syntax-config')

document.addEventListener('DOMContentLoaded', event => {
  loader().then(monaco => {
    monaco.languages.register({
      id: 'enredo',
      aliases: ['Enredo', 'enr']
    })

    monaco.languages.setMonarchTokensProvider('enredo', EnredoMonacoConfig)

    monaco.editor.create(element('#container'), {
      language: 'enredo',
      theme: 'vs'
    })
  })

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

  element('#container').addEventListener('keydown', onKeyDown)
})
