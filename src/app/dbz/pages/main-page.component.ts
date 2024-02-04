import { Component } from '@angular/core';
import { Character } from '../interfaces/chracter.interfaces';
import { DbzService } from '../services/db.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // no tengo acceso desde el html y no exponer el servicio
  constructor(private DbzService: DbzService) {}
  get characters(): Character[] {
    return [...this.DbzService.characters];
  }
  onDeleteCharacter(id: string): void {
    this.DbzService.deleteCharacterById(id);
  }
  onNewCharacter(character: Character): void {
    this.DbzService.addCharacter(character);
  }
}
