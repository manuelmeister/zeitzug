<template>
  <div style="position:relative;">
    <header class="siteheader">
      <h1>Geschichte der Eisenbahn in der Schweiz</h1>
    </header>
    <nav class="secondary-nav">
      <ul>
        <li v-for="nav in navigation" :key="nav.number">
          <a :href="'#' + nav.number">{{nav.title}}</a>
        </li>
      </ul>
    </nav>
    <main>
      <section v-for="(dialog,index) in dialog" class="panels-container" :id="dialog.number" :key="dialog.number"
               :aria-expanded="dialog.open + ''">
        <header class="panel">
          <div class="detail">
            <h2>{{ dialog.number }}. {{dialog.title}} <a class="link" :href="'#'+dialog.number" title="Link">🔗</a></h2>
            <h3>Beschreibung</h3>
            <div class="dia desc" v-html="dialog.desc" />
            <template v-if="dialog.athmosphere">
              <h3>Atmosphäre</h3>
              <div class="dia desc" v-html="dialog.athmosphere"/>
            </template>
            <template v-if="dialog.audio">
              <h3>Dialog</h3>
              <audio controls :src="dialog.audio"/>
            </template>
            <template v-if="dialog.open && dialog.animatic">
              <h3>Animatic</h3>
              <div class="video">
                <div class="aspect-ratio-box" v-html="dialog.animatic"/>
              </div>
            </template>
            <img v-if="dialog.open && dialog.image" :src="dialog.image" alt="">
            <button class="more" @click="toggle(index)">{{ dialog.open ? "Schliessen" : "Erweitern"}}</button>
          </div>
        </header>
        <article class="article-panel" v-for="(scene,index) in dialog.scenes" :id="dialog.number + '.' + index"
                 :key="dialog.number + '.' + index">
          <div class="panel">
            <img v-if="scene.image" :src="scene.image" alt="">
            <div class="detail">
              <h2>{{ dialog.number }}.{{index}} <a class="link" :href="'#' + dialog.number + '.' + index" title="Link">🔗</a>
              </h2>
              <template v-if="scene.dialog">
                <h3>Dialog</h3>
                <div class="dia" v-if="Array.isArray(scene.dialog)">
                  <p v-for="(paragraph,index) in scene.dialog" :key="index"><b>{{paragraph.char}}:</b> <span
                          v-html="paragraph.text"></span></p>
                </div>
                <p class="dia" v-else>{{scene.dialog}}</p>
              </template>
              <template v-if="scene.book">
                <h3>Buchtitel</h3>
                <p class="act">{{scene.book}}</p>
              </template>
              <template v-if="scene.action">
                <h3>Handlung</h3>
                <p class="act">{{scene.action}}</p>
              </template>
              <template v-if="scene.useraction">
                <h3>Benutzeraktion</h3>
                <p class="act">{{scene.useraction}}</p>
              </template>
            </div>
          </div>
        </article>
      </section>
    </main>
    <footer class="footer">
      <p>Manuel Meister</p>
      <p>Created: 3 Mar 2020 at 11:34:34 CET</p>
      <p>Modified: 21 Apr 2020 at 10:55:06 CEST</p>
    </footer>
  </div>
</template>

<script>
  import { default as dialog_de } from "./dialog.de";

  export default {
    name:     "App",
    data() {
      return {
        dialog: dialog_de
      };
    },
    beforeCreate() {
      if (location.hash) {
        dialog_de[location.hash.charAt(1)].open = true;
      }
      this.$set(this, "dialog", dialog_de);
    },
    computed: {
      navigation() {
        return this.dialog.slice(1, -2);
      }
    },
    methods:  {
      toggle(dialog) {
        this.dialog[dialog].open = !this.dialog[dialog].open;
      }
    }
  };
</script>

