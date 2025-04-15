import React from "react";
import Markdown from 'react-markdown'
import styles from "./MarkdownPage.module.css";
import TypePage from "@/types/page";
import Image from "next/image";

type Props = {
  dict: Record<string, string>;
  page: TypePage
}

const MarkdownPage: React.FC<Props> = (props: Props) => {
  const { page } = props;
  // const createdAt = new Date(page.created_at);

  // const formattedDate = createdAt.toLocaleDateString(page.lang, {
  //   month: "long",
  //   day: "2-digit",
  //   year: "numeric",
  // });


  return (
    <div className={styles.page}>
      {page.image_url &&
        <div className={styles.image}>
          <Image src={page.image_url} alt={page.title} width={1000} height={400} />
        </div>
      }

      <div className={styles.markdown}>
        <Markdown>{page.markdown_content}</Markdown>
      </div>
    </div>
  );
};

export default MarkdownPage;
