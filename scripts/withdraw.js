const ethers = require("ethers");
require("dotenv").config();

async function main() {
  const url = process.env.GOERLI_URL;

  const ABICode = [
    {
      inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    { stateMutability: "payable", type: "receive" },
  ];

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(
    "0x85EaD5aBAf3cdaD4Ff574228fC76Ec6e158A8C20",
    ABICode,
    wallet
  );

  let response = await contract.withdraw(ethers.utils.parseEther("0.1"));
  console.log(response);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
