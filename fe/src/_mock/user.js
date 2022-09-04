import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: index + 1,
  driver: faker.name.findName(),
  passenger: faker.name.findName(),
  from: faker.address.cityName(),
  to: faker.address.cityName(),
  status: sample(['Waiting', 'Driving', 'Done']),
  cost: faker.finance.amount(1, 100, 0),
  rate: faker.finance.amount(1, 5, 0),
  datetime: new Date(),
}));

export default users;
