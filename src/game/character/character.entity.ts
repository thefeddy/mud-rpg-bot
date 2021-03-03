import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Unique, Index } from 'typeorm';

import { Class } from '../class/class.entity';

import { CharacterRO } from './character.ro';

@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: true,
        length: 50,
        comment: `Charater's name`
    })
    name: string;

    @Column({
        nullable: true,
    })
    description: string;

    @Column({
        name: 'currency',
        type: 'int8',
        nullable: true,
        comment: `Charater's Money`
    })
    currency: number;

    @OneToOne(id => Class)
    @JoinColumn()
    class: Class;

    @Column({
        name: 'discordid',
        type: 'int8',
        nullable: false,
        comment: `Discord's Author id`
    })
    @Index({ unique: true })
    discordid: string;


    toResponseObject(): CharacterRO {
        const {
            id,
            name,
            currency,
            description,
            class: Class
        } = this;

        const responseObject: CharacterRO = {
            id,
            name,
            description,
            currency,
            class: Class
        };

        return responseObject;

    }

}