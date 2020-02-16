import React from "react";
import { Form } from "react-bootstrap";
import UploadContext, { EPROVIDER_TYPE } from "providers/UploadProvider";

export default () => (
  <UploadContext.Consumer>
    {({ actions: { setProvider }, state: { provider } }) => (
      <Form className="mb-3">
        <Form.Check
          custom
          name="provider"
          type="radio"
          id="provider-swarm"
          label={"Swarm"}
          value={EPROVIDER_TYPE.SWARM}
          checked={provider === EPROVIDER_TYPE.SWARM}
          onChange={() => setProvider(EPROVIDER_TYPE.SWARM)}
        />
        <Form.Check
          custom
          name="provider"
          type="radio"
          id="provider-ipfs"
          label={"IPFS"}
          value={EPROVIDER_TYPE.IPFS}
          checked={provider === EPROVIDER_TYPE.IPFS}
          onChange={() => setProvider(EPROVIDER_TYPE.IPFS)}
        />
      </Form>      
    )}
  </UploadContext.Consumer>
);
