# Host-To-Port
Convert a hostname `/[a-z0-9\-\.]{255}/` into the smallest possible unique port.

# Installation

#### Npm
```console
npm install host-to-port
```

# Example

```javascript
var toPort = require('host-to-port');

toPort("abc.com"); //-> 10079
toPort("abcd.com"); //-> 10091

// Default port range is 10000-65535, you can set this to whatever you need.
// If a hostname requires a port that is outside of the range it will throw.
// This only happens if port range is extremely narrow and the hostname is too long.

toPort("abc.com", [100, 10000]); //-> 179
toPort("abc.com", [100, 178]); //-> Error!
```

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
