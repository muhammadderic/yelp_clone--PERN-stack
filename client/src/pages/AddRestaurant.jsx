import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

function AddRestaurant() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState(0);

  const handleSubmit = async () => {
    const newRestaurant = {
      name, location,
      price_range: parseInt(priceRange)
    }
    await fetch("http://localhost:5000/api/v1/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRestaurant)
    })
  }

  return (
    <Container p={4}>
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Add Restaurant</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Restaurant Name</FormLabel>
                <Input required type="text" placeholder="input restaurant name" onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Location</FormLabel>
                <Input required type="text" placeholder="input restaurant's location" onChange={(e) => setLocation(e.target.value)} />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Price Range</FormLabel>
                <Select required placeholder='Select option' onChange={(e) => setPriceRange(e.target.value)}>
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                  <option value="5">$$$$$</option>
                </Select>
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
