const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spider Man',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Super man',
        owner: 'DC'
    }
]

const findHeroById = (id: number) => {
    return heroes.find(hero => hero.id === id);
}

const hero = findHeroById(2);
console.log(hero?.name ?? 'Not hero found');