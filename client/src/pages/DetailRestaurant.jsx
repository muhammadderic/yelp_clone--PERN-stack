import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";

function DetailRestaurant() {
  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='https://picsum.photos/200'
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>Lorem, ipsum dolor.</Heading>

            <Text py='2'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque vero ullam necessitatibus.
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' colorScheme='blue'>
              Review
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}

export default DetailRestaurant;
