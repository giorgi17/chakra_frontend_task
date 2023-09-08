import { Flex, Box, Text } from '@chakra-ui/react';
import CardItem from '../components/CardItem';
import ComputerIcon from '../assets/icons/ComputerIcon';
import WidgetIcon from '../assets/icons/WidgetIcon';
import DatabaseIcon from '../assets/icons/DatabaseIcon';
import FolderPathIcon from '../assets/icons/FolderPathIcon';
import NotebookIcon from '../assets/icons/NotebookIcon';

const Dashboard = props => {
  return (
    <Box margin="1.56rem">
      <Box marginBottom="1.56rem" marginTop="3.44rem">
        <Text fontSize="1.75rem" fontWeight="medium">
          Get Started
        </Text>
        <Text color="#555555">
          Choose what you want to deploy and we’ll get it done in seconds
        </Text>
      </Box>
      <Flex
        minHeight="400px"
        justifyContent="center"
        alignItems="center"
        gap="1.25rem"
        flexWrap="wrap"
      >
        <CardItem
          title="New App"
          text="Get started on building your app! Provide the details to begin
         the creation process. Our platform will generate the structure for 
         your functional app aligned with your vision."
          buttonText="Create App"
          icon={<ComputerIcon />}
          color="#FFFEED"
        />
        <CardItem
          title="New Cluster"
          text="Set up a scalable computing environment! Create a cluster for 
          optimal performance, availability, and scalability. Handle traffic,
          respond faster, and scale effortlessly."
          buttonText="Create Cluster"
          icon={<WidgetIcon />}
          color="#FFEEED"
        />
        <CardItem
          title="New Datastore"
          text="Establish secure storage for your app's data. Create a datastore
         for managing critical information. Ensure integrity and accessibility 
         for reliable app services."
          buttonText="Create Datastore"
          icon={<DatabaseIcon />}
          color="#EDFFFA"
        />
        <CardItem
          title="Connect"
          text="Connect to your favourite Repositories wherever they are."
          buttonText="Create Cluster"
          icon={<FolderPathIcon />}
          color="#FFF6EC"
          big
        />
        <CardItem
          title="Documentation"
          text="Establish secure storage for your app's data. Create a datastore
         for managing critical information. Ensure integrity and accessibility 
         for reliable app services."
          buttonText="View Docs"
          icon={<NotebookIcon />}
          color="#F3EDFF"
        />
      </Flex>
    </Box>
  );
};

export default Dashboard;
