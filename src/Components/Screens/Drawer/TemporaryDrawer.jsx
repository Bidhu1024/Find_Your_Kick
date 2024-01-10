import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import DetailsIcon from '@mui/icons-material/Details';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function TemporaryDrawer() {
    const [state, setState] = React.useState({left: false});
const [label,setLabel] = React.useState("")
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

let DrawerData = [{
    id:1,
    text:"Home",
    link:"/dashboard",
    icon:<HomeIcon/>
},
{
    id:2,
    text:"Product Catalog",
    link:"/productCatalog",
    icon:<Inventory2Icon/>
},
{
    id:3,
    text:"Details",
    link:"/details",
    icon:<DetailsIcon/>
},
{
    id:4,
    text:"Checkout",
    link:"/checkout",
    icon:<OfflinePinIcon/>
},
{
    id:5,
    text:"Wishlist",
    link:"/wishlist",
    icon:<FavoriteBorderIcon/>
},
{
    id:6,
    text:"Profile",
    link:"/profile",
    icon:<Person2TwoToneIcon/>
},
]
const nav = useNavigate()

    return (
        <div>

            <React.Fragment key={"left"}>
                <Button onClick={toggleDrawer("left", true)}><MenuTwoToneIcon/></Button>
                <Drawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                >
                 <Typography width={"100%"} sx={{ml:"1rem"}} fontWeight={"700"} fontSize={"1.5rem"}> FYK</Typography>
                    {DrawerData.map((item,idx)=>{
                        return(
                            <>
                                <Stack padding={".4rem"} key={idx} overflowX={"auto"}  >
                               
                                <Box display="flex" padding={".1rem"} alignItems={"center"} sx={{cursor:"pointer !important"}} gap="1rem" bgcolor={item.text === label ? "red" : "transparent" } onClick={()=>{setLabel(item.text)
                                nav(item.link)
                                }}>
                                <Box>{item.icon}</Box>
                                <Box>{item.text}</Box>
                                </Box>
                                </Stack>
                            </>
                        )
                    })}
                </Drawer>
            </React.Fragment>

        </div>
    );
}