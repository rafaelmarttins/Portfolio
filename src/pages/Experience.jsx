import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#252525">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#252525", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Análise de Sistemas de Computação
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chapadão do Sul - MS
          </h4>
          <p> Tecnólogo </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2023"
          iconStyle={{ background: "#252525", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ciência da Computação
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Campo Grande - MS
          </h4>
          <p> Bacharel </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#6d01f9", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Service Desk - Prefeitura Municipal
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chapadão do Sul, MS
          </h4>
          <p>
            Suporte técnico ao usuário, configuração e manutenção de estações
            Windows 7, e 10, office 2010 e 2013, instalação e configuração de
            periféricos, impressoras. Suporte a antivírus, redes/conectividade,
            cabeamento estruturado com conhecimento em TCP/IP, DHCP e DNS.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Atual"
          iconStyle={{ background: "#6d01f9", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor FullStack - PSG Tecnologia
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Campo Grande, MS
          </h4>
          <p>
            Desenvolvedor Web na linguagem CSharp no Back-end e React no
            Front-end.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
