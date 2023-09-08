import {
  Card,
  CardHeader,
  Heading,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';

const CardItem = ({ title, icon, text, buttonText, color, big }) => {
  return (
    <Card
      bgColor={color}
      border="1px"
      borderColor="#DDD"
      padding="1.56rem"
      minHeight="10rem"
      width={big ? '47rem' : '23rem'}
      height={big ? '23.375rem' : 'unset'}
      alignSelf="stretch"
    >
      <CardHeader padding="0">
        <Flex justifyContent="space-between">
          <Heading size="md" marginBottom="0.6rem">
            <div>{title}</div>
          </Heading>
          <div>{icon}</div>
        </Flex>

        <hr />
      </CardHeader>

      <Text
        fontSize="sm"
        textAlign="left"
        marginTop="0.6rem"
        marginBottom="4rem"
        color="#555555"
      >
        {text}
      </Text>

      <Button
        alignSelf="end"
        bgColor="button.100"
        color="white"
        position="absolute"
        bottom="1.56rem"
        borderRadius="0.625rem"
      >
        {buttonText}
      </Button>
    </Card>
  );
};

export default CardItem;
