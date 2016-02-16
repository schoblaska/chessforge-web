import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement: function() {
    this.board = ChessBoard(this.$().attr("id"), {
      pieceTheme: "assets/images/chesspieces/alpha/{piece}.png",
      draggable: true,
      position: "start",
      showNotation: false,
      moveSpeed: 1
    });

    this._attachResizeListener();
  },

  _attachResizeListener: function() {
    $(window).resize(() => {
      this.board.resize();
    });
  }
});
