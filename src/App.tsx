import { lazy, Suspense } from "react";
import "./App.css";
import AppErrorBoundary from "./components/AppErrorBoundary";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <AppErrorBoundary>
      <LoadingProvider>
        <Suspense fallback={<main className="app-shell-loading">Loading portfolio...</main>}>
          <MainContainer>
            <AppErrorBoundary fallback={null}>
              <Suspense fallback={null}>
                <CharacterModel />
              </Suspense>
            </AppErrorBoundary>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </AppErrorBoundary>
  );
};

export default App;
