
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, FC } from 'react'


import connectors from '../../web3react/connectors'
import { useToasts } from 'react-toast-notifications'
import { useWeb3React } from '@web3-react/core'
// import { accountDataType } from '../../web3react/types'
import {  useEffect, useCallback } from 'react'
import EventEmitter from '../../EventEmitter/index'



interface componentprops {
  isOpen: boolean
  closeModal: () => void
}

const WalletModal: FC<componentprops> = ({ isOpen, closeModal }) => {
  ////
  const { addToast } = useToasts()
  const {  activate} = useWeb3React()
  
  // const [accountData, setAccountData] = useState<null | accountDataType>(null)
  // const noderef= useRef()
  
  
  const connectMetaMask = useCallback(async () => {
    let status = false
    await activate(connectors.metamask, (err: Error) => {
      
      addToast(err.message, { appearance: 'error' })
      if(err.message.indexOf("UnsupportedChainId")){
        EventEmitter.emit("UnsupportedChainId",true)
      }else{
        EventEmitter.emit("UnsupportedChainId",false)
      }
      
      status = true
    })

    if (!status) {
      localStorage.setItem('walletIsConnectedTo', 'metamask')
      addToast('Connected to MetaMask', { appearance: 'success' })
      closeModal()
    }
  }, [activate, addToast,closeModal])
  const connectWalletConnect = useCallback(async () => {
    let status = false
    await activate(connectors.walletConnect, (err: Error) => {
      
      addToast(err.message, { appearance: 'error' })
      if(err.message.indexOf("UnsupportedChainId")){
        EventEmitter.emit("UnsupportedChainId",true)
      }else{
        EventEmitter.emit("UnsupportedChainId",false)
      }
      status = true
    })

    if (!status) {
      localStorage.setItem('walletIsConnectedTo', 'walletConnect')
      addToast('Connected to Wallet Connect', { appearance: 'success' })
      closeModal()
    }
  }, [activate, addToast,closeModal])
  // const disConnect = async () => {
  //   deactivate()

  //   localStorage.removeItem('walletIsConnectedTo')

  //   // setAccountData(null)
  // }
  const walletsToDisplay = [
    { id: 1, title: 'MetaMask', imgSrc: '', fn: connectMetaMask },
    { id: 3, title: 'WalletConnect', imgSrc: '', fn: connectWalletConnect }
  ]
  // connect on load
  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      
      if (localStorage.getItem('walletIsConnectedTo') === 'metamask') {
        await connectMetaMask()
      }

      if (localStorage.getItem('walletIsConnectedTo') === 'walletConnect') {
        await connectWalletConnect()
      }
    }

    connectWalletOnPageLoad()
  }, [connectMetaMask, connectWalletConnect])

  
  
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Select Wallet
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 flex flex-col items-center">
                      {walletsToDisplay.map(el => (
                      <div className="my-1 flex-1" key={el.id}>
                        <button key={el.id} onClick={el.fn} type="button" className="px-8 py-3 font-semibold border rounded border-blue-800 text-blue-800  w-48">{el.title}</button>
                      </div>
                      ))}
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default WalletModal
