const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damegeDragon = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength + 1;
  return Math.trunc(Math.random() * ( maxDamage - minDamage )) + minDamage;
} 

const damegeWrrior = () => {
  const minDamage = warrior.strength;
  const maxDamage =  minDamage * warrior.weaponDmg + 1;
  return Math.trunc(Math.random() * ( maxDamage - minDamage )) + minDamage;
}

const damegeMage = () => {
  const minDamage = mage.intelligence
  const maxDamage =  minDamage * 2 + 1;
  if (mage.mana < 15) {
    return 'Não possui mana suficiente'
  } else {
    return {
      damage: Math.trunc(Math.random() * ( maxDamage - minDamage )) + minDamage,
      mana: 15,
    }
  }
}

const gameActions = {
  // Crie as HOFs neste objeto.

  turnWarrior: (damegeWrrior) => {
    let newHealPoints = dragon.healthPoints - damegeWrrior();
    let newDamege = damegeWrrior();
    dragon.healthPoints = newHealPoints;
    warrior.damage = newDamege;
  },

  turnMage: (damageMage) => {
    let newHealPoints = dragon.healthPoints - damageMage().damage;
    let newDamege = damageMage().damage;
    let newMana = mage.mana - damegeMage().mana;

    if (mage.mana < 15) {
      return damegeMage();
    } else {
      dragon.healthPoints = newHealPoints;
      mage.damage = newDamege;
      mage.mana = newMana;
    }
  },

  turnDragon: (damageDragon) => {
    let newHealPointsMage = mage.healthPoints - damageDragon();
    let newHealPointsWarrior = warrior.healthPoints - damageDragon();
    let newDamege = damageDragon();
    mage.healthPoints = newHealPointsMage;
    warrior.healthPoints = newHealPointsWarrior;
    dragon.damage = newDamege;
  },

  turn: () => battleMembers,

};

gameActions.turnWarrior(damegeWrrior);
gameActions.turnMage(damegeMage);
gameActions.turnDragon(damegeDragon);

console.log(gameActions.turn())