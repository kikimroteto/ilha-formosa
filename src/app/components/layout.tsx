import { Outlet, Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import footerImage from "../../imports/image-4.png";
import "../../styles/fonts.css";
import "../../styles/index.css";
import "../../styles/tailwind.css";
import "../../styles/theme.css";

export function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isMvArea, setIsMvArea] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [location.pathname]);

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
              {/* ロゴ：フォントそのまま */}
              <Link
                to="/"
                className={`text-[19px] md:text-2xl tracking-[0.24em] md:tracking-[0.3em] text-white hover:text-white/70 transition duration-500 ${
                  open ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                ILHA FORMOSA
              </Link>

              {/* Instagram：ロゴと同じ階層。スクロールで流れる */}
              <a
                href="https://www.instagram.com/ilha_formosa_kyoto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`mr-16 md:mr-20 text-white hover:text-white/70 transition duration-500 ${
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

              {/* ハンバーガー：MVでは白、MV以外では濃紺、メニュー展開中は白 */}
              <button
                className={`fixed top-5 right-6 md:top-8 md:right-12 z-[1001] flex flex-col items-center justify-center transition-colors duration-300 ${
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
              {/* ロゴ：フォントそのまま */}
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-center"
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
                className="mt-28 relative z-[1002] inline-flex items-center justify-center"
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
                    className="block"
                  >
                    <div className="font-en-medium text-[34px] tracking-[0.08em] leading-none">
                      {item.en}
                    </div>
                    <div className="font-ja mt-3 text-[14px] tracking-[0.1em] leading-none font-semibold">
                      {item.ja}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            {/* コピーライト：フォントそのまま */}
            <div className="absolute left-0 right-0 bottom-10 text-center text-[14px] leading-none tracking-[0.01em] font-semibold text-white/95">
              © 2026 ILHA FORMOSA. All Rights Reserved.
            </div>
          </div>

          {/* ===== SPメニュー ===== */}
          <div className="md:hidden min-h-screen px-8 pt-8 pb-6 flex flex-col">
            {/* 中央コンテンツ */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              {/* ロゴ：フォントそのまま */}
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="mb-12"
              >
                <div className="text-[23px] tracking-[0.20em] leading-[1.15] font-semibold">
                  ILHA
                </div>
                <div className="text-[23px] tracking-[0.20em] leading-[1.15] font-semibold">
                  FORMOSA
                </div>
              </Link>

              {/* メニュー */}
              <nav className="flex flex-col items-center gap-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block text-center"
                  >
                    <div className="font-en-medium text-[26px] tracking-[0.05em] leading-none">
                      {item.en}
                    </div>
                    <div className="font-ja mt-2 text-[11px] tracking-[0.08em] leading-none font-semibold">
                      {item.ja}
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ilha_formosa_kyoto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 relative z-[1002] inline-flex items-center justify-center"
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

            {/* コピーライト：フォントそのまま */}
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
        <footer className="relative overflow-hidden bg-black text-white">
          {/* PC：右側画像 */}
          <div
            className="hidden md:block absolute inset-y-0 right-0 w-[55%] opacity-70"
            style={{
              backgroundImage: `url(${footerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* SP：全面背景画像 */}
          <div
            className="md:hidden absolute inset-0 opacity-55"
            style={{
              backgroundImage: `url(${footerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* PC用グラデーション */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black from-[38%] via-black/85 via-[52%] to-transparent to-[76%]" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* SP用 黒なじませ */}
          <div className="md:hidden absolute inset-0 bg-black/20" />
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/65" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10">
            {/* フッター上部ナビ */}
            <nav className="mb-8 md:mb-10">
              <div className="flex flex-nowrap items-center justify-center md:justify-start gap-x-5 md:gap-x-6 text-[10px] md:text-xs tracking-[0.14em] md:tracking-[0.18em] text-white/60 whitespace-nowrap">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="hover:text-white transition duration-300"
                  >
                    {item.ja}
                  </Link>
                ))}
              </div>
            </nav>

            {/* フッター本文 */}
            <div className="w-full md:w-[48%] text-center md:text-left">
              <h3 className="text-[28px] md:text-[36px] tracking-[0.35em] md:tracking-[0.45em] font-light mb-3">
                ILHA FORMOSA
              </h3>

              <p className="text-[10px] md:text-xs text-white/60 tracking-[0.35em] mb-1">
                ご予約・お問い合わせ
              </p>

              <div className="flex justify-center md:justify-start items-center gap-2 mb-5">
                <span className="text-base md:text-lg tracking-[0.25em] font-light">
                  050-5597-5300
                </span>
              </div>

              <div className="w-10 h-px bg-white/30 mx-auto md:mx-0 mb-5" />

              <div className="text-[11px] md:text-xs text-white/60 space-y-1 leading-relaxed">
                <p>〒600-8401 京都府京都市下京区燈籠町592</p>
                <p>ランチ 12:00 - 14:30 / ディナー 17:00 - 22:00</p>
                <p>定休日: 水曜日</p>
              </div>

              <div className="mt-8 text-[10px] text-white/40 tracking-wider">
                © 2026 ILHA FORMOSA. All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}