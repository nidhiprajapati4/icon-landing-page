import styled from '@emotion/styled';
import { Grid,Button } from '@mui/material'

export const IconMainGrid = styled(Grid)`
position: relative;
`;

export const ButtonGrid = styled(Grid)(
    ({right,left
    })=>({
    width:"5% ! important",
height:"100%",
backgroundColor: "grey",
position: "absolute",
padding: "150px 50px",
zIndex: "10",
display:"none",
left: `${left || "none"}`,
right: `${right || "none"}`,
})
);




export const ContentGrid = styled(Grid)`
width: 180px;
text-align: center;
position: absolute;
bottom: 32px;
color: #FFFFFF;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
margin-left: 35px;
`;

export const ViewButton = styled(Button)`
display: none;
background-color: #E32320 ! important;
color: white;
width: 153px;
height: 48px; 
border-radius: 6px;
font-weight: 700;
text-transform: none;
font-size: 16px;
`;