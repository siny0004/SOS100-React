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

  return (
    <div className="container">
      <h1>Rapportcenter</h1>
      <p>Här visas de mest utlånade objekten i bibliotekssystemet.</p>

      <button onClick={handleLoadReport}>Hämta mest utlånade objekt</button>

      {error && <p className="error">{error}</p>}

      {reportData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titel</th>
              <th>Antal lån</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((item) => (
              <tr key={item.itemId}>
                <td>{item.itemId}</td>
                <td>{item.itemTitle}</td>
                <td>{item.loanCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;