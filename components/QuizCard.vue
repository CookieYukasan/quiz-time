<template>
  <div
    class="rounded-lg border-2 border-b-4 bg-grey-400 py-11 px-8 text-center relative cursor-pointer"
    :class="{
      'border-grey-300': quiz.status === 'default',
      'border-green-light': quiz.status === 'success',
      'border-red-light': quiz.status === 'error',
    }"
  >
    <div
      v-if="quiz.status !== 'default'"
      class="w-[24px] h-[24px] rounded-full flex items-center justify-center absolute top-4 right-4"
      :class="{
        'bg-green-light': quiz.status === 'success',
        'bg-red-light': quiz.status === 'error',
      }"
    >
      <svg
        v-if="quiz.status === 'success'"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 9.75L6.75 12.75L14.25 5.25"
          stroke="#5CAD1D"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-if="quiz.status === 'error'"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.06873 12.9319L9.0007 8.99997M9.0007 8.99997L12.9326 5.06799M9.0007 8.99997L5.06873 5.06799M9.0007 8.99997L12.9326 12.9319"
          stroke="#AB3030"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <img
      :src="quiz.imgUrl"
      alt="Illustration"
      class="mx-auto mb-6 max-w-[142px] max-h-[142px]"
    />
    <span>{{ quiz.title }}</span>
  </div>
</template>

<script>
export default {
  name: "QuizCard",
  props: {
    quiz: {
      type: Object,
      required: true,
    },
  },
};
</script>
