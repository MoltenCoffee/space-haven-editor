import { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import strings from "./lang";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from "./constants";

import SaveProvider from "./context/SaveContext";

import InternalRoute from "./components/InternalRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Crew from "./pages/Crew";
import Research from "./pages/Research";

const Internal = () => {
  return (
    <Routes>
      <Route path="/" element={<Edit />} />
      <Route path="crew" element={<Crew />} />
      <Route path="research" element={<Research />} />
    </Routes>
  );
};

const App = () => {
  const [locale, setLocale] = useState(
    localStorage.getItem(LOCALE_STORAGE_KEY) || null,
  );

  return (
    <IntlProvider
      messages={strings}
      locale={locale || DEFAULT_LOCALE}
      defaultLocale={DEFAULT_LOCALE}
    >
      <SaveProvider>
        <BrowserRouter>
          <Layout>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <InternalRoute path="edit/*" element={<Internal />} />
            </Routes>
            <Footer />
          </Layout>
        </BrowserRouter>
      </SaveProvider>
    </IntlProvider>
  );
};

export default App;
