import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InventoryController } from './inventory.controller';

import { Inventory } from './inventory.entity';
import { InventoryService } from './inventory.service';

@Module({
    imports: [TypeOrmModule.forFeature([Inventory])],
    providers: [InventoryService],
    controllers: [InventoryController],
})

export class InventoryModule { }