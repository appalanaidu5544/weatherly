import { SearchX } from "lucide-react";

function EmptyState({
  title = "No results found",
  message = "Try searching for another city.",
}) {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <SearchX size={30} />
      </div>

      <h3>{title}</h3>

      <p>{message}</p>
    </div>
  );
}

export default EmptyState;