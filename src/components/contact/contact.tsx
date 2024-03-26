import styles from "./contact.module.scss";
import { MdEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <a
        href="mailto:ajot.dev@outlook.com"
        target="_blank"
        className={styles.emailContainer}
      >
        <MdEmail size={32} />
        <div>E-Mail</div>
      </a>
      <a
        href="https://www.linkedin.com/in/alexander-james-cole-130bb3114"
        className={styles.linkedinContainer}
      >
        <SiLinkedin size={32} />
        <div>LinkedIn</div>
      </a>
    </div>
  );
};
