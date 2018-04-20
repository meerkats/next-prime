// jest.config.js
module.exports = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/vendor/",
    "/out/",
    ".next/",
    "pages/"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/.next/**",
    "!**/out/**",
    "!**/pages/**"
  ],
  coverageDirectory: "coverage"
}
