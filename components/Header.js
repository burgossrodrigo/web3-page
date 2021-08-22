import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import ChainId from './ChainId'
import Account from './Account'
import Balance from './Balance.tsx'
import { AppBar, Badge } from '@material-ui/core'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { makeStyles } from '@material-ui/core/styles';


export default function Header() {
  const { active, error } = useWeb3React()
  
const useStyle = makeStyles((theme) => ({
		
		root: {
			
			[theme.breakpoints.only('xs')]:{
				
				display: 'flex',
				flexDirection: 'row',
				width: '100%'
				
			},
			
			[theme.breakpoints.between('sm', 'xl')]:{
				
				width: '50vw',
				display: 'flex',
				flexDirection: 'column'
				
			}
			
		}
		
	}));

	const classes = useStyle();	
	
	 /* <ChainId />
        <Account />
        <Balance /> */

  return (
    <>
    <AppBar style={{display: 'flex', flexDirection: 'row'}}>
	  <div style={{ margin: '1rem', textAlign: 'right', float: 'right' }}>{active ? <AccountBalanceWalletIcon fontSize='large' /> : error ? <AccountBalanceWalletIcon fontSize='large' /> : <AccountBalanceWalletIcon fontSize='large' />}</div>
      
	 </AppBar> 
    </>
  )
}

