const loader = require('monaco-loader')

loader().then((monaco) => {
  const div = document.getElementById('container')

  let editor = monaco.editor.create(div, {
    // line above: create an editor IN the div
    
  })
})