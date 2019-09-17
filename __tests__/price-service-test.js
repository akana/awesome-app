import * as PriceService from '../services/price.service'

test('get price no error', async () => {
  //Arrange
  let vegName = 'onion';

  //Act
  let prices = await PriceService.getPrice(vegName);

  //Assert
  expect(prices.length).toBeGreaterThan(0);
});

test('get price not found', async () => {
//Arrange
let vegName = 'apple';

//Act
let prices = await PriceService.getPrice(vegName);

//Assert
expect(prices).toBeNull();
})

test('get price error format', async () => {
//Arrange
let vegName = 'orange';

//Act
let prices = await PriceService.getPrice(vegName);

//Assert
expect(prices).toBeNull();
})