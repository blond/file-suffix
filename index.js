'use strict';

const path = require('path');

/**
 * Returns basename suffix.
 *
 * @param {string} filename — the path to file or directory.
 *
 * @returns {string}
 */
module.exports = (filename) => {
    let basename = path.basename(filename);
    let dotIndex = basename.indexOf('.');

    if (dotIndex === 0) {
        basename = basename.substring(1);
        dotIndex = basename.indexOf('.');
    }

    // file.js
    if (dotIndex > 0) {
       return basename.substring(dotIndex + 1);
    }

    return '';
};
