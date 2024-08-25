const { execSync } = require('child_process');
const { readFileSync } = require('fs');
const path = require('path');

// Run `git diff --cached --name-only` to get list of staged files
const getStagedFiles = () => {
  try {
    const result = execSync('git diff --cached --name-only', {
      encoding: 'utf8',
    });
    return result.split('\n').filter((file) => file);
  } catch (err) {
    console.error('Failed to get staged files:', err);
    process.exit(1);
  }
};

// Function to determine if files match your criteria
const shouldRunTests = (files) => {
  // Example: Run tests if any JavaScript or TypeScript files are changed
  return files.some((file) => file.endsWith('.js') || file.endsWith('.ts'));
};

const main = () => {
  const stagedFiles = getStagedFiles();
  if (shouldRunTests(stagedFiles)) {
    console.log('Changes detected, running tests...');
    execSync('npm test', { stdio: 'inherit' });
  } else {
    console.log('No relevant changes detected, skipping tests.');
  }
};

main();
