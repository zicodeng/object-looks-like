const objectLooksLike = require('./index');

const objectA = {
  name: 'Mike',
  age: 21,
  height: '180cm',
  weight: '60kg',
  hobbies: ['basketball', 'football', 'swimming'],
  parent: {
    name: 'Daniel',
    age: 55,
    height: '175cm',
    weight: '50kg',
    hobbies: ['reading'],
    parent: null,
  },
};

const objectB = {
  name: 'Mike',
  age: 21,
  hobbies: ['basketball', 'football', 'swimming'],
  parent: {
    name: 'Daniel',
    age: 55,
  },
};

const objectC = {
  name: 'Mike',
  age: age => age < 50, // value can be a function
  parent: {
    name: 'Daniel',
    age: 55,
  },
};

const objectD = {
  name: 'Mike',
  age: 21,
  parent: {
    name: 'Sam', // unmatching property value
    age: 55,
  },
};

const objectE = {
  name: 'Mike',
  age: 21,
  skin: 'white', // unknown property
  parent: {
    name: 'Daniel',
    age: 55,
  },
};

test('subset', () => {
  expect(objectLooksLike(objectA, objectB)).toBe(true);
});

test('property value can be a function', () => {
  expect(objectLooksLike(objectA, objectC)).toBe(true);
});

test('unmatching property value', () => {
  expect(objectLooksLike(objectA, objectD)).toBe(false);
});

test('unknown property', () => {
  expect(objectLooksLike(objectA, objectE)).toBe(false);
});

test('object looks like null', () => {
  expect(objectLooksLike(objectA, null)).toBe(false);
});

test('null looks like null', () => {
  expect(objectLooksLike(null, null)).toBe(true);
});

test('object looks like undefined', () => {
  expect(objectLooksLike(objectA, undefined)).toBe(false);
});

test('undefined looks like undefined', () => {
  expect(objectLooksLike(undefined, undefined)).toBe(true);
});

test('undefined looks like null', () => {
  expect(objectLooksLike(undefined, null)).toBe(false);
});
