import { Controller, Get, Render } from '@nestjs/common';

@Controller('')
export class ItemController {
    constructor() { }

    @Get('/')
    @Render('character/index')
    index() {
        console.log('home testing')
    }
}