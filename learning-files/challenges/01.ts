// description:
//Add instructions to handle invalid wallet addresses.
//Add the script to connect to mainNet and look up some famous Solana wallets. Try toly.sol, shaq.sol or mccann.sol.


// added only for the domain name lookup
// todo need to add the code for handling invalid wallet addresses
import { Connection, PublicKey,LAMPORTS_PER_SOL} from '@solana/web3.js';


import { getDomainKeySync } from "@bonfida/spl-name-service";

const domainName = "shaq.sol";

const connection = new Connection('https://api.mainnet-beta.solana.com');


const { pubkey: domainPubkey } = getDomainKeySync(domainName);

console.log(domainPubkey.toBase58());




// const givenPublicKey = process.argv[2]; // argument passed from the command line

// if(!givenPublicKey){
//     console.log('Please provide a public key');
//     process.exit(1);
// }


 const publicKey = new PublicKey(domainPubkey);

const  balance = await connection.getBalance(publicKey);

const balanceInSol = balance / LAMPORTS_PER_SOL;

 console.log(balanceInSol);

