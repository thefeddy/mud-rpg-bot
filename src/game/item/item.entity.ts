import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name: string

    @Column()
    description: string;

    @Column()
    type: string

    @Column()
    attack: number

    @Column()
    magic: number

    @Column()
    speed: number

    @Column()
    element: number

    @Column()
    str: number

    @Column()
    dex: number

    @Column()
    int: number

    @Column()
    vit: number

    @Column()
    luck: number

    @Column()
    def: number

    @Column()
    crit: number
}