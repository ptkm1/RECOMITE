import Search from './frontend/pages/admin/search';
import { AuthenticationLayer } from './infra/data/authentication';
import ModalTransferLayer from './infra/data/modalTransfer';

function App() {
  return (
    <AuthenticationLayer>
      <ModalTransferLayer>
        <Search />
      </ModalTransferLayer>
    </AuthenticationLayer>
  );
}

export default App;
