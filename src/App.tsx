import Search from './frontend/pages/admin/search';
import { AuthenticationLayer } from './infra/data/authentication';
import ModalTransferLayer from './infra/data/modalTransfer';
import HomeAdmin from './frontend/pages/admin/home';
import React from 'react';

function App() {
  return (
    <AuthenticationLayer>
      <ModalTransferLayer>
        <HomeAdmin />
      </ModalTransferLayer>
    </AuthenticationLayer>
  );
}

export default App;
