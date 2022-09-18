<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    <div class="flex flex-col gap-y-8 w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4">
      <div class="flex items-center justify-center gap-2 flex-wrap text-center">
        <div class="text-gray-600">A Vue OTP Input Component by</div>

        <a class="font-bold" href="https://MobinSamani.com" target="_blank">MobinSamani.com</a>
      </div>

      <div class="bg-white shadow rounded-lg p-8">
        <otp-input/>
      </div>
    </div>
  </div>
</template>

<script>
import OtpInput from "./components/otp-input.vue";

export default {
  name: "App",
  components: {
    OtpInput
  }
};
</script>
