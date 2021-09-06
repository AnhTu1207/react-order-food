import { SwipeableDrawer } from '@material-ui/core'
import { CustomDivider, DrawerContentWrapper } from 'components/Container/MainPage/styles'
import {FC} from 'react'
import { CustomCartIcon } from './styles';

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
            </DrawerContentWrapper>
            </SwipeableDrawer>
        </div>
    )
}

export default Drawer