import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  Button,
} from '@chakra-ui/react';

const SideDrawer = ({ onClose, isOpen, btnRef, content }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="full"
    >
      <DrawerContent marginTop="120px">
        <DrawerBody padding={0}>{content}</DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
