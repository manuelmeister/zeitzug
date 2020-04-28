export default [
    {
        title:    "Einführung",
        number:   "0",
        desc:     "Sara besucht das [Verkehrshaus (Museum)](https://de.wikipedia.org/wiki/Verkehrshaus_der_Schweiz) mit ihrer Familie. Ihre Schwester Emma will unbedingt zu den Zügen. Plötzlich findet Sara in einer Lokomotive ein altes Buch. Als sie es öffnet, wird sie ins Jahr 1846 katapultiert.",
        audio: "audio/E0.mp3",
        athmosphere: "Ruhig, Museum, etwas verstaubt",
        open:     false,
        scenes:   [
            {
                image:  "img/0.0.jpg",
                action: "Sara besucht das Museum mit ihrer Familie."
            }, {
                image:  "img/0.0.jpg",
                dialog: [
                    {char: "Emma", text: "Ich möchte unbedingt die Züge anschauen gehen. Komm mit!"},
                    {char: "Sara", text: "(seufzend) Okay…"}
                ]
            }, {
                image:  "img/0.1.jpg",
                action: "Sara verdreht gelangweilt die Augen und geht an einer Lok vorbei."
            }, {
                image:  "img/0.3.jpg",
                action: "Sie schaut in den Führerstand und klettert in die Lokomotive «Genf» hinein."
            }, {
                image:  "img/1.5.png",
                action: "Sara findet in einer Ecke ein verstaubtes Buch."
            }, {
                image:  "img/1.6.png",
                action: "Sara öffnet das Buch."
            }, {
                image:  "img/1.7.png",
                action: "Sie wird in der Zeit zurückgeschleudert. Ab jetzt erscheint der Zeitstrahl im Buch."
            }, {
                image:  "img/1.8.png",
                useraction: "In der Learning App muss jetzt das nächste Kapitel geöffnet werden. Dafür geht der/die Benutzer*in zur passenden Lokomotive. Dort schaltet man die nächste Episode frei."
            }
        ]
    },
    {
        title:    "Pionierzeit",
        number:   "1",
        desc:     '<p>Dort trifft Sara auf [Alois Negrelli](https://de.wikipedia.org/wiki/Alois_Negrelli_von_Moldelbe). Der hat gerade den Auftrag erhalten, eine Eisenbahnstrecke zwischen [Zürich und Baden](https://en.wikipedia.org/wiki/Z%C3%BCrich%E2%80%93Baden_railway) zu bauen. Es sei die erste ganze Strecke in der Schweiz, erklärt er. Für diese Strecke hatte man mit der Kutsche etwa dreimal so lange wie man mit dem Zug haben wird. Zuerst wollte die Regierung der Stadt Baden, dass der Bahnhof im Süden gebaut wird. Doch Negrelli war es wichtig, dass der Bahnhof auf der Nordseite gebaut wird, da dort das Gebiet flacher ist und der Bahnhof einfacher vergrössert werden kann.</p><p>Sie schaffen es und Negrelli gibt Sara [spanische Brötli](https://de.wikipedia.org/wiki/Spanisch_Br%C3%B6tli) mit auf die erste Fahrt nach Zürich.</p>',
        //animatic: "<iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/DGA1rU3M4PY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"\"></iframe>",
        open:     false,
        athmosphere: "Weite Landschaften, Goldgräberstimmung, unbekanntes Terrain",
        audio: 'audio/E1.mp3',
        scenes:   [
            {
                image:  "img/baden_bgnew.png",
                dialog: [
                    {char: 'Sara', text: "Huch, wo bin ich hier gelandet?"},
                    {char: 'Negrelli', text: "Im Jahr 1846 natürlich. Darf ich mich vorstellen. Alois Negrelli mein Name."},
                    {char: 'Sara', text: "Hallo, ich bin Sara. Ich glaube, ich bin soeben mit einem Buch durch die Zeit gereist. Warum bin ich denn gerade hier gelandet?"},
                    {char: 'Negrelli', text: "Das ist ja wohl klar. Hier entsteht etwas Brandneues: Die erste Eisenbahn der Schweizerischen Eidgenossenschaft. Bis jetzt war Basel die einzige Stadt mit Bahnhof. Das möchten wir ändern. Die Schweizerische Nordbahn hat mir den Auftrag gegeben, eine Eisenbahnstrecke von Baden nach Zürich zu bauen."}
                ],
                action: "Sie befinden sich auf der [Lägern](https://de.wikipedia.org/wiki/L%C3%A4gern) und schauen auf die Stadt Baden hinunter."
            },
            {
                image:  "img/2.2.png",
                dialog: [
                    {char: 'Negrelli', text: "Hast du gewusst, dass man mit der Eisenbahn 3 mal schneller unterwegs ist als mit der Kutsche? Unsere Nachbarländer haben das längst erkannt. Im Vergleich zu ihnen sind wir etwas spät dran."},
                ],
            },
            {
                image:  "img/2.4 2.png",
                dialog: [
                    {char: 'Sara', text: "Wieso sind wir denn so im Verzug?"},
                    {char: 'Negrelli', text: "Weil die Leute Angst um ihre Arbeit haben. Mit der Eisenbahn können ausländische Waren viel schneller und somit günstiger transportiert werden. Das haben die Kaufleute in Zürich gemerkt und wollen, dass sie ihre Ware auch ins Ausland liefern können. \nAber die Bauern haben Angst, dass sie wegen der Eisenbahn ihre Rüebli nicht mehr verkaufen können und haben darum gegen die Eisenbahn protestiert."},
                    {char: 'Sara', text: "In dem Fall haben die Kaufleute gewonnen?"},
                    {char: 'Negrelli', text: "Ja, zum Glück. Sie haben den Leuten Angst gemacht, dass wir sonst den Anschluss an die Wirtschaft verpassen. \nDoch ständig tauchen neue Probleme auf."}
                ],
                action: "Man sieht in der Gedankenbubble, wie günstige Rüebli an teuren Rüebli vorbeifahren. Die Bauern protestieren gegen die Kaufleute. Negrelli rauft sich die Haare. Dabei fällt ihm ein Plan aus den Händen."
            },
            {
                image:  "img/2.5 2.png",
                dialog: [
                    {char: 'Sara', text: "Ohje, wisst ihr nicht, wo ihr den Bahnhof bauen sollt?"},
                    {char: 'Negrelli', text: "Ja, sie wollen, dass der Bahnhof hier gebaut wird (1. links). Dort hat es aber zu wenig Platz und es ist zu hügelig. Ich habe Angst, dass der Bahnhof so in Zukunft nicht erweitert werden kann. Deshalb möchte ich den Bahnhof dort, wo es flacher ist, bauen (2. rechts)."},
                    {char: 'Sara', text: "Da steht aber der Schlossberg im Weg. Traust du dich nicht, einen Tunnel zu bauen?"},
                ],
                action: "Sara bückt sich und hebt den Ortsplan auf. Darauf sind mit zwei Fragezeichen die Standorte der Bahnhöfe markiert."
            },
            {
                image:  "img/2.8 2.png",
                dialog: [
                    {char: 'Negrelli', text: "Nein nein. Das schaffen wir schon. Ich muss nur noch die Stadt Baden davon überzeugen. Kommst du mit?"},
                ],
                action: "Alois etwas verlegen"
            },
            {
                image:  "img/2.6.png",
                action: "Sara blättert weiter im Buch"
            },
            {
                image:  "img/2.7.png",
                dialog: [
                    {char: "Negrelli", text: "Heute wird die Strecke der Schweizerischen Nordbahn eingeweiht. Ich bin so aufgeregt!"},
                    {char: "Sara", text: "Viel Glück bei deiner Ansprache."},
                ]
            },
            {
                image:  "img/2.11 2.png",
                dialog: [
                    {char: "Negrelli", text: "Meine Damen und Herren. Endlich haben wir es geschafft: Die erste Schweizer Eisenbahnstrecke ist fertig. Zur Feier des Tages gibt es heute für alle Fahrgäste eine Spezialität aus Baden: die \"spanischen Brötli\"."},
                ],
                action: "Negrelli hält eine Ansprache."
            },
            {
                image:  "img/2.9.png",
                dialog: [
                    {char: "Sara", text: "Vielen Dank. Mhmm… ist das lecker."},
                    {char: "Negrelli", text: "Hier. Bring doch noch ein paar nach Zürich."},
                ],
                action: "Sara probiert das Brötchen und steigt in den Zug. Negrelli gibt ihr weitere Brötchen in einem Korb."
            },
            {
                image:  "img/2.10.png",
                action: "Die Eisenbahn fährt los."
            },
            {
                image:  "img/2.11.png",
                action: "Eisenbahn fährt vorbei."
            },
            {
                image:  "img/2.12.png",
                action: "Sara blättert im Buch."
            },
            {
                image:  "img/3.15.png",
                action: "Sie wird in den Zeitstrudel gerissen."
            },
            {
                image:  "img/3.16.png",
                action: "Benutzer*in muss Lokomotive «Elefant» einscannen."
            },
        ]
    },
    {
        title:    "Private Bahnen vs. Staatsbahn",
        title_short:    "Privat vs. Staat",
        number:   "2",
        desc:     "<p>Sara kommt mit der Schweizerischen Nordbahn in Zürich an. Sie verteilt spanische Brötli. Sie trifft auf [Alfred Escher](https://de.wikipedia.org/wiki/Alfred_Escher). Escher hat im Nationalrat den Schweizer Eisenbahnbau vorangetrieben. Die Schweizer Bevölkerung hat Angst, dass die Schweiz umfahren wird und somit den wirtschaftlichen Anschluss verliert. Es wird diskutiert, ob die Eisenbahnen vom Staat oder von Privaten geführt werden sollen. Man entscheidet sich dafür, dass jeder selber eine Eisenbahn bauen kann, damit Randregionen nicht lange warten müssen und die Macht der Kantone nicht eingeschränkt wird.</p><p>Escher hat die Vision, dass man die Alpen mit der Eisenbahn überqueren kann. Der [Gotthardtunnel](https://de.wikipedia.org/wiki/Gotthardtunnel) wird gebaut. Vor der Eröffnung wird Alfred leider schwer krank und kann nicht an der Eröffnungsfeier teilnehmen. Sara trifft bei der Rückfahrt auf [Josef Zemp](https://de.wikipedia.org/wiki/Josef_Zemp), der die Verstaatlichung der Eisenbahnen durchgeführt hat.</p>",
        animatic: "",
        athmosphere: "Es kommt alles in Fahrt. Im Büro von Escher, eher drückend. Im Zug mit Zemp eher windig",
        audio: "audio/E2.mp3",
        open:     false,
        scenes:   [
            {
                image:  "img/3.2 2.png",
                action: "Lokomotive «Elefant» fährt ein."
            }, {
                image:  "img/3.2.png",
                dialog: [
                    {char: "Sara", text: "Möchten Sie auch ein spanisches Brötli?"},
                    {char: "Escher", text: "Gerne. Wie fandest du die Fahrt?"},
                    {char: "Sara", text: "Es war toll. Ich wusste gar nicht, dass Zug fahren so spannend sein kann."},
                    {char: "Escher", text: "Das finde ich eben auch."}
                ],
                action: "Sara steigt aus. Sie beginnt Brötchen an die Leute zu verteilen. Sara gibt Alfred Escher ein Brötchen."
            }, {
                image:  "img/3.3.png",
                dialog: [
                    {char: "Sara", text: "Ich bin übrigens Sara und wer bist du?"},
                    {char: "Escher", text: "Freut mich. Ich bin Alfred Escher, Geschäftsmann und Nationalrat. Ich will, dass die Schweiz technisch modern bleibt. Dafür habe ich viele Pläne entwickelt."},
                ],
                action: "Sie gehen ins Arbeitszimmer von Escher."
            }, {
                image:  "img/3.4.png",
                dialog: [
                    {char: "Escher", text: "Das Problem ist, dass die Eisenbahnen von allen Seiten näher an die Schweiz kommen und durch die Alpen fahren wollen. \nLeider sind wir noch nicht bereit. Jetzt besteht die Gefahr, dass die Schweiz umfahren wird."}
                ],
            }, {
                image:  "img/3.5.png",
                dialog: [
                    {char: "Sara", text: `Und wie möchtest du dieses Problem lösen?`},
                    {char: "Escher", text: "Dafür habe ich im Nationalrat ein Gesetz gemacht. Jetzt darf theoretisch jeder eine Eisenbahn bauen. Zuerst wollten Einige, dass nur der Bund in der Schweiz Eisenbahnen bauen darf. Ich fand das aber viel zu kompliziert. Der Bau der Eisenbahn hätte viel zu lange gedauert und kleine Orte auf dem Land wären nie ans Eisenbahnnetz angeschlossen worden."},
                    {char: "Sara", text: `Dann darf ich also jetzt auch eine Eisenbahn bauen?`},
                    {char: "Escher", text: `Theoretisch schon. Dafür brauchst du aber viel Geld und eine Bewilligung vom Kanton, in dem sich die Eisenbahnstrecke befindet.`},
                ],
            }, {
                image:  "img/3.6.png",
                dialog: [
                    {char: "Sara", text: `Aha! Und DU hast das?`},
                    {char: "Escher", text: "Ja sicher, ich habe mir gerade die Eisenbahn gekauft, mit der du vorhin angekommen bist. Ich habe sie Nordostbahn getauft. Mit ihr möchte ich eine Verbindung von Zürich bis zum Bodensee bauen. Besonders toll wäre es, eine Verbindung vom Bodensee an den Genfersee quer durch die Schweiz zu schaffen."},
                ],
                action: "Er zeigt auf der Karte den Verlauf."
            }, {
                image:  "img/3.7.png",
                action: "Sara blättert weiter im Buch."
            }, {
                image:  "img/3.6.png",
                dialog: [
                    {char: "Escher", text: "Ah, da bist du ja wieder!"},
                    {char: "Sara", text: "Und, kann ich jetzt mit dem Zug vom Bodensee an den Genfersee fahren?"},
                    {char: "Escher", text: "Ja, das geht. Vom Bodensee fährst du mit der Nordostbahn bis nach Aarau. Dort steigst du auf die Schweizerische Centralbahn um und den letzten Abschnitt fährst du mit den Westschweizerischen Bahnen."},
                    {char: "Sara", text: "Ist das nicht ein bisschen zu kompliziert mit drei verschiedenen Eisenbahngesellschaften?"},
                    {char: "Escher", text: "Vielleicht, aber das ist halt so, wenn jede Firma eine Eisenbahn bauen darf."},
                ],
                action: "Die Eisenbahnübersichtskarte wird gezeigt. Jede Firma hat eine andere Farbe."
            }, {
                image:  "img/3.10.png",
                dialog: [
                    {char: "Sara", text: "Und was ist, wenn ich lieber ins Tessin statt an den Bodensee fahren möchte? Dort gibt es nämlich viel feinere Glacés!"},
                    {char: "Escher", text: "Ha! Dafür habe ich genau das Richtige. Ich plane eine Nord-Süd Verbindung. Damit könntest du direkt von Zürich ins Tessin fahren. Es ist nämlich dringend."},
                    {char: "Sara", text: "Ah damit die Schweiz nicht umfahren wird? Ich nehme an, Österreich und Frankreich wollen auch eine Verbindung nach Italien."},
                    {char: "Escher", text: "Genau! Beide bauen bereits und wir diskutieren schon seit 15 Jahren, welchen Weg wir nehmen sollen. Endlich haben wir uns entschieden: In Zukunft kannst du durch den Gotthard ins Tessin fahren."},
                ],
                action: "Sara sieht sich in Gedankenbubble mit Palme und Glace im Tessin."
            }, {
                image:  "img/3.12.png",
                action: "Die Gedankenbubble platzt und Sara blättert im Buch. Ein Brief fällt raus."
            }, {
                image:  "img/3.13.png",
                dialog: [
                    {char: "Sara", text: "Oh, was ist denn das?"},
                    {char: "Escher", text: "Liebe Sara. \nIch bin schwer krank. Am nächsten Montag wird der Gotthard Tunnel eingeweiht. Könntest du bitte für mich hingehen? Dort gibt es sicher auch ein Glacé für dich. \nHochachtungsvoll, Alfred Escher"},
                ],
                action: "In Gedankenbubble sieht man ein Bild vom kranken Escher."
            }, {
                image:  "img/3.7.png",
                book: "Gotthard-Einweihung",
                action: "Sara blättert weiter im Buch."
            }, {
                image:  "img/4.2 2.png",
                dialog: [
                    {char: 'Zemp', text: "Und? Wie fandest du die Gotthard-Einweihung?"},
                    {char: 'Sara', text: "Sehr toll, sie haben sogar leckere Glacés aus dem Tessin verteilt. Schon beeindruckend, dass man jetzt einfach durch den Berg vom Norden in den Süden fahren kann.\n(gähnt) Nur schade, dass ich dreimal umsteigen muss bis ich zuhause bin."},
                    {char: 'Zemp', text: "Das verstehe ich. Aber das könnte sich bald ändern. Ich setze mich nämlich dafür ein, alle Eisenbahngesellschaften zu einer grossen schweizerischen Bundesbahn zusammen zu schliessen."},
                    {char: 'Sara', text: "Das ist bestimmt eine schwierige Aufgabe. Meinst du, du schaffst das?"},
                    {char: 'Zemp', text: "In der Tat! Die Zeit ist reif für eine Veränderung."},
                ],
                action: "Sara sitzt im Abteil mit Josef Zemp."
            }, {
                image:  "img/4.4.png",
                dialog: [
                    {char: "Zemp", text: "Viele Bahngesellschaften haben Geldprobleme durch den Konkurrenzkampf. Zum Beispiel verhinderten die Centralbahn und die Nordostbahn, dass die Schweizerische Nationalbahn gute Strecken bauen konnte. Jetzt ist die Nationalbahn bankrott und die Städte und Kantone müssen für sie zahlen."},
                ],
                action: "Man sieht in der Gedankenbubble von Zemp, was er erklärt."
            }, {
                image:  "img/4.3 2.png",
                dialog: [
                    {char: "Zemp", text: "Auch die Arbeiter der Bahnen sind nicht zufrieden und streiken, damit sie einen fairen Lohn bekommen."},
                ],
                action: "Man sieht in der Gedankenbubble von Zemp, was er erklärt."
            }, {
                image:  "img/4.2 2.png",
                dialog: [
                    {char: "Sara", text: "Ui, das klingt verzwickt."},
                    {char: "Kondukteur (offvoice)", text: "Wir treffen in Luzern ein. Bitte alle aussteigen."},
                    {char: "Zemp", text: "Ich muss nach Hause. Auf Wiedersehen."},
                    {char: "Sara", text: "Tschüss, viel Erfolg."}
                ]
            }, {
                image:  "img/4.6 2.png",
                dialog: [
                    {char: 'Sara', text: "Mal schauen, wie es weiter geht."}
                ],
                action: "Sara sitzt im Bahnhof Luzern mit dem Buch im Schoss."
            }, {
                image:  "img/4.6.png",
                dialog: [
                    {char: "Sara", text: "Ah, hier ist das erste Logo der SBB. In dem Fall hat der Zusammenschluss all dieser Bahnen zu einer grossen Bundesbahn geklappt."}
                ],
                action: "Sie blättert von der Seite mit Josef Zemp weiter zum ersten Logo der SBB."
            }, {
                image:  "img/3.15.png",
                action: "Sie blättert erneut und wird in der Zeit vorwärts geschleudert."
            }, {
                image:  "img/4.12.png",
                action: "Benutzer*in muss Lokomotive «Krokodil» einscannen."
            }
        ]
    },
    {
        title:    "Elektrifizierung",
        number:   "3",
        desc:     "<p>Sara trifft auf [Robert Haab](https://de.wikipedia.org/wiki/Robert_Haab), den Generaldirektor der [SBB](https://de.wikipedia.org/wiki/Schweizerische_Bundesbahnen). Der 1. Weltkrieg beginnt. Die Kohle wird langsam knapp. Die SBB steckt in grossen finanziellen Schwierigkeiten. Die Elektrifizierung ist die Lösung für beide Probleme. Haab will alles elektrifizieren. Sara möchte bei der ersten Fahrt der elekrifizierten [Krokodil-Lokomotive](https://de.wikipedia.org/wiki/Krokodil_(Lokomotive)) von Thun nach Bern dabei sein.",
        animatic: "",
        athmosphere: "Krise, Krieg, Ungewissheit, dann erleichtert und motiviert",
        audio: "audio/E3.mp3",
        open:     false,
        scenes:   [
            {
                image:  "img/4.7 2.png",
                action: "Sara sitzt plötzlich im Bahnhof Bern auf einer Bank auf dem Perron. Neben ihr sitzt Robert Haab."
            },
            {
                image:  'img/4.8 2.png',
                dialog: [
                    {char: 'Sara', text: "Wow! So wenig Kohle für so eine grosse Lokomotive? Ich kann mir gar nicht vorstellen, dass sie so fahren kann."},
                    {char: 'Haab', text: "Kann sie auch nicht. Mit so wenig Kohle kann sich der Lokführer nicht mal richtig warmhalten."},
                    {char: 'Sara', text: "Kennen Sie sich aus mit Eisenbahnen?"},
                    {char: 'Haab', text: "Ja. Ich war schliesslich früher der Generaldirektor der SBB. Angenehm, Robert Haab."},
                ],
                action: "Sara sieht eine Dampflokomotive. Daneben liegt ein kleiner Haufen Kohle."
            },
            {
                image:  'img/5.2 2.png',
                dialog: [
                    {char: 'Sara', text: "Und was arbeiten Sie jetzt?"},
                    {char: 'Haab', text: "Ich bin Bundesrat und leite das Post- und Eisenbahndepartement."},
                    {char: 'Haab', text: "Wir stecken in schwierigen Zeiten. Wir befinden uns seit drei Jahren in einem Weltkrieg. Uns geht langsam die Kohle aus, weil die Deutschen uns ihre Kohle nicht mehr verkaufen wollen. Sie brauchen sie selbst."},
                ],
                action: "In Gedankenbubble sieht man Deutschland und Kohle."
            },
            {
                image:  'img/5.3 2.png',
                dialog: [
                    {char: 'Haab', text: "Die SBB hat nicht genug Geld, weil die Leute im Krieg nicht mehr Zug fahren und keine Touristen mehr kommen. Deshalb können wir unsere Angestellten nicht mehr richtig bezahlen."},
                ],
                action: "In Gedankenbubble sieht man Arbeiter, die streiken."
            },
            {
                image:  'img/windblättern.jpeg',
                dialog: [
                    {char: 'Sara', text: "Schwierig. Jetzt ist mir klar, weshalb du so besorgt bist."},
                    {char: 'Sara', text: "Huch…"},
                ],
                action: "Der Wind blättert im Buch eine Seite zurück."
            },
            {
                image: "img/bls.jpeg",
                dialog: [
                    {char: 'Sara', text: "Hä? Diese Lokomotive macht ja gar keinen Dampf."},
                    {char: 'Haab', text: "Sicher nicht, die fährt ja auch mit Strom…"},
                    {char: 'Haab', text: "Warte mal… vielleicht wäre genau das die Lösung für den Kohlemangel. Wir müssen so schnell wie möglich das ganze Eisenbahnnetz elektrifizieren. Ich gebe sofort die erste Versuchsstrecke in Auftrag."},
                ],
                action: "Im Buch sieht man die Bern Simplon Lötschberg Bahn mit Strom durch die Landschaft fahren."
            },
            {
                image:  'img/5.6.png',
                dialog: [
                    {char: 'Sara', text: "Da bin ich ja mal gespannt."},
                ],
                action: "Sara blättert weiter."
            },
            {
                image:  'img/5.9 2.png',
                dialog: [
                    {char: 'Haab', text: "Schau, unsere Versuche waren erfolgreich. Hier trifft gerade die erste reguläre elektrisch angetriebene Lokomotive ein. Wir nennen sie «Krokodil». Du siehst sicher, warum."},
                ],
                action: "Sie stehen zusammen auf dem Perron und schauen auf die einfahrenden Züge. Ihre Gesichter zeigen nicht in richtung Kamera."
            },
            {
                image: 'img/5.10.png',
                dialog: [
                    {char: 'Sara', text: "Jäää 🤔…"},
                    {char: 'Sara', text: "Ein bisschen…"},
                ],
                action: "In der Gedankenbubble von Sara sieht man, wie sie die Lok mit einem Krokodil vergleicht."
            },
            {
                image: 'img/5.11.png',
                dialog: [
                    {char: 'Sara', text: "Kann ich da mal mitfahren?"},
                    {char: 'Haab', text: "Ich nehme jetzt gleich den Zug nach Thun. Es wäre mir ein Vergnügen, wenn du mitkommst."},
                    {char: 'Sara', text: "Juhui, danke!"},
                ],
                action: "Sie schauen sich an. Bevor Sara einsteigen kann, geht Episode zu Ende."
            },
        ]
    },
    {
        title:  "Taktfahrplan",
        number: "4",
        desc:   "<b>Wird momentan nicht umgesetzt.</b><br>Sara trifft auf Samuel Stähli. Der 28-jährige ETH Ingenieur will in der Schweiz einen Taktfahrplan einführen. Das bedeutet, dass zwischen grossen Verkehrsknotenpunkten die Züge in einem geregelten Takt fahren. Die Wartezeit wird verkürzt und die Anschlussmöglichkeiten werden verbessert. Unter diesem Projekt wird auch die Bahn2000 gestartet. Er erzählt noch, wie er das Projekt der Fahrplankommision vorstellen wird.",
        image:  "img/6.1.png",
        open:   false,
        scenes: []
    },
    {
        title:    "Ende",
        number:   "5",
        desc:     "Sara wird in die Gegenwart zurückgeholt. Sie fasst kurz zusammen, was sie alles erlebt hat. Sie fragt ihre Eltern, warum in der Eisenbahngeschichte nur Männer vorkamen. Emma findet, dass sie gerne Lokführerin werden möchte.",
        animatic: "",
        athmosphere: "Etwas benommen von der Reise, aber begeistert",
        audio: "audio/Ende.mp3",
        open:     false,
        scenes:   [
            {
                image: 'img/5.13.png',
                dialog: [
                    {char: "Emma", text: "Sara! Sara! Komm, ich möchte weiter, mir ist langweilig."},
                ],
                action: "Emma zupft Sara am Ärmel und reisst sie aus ihrer Gedankenwelt heraus."
            },
            {
                image: 'img/5.14.png',
                dialog: [
                    {char: "Sara", text: "Och 😕. Ich hätte noch so viel Spannendes erfahren können."}
                ],
                action: "Seufzend klappt Sara das Buch zu."
            },
            {
                image: 'img/5.15.png',
                dialog: [
                    {char: "Sara", text: "Stellt euch vor: Ich habe ganz viel über die Eisenbahnen in der Schweiz erfahren."},
                    {char: "Sara", text: "Ich bin in der ersten Eisenbahn der Schweiz von Baden nach Zürich gefahren."},
                    {char: "Sara", text: "Und wusstet ihr, warum die SBB gegründet wurde? Vorher konnte nämlich jeder, der Geld hatte, eine eigene Eisenbahn bauen. Das wurde auf die Dauer zu teuer und die Leute waren nicht mehr zufrieden."},
                    {char: "Mama", text: "Dann hast du sicher auch erfahren, dass die Lokomotiven früher mit Kohle statt mit Strom fuhren."},
                    {char: "Sara", text: "Genau. Ich finde es bloss merkwürdig, dass ich nur Männer angetroffen habe."},
                    {char: "Papa", text: "Ja, leider durften Frauen damals nicht mitbestimmen und diese Berufe nicht ausüben. "},
                ],
                action: "Sara und Emma gehen zu ihren Eltern. In der Gedankenbubble wird die Zusammenfassung noch einmal gezeigt."
            },
            {
                image: 'img/5.16.png',
                dialog: [
                    {char: "Sara", text: "Wirklich? Das kann ich fast nicht glauben. Ah schaut, hier steht sogar, dass es 100 Jahre gedauert hat, bis die erste Frau bei der SBB Lokführerin wurde."},
                    {char: "Emma", text: "Hmm, wer weiss, vielleicht werde ich ja mal Lokführerin."}
                ],
                action: "Die Familie steht vor einem Facts Schild der SBB mit grossem Logo. In der Gedankenblase von Emma sieht man sie als Lokführerin."
            },
        ]
    },
    {
        title:    "Zusatz",
        number:   "6",
        desc:     "",
        animatic: "",
        open:     false,
        scenes:   [
            {
                dialog: [
                    {char: "Sara", text: `Hallo, ich bin Sara. Kürzlich bin ich im Verkehrshaus in eine Lokomotive gestiegen und habe in einer Ecke dieses Buch gefunden. Es hat mich in der Zeit zurück katapultiert! Plötzlich stand mir ein Mann in altmodischem Anzug gegenüber. Stellt euch vor, wie verwundert ich war. Natürlich habe ich mir nichts anmerken lassen und bin einfach weiter durch die Schweizer Eisenbahngeschichte gereist.\n
Seid ihr auch so neugierig wie ich? Kommt mit, dann könnt ihr es gleich selbst erleben!`},
                ],
            },
            {
                image: 'img/5.14.png',
                dialog: [
                    {char: "Sara", text: "Och 😕. Ich hätte noch so viel Spannendes erfahren können."}
                ],
                action: "Seufzend klappt Sara das Buch zu."
            },
            {
                image: 'img/5.15.png',
                dialog: [
                    {char: "Sara", text: "Stellt euch vor: Ich habe ganz viel über die Eisenbahnen in der Schweiz erfahren."},
                    {char: "Sara", text: "Ich bin in der ersten Eisenbahn der Schweiz von Baden nach Zürich gefahren."},
                    {char: "Sara", text: "Und wusstet ihr, warum die SBB gegründet wurde? Vorher konnte nämlich jeder, der Geld hatte, eine eigene Eisenbahn bauen. Das wurde auf die Dauer zu teuer und die Leute waren nicht mehr zufrieden."},
                    {char: "Mama", text: "Dann hast du sicher auch erfahren, dass die Lokomotiven früher mit Kohle statt mit Strom fuhren."},
                    {char: "Sara", text: "Genau. Ich finde es bloss merkwürdig, dass ich nur Männer angetroffen habe."},
                    {char: "Papa", text: "Ja, leider durften Frauen damals nicht mitbestimmen und diese Berufe nicht ausüben. "},
                ],
                action: "Sara und Emma gehen zu ihren Eltern. In der Gedankenbubble wird die Zusammenfassung noch einmal gezeigt."
            },
            {
                image: 'img/5.16.png',
                dialog: [
                    {char: "Sara", text: "Wirklich? Das kann ich fast nicht glauben. Ah schaut, hier steht sogar, dass es 100 Jahre gedauert hat, bis die erste Frau bei der SBB Lokführerin wurde."},
                    {char: "Emma", text: "Hmm, wer weiss, vielleicht werde ich ja mal Lokführerin."}
                ],
                action: "Die Familie steht vor einem Facts Schild der SBB mit grossem Logo. In der Gedankenblase von Emma sieht man sie als Lokführerin."
            },
        ]
    }
]
