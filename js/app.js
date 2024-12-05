console.log(Vue)

const app = Vue.createApp({
    /* template: `
     
     <h1>Hola Mundo</h1>
     <p>Con Vue.JS</p>
     <p>{{1+2}}</p>
     <p>{{[1,2,3,4,5,6,7]}}</p>
     <p>{{ {nombre:'David',apellido:'Boada'} }}</p>
     <p>{{true ? 'Activo':'Inactivo'}}</p>
     //<p>{{1===1}}</p>
     `*/
   //options API
    methods: {
        cambiarMensaje(){
            this.mensaje = 'El mensaje ha sido cambiado';
            this.edad = 50;
        }
      
    },
    data(){
    return {
        mensaje: 'Hola Mundo pWeb',
        edad: 33,
    }
    }

    
})

app.mount('#myApp')
asdasd