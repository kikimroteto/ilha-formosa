import { Outlet, Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import "../../styles/index.css";

export function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isMvArea, setIsMvArea] = useState(true);

  useEffect(() => {
    setOpen(false);

    const scrollToHash = () => {
      if (!location.hash) {
        window.scrollTo(0, 0);
        return;
      }

      const targetId = decodeURIComponent(location.hash.replace("#", ""));
      const element = document.getElementById(targetId);

      if (!element) return;

      const offset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };

    const timer = window.setTimeout(scrollToHash, 250);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setIsMvArea(window.scrollY < window.innerHeight - 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navItems = [
    { en: "HOME", ja: "ホーム", path: "/" },
    { en: "MENU", ja: "お料理", path: "/menu" },
    { en: "ABOUT", ja: "私たちについて", path: "/about" },
    { en: "ACCESS", ja: "ご案内", path: "/access" },
    { en: "NEWS", ja: "お知らせ", path: "/news" },
  ];

  const menuItems = navItems.filter((item) => item.path !== "/");

  return (
    <div className="min-h-screen bg-transparent relative">
      {/* ===== 和紙テクスチャ（最背面） ===== */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: "url('/images/washi.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ===== 全コンテンツを前面に ===== */}
      <div className="relative z-10">
        {/* ===== ヘッダー ===== */}
        <nav className="absolute top-0 left-0 right-0 z-[1000] bg-transparent">
          <div className="w-full px-6 md:px-10 py-5 md:py-7">
            <div className="flex items-center justify-between">
              {/* ロゴ */}
              <Link to="/" className="block w-8" />

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ilha_formosa_kyoto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`mr-16 md:mr-20 text-white transition duration-500 hover:opacity-60 ${
                  open ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-[30px] md:h-[30px]"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.2"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* ハンバーガー */}
              <button
                className={`fixed top-5 right-6 md:top-8 md:right-12 z-[1001] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 ${
                  open || isMvArea ? "text-white" : "text-[#123646]"
                }`}
                onClick={() => setOpen(!open)}
                aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              >
                <div className="relative w-8 h-7 md:w-9 md:h-8">
                  <span
                    className={`absolute left-1/2 h-[4px] rounded-full bg-current transition-all duration-300 ease-out ${
                      open
                        ? "top-1/2 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45"
                        : "top-[3px] w-5 -translate-x-1/2"
                    }`}
                  />
                  <span
                    className={`absolute left-1/2 top-1/2 h-[4px] rounded-full bg-current transition-all duration-300 ease-out ${
                      open
                        ? "w-0 -translate-x-1/2 opacity-0"
                        : "w-5 -translate-x-1/2 -translate-y-1/2 opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-1/2 h-[4px] rounded-full bg-current transition-all duration-300 ease-out ${
                      open
                        ? "top-1/2 w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45"
                        : "bottom-[3px] w-5 -translate-x-1/2"
                    }`}
                  />
                </div>

                <span className="font-en-medium mt-1 text-[15px] md:text-[16px] tracking-[0.03em] leading-none">
                  {open ? "Close" : "Menu"}
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* ===== 全画面メニュー ===== */}
        <div
          className={`fixed inset-0 z-[999] text-white transition-opacity duration-700 ease-in-out ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{
            backgroundColor: "#123646",
          }}
        >
          {/* ===== PCメニュー ===== */}
          <div className="hidden md:flex min-h-screen px-20 py-16 relative">
            {/* 左側：ロゴ・Instagram */}
            <div className="w-1/2 flex flex-col items-center justify-center pr-8">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-center transition duration-500 hover:scale-105 hover:opacity-70"
              >
                <div className="text-[46px] tracking-[0.22em] leading-[1.05] font-semibold">
                  ILHA
                </div>
                <div className="text-[46px] tracking-[0.22em] leading-[1.05] font-semibold">
                  FORMOSA
                </div>
              </Link>

              <a
                href="https://www.instagram.com/ilha_formosa_kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-28 relative z-[1002] inline-flex items-center justify-center transition duration-500 hover:scale-110 hover:opacity-70"
                aria-label="Instagram"
              >
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.2"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            {/* 右側：メニュー */}
            <div className="w-1/2 flex items-center justify-start pl-8">
              <nav className="flex flex-col gap-12">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="group block transition duration-300 hover:translate-x-3 hover:opacity-70"
                  >
                    <div className="font-en-medium text-[34px] tracking-[0.08em] leading-none transition duration-300 group-hover:tracking-[0.16em]">
                      {item.en}
                    </div>
                    <div className="font-ja mt-3 text-[14px] tracking-[0.1em] leading-none font-semibold transition duration-300 group-hover:tracking-[0.16em]">
                      {item.ja}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="absolute left-0 right-0 bottom-10 text-center text-[14px] leading-none tracking-[0.01em] font-semibold text-white/95">
              © 2026 ILHA FORMOSA. All Rights Reserved.
            </div>
          </div>

          {/* ===== SPメニュー ===== */}
          <div className="md:hidden min-h-screen px-8 pt-8 pb-6 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="mb-12 transition duration-500 hover:opacity-70 hover:scale-105"
              >
                <div className="text-[23px] tracking-[0.20em] leading-[1.15] font-semibold">
                  ILHA
                </div>
                <div className="text-[23px] tracking-[0.20em] leading-[1.15] font-semibold">
                  FORMOSA
                </div>
              </Link>

              <nav className="flex flex-col items-center gap-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="group block text-center transition duration-300 hover:opacity-70 hover:scale-105"
                  >
                    <div className="font-en-medium text-[26px] tracking-[0.05em] leading-none transition duration-300 group-hover:tracking-[0.12em]">
                      {item.en}
                    </div>
                    <div className="font-ja mt-2 text-[11px] tracking-[0.08em] leading-none font-semibold transition duration-300 group-hover:tracking-[0.12em]">
                      {item.ja}
                    </div>
                  </Link>
                ))}
              </nav>

              <a
                href="https://www.instagram.com/ilha_formosa_kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 relative z-[1002] inline-flex items-center justify-center transition duration-500 hover:scale-110 hover:opacity-70"
                aria-label="Instagram"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1.2"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            <div className="pb-1 text-center text-[11px] leading-none tracking-[0.01em] font-semibold text-white/95">
              © 2026 ILHA FORMOSA. All Rights Reserved.
            </div>
          </div>
        </div>

        {/* ===== コンテンツ ===== */}
        <main>
          <Outlet />
        </main>

        {/* ===== フッター ===== */}
        <footer className="relative overflow-hidden bg-[#123646] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-7 md:py-14">
            {/* PC */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[0.8fr_1.2fr] gap-12 items-start">
                {/* 左：ロゴ・店舗情報 */}
                <div>
                  <div className="relative">
                    <Link
                      to="/"
                      className="inline-block transition duration-300 hover:opacity-70"
                    >
                      <div className="text-[34px] md:text-[38px] leading-[0.92] tracking-[0.06em] font-semibold">
                        ILHA
                      </div>
                      <div className="text-[34px] md:text-[38px] leading-[0.92] tracking-[0.06em] font-semibold">
                        FORMOSA
                      </div>
                      <p className="font-ja mt-4 text-[11px] tracking-[0.22em] text-white/82">
                        お茶とお酒と台湾料理
                      </p>
                    </Link>

                    <a
                      href="https://www.instagram.com/ilha_formosa_kyoto"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="absolute top-4 right-40 text-white transition duration-300 hover:opacity-70"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="5"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="17.5"
                          cy="6.5"
                          r="1.2"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="mt-9 border-t border-white/12 pt-8 font-ja text-[11px] leading-[1.95] tracking-[0.05em] text-white/72">
                    <p className="mb-2 text-[11px] tracking-[0.14em] text-white/88">
                      ご予約・お問い合わせ
                    </p>

                    <a
                      href="tel:05055975300"
                      className="inline-block text-[20px] tracking-[0.12em] font-en-medium text-white transition duration-300 hover:opacity-70"
                    >
                      080-4014-0164
                    </a>

                    <div className="mt-5 space-y-1">
                      <p>〒600-8401 京都府京都市下京区燈籠町592</p>
                      <p>ランチ 12:00 - 14:30 / ディナー 17:00 - 22:00</p>
                      <p>定休日: 水曜日</p>
                    </div>
                  </div>
                </div>

                {/* 右：ナビ */}
                <div>
                  <div className="grid grid-cols-4 gap-8 pt-3">
                    {/* MENU */}
                    <div>
                      <Link
                        to="/menu"
                        className="font-en-medium text-[16px] tracking-[0.18em] text-white transition duration-300 hover:opacity-70"
                      >
                        MENU
                      </Link>

                      <div className="mt-5 flex flex-col gap-3">
                        <Link
                          to="/menu#course"
                          className="font-en-medium text-[11px] tracking-[0.12em] text-white/68 transition duration-300 hover:text-white"
                        >
                          COURSE
                        </Link>
                        <Link
                          to="/menu#lunch"
                          className="font-en-medium text-[11px] tracking-[0.12em] text-white/68 transition duration-300 hover:text-white"
                        >
                          LUNCH
                        </Link>
                        <Link
                          to="/menu#tea-sweets"
                          className="font-en-medium text-[11px] tracking-[0.12em] text-white/68 transition duration-300 hover:text-white"
                        >
                          TEA / SWEETS
                        </Link>
                        <Link
                          to="/menu#drink"
                          className="font-en-medium text-[11px] tracking-[0.12em] text-white/68 transition duration-300 hover:text-white"
                        >
                          DRINK
                        </Link>
                      </div>
                    </div>

                    {/* ABOUT */}
                    <div>
                      <Link
                        to="/about"
                        className="font-en-medium text-[16px] tracking-[0.18em] text-white transition duration-300 hover:opacity-70"
                      >
                        ABOUT
                      </Link>

                      <div className="mt-5 flex flex-col gap-3">
                        <Link
                          to="/about#concept"
                          className="font-en-medium text-[11px] tracking-[0.12em] text-white/68 transition duration-300 hover:text-white"
                        >
                          CONCEPT
                        </Link>
                        <Link
                          to="/about#our-value"
                          className="font-en-medium text-[11px] tracking-[0.12em] text-white/68 transition duration-300 hover:text-white"
                        >
                          OUR VALUE
                        </Link>
                      </div>
                    </div>

                    {/* ACCESS */}
                    <div>
                      <Link
                        to="/access"
                        className="font-en-medium text-[16px] tracking-[0.18em] text-white transition duration-300 hover:opacity-70"
                      >
                        ACCESS
                      </Link>

                      <div className="mt-5 flex flex-col gap-3">
                        <Link
                          to="/access#information"
                          className="font-en-medium text-[11px] tracking-[0.12em] text-white/68 transition duration-300 hover:text-white"
                        >
                          INFORMATION
                        </Link>
                        <Link
                          to="/access#map"
                          className="font-en-medium text-[11px] tracking-[0.12em] text-white/68 transition duration-300 hover:text-white"
                        >
                          MAP
                        </Link>
                      </div>
                    </div>

                    {/* NEWS */}
                    <div>
                      <Link
                        to="/news"
                        className="font-en-medium text-[16px] tracking-[0.18em] text-white transition duration-300 hover:opacity-70"
                      >
                        NEWS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-9 border-t border-white/12 pt-5 flex justify-center">
                <p className="text-[10px] tracking-[0.02em] text-white/50 text-center">
                  Copyright © ILHA FORMOSA All Rights Reserved.
                </p>
              </div>
            </div>

            {/* SP */}
            <div className="md:hidden">
              {/* ロゴ＋Instagram */}
              <div className="relative flex justify-center">
                <Link
                  to="/"
                  className="inline-block text-center transition duration-300 hover:opacity-70"
                >
                  <div className="text-[23px] leading-[0.92] tracking-[0.06em] font-semibold">
                    ILHA
                  </div>
                  <div className="text-[23px] leading-[0.92] tracking-[0.06em] font-semibold">
                    FORMOSA
                  </div>
                  <p className="font-ja mt-2 text-[9px] tracking-[0.16em] text-white/82">
                    お茶とお酒と台湾料理
                  </p>
                </Link>

                <a
                  href="https://www.instagram.com/ilha_formosa_kyoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="absolute left-1/2 top-1 translate-x-[92px] inline-flex items-center justify-center text-white transition duration-300 hover:opacity-70"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1.2"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>

              {/* 店舗情報 */}
              <div className="mt-5 border-t border-white/12 pt-5 text-center font-ja text-[9px] leading-[1.75] tracking-[0.04em] text-white/72">
                <p className="mb-1.5 text-[9px] tracking-[0.12em] text-white/88">
                  ご予約・お問い合わせ
                </p>

                <a
                  href="tel:08040140164"
                  className="inline-block text-[16px] tracking-[0.1em] font-en-medium text-white transition duration-300 hover:opacity-70"
                >
                  080-4014-0164
                </a>

                <div className="mt-3 space-y-0.5">
                  <p>〒600-8401 京都府京都市下京区燈籠町592</p>
                  <p>ランチ 12:00 - 14:30 / ディナー 17:00 - 22:00</p>
                  <p>定休日: 水曜日</p>
                </div>
              </div>

              {/* ナビ：4列を等間隔 */}
              <div className="mt-5 border-t border-white/12 pt-5">
                <div className="grid grid-cols-4 gap-0 text-center">
                  {/* MENU */}
                  <div className="min-w-0 px-1">
                    <Link
                      to="/menu"
                      className="font-en-medium text-[10px] tracking-[0.12em] text-white transition duration-300 hover:opacity-70"
                    >
                      MENU
                    </Link>

                    <div className="mt-2.5 flex flex-col items-center gap-1.5">
                      <Link
                        to="/menu#course"
                        className="font-en-medium text-[8px] tracking-[0.04em] text-white/62 transition duration-300 hover:text-white"
                      >
                        COURSE
                      </Link>
                      <Link
                        to="/menu#lunch"
                        className="font-en-medium text-[8px] tracking-[0.04em] text-white/62 transition duration-300 hover:text-white"
                      >
                        LUNCH
                      </Link>
                      <Link
                        to="/menu#tea-sweets"
                        className="font-en-medium text-[8px] tracking-[0.04em] text-white/62 transition duration-300 hover:text-white"
                      >
                        TEA
                      </Link>
                      <Link
                        to="/menu#drink"
                        className="font-en-medium text-[8px] tracking-[0.04em] text-white/62 transition duration-300 hover:text-white"
                      >
                        DRINK
                      </Link>
                    </div>
                  </div>

                  {/* ABOUT */}
                  <div className="min-w-0 px-1">
                    <Link
                      to="/about"
                      className="font-en-medium text-[10px] tracking-[0.12em] text-white transition duration-300 hover:opacity-70"
                    >
                      ABOUT
                    </Link>

                    <div className="mt-2.5 flex flex-col items-center gap-1.5">
                      <Link
                        to="/about#concept"
                        className="font-en-medium text-[8px] tracking-[0.04em] text-white/62 transition duration-300 hover:text-white"
                      >
                        CONCEPT
                      </Link>
                      <Link
                        to="/about#our-value"
                        className="font-en-medium text-[8px] tracking-[0.04em] text-white/62 transition duration-300 hover:text-white"
                      >
                        VALUE
                      </Link>
                    </div>
                  </div>

                  {/* ACCESS */}
                  <div className="min-w-0 px-1">
                    <Link
                      to="/access"
                      className="font-en-medium text-[10px] tracking-[0.12em] text-white transition duration-300 hover:opacity-70"
                    >
                      ACCESS
                    </Link>

                    <div className="mt-2.5 flex flex-col items-center gap-1.5">
                      <Link
                        to="/access#information"
                        className="font-en-medium text-[8px] tracking-[0.04em] text-white/62 transition duration-300 hover:text-white"
                      >
                        INFO
                      </Link>
                      <Link
                        to="/access#map"
                        className="font-en-medium text-[8px] tracking-[0.04em] text-white/62 transition duration-300 hover:text-white"
                      >
                        MAP
                      </Link>
                    </div>
                  </div>

                  {/* NEWS */}
                  <div className="min-w-0 px-1">
                    <Link
                      to="/news"
                      className="font-en-medium text-[10px] tracking-[0.12em] text-white transition duration-300 hover:opacity-70"
                    >
                      NEWS
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-white/12 pt-3 text-center">
                <p className="text-[8px] tracking-[0.02em] text-white/45">
                  Copyright © ILHA FORMOSA All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}