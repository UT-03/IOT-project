import React from 'react';
import { Button, Form } from 'react-bootstrap';
import FormLayout from './FormLayout';

const AddPostForm = () => {
    return (
        <FormLayout>
            <h1 className='display-6'>Add a new post</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Body</Form.Label>
                    <Form.Control type="text" as='textarea' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Post
                </Button>
            </Form>
        </FormLayout>
    );
};

export default AddPostForm;