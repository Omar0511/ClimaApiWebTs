# Proyecto: Clima API

- **_npm create vite@latest_**

## Herramientas y/o Tecnologías

- React
- Vite
- TypeScript
- CSS MODULES
- API CLIMA
  - _https://openweathermap.org/_
  - **_/api_keys_**
  - **API: Application Programming Interface.**
  - Funciones, métodos que ofrece una librería para ser utilizada por otro software como una capa de abstracción.
  - Una _API_ pone a disposición recursos que están alojados en otro servidor o base de datos.
  - Usualmente hay que enviar una petición estructurada.
  - Utilizando _React_ en el cliente con _Vite_, no puede consultar una base de datos, por lo tanto consultar una _API_ es una forma de obtener datos dinámicos de un servidor o base de datos.
  - La _API_ puede ser creada en cualquier lenguaje o _framework_: _Python, Java, Net Core, Express, Node.js, Laravel, PHP_.
  - Para ello deberá entregar una respuesta tipo _JSON_.
  - Al ser _JavaScript_ puedes utilizar _Fetch API, axios, SWR_, para obtener los datos y mostrarlos en pantalla.
  - Algunas _API'S_ requieren un _KEY_, y otras están protegidas por _CORS_.
- Google Fonts
  - Tipografía:
    - _Outfit_
  - Se configura en el **index.html**
- Axios - Consumo de API
  - **_npm i axios_**
    - ## Opciones de uso en las _API'S_
      - _Type Guards_
      - _ZOD_ (Opción usada en este proyecto)
        - **_npm i zod_**
      - _Volibot_
        - **_npm i valibot_**
- Variables de entorno
  - _https://vite.dev/guide/env-and-mode_
  - Se utilizó: 
    - **import.meta.env.NOMBREVARIABLE**
  - En base a la documentación, se creo un archivo llamado:
    - **_.env.local_**
  - Dentro de él, se creo la variable, importante mencionar que como es de _VITE_, las variables que se crean deben llevar _VITE_, ejemplo:
    - VITE_API_KEY=VALOR A ASIGNAR
  - Y al llamarla o usarla, lo hacemos así, ejemplo:
    - **const appId = import.meta.env.VITE_API_KEY;**
- SPINNERS 
  - Para mostrar algo cuando esta cargando
  - _https://tobiasahlin.com/spinkit/_
- 