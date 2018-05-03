var Top250Page = require('./top250')
var UsBoxPage = require('./usbox')
var SearchPage = require('./search')

var App = {
  init: function(){
    this.bind()
    Top250Page.init()
    UsBoxPage.init()
    SearchPage.init()
  },
  bind: function(){
    $('footer>div').click(function(){
      $(this).addClass('active')
      .siblings()
      .removeClass('active')
      $currentPage = $('main>section')
      .hide().eq($(this).index())
      .fadeIn()
    })
    window.ontouchmove = function(e){
      e.preventDefault()
    }
    $('section').each(function(){
      this.ontouchmove = function(e){
        e.stopPropagation()
      }
    })
  }
}
App.init()
