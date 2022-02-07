<template>
  <div v-if="isShowing">This is showing</div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      isShowing: false,
    };
  },
};
</script>