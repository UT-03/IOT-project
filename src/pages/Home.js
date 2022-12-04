import React from 'react';
import { Container } from 'react-bootstrap';
import AddPostForm from '../components/AddPostForm';
import QueryForm from '../components/QueryForm';

const Home = () => {
    return (
        <React.Fragment>
            <Container>
                <QueryForm />
                <AddPostForm />
            </Container>
        </React.Fragment>
    );
};

export default Home;