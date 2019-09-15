
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from '../App';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

const setup = (state={})=>{
  let wrapper = shallow(<App />);
  wrapper.setState({...state})
  return wrapper;
}

test('renders loading', () => {
  let wrapper = setup({isLoadingComplete : false});
  let app = wrapper.find('[data-test="component-loading"]');
  expect(app.length).toBe(1);
});

test('renders complete', () => {
  let wrapper = setup({isLoadingComplete : true});
  let app = wrapper.find('[data-test="component-app"]');
  expect(app.length).toBe(1);
});