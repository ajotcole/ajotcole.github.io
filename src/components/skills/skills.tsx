import { FaReact, FaNodeJs, FaJira, FaAws, FaAngular } from "react-icons/fa";
import {
  SiTypescript,
  SiMicrosoftazure,
  SiDocker,
  SiSpring,
  SiGraphql,
  SiGitlab
} from "react-icons/si";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./skills.module.scss";

export const Skills = () => {
  const skillData = [
    {
      title: "React",
      level: 5,
      icon: <FaReact />,
      iconColor: "#61DBFB",
    },
    {
      title: "TypeScript",
      level: 5,
      icon: <SiTypescript />,
      iconColor: "#007acc",
    },
    {
      title: "Azure",
      level: 3,
      icon: <SiMicrosoftazure />,
      iconColor: "#007FFF",
    },
    {
      title: "AWS",
      level: 4,
      icon: <FaAws />,
      iconColor: "#FF9900",
    },
    {
      title: "Docker",
      level: 4,
      icon: <SiDocker />,
      iconColor: "#0DB7ED",
    },
    {
      title: "NodeJS",
      level: 4,
      icon: <FaNodeJs />,
      iconColor: "#3C873A",
    },
    {
      title: "Atlassian Products",
      level: 5,
      icon: <FaJira />,
      iconColor: "#0052CC",
    },
    {
      title: "Spring Boot",
      level: 3,
      icon: <SiSpring />,
      iconColor: "#6CB52D",
    },
    {
      title: "GraphQL",
      level: 4,
      icon: <SiGraphql />,
      iconColor: "#F6009C",
    },
    {
      title: "GitLab",
      level: 4,
      icon: <SiGitlab />,
      iconColor: "#E2432A",
    },
    {
      title: "Angular",
      level: 2,
      icon: <FaAngular />,
      iconColor: "#DD0031",
    },
  ];

  return (
    <>
      {skillData
        .sort((a, b) => b.level - a.level)
        .map((x, i) => (
          <div className={styles.skillContainer} key={i}>
            <div style={{ verticalAlign: "middle" }}>
              <span style={{ color: x.iconColor }}>{x.icon}</span>
              <span>{x.title}</span>
            </div>
            <div>
              <AiFillStar />
              {x.level > 1 ? <AiFillStar /> : <AiOutlineStar />}
              {x.level > 2 ? <AiFillStar /> : <AiOutlineStar />}
              {x.level > 3 ? <AiFillStar /> : <AiOutlineStar />}
              {x.level > 4 ? <AiFillStar /> : <AiOutlineStar />}
            </div>
          </div>
        ))}
    </>
  );
};
