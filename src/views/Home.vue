<template>
    <v-sheet color="transparent" tile class="about pa-2 py-8">
        <v-card max-width="700" class="mx-auto" tag="article">
            <v-img src="/img/teaser-ohne.jpg" class="text-center">
                <v-sheet dark color="transparent" class="header-titles py-8">
                    <h1 class="display-3 font-weight-bold">ZeitZug</h1>
                    <h2 class="subtitle-1">Die Schweizer Eisenbahngeschichte</h2>
                </v-sheet>
            </v-img>
            <h1 class="headline px-4 pt-8 pb-0">Wie fühlten sich die Eisenbahnpioniere der Schweiz?</h1>
            <div class="pa-4 inherit-color">
                <p>
                    Sara findet bei ihrem Besuch im Verkehrshaus in einer alten
                    Lokomotive ein ausser&shy;gewöhnliches Buch. Sie wird durch die Zeit katapultiert und
                    steht plötzlich dem
                    Ingenieur der ersten Eisenbahn der Schweiz gegenüber. Seite für Seite reist sie durch die Schweizer
                    Eisenbahngeschichte und trifft auf interessante Persönlichkeiten.</p>
                <p>
                    Welche Herausforderungen Alfred Escher & Co. bis zur Gründung der heutigen SBB gemeistert
                    haben,
                    erfahren Schulklassen im Verkehrshaus Schweiz. Eine Webapp mit animierten Erklärvideos führt
                    die
                    11-14-Jährigen durch die Ausstellung Schienenverkehr und erweckt die Lokomotiven zum Leben. So
                    werden historische Ereignisse von der ersten Fahrt der «Spanisch-Brötli-Bahn» bis zur
                    Verstaatlichung der Schweizer Eisenbahnen anschaulich und verständlich vermittelt.
                </p>
                <div class="text-center pa-4">
                    <v-btn rounded color="primary" x-large :to="{name: 'AppChoose'}">Jetzt entdecken!</v-btn>
                </div>
            </div>
        </v-card>
    </v-sheet>
</template>

<style scoped lang="scss">
    .inherit-color {
        color: inherit !important;
        text-align: justify;
        hyphens: auto;
    }

    .header-titles {
        text-shadow: 0 0 5px #6ea7dd;
        h1 {
            font-size: 70px!important;
            line-height: 1.2;
        }
        h2 {
            line-height: 1.1 !important;
        }
    }
</style>
