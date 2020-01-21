import { GenerateNumber } from './PinGenerator';

test('Check for unique numbers', () => {
  expect(GenerateNumber()).toBeTruthy();
});
