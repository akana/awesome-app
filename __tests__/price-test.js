import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import React from 'react';
import PriceScreen from '../screens/PriceScreen';

Enzyme.configure({ adapter: new Adapter() });

const setup = (state={})=>{
  let wrapper =  shallow(<PriceScreen />);
  if(state)  wrapper.setState(state);
  return wrapper;
}

const onion = {
    image : '../assets/images/onion.jpg',
    name : "Onion",
    prices : [
      {
        month : 'Oct',
        price : 10,
        Unit : "KG"
      }
    ]
}

test('renders no error', () => {
  let wrapper = setup({
    item : onion
  });
  let priceComp = wrapper.find('[data-test="component-price"]');
  expect(priceComp).toHaveLength(1);
});

test('renders vegetable name', () => {
  let wrapper = setup({
    item : {
      name : "onion",
      image : ''
    }
  });
  let priceComp = wrapper.find('[data-test="component-veg-name"]');
  expect(priceComp.dive().text()).toBe("onion");
});

test('renders vegetable name not available', () => {
  let state = {item : onion};
  delete state.item.name;
  let wrapper = setup(state);
  let nameComp = wrapper.find('[data-test="component-veg-name"]');
  expect(nameComp.dive().text()).toBe("Unknown name")
});

test('renders vegetable image', () => {

});

test('renders vegetable image not available', () => {

});

test('renders vegetable price list', () => {

});

test('renders vegetable price not available', () => {
});