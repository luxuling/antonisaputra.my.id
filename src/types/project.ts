import { Metadata, ContentAnalytic } from '.';

export interface Project {
  slug: string;
  metadata: Metadata;
  content: React.FC;
  analytic: ContentAnalytic;
}
