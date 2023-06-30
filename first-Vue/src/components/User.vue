<template>
    <div>
<button @click="addAge">add</button>

<p>your age is {{ age }}</p>
    </div>
</template>

<script >
export default{
    name: 'User',
    props:['age'],
    methods:{
        addAge(){
            this.$emit('addAge',2);
        }
    }
}

</script>

