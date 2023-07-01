

<template>
  <div class="ctr">
    <Transition name="fade" mode="out-in" >
      <Question v-if="questionAnswerd < questions.length" :questions="questions" :questionAnswerd="questionAnswerd"
      @answer-Question="answerQuestion" />
    <Answers v-else :results="results" :correct="correct"/>
    </Transition>

    <button @click.prevnt="resetButton" type="button" class="reset-btn">Reset</button>
  </div>
</template>

<script >
import Question from './components/Question.vue'
import Answers from './components/Answers.vue';
export default {
  name: 'App',
  components: {
    Question, Answers
  },
  data() {
    return {
      correct: 0,
      questionAnswerd: 0,
      questions: [
        {
          q: 'What is 2 + 2?',
          answers: [
            {
              text: '4',
              is_correct: true
            },
            {
              text: '3',
              is_correct: false
            },
            {
              text: 'Fish',
              is_correct: false
            },
            {
              text: '5',
              is_correct: false
            }
          ]
        },
        {
          q: 'How many letters are in the word "Banana"?',
          answers: [
            {
              text: '5',
              is_correct: false
            },
            {
              text: '7',
              is_correct: false
            },
            {
              text: '6',
              is_correct: true
            },
            {
              text: '12',
              is_correct: false
            }
          ]
        },
        {
          q: 'Find the missing letter: C_ke',
          answers: [
            {
              text: 'e',
              is_correct: false
            },
            {
              text: 'a',
              is_correct: true
            },
            {
              text: 'i',
              is_correct: false
            }
          ]
        },
      ],
      results: [
        {
          min: 0,
          max: 2,
          title: "Try again!",
          desc: "Do a little more studying and you may succeed!"
        },
        {
          min: 3,
          max: 3,
          title: "Wow, you're a genius!",
          desc: "Studying has definitely paid off for you!"
        }
      ]
    }
  },
  methods: {
    answerQuestion(is_correct) {
      if (is_correct) {
        this.correct++
      }
      this.questionAnswerd++
    },
    resetButton(){
      this.correct = 0;
      this.questionAnswerd = 0;
    }
  }
}

</script>