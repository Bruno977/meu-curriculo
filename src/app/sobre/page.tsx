import { Avatar } from '@/components/Avatar';
import { DownloadCv } from '@/components/DownloadCv';
import { Subtitle } from '@/components/Subtitle';
import { Timeline } from '@/components/Timeline';
import { Title } from '@/components/Title';
import { TimeLineData } from '@/data/timeline';
import { EducationData } from '@/data/education';
import { CoursesDate } from '@/data/courses';
import { ProgressSkills } from '@/components/ProgressSkills';
import { SkillsData } from '@/data/skills';

function About() {
  return (
    <>
      <section className="container mx-auto px-4 py-14 lg:py-18">
        <div className="text-center mb-10">
          <Title>
            Sobre <strong className="text-emerald-500">Mim</strong>
          </Title>
          <Subtitle>SOU DESENVOLVEDOR FRONT-END</Subtitle>
        </div>
        <div className="flex items-start lg:items-center justify-center flex-col lg:flex-row gap-10 lg:gap-20">
          <Avatar />
          <div>
            <div className="flex items-start lg:items-center flex-col lg:flex-row gap-4 lg:gap-10">
              <ul className="flex flex-col gap-3">
                <li className="flex items-center  gap-2">
                  <p className="text-gray-400 text-sm">Primeiro Nome :</p>
                  <span className="">Bruno </span>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm whitespace-nowrap">
                    Sobrenome :
                  </p>
                  <span> Rodrigues </span>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm whitespace-nowrap">
                    Nascimento :{' '}
                  </p>
                  <span>19/04/1997</span>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm whitespace-nowrap">
                    Nacionalidade :{' '}
                  </p>
                  <span>Brasileira</span>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm whitespace-nowrap">
                    Endereço :{' '}
                  </p>
                  <span>Itaperuna - RJ</span>
                </li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm whitespace-nowrap">
                    Contato :{' '}
                  </p>
                  <a href="tel:+5522997983656" className="underline">
                    (22) 99798-3656
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm whitespace-nowrap ">
                    Email :
                  </p>
                  <a
                    href="mailto:brunorodrigues.silveira@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    brunorodrigues.silveira@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm whitespace-nowrap">
                    Instagram :{' '}
                  </p>
                  <a
                    href="https://www.instagram.com/bruunoo.rodrigues/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Clique aqui
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm whitespace-nowrap">
                    GitHub :{' '}
                  </p>
                  <a
                    href="https://github.com/Bruno977"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Clique aqui
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <p className="text-gray-400 text-sm whitespace-nowrap">
                    Linkedin :{' '}
                  </p>
                  <a
                    href="https://www.linkedin.com/in/bruno-rodrigues-78416319b/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Clique aqui
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <DownloadCv />
            </div>
          </div>
        </div>
      </section>

      <section className="md:container mx-auto px-4">
        <span className="border-t border-zinc-900 block pb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="pb-8">
              <Title as="h4" size="md">
                EXPERIÊNCIA
              </Title>
            </div>

            {TimeLineData.length > 0 &&
              TimeLineData.map((item) => (
                <Timeline
                  key={item.id}
                  date={`${item.start_date} - ${item.end_date || 'atual'}`}
                  company={item.company}
                  role={item.role}
                  description={item.description}
                />
              ))}
          </div>
          <div>
            <div>
              <div className="pb-8 pt-8 lg:pt-0">
                <Title as="h4" size="md">
                  EDUCAÇÃO
                </Title>
              </div>
              {EducationData.length > 0 &&
                EducationData.map((item) => (
                  <Timeline
                    key={item.id}
                    date={`${item.start_date} - ${item.end_date || 'atual'}`}
                    company={item.company}
                    role={item.role}
                    description={item.description}
                  />
                ))}
            </div>
            <div>
              <div className="pb-8 mt-8 lg:pt-0">
                <Title as="h4" size="md">
                  Idiomas
                </Title>
              </div>
              <Timeline
                date={`jan de 2020 - dez de 2020`}
                company="Random"
                role="Inglês"
                description="Inglês intermediário"
              />
            </div>
          </div>
        </div>
        <div className="pt-8">
          <div className="pb-8">
            <Title as="h4" size="md">
              Cursos
            </Title>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 [&>*:nth-child(7)]:pb-0">
            {CoursesDate.length > 0 &&
              CoursesDate.map((item) => (
                <Timeline
                  key={item.id}
                  date={`${item.start_date} - ${item.end_date || 'atual'}`}
                  company={item.company}
                  role={item.role}
                  description={item.description}
                />
              ))}
          </div>
        </div>
      </section>

      <section className="md:container mx-auto px-4 pt-8">
        <div className="pb-8">
          <Title as="h4" size="md">
            HABILIDADES
          </Title>
        </div>
        {SkillsData.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
            {SkillsData.map((skill) => (
              <ProgressSkills
                key={skill.id}
                skill={skill.skill}
                progress={skill.progress}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default About;
