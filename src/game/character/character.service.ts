import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

import { Character } from './character.entity';
import { GetCharacterDTO, CreateCharacterDTO } from './character.dto';

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(Character) private characterRepository: Repository<Character>,

    ) { }

    findAll(): Promise<Character[]> {
        return this.characterRepository.find();
    }

    async findById(discordid: number): Promise<Character> {
        return this.characterRepository.findOne({ where: { discordid }, relations: ["class"] });
    }

    async createCharacter(character: CreateCharacterDTO): Promise<Character> {
        const { discordid } = character;
        const user = await this.characterRepository.findOne({ where: { discordid } });

        if (user) {
            throw new HttpException('Character already exists', HttpStatus.FOUND);
        }

        return await this.characterRepository.save(character)

    }

    async remove(id: number): Promise<void> {
        await this.characterRepository.delete(id);
    }


}