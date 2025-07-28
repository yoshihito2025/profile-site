import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import { notFound } from "next/navigation";
import html from "remark-html";
import styles from "./blog.module.css";

type Props = {
  params: { slug: string };
};

export const generateMetadata = () => {
  return {
    title: "Article page - Saladmaki",
    description: "Article page of Saladmaki",
  };
};

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/app/blog/articles");
  const files = fs.readdirSync(dir);
  return files.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(
    process.cwd(),
    "src/app/blog/articles",
    `${params.slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className={styles.contents}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1>{data.date}</h1>
          <h2>{data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </div>
    </div>
  );
}
