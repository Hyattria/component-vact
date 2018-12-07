
const fs = require('fs-extra');
const path = require('path');
const components = require('./get-components');
const dir = path.join(__dirname, '../es');
const themepath = path.join('../../../', 'theme-default', 'lib')

components.excludesComponent().forEach(component => {
  destEntryFile(component, 'index.js')
})

function destEntryFile(component, filename) {
  // const deps = analyzeDependencies(component)
  const esEntry = path.join(dir, component, `style/${filename}`);
  const libEntry = path.join(__dirname, '../lib', component, `style/${filename}`);

  let esContent = '';
  let libContent = '';

  const styleEntry = path.join(__dirname, '../theme-default/lib', component)

  if (oncheckFileExits(styleEntry)) {
    esContent = `import '${themepath}/${component}.css';`;
    libContent = `require('${themepath}/${component}.css');`;
  }

  if (components.includesWeui.indexOf(component) !== -1) {
    esContent += `\n import 'weui';`
    libContent += `\n require('weui');`
  }
  if (components.includesSwiper.indexOf(component) !== -1) {
    esContent += `\n import 'swiper/dist/css/swiper.css';`
    libContent += `\n require('swiper/dist/css/swiper.css')`
  }
  if (components.includesAnimated.indexOf(component) !== -1) {
    esContent += `\n import '${themepath}/common/animate.css';`
    libContent = `require('${themepath}/common/animate.css');`;
  }

  fs.outputFileSync(esEntry, esContent);
  fs.outputFileSync(libEntry, libContent);
}

function analyzeDependencies (component) {
  const _path = path.resolve(dir, component)

  if (fs.existsSync(_path)) {
    const cdirs = fs.readdirSync(_path)
    return cdirs.map(dir => dir.replace('.js', '.css'))
  }
  return []
}

function oncheckFileExits($path) {
  return fs.existsSync($path + '.css')
}