import { ZodError, z } from 'zod';
import PostProps from './Post.types';

export const PostSchema = z.object({
  title: z.string().min(1, 'Title must not be empty'),
  content: z.string().min(1, 'Content must not be empty'),
});

export type PostFormData = z.infer<typeof PostSchema>;

export const validatePostFormData = (
  data: Pick<PostProps, 'title' | 'content'>,
): PostFormData => {
  try {
    return PostSchema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error(error.errors.map((err) => err.message).join('\n'));
    }
    throw error;
  }
};
