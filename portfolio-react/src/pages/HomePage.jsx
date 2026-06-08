import Hero from "../components/Hero";
import SkillList from "../components/SkillList";
import "./Page.css";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="page-section" id="habilidades">
        <div className="page-section__inner">
          <h2 className="section-title">
            <span className="section-title__prefix">02.</span> Habilidades
          </h2>
          <SkillList />
        </div>
      </section>
    </main>
  );
}
