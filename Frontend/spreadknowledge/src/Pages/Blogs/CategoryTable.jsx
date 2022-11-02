import { Box, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react'
import React from 'react'
import { categories } from '../../Components/Categories/categories'

const CategoryTable = () => {
  return (
    <TableContainer w='200px'>
  <Table size='sm'>
    <Tbody>
      {
      categories.map(c=><Tr key={c}>
        <Td>{c}</Td>
      </Tr>)
      }
    </Tbody>
  </Table>
</TableContainer>
  )
}

export default CategoryTable