new WOW().init()

$(document).on('click', 'a[href^="#"]', function(e) {
  e.preventDefault()
  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    1000,
    'linear',
  )
})

var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  loop: true,
  backDelay: 8000,
})

$('.carousel-items').slick({
  dots: false,
  nextArrow: '<div class="nav-btn next-slide"></div>',
  prevArrow: '<div class="nav-btn prev-slide"></div>',
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
})

var testimoniosWaypoint = new Waypoint({
  element: document.getElementById('cifras'),
  handler: function(direction) {
    if (!counterCuentas.error) {
      counterCuentas.start()
    } else {
      console.error(counterCuentas.error)
    }
    if (!counterCarteras.error) {
      counterCarteras.start()
    } else {
      console.error(counterCarteras.error)
    }
    if (!counterOficinas.error) {
      counterOficinas.start()
    } else {
      console.error(counterOficinas.error)
    }
    if (!counterVisitas.error) {
      counterVisitas.start()
    } else {
      console.error(counterVisitas.error)
    }
    if (!counterGestores.error) {
      counterGestores.start()
    } else {
      console.error(counterGestores.error)
    }
  },
  offset: '50%',
})

// animacion de contadores con libreria countUp.js
var counterCuentas = new CountUp('count-cuentas', 0, 25000, 0, 4, {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  suffix: '',
})

var counterCarteras = new CountUp('count-carteras', 0, 4, 0, 6, {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
})

var counterOficinas = new CountUp('count-oficinas', 0, 2, 0, 8, {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
})

var counterVisitas = new CountUp('count-visitas', 0, 50000, 0, 2.5, {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
})

var counterGestores = new CountUp('count-gestores', 0, 125, 0, 5, {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
})

var continuousElements = document.getElementsByClassName('check-place')
for (var i = 0; i < continuousElements.length; i++) {
  new Waypoint({
    element: continuousElements[i],
    handler: function() {
      console.log(this.element)
      this.element.classList.add('animated,bounceInRight')
    },
    offset: 'bottom-in-view',
  })
}

$(document).ready(function() {
  /**
   * This object controls the nav bar. Implement the add and remove
   * action over the elements of the nav bar that we want to change.
   *
   * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
   */
  var myNavBar = {
    flagAdd: true,

    elements: [],

    init: function(elements) {
      this.elements = elements
    },

    add: function() {
      if (this.flagAdd) {
        for (var i = 0; i < this.elements.length; i++) {
          document.getElementById(this.elements[i]).className += ' fixed-theme'
        }
        this.flagAdd = false
      }
    },

    remove: function() {
      for (var i = 0; i < this.elements.length; i++) {
        document.getElementById(
          this.elements[i],
        ).className = document
          .getElementById(this.elements[i])
          .className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '')
      }
      this.flagAdd = true
    },
  }

  /**
   * Init the object. Pass the object the array of elements
   * that we want to change when the scroll goes down
   */
  myNavBar.init(['header'])

  /**
   * Function that manage the direction
   * of the scroll
   */
  function offSetManager() {
    var yOffset = 0
    var currYOffSet = window.pageYOffset

    if (yOffset < currYOffSet) {
      myNavBar.add()
    } else if (currYOffSet == yOffset) {
      myNavBar.remove()
    }
  }

  /**
   * bind to the document scroll detection
   */
  window.onscroll = function(e) {
    offSetManager()
  }

  /**
   * We have to do a first detectation of offset because the page
   * could be load with scroll down set.
   */
  offSetManager()
})
