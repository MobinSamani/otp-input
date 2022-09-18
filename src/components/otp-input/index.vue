<template>
  <div class="flex flex-col gap-y-6">
    <div v-if="title || description" class="flex flex-col gap-y-2">
      <div v-if="title" class="text-lg font-bold">
        {{ title }}
      </div>

      <div v-if="description" class="text-gray-500">
        {{ description }}
      </div>
    </div>

    <div class="flex gap-x-2">
      <input-box v-for="(input, index) in length" :key="index" :index="index" v-model="model[index]" @codePaste="paste" @confirm="confirm" />
    </div>
  </div>
</template>

<script>
import InputBox from "./input-box.vue";
import vModel from "../../mixins/vModel.vue";

export default {
  name: "OTP Input",
  mixins: [vModel],
  components: {
    InputBox
  },
  props: {
    title: String,
    description: String,
    length: { type: Number, default: 6 }
  },
  methods: {
    paste(value) {
      this.model = value.slice(0, this.length).split("");
      this.$nextTick(this.confirm);
    },
    confirm() {
      if (this.model.filter((item) => item.length).length === this.length) this.$emit("confirm");
    }
  }
};
</script>
