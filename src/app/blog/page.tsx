export const dynamic = "force-static";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "./articles.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";

type ArticleMeta = {
  title: string;
  date: string;
  slug: string;
};

export const generateMetadata = () => {
  return {
    title: "Blog page - yoshihito2025",
    description: "Blog page of yoshihito2025",
  };
};

export default function ArticleList() {
  const articlesDir = path.join(process.cwd(), "src/app/blog/articles");
  const files = fs.readdirSync(articlesDir);

  const articles: ArticleMeta[] = files.map((filename) => {
    const filePath = path.join(articlesDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const slug = filename.replace(/\.md$/, "");

    return {
      title: data.title,
      date: data.date,
      slug,
    };
  });

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <div className={styles.contents}>
        <div className={styles.content}>
          <h1>Welcome to yoshihito2025&apos;s blog.</h1>
          <ul id="articles" className={styles.articles}>
            {articles.map(({ title, date, slug }) => (
              <li key={slug}>
                <Link href={`/blog/${slug}`}>
                  <h2>{date}</h2>
                  <p>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
