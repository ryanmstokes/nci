export default {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '@nuxtjs/composition-api/module': '@nuxtjs/composition-api/module/lib/entrypoint.js',
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json',
    'tsx',
    'svg'
  ],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
    '.*\\.(vue)$': 'vue-jest',
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  transformIgnorePatterns: [
    "node_modules/(?!typed-vuex)"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/nci/components/**/*.{js,vue,ts}',
    '<rootDir>/nci/storybook/**/*.{js,vue,ts}',
    '<rootDir>/nci/app/factories/**/*.{js,vue,ts}',
    '<rootDir>/pages/**/*.{js,vue,ts}',
    '<rootDir>/store/**/*.{js,vue,ts}',
    "!**/node_modules/**"
  ],
  testEnvironment: "jsdom"
}
