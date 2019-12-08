'use strict';


// this code is used to generate a unique peer id

const crypto = require('crypto');
let id = null;


module.exports.genId = () => {
    if (!id) {
      id = crypto.randomBytes(20);
      Buffer.from('-CT0001-').copy(id, 0);
    }
    return id;
};