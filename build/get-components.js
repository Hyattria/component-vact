const fs = require('fs');
const path = require('path');

const common = ['index.js', 'utils', '.DS_Store']

const excludes = [
  'button-group',
  'collapse-item',
  'tabbar-item',
  'index.js', 
  'utils', 
  '.DS_Store'
]

const includesWeui = [
  'cell',
  'collapse',
  'confirm',
  'group',
  'layer',
  'modal',
  'popup',
  'tabbar',
  'xcheckbox',
  'xswitch'
]

const includesSwiper = [
  'carousel',
  'swiper'
]

const includesAnimated = [
  'confirm',
  'message',
  'modal',
  'loading'
]

const excludesComponent = () => {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../packages'));
  return dirs.filter(dirName => excludes.indexOf(dirName) === -1);
}

module.exports = {
  excludesComponent,
  includesWeui,
  includesSwiper,
  includesAnimated
}
