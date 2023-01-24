import { Module } from '@nestjs/common';

import { database } from './config/database.config';
import { DatabaseModule } from './modules/database/database.module';

@Module({
    imports: [DatabaseModule.forRoot(database)],
})
export class AppModule {}
