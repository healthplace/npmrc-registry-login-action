const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  const scope = core.getInput('scope');
  const registry = core.getInput('registry');
  const authToken = core.getInput('auth-token');

  console.log('Writing to .npmrc');

  fs.appendFileSync('.npmrc', `${scope}:registry=${registry}`);
  fs.appendFileSync('.npmrc', `${registry.replace(/^http(?:s)?:/, '')}?:_authToken=${authToken}`);

  console.info('Succesfully wrote to .npmrc');
} catch (error) {
  core.setFailed(error.message);
}
