const  h = Vue.h
const app = Vue.createApp({


    data() {
        return {
            title: 'Template abbility'
        }
    },

    methods : {
        changeTitle() {
            console.log(this)
            this.title = 'Changed !';
        }
    },
    // template: `
    //     <div class="card center">
    //         <h1>{{title}}</h1>
    //         <button class="btn" @click="title='Title lost'" >Change</button>
    //     </div>
    // `
    render(){
        return h('div', {
            className: 'card center'
        }, [
            h('h1', {} , this.title),
            h('button', {
                class:'btn',
                onClick: this.changeTitle
            }, 'change')
        ])
    }
})

app.mount('#app')

let title = 'MVP version VUE'
let msg = 'Title of this : ' + title
console.log('msg ', msg)
