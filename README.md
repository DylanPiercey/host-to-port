# Host-To-Port
Convert a hostname `/[a-z0-9\-\.]{3,255}/` into a valid port.

# Installation

#### Npm
```console
npm install host-to-port
```

# Example

```javascript
var toPort = require('host-to-port');

toPort("abc.com"); //-> 10307
toPort("abcd.com"); //-> 10357

// Default port range is 10000-49151, you can set this to whatever you need.
// Narrowing the range will increase the likelyhood of collisions.

toPort("abc.com", [10000, 20000]); //-> 10307
```

# Limitations
A hostname will always be converted into a same valid port.
However since the number of valid hostnames is 39^255 which JavaScript tells me is infinity there will be collisions.
For typical use I haven't found many collisions with this algorithm but they do exist and can happen.

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
