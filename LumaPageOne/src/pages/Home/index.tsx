import {
  CalendarSection,
  FrequentItems,
  MonthlyFrequencyChart,
} from "../../components/content/HomePageContent";
import { Greeting } from "../../components/saudacao";
import { Main } from "../../components/SideBarPages";
import { UserCardInfo } from "../../components/UserInfo";

export const Home = () => {
  const userName = "Carlos";
  return (
    <Main>
      <Greeting name={userName} />
      <UserCardInfo
        name="Carlos Moraes"
        descricao={"QA (Quality Assurance)"}
        avatar={""}
        entradas={4}
        saida={3}
        faltas={0}
        cardWidth={"100%"}
      />
      <CalendarSection />
      <FrequentItems />
      <MonthlyFrequencyChart />
    </Main>
  );
};
