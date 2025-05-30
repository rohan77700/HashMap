# HashMap Implementation

## Features & Method Explanations

- **`hash(key)`**
  - Converts a string key into a numeric index using a hash function.
  - Prevents overflow by applying modulo in each iteration.

- **`set(key, value)`**
  - Inserts or updates a key-value pair.
  - Handles collisions using **separate chaining** (arrays within each bucket).
  - Resizes and rehashes all entries when load factor > 0.75.

- **`get(key)`**
  - Retrieves the value associated with a given key.
  - Returns `null` if the key doesn’t exist.

- **`has(key)`**
  - Returns `true` if the key exists in the map; `false` otherwise.

- **`remove(key)`**
  - Removes a key-value pair from the map.
  - Returns `true` if successful; otherwise `false`.

- **`length()`**
  - Returns the total number of stored key-value pairs.

- **`clear()`**
  - Removes all key-value pairs from the map.

- **`keys()`**
  - Returns an array of all stored keys.

- **`values()`**
  - Returns an array of all stored values.

- **`entries()`**
  - Returns an array of key-value pairs in `[key, value]` format.

## Output

Length: 13
Has 'carrot'? true
Get 'moon': silver
Remove 'dog': true
Length after remove: 12
Keys: [
  'moon',     'carrot',
  'frog',     'banana',
  'grape',    'ice cream',
  'jacket',   'kite',
  'elephant', 'apple',
  'hat',      'lion'
]
Values: [
  'silver', 'orange',
  'green',  'bright yellow',
  'purple', 'white',
  'blue',   'pink',
  'gray',   'crimson',
  'black',  'golden'
]
Entries: [
  [ 'moon', 'silver' ],
  [ 'carrot', 'orange' ],
  [ 'frog', 'green' ],
  [ 'banana', 'bright yellow' ],
  [ 'grape', 'purple' ],
  [ 'ice cream', 'white' ],
  [ 'jacket', 'blue' ],
  [ 'kite', 'pink' ],
  [ 'elephant', 'gray' ],
  [ 'apple', 'crimson' ],
  [ 'hat', 'black' ],
  [ 'lion', 'golden' ]
]
After clear, length: 0