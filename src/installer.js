const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installScryerProlog}

/**
 * Install Scryer Prolog.
 *
 * @param {string} version
 */
async function installScryerProlog(version) {
  if (process.platform == 'darwin') {
    await exec(path.join(__dirname, 'install-scryer-prolog-darwin'), [version])
  } else if (process.platform == 'linux') {
    await exec(path.join(__dirname, 'install-scryer-prolog-ubuntu'), [version])
  } else if (process.platform == 'win32') {
    await exec(path.join(__dirname, 'install-scryer-prolog-windows'), [version])
  }
}
