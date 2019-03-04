class Animal {}

interface Cloner {
    clone(animal: Animal): Animal;
}

interface Cloner {
    clone(animal: Animal): Sheep;
}

interface cloner {
    clone(animal:Dog): Dog;
    clone(animal: Cat): Cat;
}
