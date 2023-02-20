import React,{FC} from 'react';
import { Popover, Transition } from '@headlessui/react'
import { useWeb3React } from '@web3-react/core'

type Props = {
    children?: React.ReactNode
  };
const ChainList:FC<Props> = ({children}) => {
  const {account } = useWeb3React()
    return (
     <Popover className="relative">
        <Popover.Button className="flex flex-row items-center justify-center  ">{children}</Popover.Button>
  
        <Popover.Panel className="absolute   left-2/3  md:left-1/2 z-10 mt-4    max-w-sm -translate-x-1/2 transform px-4     sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-4 bg-white p-6 flex flex-col">
                  <div className=" p-4">
                  {account?.substring(0,8)}...{account?.substring(30,42)}
                    
                  </div>
                  </div>
                </div>
              </Popover.Panel>
      </Popover>
    );
};

export default ChainList;