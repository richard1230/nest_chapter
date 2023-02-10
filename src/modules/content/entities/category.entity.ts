import { Exclude, Expose, Type } from 'class-transformer';
import {
    BaseEntity,
    Column,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
    Tree,
    TreeChildren,
    TreeParent,
} from 'typeorm';

import { PostEntity } from './post.entity';

@Exclude()
@Tree('materialized-path')
@Entity('content_categories')
export class CategoryEntity extends BaseEntity {
    @Expose()
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Expose()
    @Column({ comment: '分类名称' })
    name!: string;

    @Expose()
    @Column({ comment: '分类排序', default: 0 })
    customOrder!: number;

    @ManyToMany((type) => PostEntity, (post) => post.categories)
    posts!: PostEntity[];

    @Expose()
    depth = 0;

    @Expose({ groups: ['category-detail', 'category-list'] })
    @Type(() => CategoryEntity)
    @TreeParent({ onDelete: 'NO ACTION' })
    parent!: CategoryEntity | null;

    @Expose({ groups: ['category-tree'] })
    @Type(() => CategoryEntity)
    @TreeChildren({ cascade: true })
    children!: CategoryEntity[];

    
}
