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
            Técnico de suporte de informática - Prefeitura Municipal
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chapadão do Sul, MS
          </h4>
          <p>
            • Forneci suporte técnico a usuários de computadores, incluindo a
            resolução de problemas de hardware e software. • Instalei,
            configurei e atualizei sistemas operacionais e aplicativos em
            computadores. • Configurei e solucionei problemas em redes de
            computadores, incluindo conexões com fio e sem fio. • Realizei
            backups de dados em computadores e dispositivos de armazenamento,
            além de restaurar dados em caso de falhas ou perda. • Criei e
            gerenciei contas de usuário, grupos e computadores no Active
            Directory, garantindo que as configurações estivessem corretas e em
            conformidade com as políticas da empresa. • Gerenciei servidores e
            redes de computadores, garantindo seu funcionamento eficiente e
            seguro. • Auxiliei no controle e inventário de equipamentos de TI,
            como computadores, impressoras, switches e roteadores. • Realizei a
            instalação e configuração de sistemas de videoconferência,
            equipamentos de projeção e outros dispositivos audiovisuais em salas
            de reuniões.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#6d01f9", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor FullStack - INOVVATI Tecnologia Aplicada
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Campo Grande, MS
          </h4>
          <p>
            • Atuação com Banco de Dados SQL Server. • Desenvolvimento de
            interfaces responsivas e visualmente atraentes utilizando HTML, CSS,
            JavaScript em conjunto com o React, BootStrap e jQuery. •
            Desenvolvimento de APIs na linguagem C# utilizando modelo
            arquitetural em camadas e design patterns Singleton, Repository,
            Adapter. Utilização de Entity Framework, Automapper, LINQKIT, .NET e
            o Newtonsoft Json.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
