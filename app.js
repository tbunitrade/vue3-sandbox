const App= {
    data(){
        return {
            title: 'List of notes',
            placeholderString:'Enter name of notes',
            inputValue:'',
            notes: ['заметка 1','more data','noyte2 565']
        }
    },
    methods: {
        // we add vue model to use this method
        // inputChangeHandler(){
        //     //console.log('inputChangeHandler', event.target.value);
        //     this.inputValue = event.target.value;
        // },
        addNewNote() {
            if(this.inputValue !=='') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
            }
        },
        toUpperCase(item) {
           return item.toUpperCase();
        },
        deleteCurrentNote(idx){
            console.log('deleteCurrentNote', idx);
            this.notes.splice(idx,1);
        }
    },
    //Geter
    computed : {
        doubleCountComputed() {
            console.log('doubleCountComputed');
            return this.notes.length*2;
        }
    },
    watch : {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = '';
                console.log('it is');
            }

        }
    }
}
//Vue.createApp(App)

const app = Vue.createApp(App)
app.mount('#app')