<style lang="scss">
  $font-family: Inter, sans-serif, emoji;
  body {
    font-family: $font-family;
    line-height: 1.5;
    letter-spacing: -0.05px;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: $font-family;
  }

  h1 {
    text-align: center;
  }

  h2 {
    font-size: 1.33rem;
    margin: 0;
    font-feature-settings: "tnum";
    font-weight: 400;
    padding-left: 4px;
  }

  /* sequence number */
  h3 {
    font-size: 0.7rem;
    color: #444;
    margin-bottom: 0;
    padding: 4px;
  }

  header.panel h2 {
    background: #607d8b;
    color: white;
    margin: -20px -20px 0;
    padding: 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    justify-content: space-between;
  }

  button.more {
    border-radius: 4px;
    padding: 5px;
    background: #cfd8dc;
    color: #37474f;
    border: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 1rem;
    align-self: center;
  }

  .panel .dia,
  .panel .act {
    margin-top: 0;
    padding: 4px;
    background: #eee;
    display: block;
    min-height: 1rem;
    flex-grow: 1;

    span {
      white-space: pre-line;
    }
  }

  .dia {
    max-width: 660px;
  }

  .article-panel {
    padding-top: 60px;
    margin-top: -59px;
  }

  .panel {
    /* breaks page after for printer */
    page-break-inside: avoid;
    page-break-after: auto;
    padding: 10px;
    margin: 0 auto;
    max-width: 1200px;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    align-items: flex-start;
  }

  [aria-expanded="false"] .panel:not(header) {
    display: none;
  }

  [aria-expanded="true"] .panel:not(header) {
    display: flex;
  }

  .panel:not(header) {
    max-width: 1160px;
    border-radius: 0;
  }

  .panels-container .panel:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .panel + .panel {
    border-top: 1px solid rgba(0, 0, 0, 0.4);
  }

  .detail {
    margin: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-self: stretch;

    h2 {
      a {
        text-decoration: none;
        display: none;
      }

      &:hover a {
        display: inline;
      }
    }
  }

  div.dia {
    white-space: normal !important;
  }

  .dia.desc {
    background: none;
    max-width: 100%;
    a {
      color: #1976d2;
      &:after {
        content: '↗︎';
      }
      &:hover {
        font-weight: bold;
      }
    }
  }

  .dia p {
    margin: 0;
  }

  .dia p + p {
    margin-top: 5px;
  }

  .panel img {
    margin: 10px;
    width: 40%;
    height: auto;
    order: 2;
    border: 1px solid #e0e0e0;
  }

  hr {
    margin: 20px 0;
  }

  .video {
    max-width: 660px;
  }

  .aspect-ratio-box {
    height: 0;
    overflow: hidden;
    padding-top: 56.25%;
    background: white;
    position: relative;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .footer {
    margin: 0 auto;
    padding: 10px;
  }

  .footer p {
    margin: 0;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.3);
  }

  .panels-container {
    padding: 5px;
  }

  .panels-container:not(:first-of-type) {
    padding-top: 60px;
  }

  nav ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    flex-wrap: wrap;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    border: 1px solid #607d8b;
    border-radius: 4px;
    background: #607d8b;
  }

  nav ul li {
    flex-grow: 1;
    flex-basis: 80px;
  }

  nav ul li + li a {
    border-left: 1px solid #b0bec5;
  }

  nav ul li a {
    display: block;
    text-align: center;
    padding: 10px 5px;
    font-weight: 600;
    color: #eceff1;
    &:hover {
      color: #f9f9ff;
    }
    text-decoration: none;
  }

  .siteheader {
    background: black;
    color: white;
    padding: 10px;
    position: relative;
    z-index: 10;
  }

  nav {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    padding: 10px 5px;
    margin-bottom: 20px;
    background: black;
    z-index: 1;
    box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.2),
    0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12);
  }

  button.more {
    padding: 10px 5px;
  }

  @media print {
    html {
      font-size: 10pt;
    }

    .panel img {
      width: 30vw;
    }
  }

  @media screen {
    body {
      background: #263238;
    }

    .panel {
      border: none;
      box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 15px;
    }

    nav {
      position: initial;
    }

    nav ul {
      flex-direction: column;
    }

    nav ul li {
      flex: auto;
    }

    nav ul li + li a {
      border-top: 1px solid rgba(255, 255, 255, 0.16);
      border-left: none;
    }

    .panel {
      flex-direction: column;
    }

    .panel img {
      order: 0;
      width: calc(100% - 20px);
      height: auto;
    }
  }

  @media screen and (max-width: 520px) {
    html {
      font-size: 12px;
    }
  }
</style>
