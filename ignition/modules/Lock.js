const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Token", (m) => {
  const lock = m.contract("Sree", [
    "0x30a579ED878B117C9b074143726586a09070Bf5C",
  ]);

  return { lock };
});
