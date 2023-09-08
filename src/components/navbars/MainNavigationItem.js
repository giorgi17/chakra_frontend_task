import { Flex, Text } from '@chakra-ui/react';

const MainNavigation = ({ Icon, text, active }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    gap="0.40rem"
    cursor="pointer"
  >
    <Icon active={active} />
    <Text color={active ? 'button.100' : ''} fontWeight="medium">
      {text}
    </Text>
  </Flex>
);

export default MainNavigation;
