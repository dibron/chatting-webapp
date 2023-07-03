import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';


function App() {
  
  const clientId='583925851199-ev52fi4nu0ookdk7j251t3b33dpp2c4b.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
    
  );
}

export default App;
