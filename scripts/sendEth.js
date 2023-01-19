const ethers = require("ethers");
require("dotenv").config();

async function main() {
  const url = process.env.GOERLI_URL;

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  let response = await wallet.sendTransaction({
    to: "0x85EaD5aBAf3cdaD4Ff574228fC76Ec6e158A8C20",
    value: ethers.utils.parseEther("0.3"),
  });

  console.log(response);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
