import { Flex, Text, Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box width="100%">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        padding={[10, 10, 14]}
        width="100%"
        marginTop="1.44rem"
        margin="auto"
        maxWidth="16in"
        gap={4}
      >
        <Flex gap={6}>
          <Text fontSize="sm">© CloudNation 2023</Text>
          <Text fontSize="sm">Support</Text>
          <Text fontSize="sm">Documentation</Text>
        </Flex>

        <Flex gap={6}>
          <Text fontSize="sm">Privacy</Text>
          <Text fontSize="sm">Terms of Service</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
