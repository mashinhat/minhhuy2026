import { CheckIcon, MedalIcon } from './icons';
import { Reveal } from './Reveal';

const STREAK_YEARS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export function AcademicSection() {
  return (
    <section className="grid-paper relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto w-full max-w-4xl">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.2em] text-court uppercase">Trong lớp</p>
          <h2 className="mt-4 font-display text-6xl leading-none text-ink sm:text-7xl">
            9 năm liền
          </h2>
          <p className="relative mt-3 inline-block -rotate-2 font-hand text-2xl text-sage sm:text-3xl">
            và vẫn đang tiếp tục
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
            Học sinh xuất sắc từ lớp 1 đến lớp 9, không đứt quãng năm nào.
          </p>
          <div className="mt-6 flex flex-wrap gap-3" role="list" aria-label="9 năm liền học sinh xuất sắc, từ lớp 1 đến lớp 9">
            {STREAK_YEARS.map((year) => (
              <div
                key={year}
                role="listitem"
                className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-ink/15 bg-paper font-mono text-xs text-ink-soft"
              >
                <CheckIcon className="h-4 w-4 text-sage" />
                <span className="mt-0.5">L{year}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="flex items-start gap-5 rounded-2xl border-2 border-ink/10 bg-paper/80 p-6 shadow-sm sm:p-8">
            <MedalIcon className="h-12 w-12 shrink-0 text-ball" />
            <div>
              <p className="font-display text-xl text-ink">Giải Nhì</p>
              <p className="mt-1 text-ink-soft">
                Cuộc thi Toán Máy tính cầm tay cấp Thành phố.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
