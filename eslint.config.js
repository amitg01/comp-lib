const config = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 0,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
  },
};

export default config;
