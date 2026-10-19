# Swedbank självservice – pilot

En statisk webbplats med `index.html`, `styles.css`, `content.js`, `app.js`, `qrcode.js` och en lokal logotypbild. Publicera filerna i roten på GitHub-repot och aktivera GitHub Pages för grenen `main`, mappen `/ (root)`.

## Ändra innehållet

Öppna `content.js` i en textredigerare. Där finns alla guider, texter och länkar. Spara och ladda upp den ändrade filen till samma plats i GitHub. Uppdatera sidan i webbläsaren.

## App-länken och QR-koden

QR-koden pekar nu på Swedbanks officiella sida om mobilbanken. Där finns länkar till appen i App Store och Google Play. Den pekar inte på pilotens startsida. En verifierad universallänk som öppnar Swedbank Privat direkt på både iPhone och Android saknas. När appteamet ger er en sådan: byt värdet `appUrl` i `content.js`. QR-koden uppdateras automatiskt. Testa sedan båda mobiltyperna.

## Bilder

Illustrationerna är markerade **TILLFÄLLIG ILLUSTRATION · INGEN SKÄRMBILD**. Ersätt först när ni har godkända bilder från den riktiga appen och har kontrollerat varje steg mot aktuell appversion. Logotypbilden har hämtats från Swedbanks offentliga logotypsida; stäm av intern tillåtelse innan extern publicering.

## Hjälp och omdömen

”Be om hjälp” tänder en tydlig signal på **den skärm där knappen trycks** tills den stängs. Det finns ingen notifiering till personalens andra enheter.

Stjärnor och kommentarer sparas i `localStorage` i **just denna webbläsare**. Administratören kan öppna `index.html?admin=1` på terminalen (på GitHub Pages: lägg till `?admin=1` till sidans URL) och ladda ner CSV. Använd en godkänd serverlösning om omdömen ska samlas centralt, skyddas med inloggning eller behållas mellan enheter. Uppmana kunderna att inte ange personuppgifter i kommentaren.

## Källor för guiderna

- https://www.swedbank.se/privat/digitala-tjanster/vara-appar.html
- https://www.swedbank.se/privat/betala-och-overfora/swish.html
- https://www.swedbank.se/privat/digitala-tjanster/mobilt-bankid.html
- https://www.swedbank.se/privat/digitala-tjanster.html
- https://www.swedbank.com/newsroom/logotype.html
- https://design.swedbankpay.com/v/3.4.2/docs/core/color/

Detta är en konceptpilot. Appens menyer och tjänster kan ändras. Kunden ska alltid följa den faktiska appens instruktioner.
