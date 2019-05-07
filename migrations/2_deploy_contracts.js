const Pool = artifacts.require("Pool");
const SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(Pool);
  deployer.deploy(SimpleStorage);
};
