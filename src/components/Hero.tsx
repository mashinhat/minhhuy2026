import { ArrowDownIcon, BasketballIcon } from './icons';
import { CourtArc } from './CourtArc';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-16 sm:px-10">
      <CourtArc className="pointer-events-none absolute inset-y-0 left-0 h-full w-[70vw] max-w-[560px] text-ink/[0.05]" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-start">
        <p className="font-mono text-sm tracking-[0.2em] text-court uppercase">
          Trang riêng của
        </p>

        <h1 className="mt-4 font-display text-[15vw] leading-[0.9] tracking-tight text-ink sm:text-8xl md:text-9xl">
          MINH HUY
        </h1>

        <div className="mt-8 max-w-xl font-display text-2xl leading-snug text-ink sm:text-3xl">
          <p>
            Tiền phong trên <span className="text-ball">sân bóng</span>.
          </p>
          <p className="mt-1">
            Tiên phong trong <span className="text-court">lớp học</span>.
          </p>
        </div>

        <p className="mt-6 max-w-md font-hand text-2xl text-ink-soft sm:text-3xl">
          Sinh 2011 · Lớp 10, Trường THPT Nguyễn Du · Niên khóa 2026–2027
        </p>

        <a
          href="#san"
          className="group mt-14 inline-flex items-center gap-3 rounded-full border-2 border-ink px-6 py-3 font-body text-sm font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
        >
          <BasketballIcon className="h-5 w-5 motion-safe:animate-[bounce_1.8s_ease-in-out_infinite] motion-safe:group-hover:animate-none" />
          Xem hành trình
          <ArrowDownIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
