import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyCard from "../card/MyCard";
import { nanoid } from "nanoid";
import { Library } from "../../contexts/BooksContext";
import MySpinner from "../spinner/MySpinner";

const LastestRelease = ()=>{
  const {books, loading, errors} = useContext(Library)
  return (
    <Container>
      <Row>
        {loading && <MySpinner />}
        {books && !loading && !errors &&
          books.map((book) => {
            return (
              <Col key={nanoid()} xs={12} sm={6} md={3}>
                <MyCard
                  url={book.img}
                  title={book.title}
                  text={book.category}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default LastestRelease;
