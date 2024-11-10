
import {Connection, clusterApiUrl,PublicKey,LAMPORTS_PER_SOL} from '@solana/web3.js'

// const connection  = new Connection(clusterApiUrl('devnet')); // making a connection to the devnet cluster
const connection = new Connection('https://api.devnet.solana.com');

const address = new PublicKey('673iusLW4YHx3e1LajQhzrZUMczUFoKN8BctkkFsCE9d');
 const balance = await connection.getBalance(address);

const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(balanceInSol);


// this code gives an idea about to make a connection to the devnet cluster and get the balance of a particular address in SOL.
// The balance is in lamports, so we need to convert it to SOL by dividing it by LAMPORTS_PER_SOL.



// if you want to test with different address, you can change the address in the code.


