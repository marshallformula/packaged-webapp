'use strict'

require('ace-css/css/ace.css')
require('font-awesome/css/font-awesome.css')
require('./main.css')

//add index.html to dist
require('./index.html')

const Elm = require('./Main.elm')


const mountNode = document.getElementById('main')

const app = Elm.Main.embed(mountNode)