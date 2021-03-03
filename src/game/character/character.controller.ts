import {
    Controller, Get, Render,
    HttpStatus,
    Res,
    Post,
    Body,
    Param,
    Req,
    ParseIntPipe,
    Patch,
    Delete,
} from '@nestjs/common';
import express, { Request, Response } from 'express';
import { CharacterService } from './character.service';
import { Character } from './character.entity';
import { GetCharacterDTO, CreateCharacterDTO } from './character.dto'

import {
    ApiTags,
    ApiProperty,
    ApiOkResponse,
    ApiResponse,
    ApiBadRequestResponse,
    ApiUnauthorizedResponse,
    ApiNotFoundResponse,
} from '@nestjs/swagger';

import { response } from 'express';

@ApiTags('Character')
@Controller('')
export class CharacterController {
    constructor(private characterService: CharacterService) { }

    @Patch('/')
    @Render('/index')

    @Post('/create')
    async create(
        @Req() req: Request,
        @Res() res: Response,
        @Body() characterPayload: CreateCharacterDTO,
    ): Promise<any> {
        const character = await this.characterService.createCharacter(characterPayload);
        return character;
    }

    @Patch('/:id')
    async update(): Promise<any> {

    }

    @Delete('/:id')
    async delete(): Promise<any> {

    }

    @Get('/:id')
    // @Render('character/')
    @ApiResponse({ status: 200, description: 'Found User', type: GetCharacterDTO })
    @ApiResponse({ status: 404, description: 'Character Not Found' })
    async get(
        @Param('id') id: number,
        @Res() res: Response,
    ): Promise<any> {
        const character: Character = await this.characterService.findById(id);
        if (!character) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'This Character was not found',
            });
        }
        return res.status(HttpStatus.OK).json({
            ...character.toResponseObject(),
        });
    }



}