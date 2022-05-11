<template>
  <div class="home-page">
    <BannerSection />

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <FeedTabs />
          <FeedPreviewItem v-for="i in 10" :key="i" />
        </div>

        <div class="col-md-3">
          <TagsSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeedPreviewItem from '../layouts/FeedPreviewItem.vue'
import TagsSection from '../layouts/TagsSection.vue'
import FeedTabs from '../layouts/FeedTabs.vue'
import BannerSection from '../layouts/BannerSection.vue'
export default {
  name: 'IndexPage',
  layout: 'LayoutDefault',
  components: { FeedPreviewItem, TagsSection, FeedTabs, BannerSection },
}
</script>
