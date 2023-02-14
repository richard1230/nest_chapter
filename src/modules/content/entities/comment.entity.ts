import { Exclude, Expose, Type } from 'class-transformer';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    TreeChildren,
    TreeParent,
} from 'typeorm';

import { PostEntity } from './post.entity';

@Exclude()
@Entity('content_comments')
export class CommentEntity extends BaseEntity {
    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Expose()
    @Column({ comment: '评论内容', type: 'longtext' })
    body!: string;

    @Expose()
    @Type(() => Date)
    @CreateDateColumn({
        comment: '创建时间',
    })
    createdAt!: Date;

    @Expose()
    depth = 0;

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

    @Expose()
    @TreeChildren({ cascade: true })
    children!: CommentEntity[];
}
