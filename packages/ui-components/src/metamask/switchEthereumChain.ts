


export default async function(chainId:number,chainName:string,rpcUrls:Array<string>,library:any,Unsupported:boolean){
     
    let libraryprovider;
    if(library!==undefined){
      libraryprovider =library.provider
    }else{
      libraryprovider =window.ethereum 
    }

    const hexchainId = "0x"+chainId.toString(16);
    
    try {
        if(libraryprovider.request){
            await libraryprovider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: hexchainId }],
              });

        }
        
      } catch (switchError:any) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
              if(libraryprovider.request){
                await libraryprovider.request({
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
      if(Unsupported==true){
        window.location.reload()
      }
      
}