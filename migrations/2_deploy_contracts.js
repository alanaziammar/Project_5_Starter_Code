const StarNotary = artifacts.require("StarNotary");

module.exports = async function(deployer) {
  await deployer.deploy(StarNotary, "StarToken", "STR")
  const erc721 = await StarNotary.deployed()
};
