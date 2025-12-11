import type { MDXComponents } from 'mdx/types';

import CodeBlock from './components/codeblock';
import MorphingImage from './components/morphing-image';

const components: MDXComponents = {
  CodeBlock,
  MorphingImage,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
