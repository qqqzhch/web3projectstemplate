import React from 'react';
import logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import metamask from '../../assets/icon/metamask.svg'

export  const Header = () => {
    return (
      <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap py-2 flex-row  justify-around  items-center ">
        <a className="hidden sm:flex title-font font-medium items-center text-gray-900 ">
        <img src={logo} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full "/>
          
          <span className="ml-3 text-xl hidden lg:block">Multichain</span>
        </a>
        <div className="flex  sm:hidden pl-2">
        <FontAwesomeIcon icon={icon({name: 'bars', style: 'solid'})} />
        </div>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center  ">
          
            <div className="pr-4 pl-4    hover:text-gray-900 border-r border-gray-400 last:border-r-0 hidden lg:block">
              <button type="button" className="px-6 py-2 font-semibold border rounded border-gray-800 text-gray-800">
              Switch to  bnb  BNB Smart Chain
              </button>
            </div>
            <div className="pr-4 pl-4   hover:text-gray-900 border-r border-gray-400 last:border-r-0 hidden md:block">
              
               <div className="py-2" >
                <FontAwesomeIcon icon={icon({name: 'bell', style: 'solid'})} />
              </div> 
                
                
            </div>
            <div className="pr-4 pl-4 flex flex-row   hover:text-gray-900 border-r border-gray-400 last:border-r-0  items-center justify-center">
              <div className="py-1 text-xl ">
              <img width={20} src={metamask}></img>
              </div>
              <div className="flex  flex-col  text-sm mx-4">
                <div className="">MetaMask @ Goerli</div>
                <div className="">0x0E65...7aA6</div>
              </div>
              <div className="py-1" >
              <FontAwesomeIcon icon={icon({name: 'chevron-down', style: 'solid'})} />
              </div>
              
              
            </div>
            <div className="flex pr-4 pl-4 items-center justify-center   hover:text-gray-900 border-r border-gray-400 last:border-r-0">
              <div className="px-6 py-1 mx-2 font-semibold  rounded  bg-yellow-300 font-thin">BSC</div>
              <div>
              <FontAwesomeIcon icon={icon({name: 'chevron-down', style: 'solid'})} />
              </div>
            </div>
            
          
          
          
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>    );
};
