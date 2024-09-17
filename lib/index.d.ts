/**
 * removeUnderbar true - str내 언더바를 공백으로 치환합니다.
 *                false - str내 공백을 언더라인으로 치환합니다.
 */
export declare const convertUnderbar: (str: String, removeUnderbar?: boolean) => string;
export type ReadUserDto = {
    id: string;
    email: string;
    name: string;
    permissions: string[];
    createdAt: string;
    updatedAt: string;
};
export type ReadPermissionDto = {
    name: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
};
export type ReadTopicDto = {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
};
export type ReadSeriesDto = {
    id: number;
    name: string;
    topic: ReadTopicDto;
    createdAt: string;
    updatedAt: string;
};
export type ReadPostDto = {
    id: number;
    title: string;
    content: string;
    thumbnail?: string;
    author: ReadUserDto;
    topic: ReadTopicDto;
    series?: ReadSeriesDto;
    createdAt: string;
    updatedAt: string;
};
export type PageInfo = {
    current: number;
    last: number;
    total: number;
    take: number;
};
export type Page<T> = {
    data: T[];
    info: PageInfo;
};
export type PagingDto = {
    page?: number;
    take?: number;
    orderby?: string;
    direction?: 'asc' | 'desc';
};
export type PagingTopicDto = PagingDto & {
    like__name?: string;
};
export type PagingSeriesDto = PagingDto & {
    like__name?: string;
    where__topicId?: number;
};
export type PagingPostDto = PagingDto & {
    like__title?: string;
    like__content?: string;
    where__topicId?: number;
    where__seriesId?: number;
    where__authorName?: string;
};
