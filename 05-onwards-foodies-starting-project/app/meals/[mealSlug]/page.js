import Image from "next/image";
import styles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealDetailPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  const { title, image, creator, creator_email, instructions, summary } = meal;
  const instructionsFormatted = instructions.replace(/\n/g, "<br />");

  console.log(instructions);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailo:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: instructionsFormatted,
          }}
        ></p>
      </main>
    </>
  );
}
