# ONE2EAT Frontend with React & Redux

Check other documentations here:

- [Data Documentation](https://github.com/one2eat/frontend/blob/master/README.md)

## Tech Stack

- React: To component-based web application
  - React Router: To manage multiple pages/routes of the application
- Redux: To managing global state in store
  - Redux Devtools extension: To inspect all Redux behavior
  - Redux Thunk: To asynchronous operations in reducer
- CSS in JS: To style the components without CSS file
  - Emotion: To style the components flexibly with `styled` or other ways
- Axios: To request/fetch data to/from the backend API server

```txt
REACT_APP_BACKEND_API_URL=http://ec2-18-218-96-166.us-east-2.compute.amazonaws.com
```

## Development

```sh
yarn start
```

Then open `http://localhost:3000`.

## Building

```sh
yarn build
```

In deployment server such as Netlify, this build process should run automatically and the port is assigned by them (not `5000`).

## Deploying

You can use Netlify to deploy. After which, you have to configure the environment variables as well.

## License

MIT License
