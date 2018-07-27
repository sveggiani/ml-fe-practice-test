# Mercado Libre FE Test

This is my attempt to solve the requested development exercise for the open job position evaluation as a Front-end Developer.

## Information about the technology stack

- **Framework/library:** ReactJS
- **State Management:** Redux + Redux Thunks + Redux Logger
- **HTTP Client:** Axios
- **Transpiling:** Babel
- **Linters:** Eslint / SASSLint
- **Code formatting:** Prettier
- **Example Items API:** Express / body-parser / Axios
- **Environment configuration:** dotENV

NOTE: Application was created using an _ejected_ instance of `create-react-app`.

### Development Time

Development took me about 25 working hours splitted in 5 sessions.

## Setup Instructions

1.  Clone repository
2.  Run `yarn install` to install project dependencies
3.  Open another Terminal and execute `yarn api`. Example Items API will run/listen on port `4000`. _Mandatory!_
4.  Run `yarn start`. A browser window will be opened automatically. Alternatively visit [http://localhost:3000/](http://localhost:3000/)

## Known Issues

1.  An intended usage of `dangerouslySetInnerHTML` is present in `src/components/ProductDetail/index.js`.
2.  A _warning_ about "redirecting to the same route` is displayed in console when a search is performed.

**Author:** Sebastián Veggiani
