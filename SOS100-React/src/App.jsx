import { useState } from "react";
import { getMostLoanedItems } from "./services/reportService";
import "./App.css";

function App() {
  const [reportData, setReportData] = useState([]);
  const [error, setError] = useState("");

  const handleLoadReport = async () => {
    try {
      const data = await getMostLoanedItems();
      setReportData(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.message || "Något gick fel när rapporten hämtades.");
    }
  };

  const getMedal = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return "";
  };

  const getCardClass = (index) => {
    if (index === 0) return "podium-card gold";
    if (index === 1) return "podium-card silver";
    if (index === 2) return "podium-card bronze";
    return "podium-card";
  };

  return (
    <div className="container">
      <h1>Rapportcenter</h1>
      <p className="subtitle">Mest utlånade objekt i bibliotekssystemet</p>

      <button onClick={handleLoadReport}>Hämta rapport</button>

      {error && <p className="error">{error}</p>}

      {reportData.length > 0 && (
        <>
          <div className="podium-grid">
            {reportData.slice(0, 3).map((item, index) => (
              <div key={item.itemId} className={getCardClass(index)}>
                <div className="medal">{getMedal(index)}</div>
                <h2>{item.itemTitle}</h2>
                <p>Placering: #{index + 1}</p>
                <p>Antal lån: {item.loanCount}</p>
              </div>
            ))}
          </div>

          {reportData.length > 3 && (
            <div className="others-section">
              <h2>Övriga placeringar</h2>
              <div className="others-list">
                {reportData.slice(3).map((item, index) => (
                  <div key={item.itemId} className="other-card">
                    <span className="ranking">#{index + 4}</span>
                    <span className="title">{item.itemTitle}</span>
                    <span className="count">{item.loanCount} lån</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;