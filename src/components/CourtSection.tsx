import { BasketballIcon } from './icons';
import { Reveal } from './Reveal';

export function CourtSection() {
  return (
    <section id="san" className="relative overflow-hidden bg-ink px-6 py-24 text-paper sm:px-10 sm:py-32">
      <div className="mx-auto grid w-full max-w-4xl gap-12 md:grid-cols-[1fr_auto]">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.2em] text-ball-bright uppercase">
            Trên sân
          </p>
          <h2 className="mt-4 font-display text-6xl leading-none sm:text-7xl">Tiền phong</h2>
          <p className="mt-2 font-hand text-2xl text-paper/70">Forward</p>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/85">
            Vừa tấn công vừa bọc lót phòng thủ, tì đè dưới rổ, tranh từng quả
            bóng bật bảng. Minh Huy chưa thi đấu chính thức cho đội nào, nhưng
            gần như buổi nào cũng có mặt ở sân để luyện thêm.
          </p>
        </Reveal>

        <Reveal className="self-center">
          <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-2 border-dashed border-ball-bright/50 sm:h-56 sm:w-56">
            <BasketballIcon className="h-24 w-24 text-ball-bright sm:h-28 sm:w-28" />
          </div>
          <p className="mt-4 text-center font-mono text-xs tracking-widest text-paper/50 uppercase">
            Vị trí #3 / #4
          </p>
        </Reveal>
      </div>
    </section>
  );
}
