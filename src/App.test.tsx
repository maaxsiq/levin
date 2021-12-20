import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  });

  it ('renders without crashing', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeDefined();
  });
});