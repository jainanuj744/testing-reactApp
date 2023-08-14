import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('checking if list is detected', ()=>{
  render(<App/>);
  const listElement = screen.getAllByRole("listitem");
  // expect(listElement.length).toBe(4);
  expect(listElement).toHaveLength(4);
})

test('check if Hello is there on UI',()=>{
  render(<App/>)
  const ele = screen.getByText("Hello");
  expect(ele).toBeInTheDocument();
})

test('check if Hello is there on UI using attribute',()=>{
  render(<App/>)
  const attr = screen.getByTestId("testId-1");
  expect(attr).toBeInTheDocument();
})
