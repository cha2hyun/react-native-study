1. react-native init CounterPractice
2. cd CounterPractice
3. npm install --save styled-components
4. npm install --save-dev typescript @types/react @types/react-native @types/styled-components babel-plugin-root-import
5. Create tsconfig.json

```
tsconfig.json
{
    "compilerOptions": {
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "isolatedModules": true,
        "jsx": "react",
        "lib": ["ES6"],
        "moduleResolution": "node",
        "noEmit": true,
        "strict": true,
        "target": "esnext",
        "baseUrl": "./src",
        "paths": {
            "~/*": ["*"]
        }
    },
    "exclude": ["node_modules", "bable.config.js", "metro.config.js", "jest.config.js"]
}
```

6. Edit bable.config.js

```
bable.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};

```

7. Create src folder
8. Rename App.js to App.tsx and move to src folder
9. Edit App.tsx

```
App.tsx

 * @format
 * @flow strict-local
import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = Styled.View`
  flex:1;
  background-color: #EEE;
`;

const App = () => {
  return (
    <Container>
      <Counter title="This is a Counter App" initValue={5}></Counter>
    </Container>
  );
};

export default App;
```
