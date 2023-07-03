import {AppBar, styled, Box, Toolbar} from '@mui/material';
import { useContext } from 'react';
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';
import { AccountContext } from '../context/AccountProvider';

const Component = styled(Box)`
    height : 110vh;
    background-color : aquamarine;

`
const Header = styled(AppBar)`
    height : 150px;
    background-color : #FFC95F;
    box-shadow : none;
`

const LoginHeader = styled(AppBar)`
    height : 300px;
    background-color : #FFC95F;
    box-shadow : none;
`


const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
            <Component>
            {
                account ? <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDialog /> 
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar>

                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
                
            }
                 
            </Component>
    )
}

export default Messenger;