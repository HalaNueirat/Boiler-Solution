import {Routes, Route} from "react-router-dom";
import {Suspense, lazy} from "react";
import NotFoundPage from "./pages/NotFoundPage";

const Layout = lazy(() => import("./components/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));
const RecentNewsPage = lazy(() => import("./pages/RecentNewsPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const DiscoverMorePage = lazy(() => import("./pages/DiscoverMorePage"));

function App() {
  return (
    <Routes>
      <Route
        element={
          <Suspense
            fallback={<div className="loading-div">Loading Layout…</div>}
          >
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense
              fallback={<div className="loading-div">Loading Home Page…</div>}
            >
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/solutions"
          element={
            <Suspense
              fallback={
                <div className="loading-div">Loading Solutions Page…</div>
              }
            >
              <SolutionsPage />
            </Suspense>
          }
        />
        <Route
          path="/recent-news"
          element={
            <Suspense
              fallback={
                <div className="loading-div">Loading Recent News Page…</div>
              }
            >
              <RecentNewsPage />
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense
              fallback={
                <div className="loading-div">Loading Products Page…</div>
              }
            >
              <ProductsPage />
            </Suspense>
          }
        />
        <Route
          path="/discover-more"
          element={
            <Suspense
              fallback={
                <div className="loading-div">Loading Discover More Page…</div>
              }
            >
              <DiscoverMorePage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
