/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider as StyleProvider} from 'react-native-paper';
import Main from './src/view';
import { theme } from './src/view/core/theme';
import "./src/config/ReactotronConfig"

function App() {
  return (
    <StyleProvider theme={theme}>
      <Main></Main>
    </StyleProvider>
  );
}

export default App;