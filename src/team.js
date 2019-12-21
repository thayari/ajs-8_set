export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Этот герой уже в команде')
    } else {
      this.members.add(char);
    }
  }

  addAll(...rest) {
    for (let char of rest) {
      this.members.add(char);
    }
  }

  toArray() {
    let [...rest] = this.members;
    return rest;
  }
}