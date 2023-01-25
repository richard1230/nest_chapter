import { DataSource } from 'typeorm';

import { PostBodyType } from '../constants';

import { PostEntity } from '../entities';
import { PostRepository } from '../repositories/post.repository';
import { SanitizeService } from '../services';

export class PostSubscriber {
    constructor(
        protected dataSource: DataSource,
        protected sanitizeService: SanitizeService,
        protected postRepository: PostRepository,
    ) {}

    listenTo() {
        return PostEntity;
    }

    async afterLoad(entity: PostEntity) {
        if (entity.type === PostBodyType.HTML) {
            entity.body = this.sanitizeService.sanitize(entity.body);
        }
    }
}
