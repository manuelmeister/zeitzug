<template>
    <v-sheet color="transparent" tile class="about pa-2 py-8">
        <v-card max-width="700" class="mx-auto" tag="article">
            <h1 class="display-1 pa-4 pt-8">Über das Projekt</h1>
            <v-card-text class="inherit-color">
                <p>
                    In meiner praktische Bachelorarbeit geht es um die Geschichte der Eisenbahn in der Schweiz. <br>
                    Dazu erstelle ich 5 animierte Erklärvideos für 11 - 14-jährige Kinder & Jugendliche à ca. 3 Minuten.
                    Diese Videos stelle ich in Form eines Webapps zusammen, das als Angebot für
                    Schulklassen im Verkehrshaus in der Ausstellung "Schienenverkehr" eingesetzt wird.
                </p>
                <v-img src="img/profil.jpg" v-if="$vuetify.breakpoint.xsOnly"/>
                <h2 class="title mt-4 mb-1">Credits</h2>
                <p>
                    Sprecher: <strong><a href="http://www.kurtgruenenfelder.ch/">Kurt Grünenfelder&nbsp;<i
                        class="v-icon mdi small mdi-open-in-new"/></a></strong><br>
                    Sprecherin: <strong>Edda Claude</strong><br>
                    Illustration der Charaktere: <strong><a href="https://www.behance.net/irmirx">Irina Mir&nbsp;<i
                        class="v-icon mdi small mdi-open-in-new"/></a></strong><br>
                    Leiter der Vermittlung des Verkehrshauses: <strong>Fabian Hochstrasser</strong><br>
                    Pädagogische Unterstützung: <strong>Flurina Mäder</strong><br>

                </p>
                <h2 class="title mt-4 mb-1">Dank</h2>
                <p>
                    iPad Leihgabe: <strong>Jasmine Jactot Descombes</strong><br>
                    Testen der Videos: <strong>Daara Grab</strong><br>
                    Die Verwendung der Musik erfolgt mit freundlicher Genehmigung der <strong>Urban Games
                    GmbH</strong><br>
                </p>
            </v-card-text>
            <v-divider/>
            <v-sheet color="blue-grey lighten-5">
                <v-card-text>
                    <h2 class="title mt-4 mb-1">Über den Autor</h2>
                    <v-avatar width="100" height="100" v-if="$vuetify.breakpoint.smAndUp" style="float: right">
                        <v-img src="img/profil.jpg"/>
                    </v-avatar>
                    <p>
                        Manuel Meister studiert <a target="_blank" href="https://cast.zhdk.ch/">Cast / Audiovisual Media&nbsp;<i class="v-icon mdi small mdi-open-in-new"/></a> an der <a
                            target="_blank" href="https://zhdk.ch/">Zürcher Hochschule der Künste&nbsp;<i
                            class="v-icon mdi small mdi-open-in-new"/></a>. Vor seinem Studium hat er das
                        Gymnasium mit Schwerpunktfach Bildnerisches Gestalten
                        und eine Way-Up Lehre als Informatiker bei der Schweizerischen Post absolviert.
                    </p>
                    <p>In seiner Freizeit fährt er viel Zug, wandert gerne und singt im
                        Popchor VidaVocal mit. Daneben ist er in der Kantonsleitung der Pfadi Kanton
                        Bern und im Kernteam vom Lagerradio des Bundeslagers 2021. </p>
                </v-card-text>
            </v-sheet>
        </v-card>
    </v-sheet>
</template>

<style>
    .inherit-color {
        color: inherit!important;
    }
</style>
