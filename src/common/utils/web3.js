const Web3 = require('web3')
const provider = typeof window.web3 === 'undefined' ? new Web3.providers.HttpProvider('http://localhost:8845') : window.web3.currentProvider

const web3 = new Web3(provider)
export default web3