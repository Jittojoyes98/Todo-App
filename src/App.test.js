import { render } from '@testing-library/react';
import App from './App';

test("test for h1",()=>{
  const { getByText }=render(<App/>);
  const h1=getByText(/Hii Here/)
  expect(h1).toHaveTextContent("Hii Here")
})
