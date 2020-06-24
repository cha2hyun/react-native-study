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
9. commit blueprint
10. Button Components, download button image and put in in src/Assets/Images
11. Create src/Components/Button/index.tsx
