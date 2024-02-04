import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/chracter.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  // puede recibir una property characterList del componente padre.
  public characterList: Character[] = [
    // Este es el valor por defecto
    {
      name: 'Trunk',
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log({ id });
    this.onDelete.emit(id);
  }
}
