// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

Vue.config.devtools = true;


new Vue({

    el:"#root",

    data:{

        title:"Email-List from Boolean API",

        listEmails:[],

        booleanApiurl:" https://flynn.boolean.careers/exercises/api/random/mail",
        
    },

    methods:{

        functionApi(){

            for (let i = 0; i <10; index++) {

                axios.get(this.booleanApiurl).then((ajaxResponse) => {
                 const serverAnswer = ajaxResponse.data;

                 this.listEmails.push(serverAnswer.response)
            })
                
            }
     
        },

       
    },
})