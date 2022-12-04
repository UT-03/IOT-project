import React from 'react';
import { Col, Row } from 'react-bootstrap';

const FormLayout = ({ children }) => {
    return (
        <Row className="mb-5 justify-content-center">
            <Col xs={12} lg={6} className="p-5 pt-3"
                style={{
                    backgroundColor: '#e9e9ed',
                    borderRadius: 10
                }}
            >
                {children}
            </Col>
        </Row>
    );
};

export default FormLayout;