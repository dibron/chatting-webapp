import { useContext } from 'react';
import {styled, Dialog, Box, Typography, List, ListItem} from '@mui/material';
import {GoogleLogin} from '@react-oauth/google';
import { AccountContext } from '../../context/AccountProvider';
import { qrCodeImage } from '../../constants/data';
import jwt_decode from 'jwt-decode';
import { addUser } from '../../service/api';


const Component = styled(Box)`
    display:flex;
`

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
    min-width:460px;
`
const QRCode = styled('img')(
{
    height:'400px',
    width:'400px',
    margin: '50px 0 0 50px',
}
)

const Title = styled(Typography)`
    font-size: 40px;
    color: black;
    font-weight: 300;

`

const dialogStyle = {
    height:'96%',
    marginTop :'12%',
    width:'60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 20px;
        line-height: 28px;
        color: Grey;
    }
`

const LoginDialog = () => {

    const {setAccount} = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
        
    }

    const OnLoginError = (res) => {
        console.log('Login Failed', res)
    }

    return (
        <Dialog
            open={true}
            PaperProps={{sx : dialogStyle}}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>Using KGPChat</Title>
                    <StyledList>
                        <ListItem>Open KGPChat On your Computer</ListItem>
                        <ListItem>Login to your KGPChat Account</ListItem>
                    </StyledList>
                </Container>
                <Box style={{position:'relative'}} >
                    <QRCode src={qrCodeImage} alt='qr code' />
                    <Box style={{position:'absolute', top:'50%', transform: 'translateX(25%)'}}>
                        <GoogleLogin 
                            onSuccess={onLoginSuccess}
                            onError={OnLoginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
        
    )
}

export default LoginDialog;