import { motion } from "motion/react";
import { MapPin, Phone, Clock, Train, Car, CalendarCheck } from "lucide-react";
import type { ReactNode } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Access() {
  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden text-[#123646]">
      {/* Hero Section：MVはそのまま */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1768473470516-181e4b970d7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMHJlc3RhdXJhbnQlMjBlbnRyYW5jZSUyMG5pZ2h0JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzc0ODc0NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="ILHA FORMOSA Access"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6 text-white tracking-[0.3em] font-light">
              ご案内
            </h1>
            <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-8"></div>
            <p className="text-base md:text-lg text-white/90 tracking-[0.2em] font-light">
              静かな路地の先に、そっと佇む一軒
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Access Intro ===== */}
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-end"
          >
            <div>
              <p className="font-en-medium text-[12px] tracking-[0.45em] text-[#B08A6A]">
                ACCESS
              </p>

              <h2 className="mt-5 text-[40px] md:text-[68px] tracking-[0.14em] text-[#123646] font-light">
                店舗案内
              </h2>
            </div>

            <div>
              <p className="font-ja text-[14px] md:text-[15px] leading-[2.2] tracking-[0.08em] text-[#123646]/78">
                京都の街並みに溶け込む、静かな一軒。
                お食事の時間をゆっくりお楽しみいただけるよう、営業時間やアクセス方法をご案内します。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Store Information ===== */}
      <section className="px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-16 items-start">
            {/* 左：店舗情報 */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
              className="bg-white/60 border border-[#123646]/10 px-6 md:px-10 py-8 md:py-10 shadow-[0_16px_44px_rgba(0,0,0,0.03)]"
            >
              <div className="mb-10">
                <p className="font-en-medium text-[12px] tracking-[0.4em] text-[#B08A6A]">
                  INFORMATION
                </p>

                <h3 className="mt-4 text-[28px] md:text-[36px] tracking-[0.14em] text-[#123646] font-light">
                  基本情報
                </h3>
              </div>

              <div className="divide-y divide-[#123646]/12">
                <InfoRow
                  icon={<MapPin className="w-5 h-5" />}
                  label="住所"
                  value="京都府京都市下京区燈籠町592"
                />

                <InfoRow
                  icon={<Phone className="w-5 h-5" />}
                  label="電話"
                  value="050-5597-5300"
                  link="tel:05055975300"
                />

                <div className="py-7 grid md:grid-cols-[130px_1fr] gap-4 md:gap-8">
                  <div className="flex items-center gap-3 text-[#B08A6A]">
                    <Clock className="w-5 h-5" />
                    <p className="font-ja text-[13px] tracking-[0.16em]">
                      時間
                    </p>
                  </div>

                  <div className="font-ja text-[14px] md:text-[15px] leading-[2] tracking-[0.08em] text-[#123646]/78">
                    <div className="grid grid-cols-[90px_1fr] gap-4">
                      <span className="text-[#123646]">ランチ</span>
                      <span>12:00 - 14:30 L.O. 料理14:15</span>
                    </div>
                    <div className="grid grid-cols-[90px_1fr] gap-4 mt-3">
                      <span className="text-[#123646]">ディナー</span>
                      <span>17:00 - 22:00 L.O. 料理21:15</span>
                    </div>
                  </div>
                </div>

                <InfoRow
                  label="定休日"
                  value="水曜日　第2・第4火曜日"
                />
              </div>

              <div className="mt-10">
                <a
                  href="https://tabelog.com/kyoto/A2601/A260201/26041402/?msockid=3abd8917899b6dd73a1d9c6588106c64"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ja inline-flex items-center justify-center gap-4 rounded-full border border-[#123646] px-9 py-4 text-[13px] tracking-[0.12em] text-[#123646] hover:bg-[#123646] hover:text-white transition duration-300"
                >
                  ご予約はこちら
                  <span className="font-en-medium ml-1">＞</span>
                </a>
              </div>
            </motion.div>

            {/* 右：画像 */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1771773603048-36a0208ebd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxreW90byUyMHN0cmVldCUyMG5pZ2h0JTIwbGFudGVybnMlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NzQ4NzQ1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Kyoto Street at Night"
                  className="w-full h-[360px] md:h-[620px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Map / Access Detail ===== */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <p className="font-en-medium text-[12px] tracking-[0.45em] text-[#B08A6A]">
              MAP
            </p>

            <h2 className="mt-5 text-[32px] md:text-[46px] tracking-[0.14em] text-[#123646] font-light">
              アクセス
            </h2>

            <p className="font-ja mt-6 text-[14px] md:text-[15px] leading-[2.1] tracking-[0.08em] text-[#123646]/72">
              烏丸・四条エリアから徒歩圏内です。ご来店の際は、下記地図と最寄り駅情報をご確認ください。
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-start">
            {/* 地図 */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              viewport={{ once: true }}
              className="border border-[#123646]/12 bg-white/60 p-3 md:p-4 shadow-[0_16px_44px_rgba(0,0,0,0.03)]"
            >
              <div className="h-[420px] md:h-[560px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.2979289094856!2d135.7610468!3d34.999246500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010952c0049d0b%3A0x96f043b1ae64f4fd!2sILHA%20FORMOSA!5e0!3m2!1sja!2sjp!4v1777695124840!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ILHA FORMOSA Map"
                ></iframe>
              </div>
            </motion.div>

            {/* アクセス詳細 */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/60 border border-[#123646]/10 px-6 md:px-8 py-8 md:py-9 shadow-[0_16px_44px_rgba(0,0,0,0.03)]">
                <div className="flex items-center gap-3 text-[#B08A6A] mb-7">
                  <Train className="w-5 h-5" />
                  <p className="font-en-medium text-[12px] tracking-[0.35em]">
                    STATION
                  </p>
                </div>

                <h3 className="text-[24px] md:text-[30px] tracking-[0.14em] text-[#123646] font-light mb-7">
                  最寄り駅
                </h3>

                <div className="divide-y divide-[#123646]/12">
                  <RouteRow station="四条烏丸駅" time="徒歩7分" />
                  <RouteRow station="地下鉄四条駅" time="徒歩7分" />
                  <RouteRow station="地下鉄五条駅" time="徒歩7分" />
                </div>

                <p className="font-ja mt-7 text-[13px] md:text-[14px] leading-[2] tracking-[0.08em] text-[#123646]/70">
                  道に迷われた際は、お気軽にお電話にてお問い合わせください。
                </p>
              </div>

              <div className="bg-white/60 border border-[#123646]/10 px-6 md:px-8 py-8 md:py-9 shadow-[0_16px_44px_rgba(0,0,0,0.03)]">
                <div className="flex items-center gap-3 text-[#B08A6A] mb-7">
                  <Car className="w-5 h-5" />
                  <p className="font-en-medium text-[12px] tracking-[0.35em]">
                    PARKING
                  </p>
                </div>

                <h3 className="text-[24px] md:text-[30px] tracking-[0.14em] text-[#123646] font-light mb-5">
                  お車でお越しの方
                </h3>

                <p className="font-ja text-[13px] md:text-[14px] leading-[2] tracking-[0.08em] text-[#123646]/70">
                  専用駐車場はございません。お車でお越しの方は、近隣の有料駐車場をご利用ください。
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  link,
}: {
  icon?: ReactNode;
  label: string;
  value: string;
  link?: string;
}) {
  return (
    <div className="py-7 grid md:grid-cols-[130px_1fr] gap-4 md:gap-8">
      <div className="flex items-center gap-3 text-[#B08A6A]">
        {icon && icon}
        <p className="font-ja text-[13px] tracking-[0.16em]">
          {label}
        </p>
      </div>

      {link ? (
        <a
          href={link}
          className="font-en-medium text-[15px] md:text-[17px] tracking-[0.08em] text-[#123646] hover:text-[#B08A6A] transition duration-300"
        >
          {value}
        </a>
      ) : (
        <p className="font-ja text-[14px] md:text-[15px] leading-[2] tracking-[0.08em] text-[#123646]/78">
          {value}
        </p>
      )}
    </div>
  );
}

function RouteRow({
  station,
  time,
}: {
  station: string;
  time: string;
}) {
  return (
    <div className="py-5 flex items-center justify-between gap-6">
      <p className="font-ja text-[14px] md:text-[15px] tracking-[0.1em] text-[#123646]">
        {station}
      </p>

      <p className="font-ja text-[13px] md:text-[14px] tracking-[0.12em] text-[#B08A6A] whitespace-nowrap">
        {time}
      </p>
    </div>
  );
}