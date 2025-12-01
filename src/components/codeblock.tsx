'use client';

import { toast } from 'sonner';
import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BundledLanguage, createHighlighter } from 'shiki';

import { copyToClipboard } from '@/lib/utils';
import { useBoolean } from '@/hooks/use-boolean';

import Button from './button';
import { Card } from './core/card';
import Typography from './typography';

const highlighter = createHighlighter({
  themes: ['one-dark-pro'],
  langs: ['typescript', 'javascript', 'html', 'tsx'],
});

interface CodeBlockProps {
  children: string;
  lang: BundledLanguage;
  fileName?: string;
}

const CodeBlock = ({ children, lang, fileName }: CodeBlockProps) => {
  const [html, setHtml] = useState('');
  const [isCopied, isCopiedAction] = useBoolean();

  useEffect(() => {
    let cancelled = false;

    const format = async () => {
      const formatted = (await highlighter).codeToHtml(children, {
        lang,
        theme: 'one-dark-pro',
        defaultColor: false,
      });

      if (!cancelled) {
        setHtml(formatted);
      }
    };

    format();

    return () => {
      cancelled = true;
    };
  }, [children, lang]);

  const copyToClipHandler = async () => {
    try {
      const response = await copyToClipboard(children);
      toast.success(response);
      isCopiedAction.setTrue();
      setTimeout(() => {
        isCopiedAction.setFalse();
      }, 1000);
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <Card className="codeblock w-full p-0">
      <div className="border-b-foreground/10 flex w-full justify-between border-b p-2">
        <Typography>{fileName}</Typography>
        <Button variant="icon" onClick={copyToClipHandler}>
          {isCopied ? <Check size={14} /> : <Copy size={14} />}
        </Button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} className="w-full p-4" />
    </Card>
  );
};

export default CodeBlock;
