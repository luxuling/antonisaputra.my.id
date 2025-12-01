import type { MDXComponents } from 'mdx/types';

import CodeBlock from './components/codeblock';
import ImageWithModal from './components/image-with-modal';

const components: MDXComponents = {
  CodeBlock,
  ImageWithModal,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
