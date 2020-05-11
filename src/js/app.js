function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

function getDamage(points) {
  const damagePoints = points * (1 - this.defence / 100);
  if (this.health > damagePoints) {
    this.health -= damagePoints;
  } else {
    this.health = 0;
  }
}

Character.prototype.damage = getDamage;

export default Character;
