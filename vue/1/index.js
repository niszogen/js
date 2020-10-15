var zaladowane = new Date().toLocaleString()

var app = new Vue({
    el: '#app',
    data: {
      SansGranie: 'Siema Vue!'
    }
  })

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'WIEM KIEDY ZAŁADOWAŁEŚ TĘ STRONĘ ' + zaladowane + ' NIE MASZ PRZEDE MNĄ ŻADNYCH TAJEMNIC!!!'
    }
  })

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'nic' },
        { text: 'nic' },
        { text: 'tak zgadłeś trzecie to nic' }
      ]
    }
  })

  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Jebać disa'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Napisz tu coś!'
    }
  })
