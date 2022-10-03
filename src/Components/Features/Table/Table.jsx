import "./Table.css";
 import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(Author, Country, language, link) {
  return { Author, Country, language, link};
}

const books = [
  createData()
];

function TableUsers({books}) {

  return (
    <div className="tableUsers">
      <h1 data-testid="tableUsers_headline">Books-Details-Table</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Users-Names</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Language</TableCell>
            <TableCell align="right">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((booksItem) => (
            <TableRow
              key={booksItem}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="books">
                {books.name}
              </TableCell>
              <TableCell align="left">{booksItem.author}</TableCell>
              <TableCell align="left">{booksItem.country}</TableCell>
              <TableCell align="left">{booksItem.language}</TableCell>
              <TableCell align="left">{booksItem.link}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default TableUsers;
