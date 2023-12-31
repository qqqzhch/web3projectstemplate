import {FC, useCallback} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import metamask from '../../assets/icon/metamask.svg'
import WalletModal from '../walletModal'
import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { When } from 'react-if';
// import {getChainInfo} from '../../constants/chainInfo'
import AccountInfo from '../accountInfo/index'

const Connectwallet:FC = () => {
const [isOpen, setIsOpen] = useState(false)
const [walletName,setwalletName]=useState<string>("")
// const [chianName,setchianName]=useState<string>("")
const {chainId, account } = useWeb3React()

  const closeModal = useCallback(()=>{
    setIsOpen(false)

  },[setIsOpen])
  
  const openModal = useCallback(()=>{
    setIsOpen(true)

  },[setIsOpen])  

  
  useEffect(() => {
    
     const name =   localStorage.getItem('walletIsConnectedTo')
     if(name!=null){
        setwalletName(name)
      //   const ChainInfo =  getChainInfo(chainId)
      //  if(ChainInfo?.label){
      //   // setchianName(ChainInfo?.label)
      //  }
       
     }
  }, [chainId])

  
    return (
        <>
        <When condition={account!==undefined}>
           <AccountInfo>
            <div  className="py-1 text-xl ">
              <img width={20} src={metamask}></img>
            </div>
            <div className="flex  flex-col  text-sm mx-4">
              <div className="">{walletName}</div>
              <div className="">{account?.substring(0,4)}...{account?.substring(38,42)}</div>
            </div>
            <div className="py-1">
              <FontAwesomeIcon icon={icon({ name: 'chevron-down', style: 'solid' })} />
            </div>
          </AccountInfo>       
        </When>
        <When condition={account===undefined}>
            
            <button onClick={openModal} type="button" className="px-3 py-2  border rounded border-gray-800 text-gray-800 text-xs">Connect wallet</button>

        </When>
        
        
        <WalletModal closeModal={closeModal} isOpen={isOpen}></WalletModal>
        </>
    );
};

export default Connectwallet;