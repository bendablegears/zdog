/**
 * Rect
 */

( function( root, factory ) {
  // module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory( require('./shape') );
  } else {
    // browser global
    var Zdog = root.Zdog;
    Zdog.DebugShape = factory( Zdog.Shape );
  }
}( this, function factory( Shape ) {

var DebugShape = Shape.subclass({
  stroke: 3,
  color: '#FF60FF70',
});

DebugShape.prototype.updateSortValue = function() {
  // draw on top of everything else.
  this.sortValue = Infinity;
};

return DebugShape;

}));
