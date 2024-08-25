import { execSync } from 'child_process';
execSync('npm test', { stdio: 'inherit' });
