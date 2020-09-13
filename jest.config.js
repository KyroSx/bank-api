module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**',
    '!**/test/**',
    '!<rootDir>/src/domain/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/infra/typeorm/entities/**/*.ts',
    '!<rootDir>/src/infra/typeorm/migrations/**/*.ts',
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  preset: "ts-jest",
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
};
