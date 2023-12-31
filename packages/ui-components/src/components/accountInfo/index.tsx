import React,{FC} from 'react';
import { Popover } from '@headlessui/react'
import { useWeb3React } from '@web3-react/core'

type Props = {
    children?: React.ReactNode
  };
const ChainList:FC<Props> = ({children}) => {
  const {account } = useWeb3React()
    return (
     <Popover className="relative">
        <Popover.Button className="flex flex-row items-center justify-center focus:outline-none   ">{children}</Popover.Button>
  
        <Popover.Panel className="absolute   left-2/3  md:left-1/2 z-10 mt-4    max-w-sm -translate-x-1/2 transform px-4     sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-4 bg-white p-6 flex flex-col">
                  <div className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                  {account?.substring(0,8)}...{account?.substring(30,42)}
                    
                  </div>
                  <div className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                  {account?.substring(0,8)}...{account?.substring(30,42)}
                    
                  </div>
                  </div>
                </div>
              </Popover.Panel>
      </Popover>
    );
};

export default ChainList;