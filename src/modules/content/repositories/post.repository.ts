import { Repository } from 'typeorm';

import { CustomRepository } from '@/modules/database/decorators/repository.decorator';

import { PostEntity } from '../entities/post.entity';

@CustomRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
    buildBaseQB() {
        return this.createQueryBuilder('post');
    }
}
