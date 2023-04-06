import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateRestaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(`http://localhost:5000/api/v1/${id}`)
          .then(res => res.json())
          .then(data => setRestaurant(data.restaurant));
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedRestaurant = {
        ...restaurant,
        name: restaurant.name,
        location: restaurant.location,
        price_range: parseInt(restaurant.price_range)
      }
      console.log(updatedRestaurant);
      await fetch(`http://localhost:5000/api/v1/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedRestaurant)
      })
      window.location.replace("/");
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <Container p={4}>
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Update Restaurant</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Restaurant Name</FormLabel>
                <Input required type="text" placeholder="input restaurant name" defaultValue={restaurant.name} onChange={e => restaurant["name"] = e.target.value} />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Location</FormLabel>
                <Input required type="text" placeholder="input restaurant's location" defaultValue={restaurant.location} onChange={e => restaurant["location"] = e.target.value} />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Price Range</FormLabel>
                <Select required placeholder="Select option" onChange={e => restaurant["price_range"] = e.target.value}>
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                  <option value="5">$$$$$</option>
                </Select>
              </FormControl>
              <Button width="full" mt={4} type="submit">
                Update
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default UpdateRestaurant;
