const { keccak256 } = require('js-sha3');

function hashKeccak256(input) {
  return keccak256(input);
}

module.exports = { hashKeccak256 };
