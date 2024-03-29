import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
    const {device} = useContext(Context);

    return (
        <Row>
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device} />
            )}
        </Row>
    );
};

export default observer(DeviceList);