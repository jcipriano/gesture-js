gesture-js
==========

A jQuery plugin implementing [$1 Unistroke Recognizer](http://depts.washington.edu/aimgroup/proj/dollar) for mouse gesture detection.

#### About

Gesture.js listens for mousedown, mousemove, and mouseup events of a selected element. Coordinates are recored when the mouse is moved and processed with *$1 Unistroke Recognizer*.

#### Using

	$('my-div').gesture(onGesture);

    function onGesture(result) {
      console.log(result.Name, result.Score);
    }
    
