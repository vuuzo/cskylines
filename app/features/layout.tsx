import { BigHeading, SmallHeading } from "../components/layout/Headings";
import HeroWrapper from "../components/layout/HeroWrapper";

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroWrapper className="flex items-center">
        <SmallHeading>Cities: Skylines II</SmallHeading>
        <BigHeading>Features</BigHeading>
      </HeroWrapper>
      {children}
    </>
  )
}