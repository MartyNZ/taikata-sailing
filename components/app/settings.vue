<script setup>
const siteSettings = useSiteSettingsStore();
const settings = siteSettings.settings;
</script>
<template>
  <div id="settings">
    <h3>Theme</h3>
    <div id="theme-colours">
     <div class="theme-colour bg-primary-500 text-surface-50">Primary<br />{{ settings.color?.primary?.hex }}</div>
      <div class="theme-colour bg-secondary-500 text-surface-950">Secondary<br />{{ settings.color?.secondary?.hex }}
      </div>
      <div class="theme-colour bg-surface-50 text-surface-950">Surface Light<br />{{ settings.color?.surface?.light?.hex
      }}</div>
      <div class="theme-colour bg-surface-950 text-surface-50">Surface Dark<br />{{ settings.color?.surface?.dark?.hex
      }}</div>
    </div>
    <div id="theme-fonts">
      <div class="theme-font font-primary">Primary Font: <h2>{{ settings.fontPrimary }}</h2>
      </div>
      <div class="theme-font font-secondary">Secondary Font: <p>{{ settings.fontSecondary }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
  #settings {
    display:grid;

    width:100%;
  }

  #theme-colours {
    display:grid;
    grid-template-columns: repeat(4, minmax(150px, 1fr));
    margin-inline: auto;
    gap:1em;
    height:fit-content;
  }

  .theme-colour {
    border: 2px solid black;
    padding-block:1.5em;
    padding-inline:2em;
    align-items: center;
    justify-self: center;
  }

</style>
