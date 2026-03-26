import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: unknown;
}

class AppErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown) {
    console.error("App crashed while rendering:", error);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const message =
        this.state.error instanceof Error
          ? this.state.error.message
          : "Unknown runtime error";

      return (
        <main
          className="app-fallback"
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "32px",
            background: "#0a0e17",
            color: "#eae5ec",
            textAlign: "center",
          }}
        >
          <div>
            <h1 style={{ marginBottom: "12px" }}>The portfolio hit a runtime error.</h1>
            <p style={{ margin: 0, opacity: 0.8 }}>
              {message}
            </p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
