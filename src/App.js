import { useState, useEffect, lazy, Suspense } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import strings from "./lang";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from "./constants";

import SaveProvider from "./context/SaveContext";

import InternalRoute from "./components/InternalRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Edit = lazy(() => import("./pages/Edit"));
const Crew = lazy(() => import("./pages/Crew"));
const Research = lazy(() => import("./pages/Research"));
const Ships = lazy(() => import("./pages/Ships"));
// import Reference from "./pages/Reference";

const Reference = lazy(() => import("./pages/Reference"));

const Internal = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Edit />} />
        <Route path="crew" element={<Crew />} />
        <Route path="research" element={<Research />} />
        <Route path="ships" element={<Ships />} />
      </Routes>
    </Suspense>
  );
};

const App = () => {
  const [locale, setLocale] = useState(
    localStorage.getItem(LOCALE_STORAGE_KEY) || null,
  );

  useEffect(() => {
    document.getElementById("initialTitle").remove();
  }, []);

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
              <Route path="/reference" element={<Reference />} />
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
