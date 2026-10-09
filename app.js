const topics = [
  { id:'konto', icon:'▤', title:'Beställ kontoutdrag', time:'2–4 min', summary:'Hitta rätt konto och period.', before:'Kontoutdrag för de senaste två åren finns under Konto. För äldre utdrag kan du använda bankens chatt.', steps:[
    ['Öppna Swedbank Privat','Öppna appen på din egen mobil och logga in.','Logga in','Använd bara appen du själv installerat.'],
    ['Gå till Konto','Välj Konto i appen.','Konto','Kontrollera att du är inne på konton och inte kort.'],
    ['Välj ditt konto','Tryck på kontot som utdraget gäller.','Välj konto','Kontrollera kontonamnet om du har flera konton.'],
    ['Välj period','Öppna kontohändelser och välj datumperioden du behöver.','Period','Kontrollera start- och slutdatum.'],
    ['Se uppgifterna','Kontrollera konto och period på din mobil. Använd appens alternativ om du behöver spara eller dela uppgifterna.','Kontohändelser','Alternativen kan skilja sig mellan appversioner.'],
    ['Behöver du ett äldre utdrag?','Gå till Chatta med oss och skriv ”Beställ kontoutdrag”. Följ sedan instruktionerna där.','Chatta med oss','Lämna aldrig personliga uppgifter på terminalen.']
  ]},
  { id:'swish', icon:'↗', title:'Gör en Swish', time:'1–2 min', summary:'Skicka pengar i Swish-appen.', before:'Du behöver Swish och Mobilt BankID på din mobil.', steps:[
    ['Öppna Swish','Öppna Swish-appen på din mobil.','Swisha','Swish är en egen app.'],
    ['Välj mottagare','Skriv mobilnumret eller välj en kontakt.','Mottagare','Kontrollera hela numret.'],
    ['Skriv belopp','Ange beloppet och eventuellt ett meddelande.','Belopp','Se upp med extra nollor.'],
    ['Kontrollera namnet','Läs mottagarens namn och kontrollera beloppet innan du går vidare.','Kontrollera','Avbryt om namnet inte stämmer.'],
    ['Godkänn i BankID','Läs vad du godkänner och skriv under i din egen mobil.','Skriv under','Godkänn bara en betalning du själv har startat.'],
    ['Se bekräftelsen','Kontrollera att Swish visar att betalningen skickats.','Bekräftelse','Guiden kan inte se om betalningen lyckades.']
  ]},
  { id:'rakning', icon:'▦', title:'Betala räkning', time:'3–5 min', summary:'Fyll i räkningen i bankappen.', before:'Ha räkningen till hands. Skriv betalningsuppgifterna endast i din egen mobil.', steps:[
    ['Logga in','Öppna Swedbank Privat och logga in.','Logga in','Kontrollera att du använder bankens app.'],
    ['Välj Betala och överför','Tryck på Betala och överför.','Betala och överför','Läs knapparna på din mobil om appen ser annorlunda ut.'],
    ['Starta ny betalning','Tryck på Ny betalning eller överföring.','Ny betalning eller överföring','Välj en ny betalning för en ny räkning.'],
    ['Välj konto och mottagare','Välj kontot som pengarna ska dras från och fyll i eller välj mottagaren.','Mottagare','Läs av bankgiro eller plusgiro noggrant.'],
    ['Fyll i räkningen','Ange belopp, betalningsdag och OCR-nummer eller meddelande.','OCR-nummer','OCR-nummer och fakturanummer kan vara olika.'],
    ['Kontrollera och lägg till','Kontrollera mottagare, belopp och datum. Tryck på Lägg till om appen visar det.','Lägg till','En tillagd betalning kan fortfarande behöva godkännas.'],
    ['Godkänn i mobilen','Följ appens instruktioner och kontrollera vad du godkänner.','Godkänn','Kontrollera sedan att betalningen visas bland kommande betalningar.']
  ]},
  { id:'bankid', icon:'✓', title:'Skaffa Mobilt BankID', time:'5–10 min', summary:'Beställ och aktivera på mobilen.', before:'Ha BankID-appen installerad. För digital ID-kontroll behövs svenskt pass eller nationellt ID-kort, inte körkort.', steps:[
    ['Öppna Swedbank Privat','Stanna på appens inloggningssida.','Inloggning','Du behöver inte logga in med ett BankID som saknas.'],
    ['Öppna fler alternativ','Välj Fler alternativ eller motsvarande val på inloggningssidan.','Fler alternativ','Appens exakta text kan ändras.'],
    ['Beställ nytt','Välj Beställ nytt Mobilt BankID.','Beställ nytt Mobilt BankID','Välj inte Spärra om du ska beställa nytt.'],
    ['Välj identifiering','Välj det sätt att identifiera dig som visas och som du kan använda.','Identifiering','Tillgängliga alternativ beror på din situation.'],
    ['Gör ID-kontrollen','Följ instruktionerna i apparna. Vid digital kontroll använder du giltigt svenskt pass eller nationellt ID-kort.','ID-kontroll','Körkort kan inte användas för den digitala ID-kontrollen.'],
    ['Läs och godkänn','Läs information och villkor på din mobil innan du godkänner.','Villkor','Ingen på kontoret ska be om din säkerhetskod.'],
    ['Aktivera ditt BankID','Följ BankID-appens sista steg och välj en personlig säkerhetskod.','Aktivera','Dela aldrig koden med någon annan.']
  ]},
  { id:'kort', icon:'▭', title:'Ersätt bankkort', time:'3–5 min', summary:'Spärra och beställ ersättningskort.', before:'Är kortet borttappat, stulet eller obehörigt använt? Spärra det direkt.', steps:[
    ['Logga in','Öppna Swedbank Privat och logga in.','Logga in','Vänta inte med spärren vid förlust eller stöld.'],
    ['Välj Kort','Gå till Kort på startsidan.','Kort','Välj Kort, inte Konto.'],
    ['Välj rätt kort','Tryck på kortet som ska ersättas.','Välj kort','Kontrollera att du valt rätt om du har flera kort.'],
    ['Öppna spärrval','Tryck på Spärra kort eller stäng tillfälligt.','Spärra kort eller stäng tillfälligt','Tillfällig stängning och permanent spärr är olika val.'],
    ['Spärra och ersätt','Välj Spärra och ersätt kort och följ instruktionerna.','Spärra och ersätt kort','Välj permanent spärr om kortet förlorats eller stulits.'],
    ['Bekräfta beställningen','Kontrollera leveransuppgifter och bekräfta i appen.','Bekräfta','Se efter att beställningen registrerats.']
  ]},
  { id:'overforing', icon:'⇄', title:'Gör överföring', time:'2–4 min', summary:'Flytta pengar till ett konto.', before:'Ha mottagarens korrekta clearingnummer och kontonummer till hands.', steps:[
    ['Logga in','Öppna Swedbank Privat och logga in.','Logga in','Gör överföringen på din egen mobil.'],
    ['Välj Betala och överför','Tryck på Betala och överför.','Betala och överför','Titta på mobilens text om vyn skiljer sig från exemplet.'],
    ['Starta ny överföring','Välj Ny betalning eller överföring.','Ny betalning eller överföring','Kontrollera att du börjar ett nytt ärende.'],
    ['Välj från-konto','Välj kontot som pengarna ska tas från.','Från konto','Kontrollera rätt konto och saldo.'],
    ['Välj mottagare','Välj en sparad mottagare eller lägg till clearingnummer och kontonummer.','Mottagare','Läs numren extra noga.'],
    ['Skriv belopp och datum','Ange belopp och välj datum om överföringen ska göras senare.','Belopp','Kontrollera beloppet före nästa steg.'],
    ['Kontrollera och godkänn','Läs igenom från-konto, mottagare, belopp och datum. Godkänn i mobilen.','Godkänn','Kontrollera att appen visar en bekräftelse.']
  ]}
];
const root = document.getElementById('app');
const state = { view: new URLSearchParams(location.search).has('mobile') ? 'mobile' : 'scan', topic:null, step:0, help:false };
const siteUrl = location.origin + location.pathname + '?mobile=1';
const glyph = '<span class="brand-mark" aria-hidden="true">S</span>';
function header(mobile=false){return `<header class="topbar"><div class="brand">${glyph}<span>Swedbank <small>Självservice</small></span></div><span class="pilot">KONCEPTDEMO · EJ BANKTJÄNST</span>${mobile?'':`<button class="toplink" data-action="home">${state.view==='scan'?'Start':'Till startsidan'}</button>`}</header>`;}
function footer(){return `<footer class="footer"><span>Du använder din egen mobil. Terminalen tar inte emot betalningar, koder eller personuppgifter.</span><span>Pilotkoncept · 2026</span></footer>`;}
function render(){
 document.body.classList.toggle('is-mobile',state.view==='mobile');
 if(state.view==='mobile') return renderMobile();
 let content='';
 if(state.view==='scan') content=`<section class="scan-layout"><div class="scan-copy"><div class="eyebrow"><span class="pulse"></span> VÄLKOMMEN TILL SJÄLVSERVICE</div><h1>Kom igång med <em>din mobil.</em></h1><p class="lead">Vi visar vägen på den här skärmen medan du själv gör ärendet i appen.</p><div class="how"><div><b>01</b><span>Skanna koden med mobilens kamera</span></div><div><b>02</b><span>Öppna Swedbank Privat på mobilen</span></div><div><b>03</b><span>Välj ärendet här och följ stegen</span></div></div><button class="primary start" data-action="topics">Jag har öppnat appen <span aria-hidden="true">→</span></button><p class="support">Har du ingen mobil eller behöver du hjälp? Be en medarbetare.</p></div><div class="scan-card"><div class="card-top"><span>STARTA PÅ MOBILEN</span><span class="round-icon">↗</span></div><div class="qr" id="liveQr" role="img" aria-label="QR-kod till mobilens pilotsida"></div><strong>Skanna här</strong><p>Rikta mobilens kamera mot koden och öppna länken som visas.</p><div class="card-foot">I den här piloten öppnar koden en mobil startsida. Öppna sedan Swedbank Privat själv.</div></div></section>`;
 else if(state.view==='topics') content=`<section class="browse"><div class="section-heading"><div><div class="eyebrow">VÄLJ ÄRENDE</div><h1>Vad vill du göra?</h1><p>Välj en guide. Själva ärendet gör du på din mobil.</p></div><span class="step-chip">Mobilen är redo ✓</span></div><div class="topic-grid">${topics.map(t=>`<button class="topic" data-topic="${t.id}"><span class="topic-icon">${t.icon}</span><span class="topic-copy"><strong>${t.title}</strong><small>${t.summary}</small></span><span class="time">${t.time}</span><span class="topic-arrow">↗</span></button>`).join('')}</div><div class="safe-banner"><span aria-hidden="true">⌑</span><p><strong>Din mobil är privat.</strong> Ange aldrig BankID-kod, kontonummer eller betalningsuppgifter på den här skärmen.</p></div></section>`;
 else if(state.view==='intro') {let t=state.topic;content=`<section class="intro"><button class="backlink" data-action="topics">← Alla ärenden</button><div class="intro-panel"><span class="topic-icon large">${t.icon}</span><div class="eyebrow">GUIDE · ${t.time}</div><h1>${t.title}</h1><p class="lead">${t.summary} Följ stegen här och gör varje moment på din egen mobil.</p><div class="before"><strong>Innan du börjar</strong><p>${t.before}</p></div><div class="intro-buttons"><button class="primary" data-action="begin">Visa första steget →</button><button class="secondary" data-action="topics">Välj annat ärende</button></div></div></section>`;}
 else if(state.view==='steps') {let t=state.topic, s=t.steps[state.step], n=t.steps.length; content=`<section class="walkthrough"><div class="walk-header"><button class="backlink" data-action="intro">← ${t.title}</button><div class="progress-label">Steg ${state.step+1} av ${n}</div></div><div class="progress"><span style="width:${(state.step+1)/n*100}%"></span></div><div class="workgrid"><div class="instruction"><div class="eyebrow">${t.title.toUpperCase()} · STEG ${String(state.step+1).padStart(2,'0')}</div><h1>${s[0]}</h1><p class="lead">${s[1]}</p><div class="note"><span aria-hidden="true">i</span><div><strong>Tänk på</strong><p>${s[3]}</p></div></div>${/Godkänn|Skriv under|Aktivera/.test(s[2])?`<div class="security">Läs alltid vad som står på mobilen. Godkänn bara ett ärende du själv har startat.</div>`:''}<div class="controls"><button class="secondary" data-action="prev" ${state.step===0?'disabled':''}>← Föregående</button><button class="primary" data-action="next">${state.step===n-1?'Avsluta guiden':'Nästa steg →'}</button></div><button class="help-link" data-action="help">${state.help?'Dölj hjälp':'Be en medarbetare om hjälp'}</button>${state.help?'<div class="help-panel">Visa den här guiden för en medarbetare. Skriv aldrig din personliga kod här och lämna inte ut den.</div>':''}</div><div class="preview-wrap"><div class="device"><div class="device-top"><span class="device-dot"></span><span>Illustration av mobilvy</span><span>•••</span></div><div class="screen"><div class="screen-brand">${glyph}<b>${t.id==='swish'?'Swish':t.id==='bankid'&&state.step>3?'BankID':'Swedbank Privat'}</b></div><div class="screen-title">${s[0]}</div><div class="ui-ghost long"></div><div class="ui-ghost"></div><div class="ui-ghost medium"></div><div class="target"><span>${s[2]}</span><span>↗</span></div><div class="ui-ghost short"></div></div></div><p class="preview-label">Exempelvy. Följ alltid texten som visas i din app.</p></div></div></section>`;}
 else if(state.view==='done'){let t=state.topic; content=`<section class="done"><div class="done-icon">✓</div><div class="eyebrow">GUIDEN ÄR KLAR</div><h1>Hur gick det?</h1><p class="lead">Du har gått igenom guiden för <strong>${t.title.toLowerCase()}</strong>. Kontrollera själv bekräftelsen i appen. Den här skärmen kan inte se om ärendet blev genomfört.</p><div class="done-actions"><button class="primary" data-action="topics">Visa fler ärenden →</button><button class="secondary" data-action="home">Avsluta</button></div></section>`;}
 root.innerHTML=header()+`<main>${content}</main>`+footer();
 if(state.view==='scan') {
   const qrTarget=root.querySelector('#liveQr');
   if(location.protocol==='https:' || location.protocol==='http:') {
     const code=qrcode(0,'M'); code.addData(siteUrl); code.make();
     qrTarget.innerHTML=code.createSvgTag({cellSize:5,margin:4});
   } else qrTarget.textContent='QR-koden visas när sidan är publicerad.';
 }
}
function renderMobile(){root.innerHTML=`<div class="mobile-page">${header(true)}<main class="mobile-main"><div class="phone-eyebrow">DU HAR SKANNAT KODEN</div><div class="mobile-check">✓</div><h1>Nu är du redo på mobilen.</h1><p>Öppna <strong>Swedbank Privat</strong> på din mobil. Gå sedan tillbaka till terminalen och välj vilket ärende du vill ha hjälp med.</p><div class="mobile-order"><div><b>1</b><span>Öppna Swedbank Privat på mobilen.</span></div><div><b>2</b><span>Tryck på ”Jag har öppnat appen” på terminalen.</span></div><div><b>3</b><span>Följ guiden medan du använder appen.</span></div></div><a class="secondary mobile-link" href="https://www.swedbank.se/privat/digitala-tjanster/vara-appar.html" target="_blank" rel="noopener noreferrer">Har du inte appen? Läs på Swedbank.se ↗</a><p class="mobile-safety">Ange inga koder eller kontouppgifter på den här pilotsidan. Det är alltid du som loggar in och godkänner i bankens appar.</p></main>${footer()}</div>`;}
root.addEventListener('click',e=>{let t=e.target.closest('[data-topic]');if(t){state.topic=topics.find(x=>x.id===t.dataset.topic);state.view='intro';state.step=0;state.help=false;render();window.scrollTo(0,0);return;}let a=e.target.closest('[data-action]')?.dataset.action;if(!a)return;if(a==='home'){state.view='scan';state.topic=null}if(a==='topics')state.view='topics';if(a==='intro')state.view='intro';if(a==='begin'){state.step=0;state.view='steps'}if(a==='prev')state.step=Math.max(0,state.step-1);if(a==='next'){if(state.step<state.topic.steps.length-1)state.step++;else state.view='done'}if(a==='help')state.help=!state.help;render();window.scrollTo(0,0)});
render();
