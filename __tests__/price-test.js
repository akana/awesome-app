import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import React from 'react';
import PriceScreen from '../screens/PriceScreen';

Enzyme.configure({ adapter: new Adapter() });

const setup = (state={}, props={})=>{
  let wrapper =  shallow(<PriceScreen {...props}/>);
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
  //Arrange
  let wrapper = setup({
    item : onion
  });

  //Act
  let priceComp = wrapper.find('[data-test="component-price"]');

  //Assert
  expect(priceComp).toHaveLength(1);
});

test('renders vegetable name', () => {
  let state= {
    item : {
      ...onion,
      image : ''
    }
  }
  let wrapper = setup(state);

  let priceComp = wrapper.find('[data-test="component-veg-name"]');

  expect(priceComp.dive().text()).toBe("Onion");
});

test('renders vegetable name not available', () => {
  let state = {item : onion};
  delete state.item.name;
  let wrapper = setup(state);

  let nameComp = wrapper.find('[data-test="component-veg-name"]');

  expect(nameComp.dive().text()).toBe("Unknown name")
});

test('renders vegetable image', () => {
  let wrapper = setup({
    item : onion
  });

  let img = wrapper.find('[data-test="component-veg-img"]');

  expect(img).toBeTruthy();
});

test('renders vegetable price list', () => {
  let wrapper = setup({
    item : onion
  });

  let priceList = wrapper.find('[data-test="component-veg-item"]');
  let month = priceList.children().children('[data-test="component-veg-item-month"]');
  let price = priceList.children().children('[data-test="component-veg-item-price"]');

  expect(month.dive().text()).toBe('Oct');
  expect(price.dive().text()).toBe('10 $');
});

test('renders vegetable price not available', () => {
  let wrapper = setup({
    item : {
      ...onion,
      prices : []
    }
  });

  let priceNotAvailable = wrapper.find('[data-test="component-veg-item-not-available"]');
  
  expect(priceNotAvailable.dive().text()).toBe("Price is not available");
});