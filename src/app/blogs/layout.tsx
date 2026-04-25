import type { ReactNode } from "react";

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Strategi Blog — RSS Feed"
        href="https://strategi.is/feed.xml"
      />
      <link
        rel="alternate"
        type="text/markdown"
        title="Strategi Blog — llms.txt index"
        href="https://strategi.is/blogs/llms.txt"
      />
      {children}
    </>
  );
}
