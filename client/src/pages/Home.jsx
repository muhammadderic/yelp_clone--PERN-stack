import { Button, Container, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:5000/api/v1/")
          .then(res => res.json())
          .then(data => setRestaurants(data.restaurants));
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <Container maxW='container.md'>
      <Flex justify='center'>
        <TableContainer>
          <Table variant='simple' size="sm" >
            <TableCaption
              placement="top">All Restaurants</TableCaption>
            <Thead>
              <Tr>
                <Th>Restaurant Name</Th>
                <Th>Location</Th>
                <Th>Price Range</Th>
                <Th>Ratings</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {restaurants.map(restaurant => (
                <Tr key={restaurant.id}>
                  <Td>{restaurant.name}</Td>
                  <Td>{restaurant.location}</Td>
                  <Td isNumeric>{restaurant.price_range}</Td>
                  <Td >Good</Td>
                  <Td >
                    <Button variant="solid">
                      Edit
                    </Button>
                  </Td>
                  <Td >
                    <Button variant="solid">
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Container >
  );
}

export default Home;
