<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    <div class="flex flex-col gap-y-8 w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4">
      <div class="flex items-center justify-center gap-2 flex-wrap text-center">
        <div class="text-gray-600">A Vue OTP Input Component by</div>

        <a class="font-bold" href="https://MobinSamani.com" target="_blank">MobinSamani.com</a>
      </div>

      <div class="bg-white shadow rounded-lg p-8 flex flex-col gap-y-8">
        <div class="flex flex-col gap-y-4">
          <otp-input
            title="Please check your email"
            description="We've sent a code to mail@domain.com"
            v-model="verificationCode"
            @confirm="confirm"
          />

          <div class="text-sm text-center opacity-25">Didn't get a code? <span class="underline">Click to resend.</span></div>
        </div>

        <button disabled class="bg-blue-900 text-white rounded p-2 opacity-25">Verify</button>
      </div>
    </div>
  </div>
</template>

<script>
import OtpInput from "./components/otp-input/index.vue";

export default {
  name: "App",
  components: {
    OtpInput
  },
  data() {
    return {
      verificationCode: []
    };
  },
  methods: {
    confirm() {
      alert(`Verification code is: ${this.verificationCode.join("")}`);
    }
  }
};
</script>
