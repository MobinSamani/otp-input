<template>
  <input
    ref="input"
    :id="`code-${index}`"
    autocomplete="off"
    maxlength="1"
    class="bg-gray-200 h-full w-full py-4 text-3xl text-center text-gray-800 rounded-lg flex items-center justify-center"
    v-model.trim="model"
    @input="goToNextInput"
    @focus="handleFocus"
    @paste="handlePaste"
  />
</template>

<script>
import vModel from "../../mixins/vModel.vue";

export default {
  name: "OTP Input Box",
  mixins: [vModel],
  props: {
    index: { type: Number, required: true }
  },
  mounted() {
    if (!this.index) this.handleFocus();
  },
  methods: {
    goToNextInput() {
      const nextInput = document.getElementById(`code-${this.index + 1}`);
      if (nextInput) nextInput.focus();
      else this.$emit("confirm");
    },
    handleFocus() {
      this.$refs.input.select();
    },
    handlePaste(e) {
      const data = (e.clipboardData || window.clipboardData).getData("text").trim();
      if (data.length > 1) {
        this.$emit("codePaste", data);
      } else this.model = data;
    }
  }
};
</script>
