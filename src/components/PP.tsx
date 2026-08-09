import { PPSections } from "./languageData"

export const PP = () => {
    return (
        <main className="min-w-93.75 p-6 font-[Asap] text-sm lg:text-base lg:p-10">
            <h1 className="text-2xl lg:text-4xl text-blue-700 border-b pb-4">Prevádzkový poriadok</h1>
            <section className="py-6">
                <ul className="flex flex-col gap-2">
                    <li>Rekreačný areál: Yacht - Camping</li>
                    <li>Miesto: Chľaba 752. 943 65 Chľaba</li>
                    <li>Prevádzkovateľ: Norbert Žibrita, Chľaba 46, 943 65 Chľaba, IČO 41092384</li>
                    <li>Kontakt: Norbert Žibrita, +421 915 705 498, e-mail: yachtcamping1@gmail.com</li>
                </ul>
            </section>
            <section className="py-6">
                <h2 className="text-blue-700 text-xl lg:text-2xl pb-4">1. Úvodné ustanovenia</h2>
                <div className="flex flex-col gap-8">
                    <span>
                        <p>1. Tento prevádzkový poriadok (ďalej len "poriadok") upravuje pravidlá užívania rekreačného areálu Yacht - Camping (ďalej len "aréal"), ktorý slúži na:</p>
                        <ul className="pl-2">
                            <li>
                                <span>a) </span>
                                <span>umiestnenie mobilných domov na pozemkoch,</span>
                            </li>
                            <li>
                                <span>b) </span>
                                <span>kempovanie v stanoch,</span>
                            </li>
                            <li>
                                <span>c) </span>
                                <span>kempovanie s obytními autami a prívesmi.</span>
                            </li>
                        </ul>
                        </span>
                        <p>2. Yacht - Camping sa nachádza v oplotenom areáli pri brehu rieky Dunaj pod rekreačnou oblasťou Kováčov.</p>
                        <p>3. Užívanie areálu prebieha na základe sezónnej dohody s prevádzkovateľom - nejde o klasický nájom podľa Občianskeho zákonníka, pokiaľ nie je s konkrétnym nájomcom osobitne písomne dohodnuté inak.</p>
                        <p>4. Ústna alebo písomná dohoda o využívaní areálu nepredstavuje vznik nájomného vzťahu k pozemku ani k stavbe. Ide o právo sezónneho užívania za dohodnutú odmenu podľa cenníka.</p>
                        <p>5. Každý návštevník alebo užívateľ je povinný sa s týmto poriadkom oboznámiť a riadiť sa ním.</p>
                </div>
            </section>
            <section className="py-6">
                <h2 className="text-blue-700 text-xl lg:text-2xl pb-4">{PPSections[2].header}</h2>
                <ol className="list-decimal list-inside flex flex-col gap-2">
                    {PPSections[2].items.map(e => (
                        <li>{e}</li>
                    ))}
                </ol>
            </section>
            <section className="py-6">
                <h2 className="text-blue-700 text-xl lg:text-2xl pb-4">3. Práva a povinnosti nájomcov a nájomníkov</h2>
                <div className="flex flex-col gap-8">
                        <p>1. Nájomcovia a návštevníci majú právo využívať priestory a zariadenia areálu v súlade s týmto poriadkom.</p>
                        <span>
                            <p>2. Sú povinní: </p>
                            <ul className="list-['-_'] list-inside pl-2 flex flex-col gap-1">
                                <li>dodržiavať poriadok a čistotu v celom areáli,</li>
                                <li>rešpektovať súkromie ostatných užívateľov,</li>
                                <li>nahlásiť akékoľvek škody alebo havarijné stavy prevádzkovateľovi,</li>
                                <li>dodržiavať ekologické zásady (nevypúšťať škodlivé látky, správne triediť odpad),</li>
                                <li>používať WC, sprchy a odpadové systémy v súlade s pravidlami (ak sú k dispozícii),</li>
                                <li>rešpektovať pokyny prevádzkovateľa alebo jeho poverených osôb.</li>
                            </ul>
                        </span>
                        
                </div>
            </section>
            <section className="py-6">
                <h2 className="text-blue-700 text-xl lg:text-2xl pb-4">4. Pravidlá pre jednotlivé typy využitia</h2>
                <div className="flex flex-col gap-2">
                    <p className="text-blue-700 text-lg">A) Mobilné domy</p>
                    <ul className="list-['-_'] list-inside pl-2 flex flex-col gap-1">
                        <li>Nájomcovia môžu využívať iba svoj pridelený pozemok.</li>
                        <li>Nie je povolené vykonávať stavebné úpravy bez súhlasu prevádzkovateľa.</li>
                        <li>Odpadová voda musí byť likvidovaná v súlade s predpismi (nie voľne do pôdy)</li>
                        <li>v areáli je možné sa bytovať v troch mobilných domoch, dve domy sú štvormiestne a jeden je šesťmiestny z ktorých je jeden vybavený kúpeľňou (sprcha a záchod), odpadová voda je zavedená do centrálneho skladu odpadových vôd (žumpy), ubytovaný v ostatných domoch využívajú centrálne sociálne zariadenie, v ktorom sa nachádza sprchový kútik pre dve osoby, toaleta a umývadlo.</li>
                        <li>v domoch sa posteľná bielizeň vymieňa podľa potreby, najmenej však raz za 14 dní.</li>
                        <li>v domoch po každej výmene ubytovaných je celý dom celkovo uprataný a je vykonaná dezinfekcia ozónom.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 pt-6">
                    <p className="text-blue-700 text-lg">B) Kempovanie v stane</p>
                    <ul className="list-['-_'] list-inside pl-2 flex flex-col gap-1">
                        <li>Stany je možné rozkladať len na určených plochách.</li>
                        <li>V stane môžu byť ubytované len registrované osoby.</li>
                        <li>Je zakázané kopať rigoly alebo poškodzovať trávnaté plochy.</li>
                        <li>ubytovaný v stanoch využívajú centrálne sociálne zariadenie, v ktorom sa nachádza sprchový kútik pre dve osoby, toaleta a umývadlo.</li>
                        <li>ubytovaný v stanoch môžu využívať aj terasu so stolom na umývanie riadu.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 pt-6">
                    <p className="text-blue-700 text-lg">C) Kempovanie s obytním autom / prívesom</p>
                    <ul className="list-['-_'] list-inside pl-2 flex flex-col gap-1">
                        <li>Parkovanie obytných vozidiel iba na vyznačených miestach.</li>
                        <li>Odpadové vody a chemické WC je možné vyprázdniť iba na určených miestach.</li>
                        <li>Elektrické pripojenie len do povolených zásuviek.</li>
                        <li>ubytovaný s obytným autom alebo prívesom využívajú centrálne sociálne zariadenie, v ktorom sa nachádza sprchový kútik pre dve osoby, toaleta a umývadlo.</li>
                        <li>ubytovaný s obytným autom alebo prívesom môžu využívať aj terasu so stolom na umývanie riadu.</li>
                        <li>v centrálnom sociálnom zariadení sa celkové upratovanie a dezinfekcia vykonáva 3x za týždeň.</li>
                        <li>v areáli sú kuka nádoby 120l na tuhý odpad ktoré sa vyprázdňujú 2x za týždeň.</li>
                    </ul>
                </div>
            </section>
            <section className="py-6">
                <h2 className="text-blue-700 text-xl lg:text-2xl pb-4">{PPSections[5].header}</h2>
                <ol className="list-decimal list-inside flex flex-col gap-2">
                    {PPSections[5].items.map(e => (
                        <li>{e}</li>
                    ))}
                </ol>
            </section>
            <section className="py-6">
                <h2 className="text-blue-700 text-xl lg:text-2xl pb-4">{PPSections[6].header}</h2>
                <ol className="list-decimal list-inside flex flex-col gap-2">
                    {PPSections[6].items.map(e => (
                        <li>{e}</li>
                    ))}
                </ol>
            </section>
            <section className="py-6">
                <h2 className="text-blue-700 text-xl lg:text-2xl pb-4">{PPSections[7].header}</h2>
                <ol className="list-decimal list-inside flex flex-col gap-2">
                    {PPSections[7].items.map(e => (
                        <li>{e}</li>
                    ))}
                </ol>
            </section>
        </main>
    )
}