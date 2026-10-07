import { LocateFixed, Moon } from "lucide-react";
import weatherlyLogo from "../assets/weatherly-logo.png";

function Header({ onLocation, darkMode, onToggleDarkMode }) {
  return (
    <header className="header">
      <div className="header-inner">

        <div className="brand">
          <img
            src={weatherlyLogo}
            alt="Weatherly"
            className="brand-logo"
          />
        </div>

        <div className="header-actions">
          <button
            type="button"
            className="location-button"
            onClick={onLocation}
          >
            <LocateFixed size={18} />
            <span>My Location</span>
          </button>

          <button
            type="button"
            className="icon-button"
            onClick={onToggleDarkMode}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            <Moon size={19} />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;