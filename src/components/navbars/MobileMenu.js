import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Search from '../Search';
import Credits from '../Credits';

const MobileMenu = () => {
  return (
    <Box>
      <Flex flexDirection="column" pt={4} pl={4} pr={4} pb={2.5} gap={2.5}>
        <Search />

        <Text fontSize="lg" fontWeight="medium">
          Docs
        </Text>

        <Text fontSize="lg" fontWeight="medium">
          Support
        </Text>

        <Text fontSize="lg" fontWeight="medium">
          Notifications
        </Text>
      </Flex>

      <Flex gap={4} justifyContent="center" alignItems="center">
        <Credits currentCredits={350} />

        <Button
          bgColor="button.100"
          color="white"
          borderRadius="0.625rem"
          pt={3}
          pb={3}
          pl={4}
          pr={4}
          rightIcon={<ChevronDownIcon w={5} h={5} />}
          height="45px"
        >
          <Text fontSize="lg" fontWeight="semibold" lineHeight="tall">
            Add New
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default MobileMenu;
