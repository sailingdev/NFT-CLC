const Migrations = artifacts.require("Migrations");
module.exports = function(deployer, network, accounts) {
  deployer.deploy(Migrations, {gas: 9000000});
};
