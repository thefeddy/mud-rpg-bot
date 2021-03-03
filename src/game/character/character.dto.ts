import { ApiProperty } from '@nestjs/swagger';

import { ClassDTO } from '../class/class.dto';

export class CharacterDTO {
    @ApiProperty({
        description: 'Character ID',
        minimum: 1,
        type: Number,
    })
    readonly id: number;

    @ApiProperty({
        description: `Character's Name`,
        minimum: 1,
        type: String,
    })
    readonly name: string;

    @ApiProperty({
        description: `Character's Name`,
        minimum: 1,
        type: String,
    })
    readonly description: string;

    @ApiProperty({
        type: ClassDTO
    })
    readonly class: ClassDTO
}

export class CreateCharacterDTO {
    @ApiProperty({
        description: `Character's Name`,
        minimum: 1,
        type: String,
    })
    readonly name: string;

    @ApiProperty({
        description: 'Discord ID',
        minimum: 1,
        type: String,
    })
    readonly discordid: string;
}

export class GetCharacterDTO {
    @ApiProperty({
        description: 'Discord ID',
        minimum: 1,
        type: String,
    })
    readonly discordid: string;
}

