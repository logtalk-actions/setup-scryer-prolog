const core = require('@actions/core')
const {installScryerProlog} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const version = core.getInput('scryer-prolog-version', {required: true})

  console.log(`##[group]Installing Scryer Prolog ${version}`)
  await installScryerProlog(version)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform == 'win32')
    throw new Error(
      '@logtalk-actions/setup-scryer-prolog does not support Windows at this time'
    )
}
