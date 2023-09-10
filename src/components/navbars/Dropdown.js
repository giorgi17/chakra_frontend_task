import { Popover, PopoverContent, PopoverBody, Box } from '@chakra-ui/react';

const Dropdown = ({ isOpen, onClose, content, width = '155px' }) => {
  return (
    <Box position="absolute" top="50px">
      {isOpen && (
        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          closeOnBlur={false}
        >
          <PopoverContent w={width}>
            <PopoverBody padding={0}>{content}</PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </Box>
  );
};

export default Dropdown;
