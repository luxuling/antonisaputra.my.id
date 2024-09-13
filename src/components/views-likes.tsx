'use client';

import { Eye, Heart } from 'lucide-react';
import React from 'react';

import { Badge } from './ui/badge';

const ViewsLikes = () => {
  return (
    <div className='pt-3 flex items-center gap-2'>
      <Badge variant='secondary' className='gap-2'>
        <Eye size={15} />
        100
      </Badge>
      <Badge variant='secondary' className='gap-2'>
        <Heart size={15} />
        100
      </Badge>
    </div>
  );
};
export default ViewsLikes;
