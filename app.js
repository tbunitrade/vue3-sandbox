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
    },

    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    }
})

app.mount('#app')

setTimeout(
    () => {
        app.unmount()
    }, 3000
)

let title = 'MVP version VUE'
let msg = 'Title of this : ' + title
console.log('msg ', msg)

title = 'Angular 10'

const data = {
    title: 'Vue 3',
    message:'Test'
}

const proxy = new Proxy(data,{
    get(target,p) {
        console.log(target)
        console.log(p)
    },
    set(target, key, value) {
        if(key === 'title') {
            target.message = 'Test data ' + value;
        }

        target[key] = value
        // console.log('t',target)
        // console.log('k',key)
        // console.log('v',value)

    }
})

proxy.title = 'Laravel 10'
console.log(proxy)