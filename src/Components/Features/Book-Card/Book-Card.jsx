import "./Book-Card.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import booksContext from "../../../Context/BooksContext/Books-context"

function BookCard({ books }) {

  return (
    <div id="book-cardComp" className="book-card">
      <h1 className="h1_BooksCard" data-testid="bookCard">Book-Card</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title: {books.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            country: {books.country},language:{books.language} By Author:{books.author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default BookCard;
