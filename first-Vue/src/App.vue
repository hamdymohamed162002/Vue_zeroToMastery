

<template>
<Greeting></Greeting>
<User :age="age" @addAge="addAgee"></User>
</template>

<script >
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';
export default {
  name: 'App',
  data(){
return{
    age:20
  }},
  components: {
    Greeting,
    User 
  },
  methods:{
    addAgee(age){
      this.age+=age;
    }
  }
}
</script>
