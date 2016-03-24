# Host-To-Port
Convert a hostname `/[a-z0-9\-\.]{3,255}/` into the smallest possible unique port.

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
// If a hostname requires a port that is outside of the range it will throw.
// This only happens if port range is extremely narrow and the hostname is too long.

toPort("abc.com", [10000, 20000]); //-> 10307
toPort("abc.com", [10000, 10306]); //-> Error!
```

# How it works
Each valid hostname character is summed as number from 1-39 ordered by most frequently used in the english language.
To ensure that repeats don't occur the values are offset based on the length of the hostname.

# Limitations
This will fail with hostnames longer than 509 characters (all 9's which are the highest value).
Fortunately the maximum hostname length is 255.

If the port-range is extremely small this becomes more of a concern.

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
