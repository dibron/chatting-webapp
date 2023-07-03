import { Dialog, Box, styled } from "@mui/material"
import { useContext } from "react";
import Menu from './menu/Menu'
import EmptyChat from './chat/EmptyChat'
import ChatBox from "./chat/ChatBox";
import { AccountContext } from "../../context/AccountProvider";

const Component = styled(Box)`
    display:flex;

`

const LeftComponent = styled(Box)`
    min-width : 460px;
`

const RightComponent = styled(Box)`
    width : 73%;
    min-width: 300px;
    height:100%;
    border-left: 3px solid aquamarine;
`

const dialogStyle = {
    height:'96%',
    width:'100%',
    margin:'20px',
    borderRadius:'20px',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}


const ChatDialog = () => {

    const {person} = useContext(AccountContext);

    return (
        <Dialog
            open={true}
            PaperProps={{sx : dialogStyle}}
            hideBackdrop={true}
            maxWidth={'md'}
        >
        <Component>
            <LeftComponent>
                <Menu />
            </LeftComponent>
            <RightComponent>
                { Object.keys(person).length ? <ChatBox /> : <EmptyChat /> }
            </RightComponent>
        </Component>
        </Dialog>
    )
}

export default ChatDialog