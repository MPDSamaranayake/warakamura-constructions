import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Keep this console output for debugging blank screens.
    // eslint-disable-next-line no-console
    console.error("App crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 16, textAlign: "left" }}>
          <h1 style={{ margin: "0 0 8px" }}>Something went wrong</h1>
          <p style={{ margin: "0 0 12px" }}>
            Open DevTools Console for the full stack trace.
          </p>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              opacity: 0.9,
            }}
          >
            {String(this.state.error?.message || this.state.error || "Unknown error")}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
