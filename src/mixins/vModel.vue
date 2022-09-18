<script>
export default {
  props: ["modelValue"],
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      }
    }
  }
};
</script>
