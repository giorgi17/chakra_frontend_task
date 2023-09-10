import { Flex, Text } from '@chakra-ui/react';
import CreditsIcon from 'assets/icons/CreditsIcon';

const Credits = ({ currentCredits }) => {
  return (
    <Flex
      backgroundColor="#F6E4FF"
      pt={[2.5, 2.5, 2]}
      pb={[2.5, 2.5, 2]}
      pl={[4, 4, 3.5]}
      pr={[4, 4, 3.5]}
      borderRadius="0.625rem"
      justifyContent="center"
      alignItems="center"
      gap={[2, 2, 2.5]}
    >
      <Flex alignItems="center" gap={1}>
        <CreditsIcon />

        <Text
          fontSize={['1.35rem', '1.35rem', '1.125rem']}
          color="button.100"
          fontWeight="semibold"
          lineHeight="normal"
        >
          {currentCredits}
        </Text>
      </Flex>

      <Text
        fontSize={['xs', 'xs', 'x-small']}
        color="button.100"
        fontWeight="semibold"
        lineHeight="0.68rem"
        width={['42px', '42px', '35px']}
      >
        Credits Left
      </Text>
    </Flex>
  );
};

export default Credits;
