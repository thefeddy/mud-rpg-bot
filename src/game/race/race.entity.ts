import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Race {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name: string

    @Column({ default: 1 })
    str: number

    @Column({ default: 1 })
    dex: number

    @Column({ default: 1 })
    int: number

    @Column({ default: 1 })
    hp: number

    @Column({ default: 1 })
    mp: number

    @Column({ default: 1 })
    ap: number

    @Column({ default: 1 })
    vit: number

    @Column({ default: 1 })
    luck: number

    @Column({ default: 1 })
    def: number

    @Column({ default: 1 })
    crit: number

    @Column({ nullable: true })
    description: string
}