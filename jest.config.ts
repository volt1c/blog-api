const Configuration = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.spec.(t|j)s'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
}

export default Configuration
