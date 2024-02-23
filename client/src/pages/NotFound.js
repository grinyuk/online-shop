import React from 'react';
import {Alert, Container} from "react-bootstrap";

const NotFound = () => {
    return (
        <Container className="d-flex justify-content-center">
            <Alert
                className="mt-3 w-50"
                variant={"warning"}
                style={{textAlign: 'center'}}
            >
                <strong>PAGE NOT FOUND</strong>
            </Alert>
        </Container>
    );
};

export default NotFound;