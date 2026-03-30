# SOS100-React
Applikationens syfte är att visa rapporten **mest utlånade objekt** genom att hämta data från projektets befintliga `ReportApi`. Användaren kan klicka på en knapp för att hämta rapporten och se resultatet presenterat i en topplista med podium-känsla för de tre högst rankade objekten som visas med guld, silver & brons-medalj.
## Hur man kör
1. Följande behöver vara installerat:

- Node.js
- npm
- .NET SDK
- Visual Studio Code eller annan valfri kodeditor

2. Starta MVC-applikationen och samtliga API:er (ReportApi, UserService, SOS100-LoanApi, ReminderApi, KatalogApi)
3. Starta React-applikationen: npm run dev
4. Öppna den lokala adress som visas i terminalen
Applikationen är kopplad till följande endpoint i ReportApi: http://localhost:5273/api/reports/most-loaned-items?limit=10
## AI-användning
Generativ AI har använts som stöd under utvecklingen av applikationen.
AI har använts för att ge förslag på struktur för React-applikationen,
förklara hur React-applikationen kopplas till ett befintligt API,
hjälpa till att felsöka problem med endpoint, localhost & CORS,
ge förslag på användargränssnitt och förbättringar av designen och
ta fram exempel på React-kod och CSS.
## Annat