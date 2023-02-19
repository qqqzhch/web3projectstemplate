import React from 'react';
import { Web3ReactProvider } from "@web3-react/core";
import {ethers} from 'ethers'
import { ToastProvider } from "react-toast-notifications";
import { PropsWithChildren } from 'react'
const getLibrary = (provider: any) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 8000; // frequency provider is polling
    return library;
  };

type webProps = {};
export  const Web3Provider = ({children}: PropsWithChildren<webProps>) => {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
        <ToastProvider autoDismiss={true} autoDismissTimeout={2000}>
          {children }
        </ToastProvider>
      </Web3ReactProvider>
    );
};

