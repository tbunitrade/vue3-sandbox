Vue.createApp({

    data: () => ({
        myHtml: '<h3>Vue3app</h3>',
        //first  model
        title:'I am title',
        items: [1,2,3,4,5,6,7]
    })
}).mount('#app');