<script setup>
import {
  qryArticleBySlug
} from "~/queries/articles";
const route = useRoute();
const routeParams = route.params;


const isLoading = ref(true)
const { data: article } = await useSanityQuery(qryArticleBySlug, {
  slug: routeParams.slug,
}).finally(() => {
  isLoading.value = false
});

// const articleTags = article.value.tags;
// console.log("Article Tags: ", JSON.stringify(articleTags));
// console.log("Article: ", JSON.stringify(article.value, null, 2));

useSeoMeta({
  title: computed(() => article.value?.title || ''),
  description: computed(() => article.value?.excerpt || ''),
  ogTitle: computed(() => article.value?.title || ''),
  ogDescription: computed(() => article.value?.excerpt || ''),
  ogImage: computed(() => article.value?.image.asset.url || ''),
  twitterTitle: computed(() => article.value?.title || ''),
  twitterDescription: computed(() => article.value?.excerpt || ''),
  twitterImage: computed(() => article.value?.image.asset.url || ''),
  twitterCard: "summary_large_image",
});

// useSchemaOrg([
//   defineArticle({
//     // name and description can usually be inferred
//     image: article.value.image.asset.url,
//     datePublished: article.value._createdAt,
//     dateModified: article.value.publishedDate,
//   })
// ])

definePageMeta({
  layout: false,
});

// const articleSettings = computed(() => ({
//   title: article.value?.title || '',
//   description: article.value?.excerpt || '',
//   image: article.value?.image.url || '',
//   siteName: settings?.title || '',
//   siteLogo: settings?.logoUrl || '',
// }))
// defineOgImageComponent("article", articleSettings.value);
</script>

<template>
  <NuxtLayout name="internal">
    <template #main>
      <section id="article">
        <article-content :loading="isLoading" :article="article" />
      </section>
    </template>
    <template #sidebar>
      <div class="sticky top-[95px] mx-3 grid grid-cols-1 @2xl:grid-cols-2 @md:gap-3">
        <div class="hidden sm:pb-8 md:block">
          <article-collection-navigation />
        </div>
        <div class="pb-8 place-content-center">
          <article-sidebar-latest number="4" />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
