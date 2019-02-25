# @mafra/eslint-config-standard

An ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) for [JavaScript Standard Style](http://standardjs.com/). This config is extending of [eslint-config-standard](https://github.com/standard/eslint-config-standard) and is JavaScript Standard Style for Mafra projects.

## Install

```
 npm install --save-dev @mafra/eslint-config-standard  --reg https://verdaccio.mafra.cz
```
 
## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

Add this to your `.eslintrc` file:

```
{
  "extends": "@mafra/eslint-config-standard"
}
```

## How to integrate to Mafra project

1. Add to file .npmrc
    ```
    ; Set a Mafra registry for a scoped package
    @mafra:registry=https://verdaccio.mafra.cz
    ```
    
2. Install package 
    ```
    npm install --save @mafra/eslint-config-standard
    ```