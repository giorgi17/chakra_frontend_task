import { Box, Flex, Text } from '@chakra-ui/react';
import MainNavigationitem from './MainNavigationItem';
import MenuWidgetIcon from '../../assets/icons/MenuWidgetIcon';
import DatabaseIcon from '../../assets/icons/DatabaseIcon';
import WidgetIcon from '../../assets/icons/WidgetIcon';

const MainNavigation = props => {
  return (
    <Box width="100%" backgroundColor="#F6F6F6">
      <Flex
        justifyContent="space-between"
        padding="1.25rem 5.6rem"
        maxWidth="16in"
        margin="auto"
      >
        <Flex gap="1.25rem">
          <MainNavigationitem text="Web Apps" Icon={MenuWidgetIcon} active />
          <MainNavigationitem text="Datastore" Icon={DatabaseIcon} />
          <MainNavigationitem text="Clusters" Icon={WidgetIcon} />
        </Flex>

        <Flex justifyContent="space-between" alignItems="center" gap="1.25rem">
          <Text fontSize="sm">Documentation</Text>
          <Text fontSize="sm">Support</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainNavigation;
