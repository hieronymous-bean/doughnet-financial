<template>
  <div class="flex items-center justify-center font-poppins">
    <div class="max-w-screen w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
    data: () => ({
        title: 'Authorization'
    }),
    components: {
    }
}
</script>