#!/usr/bin/env node

// workaround until https://github.com/electron-userland/electron-webpack/pull/28 is merged (or not...)
// adds support for any babel preset or plugin

const patches = [
    require('./patches/createBabelLoader'),
    require('./patches/getMatchingDevDependencies')
];

const replace = require('replace-in-file');
patches.forEach(patch => {
    try {
        replace.sync(patch);
        console.log(`[patch-babel] patched ${patch.files}`);
    } catch (error) {
        console.log('┎──────────────────────────────────────────────────────────────────');
        console.log('┃');
        console.log(`┃ Failed to patch ${patch.files}`);
        console.log('┃');
        console.log('┖──────────────────────────────────────────────────────────────────');
        console.log(error);
    }
});
