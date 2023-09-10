import { Flex, Text, useMediaQuery } from '@chakra-ui/react';

const MainNavigation = ({ Icon, text, active = null }) => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap="0.40rem"
      cursor="pointer"
    >
      <Icon active={active} size={16} />

      {(isLargerThan992 || active || !isLargerThan600) && (
        <Text color={active ? 'button.100' : ''} fontWeight="medium">
          {text}
        </Text>
      )}
    </Flex>
  );
};

export default MainNavigation;
