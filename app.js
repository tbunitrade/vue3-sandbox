Vue.createApp({

    data: () => ({
        myHtml: '<h3>Vue3app</h3>',
        //first  model
        title: 'I am title',
        items: [1, 2]
    }),
    computed: {
        eventItems(){
            return this.items.filter(i=> i % 2 !== 0)
        }
    },
    methods: {
        addItem(event) {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
            console.log(event)
            //console.log(this.$refs.myInput.value)
        },
        remove(i) {
            this.items.splice(i,1)
        },
        log(item) {
            console.log('Log item', item);
        }
    //     stopPropagation(event) {
    //         event.stopPropagation()
    //     }
    }
}).mount('#app');