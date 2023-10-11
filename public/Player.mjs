class Player {
  constructor({x, y, score, id}) {
    this.x = x,
    this.y = y,
    this.score = score,
    this.id = id
  }

  movePlayer(dir, speed) {
    if(dir === "up") {
      this.y += speed
    }
    else if(dir === "down") {
      this.y -= speed
    }
    else if(dir === "left") {
      this.x -= speed
    }
    else {
      this.x += speed
    }
  }

  collision(item) {
    return this.x === item.x && this.y === item.y
  }

  calculateRank(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === this) {
        return `Rank: ${i+1}/${arr.length}`
      }
    }
  }
}

export default Player;
