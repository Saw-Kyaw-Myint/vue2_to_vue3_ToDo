<template lang="pug">
.locale-switcher
  select(class="block w-full py-1 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none shadow focus:ring-blue-500 focus:border-blue-500 px-2" v-model="$i18n.locale")
    option(value="en") English
    option(value="mr") myanmar
</template>
<script>
export default {
  name: "LocaleSwitcher",
};
</script>
