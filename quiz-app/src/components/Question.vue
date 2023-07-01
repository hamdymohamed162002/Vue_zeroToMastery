
<template>
 <div class="questions-ctr">
        <div class="progress">
            <div class="bar" :style="{ width: `${(questionAnswerd/questions.length)*100}% `}"></div>
            <div class="status">{{questionAnswerd}} out of {{ questions.length }} questions answered</div>
        </div>
       <TransitionGroup name="fade" mode="in-out" appear>
        <div class="single-question"
         v-for="(question,qi) in questions "
         v-show="questionAnswerd === qi"
          :key="question.q">
            <div class="question">{{ question.q }}</div>
            <div class="answers" v-for="answer in question.answers" @click.prevnt="selectAnswer(answer.is_correct)" :key="answer.text">
                <div class="answer">{{ answer.text }}</div>
               
            </div>
        </div>
       </TransitionGroup>
    </div>
</template>

<script >
export default{
  name:'Question',
  props:['questions','questionAnswerd'],
  emit:['answer-Question'],
  methods:{
    selectAnswer(isCorrect){
      this.$emit('answer-Question',isCorrect)
    }
  }
}
</script>
