const loader = require('monaco-loader')
const { ipcRenderer} = require('electron')
const fs = require('fs')

loader().then((monaco) => {
  const div = document.getElementById('container')

  let editor = monaco.editor.create(div, {
    // line above: create an editor IN the div
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })

  ipcRenderer.on('open-file', (e, url) => {
    console.log(url)
    //syncronously read the file until it's read
    // read the file it's received. encoding buffer, this treats it like text
    // data is the actual contents of index.js when you drag it.
    const data = fs.readFileSync(url, 'utf-8');
    editor.setModel(monaco.editor.createModel(data, 'javascript'));
  })

  ipcRenderer.on('save-file', (e, url) => {
    console.log(url)
    const data = editor.getModel()
    let file = ''

    data._lines.forEach((line) => {
      file += line.text + '\n';
      // file += line.text + data.model._EOL;
      // 
    })

    console.log(file)

    fs.writeFileSync(url, file, 'utf-8');
  })


})