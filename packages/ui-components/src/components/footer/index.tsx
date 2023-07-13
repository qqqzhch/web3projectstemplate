import logo from '../../assets/logo.svg'
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'
import discord from '../../assets/icon/discord.svg'



export  const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
              <img src={logo} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"/>
            
            <span className="ml-3 text-xl">web3projectstemplate </span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 web3projectstemplate 
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
            web3projectstemplate 
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
            
            <img width={16} src={discord}></img>
            
            </a>
            <a className="ml-3 text-gray-500">
            
            <img width={16} src={twitter}></img>
            
            </a>
            <a className="ml-3 text-gray-500">
            
            <img width={16} src={facebook}></img>
            
            </a>
            
          </span>
        </div>
      </footer>
    );
};

