'use client';

import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib';

import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className='block'>
      <Card className='flex'>
        <Link href={href || '#'} target='_blank' className='flex-none'>
          <div className='border size-12 rounded-full dark:bg-foreground overflow-hidden'>
            <Image
              width={100}
              height={100}
              src={logoUrl}
              alt={altText}
              className='object-cover'
            />
          </div>
        </Link>
        <div
          className='flex-grow ml-4 items-center flex-col group cursor-pointer'
          onClick={handleClick}
        >
          <CardHeader>
            <div className='flex items-center justify-between gap-x-2 text-base'>
              <h3 className='inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm'>
                {title}
                {badges && (
                  <span className='inline-flex gap-x-1'>
                    {badges.map((badge, index) => (
                      <Badge
                        variant='secondary'
                        className='align-middle text-xs'
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                    isExpanded ? 'rotate-90' : 'rotate-0',
                  )}
                />
              </h3>
              <div className='text-xs sm:text-sm tabular-nums text-muted-foreground text-right'>
                {period}
              </div>
            </div>
            {subtitle && <div className='font-sans text-xs'>{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,

                height: isExpanded ? 'auto' : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='mt-2 text-xs sm:text-sm'
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
};
