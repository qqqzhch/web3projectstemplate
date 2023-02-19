import React,{FC} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import metamask from '../../assets/icon/metamask.svg'
import WalletModal from '../walletModal'
import { useState, useEffect, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { When } from 'react-if';

const connectwallet:FC<{}> = ({}) => {
let [isOpen, setIsOpen] = useState(false)
let [walletName,setwalletName]=useState<string>("")
const {chainId, account } = useWeb3React()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  useEffect(() => {
    
     let name =   localStorage.getItem('walletIsConnectedTo')
     if(name!=null){
        setwalletName(name)
     }
  }, [])

  console.log('account',account)
    return (
        <>
        <When condition={account!==undefined}>
        
            <div  className="py-1 text-xl ">
              <img width={20} src={metamask}></img>
            </div>
            <div className="flex  flex-col  text-sm mx-4">
              <div className="">{walletName} @ Goerli</div>
              <div className="">{account}</div>
            </div>
            <div className="py-1">
              <FontAwesomeIcon icon={icon({ name: 'chevron-down', style: 'solid' })} />
            </div>
        </When>
        <When condition={account===undefined}>
            
            <button onClick={openModal} type="button" className="px-6 py-2 font-semibold border rounded border-gray-800 text-gray-800">Connect wallet</button>

        </When>
        
        
        <WalletModal closeModal={closeModal} isOpen={isOpen}></WalletModal>
        </>
    );
};

export default connectwallet;