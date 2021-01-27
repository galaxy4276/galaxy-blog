import type {Config} from '@jest/types';
import { defaults } from 'jest-config';

const config: Config.InitialOptions = {
  testEnvironment: 'node',
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
};

export default config;