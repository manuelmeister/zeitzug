<template>
    <div style="position:relative;">
        <header class="siteheader">
            <h1>Geschichte der Eisenbahn in der Schweiz</h1>
        </header>
        <nav class="main-nav">
            <ul>
                <li>
                    <router-link :to="{name: 'Storyboard'}">Storyboard</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'Characters'}">Storyboard</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'About'}">About</router-link>
                </li>
            </ul>
        </nav>
        <router-view/>
    </div>
</template>

<style lang="scss">
</style>
