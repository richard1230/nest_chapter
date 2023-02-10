import { Expose } from 'class-transformer';
import { BaseEntity, ManyToOne, TreeParent } from 'typeorm';

import { PostEntity } from './post.entity';

export class CommentEntity extends BaseEntity {
    @Expose()
    @ManyToOne((type) => PostEntity, (post) => post.comments, {
        // 文章不能为空
        nullable: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    post!: PostEntity;

    @TreeParent({
        onDelete: 'CASCADE',
    })
    parent!: CommentEntity | null;
}
