<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>How to build webapps that scale</h1>

        <ProfileItem />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>
            Web development technologies have evolved at an incredible clip over
            the past few years.
          </p>
          <h2 id="introducing-ionic">Introducing RealWorld.</h2>
          <p>It's a great solution for learning how other frameworks work.</p>
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <ProfileItem />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <CommentForm />

          <CommentItem v-for="i in 5" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentForm from '../components/CommentForm.vue'
import CommentItem from '../components/CommentItem.vue'
import ProfileItem from '../components/ProfileItem.vue'
export default {
  name: 'ArticlePage',
  layout: 'LayoutDefault',
  components: { CommentForm, CommentItem, ProfileItem },
}
</script>
