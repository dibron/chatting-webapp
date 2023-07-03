import { useContext, useState } from "react";
import { Box, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import {Chat as MessageIcon} from '@mui/icons-material';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";


const Component = styled(Box)`
    display:flex;
    height:44px;
    background: aquamarine;
    padding: 8px 16px;
    align-items: center;
`

const Wrapper = styled(Box)`
    margin-left:auto;
    & > * {
        margin-left:2px;
        padding:8px;
        color: black;
    };
    & :first-child {
        font-size:22px;
        margin-right:8px;
        margin-top:2px;
    }
`
const Image = styled('img')({
    height:'40px',
    width:'40px',
    borderRadius:'100%'
})
const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const {account} = useContext(AccountContext)
    
    const toggleDrawer = () => {
        setOpenDrawer(true);
        console.log('Hello from the other');
    }

    return (
        <>
            <Component>
                <Image src={account.picture} alt="dp" onClick={toggleDrawer} />
                <Wrapper>
                    <MessageIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
            <InfoDrawer open = {openDrawer} setOpen = {setOpenDrawer} />
        </>
    )
}

export default Header;
