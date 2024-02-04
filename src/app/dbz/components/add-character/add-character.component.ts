import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/chracter.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0,
  };

  // emisor de evento
  // decorramos con el @Output
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  //nuevo método
  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;

    //enviar evento de tipo character
    this.onNewCharacter.emit(this.character);

    // this.character.name = '';
    // this.character.power = 0;
    this.character = { name: '', power: 0 };
  }
}
