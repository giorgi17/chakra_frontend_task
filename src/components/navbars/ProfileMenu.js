import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import ProfileSettingsIcon from 'assets/icons/ProfileSettingsIcon';
import BillingIcon from 'assets/icons/BillingIcon';
import SignOutIcon from 'assets/icons/SignOutIcon';

const ProfileMenu = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Flex
      flexDirection="column"
      gap={4}
      alignItems="center"
      pt={4}
      pl={5}
      pr={5}
      pb={5}
    >
      <Text fontSize={['lg', 'lg', 'xs']} textAlign="center" cursor="pointer">
        Account
        <Text fontSize={['md', 'md', 'x-small']} color="#555555">
          prathyushk@gmail.com
        </Text>
      </Text>

      <Flex alignItems="center" justifyContent="center" gap={1}>
        {isLargerThan600 && <ProfileSettingsIcon />}
        <Text fontSize={['lg', 'lg', 'xs']} cursor="pointer">
          Settings
        </Text>
      </Flex>

      <Flex alignItems="center" justifyContent="center" gap={1}>
        {isLargerThan600 && <BillingIcon />}
        <Text fontSize={['lg', 'lg', 'xs']} cursor="pointer">
          Billing
        </Text>
      </Flex>

      <Flex alignItems="center" justifyContent="center" gap={1}>
        {isLargerThan600 && <SignOutIcon />}
        <Text fontSize={['lg', 'lg', 'xs']} cursor="pointer">
          Sign Out
        </Text>
      </Flex>

      <ColorModeSwitcher />
    </Flex>
  );
};

export default ProfileMenu;
