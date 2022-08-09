// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';

import { MacaikiLogin } from '@macaiki/macaiki/login';
import { MacaikiForgotPassword } from '@macaiki/macaiki/forgot-password';
import { MacaikiRegister } from '@macaiki/macaiki/register';
import { ChakraProvider } from '@chakra-ui/react';
import { MacaikiHome } from '@macaiki/macaiki/home';
import { MacaikiProfile } from '@macaiki/macaiki/profile';
export function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<MacaikiLogin />} />
        <Route path="/forgotPassword" element={<MacaikiForgotPassword />} />
        <Route path="/register" element={<MacaikiRegister />} />
        <Route path="/home" element={<MacaikiHome />} />
        <Route path="/profile" element={<MacaikiProfile />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
