Vue.createApp({
data(){
    return{
        firstName: "hamdy",
        lastName: "mohamed",
        url:'https://www.google.com/',
        age:20
    }
}
,
methods:{
    increment(){
        this.age++
    }
    ,decrement(){
        this.age--
    },
    printHello(){
        console.log("aaa")
    }
}})
.mount('#app')