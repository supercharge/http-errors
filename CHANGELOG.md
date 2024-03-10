# Changelog


## [3.0.0](https://github.com/supercharge/http-errors/compare/v2.1.0...v3.0.0) - 2024-03-xx

### Updated
- bump dependencies

### Removed
- removed JS doc annotations to avoid duplications with TypeScript

### Breaking Changes
- require Node.js v20
- this package migrated to ESM


## [2.1.0](https://github.com/supercharge/http-errors/compare/v2.0.0...v2.1.0) - 2024-03-10

### Updated
- bump dependencies
- `isHttpError`: accepts any argument type


## [2.0.0](https://github.com/supercharge/http-errors/compare/v1.1.0...v2.0.0) - 2022-11-17

### Updated
- bump dependencies
- update error creation to new fluent methods from `@supercharge/errors`
- use `@supercharge/eslint-config-typescript` instead of `standard-with-typescript`

### Breaking Changes
- require Node.js v16, drop support for Node.js v12 and v14


## [1.1.0](https://github.com/supercharge/http-errors/compare/v1.0.0...v1.1.0) - 2021-12-08

### Added
- add static `HttpError.isHttpError(error)` method determining whether the given `error` is an `HttpError` instance

### Updated
- bump dependencies
- use UVU and c8 for testing instead of tap


## 1.0.0 - 2020-07-22

### Added
- `1.0.0` release 🚀 🎉
