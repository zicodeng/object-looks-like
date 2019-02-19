# object-looks-like

An utility function for comparing if object A looks like object B.

`objectLooksLike` is not shallow comparing nor deep comparing object A and object B. Rather, it iterates properties of object B and checks if they are matching object A properties.

## Usage

```js
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

// Returns true because objectB is a subset of objectA.
objectLooksLike(objectA, objectB);

const objectC = {
  name: 'Mike',
  age: age => age < 50, // value can be a function
  parent: {
    name: 'Daniel',
    age: 55,
  },
};

// Returns true because objectC is a subset of objectA.
objectLooksLike(objectA, objectC);

const objectD = {
  name: 'Mike',
  age: 21,
  parent: {
    name: 'Sam', // unmatching property value
    age: 55,
  },
};

// Returns false because objectD has unmatching property value.
objectLooksLike(objectA, objectD);

const objectE = {
  name: 'Mike',
  age: 21,
  skin: 'white', // unknown property
  parent: {
    name: 'Daniel',
    age: 55,
  },
};

// Returns false because objectE has unknown property.
objectLooksLike(objectA, objectE);
```
