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

console.log(domainPubkey);




function isValidSolanaAddress(address:string) {
    try {
        // Attempt to create a PublicKey from the given address.
        // If successful, the address is valid.
        new PublicKey(address);
        return true;
    } catch (error) {
        // If an error is thrown, the address is invalid.
        return false;
    }
}




const givenPublicKey = process.argv[2]; // argument passed from the command line

if(!givenPublicKey){
    console.log('Please provide a public key');
    process.exit(1);
}


if(!isValidSolanaAddress(givenPublicKey)){
    console.log('Please provide a valid public key');
    process.exit(1);
}



const publicKey = new PublicKey(domainPubkey);

const  getBalance =  async () => {
    try{
        const balance = await connection.getBalance(publicKey);
        const balanceInSol = balance / LAMPORTS_PER_SOL 

    }
    catch(error){
        console.log('Error:', error);
    }
}



