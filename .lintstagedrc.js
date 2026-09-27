module.exports = {
  // Run ESLint and Prettier on staged JavaScript/TypeScript/React files
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],

  // Run Prettier on staged JSON/CSS/Markdown files
  '*.{json,css,md}': ['prettier --write'],
};
