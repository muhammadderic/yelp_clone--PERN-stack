import { Button, Container, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/v1/${id}`, {
      method: "DELETE",
    })
    window.location.reload();
  }

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
                <Tr key={restaurant.restaurant_id}>
                  <Td>{restaurant.name}</Td>
                  <Td>{restaurant.location}</Td>
                  <Td>{"$".repeat(restaurant.price_range)}</Td>
                  <Td >Good</Td>
                  <Td >
                    <Button
                      variant="solid">
                      <NavLink to={`/${restaurant.restaurant_id}/update`}>
                        Edit
                      </NavLink>
                    </Button>
                  </Td>
                  <Td >
                    <Button
                      variant="solid"
                      onClick={() => handleDelete(restaurant.restaurant_id)}>
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
