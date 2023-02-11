/**
 * 文章内容类型
 */
export enum PostBodyType {
    HTML = 'html',
    MD = 'markdown',
}

/**
 * 文章排序类型
 */
export enum PostOrderType {
    CREATED = 'createdAT',
    UPDATED = 'updatedAT',
    PUBLISHED = 'publishedAT',
    COMMENTCOUNT = 'commentCount',
    CUSTOM = 'custom',
}
