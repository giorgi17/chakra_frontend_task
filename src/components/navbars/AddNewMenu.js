import { Flex, Text } from '@chakra-ui/react';
import ComputerIcon from 'assets/icons/ComputerIcon';
import ServerIcon from 'assets/icons/ServerIcon';
import WidgetIcon from 'assets/icons/WidgetIcon';

const AddNewMenu = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    gap={3}
    pt={3}
    pb={5}
    pl={6}
    pr={6}
  >
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      gap={1.5}
      border="0.25px solid #DDDDDD"
      borderRadius="0.3125rem"
      pt={1.5}
      pb={1.5}
      pl={2}
      pr={2}
      width="100%"
      cursor="pointer"
    >
      <ComputerIcon size={16} /> <Text fontSize="xs">New App</Text>
    </Flex>

    <Flex
      alignItems="center"
      gap={1.5}
      border="0.25px solid #DDDDDD"
      borderRadius="0.3125rem"
      pt={1.5}
      pb={1.5}
      pl={2}
      pr={2}
      width="100%"
      cursor="pointer"
    >
      <ServerIcon size={16} />

      <Text fontSize="xs" whiteSpace="nowrap">
        New Datastore
      </Text>
    </Flex>

    <Flex
      alignItems="center"
      gap={1.5}
      border="0.25px solid #DDDDDD"
      borderRadius="0.3125rem"
      pt={1.5}
      pb={1.5}
      pl={2}
      pr={2}
      width="100%"
      cursor="pointer"
    >
      <WidgetIcon size={16} />
      <Text fontSize="xs">New Cluster</Text>
    </Flex>
  </Flex>
);

export default AddNewMenu;
