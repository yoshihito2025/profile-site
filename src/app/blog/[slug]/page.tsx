import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import styles from "./blog.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";

export const dynamic = "force-static";

export const generateMetadata = () => {
  return {
    title: "Article page - dodgerblu3",
    description: "Article page of dodgerblu3",
  };
};

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/app/blog/articles");
  const files = await fs.readdir(dir);
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "src/app/blog/articles",
    `${slug}.md`
  );

  let fileContents: string;
  try {
    fileContents = await fs.readFile(filePath, "utf8");
  } catch (err) {
    console.error("ファイル読み込み失敗: ", err);
    notFound();
  }

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: data.title },
        ]}
      />
      <div className={styles.contents}>
        <div className={styles.content}>
          <div className={styles.container}>
            <p>{data.date}</p>
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
        </div>
      </div>
    </>
  );
}
