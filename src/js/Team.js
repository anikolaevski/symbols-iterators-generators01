/* eslint-disable no-plusplus */
// eslint-disable-next-line import/prefer-default-export
export class Team {
  constructor() {
    this.members = [];
    this.last = 0;
  }

  add(obj) {
    this.members.push(obj);
    this.last++;
  }

  [Symbol.iterator]() {
    const { members, last } = this;
    let current = 0;
    return {
      next() {
        if (current < last) {
          return {
            done: false,
            value: members[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
