const core = require('@actions/core');
const fs = require('fs');
const path = require('path');

try {
  const scope = core.getInput('scope');
  const registry = core.getInput('registry');
  const authToken = core.getInput('auth-token');
  const inputPath = core.getInput('path');

  const npmrcPath = path.resolve(process.cwd(), inputPath, '.npmrc');

  console.log(`Writing to ${npmrcPath}`);

  fs.appendFileSync(npmrcPath, `\n${scope}:registry=${registry}`);
  fs.appendFileSync(npmrcPath, `\n${registry.replace(/^http(?:s)?:/, '')}/:_authToken=${authToken}`);

  console.info(`Succesfully wrote to ${npmrcPath}`);
} catch (error) {
  core.setFailed(error.message);
}
