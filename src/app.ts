import { findHeroById } from "./data/services/hero.service";

const hero = findHeroById(1);

console.log(hero?.name ?? 'Not hero found');