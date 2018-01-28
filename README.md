# Testcafe try-out examples

This is a sample project on howto use testcafe for browser testing with a few tests and predefined npm scripts.

See [package.json](package.json) for test runners.

## Node

Install dependencies

```
npm install
```

Run default test runner

```
npm test
```

Run another test runner (see package.json _scripts_)

```
npm run test-headless
```

## Docker

Example Dockerfile is included, it can be built and executed with following commands.

```
docker build . -t testcafe-tryout
docker run testcafe-tryout
```
