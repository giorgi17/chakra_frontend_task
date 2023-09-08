import { Flex, Text, Box } from '@chakra-ui/react';

const Footer = props => {
  return (
    <Box width="100%">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="1.8rem 3.5rem"
        width="100%"
        marginTop="1.44rem"
        margin="auto"
        maxWidth="16in"
      >
        <Flex gap="1.56rem">
          <Text fontSize="sm">© CloudNation 2023</Text>
          <Text fontSize="sm">Support</Text>
          <Text fontSize="sm">Documentation</Text>
        </Flex>

        <Flex gap="1.56rem">
          <Text fontSize="sm">Privacy</Text>
          <Text fontSize="sm">Terms of Service</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
