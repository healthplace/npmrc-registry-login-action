const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const path = require('path');

try {
  const scope = core.getInput('scope');
  const registry = core.getInput('registry');
  const authToken = core.getInput('auth-token');
  const workingDirectory = core.getInput('working-directory', { required: false });

  const directory = workingDirectory || process.cwd();

  console.log('Writing to .npmrc');

  fs.appendFileSync(path.join(directory, '.npmrc'), `\n${scope}:registry=${registry}`);
  fs.appendFileSync(path.join(directory, '.npmrc'), `\n${registry.replace(/^http(?:s)?:/, '')}?:_authToken=${authToken}`);

  console.info('Succesfully wrote to .npmrc');
} catch (error) {
  core.setFailed(error.message);
}
