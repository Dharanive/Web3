import {createThirdwebClient, defineChain, getContract} from 'thirdweb';


const CLIENT_ID ="3e649a2129b82ca24c1463d42b3c7853";

export const client = createThirdwebClient({
    clientId: CLIENT_ID  as  string,
});

export const chain = defineChain(11155111);


const contarctAddress = "0x390Fab8E846cB541011F81afAaC07d58f05890f6";
const contractABI = [
    {
      "inputs": [],
      "name": "count",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decrement",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "increment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] as const;
//code for Interaction with smartContarct
  export const CONTRACT = getContract({
    client: client,
    chain: chain,
    address: contarctAddress,
    abi: contractABI,   

  });