import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import ChainId from './ChainId'
import Account from './Account'
import Balance from './Balance.tsx'
import { AppBar, Badge } from '@material-ui/core'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { makeStyles } from '@material-ui/core/styles';


export default function Header(account) {
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
				
			},
			
		wallet: {
			
			
			
		},
			
		margin: {
		
		margin: theme.spacing(2),
		
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
	  
	  <div style={{ margin: '1rem', textAlign: 'right', float: 'right' }}>{active ? <Badge color="primary" className={classes.margin} variant="dot"><AccountBalanceWalletIcon fontSize='large' /></Badge> : error ? <Badge color="error" className={classes.margin} variant="dot"><AccountBalanceWalletIcon fontSize='large' /></Badge> : <AccountBalanceWalletIcon fontSize='large' />}</div>
      <div className={classes.wallet}>
	  {active ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Connect your wallet'}</div>
	 </AppBar> 
    </>
  )
}

