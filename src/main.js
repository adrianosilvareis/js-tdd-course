

class Animal {
  constructor(kind, sound) {
    this.kind = kind;
    this.sound = sound;
  }

  hello() {
    return `${this.sound} I'm a ${this.kind}`;
  }

  static info() {
    return 'This is a class to create animal!';
  }
}

const dog = new Animal('Dog', 'AuAu');

dog.hello();
