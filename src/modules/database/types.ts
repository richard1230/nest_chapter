import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';

export interface PaginateMeta {
    itemCount: number;

    totalItems?: number;

    perPage: number;

    totalPages?: number;

    currentPage: number;
}

/**
 * 分页选项
 */
export interface PaginateOptions {
    page: number;

    limit: number;
}

/**
 * 分页返回数据
 */
export interface PaginateReturn<E extends ObjectLiteral> {
    meta: PaginateMeta;
    items: E[];
}

/**
 * 为queryBuilder添加查询的回调函数接口
 */
export type QueryHook<Entity> = (
    qb: SelectQueryBuilder<Entity>,
) => Promise<SelectQueryBuilder<Entity>>;
