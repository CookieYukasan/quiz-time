<template>
  <main
    v-if="!isFinishedQuiz"
    class="h-screen flex items-center justify-center"
  >
    <div
      class="bg-grey-600 text-grey-100 min-w-[70%] min-h-4/6 py-16 px-28 rounded-lg"
    >
      <div class="flex flex-col space-y-16">
        <header class="flex flex-row justify-between items-center">
          <h1 class="text-2xl"><strong>Quiz</strong>Time</h1>
          <Score :value="currentScore" />
        </header>
        <main>
          <h1 class="text-2xl font-bold leading-7 mx-auto text-center w-1/3">
            {{ currentQuiz.title }}
          </h1>
          <div class="mt-16 grid grid-cols-3 gap-11">
            <QuizCard
              v-for="quiz in currentQuiz.options"
              :key="quiz.id"
              :quiz="quiz"
              @click="makeAnswer(quiz.id)"
            />
          </div>
        </main>
        <footer class="flex items-center justify-between">
          <div>
            <span class="text-xl font-bold leading-[22px]">
              {{ currentQuizIndex + 1 }}
            </span>
            <span class="font-bold text-xs leading-3 tracking-widest">
              / {{ quizzes.length }}</span
            >
          </div>
          <button
            @click="nextQuiz"
            class="rounded-full bg-grey-300 flex items-center justify-center w-[44px] h-[44px]"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 6L17.5 12L11.5 18"
                stroke="#565E6D"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </footer>
      </div>
    </div>
  </main>
  <main class="h-screen flex items-center justify-center">
    <div class="flex flex-col space-y-16">
      <header class="flex flex-row justify-between items-center">
        <h1 class="text-2xl"><strong>Quiz</strong>Time</h1>
        <Score :value="currentScore" />
      </header>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    useHead({
      title: "QuizTime",
      bodyAttrs: {
        class: "bg-home-gradient",
      },
    });
  },
  data() {
    return {
      isFinishedQuiz: false,
      currentScore: 0,
      currentQuizIndex: 0,
      quizzes: [
        {
          id: 1,
          title: "Qual era o objetivo da personagem?",
          correctAnswerId: 2,
          options: [
            {
              id: 1,
              title: "Caçar tesouros",
              imgUrl: "/images/adventure.png",
              status: "default",
            },
            {
              id: 2,
              title: "Ter mais tempo para ler livros",
              imgUrl: "/images/success.png",
              status: "default",
            },
            {
              id: 3,
              title: "Navegar pelos 7 mares",
              imgUrl: "/images/imagination.png",
              status: "default",
            },
          ],
          hasAnswered: false,
        },
        {
          id: 2,
          title: "Qual era a paixão do personagem?",
          correctAnswerId: 1,
          options: [
            {
              id: 1,
              title: "Tocar música",
              imgUrl: "/images/adventure.png",
            },
            {
              id: 2,
              title: "Explorar o espaço",
              imgUrl: "/images/success.png",
              status: "default",
            },
            {
              id: 3,
              title: "Ser um chef renomado",
              imgUrl: "/images/imagination.png",
              status: "default",
            },
          ],
          hasAnswered: false,
        },
        {
          id: 3,
          title: "Qual era a missão da personagem?",
          correctAnswerId: 3,
          options: [
            {
              id: 1,
              title: "Proteger a natureza",
              imgUrl: "/images/adventure.png",
              status: "default",
            },
            {
              id: 2,
              title: "Desvendar segredos antigos",
              imgUrl: "/images/success.png",
              status: "default",
            },
            {
              id: 3,
              title: "Salvar vidas como médico",
              imgUrl: "/images/imagination.png",
              status: "default",
            },
          ],
          hasAnswered: false,
        },
        {
          id: 4,
          title: "Qual era o sonho do personagem?",
          correctAnswerId: 2,
          options: [
            {
              id: 1,
              title: "Construir uma cidade sustentável",
              imgUrl: "/images/adventure.png",
              status: "default",
            },
            {
              id: 2,
              title: "Pintar obras de arte famosas",
              imgUrl: "/images/success.png",
              status: "default",
            },
            {
              id: 3,
              title: "Ser um atleta olímpico",
              imgUrl: "/images/imagination.png",
              status: "default",
            },
          ],
          hasAnswered: false,
        },
      ],
    };
  },
  methods: {
    makeAnswer(selectedId) {
      if (this.currentQuiz.hasAnswered) return;

      const { correctAnswerId, options } = this.currentQuiz;
      const isCorrect = correctAnswerId === selectedId;
      this.currentScore += isCorrect ? 1 : 0;

      const newOptions = options.map((option) => {
        if (!isCorrect && selectedId === option.id) {
          option.status = "error";
        }

        if (correctAnswerId === option.id) option.status = "success";
        return option;
      });

      this.quizzes[this.currentQuizIndex] = {
        ...this.currentQuiz,
        options: newOptions,
        hasAnswered: true,
      };
    },
    nextQuiz() {
      if (this.currentQuizIndex === this.quizzes.length - 1) return;
      if (!this.currentQuiz.hasAnswered) return;

      this.currentQuizIndex++;
    },
  },
  computed: {
    currentQuiz() {
      return this.quizzes[this.currentQuizIndex];
    },
  },
};
</script>
