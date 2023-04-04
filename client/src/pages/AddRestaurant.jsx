import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";

function AddRestaurant() {
  return (
    <Container p={4}>
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Add Restaurant</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl>
                <FormLabel>Restaurant Name</FormLabel>
                <Input type="text" placeholder="input restaurant name" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Location</FormLabel>
                <Input type="text" placeholder="input restaurant's location" />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Price Range</FormLabel>
                <NumberInput defaultValue={5} min={1} max={5}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Button width="full" mt={4} type="submit">
                Add
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default AddRestaurant;
