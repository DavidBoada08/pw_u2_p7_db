const app = Vue.createApp({
    data() {
        return {
            persona: {
                nombre: '',
                apellido: '',
                hobbie: '',
                fechaNacimiento: ''
            },
            listaPersonas: []
        }
    },
    methods: {
        agregarPersona() {
            const nuevaPersona = { ...this.persona };
            this.listaPersonas.unshift(nuevaPersona);
            this.persona.nombre = '';
            this.persona.apellido = '';
            this.persona.hobbie = '';
            this.persona.fechaNacimiento = '';
        }
    }
});
 
app.mount('#myApp');
 