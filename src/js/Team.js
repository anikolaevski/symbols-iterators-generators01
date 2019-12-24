export default class Team {
  constructor(obj) {
    this.seq = Team.newCounter();
    this.name = obj.name;
    this.type = obj.type;
    this.health = obj.health;
    this.level = obj.level;
    this.attack = obj.attack;
    this.defence = obj.defence;
  }

  // eslint-disable-next-line func-names
  [Symbol.iterator]() {
    let current = this.seq;
    const last = Team.maxCounter();
    // метод должен вернуть объект с методом next()
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++,
          };
        }
        return {
          done: true,
        };
      },
    };
  }


  static newCounter() {
    // проверяем не задана ли уже эта переменная значением
    if (typeof (Team.newCounter.counter) === 'undefined') {
    // если нет ставим в ноль
      Team.newCounter.counter = 0;
    }

    // обычный инкремент как пример операции над переменной
    return ++Team.newCounter.counter;
  }

  static maxCounter() {
    return Team.newCounter.counter;
  }
  // static current;
}
