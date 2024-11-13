export default {
  // '*.tsx': (stagedFiles) => [`eslint --fix .`]
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix']
  // '*.js': (stagedFiles) => [`eslint .`, `prettier --write ${stagedFiles.join(' ')}`],
}
