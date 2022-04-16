# .npmrc Registry Login Action

This action logs into NPM registries by managing a .npmrc file.

It will create one if it doesn't exist or append to an existing one.

You have the ability to login to multiple registries by using this action multiple times.

## Inputs

### `scope`

**Required** The registry scope (e.g. @acmeorg).

### `registry`

**Required** The registry domain (e.g. https://npm.pkg.github.com).

### `auth-token`

**Required** The registry auth token.

### `path`

**Optional** The directory to manage the .npmrc file in.

## Examples

```yml
uses: healthplace/npmrc-registry-login-action@v1.0
with:
  scope: '@acmeorg'
  registry: 'https://npm.pkg.github.com'
  auth-token: 'secret'
```

You can also use with `working-directory` to run in another directory:

```yml
uses: healthplace/npmrc-registry-login-action@v1.0
with:
  scope: '@acmeorg'
  registry: 'https://npm.pkg.github.com'
  auth-token: 'secret'
  path: dist
```

## Building

```sh
nvm install
ncc build index.js --license licenses.txt
```
