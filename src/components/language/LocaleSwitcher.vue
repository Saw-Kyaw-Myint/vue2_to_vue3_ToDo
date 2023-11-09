<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="mr">myanmar</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "LocaleSwitcher",
};
</script>
