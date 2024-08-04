const app = Vue.createApp({

    data() {
        return {
            title: 'Template abbility'
        }
    },
    template: `
        <div class="card center">
            <h1>{{title}}</h1>
            <button class="btn" @click="title='Title lost'" >Change</button>
        </div>
    `
})

app.mount('#app')