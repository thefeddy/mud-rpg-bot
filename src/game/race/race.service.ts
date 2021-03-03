import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

import { Race } from './race.entity';
import { RaceDTO } from './race.dto';

@Injectable()
export class RaceService {
    constructor(
        @InjectRepository(Race) private raceRepository: Repository<Race>,

    ) { }

    findAll(): Promise<Race[]> {
        return this.raceRepository.find();
    }

    findOne(id: string): Promise<Race> {
        return this.raceRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.raceRepository.delete(id);
    }

}