const { execSync } = require('child_process');
execSync('npm test', { stdio: 'inherit' });
