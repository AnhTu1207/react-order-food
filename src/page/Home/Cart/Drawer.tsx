import { SwipeableDrawer } from '@material-ui/core'
import { BoxCartItem } from 'components/Box/BoxCartItem';
import { CustomDivider, DrawerContentWrapper } from 'components/Container/MainPage/styles'
import {FC} from 'react'
import { CustomCartIcon } from './styles';
import { CartItemsData } from 'assets';
interface IProps{
    open: boolean;
    onClose: () => void;
    onOpen: ()=> void;
}

const Drawer :FC<IProps> = ({open, onClose,onOpen}: IProps) =>{
    return (
        <div>
            <SwipeableDrawer
            anchor={"right"}
            open={open}
            onClose={onClose}
            onOpen={onOpen}
            >
            <DrawerContentWrapper>
                <CustomCartIcon/>
                <CustomDivider/>
                {CartItemsData.map((item,index)=>(
            <BoxCartItem key={index} cartItem={item} />
            ))}
            </DrawerContentWrapper>
            </SwipeableDrawer>
        </div>
    )
}

export default Drawer