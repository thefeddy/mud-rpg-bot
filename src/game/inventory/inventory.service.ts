import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

import { Inventory } from './inventory.entity';
import { InventoryDTO } from './inventory.dto';

@Injectable()
export class InventoryService {
    constructor(
        @InjectRepository(Inventory) private inventoryRepository: Repository<Inventory>,

    ) { }

    findAll(): Promise<Inventory[]> {
        return this.inventoryRepository.find();
    }

    findOne(id: string): Promise<Inventory> {
        return this.inventoryRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.inventoryRepository.delete(id);
    }

}