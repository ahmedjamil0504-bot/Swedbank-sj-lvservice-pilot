/* ÄNDRA HÄR: texter, guider och länkar. Spara filen och ladda upp den igen. */
window.PILOT_CONTENT = {
  // När Swedbank bekräftat en riktig universallänk som öppnar Swedbank Privat:
  // ersätt denna officiella appsida med den länken. QR-koden uppdateras automatiskt.
  appUrl: 'https://www.swedbank.se/privat/digitala-tjanster/vara-appar.html',
  iosUrl: 'https://apps.apple.com/se/app/swedbank-privat/id344161302',
  androidUrl: 'https://play.google.com/store/apps/details?id=se.swedbank.mobil',
  topics: [
    {id:'konto', icon:'▤', title:'Beställ kontoutdrag', summary:'Se kontohändelser eller beställ ett äldre utdrag.', time:'2–4 min', before:'Utdrag för de senaste två åren hittar du via Konto. För äldre kontoutdrag kan du kontakta banken via chatten.', steps:[
      ['Öppna mobilbanken','Öppna Swedbank Privat på din mobil och logga in.','Logga in','Använd din egen mobil.'],
      ['Välj Konto','Tryck på Konto på startsidan.','Konto','Appens utseende kan skilja sig lite.'],
      ['Välj rätt konto','Öppna kontot som utdraget gäller.','Välj konto','Kontrollera att du valt rätt konto.'],
      ['Se kontohändelser','Välj den period du behöver och läs händelserna på mobilen.','Kontohändelser','Behöver du ett dokument? Följ de alternativ som appen visar.'],
      ['Äldre än två år?','Öppna Chatta med oss och skriv ”Beställ kontoutdrag”.','Chatta med oss','En medarbetare kan hjälpa dig om du inte hittar chatten.']
    ]},
    {id:'swish', icon:'↗', title:'Skaffa Swish', summary:'Koppla ditt mobilnummer och konto till Swish.', time:'4–6 min', before:'Du behöver Swish betalningar på mobilen. Du behöver också Mobilt BankID på samma enhet om du ska kunna skicka pengar.', steps:[
      ['Skaffa Swish-appen','Ladda ner ”Swish betalningar” från App Store eller Google Play på din mobil.','Swish betalningar','Sök efter rätt app i mobilens appbutik.'],
      ['Öppna mobilbanken','Logga in i Swedbank Privat på din mobil.','Logga in','Gör anslutningen i bankappen.'],
      ['Gå till Swish','Välj Du i menyn, sedan Swish och Beställ Swish om valet visas.','Du → Swish','Följ alternativen som din app visar.'],
      ['Bekräfta ditt nummer','Skriv ditt mobilnummer och fyll i verifieringskoden som kommer via sms.','Verifieringskod','Skriv bara koden i bankens app på din mobil.'],
      ['Välj konto','Välj kontot som ska kopplas och om du vill skicka och ta emot eller bara ta emot betalningar.','Välj konto','Kontrollera vilket konto du väljer.'],
      ['Läs och godkänn','Läs villkoren och följ bankappens instruktioner för godkännande.','Godkänn','Godkänn endast ett ärende som du själv startat.']
    ]},
    {id:'rakning', icon:'▦', title:'Betala räkning', summary:'Lägg in och godkänn en räkning i mobilen.', time:'3–5 min', before:'Ha räkningen framför dig. Tjänsten Internetbetalning kan behövas för att betala i appen.', steps:[
      ['Öppna mobilbanken','Logga in i Swedbank Privat på din mobil.','Logga in','Skriv aldrig betalningsuppgifter på terminalen.'],
      ['Välj Betala och överför','Öppna Betala och överför i appen.','Betala och överför','Läs texten på din mobil om menyn ser annorlunda ut.'],
      ['Starta en ny betalning','Välj Ny betalning eller överföring.','Ny betalning','Du kan behöva godkänna en ny mottagare.'],
      ['Fyll i mottagare','Välj betalningskonto och mottagare. Lägg till mottagaren om den saknas.','Mottagare','Kontrollera bankgiro eller plusgiro på fakturan.'],
      ['Fyll i uppgifterna','Skriv belopp, datum och OCR-nummer eller meddelande på mobilen.','Belopp och OCR','Kontrollera att OCR-numret stämmer.'],
      ['Kontrollera och godkänn','Läs igenom uppgifterna. Lägg till och godkänn betalningen enligt appens instruktioner.','Godkänn','Kontrollera att räkningen visas som kommande eller genomförd.']
    ]},
    {id:'bankid', icon:'✓', title:'Skaffa Mobilt BankID', summary:'Beställ och aktivera BankID på din mobil.', time:'5–10 min', before:'Installera Swedbank Privat och BankID säkerhetsapp. Vid digital ID-kontroll behövs giltigt svenskt pass eller nationellt ID-kort, inte körkort.', steps:[
      ['Installera apparna','Skaffa Swedbank Privat och BankID säkerhetsapp på mobilen.','Två appar','Ladda ner apparna från App Store eller Google Play.'],
      ['Öppna mobilbanken','Stanna på Swedbank Privats inloggningssida.','Inloggning','Du behöver inte logga in med ett BankID som du ännu inte har.'],
      ['Välj fler alternativ','Tryck på Fler alternativ på inloggningssidan.','Fler alternativ','Appens ord och ordning kan ändras.'],
      ['Beställ nytt BankID','Välj Beställ nytt Mobilt BankID och följ instruktionerna.','Beställ nytt','Välj inte Spärra om du vill beställa nytt.'],
      ['Identifiera dig','Välj ett identifieringssätt som erbjuds. Följ kontrollen på mobilen.','ID-kontroll','Digital kontroll kan kräva svenskt pass eller nationellt ID-kort.'],
      ['Aktivera BankID','Läs vad du godkänner och slutför i BankID-appen.','Aktivera','Din personliga säkerhetskod ska aldrig visas för någon annan.']
    ]},
    {id:'kort', icon:'▭', title:'Ersätt bankkort', summary:'Spärra ditt bankkort och beställ ett nytt.', time:'3–5 min', before:'Om kortet är förlorat eller stulet ska det spärras direkt. Den här guiden gäller bankkort; andra kort kan ha andra val.', steps:[
      ['Öppna mobilbanken','Logga in i Swedbank Privat på din mobil.','Logga in','Be en medarbetare om hjälp om du inte kan logga in.'],
      ['Välj Kort','Tryck på Kort på startsidan.','Kort','Välj Kort, inte Konto.'],
      ['Välj rätt kort','Öppna det bankkort som ska ersättas.','Välj kort','Kontrollera kortet om du har flera.'],
      ['Öppna spärrvalen','Välj Spärra kort eller stäng tillfälligt.','Spärra kort','En tillfällig stängning är inte samma sak som en spärr.'],
      ['Spärra och ersätt','Välj Spärra och ersätt kort. Följ instruktionerna i appen.','Spärra och ersätt','Bekräfta först när du har läst igenom valet.'],
      ['Kontrollera','Se efter att spärren och beställningen har bekräftats i appen.','Bekräftelse','Kontakta banken om du inte ser en bekräftelse.']
    ]},
    {id:'overforing', icon:'⇄', title:'Gör överföring', summary:'Flytta pengar till ett annat konto.', time:'2–4 min', before:'Ha clearingnummer och kontonummer till hands. Tjänsten Internetbetalning kan behövas för överföring till någon annan.', steps:[
      ['Öppna mobilbanken','Logga in i Swedbank Privat på din mobil.','Logga in','Gör hela överföringen på din mobil.'],
      ['Välj Betala och överför','Öppna Betala och överför.','Betala och överför','Menynamn kan ändras när appen uppdateras.'],
      ['Starta en överföring','Välj Ny betalning eller överföring.','Ny överföring','Välj rätt typ av ärende.'],
      ['Välj från-konto','Välj kontot som pengarna ska dras från.','Från konto','Kontrollera att kontot stämmer.'],
      ['Välj mottagare','Välj sparad mottagare eller lägg till ett nytt konto.','Mottagare','Kontrollera clearingnummer och kontonummer noggrant.'],
      ['Belopp och datum','Skriv belopp och välj datum om det behövs.','Belopp och datum','Läs beloppet en gång till.'],
      ['Godkänn','Kontrollera allt och följ appens steg för att godkänna.','Godkänn','Se efter att appen visar en bekräftelse.']
    ]}
  ]
};
