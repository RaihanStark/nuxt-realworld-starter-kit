<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand">conduit</NuxtLink>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/edit_article" class="nav-link"
            ><i class="ion-compose"></i>&nbsp;New Article</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink to="/settings" class="nav-link"
            ><i class="ion-gear-a"></i>&nbsp;Settings</NuxtLink
          >
        </li>
        <li class="nav-item">
          <NuxtLink to="/login" class="nav-link">Sign in</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/register" class="nav-link">Sign up</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
