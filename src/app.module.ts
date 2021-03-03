import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule, Routes } from 'nest-router';

/* Services */
import { DiscordService } from './discord/discord.service';

/* Modules */
import { CharacterModule } from './game/character/character.module';
import { ClassModule } from './game/class/class.module';
import { DiscordModule } from './discord/discord.module';

/* Entities */
import { Character } from './game/character/character.entity';
import { Class } from './game/class/class.entity';
import { Item } from './game/item/item.entity';
import { Inventory } from './game/inventory/inventory.entity';

const routes: Routes = [
    {
        path: '/',
        module: DiscordModule
    },
    {
        path: '/character',
        module: CharacterModule
    }
];


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'postgres',
                host: process.env.TYPEORM_HOST,
                port: Number(process.env.TYPEORM_PORT),
                username: process.env.TYPEORM_USERNAME,
                password: process.env.TYPEORM_PASSWORD,
                database: process.env.TYPEORM_DATABASE,
                entities: [Character, Class, Item, Inventory],
                synchronize: true,
            }),
        }),
        RouterModule.forRoutes(routes),
        DiscordModule,
        CharacterModule,
        ClassModule,
        HttpModule
    ],
    providers: [DiscordService],
})

export class AppModule { }
