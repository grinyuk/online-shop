import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = () => {
    const {device} = useContext(Context);

    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    className="p-3 w-auto"
                    key={brand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                >{brand.name}</Card>
            )}
        </Row>
    );
};

export default observer(BrandBar);