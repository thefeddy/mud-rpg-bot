import { Controller, Get, Render } from '@nestjs/common';

@Controller('')
export class RaceController {
    constructor() { }

    @Get('/')
    @Render('race/index')
    index() {
        console.log('home testing')
    }
}