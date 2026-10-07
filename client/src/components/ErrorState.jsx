import { AlertCircle, RefreshCw } from "lucide-react";

function ErrorState({ message, onRetry }) {
  return (
    <section className="error-state">
      <div className="error-icon">
        <AlertCircle size={32} />
      </div>

      <div className="error-content">
        <h2>Something went wrong</h2>

        <p>{message}</p>

        <button
          type="button"
          className="retry-button"
          onClick={onRetry}
        >
          <RefreshCw size={17} />
          <span>Try Again</span>
        </button>
      </div>
    </section>
  );
}

export default ErrorState;