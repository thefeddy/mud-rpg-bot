import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClassController } from './class.controller';

import { Class } from './class.entity';
import { ClassService } from './class.service';

@Module({
    imports: [TypeOrmModule.forFeature([Class])],
    providers: [ClassService],
    controllers: [ClassController],
})

export class ClassModule { }