//arreglo de objetos frases
const frases = [
    { frase: 'El que madruga encuentra todo cerrado', autor: 'La vida' },
    { frase: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes', autor: 'John Lennon' },
    { frase: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día', autor: 'Robert Collier' },
    { frase: 'No cuentes los días, haz que los días cuenten', autor: 'Muhammad Ali' },
    { frase: 'La mejor manera de predecir el futuro es inventarlo', autor: 'Alan Kay' },
    { frase: 'La vida es 10% lo que te sucede y 90% cómo reaccionas a ello', autor: 'Charles R. Swindoll' },
    { frase: 'El único modo de hacer un gran trabajo es amar lo que haces', autor: 'Steve Jobs' }
]

const app = Vue.createApp({
    methods: {
        cambiarMensaje() {
            
        }
    },
    data() {
        return {
            listafrases: frases
        }
    }
})

app.mount('#myApp')