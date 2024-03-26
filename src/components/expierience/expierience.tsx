import styles from "./expierience.module.scss";

export const Expierience = () => {
  const expierenceData = [
    {
      company: "Aviatar @ Lufthansa Technik GmbH",
      jobTitle: "Full Stack Developer",
      period: "05.2024 - Today",
      position: 1,
      texts: [
        "Creating Solutions for digital MRO Services in the Aviation Industry",
        "Solutions based on Azure and Kubernetes"
      ],
    },
    {
      company: "Taxdoo GmbH",
      jobTitle: "Software Engineer",
      period: "06.2022 - 04.2024",
      position: 1,
      texts: [
        "Maintaining an inhouse built Java Spring based payment solution",
        "Working heavily with AWS Infrastructure",
        "Mainting resources via Gitlab CI and AWS CDK"
      ],
    },
    {
      company: "HanseVision GmbH",
      jobTitle: "Junior Software Developer",
      period: "02.2020 - 05.2023",
      position: 1,
      texts: [
        "Creating SharePoint solutions for customers",
        "Developing webparts using React.",
        "Creating webservices using .NET",
      ],
    },
    {
      company: "LW Mega Yacht Solutions GmbH",
      jobTitle: "IT Support Engineer",
      period: "09.2021 - Today",
      position: 2,
      texts: ["Resturcturing internal IT.", "Integration into Microsoft 365."],
    },
    {
      company: "neusta Software Development GmbH",
      jobTitle: "Frontend Developer",
      period: "02.2018 - 08.2019",
      position: 3,
      texts: [
        "Developing a search and booking engine for a travel agency using Angular.",
        "Working in agile teams using JIRA.",
      ],
    },
    {
      company: "neusta Software Development GmbH",
      jobTitle: "Ausbildung Media Designer",
      period: "08.2015 - 01.2018",
      position: 3,
      texts: [
        "Hier habe ich was gemacht.",
        "Und das wird auch noch mal gemacht.",
      ],
    },
  ];

  return (
    <>
      {expierenceData
        .sort((a, b) => a.position - b.position)
        .map((x, i) => (
          <div className={styles.expierienceContainter} key={i}>
            <div style={{ width: "40%" }}>
              <h3>{x.jobTitle}</h3>
              <div>{x.period}</div>
              <div>{x.company}</div>
            </div>
            <div style={{ width: "60%" }}>
              <ul>
                {x.texts.map((x, ix) => (
                  <li key={ix}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </>
  );
};
