<script setup>
import { qryArticleLatest } from '~/queries/articles';

const { data: articles } = await useSanityQuery(qryArticleLatest);
</script>
<template>
 <div>

  <NuxtLayout name="homepage">
     <main class="@container mx-auto mb-16 max-w-[1280px] px-4">
 
     <app-banner />
       <article-list :articles="articles" />

      <app-settings />
     </main>

  </NuxtLayout>
 </div>
</template>
