import { useContext } from "react";
import { Box, styled, Typography } from "@mui/material"

import { AccountContext } from "../../context/AccountProvider";


const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;


const BoxWrapper = styled(Box)`
    background: gold;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    };
    & :last-child {
        margin: 14px 0;
        color: #4A4A4A;
    }
`;


const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <>
            <ImageContainer>
                <img src={account.picture} alt="displaypicture" />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>
            
        </>
    )
}

export default Profile;