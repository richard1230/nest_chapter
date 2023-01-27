import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { database } from './config/database.config';
import { ContentModule } from './modules/content/content.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
    imports: [DatabaseModule.forRoot(database), ContentModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
