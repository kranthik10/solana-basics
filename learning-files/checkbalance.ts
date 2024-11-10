import {Connection, PublicKey,LAMPORTS_PER_SOL} from '@solana/web3.js';


const connection = new Connection('https://api.devnet.solana.com');

const givenPublicKey = process.argv[2]; // argument passed from the command line

if(!givenPublicKey){
    console.log('Please provide a public key');
    process.exit(1);
}
const publicKey = new PublicKey(givenPublicKey);

const  balance = await connection.getBalance(publicKey);

const balanceInSol = balance / LAMPORTS_PER_SOL;



console.log(balanceInSol);


// This code is similar to the previous code, but here we are taking the public key as an argument from the command line.
// The public key is passed as an argument when running the script.
// To run this script, you can use the following command:

// npx esrun checkbalance.ts <public_key> 
// For example:
// npx esrun checkbalance.ts 673iusLW4YHx3e1LajQhzrZUMczUFoKN8BctkkFsCE9d
// This will give you the balance of the provided public key in SOL.
// If you don't provide a public key, it will prompt you to provide one.
// This script is useful for checking the balance of any public key on the Solana blockchain.
