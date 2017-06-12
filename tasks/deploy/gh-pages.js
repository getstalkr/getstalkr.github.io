// GitHub Pages deployer.

// Pushes files from `dist/` to the `master` branch on GitHub.

'use strict'

const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(path.join(__dirname, '../..', 'dist'), {
  branch: 'master',
  message: `Deployed 'dev' branch to 'master' at ${new Date().toLocaleString()}`
}, console.info("Successfully deployed to 'master'"));
