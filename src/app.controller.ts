import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        console.log('hello word,this is nestjs');
        console.log();
        console.log('world');
        return this.appService.getHello();
    }
}
