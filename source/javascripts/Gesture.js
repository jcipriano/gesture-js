/**
 * gesture.js
 *
 *    Jonathan Cipriano
 *    AKQA Creative Research & Development
 *    118 King Street, 6th Floor
 *    San Francisco, CA 94108
 **/
(function($) {
  
  /**
   * Instance of DollarRecognizer
   **/
  var dollarRec = new Dollar.Recognizer();
  
  /**
   * GestureTarget Class
   **/
  var GestureTarget = function(el, callback) {
    
    this.points = [ ];
    this.target = $(el);
    this.callback = callback;
    
    // initializes 
    this.init = function() {
      this.target.bind('mousedown', $.proxy(this.startWatch, this) );
    };
    
    // assigns mouse listeners to element
    this.startWatch = function(e) {
      //console.log('startWatch');
      this.points = [ ];
      $(this.target).bind('mousemove', $.proxy(this.recordPoint, this) );
      $(this.target).bind('mouseup', $.proxy(this.stopWatch, this) );
    };
    
    // records a point to the points array
    this.recordPoint = function(e) {
      this.points.push( new Dollar.Point(e.pageX, e.pageY) );
      //console.log('recordPoint', e.pageX, e.pageY);
    };
    
    // removes mouse listeners and sends gesture data to callback
    this.stopWatch = function(e) {
      $(this.target).unbind('mouseup', $.proxy(this.stopWatch, this) );
      $(this.target).unbind('mousemove', $.proxy(this.recordPoint, this) );
      
      this.callback( dollarRec.Recognize(this.points, false) );
    };
    
    this.init();
  };
  
  /**
   * jQuery Plugin
   * Creates a GestureTarget for the provided query
   **/
  $.fn.gesture = function(callback) {
    
    var elements = [ ];
    
    return this.each(function() {
      elements.push( new GestureTarget(this, callback) );
    });
    
  };

})(jQuery);