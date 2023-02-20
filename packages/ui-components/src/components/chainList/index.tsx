import React,{FC, useEffect,useState} from 'react';
import { Popover, Transition } from '@headlessui/react'
import { ALL_SUPPORTED_CHAIN_IDS } from '../../constants/chains'
import { getChainInfo,L1ChainInfo,L2ChainInfo } from '../../constants/chainInfo'
import { useWeb3React } from '@web3-react/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

type Props = {
    children?: React.ReactNode
  };
const ChainList:FC<Props> = ({children}) => {
  let [chains,setChains]= useState<(L1ChainInfo | L2ChainInfo)[]>();
  let [chianName,setchianName]=useState<string>("")
  const {chainId } = useWeb3React()

  useEffect(()=>{
    let data = ALL_SUPPORTED_CHAIN_IDS.map((item)=>{
      return   getChainInfo(item)
    })
    setChains(data)

  },[ALL_SUPPORTED_CHAIN_IDS,getChainInfo])

  useEffect(() => {
    
    
    if(name!=null){
       
      let ChainInfo =  getChainInfo(chainId)
      if(ChainInfo?.label){
       setchianName(ChainInfo?.label)
      }
      
    }
 }, [chainId])

    return (
     <Popover className="relative">
        <Popover.Button className="flex flex-row items-center justify-center  ">
        <div className="px-6 py-1 mx-2 font-semibold  rounded  bg-yellow-300 font-thin">{chianName}</div>
              <div>
                <FontAwesomeIcon icon={icon({ name: 'chevron-down', style: 'solid' })} />
              </div>
        </Popover.Button>
  
        <Popover.Panel className="absolute left-1/3 z-10 mt-4   max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl ">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-4 bg-white p-6 flex flex-col">
                    {chains?.map((item)=>{
                     return(
                       
                       <a
                       key={item.label}
                       
                       className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                     >
                       <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <img width={20} src={item.logoUrl}></img>
                       </div>
                       <div className="ml-4">
                         <p className="text-sm font-medium text-gray-900">
                         {item.label}
                         </p>
                         
                       </div>
                     </a>
                     )
                    })}
                  </div>
                  
                </div>
              </Popover.Panel>
      </Popover>
    );
};

export default ChainList;