import { PawIcon } from './icons';
import { Reveal } from './Reveal';

export function DogSection() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid w-full max-w-4xl gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative flex aspect-square items-center justify-center rounded-3xl bg-caramel/25">
            <PawIcon className="h-28 w-28 text-caramel" />
            <p className="absolute bottom-6 font-mono text-xs tracking-widest text-ink-soft/70 uppercase">
              Ảnh thật cập nhật sau
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="font-mono text-sm tracking-[0.2em] text-court uppercase">Ở nhà</p>
          <h2 className="mt-4 font-display text-6xl leading-none text-ink sm:text-7xl">
            No Name
          </h2>
          <p className="mt-2 font-hand text-2xl text-caramel sm:text-3xl">
            chú chó mập của cả nhà
          </p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Đặt tên mãi không ra nên cuối cùng tên chính thức lại là "No Name".
            Tròn trịa, hiền lành, và là thành viên không thể thiếu ở nhà Minh
            Huy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
