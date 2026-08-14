export interface Book {
  id: string
  title: string
  author: string
  year?: string | null
  category: string
  buyUrl?: string
  description?: string
  cover: string
}

export const books: Book[] = [
  {
    "id": "epopeea-lui-ghilgamesh",
    "category": "Nodurile Civilizației occidentale",
    "title": "Epopeea lui Ghilgameș",
    "author": "Anonim",
    "year": "Secolul XVIII î.Hr.",
    "buyUrl": "https://www.libris.ro/carte/epopeea-lui-ghilgames-ed-2014/861787",
    "description": "Cea mai veche operă literară a umanității, epopeea mesopotamiană narează căutarea nemuririi de către regele Ghilgameș din Uruk și prietenia sa legendară cu Enkidu.",
    "cover": "/covers/epopeea-lui-ghilgamesh.jpg"
  },
  {
    "id": "metamorfozele-cetatii",
    "title": "Metamorfozele cetatii",
    "author": "Pierre Manent",
    "year": "2013",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/metamorfozele-cetatii",
    "description": "Subtil şi, intelectualmente, sprinten, chibzuit şi descurcăreţ, asemenea miticului Ulise, autorul ştie de unde porneşte (invenţia politicii înaintea cetăţii, cu un război aşa cum îl duc aheii) şi unde...",
    "cover": "/covers/metamorfozele-cetatii.jpg"
  },
  {
    "id": "viata-de-toate-zilele-in-grecia-secolului-lui-pericle",
    "title": "Viața de toate zilele în Grecia secolului lui Pericle",
    "author": "Robert Flaceliere",
    "year": "2011",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/viata-de-toate-zilele-in-grecia-secolului-lui-pericle",
    "description": "După aproape o jumătate de secol de la apariţia ei în Franţa, şi după trei decenii de la prima sa ediţie în limba română, cartea elenistului francez Robert Flacelière, membru al Academiei franceze, nu...",
    "cover": "/covers/viata-de-toate-zilele-in-grecia-secolului-lui-pericle.jpg"
  },
  {
    "id": "civilizatia-romana",
    "title": "Civilizația romană",
    "author": "Pierre Grimal",
    "year": "2022",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/civilizatia-romana",
    "description": "Traducere de Wilhelm Tauwinkl Desene de Rareș Ionașcu „Cum a fost oare posibil ca limba și cultura unui mic grup etnic din Latium să devină limba și cultura unui imperiu universal, moștenirea acestuia...",
    "cover": "/covers/civilizatia-romana.jpg"
  },
  {
    "id": "istoria-declinului-si-a-prabusirii-imperiului-roman",
    "title": "Istoria declinului și a prăbușirii Imperiului Roman",
    "author": "Edward Gibbon",
    "year": "2018",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/istoria-declinului-si-a-prabusirii-imperiului-roman",
    "description": "Antologie, traducere și note de Dan Hurmuzescu Introducere și tabel cronologic de Dionisie Constantin Pîrvuloiu Nici acum nu pot uita sau exprima puternicele emoţii care îmi învolburau mintea când am...",
    "cover": "/covers/istoria-declinului-si-a-prabusirii-imperiului-roman.jpg"
  },
  {
    "id": "amurgul-evului-mediu",
    "title": "Amurgul Evului Mediu",
    "author": "Johan Huizinga",
    "year": "2025",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/amurgul-evului-mediu-2025",
    "description": "Traducere de H.R. Radian „Nu știu o altă carte de istorie a civilizației europene care, asemeni celei a lui Huizinga, să fi strâns laolaltă atâta rafinament, erudiție și har narativ. După cum nu știu...",
    "cover": "/covers/amurgul-evului-mediu.jpg"
  },
  {
    "id": "clinamen-cum-a-inceput-renasterea",
    "title": "Clinamen Cum a inceput Renasterea",
    "author": "Stephen Greenblatt",
    "year": "2014",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/clinamen-0",
    "description": "EBOOK – EPUB / PDF National Book Award, Pulitzer Prize Dicţionarul latin prezintă lapidar: „clīnāmen, minis n. înclinaţie“. Sub această definiţie exiguă se ascunde o întreagă istorie, termenul fiind u...",
    "cover": "/covers/clinamen-cum-a-inceput-renasterea.jpg"
  },
  {
    "id": "istoria-renasterii",
    "category": "Nodurile Civilizației occidentale",
    "title": "Cultura Renașterii în Italia",
    "author": "Jacob Burckhardt",
    "year": "1860",
    "buyUrl": "https://www.targulcartii.ro/jacob-burckhardt/cultura-renasterii-in-italia?an=1969&editura=Pentru+Literatura&coperta=Brosata+(paperback)&pid=288806",
    "description": "Studiul monumental care a definit conceptul istoriografic modern de Renaștere și apariția individului liber, a geniului artistic și a conștiinței umaniste.",
    "cover": "/covers/istoria-renasterii.jpg"
  },
  {
    "id": "criza-constiintei-europene",
    "title": "Criza constiintei europene",
    "author": "Paul Hazard",
    "year": "2007",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/criza-constiintei-europene",
    "description": "\"Ce este Europa? O gandire vesnic nesatisfacuta. Neinduratoare cu ea insasi, cauta fara ragaz doua lucruri: unul e fericirea, iar celalalt, care-i este si mai indispensabil, si mai drag, adevarul. De...",
    "cover": "/covers/criza-constiintei-europene.jpg"
  },
  {
    "id": "iesirea-din-teroare-termidor-si-revolutia",
    "title": "Ieșirea din Teroare. Termidor și Revoluția",
    "author": "Bronislaw Baczko",
    "year": "1993",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/iesirea-din-teroare-termidor-si-revolutia",
    "description": "La 9 termidor Conventia ii scoate in afara legii pe Robespierre, Saint Just si acolitii lor. A doua zi, toti vor fi ghilotinati. Incepe o perioada tulbure marcata de o dilema politica inedita. Cum se...",
    "cover": "/covers/iesirea-din-teroare-termidor-si-revolutia.jpg"
  },
  {
    "id": "istoria-civilizatiei-in-europa",
    "title": "Istoria civilizației în Europa",
    "author": "Francois Guizot",
    "year": "2000",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/istoria-civilizatiei-europa",
    "description": "Cartea omului politic si istoricului francez Francois Guizot este o lucrare clasica ce a marcat profund o intreaga pleiada de mari ganditori de la mijlocul secolului al XIX-lea, intre care Alexis de T...",
    "cover": "/covers/istoria-civilizatiei-in-europa.jpg"
  },
  {
    "id": "viena-lui-wittgenstein",
    "title": "Viena lui Wittgenstein",
    "author": "Allan Janik Stephen Toulmin",
    "year": "1998",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/viena-lui-wittgenstein",
    "description": "Studiul publicat in 1973 de Janik si Toulmin aduce o schimbare radicala de perspectiva asupra filozofiei lui Wittgenstein. Interpretarea „logica“ a Tractatus-ului, impusa de critica anglo-saxona si ne...",
    "cover": "/covers/viena-lui-wittgenstein.jpg"
  },
  {
    "id": "lumea-de-ieri",
    "title": "Lumea de ieri",
    "author": "Stefan Zweig",
    "year": "2025",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/lumea-de-ieri-2023",
    "description": "Traducere de Ion Nastasia Evoluția Europei între 1895 și 1941, într-una din cele mai importante cărți-document ale epocii noastre „Lumea de ieri“ este Viena și Europa de dinaintea Primului Război Mond...",
    "cover": "/covers/lumea-de-ieri.jpg"
  },
  {
    "id": "nenorocirea-secolului",
    "title": "Nenorocirea secolului",
    "author": "Alain Besancon",
    "year": "2017",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/nenorocirea-secolului-2",
    "description": "Traducere de Mona Antohi „După publicarea Cărții negre a comunismului, un ziarist a declarat că cele 85 de milioane de victime nu afectau prin nimic idealul comunist, fiind doar o regretabilă rătăcire...",
    "cover": "/covers/nenorocirea-secolului.jpg"
  },
  {
    "id": "originile-totalitarismului",
    "title": "Originile totalitarismului",
    "author": "Hannah Arendt",
    "year": "2014",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/originile-totalitarismului-1",
    "description": "„Cartea aceasta a fost scrisă având tot timpul în faţa ochilor un fundal atât de optimism disproporţionat, cât şi de disperare fără limite. Ea susţine că Progresul şi Catastrofa sunt două feţe ale ace...",
    "cover": "/covers/originile-totalitarismului.jpg"
  },
  {
    "id": "reflectii-despre-comunism",
    "title": "Reflectii despre comunism",
    "author": "Thierry Wolton",
    "year": "2022",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/reflectii-despre-comunism",
    "description": "Cu un cuvânt al autorului către cititorii români Traducere de Marieva‑Cătălina Ionescu „Thierry Wolton sfâșie vălul care încă acoperă crimele regimului și sfidează imperativele care-au împiedicat cond...",
    "cover": "/covers/reflectii-despre-comunism.jpg"
  },
  {
    "id": "o-istorie-a-lumii-moderne",
    "title": "O istorie a lumii moderne",
    "author": "Paul Johnson",
    "year": "2019",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/o-istorie-a-lumii-moderne-1",
    "description": "Traducere de Luana Schidu „Istoric al ideilor, mentalităţilor şi pasiunilor colective, gînditor conservator mereu iconoclast şi imprevizibil, Paul Johnson oferă în acest volum o perspectivă lucidă asu...",
    "cover": "/covers/o-istorie-a-lumii-moderne.jpg"
  },
  {
    "id": "arhipelagul-gulag",
    "category": "Nodurile Civilizației occidentale",
    "title": "Arhipelagul Gulag",
    "author": "Aleksandr Soljenițîn",
    "year": "1973",
    "buyUrl": "https://carturesti.ro/carte/arhipelagul-gulag-volumele-i-iii-62513",
    "description": "Monumentală frescă istorică și mărturie zguduitoare a sistemului de lagăre de muncă forțată din Uniunea Sovietică, care a dezvăluit lumii întregi ororile totalitarismului.",
    "cover": "/covers/arhipelagul-gulag.jpg"
  },
  {
    "id": "jurnalul-annei-frank",
    "title": "Jurnalul Annei Frank",
    "author": "Anne Frank",
    "year": "2025",
    "category": "Nodurile Civilizației occidentale",
    "buyUrl": "https://humanitas.ro/humanitas/carte/jurnalul-annei-frank-2023",
    "description": "Versiune definitivă a Jurnalului Annei Frank tradusă după originalul neerlandez Traducere și note de Gheorghe Nicolaescu „Era o tânără scriitoare minunată. Era cineva la cei treisprezece ani ai ei… Ar...",
    "cover": "/covers/jurnalul-annei-frank.jpg"
  },
  {
    "id": "scrisori-din-rusia",
    "title": "Scrisori din Rusia",
    "author": "Marchizul de Custine",
    "year": "2025",
    "category": "Pachetul rus",
    "buyUrl": "https://humanitas.ro/humanitas/carte/scrisori-din-rusia-2022",
    "description": "Ediţie, prefaţă şi dosar de Pierre Nora • Traducere de Irina Negrea Democrația în America a lui Tocqueville și Rusia în 1839 a lui Custine, observă Pierre Nora în prefața acestui volum, sunt două cărț...",
    "cover": "/covers/scrisori-din-rusia.jpg"
  },
  {
    "id": "scrisori-filozofice-catre-o-doamna",
    "title": "Scrisori filozofice catre o doamna",
    "author": "Piotr Ceaadaev",
    "year": "2022",
    "category": "Pachetul rus",
    "buyUrl": "https://humanitas.ro/humanitas/carte/scrisori-filozofice-catre-o-doamna-2022",
    "description": "Traducere şi note de Janina Ianoşi • Prezentare de Ion Ianoşi Cele opt Scrisori filozofice către o doamnă redactate în franceză alcătuiesc opera capitală a lui Piotr Ceaadaev, unul dintre întemeietori...",
    "cover": "/covers/scrisori-filozofice-catre-o-doamna.jpg"
  },
  {
    "id": "sfanta-rusie",
    "title": "Sfanta Rusie",
    "author": "Alain Besancon",
    "year": "2022",
    "category": "Pachetul rus",
    "buyUrl": "https://humanitas.ro/humanitas/carte/sfanta-rusie-2022",
    "description": "Traducere de Vlad Russo De ce vorbim despre sfânta Rusie și Rusia eternă, de ce folosim atât de des expresia „sufletul rus“ când analizăm un roman de Tolstoi, o piesă de Cehov sau un balet de Ceaikovs...",
    "cover": "/covers/sfanta-rusie.jpg"
  },
  {
    "id": "marea-teroare",
    "title": "Marea teroare",
    "author": "Robert Conquest",
    "year": "1998",
    "category": "Pachetul rus",
    "buyUrl": "https://humanitas.ro/humanitas/carte/marea-teroare",
    "description": "Publicata din 1990 incoace intr-o editie revazuta si adusa la zi, dar cunoscuta in Occident inca din 1971, cutremuratoarea carte a istoricului britanic Robert Conquest continua sa fie considerata – at...",
    "cover": "/covers/marea-teroare.jpg"
  },
  {
    "id": "rusia-un-mileniu-de-istorie",
    "title": "Rusia Un mileniu de istorie",
    "author": "Martin Sixsmith",
    "year": "2016",
    "category": "Pachetul rus",
    "buyUrl": "https://humanitas.ro/humanitas/carte/rusia",
    "description": "„Un tablou cuprinzător al întregii istorii a Rusiei, de la întemeierea primului stat pe pământ rusesc în secolul al IX-lea până în prezent.“ – Choice E oare imensitatea imperiului de la răsărit o pova...",
    "cover": "/covers/rusia-un-mileniu-de-istorie.jpg"
  },
  {
    "id": "cele-mai-frumoase-povestiri-din-biblie",
    "title": "Cele mai frumoase povestiri din Biblie",
    "author": "***",
    "year": "2013",
    "category": "Cărți pentru noptieră",
    "buyUrl": "https://humanitas.ro/humanitas/carte/cele-mai-frumoase-povestiri-din-biblie-0",
    "description": "EBOOK – EPUB / PDF „În vremurile de azi, o carte ca aceasta e mai mult decît binevenită. Ritmul în care trăim, configuraţia fiecărei zile (din care răgazurile, perioadele de «otium» fertil sunt, pract...",
    "cover": "/covers/cele-mai-frumoase-povestiri-din-biblie.jpg"
  },
  {
    "id": "arcasul-fara-arc",
    "title": "Arcasul fara arc",
    "author": "Ștefan Liiceanu (ed.)",
    "year": "2022",
    "category": "Cărți pentru noptieră",
    "buyUrl": "https://humanitas.ro/humanitas/carte/arcasul-fara-arc",
    "description": "„Plăcerea lecturii acestui volum va veni din confruntarea cititorului cu simplitatea în forma ei cea mai rafinată. Cum se poate ca atât de puţine cuvinte să spună atât de mult? se va întreba cititorul...",
    "cover": "/covers/arcasul-fara-arc.jpg"
  },
  {
    "id": "tsurezuregusa-insemnari-din-ceasuri-de-zabava",
    "title": "Tsurezuregusa Însemnări din ceasuri de zăbavă",
    "author": "Kenko",
    "year": "2016",
    "category": "Cărți pentru noptieră",
    "buyUrl": "https://humanitas.ro/humanitas/carte/tsurezuregusa-insemnari-din-ceasuri-de-zabava",
    "description": "Scrise aproximativ între 1330 și 1332, cele 243 de scurte eseuri din Tsurezuregusa (Însemnări din ceasuri de zăbavă) ale călugărului budist Kenkō reprezintă una dintre cele mai studiate și admirate lu...",
    "cover": "/covers/tsurezuregusa-insemnari-din-ceasuri-de-zabava.jpg"
  },
  {
    "id": "cercul-mincinosilor",
    "title": "Cercul mincinoșilor",
    "author": "Jean-Claude Carriere",
    "year": "2024",
    "category": "Cărți pentru noptieră",
    "buyUrl": "https://humanitas.ro/humanitas/carte/cercul-mincinosilor-2021",
    "description": "Traducere de Brîndușa Prelipceanu și Emanoil Marcu Cele mai frumoase poveşti ale omenirii sunt anonime, iar cei mai iscusiţi povestitori sunt cei care inventează lumi şi reinventează lumea. Această mi...",
    "cover": "/covers/cercul-mincinosilor.jpg"
  },
  {
    "id": "regele-si-cadavrul",
    "title": "Regele si cadavrul",
    "author": "Heinrich Zimmer",
    "year": "2024",
    "category": "Cărți pentru noptieră",
    "buyUrl": "https://humanitas.ro/humanitas/carte/regele-si-cadavrul-2021",
    "description": "Cuvânt înainte de Joseph Campbell • Traducere de Sorin Mărculescu „În câte cărți, ca editor, nu am crezut în zadar, nu mi-am pus speranțele, și pe câte nu le‑am făcut să intre în lume cu gândul de a î...",
    "cover": "/covers/regele-si-cadavrul.jpg"
  },
  {
    "id": "caiete",
    "title": "Caiete",
    "author": "Emil Cioran",
    "year": "2016",
    "category": "Cărți pentru noptieră",
    "buyUrl": "https://humanitas.ro/humanitas/carte/caiete-0",
    "description": "EBOOK – EPUB / PDF „Operă de moralist? Literatură? Filozofie? Poate că cel mai corect ar fi să numim paginile Caietelor lui Cioran jurnalul condiţiei umane. Nimeni n-a vorbit cu atâta sinceritate, cu...",
    "cover": "/covers/caiete.jpg"
  },
  {
    "id": "moartea-lui-ivan-ilici",
    "title": "Moartea lui Ivan Ilici",
    "author": "Lev Tolstoi",
    "year": "2010",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/moartea-lui-ivan-ilici-1",
    "description": "EBOOK – EPUB / PDF Într-o zi, Ivan Ilici înţelege că e muritor. A învăţat asta şi la şcoală: oamenii sunt muritori, Caius este om, deci Caius este muritor. Omul în general trebuie să moară. El însă nu...",
    "cover": "/covers/moartea-lui-ivan-ilici.jpg"
  },
  {
    "id": "cei-morti",
    "title": "Cei morti",
    "author": "James Joyce",
    "year": "2012",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas-multimedia/audiobook/cei-morţi",
    "description": "„Cei morţi“ sunt oare morţii din cimitirele Irlandei acoperite de zăpada care nu mai conteneşte să cadă? Şi, printre ei, Michael Furrey, cel despre care Gabriel Conroy află pe neaşteptate de la soţia...",
    "cover": "/covers/cei-morti.jpg"
  },
  {
    "id": "micul-domn-friedemann",
    "category": "Cele mai frumoase nuvele ale lumii",
    "title": "Micul domn Friedemann",
    "author": "Thomas Mann",
    "year": "1897",
    "buyUrl": "https://humanitas.ro/humanitas-fiction/carte/moartea-la-venetia",
    "description": "Una dintre cele mai emoționante nuvele de tinerețe ale lui Thomas Mann, explorând tragedia unui om vulnerabil a cărui viață ordonată este zdruncinată de o pasiune mistuitoare.",
    "cover": "/covers/micul-domn-friedemann.jpg"
  },
  {
    "id": "iubiri-caraghioase",
    "title": "Iubiri caraghioase",
    "author": "Milan Kundera",
    "year": "2015",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/iubiri-caraghioase-2",
    "description": "Iubirea este pentru Milan Kundera altceva decât blândă visare sau suspin abisal, ceva mult mai palpabil, «epidermic» aproape. Nu maladive fantasme, nu obscure pulsiuni îi împing pe eroii nuvelelor sal...",
    "cover": "/covers/iubiri-caraghioase.jpg"
  },
  {
    "id": "pusca-de-vanatoare",
    "title": "Pusca de vanatoare",
    "author": "Yasushi Inoue",
    "year": "2004",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/pusca-de-vanatoare-0",
    "description": "Cum e posibil ca o pusca de vanatoare dintr-un poem aparut intr-o revista cinegetica sa lege patru destine in trei scrisori? Cum poate sa ucida o pusca pe tragaciul careia nimeni nu apasa? De ce moare...",
    "cover": "/covers/pusca-de-vanatoare.jpg"
  },
  {
    "id": "rashomon",
    "title": "Rashomon",
    "author": "Ryunosuke Akutagawa",
    "year": "2012",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/rashomon-0",
    "description": "EBOOK – EPUB / PDF O noapte cu întâmplări sinistre sub vechea poartă Rashomon. O crimă relatată de martori care se contrazic între ei şi-şi asumă, fiecare pe cont propriu, fărădelegea. O vizită care-ş...",
    "cover": "/covers/rashomon.jpg"
  },
  {
    "id": "novecento",
    "title": "Novecento",
    "author": "Alessandro Baricco",
    "year": "2002",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/novecento",
    "description": "Cum il cheama? Danny Boodmann T D Lemon Novecento. Unde s-a nascut? In mijlocul oceanului. Unde a fost gasit? Pe un pian din salonul de dans de la clasa I. Cine-i sunt parintii? Nu stie nimeni. Cu ce...",
    "cover": "/covers/novecento.jpg"
  },
  {
    "id": "remember",
    "title": "Remember",
    "author": "Mateiu Caragiale",
    "year": "2013",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/remember",
    "description": "EBOOK – EPUB „Şapte ani, o poveste, o întâmplare ciudată sau poate doar un vis... Se-ntâmplă la Berlin în 1907. Se leagă o prietenie stranie iar de aici, o mulţime de întrebări se ivesc. Despre priete...",
    "cover": "/covers/remember.jpg"
  },
  {
    "id": "vanturile",
    "title": "Vanturile",
    "author": "Mario Vargas Llosa",
    "year": "2023",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas-fiction/carte/vanturile",
    "description": "Traducere de Tudora Șandru Mehedinți Prefață de Mircea Mihăieș Publicată de revista Letras Libres în octombrie 2021, elegie crudă pentru sfârșitul umanismului, povestirea Vânturile reunește speranțele...",
    "cover": "/covers/vanturile.jpg"
  },
  {
    "id": "verdictul",
    "category": "Cele mai frumoase nuvele ale lumii",
    "title": "Verdictul și alte povestiri",
    "author": "Franz Kafka",
    "year": "1913",
    "buyUrl": "https://humanitas.ro/humanitas-fiction/carte/metamorfoza",
    "description": "Nuvelele emblematice ale lui Kafka despre relațiile tensionate tată-fiu, vinovăție existențială, judecată interioară și stranietatea condiției umane moderne.",
    "cover": "/covers/verdictul.jpg"
  },
  {
    "id": "un-domn-foarte-batran-cu-niste-aripi-enorme",
    "category": "Cele mai frumoase nuvele ale lumii",
    "title": "Un domn foarte bătrân cu niște aripi enorme",
    "author": "Gabriel García Márquez",
    "year": "1955",
    "buyUrl": "https://poezie.ro/clasici/gabriel-garcia-marquez/proza/un-domn-foarte-batran-cu-niste-aripi-enorme-2",
    "description": "O bijuterie a realismului magic în care apariția unui înger căzut într-o curte săracă devine prilej pentru revelarea naturii umane între curiozitate, cruzime și miracol.",
    "cover": "/covers/un-domn-foarte-batran-cu-niste-aripi-enorme.jpg"
  },
  {
    "id": "povestiri-orientale",
    "title": "Povestiri orientale",
    "author": "Marguerite Yourcenar",
    "year": "2006",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/povestiri-orientale-1",
    "description": "Toti suntem mai multe lucruri deodata, crampeie, umbre, naluci, ii spune un intelept unei zeite nefericite, intr-una dintre povestirile acestei carti. Suferim si simtim placere, suntem partasi la pove...",
    "cover": "/covers/povestiri-orientale.jpg"
  },
  {
    "id": "tibia-si-peroneul",
    "category": "Cele mai frumoase nuvele ale lumii",
    "title": "Tibia și peroneul",
    "author": "Adriana Bittel",
    "year": "1993",
    "buyUrl": "https://humanitas.ro/humanitas/carte/povesti-de-dragoste-la-prima-vedere-2024",
    "description": "Una dintre cele mai rafinate și apreciate proze scurte românești postbelice, o meditație plină de finețe, nostalgie și umor discret asupra fragilității umane.",
    "cover": "/covers/tibia-si-peroneul.jpg"
  },
  {
    "id": "mantaua",
    "title": "Mantaua",
    "author": "Nikolai Gogol",
    "year": "2012",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas-multimedia/audiobook/mantaua-0",
    "description": "„Noi toţi ne tragem din Mantaua lui Gogol.\"F.M. Dostoievski „Se deprinse să nu mai mănânce nimic seara, avea în schimb îmbelşugată hrană spirituală gândindu-se necontenit la viitoarea manta. Şi se păr...",
    "cover": "/covers/mantaua.jpg"
  },
  {
    "id": "ruletistul",
    "title": "Ruletistul",
    "author": "Mircea Cartarescu",
    "year": "2011",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas-multimedia/audiobook/ruletistul",
    "description": "„Nu puteam crede că poate fi adevărat ceea ce urma să se producă. Pentru că Ruletistul anunţase cu câteva săptămâni înainte că la următoarea ruletă va încărca revolverul cu toate cele şase gloanţe! În...",
    "cover": "/covers/ruletistul.jpg"
  },
  {
    "id": "nostalgia",
    "title": "Nostalgia",
    "author": "Mircea Cartarescu",
    "year": "2025",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/nostalgia-2021",
    "description": "„N-am mai scris niciodată povestiri asemenea celor din Nostalgia, căci ele nu pot fi pastişate, continuate sau dezvoltate. După Arhitectul m-am oprit pentru că nu mai era nimic de spus. Nici n-am mai...",
    "cover": "/covers/nostalgia.jpg"
  },
  {
    "id": "lupul-de-stepa",
    "category": "Cele mai frumoase nuvele ale lumii",
    "title": "Lupul de stepă",
    "author": "Hermann Hesse",
    "year": "1927",
    "buyUrl": "https://carturesti.ro/carte/lupul-de-stepa-443505",
    "description": "Romanul capodoperă al lui Hermann Hesse, o explorare profundă a dualității ființei umane sfâșiate între spiritualitate și instinct, între convenția burgheză și libertatea absolută.",
    "cover": "/covers/lupul-de-stepa.jpg"
  },
  {
    "id": "doamna-cu-catelul",
    "category": "Cele mai frumoase nuvele ale lumii",
    "title": "Doamna cu cățelul și alte povestiri",
    "author": "Anton Cehov",
    "year": "1899",
    "buyUrl": "https://humanitas.ro/humanitas-fiction/carte/dragostea",
    "description": "Una dintre cele mai celebre nuvele de dragoste din literatura universală, o poveste de o copleșitoare delicatețe psihologică despre o iubire târzie și imposibilă.",
    "cover": "/covers/doamna-cu-catelul.jpg"
  },
  {
    "id": "momente-si-schite",
    "category": "Cele mai frumoase nuvele ale lumii",
    "title": "Momente și schițe",
    "author": "I.L. Caragiale",
    "year": "1901",
    "buyUrl": "https://carturesti.ro/carte/momente-si-schite-4828182772",
    "description": "Radiografia genială a societății românești, a moravurilor, demagogiei și limbajului vremii, realizată cu un umor satiric inegalabil și o luciditate perenă.",
    "cover": "/covers/momente-si-schite.jpg"
  },
  {
    "id": "trupul-sufletului",
    "title": "Trupul sufletului",
    "author": "Ludmila Ulitskaia",
    "year": "2025",
    "category": "Cele mai frumoase nuvele ale lumii",
    "buyUrl": "https://humanitas.ro/humanitas-fiction/carte/trupul-sufletului",
    "description": "Traducere și note de Luana Schidu „Despre trup știm mult mai multe decât despre suflet. Nimeni nu poate desena o hartă a sufletului. Doar zona de hotar poate fi uneori sesizată. Acolo, pe măsură ce te...",
    "cover": "/covers/trupul-sufletului.jpg"
  },
  {
    "id": "despre-libertate-la-antici-si-moderni",
    "category": "Mari cărți / eseuri",
    "title": "Despre libertate la antici și moderni",
    "author": "Benjamin Constant",
    "year": "1819",
    "buyUrl": "https://www.libris.ro/carte/despre-libertate-la-antici-si-la-moderni-benjamin-constant/862875?srsltid=AfmBOoqOB3fZo9t4Fs_Z9MWFR6wd7ZmsKhrdY3YK0JoDTG_7TY7heFhf",
    "description": "Discursul clasic al liberalismului politic care compară libertatea civică directă a antichității cu libertatea individuală și protecția drepturilor private din epoca modernă.",
    "cover": "/covers/despre-libertate-la-antici-si-moderni.jpg"
  },
  {
    "id": "despre-democratie-in-america",
    "title": "Despre democratie in America",
    "author": "Alexis de Tocqueville",
    "year": "2017",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/despre-democratie-in-america",
    "description": "Prefaţă, cronologie şi bibliograﬁe de François FuretTraducere din franceză de Magdalena Boiangiu, Beatrice Staicu şi Claudia Dumitriu Este, într-adevăr, greu de conceput cum nişte oameni care au renun...",
    "cover": "/covers/despre-democratie-in-america.jpg"
  },
  {
    "id": "despre-libertate",
    "title": "Despre libertate",
    "author": "John Stuart Mill",
    "year": "2014",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/despre-libertate-3",
    "description": "EBOOK GRATUIT / PDF > DESCARCĂ „Mill reprezintă în lumea anglo-americană ceea ce este Nietzsche pentru tradiţia continental-europeană: apogeul «modernităţii». Nu este de mirare că eseul Despre liberta...",
    "cover": "/covers/despre-libertate.jpg"
  },
  {
    "id": "interpretarea-viselor",
    "category": "Mari cărți / eseuri",
    "title": "Interpretarea viselor",
    "author": "Sigmund Freud",
    "year": "1899",
    "buyUrl": "https://www.edituratrei.ro/carte/interpretarea-viselor-opere-esentiale-vol-2/11756/",
    "description": "Lucrarea fundamentală care a întemeiat psihanaliza, stabilind că visele reprezintă calea regală către inconștient și împlinirea deghizată a unor dorințe refulate.",
    "cover": "/covers/interpretarea-viselor.jpg"
  },
  {
    "id": "psihologia-vietii-cotidiene",
    "category": "Mari cărți / eseuri",
    "title": "Psihopatologia vieții cotidiene",
    "author": "Sigmund Freud",
    "year": "1901",
    "buyUrl": "https://www.edituratrei.ro/carte/psihopatologia-vietii-cotidiene-despre-uitare-greseli-de-vorbire-superstitie-si-eroare/11248/",
    "description": "Studiul clasic al lui Freud despre actele ratate, lapsusuri, uitări de nume și gesturi involuntare, demonstrând prezența activă a inconștientului în fiecare moment al vieții zilnice.",
    "cover": "/covers/psihologia-vietii-cotidiene.jpg"
  },
  {
    "id": "conditia-umana",
    "title": "Conditia umana",
    "author": "Hannah Arendt",
    "year": "2025",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/conditia-umana",
    "description": "Ediția a doua, cu un nou cuvânt înainte de Danielle Allen și o introducere de Margaret Canovan Traducere de Georgeta-Anca Ionescu Condiția umană este una dintre cele mai profunde și mai vizionare refl...",
    "cover": "/covers/conditia-umana.jpg"
  },
  {
    "id": "cinci-eseuri-despre-libertate",
    "title": "Cinci eseuri despre libertate",
    "author": "Isaiah Berlin",
    "year": "2010",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/cinci-eseuri-despre-libertate-şi-alte-scrieri",
    "description": "Opera lui Isaiah Berlin, de o fascinantă polifonie, simbolizează un constant efort de a redefini liberalismul în epoca hybrisului ideologic al tiraniilor totalitare (nazismul şi comunismul), cărora le...",
    "cover": "/covers/cinci-eseuri-despre-libertate.jpg"
  },
  {
    "id": "lemnul-stramb-al-omenirii",
    "title": "Lemnul stramb al omenirii",
    "author": "Isaiah Berlin",
    "year": "2021",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/lemnul-stramb-al-omenirii",
    "description": "Ediţie de Henry Hardy • Cuvânt înainte de John Banville • Traducere de Andrei Costea În Lemnul strâmb al omenirii, Isaiah Berlin expune legătura dintre ideile trecutului şi cataclismele sociale şi pol...",
    "cover": "/covers/lemnul-stramb-al-omenirii.jpg"
  },
  {
    "id": "drumul-catre-servitute",
    "title": "Drumul catre servitute",
    "author": "Friedrich Hayek",
    "year": "2006",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/drumul-catre-servitute-1",
    "description": "„Tintele inedite ale cartii lui Hayek erau adeptii planificarii sociale, care voiau sa rationalizeze activitatea economica. Mesajul adresat de Hayek acestui public avea doua laturi. Mai intai, el sust...",
    "cover": "/covers/drumul-catre-servitute.jpg"
  },
  {
    "id": "istoria-intelectuala-a-liberalismului",
    "title": "Istoria intelectuala a liberalismului",
    "author": "Pierre Manent",
    "year": "2013",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/istoria-intelectuala-a-liberalismului-1",
    "description": "Istoria intelectuală a liberalismului - prezentare esenţială a fundamentelor istorice şi filozofice ale ideii liberale – a devenit, în ediţiile sale succesive, o carte de referinţă. Această abordare „...",
    "cover": "/covers/istoria-intelectuala-a-liberalismului.jpg"
  },
  {
    "id": "o-filozofie-politica-pentru-cetatean",
    "title": "O filozofie politica pentru cetatean",
    "author": "Pierre Manent",
    "year": "2003",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/o-filozofie-politica-pentru-cetatean",
    "description": "Cunoscut publicului din Romania prin lucrari precum Istoria intelectuala a liberalismului sau Cetatea omului, Pierre Manent ne ofera acum o familiarizare cu marile teme ale filozofiei politice contemp...",
    "cover": "/covers/o-filozofie-politica-pentru-cetatean.jpg"
  },
  {
    "id": "cele-opt-pacate-capitale-ale-omenirii-civilizate",
    "title": "Cele opt păcate capitale ale omenirii civilizate",
    "author": "Konrad Lorenz",
    "year": "2017",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/cele-opt-pacate-capitale-ale-omenirii-civilizate-3",
    "description": "Omenirea, privită ca specie biologică, pare să-și fi pierdut firescul instinct de conservare. Un rău cu mai multe chipuri amenință dezvoltarea noastră și, în același timp, e tocmai rezultatul acestei...",
    "cover": "/covers/cele-opt-pacate-capitale-ale-omenirii-civilizate.jpg"
  },
  {
    "id": "intelectualii",
    "title": "Intelectualii",
    "author": "Paul Johnson",
    "year": "2015",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/intelectualii-2",
    "description": "Cine sunt intelectualii? Ce reprezintă ei dincolo de imaginea onorabilă pe care o oferă lumii? Sunt oare cei mai potriviţi să conducă destinele omenirii, dând sfaturi de la înălţimea unei moralităţi i...",
    "cover": "/covers/intelectualii.jpg"
  },
  {
    "id": "tradarea-carturarilor",
    "title": "Tradarea carturarilor",
    "author": "Julien Benda",
    "year": "2017",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/tradarea-carturarilor-1",
    "description": "Traducere de Gabriela Creţia „În trecut, omenirea, ghidându-se după valorile impuse de cărturarii ei, făcea răul, dar cinstea binele. Dar se poate afirma că Europa modernă, călăuzită de magiștrii ei c...",
    "cover": "/covers/tradarea-carturarilor.jpg"
  },
  {
    "id": "dubla-flacara",
    "title": "Dubla flacara",
    "author": "Octavio Paz",
    "year": "2017",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/dubla-flacara",
    "description": "Traducere de Cornelia Rădulescu Dubla flacără explorează legătura intimă dintre sex, erotism și dragoste – temele preferate ale lui Octavio Paz, laureat al Premiului Nobel. Pornind de la Banchetul lui...",
    "cover": "/covers/dubla-flacara.jpg"
  },
  {
    "id": "partea-diavolului",
    "title": "Partea Diavolului",
    "author": "Denis de Rougemont",
    "year": "2006",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/partea-diavolului",
    "description": "O dramatica meditatie sub semnul luciditatii, o invitatie la o dezbatere mereu actuala, intr-o lume cum e cea a noastra, azi, in care „micile rele“ si Raul ne sunt deopotriva – fara iluzii – consubsta...",
    "cover": "/covers/partea-diavolului.jpg"
  },
  {
    "id": "in-castelul-lui-barba-albastra",
    "title": "In castelul lui Barba Albastra",
    "author": "George Steiner",
    "year": "2014",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/in-castelul-lui-barba-albastra-0",
    "description": "EBOOK – EPUB / PDF „Multă vreme am crezut că progresul moralei însoţeşte dezvoltarea culturii. Nazismul, arată George Steiner, a pulverizat această iluzie. Buchenwald se află la doar câţiva kilometri...",
    "cover": "/covers/in-castelul-lui-barba-albastra.jpg"
  },
  {
    "id": "adevarul-minciunilor",
    "title": "Adevarul minciunilor",
    "author": "Mario Vargas Llosa",
    "year": "2005",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/adevarul-minciunilor",
    "description": "Viata este una si nu are limite. Citirea romanelor sparge acest tipar si ceea ce se dovedise unic se transforma in multe, in nenumarate vieti. Fiindca asta este marea putere a literaturii, iar volumul...",
    "cover": "/covers/adevarul-minciunilor.jpg"
  },
  {
    "id": "cortina",
    "title": "Cortina",
    "author": "Milan Kundera",
    "year": "2023",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas-fiction/carte/cortina-2023",
    "description": "Traducere și note de Vlad Russo „O cortină magică, ţesută din legende, atârna între noi şi lume. Cervantes l-a trimis pe don Quijote în peregrinare şi a sfâşiat cortina. Lumea i s-a arătat cavalerului...",
    "cover": "/covers/cortina.jpg"
  },
  {
    "id": "arta-romanului",
    "title": "Arta romanului",
    "author": "Milan Kundera",
    "year": "2008",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/arta-romanului",
    "description": "In sapte texte relativ independente, Kundera isi expune conceptia personala despre romanul european (\"arta nascuta din rasul lui Dumnezeu\"). Unul dintre texte ii este consacrat lui Broch, altul lui Ka...",
    "cover": "/covers/arta-romanului.jpg"
  },
  {
    "id": "sensul-existentei-umane",
    "title": "Sensul existentei umane",
    "author": "Edward O Wilson",
    "year": "2018",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/sensul-existentei-umane-0",
    "description": "EBOOK – EPUB / PDF Traducere de Elena Drăgușin-Richard Explorator neobosit al lumii vii, creator al unor noi discipline şi al unor concepte fundamentale în ştiinţele biologice, Edward O. Wilson îşi pu...",
    "cover": "/covers/sensul-existentei-umane.jpg"
  },
  {
    "id": "luminile-si-umbrele-sufletului",
    "title": "Luminile și umbrele sufletului",
    "author": "Petru Cretia",
    "year": "2023",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/luminile-si-umbrele-sufletului-2023",
    "description": "„Cartea aceasta nu vrea să fie altceva decât o călăuză către adevărul despre noi înşine, pe un drum la fel de greu de desluşit ca acela din Călăuza lui Tarkovski. Dar nu de negăsit. Omul este o fiinţă...",
    "cover": "/covers/luminile-si-umbrele-sufletului.jpg"
  },
  {
    "id": "ahile-ariel",
    "title": "Ahile Ariel",
    "author": "Petru Cretia",
    "year": "2023",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/ahile-ariel-2023",
    "description": "Prefață de Gabriel Liiceanu „Putea simți orice și putea gândi orice. Știa tot, citise tot. În greacă, latină, engleză, franceză, italiană. Când scria despre contingență, despre libertate sau despre et...",
    "cover": "/covers/ahile-ariel.jpg"
  },
  {
    "id": "cuvant-impreuna-despre-rostirea-romaneasca",
    "title": "Cuvânt împreună despre rostirea românească",
    "author": "Constantin Noica",
    "year": "2021",
    "category": "Mari cărți / eseuri",
    "buyUrl": "https://humanitas.ro/humanitas/carte/cuvant-impreuna-despre-rostirea-romaneasca-2021",
    "description": "Ediție îngrijită şi cuvânt înainte de Grigore Vida „Numai în cuvintele limbii tale se întâmplă să-ţi amintești de lucruri pe care nu le-ai învăţat niciodată. Căci orice cuvânt este o uitare și în apro...",
    "cover": "/covers/cuvant-impreuna-despre-rostirea-romaneasca.jpg"
  },
  {
    "id": "vietile-si-doctrinele-filozofilor",
    "category": "Sinteze filozofice",
    "title": "Despre viețile și doctrinele filosofilor",
    "author": "Diogene Laerțios",
    "year": "Secolul III d.Hr.",
    "buyUrl": "https://polirom.ro/img/cms/Biblioteca/Despre%20vietile%20si%20doctrinele.pdf",
    "description": "Sursa primară inestimabilă pentru cunoașterea filosofiei grecești antice, conținând biografiile, anecdotele și doctrinele marilor gânditori de la presocratici până la epicurieni.",
    "cover": "/covers/vietile-si-doctrinele-filozofilor.jpg"
  },
  {
    "id": "mirarea-filozofica",
    "title": "Mirarea filozofica",
    "author": "Jeanne Hersch",
    "year": "2022",
    "category": "Sinteze filozofice",
    "buyUrl": "https://humanitas.ro/humanitas/carte/mirarea-filozofica-2022",
    "description": "Traducere de Drăgan Vasile • Cu un portret însoțitor de Monica Lovinescu „Facultatea mirării îi este proprie omului. Ne propunem aici să o reactualizăm. Cititorul va regăsi, sper, în mirarea altuia pr...",
    "cover": "/covers/mirarea-filozofica.jpg"
  },
  {
    "id": "pe-scara-din-dos-a-filozofiei",
    "title": "Pe scara din dos a filozofiei",
    "author": "Wilhelm Weischedel",
    "year": "2012",
    "category": "Sinteze filozofice",
    "buyUrl": "https://humanitas.ro/humanitas/carte/pe-scara-din-dos-a-filozofiei-0",
    "description": "Potrivit opiniei comune, dacă vrei să cobori statura unei personalităţi culturale, e de ajuns să spui că a dus o banală viaţă omenească: a avut aceleaşi necazuri, aceleaşi slăbiciuni, aceeaşi moarte c...",
    "cover": "/covers/pe-scara-din-dos-a-filozofiei.jpg"
  },
  {
    "id": "filozofia-ca-mod-de-viata",
    "title": "Filozofia ca mod de viata",
    "author": "Pierre Hadot",
    "year": "2019",
    "category": "Sinteze filozofice",
    "buyUrl": "https://humanitas.ro/humanitas/carte/filozofia-ca-mod-de-viata",
    "description": "Traducere de Adrian Cotora La data convorbirilor reunite în această carte, Pierre Hadot se apropia de optzeci de ani. Avea în urma sa decenii întregi de activitate ştiinţifică, didactică şi editorială...",
    "cover": "/covers/filozofia-ca-mod-de-viata.jpg"
  },
  {
    "id": "fragmentele-presocraticilor",
    "title": "Fragmentele presocraticilor",
    "author": "Hans von Arnim (ed.)",
    "year": "2016",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/humanitas/carte/fragmentele-stoicilor-vechi-0",
    "description": "EBOOK – EPUB / PDF „Publicând prezenta ediţie bilingvă ne propunem să facem accesibil cercetătorilor filozofiei antice, studenţilor şi publicului român interesat de filozofie unul dintre cele mai valo...",
    "cover": "/covers/fragmentele-presocraticilor.jpg"
  },
  {
    "id": "dialoguri",
    "category": "Niște filozofi lizibili",
    "title": "Dialoguri socratice (Apărarea lui Socrate. Criton)",
    "author": "Platon",
    "year": "Secolul IV î.Hr.",
    "buyUrl": "https://humanitas.ro/humanitas/carte/dialoguri-socratice-0",
    "description": "Textele fondatoare ale gândirii occidentale despre procesul, condamnarea și demnitatea exemplară a lui Socrate în fața legii și a morții.",
    "cover": "/covers/dialoguri.jpg"
  },
  {
    "id": "banchetul-sau-despre-iubire",
    "title": "Banchetul sau Despre iubire",
    "author": "Platon",
    "year": "2017",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/humanitas/carte/banchetul-sau-despre-iubire-2",
    "description": "Traducere, studiu introductiv și note de Petru Creția „Cititorul are aici, în românește, o scriere străveche și, prin veacuri, ilustră: Banchetul lui Platon. Tot ce s-a spus despre iubire de la Banche...",
    "cover": "/covers/banchetul-sau-despre-iubire.jpg"
  },
  {
    "id": "manualul",
    "category": "Niște filozofi lizibili",
    "title": "Manualul (Encheiridion)",
    "author": "Epictet",
    "year": "Secolul II d.Hr.",
    "buyUrl": "https://www.edituraseneca.ro/carti/epictet-manualul-editie-speciala",
    "description": "Ghidul esențial al stoicismului practic despre discernământul între lucrurile care depind de noi și cele care nu depind de noi, cheia seninătății și a libertății sufletești.",
    "cover": "/covers/manualul.jpg"
  },
  {
    "id": "ganduri-catre-sine-insusi",
    "title": "Gânduri către sine însuși",
    "author": "Marc Aureliu",
    "year": "2025",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/humanitas/carte/ganduri-catre-sine-insusi-2020",
    "description": "Traducere din greaca veche, note și indice de Cristian Bejan „O carte de căpătâi a civilizaţiei europene.“ — ANDREI PLEŞU „Cu ani în urmă am cumpărat o ediţie veche din Marc Aureliu care purta următoa...",
    "cover": "/covers/ganduri-catre-sine-insusi.jpg"
  },
  {
    "id": "scrisori-catre-lucilius",
    "category": "Niște filozofi lizibili",
    "title": "Scrisori către Lucilius",
    "author": "Seneca",
    "year": "65 d.Hr.",
    "buyUrl": "https://humanitas.ro/humanitas/carte/scrisori-catre-luciliu",
    "description": "Capodopera eticii stoice antice, o culegere de sfaturi înțelepte și reflecții practice despre virtute, timp, prietenie, stăpânirea de sine și acceptarea serenă a destinului.",
    "cover": "/covers/scrisori-catre-lucilius.jpg"
  },
  {
    "id": "eseuri",
    "title": "Eseuri",
    "author": "Montaigne",
    "year": "2021",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/humanitas/carte/eseuri-2021",
    "description": "Traducere din franceză, cronologie şi note de Vlad Russo Cu o prefaţă de Michel Onfray La 50 de ani de la prima publicare integrală a Eseurilor lui Montaigne în limba română, Editura Humanitas oferă c...",
    "cover": "/covers/eseuri.jpg"
  },
  {
    "id": "religia-in-limitele-ratiunii-pure",
    "title": "Religia in limitele ratiunii pure",
    "author": "Immanuel Kant",
    "year": "2023",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/humanitas/carte/religia-in-limitele-ratiunii-pure",
    "description": "Traducere de Radu Gabriel Pârvu Publicată în 1792, Religia în limitele rațiunii pure, lucrare de mare însemnătate în istoria gândirii religioase occidentale, reprezintă o încercare de a demonstra că m...",
    "cover": "/covers/religia-in-limitele-ratiunii-pure.jpg"
  },
  {
    "id": "lumea-ca-vointa-si-reprezentare",
    "title": "Lumea ca voință și reprezentare",
    "author": "Arthur Schopenhauer",
    "year": "2012",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/humanitas/carte/lumea-ca-voinţă-şi-reprezentare-vol-i-şi-ii",
    "description": "EBOOK – EPUB / PDF „Viaţa este o afacere care nu-şi acoperă costurile.\" (Arthur SCHOPENHAUER) „Dacă ceea ce spune Schopenhauer nu va fi niciodată uitat, asta ţine probabil de faptul că ceea ce el spun...",
    "cover": "/covers/lumea-ca-vointa-si-reprezentare.jpg"
  },
  {
    "id": "parerga-si-paralipomena",
    "title": "Parerga si paralipomena",
    "author": "Arthur Schopenhauer",
    "year": "2023",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/humanitas/carte/parerga-si-paralipomena-2",
    "description": "Traducere și note de Vladimir Lazurca Cele trei eseuri cuprinse în acest al doilea volum din Parerga et paralipomena (1851) – culegere târzie, apărută la 33 de ani de la publicarea primului volum din...",
    "cover": "/covers/parerga-si-paralipomena.jpg"
  },
  {
    "id": "schopenhauer-si-anii-salbatici-ai-filosofiei",
    "category": "Niște filozofi lizibili",
    "title": "Schopenhauer și anii sălbatici ai filosofiei",
    "author": "Rüdiger Safranski",
    "year": "1998",
    "buyUrl": "https://humanitas.ro/humanitas/carte/schopenhauer-si-anii-salbatici-ai-filozofiei",
    "description": "O captivantă biografie intelectuală care reconstituie epoca marilor dispute ale idealismului german și nașterea pesimismului metafizic schopenhauerian.",
    "cover": "/covers/schopenhauer-si-anii-salbatici-ai-filozofiei.jpg"
  },
  {
    "id": "stiinta-voioasa",
    "title": "Stiinta voioasa",
    "author": "Friedrich Nietzsche",
    "year": "2022",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/humanitas/carte/stiinta-voioasa-2",
    "description": "Traducere de Liana Micescu și Simion Dănilă „Ştiinţa voioasă este rodul experienţei lăuntrice a celui ce a trecut prin proba de foc mocnit a infernului, i-a îndurat povara îndelungată, strivitoare şi...",
    "cover": "/covers/stiinta-voioasa.jpg"
  },
  {
    "id": "ecce-homo",
    "title": "Ecce homo",
    "author": "Friedrich Nietzsche",
    "year": "2013",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/humanitas/carte/ecce-homo-0",
    "description": "EBOOK GRATUIT / PDF > DESCARCĂ „Îmi cunosc soarta. Cândva se va lega de numele meu amintirea a ceva monstruos – a unei crize cum nu a mai existat pe pământ, a celei mai profunde ciocniri de conştiinţe...",
    "cover": "/covers/ecce-homo.jpg"
  },
  {
    "id": "genealogia-moralei",
    "title": "Genealogia moralei",
    "author": "Friedrich Nietzsche",
    "year": "2006",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/humanitas/carte/genealogia-moralei",
    "description": "Mistuit de flacarile unui foc mocnit in interior, Nietzsche scrie Genealogia moralei ca pe o exorcizare de zeii moralei traditionale. Glorificarea instinctelor de mila, abnegatie ori sacrificiu de sin...",
    "cover": "/covers/genealogia-moralei.jpg"
  },
  {
    "id": "jurnal-soren-kierkegaard",
    "title": "Jurnal",
    "author": "Søren Kierkegaard",
    "year": "1834–1855",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/autori/søren-kierkegaard",
    "description": "Însemnările intime și reflecțiile filosofice ale lui Søren Kierkegaard despre credință, angoasă, relația cu Regine Olsen și paradoxul existenței umane în fața lui Dumnezeu.",
    "cover": "/covers/jurnal-soren-kierkegaard.jpg"
  },
  {
    "id": "revolta-maselor",
    "title": "Revolta maselor",
    "author": "Jose Ortega y Gasset",
    "year": "2007",
    "category": "Niște filozofi lizibili",
    "buyUrl": "https://humanitas.ro/humanitas/carte/revolta-maselor-1",
    "description": "Societatea in care traim astazi pare sa fi descins de-a dreptul din randurile acestei carti. Lumea e plina de oameni, atat de plina, ca oamenii au incetat sa mai aiba o lume. Locul ei a fost luat de u...",
    "cover": "/covers/revolta-maselor.jpg"
  },
  {
    "id": "jurnal-lev-tolstoi",
    "title": "Jurnal",
    "author": "Lev Tolstoi",
    "year": "1847–1910",
    "category": "Jurnale, memorii",
    "buyUrl": "https://carturesti.ro/carte/jurnal-566840111",
    "description": "Mărturia de o sinceritate necruțătoare a lui Lev Tolstoi, întinsă pe mai bine de șase decenii, consemnând luptele sale morale, căutarea perfecțiunii spirituale și frământările de creație.",
    "cover": "/covers/jurnal-lev-tolstoi.jpg"
  },
  {
    "id": "de-profundis",
    "title": "De profundis",
    "author": "Oscar Wilde",
    "year": "2021",
    "category": "Jurnale, memorii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/de-profundis-2021",
    "description": "Traducere și note de Luana Schidu „Această carte e unică prin tonul ei seducător, plin de durere și de pasiune. Are o expresivitate încărcată de înțelesuri și o anume stringență, ceea ce o face una di...",
    "cover": "/covers/de-profundis.jpg"
  },
  {
    "id": "jurnalul-unui-om-dezamagit",
    "title": "Jurnalul unui om dezamagit",
    "author": "WNP Barbellion",
    "year": "2024",
    "category": "Jurnale, memorii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/jurnalul-unui-om-dezamagit-2024",
    "description": "Traducere și note de Anca Bărbulescu Prefață de Mircea Vasilescu O carte care i-a fascinat pe H.G. Wells, Queneau și Cioran. „Unul dintre cele mai emoționante jurnale scrise vreodată“, s-a spus despre...",
    "cover": "/covers/jurnalul-unui-om-dezamagit.jpg"
  },
  {
    "id": "amintiri-vise-reflectii",
    "title": "Amintiri vise reflectii",
    "author": "CG Jung",
    "year": "2015",
    "category": "Jurnale, memorii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/amintiri-vise-reflectii-3",
    "description": "EBOOK > epub / pdf Cartea autobiografica a lui Jung – una dintre cele mai tulburătoare piese memorialistice ale secolului XX – este săracă în fapte de viaţă exterioară: schiţa copilăriei într-o famili...",
    "cover": "/covers/amintiri-vise-reflectii.jpg"
  },
  {
    "id": "jurnale-pariziene",
    "title": "Jurnale pariziene",
    "author": "Ernst Junger",
    "year": "1997",
    "category": "Jurnale, memorii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/jurnale-pariziene-si-insemnari-din-caucaz",
    "description": "Dincolo de calitatea lor de martor al unei istorii „incarcate“, prin efecte azi inca vii, ca si dincolo de constructia lor literara eminenta, insemnarile de fata raman importante si cu deosebire atasa...",
    "cover": "/covers/jurnale-pariziene.jpg"
  },
  {
    "id": "jurnalul-unei-epoci",
    "title": "Jurnalul unei epoci",
    "author": "Denis de Rougemont",
    "year": "2018",
    "category": "Jurnale, memorii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/jurnalul-unei-epoci-1935–1936-0",
    "description": "EBOOK > epub / pdf Traducere de Emanoil Marcu și Vlad Russo În 1935-1936, Denis de Rougemont acceptă un post de lector de literatură franceză la Frankfurt, nu în ultimul rând din dorința de a fi marto...",
    "cover": "/covers/jurnalul-unei-epoci.jpg"
  },
  {
    "id": "jurnal-julien-green",
    "title": "Jurnal",
    "author": "Julien Green",
    "year": "1982",
    "category": "Jurnale, memorii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/placerea-de-a-te-povesti-tie-insuti-pagini-de-jurnal",
    "description": "Unul dintre marile jurnale ale secolului XX, consemnând viața literară pariziană, credința catolică, marile frământări interioare și meditațiile profunde asupra artei și morții.",
    "cover": "/covers/jurnal-julien-green.jpg"
  },
  {
    "id": "jurnalul-fericirii",
    "category": "Jurnale, memorii",
    "title": "Jurnalul fericirii",
    "author": "N. Steinhardt",
    "year": "1991",
    "buyUrl": "https://polirom.ro/seria-de-autor-n-steinhardt/3025-jurnalul-fericirii.html",
    "description": "Capodoperă a literaturii carcerale și a mărturisirii creștine, testamentul spiritual al lui Nicolae Steinhardt despre suferință, libertate interioară și renașterea prin credință.",
    "cover": "/covers/jurnalul-fericirii.jpg"
  },
  {
    "id": "timpul-ce-ni-s-a-dat",
    "title": "Timpul ce ni s-a dat",
    "author": "Annie Bentoiu",
    "year": "2011",
    "category": "Jurnale, memorii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/timpul-ce-ni-s-a-dat-3",
    "description": "Annie Bentoiu (născută în 1927) are de-o viaţă întreagă obiceiul de a-şi nota în agende evenimentele personale şi ale lumii în care trăieşte, şi jurnalul acesta ţinut cu consecvenţă a stat la baza cel...",
    "cover": "/covers/timpul-ce-ni-s-a-dat.jpg"
  },
  {
    "id": "un-altfel-de-jurnal",
    "title": "Un altfel de jurnal",
    "author": "Matei Calinescu",
    "year": "2016",
    "category": "Jurnale, memorii",
    "buyUrl": "https://humanitas.ro/humanitas/carte/un-altfel-de-jurnal-0",
    "description": "EBOOK > epub / pdf „În genere, trăiesc după principiul (sănătos, în fond) one day at a time. Fiecare zi e (sau nu e) una din ultimele, dar asta nu se simte direct. O trăiesc, voit, ca pe o zi oarecare...",
    "cover": "/covers/un-altfel-de-jurnal.jpg"
  }
];
