<template lang="pug">
div
  button(type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="add()") +
</template>

<script>
export default {
  name: "PrimaryButton",
  setup(_, ctx) {
    const add = () => {
      ctx.emit("add");
    };

    return {
      add,
    };
  },
};
</script>
