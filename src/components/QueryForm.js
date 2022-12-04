import React from 'react';
import { Button, Form } from 'react-bootstrap';
import FormLayout from './FormLayout';

const QueryForm = () => {
    return (
        <FormLayout>
            <h1 className='display-6'>Query post</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Post title</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Query
                </Button>
            </Form>
        </FormLayout>
    );
};

export default QueryForm;