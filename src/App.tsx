import React from "react";
import { Router } from "react-router-dom";
import Container from "react-bootstrap/Container";

import UploadContext from "providers/UploadProvider";
import Routes from "views/Routes";
import Header from "components/Header";
import { history } from "routes";

const App: React.FC = () => {
  return (
    <UploadContext.Provider>
      <Router history={history}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Header />
          <Container>
            <Routes />
          </Container>
        </div>
      </Router>
    </UploadContext.Provider>
  );
};

export default App;
