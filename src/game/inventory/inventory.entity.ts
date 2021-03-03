import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Item } from '../item/item.entity';
import { Character } from '../character/character.entity';

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(id => Item)
    @JoinColumn()
    item: Item;

    @OneToOne(id => Character)
    @JoinColumn()
    character: Character;

}