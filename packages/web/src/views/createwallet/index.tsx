import { FC } from 'react'
import MpcType from '@monorepo/ui-components/src/components/mpctype'

const CreatWallet: FC = props => {
  return (
    <div className="flex flex-col-reverse lg:flex-row  xl:mx-40 2xl:mx-80 ">
      <div className="felx flex-col w-full xl:w-2/3 p-10">
        <h1 className="font-semibold text-3xl mb-4 pb-4  border-b ">Create new Wallet</h1>
        <div className="mb-4 pb-4  border-b  px-4">
          <h3 className="font-semibold text-xl pb-4 ">Owners and confirmations</h3>
          <p>Set the owner wallets of your wallet and how many need to confirm to execute a valid transaction.</p>
        </div>
        <div className="mb-4 pb-4  border-b  px-4">
          <div className=" bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            
            
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              MpcType
              </label>
              <MpcType></MpcType>
              
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Admin1
              </label>
              <input
                type="text"
                readOnly
                disabled
                id="name"
                name="name"
                value={"cxxxx"}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Admin2
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
              
            </div>
            <div className="flex flex-row">
                <div className="w-1/2">
                 x
                </div>
                <div className="flex flex-col lg:flex-row w-1/2  gap-8 2xl:gap-4">
                <button className="text-white mx-2 bg-indigo-500 border-0 py-2 px-2 lg:px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create MPC</button>
                <button className="mx-2 border-2 py-2 lg:px-6 focus:outline-none rounded text-lg  hover:bg-gray-300  border-gray-400  text-gray-600">Reset</button>
                    
                </div>

            </div>
            
            
            
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-50">2</div>
    </div>
  )
}

export default CreatWallet
