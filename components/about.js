import styles from './about.module.css'
import Image from 'next/image'

export default function About(props) {
    return (
    <>
      <section className={styles.about_section} role="main">
        <article>
          <Image
            src={props.img}
            className={styles.about_avatar}
            alt="Dan Jukes - Product &amp; UX design lead"
            title="Dan Jukes - Product &amp; UX design lead"
            width={98}
            height={98}
          />
          <p>{props.paragraph1}</p>
          <p>{props.paragraph2}</p>
        </article>
      </section>
    </>
    );
};