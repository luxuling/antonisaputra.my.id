'use client';

import { Eye, Heart } from 'lucide-react';
import * as React from 'react';
import { toast } from 'sonner';

import { useLikesViewsContext } from '@/context/views-likes';
import createSupabaseCLient from '@/services/supabase-client';

import { Badge } from './ui/badge';

interface ViewsLikesProps {
  slug: string;
  contentType: 'project' | 'blog';
}

const ViewsLikes = ({ slug, contentType }: ViewsLikesProps) => {
  const supabase = createSupabaseCLient();
  const { state, setState } = useLikesViewsContext();

  const table = React.useMemo(() => {
    return contentType === 'blog' ? 'blogs' : 'projects';
  }, [contentType]);

  const updateViews = async (views: number) => {
    const { error } = await supabase
      .from(table)
      .update({
        views: views + 1,
      })
      .eq('slug', slug);

    if (error) return toast.error(error.message);
  };

  const getViewsAndLike = async () => {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) return toast.error(error.message);

    await updateViews(data.views);

    setState({
      views: data.views + 1,
      likes: data.likes,
    });
  };

  React.useEffect(() => {
    getViewsAndLike();
  }, [slug]);

  return (
    <div className='pt-3 flex items-center gap-2'>
      <Badge variant='secondary' className='gap-2'>
        <Eye size={15} />
        {state.views}
      </Badge>
      <Badge variant='secondary' className='gap-2'>
        <Heart size={15} />
        {state.likes}
      </Badge>
    </div>
  );
};
export default ViewsLikes;
