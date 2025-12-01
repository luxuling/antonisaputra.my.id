import { Metadata, ContentAnalytic } from '.';

export interface Post  {
  slug: string;
  metadata: Metadata
  content: React.FC
  analytic: ContentAnalytic;
}
