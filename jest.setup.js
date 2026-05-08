/* global require, global */

// This ensures ESLint knows these are global variables
const { TextEncoder, TextDecoder } = require('util')

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
