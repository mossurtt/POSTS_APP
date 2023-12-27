import { ZodError, z } from 'zod';
import PostProps from './Post.types';

export const PostSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1),
});

export type PostFormData = z.input<typeof PostSchema>;

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
