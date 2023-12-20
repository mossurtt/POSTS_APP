import PostProps from '../Post/post.types';

export type RecentlyCreatedPostProps = Omit<
PostProps,
'id' | 'canRate' | 'editable'
>;
