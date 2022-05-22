import Player from './Player';

export default class Players {
  player1: Player = new Player('white');

  player2: Player = new Player('black');

  currentPlayer: Player = this.player1;

  changeCurrentPlayer() {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }
}
