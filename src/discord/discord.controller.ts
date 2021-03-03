import { Controller, Get, Render } from '@nestjs/common';
import { DiscordService } from './discord.service';

@Controller('')
export class DiscordController {
    constructor(private readonly discordService: DiscordService) { }

    @Get('/')
    @Render('discord/index')
    index() {
        console.log('home testing')
    }
}
