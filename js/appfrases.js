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
        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listafrases.unshift(nuevaFrase);

        },
        agregarFraseFinal() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listafrases.push(nuevaFrase);

        },
        eventoKeyPress(event) {
            if (event.key === 'Enter') {
                console.log(event);
                this.agregarFraseFinal();
            }
        },
        eventoKeyPressModificador(event) {
            console.log('Evento');
            console.log(event.key);
            console.log(event.keyCode);
            console.log(event.code);
            console.log(event.target.baseURI);
            this.agregarFraseFinal();
        }
    },
    data() {
        return {
            listafrases: frases,
            frase: null,
            autor: null
        }
    }
})

app.mount('#myApp')