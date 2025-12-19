<script setup>
const siteSettings = useSiteSettingsStore();
const settings = siteSettings.settings;
</script>
<template>
  <div id="settings">
    <h3>Theme</h3>
    <div id="theme-colours">
      <div class="theme-colour colour-primary">Primary<br/>{{ settings.color?.primary?.hex }}</div>
      <div class="theme-colour colour-secondary">Secondary<br/>{{ settings.color?.secondary?.hex }}</div>
      <div class="theme-colour colour-surface-light">Surface Light<br/>{{ settings.color?.surface?.light?.hex }}</div>
      <div class="theme-colour colour-surface-dark">Surface Dark<br/>{{ settings.color?.surface?.dark?.hex }}</div>
    </div>
    <div id="theme-fonts">
      <div class="theme-font font-primary">Primary Font: {{ settings.fontPrimary }}</div>
      <div class="theme-font font-secondary">Secondary Font: {{ settings.fontSecondary }}</div>
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

  .font-primary {
    font: var(--font-primary);
    font-size: large;
  }

  .font-secondary {
    font-family: var(--font-secondary), 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  .colour-primary {
    color: var(--color-secondary);
    background-color: var(--color-primary);
  }
  .colour-secondary {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }
  .colour-surface-light {
    color: var(--color-surface-dark);
    background-color: var(--color-surface-light);
  }
  .colour-surface-dark {
    color: var(--color-surface-light);
    background-color: var(--color-surface-dark);
  }
</style>
