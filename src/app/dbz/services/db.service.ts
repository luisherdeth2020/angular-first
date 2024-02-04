import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/chracter.interfaces';

// Este decorador le dice que es un servicio
@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];
  addCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid(),
    };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   console.log('hoasdjs');
  //   this.characters.splice(index, 1);
  // }
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
  // constructor(private httpClient: HttpClient) { }
}
