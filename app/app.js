/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import "@babel/polyfill";

// Import all the third party stuff
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import FontFaceObserver from "fontfaceobserver";
import history from "utils/history";
import "sanitize.css/sanitize.css";
import "antd/dist/antd.css";
// Import root app
import App from "containers/App";
import "./styles/layout/base.scss";

// Import Language Provider
// import LanguageProvider from 'containers/LanguageProvider';
import Web3Provider from "./provider/web3";
import AppWrap from "./provider/appContext";
// Load the favicon and the .htaccess file
import "!file-loader?name=[name].[ext]!../public/favicons/favicon.ico"; // eslint-disable-line
import "file-loader?name=.htaccess!./.htaccess"; // eslint-disable-line

import configureStore from "./redux/configureStore";

// Import i18n messages
import { translationMessages } from "./i18n";
import WrapLangContext from "./contexts/LanguageContext";

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver("Open Sans", {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add("fontLoaded");
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById("app");

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      {/* <LanguageProvider messages={messages}> */}
      <ConnectedRouter history={history}>
        <Web3Provider>
          <AppWrap>
            <WrapLangContext>
              <App />
            </WrapLangContext>
          </AppWrap>
        </Web3Provider>
      </ConnectedRouter>
      {/* </LanguageProvider> */}
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(
    ["./i18n", "containers/App", "./provider/web3", "./provider/appContext"],
    () => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      render(translationMessages);
    }
  );
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise((resolve) => {
    resolve(import("intl"));
  })
    .then(() =>
      Promise.all([
        import("intl/locale-data/jsonp/en.js"),
        import("intl/locale-data/jsonp/vi.js"),
      ])
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}
// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === "production") {
  require("offline-plugin/runtime").install(); // eslint-disable-line global-require
}
