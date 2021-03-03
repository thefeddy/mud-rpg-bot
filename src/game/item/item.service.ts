import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";

import { Item } from './item.entity';
import { ItemDTO } from './item.dto';

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item) private itemRepository: Repository<Item>,

    ) { }

    findAll(): Promise<Item[]> {
        return this.itemRepository.find();
    }

    findOne(id: string): Promise<Item> {
        return this.itemRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.itemRepository.delete(id);
    }

}