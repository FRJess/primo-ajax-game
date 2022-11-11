const {createApp} = Vue; 

createApp({

  data(){
    return{
      title: 'Ajax Game',
      giocatoreA: 0,
      giocatoreB: 0,
      isLoaded: false,
    }
  },

  methods:{
    getApi(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then( risultato => {
        this.giocatoreA = risultato.data.response
      })
      .catch( errore => {
        this.title = errore.code
      })
      
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then( risultato => {
        this.giocatoreB = risultato.data.response
        this.isLoaded = true;
      })
      .catch( errore => {
        this.title = errore.code
      })
    },

    getResult(){
      let result;
      if(this.giocatoreA > this.giocatoreB){
        result = 'Vince A';
      }else if(this.giocatoreA < this.giocatoreB){
        result = 'Vince B';
      }else{
        result = 'PARI';
      }
      return result;
    }

  },

  mounted(){
    this.getApi();

  }
}).mount('#app')