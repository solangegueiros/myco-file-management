import React from "react";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "routes";

// views
import Download from "views/Download";
import Upload from "views/Upload";
import NotFound from "views/NotFound";

export default () => (
  <Switch>
    <Route exact path={ROUTES.DOWNLOAD} component={Download} />
    <Route exact path={ROUTES.UPLOAD} component={Upload} />
    <Route component={NotFound} />
  </Switch>
);
