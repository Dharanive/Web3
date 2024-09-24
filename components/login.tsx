'use client';

import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { chain, client } from "../utils/constants";
import { Counter } from "./counter";


const Login: React.FC =() =>{
    const account = useActiveAccount();

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
        }}>
            {account ? (
                <div style={{textAlign: "center"}}> 
                
                <ConnectButton
            client={client}
            chain={chain}
            connectModal={{
                size: "compact"
            }} 
            /> <Counter /></div>) : ( 
                <div style={{textAlign: "center"}}> 
            <ConnectButton
            client={client}
            chain={chain}
            connectModal={{
                size: "compact"
            }} 
            /> </div>)}


           

        </div>

    );
}

export default Login;