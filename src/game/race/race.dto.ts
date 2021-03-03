import { ApiProperty } from '@nestjs/swagger';

export class RaceDTO {
    @ApiProperty({
        type: Number
    })
    id: number;

    @ApiProperty({
        type: String
    })
    name: string;

    @ApiProperty({
        type: Number
    })
    str: number

    @ApiProperty({
        type: Number
    })
    dex: number

    @ApiProperty({
        type: Number
    })
    int: number

    @ApiProperty({
        type: Number
    })
    hp: number

    @ApiProperty({
        type: Number
    })
    mp: number

    @ApiProperty({
        type: Number
    })
    ap: number

    @ApiProperty({
        type: Number
    })
    vit: number

    @ApiProperty({
        type: Number
    })
    luck: number

    @ApiProperty({
        type: Number
    })
    def: number

    @ApiProperty({
        type: Number
    })
    crit: number

    @ApiProperty({
        type: String
    })
    description: string
}
