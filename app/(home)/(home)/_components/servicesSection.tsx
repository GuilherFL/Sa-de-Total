"use client";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Award, NotebookPen, Sparkles, UserRoundCheck } from "lucide-react";

const services = [
  {
    id: 0,
    icon: <Sparkles className="size-7 text-purple-500" />,
    title: "AMBIENTE ACOLHEDOR",
    description:
      "Além de contar com uma equipe especializada, o Saúde Total proporciona um ambiente acolhedor e seguro para cuidar da sua saúde. Sinta-se confortável e tranquilo durante sua experiência conosco. Desde a recepção até os detalhes da infraestrutura, cuidamos de cada aspecto para criar uma atmosfera agradável e confiável, pensada especialmente para o seu bem-estar.",
  },
  {
    id: 1,
    icon: <Award className="size-7 text-purple-500" />,
    title: "ATENDIMENTO VIP",
    description:
      "Valorizamos cada paciente e oferecemos um atendimento personalizado para atender às suas necessidades específicas. Nossa equipe é treinada para entender suas demandas individuais e oferecer sugestões personalizadas para o seu cuidado, garantindo uma experiência única e satisfatória em nossa plataforma.",
  },
  {
    id: 2,
    icon: <UserRoundCheck className="size-7 text-purple-500" />,
    title: "EQUIPE ESPECIALIZADA",
    description:
      "Nossa equipe é composta por profissionais altamente qualificados e apaixonados pelo que fazem. Com anos de experiência na área da saúde, estamos aqui para oferecer a você serviços de qualidade e um atendimento excepcional. Desde consultas de rotina até tratamentos especializados, conte com profissionais dedicados ao seu cuidado.",
  },
  {
    id: 3,
    icon: <NotebookPen className="size-7 text-purple-500" />,
    title: "AGENDAMENTO FACILITADO",
    description:
      "Agendar uma consulta ou exame nunca foi tão fácil! Com nossa plataforma intuitiva e amigável, você pode marcar seu próximo atendimento em apenas alguns cliques. Escolha o profissional de saúde preferido, selecione o horário que melhor se adequa à sua agenda e pronto! Sem complicações, sem espera. O Saúde Total está aqui para simplificar o cuidado com a sua saúde.",
  },
];

const ServicesSection = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="flex gap-3 pl-5 lg:px-0"
    >
      <CarouselContent className="w-11/12 lg:w-1/2">
        {services.map((card) => (
          <CarouselItem key={card.id}>
            <Card className="h-[248px] min-w-full max-w-full rounded-2xl md:h-44 lg:h-[230px]">
              <CardContent className="px-2 py-0 pt-2">
                <div className="flex flex-col items-start gap-1 px-2 pb-3">
                  <h2 className="mb-2 mt-2 flex w-full items-center gap-2 overflow-hidden text-ellipsis text-nowrap border-b border-solid border-secondary pb-2 text-sm font-bold lg:text-lg">
                    {card.icon}
                    {card.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-400 lg:text-base">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ServicesSection;
