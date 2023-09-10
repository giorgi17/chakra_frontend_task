import { useRef } from 'react';
import {
  Flex,
  Text,
  Button,
  Avatar,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useMediaQuery } from '@chakra-ui/react';
import Credits from '../../components/Credits';
import Search from '../Search';
import GridIcon from '../../assets/icons/GridIcon';
import BellIcon from '../../assets/icons/BellIcon';
import SideDrawer from './SideDrawer';
import ProfileMenu from './ProfileMenu';
import Dropdown from './Dropdown';
import AddNewMenu from './AddNewMenu';

const Header = () => {
  const {
    isOpen: isAddNewOpen,
    onClose: onAddNewClose,
    onToggle: onAddNewToggle,
  } = useDisclosure();
  const {
    isOpen: isProfileOpen,
    onToggle: onProfileToggle,
    onClose: onProfileClose,
  } = useDisclosure();
  const btnRef = useRef();

  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Box width="100%" border="1px" borderColor="gray.200">
      <Flex
        height="4.375rem"
        margin="auto"
        maxWidth="16in"
        pl={[4, 4, 12]}
        pr={[4, 4, 12]}
        justifyContent="space-between"
        alignItems="center"
        gap="50px"
      >
        <Text float="left" fontSize="1.375rem" fontWeight="semibold">
          CloudNation.
        </Text>

        {isLargerThan600 && <Search />}

        <Flex
          justifyContent="center"
          alignItems="center"
          gap="1.25rem"
          position="relative"
        >
          {isLargerThan992 && (
            <>
              <Credits currentCredits={350} />

              <Button
                onClick={onAddNewToggle}
                bgColor="button.100"
                color="white"
                borderRadius="0.625rem"
                pt={2.5}
                pb={2.5}
                pl={3.5}
                pr={3.5}
                rightIcon={<ChevronDownIcon w={4} h={4} />}
              >
                <Text fontSize="sm">Add New</Text>
              </Button>

              {isLargerThan600 && (
                <Dropdown
                  isOpen={isAddNewOpen}
                  onClose={onAddNewClose}
                  content={<AddNewMenu />}
                  width="auto"
                />
              )}
            </>
          )}

          {!isLargerThan992 && isLargerThan600 && (
            <Box>
              <GridIcon />
            </Box>
          )}

          {isLargerThan600 && <BellIcon color="gray.600" />}

          <Box>
            <Avatar
              width="2rem"
              height="2rem"
              name="user"
              cursor="pointer"
              onClick={onProfileToggle}
              ref={btnRef}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            />

            {isLargerThan600 ? (
              <Dropdown
                isOpen={isProfileOpen}
                onClose={onProfileClose}
                content={<ProfileMenu />}
                width="auto"
              />
            ) : (
              <SideDrawer
                isOpen={isProfileOpen}
                onClose={onProfileClose}
                btnRef={btnRef}
                content={<ProfileMenu />}
              />
            )}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
