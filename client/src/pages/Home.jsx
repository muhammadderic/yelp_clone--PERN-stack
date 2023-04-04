import { Container, Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

function Home() {
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
              <Tr>
                <Td>Restaurant</Td>
                <Td>City</Td>
                <Td isNumeric>2</Td>
                <Td >Good</Td>
                <Td >Edit</Td>
                <Td >Delete</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Container >
  );
}

export default Home;
