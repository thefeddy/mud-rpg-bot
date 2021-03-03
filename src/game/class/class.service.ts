import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

import { Class } from './class.entity';
import { ClassDTO } from './class.dto';

@Injectable()
export class ClassService {
    constructor(
        @InjectRepository(Class) private classRepository: Repository<Class>,

    ) { }

    findAll(): Promise<Class[]> {
        return this.classRepository.find();
    }

    findOne(id: string): Promise<Class> {
        return this.classRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.classRepository.delete(id);
    }

}