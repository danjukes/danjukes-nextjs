import styles from './header.module.css'

export default function Header(props) {
    return (
    <>
      <header className={styles.header}>
        <hgroup className={styles.hgroup}>
          <h1 className={styles.header_title}>{props.title}</h1>
          <h2 className={styles.header_subtitle}>{props.subtitle}</h2>
        </hgroup>
      </header>
    </>
    );
};