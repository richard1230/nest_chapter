import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../database/database.module';

import { PostController } from './controllers';
import { PostEntity } from './entities';
import { PostRepository } from './repositories/post.repository';
import { PostService, SanitizeService } from './services';
import { PostSubscriber } from './subscribers/post.subscriber';

@Module({
    imports: [
        TypeOrmModule.forFeature([PostEntity]),
        DatabaseModule.forRepository([PostRepository]),
    ],
    controllers: [PostController],
    providers: [PostService, PostSubscriber, SanitizeService],
    exports: [PostService, DatabaseModule.forRepository([PostRepository])],
})
export class ContentModule {}
