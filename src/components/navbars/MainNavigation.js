import { useRef } from 'react';
import {
  Box,
  Flex,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import MainNavigationitem from './MainNavigationItem';
import MenuWidgetIcon from '../../assets/icons/MenuWidgetIcon';
import DatabaseIcon from '../../assets/icons/DatabaseIcon';
import WidgetIcon from '../../assets/icons/WidgetIcon';
import SideDrawer from './SideDrawer';
import MobileMenu from './MobileMenu';

const MainNavigation = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const btnRef = useRef();

  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');

  return (
    <Box width="100%" backgroundColor="#F6F6F6">
      <Flex
        justifyContent={isLargerThan500 ? 'space-between' : 'center'}
        pt="12px"
        pb="12px"
        pl={[4, 4, 20]}
        pr={[4, 4, 20]}
        maxWidth="16in"
        margin="auto"
      >
        <Flex
          gap={[5, 10, 10]}
          justifyContent={isLargerThan500 ? 'flex-start' : 'space-between'}
          width="100%"
        >
          <MainNavigationitem text="Web Apps" Icon={MenuWidgetIcon} active />
          <MainNavigationitem text="Datastore" Icon={DatabaseIcon} />
          <MainNavigationitem text="Clusters" Icon={WidgetIcon} />
          {!isLargerThan500 && (
            <HamburgerIcon
              transform={isOpen ? 'rotate(45deg)' : ''}
              transition="transform 0.3s ease-in-out"
              w={5}
              h={5}
              onClick={onToggle}
              ref={btnRef}
            />
          )}
        </Flex>

        <SideDrawer
          isOpen={isOpen}
          onClose={onClose}
          btnRef={btnRef}
          content={<MobileMenu />}
        />

        {isLargerThan500 && (
          <Flex justifyContent="space-between" alignItems="center" gap={5}>
            <Text fontSize="sm">
              {isLargerThan992 ? 'Documentation' : 'Docs'}
            </Text>
            <Text fontSize="sm">Support</Text>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default MainNavigation;
