import { FC, useEffect } from 'react'
import { useAppStore } from '../../index'


// import { useNavigate } from 'react-router-dom'

export const Counter: FC = () => {
  // const navigate = useNavigate()
  const bears = useAppStore((state)=>state.bears)
  const addBear = useAppStore((state)=>state.addBear)
  useEffect(()=>{
    addBear()
  },[addBear])
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap py-2 flex-row  justify-around  items-center ">
        <a href="/" className="   cursor-pointer sm:flex title-font font-medium items-center text-gray-900 pl-4 ">
          {/* <span className="ml-3 text-xl  lg:block">Web3auth Demo Cosmos</span> */}
          {bears}
        </a>
        <button onClick={()=>{addBear()}}>one up</button>
      </div>
    </header>
  )
}