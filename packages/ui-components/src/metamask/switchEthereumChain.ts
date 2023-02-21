export default async function(chainId:number,chainName:string,rpcUrls:Array<string>){
    let hexchainId = "0x"+chainId.toString(16);
    
    try {
        if(window.ethereum.request){
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: hexchainId }],
              });

        }
        
      } catch (switchError:any) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
              if(window.ethereum.request){
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                      {
                        chainId: hexchainId,
                        chainName: chainName,
                        rpcUrls: rpcUrls /* ... */,
                      },
                    ],
                  });

              }
            
          } catch (addError) {
            // handle "add" error
          }
        }
        // handle other "switch" errors
      }
}