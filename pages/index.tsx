import React, { useState } from 'react'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector'
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import Navigation from '../Components/Navigation'
import Header from '../Components/Header'
import ChainId from '../Components/ChainId'
import Wallets from '../Components/Wallets'
import Account from '../Components/Account'
import useWallet from '../Components/Hooks/useWallet';

import { useEagerConnect, useInactiveListener } from '../hooks'
import {
  injected,
  network,
  walletconnect,
  walletlink,
  ledger,
  trezor,
  lattice,
  frame,
  authereum,
  fortmatic,
  magic,
  portis,
  torus
} from '../connectors'
import { Spinner } from '../components/Spinner'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

const wallets = useWallet();



export default function() {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header {...wallets} />
      <Wallets {...wallets} />
    </Web3ReactProvider>
  )
}










