import Image from 'next/image'
import { Header } from '@/components/header'

export const metadata = {
  title: 'Cuvânt despre listă | Cărțile care ne-au făcut oameni',
  description: 'Lista mea de circa 100 de titluri – Cuvânt introductiv de Gabriel Liiceanu.',
}

export default function CuvantDespreListaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">

        <article className="flex flex-col">

          {/* Header Section: Titles on the left aligned to the top with image on the right */}
          <header className="mb-14 flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
            <div className="flex flex-1 flex-col justify-start">
              <p className="text-sm uppercase tracking-[0.35em] text-primary font-work font-medium">
                Gabriel Liiceanu
              </p>

              <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-foreground md:text-6xl">
                Cărțile care <span className="whitespace-nowrap">ne-au</span> făcut oameni
              </h1>

              <p className="font-serif italic text-xl md:text-2xl text-foreground/80 mt-4">
                Lista mea de circa 100 de titluri
              </p>
            </div>

            {/* Gabriel Liiceanu Portrait */}
            <div className="w-52 sm:w-60 md:w-64 lg:w-72 shrink-0 self-start md:self-auto">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-none">
                <Image
                  src="/10_gabriel-liiceanu.jpg?v=2"
                  alt="Gabriel Liiceanu"
                  fill
                  sizes="(min-width: 768px) 288px, 240px"
                  className="object-cover rounded-none"
                  priority
                />
              </div>
            </div>
          </header>

          {/* Formatted Article Body */}
          <div className="text-base sm:text-lg leading-relaxed text-foreground/85 font-sans font-light">

            {/* Section Break: Marile liste existente */}
            <div className="relative mb-12 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/70" />
              </div>
              <div className="relative flex items-center gap-3 bg-background px-6">
                <span className="text-xs uppercase tracking-[0.25em] font-work font-medium text-primary">
                  Marile liste existente
                </span>
              </div>
            </div>

            <p className="text-pretty mb-6">
              Există o grămadă de liste de lectură, începând din 1909 cu <em className="font-serif italic">The Harvard Classics</em> (1909) în care selecția urcă la 51 de volume, care, pe lângă marea proză literară, include deopotrivă poezia și eseurile. Mai toate marile universități americane (Harvard, Oxford sau Columbia) au propriile liste academice.
            </p>

            <p className="text-pretty mb-6">
              Însă cea mai celebră „listă” – prin concepție, întindere și timpul dedicat pregătirii ei – este <em className="font-serif italic">Great Books of the Western World</em> a cărei prime ediții, lansate oficial la 15 aprilie 1952 la New York, comandate și publicate de Encyclopædia Britannica, cuprinde 54 de volume. În 1990, setul a fost extins la 60 de volume. Cărțile sunt aranjate cronologic – începând cu Grecia antică până în secolul al XX-lea. Cele 54 de volume conțin operele a 74 de autori clasici (de la Homer și Platon până la Sigmund Freud), iar în ediția extinsă din 1990 se merge până la Virginia Woolf, George Orwell, Ernest Hemingway, Albert Einstein. Setul conține <em className="font-serif italic">cărți integrale</em> gigantice, cum ar fi <em className="font-serif italic">Summa Theologiae</em> a lui Toma d&apos;Aquino, <em className="font-serif italic">Declarația de independență</em> sau lucrări științifice complete de Newton și Galileo.
            </p>

            <p className="text-pretty mb-6">
              Domeniile avute în vedere sunt literatura, istoria și științele sociale, matematica și științele naturii, filozofia și teologia și sunt marcate cromatic pe seturi prin patru culori (galben, albastru, verde și roșu). Numărul mediu de pagini al volumelor tipărite cu corp mic este de 850 de pagini per volum.
            </p>

            <p className="text-pretty mb-6">
              Conceptul Enciclopediei Britanice este <em className="font-serif italic">Marea Conversație</em>, desprins din ideea că cele mai mari minți din istorie s-au angajat într-un dialog de mai multe milenii, constituind astfel canonul occidental al culturii spirituale a lumii. Autorii acestei megaconstrucții sunt doi <em className="font-serif italic">educators</em>, două „cadre didactice”, profesori la Universitatea din Chicago, Robert Maynard Hutchins și Mortimer J. Adler, editorii proiectului, care aveau un singur țel: să realizeze reforma „educației liberale”, oferind instrumentul absolut al cultivării pe tot parcursul vieții. Altfel spus, era sigur că mureai cult. Volumul I este dedicat în întregime dezvoltării de către Hutchins a teoriei „marii conversații”, iar volumele II și III, realizate de Adler, sunt dedicate unui Syntopicon al întregii enciclopedii.
            </p>

            <p className="text-pretty mb-6">
              Munca celor doi a început în 1943 și s-a încheiat în 1952, Adler mărturisind că a lucrat nouă ani pentru crearea Syntopicon-ului, a unui uriaș index tematic de 102 termeni.
            </p>

            <p className="text-pretty mb-6">
              O altă listă-gigant este <em className="font-serif italic">1001 Books You Must Read Before You Die</em>, alcătuită în decurs de trei ani de o echipă coordonată de profesorul de literatură Peter Boxall, cu sprijinul unei echipe internaționale de profesori, critici și scriitori. Dedicată exclusiv literaturii de ficțiune din întreaga lume, cu accent pe contemporaneitate, ea a fost tipărită într-un singur volum de circa 1000 de pagini și lansată pe piața britanică la 9 martie 2006 de editura Cassell Illustrated.
            </p>

            {/* Section Break: Specificul listei */}
            <div className="relative my-16 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/70" />
              </div>
              <div className="relative flex items-center gap-3 bg-background px-6">

                <span className="text-xs uppercase tracking-[0.25em] font-work font-medium text-primary">
                  Specificul listei
                </span>

              </div>
            </div>

            <p className="text-pretty mb-6">
              Între lista mea, care stă sub semnul sloganului „Cărțile care ne-au făcut oameni”, și toate celelalte liste este o diferență de fond care atinge următoarele puncte:
            </p>

            {/* Scopul listei Section */}
            <div className="mt-8 mb-10 space-y-4">
              <h2 className="font-serif italic text-xl sm:text-2xl text-foreground font-normal mb-4">
                Scopul listei
              </h2>

              <ul className="list-disc space-y-3.5 pl-6 text-foreground/85 marker:text-primary/70">
                <li className="text-pretty pl-1">
                  Să formeze ceea ce se numește îndeobște, dar cețos, o „cultură generală”, în fapt o „minte umanistă”, rotundă și echilibrată, hrănită cu cele mai alese mâncăruri spirituale, care să ne dea siguranță de sine și certitudinea că avem reperele spirituale capabile să ne ofere orientarea și așezarea noastră în lume.
                </li>
                <li className="text-pretty pl-1">
                  Să ne ajute să gândim cu mintea proprie, metabolizând la nivelul ființei noastre gândirea celor mari care au gândit cu mintea lor.
                </li>
                <li className="text-pretty pl-1">
                  Este o listă alcătuită după <em className="font-serif italic">principiul plăcerii</em>, însoțit spontan de cel al utilului (principiul horațian <em className="font-serif italic">dulce et utile</em> din <em className="font-serif italic">Ars poetica</em>). Sunt lecturi lipsite de orice dificultate (lesne de înțeles), <em className="font-serif italic">care sfârșesc prin a ne face fericiți</em>. Cărți ale splendorii.
                </li>
                <li className="text-pretty pl-1">
                  Să simți, după ce ai acoperit-o, că nu mai ești cel de dinainte.
                </li>
              </ul>
            </div>

            {/* Criterii care au dictat selecția Section */}
            <div className="mt-10 mb-8 space-y-6">
              <h2 className="font-serif italic text-xl sm:text-2xl text-foreground font-normal mb-4">
                Criterii care au dictat selecția
              </h2>

              <ul className="list-disc space-y-8 pl-6 text-foreground/85 marker:text-primary/70">
                {/* Criteriul genealogic */}
                <li className="text-pretty pl-1">
                  <span className="font-serif italic font-normal text-foreground block text-lg mb-2">
                    Criteriul genealogic
                  </span>
                  <p className="text-pretty">
                    Suntem ceea ce ne constituie venind din urmă. Suntem trecutul nostru. Familia din care facem parte noi, cei de azi, se întinde până la autorii, știuți sau neștiuți, ai primelor creații literare, ceea ce-nseamnă de la <em className="font-serif italic">Epopeea lui Ghilgameș</em> din secolul XXI î. de Chr. Reconstrucția arborelui nostru genealogic, care presupune istoria strămoșilor, nu se va face pe baza actelor de stare civilă, ci pe baza actelor culturale ale speciei noastre, care ne trimit cu 4000 de ani în urmă.
                  </p>
                </li>

                {/* Opt criterii neortodoxe */}
                <li className="text-pretty pl-1">
                  <span className="font-serif italic font-normal text-foreground block text-lg mb-3">
                    Opt criterii neortodoxe
                  </span>
                  <ul className="list-[circle] space-y-2.5 pl-6 marker:text-primary/60 text-foreground/80">
                    <li className="text-pretty pl-1">
                      Câte una / două cărți fundamentale despre nodurile civilizației occidentale.
                    </li>
                    <li className="text-pretty pl-1">
                      Pachetul rus
                    </li>
                    <li className="text-pretty pl-1">
                      Cele cinci-șase cărți de pe noptieră, pe care le vom ține neabătut la capul patului seară de seară și pe care le putem deschide la orice pagină înainte de a adormi (somniferul spiritual, pastila de frumusețe). Să le numim <em className="font-serif italic">Biblia laică</em>.
                    </li>
                    <li className="text-pretty pl-1">
                      Cele mai frumoase X nuvele
                    </li>
                    <li className="text-pretty pl-1">
                      Mari eseuri ale lumii
                    </li>
                    <li className="text-pretty pl-1">
                      Patru sinteze istorico-filozofice
                    </li>
                    <li className="text-pretty pl-1">
                      Niște filozofi lizibili
                    </li>
                    <li className="text-pretty pl-1">
                      Jurnale, memorii.
                    </li>
                  </ul>
                </li>

                {/* Timpul necesar */}
                <li className="text-pretty pl-1">
                  <span className="font-serif italic font-normal text-foreground block text-lg mb-2">
                    Timpul necesar pentru acoperirea ei
                  </span>
                  <ul className="list-[circle] space-y-1.5 pl-6 marker:text-primary/60 text-foreground/80">
                    <li className="text-pretty pl-1">
                      Dacă se citesc 5 titluri pe lună = 60 titluri pe an
                    </li>
                    <li className="text-pretty pl-1">
                      Pentru 100 titluri = circa 1 an și 8 luni
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="clear-both" />
          </div>

          {/* Footer note */}
          <footer className="mt-24 border-t border-border pt-8">
            <p className="max-w-1xl text-sm italic leading-relaxed text-muted-foreground font-serif">
              „Inteligența este acea permanentă punere sub întrebare a proiectului propriu.”
              <br />
              — Gabriel Liiceanu
            </p>
          </footer>
        </article>

      </div>
    </main>
  )
}
