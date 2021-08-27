import React, { useState } from 'react';

export default function useWallet(){

    const [openWallets, setOpenWallets] = useState(false);
    return {openWallets, setOpenWallets};

}