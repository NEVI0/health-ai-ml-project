export default function Information() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Sobre a Diabetes</h3>

        <p className="text-gray-500">
          Diabetes é uma condição crônica causada pela produção insuficiente ou
          pela má utilização da insulina, um hormônio que regula a glicose no
          sangue. Isso leva ao aumento da glicose (açúcar no sangue), o que pode
          causar complicações sérias em órgãos como coração, rins, olhos e
          nervos se não for controlado. O tratamento geralmente envolve dieta
          saudável, exercícios físicos, controle do peso e, se necessário,
          medicamentos.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">O que é e como funciona</h3>

        <ul className="flex flex-col gap-2">
          <li className="text-gray-500">
            <strong className="font-semibold">Função da insulina:</strong> A
            insulina, produzida pelo pâncreas, é essencial para que a glicose
            entre nas células e gere energia para o corpo funcionar.
          </li>

          <li className="text-gray-500">
            <strong className="font-semibold">O problema do diabetes:</strong>{' '}
            Na diabetes, o corpo tem dificuldade em produzir insulina suficiente
            ou em utilizá-la corretamente, o que causa o acúmulo de glicose no
            sangue (hiperglicemia).
          </li>

          <li className="text-gray-500">
            <strong className="font-semibold">Tipos:</strong> Os principais
            tipos são o Tipo 1 (causado pela destruição das células produtoras
            de insulina), o Tipo 2 (geralmente ligado à obesidade e resistência
            à insulina) e a diabetes gestacional (que ocorre durante a
            gravidez).
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Sintomas comuns</h3>

        <ul className="flex flex-col gap-2">
          <li className="text-gray-500">Sede excessiva</li>
          <li className="text-gray-500">Vontade frequente de urinar</li>
          <li className="text-gray-500">Fome constante</li>
          <li className="text-gray-500">Perda de peso, mesmo sem dieta</li>
          <li className="text-gray-500">Fadiga e fraqueza</li>
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Prevenção</h3>

        <p className="text-gray-500">
          A melhor forma de prevenir a diabetes é através da adoção de hábitos
          de vida saudáveis, como praticar atividades físicas regularmente,
          manter uma alimentação equilibrada, não fumar e manter o peso corporal
          sob controle.
        </p>
      </section>
    </div>
  );
}
