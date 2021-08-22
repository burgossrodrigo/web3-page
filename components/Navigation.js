
import styles from '../styles/Home.module.css';

export default function Navigation() {
	
	  const [openWallet, setOpenWallet] = useState(false);

	return(
	
	<div>
	
	<Nav>
	  <Nav.Item className={styles.nav}>
		<Nav.Link href="https://memeflate.io/">Home</Nav.Link>
	  </Nav.Item>
	  <Nav.Item>
		<Nav.Link onClick={()=>{setOpenWallet(true)}}>{ openWallet === true ? 'You are conected' : 'Connect your wallet' }</Nav.Link>
	  </Nav.Item>
	</Nav>
	
	</div>);

}
