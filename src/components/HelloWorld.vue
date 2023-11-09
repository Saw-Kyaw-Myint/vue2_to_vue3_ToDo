<template lang="pug">
div 
    p
      slot
    div(class="flex items-center mt-2")
      PrimaryButtton(@add="add()")
      input(type="text" v-model="count" class=" border  p-2 mx-2")
      button(
        type="button"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="count--"
      ) -
</template>

<script>
import { ref, toRefs } from "@vue/composition-api";
import PrimaryButtton from "./PrimaryButton.vue";
import { createNamespacedHelpers } from "vuex-composition-helpers";
const { useState } = createNamespacedHelpers("Testing");

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    PrimaryButtton,
  },

  setup(props, ctx) {
    const count = ref(0);
    const { msg } = toRefs(props);
    const attributes = ctx.attrs;
    const { SayHello } = useState(["SayHello"]);

    console.log("Attributes:", attributes);
    console.log(ctx.slots);
    console.log(msg);
    console.log(SayHello.value);

    const add = () => {
      count.value++;
    };

    return {
      count,
      add,
    };
  },
};
</script>
