"use strict";

const { createApp } = Vue

  createApp({
    data() {
      return {
        mails:[],
      }
    },
    mounted() {
        this.createRandomMail();
    },
    methods: {
        createRandomMail(){
            for(let i = 0; i < 10;i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((newMail) => {
                    this.mails.push(newMail.data.response);
                })
            }
        }
    },
}).mount('#app')
