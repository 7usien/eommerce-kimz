import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
  const error = useRouteError();
  return (
    <Container>
      <div className='notFound'>
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>

        <Button variant='link'>Go Back</Button>
      </div>
    </Container>
  );
};

export default Errorpage;
