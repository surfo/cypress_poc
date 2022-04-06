## Cypress Windows

### - Verificar si esta instalado node

```console
node --version
```

```console
v16.11.1
```
### Si no existe Node

Descargar e instalar node de LTS 64Bit [aquí](https://nodejs.org/es/download/)


### - Instalar Visual Studio Code

1.- Descargar para windows [aqui](https://code.visualstudio.com/docs/?dv=win)

2.- Instalar plugins Cypress desde Extensions

    2.1 - Cypress Snippets [aqui](https://marketplace.visualstudio.com/items?itemName=andrew-codes.cypress-snippets)

    2.2 - Cypress Helper [aqui](https://marketplace.visualstudio.com/items?itemName=Shelex.vscode-cy-helper)

    2.3 - Run Cypress [aqui](https://marketplace.visualstudio.com/items?itemName=coreylight.run-cy)

    2.4 - Cypress Monitor [aqui](https://marketplace.visualstudio.com/items?itemName=ezdone.cypress-monitor)

    2.5 - Terminal [aqui](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal)

### - Iniciar entorno

Crear una carpeta (repo local) con el nombre del proyecto a automatizar


1.- Ingresar el comando npm init para crear el package json

    ```console
    npm init
    ```
    Da como salida
    ```console
    Press ^C at any time to quit.
    package name: (cypress_lab1)
    ```
    Presionar Enter e ir ingresando
        description: 
        git repository:
        ...Is this OK? (yes) yes


### - Descargar e instalar Cypress

   ```console
   npm install cypress --save-dev
   ```
   ó
  ```console
  npm i cypress --save-dev --strict-ssl=false
  ``` 
  ó
  ```console
  npm cypress install --force
  ``` 
Crea una carpeta node_modules

### - Open Cypress

```console
node_modules\.bin\cypress open
```
Salida:
```console
It looks like this is your first time using Cypress: 9.5.1
```

Abre consola de ejecución Cypress


En el caso que hasta aca no surjan errores de instalacion npm por politicas de seguridad (Caso contrario lerr apartado # Con problemas de seguridad )



### - Estructura de carpetas pos Open Cypress

Crea carpeta cypress

  - fixtures
    - se pueden alojar los archivos Json que se puede utilizar como datos fijos de pruebas
  
  - integration
    - Ejempos
  
  - plugins

  - node modules
    - no subir a git
  
  - packge-lock-.json
    - dependendias
    - configuración


### Intro JavaScript

[JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

[JavaScript Online Editor](https://jsfiddle.net/)


### Adicionales

Instalar Reporte Mocha [Origen](https://www.npmjs.com/package/cypress-mochawesome-reporter)

#### Setup
- install cypress-mochawesome-reporter

npm i --save-dev cypress-mochawesome-reporter

or

yarn add -D cypress-mochawesome-reporter

- Change cypress reporter

config file (cypress.json by default)

  "reporter": "cypress-mochawesome-reporter"

or command line

--reporter cypress-mochawesome-reporter

- Add to cypress/support/index.js
import 'cypress-mochawesome-reporter/register';

- Add to cypress/plugins/index.js

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};

- Agregar en cypress.json 
```json
{ "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
      "reportDir": "cypress/report",
      "charts": true,
      "reportPageTitle": "Cypress Report"
    }
}
```



### Con problemas de seguridad


#### - Si hay errores de instalacion utilizar npx

1 - Instalar npx

  ```console
  npm install -g npx
  ``` 

2 - Cerrar Terminal y abrir nuevamente


2 - Instalar cypress con el install force de npx

  ```console
  npx cypress install --force
  ``` 
3 - Open Cypress

  ```console
  npx cypress open
  ``` 

#### - Otra opción instalar desde repo local

1 - Descargar el binario manualmente [aquí](https://download.cypress.io/desktop)

2 - Abrir una ventana de terminal

3 - Navegue a su proyecto-directorio

4 - Elimine la carpeta "node_modules" en su directorio de proyecto si existe

5 - Elimine el archivo "package-lock.json" en su directorio de proyecto si existe

6 - Ejecutar estos comandos en la Terminal de Visual Studio Code, setear el path donde se desacarga los binarios de Cypress:
```console
setx CYPRESS_INSTALL_BINARY C:/Users/MyDocuments/cypress.zip
```
o
```console
setx CYPRESS_INSTALL_BINARY C:\\Users\\MyDocuments\\cypress.zip
```

Arroja como resultado el comando
```console
CORRECTO: se guardó el valor especificado.
```

7 - Reiniciar Visual Studio Code

8 - Abrir una termial en Visual Studio Code
   ```console
   npm i cypress --save-dev
   ```
Salida:
```python
Microsoft Windows [Versión 10.0.18363.2037]
(c) 2019 Microsoft Corporation. Todos los derechos reservados.

C:\Users\DC_E90730\Desktop\cypress_lab1>npm i cypress --save-dev

added 165 packages, and audited 166 packages in 3m

27 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Cypress LINUX

1.- npm init
2.- npm install cypress --save-dev --> Instalacion (Carga modulo Node)
3.- node_modules/.bin/cypress open
or
3Bis.-npx Instalacion https://www.npmjs.com/package/npx
3.1- npm install -g npx
3.2- npx cypress install --force    --> Forzar la Instalaciòn
3.3- npx cypress open