# tilfeldigeord v1.0.5

Randomly generate Norwegian strings consisting of one adjective and one noun.
For generating usernames or automatically generated reference codes for norwegian users.

## Install

`npm i tilfeldigeord`

## Usage

Generate random adjective/noun combinations on the fly!

```javascript
const tilfeldig = require("tilfeldigeord");

tilfeldig.getTilfeldigOrd() > "kollektiv fødselsdag";
tilfeldig.getTilfeldigOrd() > "flott hus";
tilfeldig.getTilfeldigOrd() > "verdifull dialog";
```
