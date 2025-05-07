#!/usr/bin/env node

const { hashKeccak256 } = require('./index');

const input = process.argv[2];

if (!input) {
  console.error('Uso: keccak256 <mensagem>');
  process.exit(1);
}

const hash = hashKeccak256(input);
console.log(`KECCAK-256("${input}") = ${hash}`);
