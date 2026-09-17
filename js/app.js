/* ============================================================
   Immocontact — Prototype "Tour de visites"
   Prototype cliquable, données mockées, pas de logique métier réelle.
   ============================================================ */

/* ---------------- Icons ---------------- */

const ICONS = {
  send: `<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  hourglass: `<path d="M6 2h12M6 22h12M6 2v5a6 6 0 0012 0V2M6 22v-5a6 6 0 0112-0v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  doc: `<path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" fill="none"/><path d="M9 12h6M9 16h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
  calendar: `<rect x="3" y="4.5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
  info: `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M12 11v5.5M12 8v.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
  search: `<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.7" fill="none"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>`,
  plus: `<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  chevronRight: `<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  chevronUp: `<path d="M18 15l-6-6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  chevronDown: `<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  home: `<path d="M4 11.5L12 4l8 7.5M6 10v9a1 1 0 001 1h3v-6h4v6h3a1 1 0 001-1v-9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  restaurant: `<path d="M8 3v6a2 2 0 002 2v10M8 3v6M6 3v6M10 3v6M17 3c-1.5 0-3 1.5-3 4s1.5 4 3 4v10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  pauseBars: `<rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>`,
  arrowUp: `<path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  arrowDown: `<path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  pencil: `<path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  trash: `<path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H7a2 2 0 01-2-2L4 6h16z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  x: `<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
  check: `<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  drag: { viewBox: '0 0 31 30', content: `<path d="M30.1842 11.4211C30.6348 11.4211 31 11.7863 31 12.2368C31 12.6874 30.6348 13.0526 30.1842 13.0526H0.815789C0.365241 13.0526 0 12.6874 0 12.2368C0 11.7863 0.365241 11.4211 0.815789 11.4211H30.1842Z" fill="currentColor"/><path d="M30.1842 16.3158C30.6348 16.3158 31 16.681 31 17.1316C31 17.5821 30.6348 17.9474 30.1842 17.9474H0.815789C0.365241 17.9474 0 17.5821 0 17.1316C0 16.681 0.365241 16.3158 0.815789 16.3158H30.1842Z" fill="currentColor"/><path d="M14.6336 1.5C15.0185 0.833332 15.9807 0.833334 16.3656 1.5L19.579 7.06579C19.9639 7.73246 19.4828 8.56579 18.713 8.56579H12.2862C11.5164 8.56579 11.0353 7.73246 11.4202 7.06579L14.6336 1.5Z" fill="currentColor"/><path d="M16.3664 27.8684C15.9815 28.5351 15.0193 28.5351 14.6344 27.8684L11.421 22.3026C11.0361 21.636 11.5172 20.8026 12.287 20.8026H18.7138C19.4836 20.8026 19.9647 21.636 19.5798 22.3026L16.3664 27.8684Z" fill="currentColor"/>` },
  pin: `<path d="M12 21.5s7-6.1 7-11.2A7 7 0 005 10.3c0 5.1 7 11.2 7 11.2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" fill="none"/><circle cx="12" cy="10" r="2.4" fill="currentColor"/>`,
  car: `<path d="M5 17h14M5 17a2 2 0 104 0M15 17a2 2 0 104 0M3 17l1.5-5.5A2 2 0 016.4 10h11.2a2 2 0 011.9 1.5L21 17M6 10l1-4h10l1 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  warning: `<path d="M12 9v4M12 17h.01M10.3 3.9L2.6 18a1.6 1.6 0 001.4 2.4h16a1.6 1.6 0 001.4-2.4L13.7 3.9a1.6 1.6 0 00-2.8 0z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  mapPinOutline: `<path d="M12 22s7-7.4 7-12.5A7 7 0 105 9.5C5 14.6 12 22 12 22z" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.6" fill="none"/>`,
  arrowLeft: `<path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  cart: `<circle cx="9" cy="20" r="1.4" fill="currentColor"/><circle cx="18" cy="20" r="1.4" fill="currentColor"/><path d="M2 3h2l2.6 12.6a2 2 0 002 1.6h8.9a2 2 0 002-1.6L21 7H6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  sync: `<path d="M3 12a9 9 0 0115.3-6.4M21 12a9 9 0 01-15.3 6.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M18.6 3.6v4.2h-4.2M5.4 20.4v-4.2h4.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  layers: `<path d="M12 3l8.5 4.5L12 12 3.5 7.5 12 3z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M3.5 12.5L12 17l8.5-4.5M3.5 16.5L12 21l8.5-4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  star: { viewBox: '0 0 27 26', content: `<path d="M13.1016 0.5C13.8575 0.5 14.5467 0.933553 14.873 1.61523L17.7061 7.49512L24.0322 8.4375L24.0332 8.43848C24.7731 8.55044 25.3802 9.07198 25.6123 9.78027C25.8454 10.4919 25.6556 11.2766 25.1279 11.8027L20.5322 16.3887L21.623 22.873V22.875C21.7455 23.6167 21.4391 24.3637 20.834 24.8076C20.222 25.2564 19.4148 25.3039 18.7539 24.9521L18.752 24.9502L13.1064 21.9092L7.46094 24.9502L7.45898 24.9521C6.79541 25.3053 5.99013 25.2494 5.38184 24.8096C4.77244 24.3687 4.46771 23.6146 4.58984 22.875V22.874L5.6748 16.3887L1.08008 11.8027C0.550316 11.2744 0.369538 10.4904 0.594727 9.78418C0.822466 9.07009 1.43758 8.55008 2.1748 8.43848L2.17578 8.4375L8.49707 7.49512L11.3311 1.61523L11.332 1.61426C11.6616 0.936913 12.3428 0.500156 13.1016 0.5Z" stroke="currentColor"/>` },
};
// Les icônes sont décoratives : le nom d'un bouton vient de son texte visible
// ou de son aria-label, jamais du dessin. `aria-hidden` évite qu'un lecteur
// d'écran annonce un graphique sans nom au milieu d'un libellé.
const icon = (name, cls = '') => {
  const def = ICONS[name];
  if (typeof def === 'object') return `<svg class="${cls}" viewBox="${def.viewBox}" fill="none" aria-hidden="true">${def.content}</svg>`;
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${def || ''}</svg>`;
};

/* Tour card glyph: multi-house icon with a fused status badge (provided design asset). */
const TOUR_ICON_HOUSES = `<path d="M14.0661 23.9069C13.7741 24.1079 13.4601 24.1575 13.1076 24.141C13.1048 25.5925 13.1186 27.0138 13.0993 28.4598C13.0855 29.231 12.4272 29.8783 11.656 29.8921C10.8848 29.9058 10.1108 29.8976 9.33686 29.8948C9.08897 29.8948 8.92371 29.7158 8.92371 29.4514C8.92096 28.7986 8.92371 28.1458 8.92096 27.493C8.92096 27.0634 8.92096 26.6309 8.92096 26.2012C8.9182 25.7578 8.64001 25.4741 8.19105 25.4686C7.76964 25.4631 7.34822 25.4631 6.92681 25.4686C6.48887 25.4741 6.20792 25.7605 6.20792 26.1985C6.20517 27.2644 6.20517 28.3276 6.20517 29.3935C6.20517 29.7488 6.05643 29.8976 5.69837 29.8976C4.99876 29.8976 4.29916 29.8976 3.59955 29.8976C2.67685 29.8948 2.02131 29.2503 2.0158 28.3248C2.0103 26.9311 2.01305 25.5347 2.01305 24.141C0.735032 24.2622 -0.00864168 22.8244 0.905802 21.8962C2.79528 20.0067 4.68477 18.1172 6.57701 16.2305C6.69544 16.1066 6.83316 16.0046 6.98465 15.922C7.42534 15.7017 8.11118 15.7705 8.52984 16.2002C9.59026 17.2882 10.6727 18.3541 11.7469 19.4283C12.5705 20.2546 13.3885 21.0864 14.2258 21.9017C14.7767 22.4388 14.7244 23.4689 14.0661 23.9069Z" stroke="#213163"/><path d="M14.0661 8.60688C13.7741 8.80795 13.4601 8.85753 13.1076 8.841C13.1048 10.2925 13.1186 11.7138 13.0993 13.1598C13.0855 13.931 12.4272 14.5783 11.656 14.5921C10.8848 14.6059 10.1108 14.5976 9.33686 14.5948C9.08897 14.5948 8.92371 14.4158 8.92371 14.1514C8.92096 13.4986 8.92371 12.8458 8.92096 12.193C8.92096 11.7634 8.92096 11.3309 8.92096 10.9013C8.9182 10.4578 8.64001 10.1741 8.19105 10.1686C7.76964 10.1631 7.34822 10.1631 6.92681 10.1686C6.48887 10.1741 6.20792 10.4606 6.20792 10.8985C6.20517 11.9644 6.20517 13.0276 6.20517 14.0935C6.20517 14.4489 6.05643 14.5976 5.69837 14.5976C4.99876 14.5976 4.29916 14.5976 3.59955 14.5976C2.67685 14.5948 2.02131 13.9503 2.0158 13.0249C2.0103 11.6312 2.01305 10.2347 2.01305 8.841C0.735032 8.96219 -0.00864168 7.52442 0.905802 6.59621C2.79528 4.70673 4.68477 2.81724 6.57701 0.930514C6.69544 0.806568 6.83316 0.704658 6.98465 0.622027C7.42534 0.401679 8.11118 0.470538 8.52984 0.900216C9.59026 1.98818 10.6727 3.05412 11.7469 4.12831C12.5705 4.95462 13.3885 5.78643 14.2258 6.60172C14.7767 7.13882 14.7244 8.16894 14.0661 8.60688Z" stroke="#213163"/><path d="M29.9661 8.60688C29.6741 8.80795 29.3601 8.85753 29.0076 8.841C29.0048 10.2925 29.0186 11.7138 28.9993 13.1598C28.9855 13.931 28.3272 14.5783 27.556 14.5921C26.7848 14.6059 26.0108 14.5976 25.2369 14.5948C24.989 14.5948 24.8237 14.4158 24.8237 14.1514C24.8209 13.4986 24.8237 12.8458 24.8209 12.193C24.8209 11.7634 24.8209 11.3309 24.8209 10.9013C24.8182 10.4578 24.54 10.1741 24.091 10.1686C23.6696 10.1631 23.2482 10.1631 22.8268 10.1686C22.3889 10.1741 22.1079 10.4606 22.1079 10.8985C22.1052 11.9644 22.1052 13.0276 22.1052 14.0935C22.1052 14.4489 21.9564 14.5976 21.5984 14.5976C20.8988 14.5976 20.1992 14.5976 19.4995 14.5976C18.5768 14.5948 17.9213 13.9503 17.9158 13.0249C17.9103 11.6312 17.913 10.2347 17.913 8.841C16.635 8.96219 15.8914 7.52442 16.8058 6.59621C18.6953 4.70673 20.5848 2.81724 22.477 0.930514C22.5954 0.806568 22.7332 0.704658 22.8846 0.622027C23.3253 0.401679 24.0112 0.470538 24.4298 0.900216C25.4903 1.98818 26.5727 3.05412 27.6469 4.12831C28.4705 4.95462 29.2885 5.78643 30.1258 6.60172C30.6767 7.13882 30.6244 8.16894 29.9661 8.60688Z" stroke="#213163"/>`;
const TOUR_BADGE_WARNING = `<path d="M23.4528 30.4998C25.3226 30.4998 27.1158 29.757 28.4379 28.4349C29.7601 27.1128 30.5028 25.3196 30.5028 23.4498C30.5028 21.58 29.7601 19.7868 28.4379 18.4647C27.1158 17.1426 25.3226 16.3998 23.4528 16.3998C21.5831 16.3998 19.7899 17.1426 18.4677 18.4647C17.1456 19.7868 16.4028 21.58 16.4028 23.4498C16.4028 25.3196 17.1456 27.1128 18.4677 28.4349C19.7899 29.757 21.5831 30.4998 23.4528 30.4998ZM21.079 20.952C21.2965 20.3379 21.8804 19.9248 22.533 19.9248H24.1386C25.0997 19.9248 25.8763 20.7042 25.8763 21.6625C25.8763 22.2849 25.543 22.8605 25.0033 23.1717L24.1138 23.6811C24.1083 24.0391 23.8136 24.3311 23.4528 24.3311C23.0866 24.3311 22.7919 24.0364 22.7919 23.6701V23.2983C22.7919 23.0615 22.9186 22.844 23.1251 22.7255L24.3451 22.026C24.4745 21.9517 24.5544 21.814 24.5544 21.6653C24.5544 21.434 24.3671 21.2494 24.1386 21.2494H22.533C22.4394 21.2494 22.3568 21.3073 22.3265 21.3954L22.3155 21.4284C22.1943 21.7727 21.8143 21.9517 21.4728 21.8305C21.1313 21.7093 20.9495 21.3293 21.0707 20.9878L21.0817 20.9548L21.079 20.952ZM22.5716 26.0936C22.5716 25.8598 22.6644 25.6357 22.8297 25.4704C22.995 25.3052 23.2191 25.2123 23.4528 25.2123C23.6866 25.2123 23.9107 25.3052 24.076 25.4704C24.2412 25.6357 24.3341 25.8598 24.3341 26.0936C24.3341 26.3273 24.2412 26.5514 24.076 26.7167C23.9107 26.882 23.6866 26.9748 23.4528 26.9748C23.2191 26.9748 22.995 26.882 22.8297 26.7167C22.6644 26.5514 22.5716 26.3273 22.5716 26.0936Z" fill="#FFC90E"/>`;
const TOUR_BADGE_CONFIRMED = `<path d="M23.4528 30.4998C25.3226 30.4998 27.1158 29.757 28.4379 28.4349C29.7601 27.1128 30.5028 25.3196 30.5028 23.4498C30.5028 21.58 29.7601 19.7868 28.4379 18.4647C27.1158 17.1426 25.3226 16.3998 23.4528 16.3998C21.5831 16.3998 19.7899 17.1426 18.4677 18.4647C17.1456 19.7868 16.4028 21.58 16.4028 23.4498C16.4028 25.3196 17.1456 27.1128 18.4677 28.4349C19.7899 29.757 21.5831 30.4998 23.4528 30.4998Z" fill="#28A745"/><path d="M20.4 23.6L22.6 25.8L26.6 21.3" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
const tourIconSvg = (status) => `<svg class="tour-card-glyph" viewBox="0 0 31 31" fill="none">${TOUR_ICON_HOUSES}${status === 'confirmed' ? TOUR_BADGE_CONFIRMED : TOUR_BADGE_WARNING}</svg>`;

/* Stop card glyph for confirmed visits: single house with a fused green-check badge (provided design asset). */
const STOP_ICON_CONFIRMED_SVG = `<svg class="stop-glyph-confirmed" viewBox="0 0 31 25" fill="none">
  <path d="M22.8946 13.8827C22.4127 14.2146 21.8943 14.2965 21.3123 14.2692C21.3078 16.6654 21.3305 19.0115 21.2987 21.3986C21.276 22.6717 20.1893 23.7402 18.9162 23.7629C17.6431 23.7856 16.3654 23.772 15.0878 23.7675C14.6786 23.7675 14.4058 23.4719 14.4058 23.0354C14.4012 21.9578 14.4058 20.8802 14.4012 19.8027C14.4012 19.0934 14.4012 18.3795 14.4012 17.6702C14.3967 16.9382 13.9374 16.4698 13.1963 16.4608C12.5007 16.4517 11.805 16.4517 11.1093 16.4608C10.3864 16.4698 9.92262 16.9427 9.92262 17.6657C9.91807 19.4253 9.91807 21.1803 9.91807 22.9399C9.91807 23.5265 9.67255 23.772 9.08146 23.772C7.92658 23.772 6.77169 23.772 5.6168 23.772C4.09363 23.7675 3.01149 22.7035 3.0024 21.1758C2.9933 18.8751 2.99785 16.5699 2.99785 14.2692C0.888136 14.4693 -0.339499 12.0958 1.17004 10.5636C4.28914 7.44446 7.40824 4.32535 10.5319 1.2108C10.7274 1.00619 10.9547 0.837962 11.2048 0.701558C11.9323 0.337814 13.0645 0.451484 13.7556 1.16078C15.5061 2.95677 17.293 4.71638 19.0662 6.48963C20.4257 7.85367 21.7761 9.2268 23.1583 10.5727C24.0677 11.4593 23.9813 13.1598 22.8946 13.8827Z" stroke="#1A2740"/>
  <path d="M24.4223 23.7756C26.0342 23.7756 27.58 23.1353 28.7198 21.9955C29.8596 20.8558 30.4999 19.3099 30.4999 17.698C30.4999 16.0862 29.8596 14.5403 28.7198 13.4005C27.58 12.2608 26.0342 11.6205 24.4223 11.6205C22.8104 11.6205 21.2646 12.2608 20.1248 13.4005C18.985 14.5403 18.3447 16.0862 18.3447 17.698C18.3447 19.3099 18.985 20.8558 20.1248 21.9955C21.2646 23.1353 22.8104 23.7756 24.4223 23.7756ZM27.105 16.5822L24.0662 19.621C23.843 19.8442 23.4822 19.8442 23.2614 19.621L21.742 18.1016C21.5188 17.8785 21.5188 17.5176 21.742 17.2968C21.9652 17.076 22.326 17.0737 22.5468 17.2968L23.6626 18.4126L26.2978 15.7751C26.521 15.5519 26.8818 15.5519 27.1026 15.7751C27.3234 15.9982 27.3258 16.3591 27.1026 16.5799L27.105 16.5822Z" fill="#4CBB17"/>
</svg>`;

/* Stop card glyph for visits pending confirmation: single house with a fused warning badge (provided design asset). */
const STOP_ICON_PENDING_SVG = `<svg class="stop-glyph-pending" viewBox="0 0 31 26" fill="none">
  <path d="M22.8969 13.884C22.4148 14.216 21.8965 14.2978 21.3144 14.2706C21.3099 16.667 21.3326 19.0133 21.3008 21.4006C21.278 22.6739 20.1912 23.7425 18.918 23.7652C17.6448 23.788 16.367 23.7743 15.0892 23.7698C14.68 23.7698 14.4071 23.4742 14.4071 23.0377C14.4026 21.96 14.4071 20.8823 14.4026 19.8046C14.4026 19.0952 14.4026 18.3813 14.4026 17.6719C14.398 16.9398 13.9388 16.4714 13.1976 16.4623C12.5018 16.4532 11.8061 16.4532 11.1104 16.4623C10.3874 16.4714 9.92355 16.9443 9.92355 17.6674C9.91901 19.4271 9.91901 21.1824 9.91901 22.9422C9.91901 23.5288 9.67346 23.7743 9.08231 23.7743C7.92731 23.7743 6.77231 23.7743 5.61731 23.7743C4.09398 23.7698 3.01174 22.7057 3.00264 21.1778C2.99355 18.8769 2.9981 16.5715 2.9981 14.2706C0.888174 14.4706 -0.339583 12.097 1.1701 10.5646C4.28952 7.44515 7.40893 4.32573 10.5329 1.21087C10.7284 1.00624 10.9558 0.837995 11.2059 0.701578C11.9334 0.337798 13.0657 0.451479 13.7569 1.16085C15.5076 2.95701 17.2946 4.7168 19.0681 6.49022C20.4277 7.8544 21.7782 9.22767 23.1606 10.5737C24.07 11.4604 23.9836 13.161 22.8969 13.884Z" stroke="#1A2740"/>
  <path d="M24.4249 25.4789C26.0369 25.4789 27.5829 24.8385 28.7228 23.6986C29.8627 22.5587 30.5031 21.0127 30.5031 19.4007C30.5031 17.7887 29.8627 16.2427 28.7228 15.1028C27.5829 13.9629 26.0369 13.3225 24.4249 13.3225C22.8128 13.3225 21.2668 13.9629 20.1269 15.1028C18.9871 16.2427 18.3467 17.7887 18.3467 19.4007C18.3467 21.0127 18.9871 22.5587 20.1269 23.6986C21.2668 24.8385 22.8128 25.4789 24.4249 25.4789ZM22.3782 17.2472C22.5658 16.7177 23.0691 16.3616 23.6319 16.3616H25.0161C25.8447 16.3616 26.5142 17.0335 26.5142 17.8598C26.5142 18.3964 26.227 18.8926 25.7616 19.1609L24.9947 19.6001C24.9899 19.9088 24.7359 20.1605 24.4249 20.1605C24.1091 20.1605 23.855 19.9064 23.855 19.5906V19.2701C23.855 19.0659 23.9643 18.8784 24.1423 18.7763L25.1941 18.1732C25.3057 18.1091 25.3746 17.9904 25.3746 17.8622C25.3746 17.6627 25.2131 17.5036 25.0161 17.5036H23.6319C23.5511 17.5036 23.4799 17.5535 23.4538 17.6295L23.4443 17.658C23.3398 17.9548 23.0122 18.1091 22.7178 18.0046C22.4233 17.9001 22.2666 17.5725 22.3711 17.2781L22.3806 17.2496L22.3782 17.2472ZM23.6651 21.68C23.6651 21.4785 23.7451 21.2853 23.8876 21.1428C24.0301 21.0003 24.2234 20.9202 24.4249 20.9202C24.6264 20.9202 24.8196 21.0003 24.9621 21.1428C25.1046 21.2853 25.1846 21.4785 25.1846 21.68C25.1846 21.8815 25.1046 22.0748 24.9621 22.2173C24.8196 22.3597 24.6264 22.4398 24.4249 22.4398C24.2234 22.4398 24.0301 22.3597 23.8876 22.2173C23.7451 22.0748 23.6651 21.8815 23.6651 21.68Z" fill="#FFC90E"/>
</svg>`;

/* Stop card glyph for refused visits: single house with a fused red-cross badge (provided design asset). */
const STOP_ICON_REFUSED_SVG = `<svg class="stop-glyph-refused" viewBox="0 0 31 27" fill="none">
  <path d="M22.8969 13.884C22.4148 14.2159 21.8965 14.2978 21.3144 14.2705C21.3099 16.6669 21.3326 19.0133 21.3008 21.4006C21.278 22.6738 20.1912 23.7424 18.918 23.7652C17.6448 23.7879 16.367 23.7742 15.0892 23.7697C14.68 23.7697 14.4071 23.4741 14.4071 23.0376C14.4026 21.9599 14.4071 20.8822 14.4026 19.8045C14.4026 19.0951 14.4026 18.3812 14.4026 17.6718C14.398 16.9397 13.9388 16.4714 13.1976 16.4623C12.5018 16.4532 11.8061 16.4532 11.1104 16.4623C10.3874 16.4714 9.92355 16.9443 9.92355 17.6673C9.91901 19.4271 9.91901 21.1823 9.91901 22.9421C9.91901 23.5287 9.67346 23.7742 9.08231 23.7742C7.92731 23.7742 6.77231 23.7742 5.61731 23.7742C4.09398 23.7697 3.01174 22.7056 3.00264 21.1778C2.99355 18.8769 2.9981 16.5714 2.9981 14.2705C0.888174 14.4706 -0.339583 12.0969 1.1701 10.5645C4.28952 7.44508 7.40893 4.32567 10.5329 1.21081C10.7284 1.00618 10.9558 0.837934 11.2059 0.701517C11.9334 0.337737 13.0657 0.451418 13.7569 1.16079C15.5076 2.95695 17.2946 4.71674 19.0681 6.49016C20.4277 7.85434 21.7782 9.2276 23.1606 10.5736C24.07 11.4603 23.9836 13.161 22.8969 13.884Z" stroke="#1A2740"/>
  <path d="M24.4249 26.6561C26.0369 26.6561 27.5829 26.0158 28.7228 24.8759C29.8627 23.736 30.5031 22.19 30.5031 20.5779C30.5031 18.9659 29.8627 17.4199 28.7228 16.28C27.5829 15.1401 26.0369 14.4998 24.4249 14.4998C22.8128 14.4998 21.2668 15.1401 20.1269 16.28C18.9871 17.4199 18.3467 18.9659 18.3467 20.5779C18.3467 22.19 18.9871 23.736 20.1269 24.8759C21.2668 26.0158 22.8128 26.6561 24.4249 26.6561ZM22.5017 18.6548C22.7249 18.4316 23.0858 18.4316 23.3066 18.6548L24.4225 19.7707L25.5384 18.6548C25.7616 18.4316 26.1225 18.4316 26.3433 18.6548C26.5641 18.878 26.5665 19.2388 26.3433 19.4597L25.2274 20.5756L26.3433 21.6915C26.5665 21.9147 26.5665 22.2756 26.3433 22.4964C26.1201 22.7172 25.7592 22.7196 25.5384 22.4964L24.4225 21.3805L23.3066 22.4964C23.0834 22.7196 22.7225 22.7196 22.5017 22.4964C22.2809 22.2732 22.2785 21.9123 22.5017 21.6915L23.6176 20.5756L22.5017 19.4597C22.2785 19.2365 22.2785 18.8756 22.5017 18.6548Z" fill="#C8102E"/>
</svg>`;

/* Bac à sable : la maison seule, sans badge. Tant que la demande n'est pas
   partie, la propriété n'a pas d'état à montrer — elle est simplement retenue.
   Même tracé et même cadrage que les autres glyphes, pour que les maisons
   s'alignent dans la liste ; seule la zone du badge reste vide. */
const STOP_ICON_SANDBOX_SVG = `<svg class="stop-glyph-sandbox" viewBox="0 0 31 26" fill="none">
  <path d="M22.8969 13.884C22.4148 14.216 21.8965 14.2978 21.3144 14.2706C21.3099 16.667 21.3326 19.0133 21.3008 21.4006C21.278 22.6739 20.1912 23.7425 18.918 23.7652C17.6448 23.788 16.367 23.7743 15.0892 23.7698C14.68 23.7698 14.4071 23.4742 14.4071 23.0377C14.4026 21.96 14.4071 20.8823 14.4026 19.8046C14.4026 19.0952 14.4026 18.3813 14.4026 17.6719C14.398 16.9398 13.9388 16.4714 13.1976 16.4623C12.5018 16.4532 11.8061 16.4532 11.1104 16.4623C10.3874 16.4714 9.92355 16.9443 9.92355 17.6674C9.91901 19.4271 9.91901 21.1824 9.91901 22.9422C9.91901 23.5288 9.67346 23.7743 9.08231 23.7743C7.92731 23.7743 6.77231 23.7743 5.61731 23.7743C4.09398 23.7698 3.01174 22.7057 3.00264 21.1778C2.99355 18.8769 2.9981 16.5715 2.9981 14.2706C0.888174 14.4706 -0.339583 12.097 1.1701 10.5646C4.28952 7.44515 7.40893 4.32573 10.5329 1.21087C10.7284 1.00624 10.9558 0.837995 11.2059 0.701578C11.9334 0.337798 13.0657 0.451479 13.7569 1.16085C15.5076 2.95701 17.2946 4.7168 19.0681 6.49022C20.4277 7.8544 21.7782 9.22767 23.1606 10.5737C24.07 11.4604 23.9836 13.161 22.8969 13.884Z" stroke="#1A2740"/>
</svg>`;

// Un glyphe par réponse du courtier, quand le design en fournit un. Les statuts
// sans glyphe propre retombent sur le badge d'attente : ajouter le leur revient
// à ajouter une ligne ici.
const STOP_GLYPHS = {
  sandbox: STOP_ICON_SANDBOX_SVG,
  confirmed: STOP_ICON_CONFIRMED_SVG,
  refused: STOP_ICON_REFUSED_SVG,
  cancelled: STOP_ICON_REFUSED_SVG,
};
function stopGlyph(status) { return STOP_GLYPHS[status] || STOP_ICON_PENDING_SVG; }

/* ---------------- Helpers ---------------- */

function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}
function uid() { return 'id' + Math.random().toString(36).slice(2, 10); }
function esc(str) { return (str || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

function minutesToLabel(mins) {
  let h = Math.floor(mins / 60) % 24;
  let m = mins % 60;
  return `${String(h).padStart(2, '0')}h${String(m).padStart(2, '0')}`;
}
function timeToMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}
const TIME_OPTIONS = (() => {
  const out = [];
  for (let h = 7; h <= 20; h++) {
    for (let m of [0, 15, 30, 45]) {
      out.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    }
  }
  return out;
})();

const MONTHS_FR = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
function formatDateLong(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return `${d.getDate()} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;
}
function formatDateGroup(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return `${d.getDate()} ${MONTHS_FR[d.getMonth()][0].toUpperCase()}${MONTHS_FR[d.getMonth()].slice(1)} ${d.getFullYear()}`;
}
// Date locale, pas UTC : `toISOString` bascule au jour suivant dès 20 h à
// Montréal, ce qui rangeait un tour daté d'aujourd'hui dans les tours passés.
// Le champ date du formulaire parle en jours de calendrier, pas en instants.
function todayPlus(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

// Mêmes règles que `todayPlus`, mais depuis une date de référence arbitraire —
// nécessaire pour naviguer le calendrier de disponibilité semaine par semaine
// sans repartir d'aujourd'hui à chaque pas.
function isoDate(d) {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
function addDaysISO(iso, n) {
  const d = new Date(iso + 'T00:00:00');
  d.setDate(d.getDate() + n);
  return isoDate(d);
}
// Semaine calée sur dimanche, comme la maquette (Dim, Lun, Mar...).
function weekStartISO(iso) {
  const d = new Date(iso + 'T00:00:00');
  d.setDate(d.getDate() - d.getDay());
  return isoDate(d);
}
function minutesToHHMM(mins) {
  return `${String(Math.floor(mins / 60)).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}`;
}
function capFirst(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

/* ---------------- Mock data ---------------- */

const THUMB_IMAGES = ['assets/house1.png', 'assets/house2.png', 'assets/house3.png', 'assets/house4.png'];
function thumbFor(mls, address) {
  const idx = MLS_POOL.findIndex(p => p.mls === mls);
  return THUMB_IMAGES[(idx >= 0 ? idx : hashStr(address || '')) % THUMB_IMAGES.length];
}

const BUYERS = [
  { id: 'b1', prenom: 'François', nom: 'Morin', email: 'f.morin@email.com', tel: '(514) 111-2233' },
  { id: 'b2', prenom: 'Julien', nom: 'Lefevre', email: 'j.lefevre@email.com', tel: '(514) 222-3344' },
  { id: 'b3', prenom: 'Sophie', nom: 'Dubois', email: 's.dubois@email.com', tel: '(438) 333-4455' },
  { id: 'b4', prenom: 'Antoine', nom: 'Martin', email: 'a.martin@email.com', tel: '(450) 444-5566' },
  { id: 'b5', prenom: 'Claire', nom: 'Bernard', email: 'c.bernard@email.com', tel: '(514) 555-6677' },
  { id: 'b6', prenom: 'Marc', nom: 'Tremblay', email: 'm.tremblay@email.com', tel: '(514) 666-7788' },
  { id: 'b7', prenom: 'Isabelle', nom: 'Roy', email: 'i.roy@email.com', tel: '(438) 777-8899' },
];

const COURTIERS_INSCRIPTEURS = ['Marie-Ève Gagnon', 'Patrick Simard', 'Nathalie Côté', 'Éric Bouchard', 'Sylvie Paquette'];

// Annuaire ImmoContact. Une demande de visite doit partir à un courtier inscrit,
// donc la recherche ne propose que cet annuaire — un nom tapé à la main n'est
// jamais retenu. Séparé du pool d'attribution ci-dessus : y ajouter un nom
// réattribuerait sinon le courtier de toutes les fiches existantes.
const COURTIER_DIRECTORY = [
  { nom: 'Marie-Ève Gagnon', bureau: 'Montréal' },
  { nom: 'Patrick Simard', bureau: 'Laval' },
  { nom: 'Nathalie Côté', bureau: 'Longueuil' },
  { nom: 'Éric Bouchard', bureau: 'Boucherville' },
  { nom: 'Sylvie Paquette', bureau: 'Brossard' },
  { nom: 'Jean-François Tremblay', bureau: 'Saint-Lambert' },
  { nom: 'Caroline Lévesque', bureau: 'Repentigny' },
  { nom: 'Martin Pelletier', bureau: 'Terrebonne' },
  { nom: 'Isabelle Fortin', bureau: 'Montréal' },
  { nom: 'Sébastien Roy', bureau: 'Laval' },
  { nom: 'Geneviève Bergeron', bureau: 'Saint-Jérôme' },
  { nom: 'Alain Desjardins', bureau: 'Vaudreuil-Dorion' },
];

function courtierEntry(nom) {
  return COURTIER_DIRECTORY.find(c => c.nom === nom) || null;
}
// Recherche par nom, prénom ou bureau, accents et casse ignorés : « cote »
// trouve « Nathalie Côté ».
function searchCourtiers(q) {
  const needle = normalizeText(q).trim();
  if (!needle) return [];
  return COURTIER_DIRECTORY
    .filter(c => normalizeText(c.nom + ' ' + c.bureau).includes(needle))
    .slice(0, 6);
}
function initialsOf(nom) {
  return (nom || '').split(/[\s-]+/).map(w => w[0]).filter(Boolean).join('').slice(0, 2).toUpperCase();
}

// Coordinates are approximate real positions for each municipality, so the map
// and the distance-based optimisation behave believably. A real integration
// would geocode the address instead of carrying lat/lng in the listing.
const MLS_POOL = [
  { mls: '18234567', address: '500 Rue D\'Iberville, Montréal, QC H2H 2S6', lat: 45.5400, lng: -73.5750 },
  { mls: '18234599', address: '515 Boul. Lacombe, Repentigny, QC J6A 1E5', lat: 45.7423, lng: -73.4500 },
  { mls: '18234612', address: '214 Rue des Oranges, Montréal, QC H2H 2S6', lat: 45.5450, lng: -73.6200 },
  { mls: '18234671', address: '500 Rue d\'Avaugour, Boucherville, QC J4B 5E7', lat: 45.5906, lng: -73.4364 },
  { mls: '18234733', address: '123 Avenue des Étoiles, Montréal, QC H3C 1A2', lat: 45.4720, lng: -73.5560 },
  { mls: '18234845', address: '456 Boulevard de la Liberté, Québec, QC G1V 2M2', lat: 46.7700, lng: -71.2800 },
  { mls: '18234902', address: '789 Chemin du Bonheur, Gatineau, QC J8X 3G5', lat: 45.4300, lng: -75.7200, inactive: true },
  { mls: '18235011', address: '567 Boulevard des Oranges, Lévis, QC G6V 4T4', lat: 46.8033, lng: -71.1779 },
  { mls: '18235078', address: '567 Boulevard des Citrons, Boucherville, QC J4B 7K1', lat: 45.6050, lng: -73.4180 },
  { mls: '18235144', address: '567 Boulevard des Oliviers, Longueuil, QC J4K 2M9', lat: 45.5312, lng: -73.5182 },
  { mls: '18235201', address: '567 Boulevard des Jardins, Lévis, QC G6V 5R3', lat: 46.7900, lng: -71.1600, inactive: true },
  { mls: '18235356', address: '32 Rue Principale, Saint-Lambert, QC J4R 1H4', lat: 45.4990, lng: -73.5090 },
  { mls: '18235410', address: '88 Rue des Érables, Longueuil, QC J4K 3C7', lat: 45.5210, lng: -73.4980 },
  { mls: '18235477', address: '145 Rue Sainte-Catherine, Montréal, QC H2X 1K8', lat: 45.5088, lng: -73.5617 },
  { mls: '18235512', address: '78 Avenue Victoria, Saint-Lambert, QC J4P 2H5', lat: 45.4960, lng: -73.5060 },
  { mls: '18235589', address: '210 Boulevard Saint-Martin, Laval, QC H7M 1Y8', lat: 45.5750, lng: -73.7100 },
  { mls: '18235634', address: '44 Rue du Parc, Brossard, QC J4W 2K3', lat: 45.4510, lng: -73.4650 },
];

/* ---------------- Disponibilités pour visites ---------------- */
// Modèle repris de Property-Management-Showingavailability : un événement à
// plat par créneau (pas de règle récurrente persistée) — la récurrence n'est
// qu'un générateur au moment d'enregistrer, qui pose une occurrence indépendante
// par date résolue. { id, type, date: 'YYYY-MM-DD', startMinutes, endMinutes }

const AVAIL_HOUR_START = 7;
const AVAIL_HOUR_END = 22;

const AVAIL_TYPES = [
  { id: 'visite-libre', label: 'Visite libre', color: '#1F9D55', bg: '#E8F5E9' },
  { id: 'pre-approuve', label: 'Pré-approuvé', color: '#0066DC', bg: '#EAF3FB' },
  { id: 'impossible', label: 'Impossible', color: '#C8102E', bg: '#FAE8EB' },
];
function availTypeMeta(id) { return AVAIL_TYPES.find(t => t.id === id) || AVAIL_TYPES[0]; }

// Lun→Dim pour les puces à cocher du modal (comme la maquette) ; Dim→Sam pour
// l'en-tête de semaine, qui commence un dimanche. Les deux pointent vers le
// même index `Date#getDay()`.
const MODAL_DAY_ORDER = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const DAY_LABEL_TO_DOW = { Lun: 1, Mar: 2, Mer: 3, Jeu: 4, Ven: 5, Sam: 6, Dim: 0 };
const WEEKDAY_SHORT_SUN_FIRST = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

function dowLabelFor(dateIso) {
  return MODAL_DAY_ORDER.find(l => DAY_LABEL_TO_DOW[l] === new Date(dateIso + 'T00:00:00').getDay());
}

function rangesOverlap(a, b) { return a.startMinutes < b.endMinutes && b.startMinutes < a.endMinutes; }

// Semaine ou mois, 12 occurrences plafond — mêmes bornes que la source. Une
// date ne peut apparaître qu'une fois même si deux jours cochés y menaient.
const AVAIL_RECURRENCE_CYCLES = { semaine: 12, mois: 12 };
function generateAvailDates(weekStartIso, dayLabels, recurrence) {
  const cycles = recurrence ? AVAIL_RECURRENCE_CYCLES[recurrence] : 1;
  const out = new Set();
  dayLabels.forEach(label => {
    const occurrence0 = addDaysISO(weekStartIso, DAY_LABEL_TO_DOW[label]);
    for (let c = 0; c < cycles; c++) {
      let d = occurrence0;
      if (recurrence === 'semaine') d = addDaysISO(occurrence0, c * 7);
      else if (recurrence === 'mois') {
        const dt = new Date(occurrence0 + 'T00:00:00');
        const day = dt.getDate();
        dt.setMonth(dt.getMonth() + c);
        if (dt.getDate() !== day) dt.setDate(0); // débordement de mois (ex. 31 → 30 jours)
        d = isoDate(dt);
      }
      out.add(d);
    }
  });
  return [...out];
}

// Un jeu de départ dérivé du numéro MLS : chaque fiche a déjà de quoi montrer
// l'écran sans dépendre d'un fichier de données séparé à maintenir, et sans
// que toutes les propriétés se ressemblent.
const PROPERTY_AVAILABILITY = {};
function seedAvailability(mls) {
  const h = hashStr(mls);
  const base = weekStartISO(todayPlus(0));
  const patterns = [
    { offset: 1, type: 'visite-libre', startH: 10, endH: 12 },
    { offset: 2, type: 'pre-approuve', startH: 13, endH: 14.5 },
    { offset: 4, type: 'visite-libre', startH: 9, endH: 10 },
    { offset: 5, type: 'impossible', startH: 8, endH: 9.5 },
  ];
  return patterns
    .filter((p, i) => ((h >> (i * 2)) & 3) !== 0)
    .map((p, i) => ({
      id: `${mls}-seed-${i}`,
      type: p.type,
      date: addDaysISO(base, p.offset),
      startMinutes: p.startH * 60,
      endMinutes: p.endH * 60,
    }));
}
function propertyAvailability(mls) {
  if (!PROPERTY_AVAILABILITY[mls]) PROPERTY_AVAILABILITY[mls] = seedAvailability(mls);
  return PROPERTY_AVAILABILITY[mls];
}

// Le tag qu'un arrêt du bac à sable porte quand rien n'est encore parti : il
// répond d'avance à « puis-je réserver cette heure sans détour ? », pour
// épargner l'aller-retour de messagerie que ce calendrier existe déjà pour
// éviter. `none` couvre autant l'absence de créneau couvrant que l'absence
// pure et simple de calendrier (hors catalogue) : dans les deux cas, il n'y a
// rien à consulter, donc rien d'autre à répondre que « ça passe par le
// courtier ».
const AVAILABILITY_TAGS = {
  'visite-libre': { label: 'Visite libre', tone: 'ok' },
  'pre-approuve': { label: 'Pré-approuvée', tone: 'info' },
  impossible:     { label: 'Impossible dans cette plage horaire', tone: 'danger' },
  none:           { label: 'Besoin d\'approbation du courtier', tone: 'warn' },
};
function availabilityTagFor(stop, start) {
  if (stop.external || !stop.mls) return AVAILABILITY_TAGS.none;
  const end = start + stop.duration;
  // Un créneau ne « couvre » l'arrêt que s'il le contient en entier : un
  // chevauchement partiel resterait un faux sans-détour, moins sûr qu'un
  // aller-retour évité à tort.
  const covering = propertyAvailability(stop.mls).find(ev =>
    ev.date === state.draft.date && ev.startMinutes <= start && ev.endMinutes >= end);
  return AVAILABILITY_TAGS[covering ? covering.type : 'none'];
}

// Sur ImmoContact, une adresse absente du catalogue reste visitable : le
// courtier la saisit et la demande part par courriel. Ce jeu de rues simule ce
// que renverrait un service d'adresses — le prototype n'en appelle aucun, mais
// le parcours doit pouvoir se jouer sur n'importe quelle recherche.
const SUGGESTION_STREETS = [
  'Boulevard des Ormes, Lévis, QC G6V 4T4',
  'Boulevard des Cerisiers, Boucherville, QC J4B 7K1',
  'Avenue des Peupliers, Longueuil, QC J4K 2M9',
  'Rue des Tilleuls, Laval, QC H7M 1Y8',
  'Chemin des Bouleaux, Brossard, QC J4W 2K3',
];

// Mots qui ne distinguent pas une rue d'une autre : les garder ferait
// correspondre « rue des Développeurs » à « Rue des Tilleuls ».
const ADDRESS_FILLER = ['rue', 'avenue', 'av', 'boulevard', 'boul', 'blvd', 'chemin', 'ch',
  'place', 'montee', 'croissant', 'des', 'de', 'du', 'la', 'le', 'les', 'saint', 'sainte'];

function normalizeText(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Renvoie des adresses proches de la saisie et absentes du catalogue. Sans
// numéro civique il n'y a rien à proposer : une rue seule n'est pas une adresse.
function addressSuggestions(q) {
  const num = (q.match(/\d{1,5}/) || [])[0];
  if (!num) return [];
  // Ce qui reste après le numéro nomme la rue cherchée. Une proposition qui ne
  // la contient pas n'est pas une suggestion, c'est du bruit : mieux vaut dire
  // qu'on n'a rien trouvé et offrir d'ajouter l'adresse. Sans mot distinctif —
  // « 500 » seul, « 500 rue » — on propose toujours des pistes.
  // On ne retient que la partie « rue » de la saisie et celle de la suggestion :
  // sinon une ville commune suffirait à proposer une rue qui n'a rien à voir.
  const typedStreet = q.split(',')[0] || '';
  const words = normalizeText(typedStreet.replace(num, ' '))
    .split(/[^a-z0-9]+/)
    .filter(w => w.length > 2 && !ADDRESS_FILLER.includes(w));
  const known = new Set(MLS_POOL.map(p => normalizeText(p.address)));
  return SUGGESTION_STREETS
    .filter(street => !words.length || words.some(w => normalizeText(street.split(',')[0]).includes(w)))
    .map(street => ({ id: 'sug-' + num + '-' + hashStr(street), address: `${num} ${street}` }))
    .filter(sug => !known.has(normalizeText(sug.address)))
    .slice(0, 4);
}

const PROVINCES = [
  ['QC', 'Québec'], ['ON', 'Ontario'], ['NB', 'Nouveau-Brunswick'], ['NS', 'Nouvelle-Écosse'],
  ['PE', 'Île-du-Prince-Édouard'], ['NL', 'Terre-Neuve-et-Labrador'], ['MB', 'Manitoba'],
  ['SK', 'Saskatchewan'], ['AB', 'Alberta'], ['BC', 'Colombie-Britannique'],
  ['YT', 'Yukon'], ['NT', 'Territoires du Nord-Ouest'], ['NU', 'Nunavut'],
];

// Découpe « 567 rue des Développeurs, Boucherville » en numéro, rue et ville :
// ce que le courtier vient de taper n'a pas à être retapé.
function splitTypedAddress(q) {
  const parts = (q || '').split(',').map(p => p.trim()).filter(Boolean);
  const first = parts[0] || '';
  const num = (first.match(/^(\d{1,6})/) || [])[1] || '';
  const street = first.replace(/^\d{1,6}\s*/, '').trim();
  return {
    num,
    street: street ? street.charAt(0).toUpperCase() + street.slice(1) : '',
    city: parts[1] || '',
  };
}

// Recompose l'adresse au format du catalogue, pour qu'un arrêt hors catalogue se
// lise comme les autres dans la liste et sur la carte.
function composeAddress(f) {
  const line = `${f.num} ${f.street}${f.unit ? `, app. ${f.unit}` : ''}`;
  return `${line}, ${f.city}, ${f.province}${f.postal ? ' ' + f.postal.toUpperCase() : ''}`;
}

function newPropertyDraft(typed) {
  const { num, street, city } = splitTypedAddress(typed);
  return { num, street, unit: '', city, province: 'QC', postal: '' };
}

const NEW_PROPERTY_REQUIRED = [
  ['num', 'le numéro civique'],
  ['street', 'le nom de la rue'],
  ['city', 'la ville'],
  ['province', 'la province'],
];
function newPropertyMissing() {
  const f = state.newProperty || {};
  return NEW_PROPERTY_REQUIRED.filter(([k]) => !String(f[k] || '').trim()).map(([, label]) => label);
}

// Greater Montréal bounds, used to place custom stops that have no MLS listing.
function coordsFor(stop) {
  if (stop.lat != null && stop.lng != null) return { lat: stop.lat, lng: stop.lng };
  const listing = MLS_POOL.find(p => p.mls === stop.mls);
  if (listing) return { lat: listing.lat, lng: listing.lng };
  const h = hashStr(stop.address || stop.id || '');
  return { lat: 45.45 + (h % 300) / 1000, lng: -73.75 + ((h >>> 8) % 350) / 1000 };
}

function haversineKm(a, b) {
  const R = 6371;
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLng = (b.lng - a.lng) * Math.PI / 180;
  const la1 = a.lat * Math.PI / 180, la2 = b.lat * Math.PI / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/* ----- Road routing (OSRM) -----
   The straight line between two stops is not what anyone drives, so the route
   geometry is fetched from OSRM's public demo server, which also returns real
   driving distances and durations. The app renders synchronously, so results
   are cached and the crow-flies estimate below is used until they land — and
   permanently if the request fails. Only mock listing coordinates are sent. */
const routeGeometry = new Map(); // route signature -> { status, legs: [[lat,lng], ...][] }
const osrmLegMinutes = new Map(); // "from>to" -> driving minutes

const coordKey = c => `${c.lat.toFixed(5)},${c.lng.toFixed(5)}`;
const legKey = (a, b) => `${coordKey(a)}>${coordKey(b)}`;

// Le tour commence à la première visite : plus de point de départ à choisir,
// donc rien à préfixer avant les propriétés.
function routePoints(props) {
  return props.slice();
}

function routeSignature(props) {
  return props.map(s => coordKey(coordsFor(s))).join(';');
}

async function ensureRouteGeometry(props) {
  if (props.length < 2) return;
  const sig = routeSignature(props);
  if (routeGeometry.has(sig)) return;
  routeGeometry.set(sig, { status: 'loading' });

  try {
    const path = props.map(s => { const c = coordsFor(s); return `${c.lng},${c.lat}`; }).join(';');
    const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${path}?overview=full&geometries=geojson&steps=true`);
    const data = await res.json();
    if (data.code !== 'Ok' || !data.routes || !data.routes.length) throw new Error(data.code || 'no route');

    const legs = data.routes[0].legs.map((leg, i) => {
      // Per-leg geometry has to be stitched from the steps: the route only
      // carries one geometry for the whole path, and each leg needs its own
      // so it can keep its colour.
      const coords = leg.steps.flatMap(st => st.geometry.coordinates.map(([lng, lat]) => [lat, lng]));
      const key = legKey(coordsFor(props[i]), coordsFor(props[i + 1]));
      osrmLegMinutes.set(key, Math.max(5, Math.round(leg.duration / 60 / 5) * 5));
      return coords;
    });
    routeGeometry.set(sig, { status: 'ok', legs });
  } catch (e) {
    routeGeometry.set(sig, { status: 'error' });
  }
  // Le tracé routier vient d'arriver : on repeint si la carte est visible.
  if (state.mapOpen && state.screen === 'builder') render();
}

// Real driving time when OSRM has answered for this pair, otherwise a
// crow-flies estimate: ~40 km/h effective urban speed plus a buffer for parking
// and handoff, rounded to the 5-minute grid the scheduler works on.
function geoTravelMinutes(a, b) {
  const known = osrmLegMinutes.get(legKey(a, b));
  if (known != null) return known;
  const km = haversineKm(a, b);
  return Math.max(5, Math.round((km / 40 * 60 + 5) / 5) * 5);
}

/* ----- Créneaux simultanés -----
   Deux propriétés très proches — deux unités du même immeuble, deux maisons de
   la même rue — n'ont pas besoin de deux créneaux successifs : le courtier
   acheteur peut demander la même heure aux deux courtiers inscripteurs et
   enchaîner sur place. Le système ne l'interdit donc plus ; il le propose quand
   la distance le permet, prévient que le chevauchement existe, et laisse le
   courtier acheteur le confirmer. Lui seul voit ce chevauchement : chaque
   courtier inscripteur reçoit une demande normale pour son heure. */
const SAME_SLOT_MAX_KM = 1.5;

function nearbyStops(a, b) {
  if (!a || !b || a.type !== 'property' || b.type !== 'property') return false;
  return haversineKm(coordsFor(a), coordsFor(b)) <= SAME_SLOT_MAX_KM;
}
function slotDistanceKm(a, b) {
  return haversineKm(coordsFor(a), coordsFor(b));
}
// Un créneau partagé n'a de sens qu'entre deux propriétés voisines dans la
// liste : `parallel` devient donc faux dès qu'un glisser-déposer, une insertion
// ou une optimisation change le voisin. On normalise à chaque rendu plutôt que
// de traquer les onze endroits qui réordonnent la liste.
function normalizeParallel(draft) {
  if (!draft) return;
  draft.stops.forEach((stop, i) => {
    if (!stop.parallel) return;
    const prev = draft.stops[i - 1];
    if (prev && prev.type === 'property' && nearbyStops(prev, stop)) return;
    stop.parallel = false;
    stop.slotAck = false;
  });
}

// Greedy nearest-neighbour from the first stop, which stays the anchor: the
// agent decides where the day starts, geography decides the rest. Un simple
// réordonnancement — aucune heure de visite déjà fixée par le courtier
// (« Modifier la visite ») ne bouge : `computeSchedule` lit `lockedStart` quelle
// que soit la position de l'arrêt dans la liste.
function optimizeByGeography(props) {
  if (props.length < 2) return props.slice();
  const remaining = props.slice();
  const route = [];
  route.push(remaining.shift());
  let from = coordsFor(route[0]);
  while (remaining.length) {
    let bestIdx = 0, bestKm = Infinity;
    remaining.forEach((s, i) => {
      const km = haversineKm(from, coordsFor(s));
      if (km < bestKm) { bestKm = km; bestIdx = i; }
    });
    const next = remaining.splice(bestIdx, 1)[0];
    route.push(next);
    from = coordsFor(next);
  }
  return route;
}

// Une propriété hors catalogue n'a pas de courtier inscripteur connu : c'est le
// courtier acheteur qui le désigne, d'où le null plutôt qu'un nom tiré au hasard.
function courtierFor(mls) {
  if (!mls) return null;
  return COURTIERS_INSCRIPTEURS[hashStr(mls) % COURTIERS_INSCRIPTEURS.length];
}
function courtierPhoneFor(courtier) {
  const h = hashStr(courtier);
  return `(${514 + (h % 3) * 100}) ${100 + (h % 900)}-${1000 + ((h >>> 3) % 9000)}`;
}

// Virgule décimale : l'interface est en français, « 0.4 km » se lit comme une
// coquille.
function formatKm(km) { return km < 10 ? `${km.toFixed(1).replace('.', ',')} km` : `${Math.round(km)} km`; }
function formatMinutes(min) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60), m = min % 60;
  return m ? `${h} h ${String(m).padStart(2, '0')}` : `${h} h`;
}

// Properties already selected in the MLS and sent to this app's Panier
let mlsCart = [
  { mls: '18234671', address: '500 Rue d\'Avaugour, Boucherville, QC J4B 5E7' },
  { mls: '18234733', address: '123 Avenue des Étoiles, Montréal, QC H3C 1A2' },
  { mls: '18234845', address: '456 Boulevard de la Liberté, Québec, QC G1V 2M2' },
  { mls: '18234902', address: '789 Chemin du Bonheur, Gatineau, QC J8X 3G5' },
];

function makeStop(address, mls, opts = {}) {
  const listing = MLS_POOL.find(p => p.mls === mls);
  return {
    id: uid(),
    type: 'property',
    address,
    mls,
    lat: opts.lat ?? listing?.lat ?? null,
    lng: opts.lng ?? listing?.lng ?? null,
    courtier: opts.courtier || courtierFor(mls),
    status: opts.status || 'pending',
    duration: opts.duration || 30,
    locked: opts.status === 'confirmed',
    lockedStart: opts.lockedStart || null,
    proposedStart: opts.proposedStart || null,  // créneau suggéré par le courtier inscripteur
    external: opts.external || false,           // arrêt hors catalogue, envoyé par courriel
    visited: opts.visited || false,
    // Provenance, pas état : cette propriété vient de l'acheteur, ou c'est le
    // courtier qui la propose. Indépendant du régime de l'arrêt.
    buyerPick: opts.buyerPick || false,
    // Porte à lui seul le régime de l'arrêt : null = bac à sable, horodaté =
    // demande partie chez le courtier inscripteur.
    sentAt: opts.sentAt || null,
    relancedAt: null,
  };
}
/* ---------------- Statuts ---------------- */

// Une visite ne se résume pas à « demandée / confirmée » : le courtier
// inscripteur refuse, propose un autre créneau, ou ne répond pas. Ces trois cas
// sont les plus fréquents en pratique et étaient jusqu'ici inexprimables, donc
// invisibles pour le courtier acheteur qui devait les suivre de tête.
const STOP_STATUSES = {
  // Bac à sable : la propriété est retenue, rien n'est parti. Pas de libellé —
  // il n'y a rien à dire d'un état qui n'engage personne.
  sandbox:   { label: '', short: 'Bac à sable', tone: 'none', action: false },
  pending:   { label: 'En attente de confirmation du courtier inscripteur', short: 'En attente', tone: 'pending', action: true },
  confirmed: { label: 'Confirmée', short: 'Confirmée', tone: 'ok', action: false },
  proposed:  { label: 'Autre créneau proposé', short: 'Contre-proposition', tone: 'warn', action: true },
  refused:   { label: 'Visite refusée', short: 'Refusée', tone: 'danger', action: true },
  noreply:   { label: 'Sans réponse du courtier', short: 'Sans réponse', tone: 'muted', action: true },
  // Distinct du refus : un refus répond à une demande jamais accordée, une
  // annulation retire une confirmation qui existait. L'heure était promise,
  // parfois déjà transmise à l'acheteur — le tour recule d'une case.
  cancelled: { label: 'Visite annulée par le courtier inscripteur', short: 'Annulée', tone: 'danger', action: true },
};
// Ordre du simulateur de démo : le cycle suit le parcours réel d'une demande.
// L'annulation suit la confirmation, seul état d'où elle a un sens — et le
// seul d'où l'heure promise existe encore pour être nommée.
const STOP_STATUS_CYCLE = ['pending', 'confirmed', 'cancelled', 'proposed', 'refused', 'noreply'];

// Le tour n'a pas de champ `status` : il se déduit de ce qui est vrai (les
// demandes sont parties, l'acheteur a reçu le tour) et de l'état des arrêts.
// Deux champs stockés au lieu de quatre états à maintenir en cohérence.
const TOUR_STATUSES = {
  brouillon:     { label: 'Brouillon', tone: 'draft', help: 'Aucune demande envoyée. Le tour n\'est visible que par vous.' },
  en_cours:      { label: 'Tour créé et en cours', tone: 'pending', help: 'Des demandes sont parties. Le tour est engagé : les arrêts envoyés ne se déplacent plus qu\'en passant par « Éditer ».' },
  confirme:      { label: 'Confirmé', tone: 'ok', help: 'Toutes les visites sont confirmées. Le tour peut être partagé avec un acheteur.' },
  non_envoye:    { label: 'Non envoyé', tone: 'todo', help: 'L\'acheteur est choisi et les visites sont confirmées, mais le tour ne lui a pas encore été envoyé.' },
  partage:       { label: 'Partagé', tone: 'shared', help: 'Le tour a été partagé avec l\'acheteur.' },
};

// Sans réponse au bout du délai, l'arrêt bascule visuellement en « sans
// réponse » sans qu'on ait à écrire dans la donnée : c'est le temps qui a
// changé, pas la demande.
const RELANCE_DELAY_MS = 48 * 3600 * 1000;

// L'état d'un arrêt se lit sur un seul champ : `sentAt`. Tant que la demande
// n'est pas partie, l'arrêt est dans le bac à sable — pas de statut, pas de
// badge, rien à attendre de personne. Une fois partie, c'est la réponse du
// courtier inscripteur qui parle, et le silence trop long devient « sans
// réponse ». La fonction ne dépend plus du tour : le régime est celui de
// l'arrêt, pas celui du parcours.
function effectiveStopStatus(stop) {
  if (!stop.sentAt) return 'sandbox';
  if (stop.status !== 'pending') return stop.status;
  const since = stop.relancedAt || stop.sentAt;
  if (Date.now() - since > RELANCE_DELAY_MS) return 'noreply';
  return 'pending';
}
function stopNeedsAction(stop) {
  return !!STOP_STATUSES[effectiveStopStatus(stop)].action;
}

// Un arrêt reste déplaçable tant que personne n'a été prévenu. Envoyer sa
// demande l'épingle : son heure est devenue un engagement envers un courtier
// inscripteur, elle ne se renégocie plus par glisser-déposer mais par « Éditer ».
function stopIsDraggable(stop) {
  return !stop.sentAt;
}

// Équivalent du glisser-déposer par bouton : le seul qui fonctionne au doigt
// (le glisser-déposer HTML5 ne se déclenche pas sur navigateur mobile) et le
// seul qui marche au clavier. Même règle que le glisser : seul un arrêt encore
// au bac à sable se déplace.
function moveStop(stopId, direction) {
  const stop = state.draft.stops.find(s => s.id === stopId);
  if (!stop || !stopIsDraggable(stop)) return;
  const stops = state.draft.stops;
  const idx = stops.indexOf(stop);
  const swapIdx = idx + direction;
  if (swapIdx < 0 || swapIdx >= stops.length) return;
  [stops[idx], stops[swapIdx]] = [stops[swapIdx], stops[idx]];
  markDirtyIfSent();
  render();
}

// Le tour n'a pas de champ `status` : il se déduit de l'état de ses arrêts.
// Une adresse personnalisée n'entre jamais dans ce calcul : elle ne demande
// jamais d'approbation, donc son `sentAt` toujours vide ne doit pas maintenir
// le tour en « en cours » à lui seul.
function tourStatus(t) {
  const props = t.stops.filter(s => s.type === 'property' && !s.customKind);
  if (!props.some(s => s.sentAt)) return 'brouillon';
  if (t.sharedAt) return 'partage';
  // Une demande encore au bac à sable compte autant qu'une réponse à traiter :
  // dans les deux cas le tour n'est pas bouclé.
  if (props.some(s => !s.sentAt || stopNeedsAction(s))) return 'en_cours';
  return t.buyerId ? 'non_envoye' : 'confirme';
}

// Date d'envoi du tour, dérivée : la première demande partie. Sert d'horodatage
// d'affichage, plus de règle métier.
function tourSentAt(t) {
  const sent = t.stops.filter(s => s.sentAt).map(s => s.sentAt);
  return sent.length ? Math.min(...sent) : null;
}

// Compte des arrêts, pour le récapitulatif en tête du tour et pour décider
// quels CTA proposer.
function validationTally(t) {
  const props = t.stops.filter(s => s.type === 'property' && !s.customKind);
  const tally = { total: props.length, sandbox: 0, confirmed: 0, waiting: 0, toHandle: 0 };
  props.forEach(s => {
    const st = effectiveStopStatus(s);
    if (st === 'sandbox') tally.sandbox++;
    else if (st === 'confirmed') tally.confirmed++;
    else if (st === 'pending') tally.waiting++;
    else tally.toHandle++;
  });
  return tally;
}

// « Ajouter une destination » ajoute à la fin du tour. Ouvert depuis le crayon
// d'un bandeau, le même formulaire doit insérer l'étape à cet endroit précis :
// state.insertBeforeId porte l'ancre, vidée à la fermeture du modal.
function insertAnchor() {
  if (!state.insertBeforeId) return null;
  return state.draft.stops.find(s => s.id === state.insertBeforeId) || null;
}
function addStopToDraft(stop) {
  const at = state.insertBeforeId ? state.draft.stops.findIndex(s => s.id === state.insertBeforeId) : -1;
  if (at < 0) { state.draft.stops.push(stop); return null; }
  state.draft.stops.splice(at, 0, stop);
  return state.draft.stops[at + 1];
}
function stopShortLabel(stop) {
  if (!stop) return '';
  return stop.address.split(',')[0];
}

// Les dates sont relatives au jour d'ouverture : « Passé » se déduit maintenant
// de la date, donc des dates écrites en dur feraient basculer toute la démo dans
// l'onglet Passé au bout de quelques semaines.
function seedTours() {
  return [
    {
      id: 't1', buyerId: 'b1', date: todayPlus(2), time: '15:00', sentAt: Date.now() - 100000, sharedAt: Date.now() - 95000,
      stops: [
        makeStop('500 Rue D\'Iberville, Montréal, QC H2H 2S6', '18234567', { status: 'confirmed', lockedStart: '15:00', sentAt: Date.now() - 100000 }),
        makeStop('515 Boul. Lacombe, Repentigny, QC J6A 1E5', '18234599', { status: 'confirmed', lockedStart: '16:00', sentAt: Date.now() - 100000 }),
        makeStop('214 Rue des Oranges, Montréal, QC H2H 2S6', '18234612', { status: 'confirmed', lockedStart: '17:00', sentAt: Date.now() - 100000 }),
      ],
    },
    {
      id: 't2', buyerId: 'b2', date: todayPlus(2), time: '14:30', sentAt: Date.now() - 90000,
      stops: [
        makeStop('500 Rue d\'Avaugour, Boucherville, QC J4B 5E7', '18234671', { status: 'confirmed', lockedStart: '14:30', sentAt: Date.now() - 100000, buyerPick: true }),
        makeStop('123 Avenue des Étoiles, Montréal, QC H3C 1A2', '18234733', { status: 'pending', sentAt: Date.now() - 100000 }),
        makeStop('44 Rue du Parc, Brossard, QC J4W 2K3', '18235634', { status: 'confirmed', lockedStart: '16:00', sentAt: Date.now() - 100000, buyerPick: true }),
      ],
    },
    {
      // Contre-proposition et refus : les deux cas qui demandent un arbitrage.
      id: 't3', buyerId: 'b1', date: todayPlus(4), time: '15:00', sentAt: Date.now() - 80000,
      stops: [
        makeStop('210 Boulevard Saint-Martin, Laval, QC H7M 1Y8', '18235589', { status: 'confirmed', lockedStart: '15:00', sentAt: Date.now() - 100000 }),
        makeStop('145 Rue Sainte-Catherine, Montréal, QC H2X 1K8', '18235477', { status: 'proposed', proposedStart: '16:15', sentAt: Date.now() - 100000 }),
        makeStop('567 Boulevard des Citrons, Boucherville, QC J4B 7K1', '18235078', { status: 'refused', sentAt: Date.now() - 100000 }),
        makeStop('567 Boulevard des Oliviers, Longueuil, QC J4K 2M9', '18235144', { status: 'confirmed', lockedStart: '17:00', sentAt: Date.now() - 100000 }),
      ],
    },
    {
      // Tour entièrement confirmé, pas encore rattaché à un acheteur : c'est
      // l'étape 4 du parcours, prête à être jouée en démo.
      id: 't4', buyerId: null, date: todayPlus(4), time: '16:00', sentAt: Date.now() - 70000,
      stops: [
        makeStop('78 Avenue Victoria, Saint-Lambert, QC J4P 2H5', '18235512', { status: 'confirmed', lockedStart: '16:00', sentAt: Date.now() - 100000 }),
        makeStop('32 Rue Principale, Saint-Lambert, QC J4R 1H4', '18235356', { status: 'confirmed', lockedStart: '17:00', sentAt: Date.now() - 100000 }),
      ],
    },
    {
      // Tour de la semaine dernière : il peuple l'onglet « Passé » et sert de
      // terrain à la réouverture. Un compte rendu reste à envoyer — c'est la
      // raison la plus courante de vouloir ramener un tour passé.
      id: 't5', buyerId: 'b2', date: todayPlus(-5), time: '13:00', sentAt: Date.now() - 600000, sharedAt: Date.now() - 590000,
      stops: [
        makeStop('88 Rue des Érables, Longueuil, QC J4K 3C7', '18235410', { status: 'confirmed', lockedStart: '13:00', visited: true, sentAt: Date.now() - 100000 }),
        makeStop('567 Boulevard des Oliviers, Longueuil, QC J4K 2M9', '18235144', { status: 'confirmed', lockedStart: '14:00', visited: true, sentAt: Date.now() - 100000 }),
      ],
    },
  ];
}

/* ---------------- Feature flags ---------------- */

// Buyer's Tour is built as a standalone API, decoupled from the platform, so a
// single build has to demo both the ImmoContact and the TB behaviour. Every
// divergent behaviour — and everything still pending client validation — sits
// behind a flag. `wired: false` means the feature is specced but not built yet;
// the panel lists it as "à venir" rather than offering a toggle that does nothing.
const FEATURE_FLAGS = [
  { group: 'Sources de propriétés', id: 'mlsCart', label: 'Panier et recherche MLS', help: 'Onglets Panier et MLS dans « Ajouter une destination ». Désactivé, on obtient le comportement ImmoContact, sans catalogue MLS.', default: false, wired: true },
  { group: 'Sources de propriétés', id: 'customAddress', label: 'Adresse personnalisée', help: 'La recherche par adresse propose aussi les adresses hors catalogue, ajoutables directement. Désactivé, seules les fiches existantes remontent.', default: true, wired: true },
  { group: 'Sources de propriétés', id: 'propertyViaBrokerOnly', label: 'Propriété via courtier uniquement (TB)', help: 'Sur TB, une propriété ne peut être ajoutée qu\'après avoir sélectionné un courtier.', default: false, wired: false },

  { group: 'Démo', id: 'simulateConfirmation', label: 'Simuler la réponse des courtiers', help: 'Rend le statut de chaque visite cliquable pour basculer entre « À confirmer » et « Confirmée ». Outil de démo : en production, seul le courtier inscripteur confirme.', default: true, wired: true },
  { group: 'Démo', id: 'tourOptimize', label: 'Optimiser le tour', help: 'Affiche le bouton « Optimiser le tour » dans le constructeur, qui réordonne les arrêts par proximité géographique. Désactivé, le tour ne se compose que par glisser-déposer manuel.', default: true, wired: true },
];

// Une seule API Buyer's Tour sert les deux plateformes : ce qui les distingue
// tient entièrement dans ce jeu de flags. Les presets évitent d'aligner une
// dizaine d'interrupteurs à la main avant chaque démo — un clic donne le
// comportement complet d'une plateforme, les interrupteurs restent disponibles
// pour explorer les variantes à partir de là.
// `brand` est la marque telle qu'elle s'écrit sur le logotype, distincte du
// `label` employé dans les réglages. Les deux logotypes n'ont pas la même
// largeur : elle est portée ici pour que le bandeau réserve la bonne place
// avant que le SVG soit chargé.
const PLATFORMS = [
  { id: 'immocontact', label: 'ImmoContact', brand: 'Immocontact', logo: 'assets/logo-immocontact.svg', logoWidth: 184, help: 'Adresse libre, sans catalogue MLS ni Panier.' },
  { id: 'touchbase', label: 'Touchbase', brand: 'Touchbase', logo: 'assets/logo-touchbase.svg', logoWidth: 160, help: 'Catalogue MLS et Panier ; la propriété passe par un courtier.' },
];

// Chaque preset décrit la plateforme en entier, y compris les comportements pas
// encore construits : il documente la cible et s'appliquera tout seul au fur et
// à mesure que les flags passent en `wired`.
const PLATFORM_PRESETS = {
  immocontact: { mlsCart: false, customAddress: true, propertyViaBrokerOnly: false, simulateConfirmation: true, tourOptimize: true },
  touchbase: { mlsCart: true, customAddress: false, propertyViaBrokerOnly: true, simulateConfirmation: true, tourOptimize: true },
};

// Appliquer ne touche qu'aux flags branchés : les autres n'ont aucun
// comportement à piloter, et les activer en douce donnerait un panneau qui ment
// sur ce que fait le build.
function applyPlatformPreset(id) {
  const preset = PLATFORM_PRESETS[id];
  if (!preset) return;
  FEATURE_FLAGS.forEach(f => { if (f.wired && f.id in preset) state.flags[f.id] = preset[f.id]; });
  state.brandPlatform = id;
  saveFlags();
  saveBrandPlatform();
}

// Renvoie la plateforme dont le preset correspond aux flags actuels, ou null
// dès qu'un interrupteur a été bougé à la main.
function currentPlatform() {
  const p = PLATFORMS.find(p => FEATURE_FLAGS.every(f =>
    !f.wired || !(f.id in PLATFORM_PRESETS[p.id]) || state.flags[f.id] === PLATFORM_PRESETS[p.id][f.id]));
  return p ? p.id : null;
}

// Saved values win over the defaults above, so bump the suffix whenever a
// `default` changes — otherwise anyone who already toggled a flag keeps the old
// default for the new one and never sees the feature.
const FLAG_STORAGE_KEY = 'ic-buyers-tour-flags-v5';

function loadFlags() {
  const flags = {};
  FEATURE_FLAGS.forEach(f => { flags[f.id] = f.default; });
  try {
    const saved = JSON.parse(localStorage.getItem(FLAG_STORAGE_KEY) || '{}');
    Object.keys(saved).forEach(k => { if (k in flags) flags[k] = !!saved[k]; });
  } catch (e) { /* storage unavailable (private mode) — defaults are fine */ }
  return flags;
}
function saveFlags() {
  try { localStorage.setItem(FLAG_STORAGE_KEY, JSON.stringify(state.flags)); } catch (e) { /* ignore */ }
}
function flag(id) { return !!state.flags[id]; }

// La marque affichée ne suit que le dernier preset cliqué, pas l'état exact
// des interrupteurs : sinon retoucher un seul flag en cours de démo Touchbase
// (ex. désactiver « Optimiser le tour ») fait retomber le logo sur ImmoContact
// et donne l'impression d'avoir quitté Touchbase, alors que rien d'autre n'a
// changé.
const BRAND_PLATFORM_KEY = 'ic-buyers-tour-brand-v1';
function loadBrandPlatform() {
  try {
    const saved = localStorage.getItem(BRAND_PLATFORM_KEY);
    if (saved && PLATFORMS.some(p => p.id === saved)) return saved;
  } catch (e) { /* storage unavailable (private mode) — default is fine */ }
  return PLATFORMS[0].id;
}
function saveBrandPlatform() {
  try { localStorage.setItem(BRAND_PLATFORM_KEY, state.brandPlatform); } catch (e) { /* ignore */ }
}

/* ---------------- State ---------------- */

const state = {
  flags: loadFlags(),
  brandPlatform: loadBrandPlatform(), // marque affichée — ne suit que le dernier preset cliqué, voir renderBrand()
  screen: 'list',           // list | contact | buyerForm | builder | properties
  listTab: 'upcoming',      // upcoming | past
  listSearch: '',
  propertiesTab: 'active',  // active | inactive — onglet courant de « Mes propriétés »
  propertyDetailMls: null,  // fiche ouverte depuis « Mes propriétés »
  availView: 'week',        // week | day — écran Disponibilités pour visites
  availAnchor: null,        // date ISO affichée (jour, ou jour de la semaine affichée)
  availMiniCalOpen: false,
  availMiniCalMonth: null,  // 'YYYY-MM' du mini-calendrier ouvert
  tours: seedTours(),
  buyers: BUYERS.slice(),
  draft: null,              // tour being created/edited
  editingTourId: null,      // if editing an existing tour from the list
  contactSearch: '',
  contactSelectedBuyer: null,
  contactPurpose: 'create',  // 'create' (étape 1) | 'name' (bac à sable) | 'share' (étape 4)
  pendingLeave: null,        // navigation en attente de confirmation
  showBuyerForm: false,
  modal: null,              // { type, ...payload }
  destModalTab: 'nom',
  destModalSearch: '',
  destModalPrefillAddress: '',
  destModalArretKind: null,        // type choisi dans l'onglet Adresse personnalisée — null tant que le courtier n'y a pas touché
  destModalArretKindOpen: false,   // menu déroulant du type, déplié ou non
  destModalArretFrom: null,        // heure de départ choisie (minutes) — null : le courtier n'est pas obligé d'en fixer une
  destModalArretDuration: null,    // durée choisie (minutes) — même chose, facultative
  newProperty: null,        // formulaire « Ajouter une propriété inexistante »
  newPropertyTouched: false, // les champs manquants ne sont signalés qu'après un premier envoi
  mapOpen: false,           // panneau de trajet déplié — replié par défaut, la carte reste un choix
  insertBeforeId: null,     // id de l'étape avant laquelle insérer la prochaine destination
  dragStopId: null,
  sendSelection: null,      // ids des propriétés cochées dans l'envoi groupé
  dirty: false,             // unsaved edits on a tour that was already sent
  reportStopId: null,       // stop being reported on while state.screen === 'report'
  reportDraft: null,        // { interet, prix, interieur, exterieur, offre, comment, callbackNumbers } for that stop
};

// The tours list holds both sent tours (sentAt set) and saved drafts (sentAt null).
// The save/update flow only applies to tours whose requests were already sent.
function currentTour() {
  return state.editingTourId ? state.tours.find(t => t.id === state.editingTourId) : null;
}

// Un tour bascule dans « Passé » quand sa date est derrière nous. C'est le
// calendrier qui décide, pas l'état des comptes rendus : un tour dont la journée
// est finie n'est plus à venir, même s'il reste des rapports à envoyer.
//
// `reopened` est la seule exception, et elle est explicite : le courtier a
// demandé à le ramener. On garde un drapeau plutôt que de réécrire la date —
// les visites ont bien eu lieu le jour dit, et le tour doit continuer de le
// raconter.
function tourIsCompleted(t) {
  if (t.reopened) return false;
  return t.date < todayPlus(0);
}

function markDirtyIfSent() {
  if (state.draft) state.dirty = true;
}

// Traiter la réponse d'un courtier n'est pas une modification du tour à lui
// renotifier : c'est l'enregistrement de ce qu'il a répondu. On persiste
// directement, sans passer par « envoyer une mise à jour ».
function persistAnswer() {
  const t = currentTour();
  if (t) t.stops = JSON.parse(JSON.stringify(state.draft.stops));
}

// Un tour composé mais jamais enregistré n'existe que dans state.draft : quitter
// l'écran le perd sans trace. On demande confirmation plutôt que d'enregistrer
// en douce — « je me suis trompé de tour » est un cas réel.
function hasUnsavedWork() {
  if (!state.draft) return false;
  if (state.dirty) return true;
  return !state.editingTourId && state.draft.stops.length > 0;
}

// Seul chemin par lequel le brouillon est écrit dans le tour enregistré. Les
// cinq gestes qui enregistrent — mettre de côté, envoyer aux courtiers, choisir
// l'acheteur, lui envoyer le tour, publier une mise à jour — recopient tous le
// même brouillon et ne se distinguent que par les horodatages qu'ils posent.
// `patch` porte cette différence ; le reste n'a à exister qu'une fois.
function commitDraft(patch = {}) {
  const fields = {
    buyerId: state.draft.buyer ? state.draft.buyer.id : null,
    date: state.draft.date,
    time: state.draft.time,
    stops: state.draft.stops,
  };
  const existing = currentTour();
  if (existing) {
    Object.assign(existing, fields, patch);
  } else {
    const created = { id: uid(), sentAt: null, relancedAt: null, sharedAt: null, ...fields, ...patch };
    state.tours.push(created);
    state.editingTourId = created.id;
  }
  state.dirty = false;
}

// Met le tour de côté sans rien envoyer. Bouton « Enregistrer » et sortie de
// secours du modal de confirmation.
function saveDraftAsTour() {
  commitDraft();
}

// Confirming a visit locks it at the time it currently occupies in the schedule.
// Any other status has to clear that time: a stale lockedStart means a later
// re-confirmation would silently reuse the old hour instead of the stop's
// current position in the tour.
function setStopStatus(stop, status) {
  stop.status = status;
  stop.locked = status === 'confirmed';
  if (status !== 'proposed') stop.proposedStart = null;
  // Une annulation garde l'heure à l'écran alors qu'elle n'engage plus
  // personne : c'est le trou qu'elle laisse dans la journée que le courtier
  // doit voir pour le combler. Le reste du tour ne se réorganise pas tout seul.
  if (status === 'cancelled') return;
  if (status !== 'confirmed') { stop.lockedStart = null; return; }
  if (!stop.lockedStart) {
    const row = computeSchedule(state.draft).find(r => r.stop.id === stop.id);
    if (row) stop.lockedStart = minutesToLabel(row.start).replace('h', ':');
  }
}
/* ----- Actions sur un créneau partagé ----- */

// Grouper deux visites dans le même créneau change l'heure demandée à la
// seconde : si son courtier avait déjà confirmé une autre heure, la
// confirmation ne tient plus. On la libère au lieu d'afficher « Confirmée » sur
// une heure que personne n'a acceptée.
function groupSameSlot(stop) {
  const rows = computeSchedule(state.draft);
  const idx = state.draft.stops.indexOf(stop);
  const prev = state.draft.stops[idx - 1];
  const prevRow = rows.find(r => r.stop === prev);
  const slotStart = prevRow ? minutesToLabel(prevRow.start).replace('h', ':') : null;
  const wasConfirmed = stop.locked && stop.lockedStart && stop.lockedStart !== slotStart;
  stop.parallel = true;
  stop.slotAck = false;
  if (wasConfirmed) setStopStatus(stop, 'pending');
  markDirtyIfSent();
  render();
  showToast(wasConfirmed
    ? `Visite déplacée à ${slotStart ? slotStart.replace(':', 'h') : 'ce créneau'} : la confirmation du courtier est à redemander.`
    : `Les deux visites sont demandées à ${slotStart ? slotStart.replace(':', 'h') : 'la même heure'}.`,
    wasConfirmed ? 'default' : 'success');
}
function splitSameSlot(stop) {
  stop.parallel = false;
  stop.slotAck = false;
  markDirtyIfSent();
  render();
  showToast('Les deux visites sont de nouveau demandées l\'une après l\'autre.');
}
function ackSameSlot(stop) {
  stop.slotAck = true;
  markDirtyIfSent();
  render();
  showToast('Créneau simultané confirmé.', 'success');
}

/* ----- Optimisation ----- */

// Un simple réordonnancement par proximité géographique : sans notion de
// trajet ni d'heure d'arrivée à l'écran, il ne reste rien à prévisualiser —
// aucune heure déjà demandée ne bouge (elle est fixée par le courtier, pas
// par la position dans la liste), donc on applique directement.
function optimizeDraftStops() {
  const props = state.draft.stops.filter(s => s.type === 'property');
  const reordered = optimizeByGeography(props);
  const unchanged = reordered.map(s => s.id).join(',') === state.draft.stops.map(s => s.id).join(',');
  if (unchanged) { showToast('Le tour suit déjà cet ordre.'); return; }
  state.draft.stops = reordered;
  normalizeParallel(state.draft);
  markDirtyIfSent();
  render();
  showToast('Tour réordonné par proximité géographique.', 'success');
}

// Relancer remet le compteur du délai à zéro : les arrêts « sans réponse »
// repassent en attente, puisqu'on vient de redemander.
function relanceTour() {
  const now = Date.now();
  state.draft.stops.forEach(s => {
    if (s.sentAt && stopNeedsAction(s)) s.relancedAt = now;
  });
  persistAnswer();
  render();
}

// Rattacher l'acheteur au tour sans rien lui transmettre : le tour passe
// « Non envoyé ». Sépare le choix du destinataire de l'envoi, pour qu'un
// acheteur puisse être noté avant que le tour soit prêt à partir.
function attachBuyerToTour(buyer) {
  state.draft.buyer = buyer;
  commitDraft();
}

// Étape 4 : rattacher l'acheteur et lui transmettre le tour.
function shareTourWithBuyer(buyer) {
  state.draft.buyer = buyer;
  commitDraft({ sharedAt: Date.now() });
}

// Étape 1 → 3 : les demandes partent aux courtiers inscripteurs. Prévenir
// l'acheteur au passage ne vaut que s'il est déjà connu ; sinon le partage
// viendra à l'étape 2, une fois les visites confirmées.
// Le geste élémentaire : une demande part chez un courtier inscripteur. Tout
// envoi passe par ici, qu'il vienne de l'icône d'un arrêt ou de l'envoi groupé.
function markStopsSent(stops) {
  const now = Date.now();
  stops.forEach(s => {
    // Une adresse personnalisée n'a pas de courtier inscripteur à qui envoyer
    // une demande : elle reste hors de ce régime pour toujours.
    if (s.type !== 'property' || s.sentAt || s.customKind) return;
    s.sentAt = now;
    s.relancedAt = null;
  });
}

// Envoi d'une seule demande. Le tour n'a pas de bascule à opérer : c'est
// l'arrêt qui change de régime, les autres restent où ils en étaient.
function sendStopRequest(stop) {
  markStopsSent([stop]);
  commitDraft();
  render();
  showToast(
    `Demande de visite envoyée à ${stop.courtier || 'son courtier inscripteur'}${stop.lockedStart ? ` pour ${stop.lockedStart.replace(':', 'h')}` : ''}.`,
    'success'
  );
}

// Envoi groupé : un raccourci pour ne pas cliquer huit fois. L'état obtenu est
// exactement celui de huit envois individuels — c'est chaque arrêt qui porte sa
// date d'envoi, le tour n'en a pas.
function sendTourToBrokers(notifyBuyer, selectedIds = null) {
  const targets = state.draft.stops.filter(s =>
    s.type === 'property' && !s.sentAt && (!selectedIds || selectedIds.includes(s.id)));
  markStopsSent(targets);
  commitDraft({
    sharedAt: notifyBuyer && state.draft.buyer ? Date.now() : null,
  });
  state.modal = null;
  render();
  showToast(
    notifyBuyer
      ? `${targets.length} demande${targets.length > 1 ? 's' : ''} de visite envoyée${targets.length > 1 ? 's' : ''} aux courtiers inscripteurs et à l'acheteur.`
      : `${targets.length} demande${targets.length > 1 ? 's' : ''} de visite envoyée${targets.length > 1 ? 's' : ''} aux courtiers inscripteurs.`,
    'success'
  );
}

// Le tour est déjà parti et vient d'être modifié : on enregistre, et `notify`
// dit si les destinataires en sont prévenus. La notification n'est pas un état
// du tour — elle part ou elle ne part pas — donc rien à stocker de plus.
function saveDraftToTour(notify, notifyBuyer = false) {
  commitDraft();
  render();
  showToast(
    !notify
      ? 'Modifications enregistrées.'
      : notifyBuyer
        ? 'Modifications enregistrées et mise à jour envoyée aux courtiers concernés et à l\'acheteur.'
        : 'Modifications enregistrées et mise à jour envoyée aux courtiers concernés.',
    'success'
  );
}

// L'acheteur est choisi à la fin du parcours : le tour se construit sans lui.
// Le tour ne se cadre que par sa date et son heure de départ — c'est
// l'enchaînement des visites qui décide de sa fin, pas une contrainte saisie
// d'avance.
function newDraft(buyer = null) {
  return { buyer, date: todayPlus(3), time: '14:00', stops: [] };
}

// Fin réelle du tour, telle qu'annoncée à l'acheteur au moment du partage.
function tourEndMinutes(draft) {
  const rows = computeSchedule(draft);
  const last = rows[rows.length - 1];
  return last ? last.start + last.stop.duration : timeToMinutes(draft.time);
}

/* ---------------- Schedule computation ---------------- */

// Palier de planification du tour. Les sélecteurs d'heure ne proposent que des
// quarts d'heure, et c'est l'unité dans laquelle les courtiers s'entendent.
const SLOT_MINUTES = 15;
function ceilToSlot(min) { return Math.ceil(min / SLOT_MINUTES) * SLOT_MINUTES; }

// Le courtier fixe librement l'heure de chaque arrêt (via « Modifier la
// visite ») : ce calcul ne fait qu'enchaîner ce qui n'a pas encore d'heure
// propre juste après ce qui précède, sans notion de trajet ni d'arrivée —
// nos clients veulent cette liberté de planification, sans que l'application
// ne la contraigne ou ne la conteste.
function computeSchedule(draft) {
  let cursor = timeToMinutes(draft.time);
  const rows = [];
  let lastStart = null;
  for (let i = 0; i < draft.stops.length; i++) {
    const stop = draft.stops[i];
    const prev = draft.stops[i - 1];
    // Créneau partagé : la visite démarre avec la précédente au lieu de la
    // suivre.
    const sharesSlot = !!(stop.parallel && prev && lastStart !== null);
    let start;
    const slotEnd = cursor;
    if (sharesSlot) cursor = lastStart;
    if (stop.locked && stop.lockedStart) {
      start = timeToMinutes(stop.lockedStart);
      cursor = start + stop.duration;
    } else {
      // Une heure de visite se demande au quart d'heure : c'est le palier sur
      // lequel les courtiers s'entendent, et les sélecteurs d'heure de
      // l'application n'en proposent pas d'autre.
      start = ceilToSlot(cursor);
      cursor = start + stop.duration;
    }
    // La visite la plus longue du créneau décide de la suite du tour.
    if (sharesSlot) cursor = Math.max(cursor, slotEnd);
    rows.push({ stop, start, sharesSlot });
    lastStart = start;
  }
  return rows;
}

/* ----- Contrôles qui n'agissent plus -----
   Un contrôle a trois états, pas deux : actif, désactivé avec un motif, ou
   remplacé par une lecture. Le troisième est celui qu'on oublie — et un
   `<select>` qu'on ne peut plus honorer reste alors à l'écran en affichant une
   valeur que le reste de la page contredit. Ces deux prédicats répondent à la
   question « ce contrôle a-t-il encore un effet ? » pour les deux endroits où
   la réponse était non. */

// L'heure du tour n'amorce le calendrier que si le premier arrêt ne porte pas
// déjà la sienne. Dès qu'il en porte une — demandée ou confirmée — computeSchedule
// part de cette heure-là et ignore `draft.time` : le champ n'a plus aucun effet.
// Un bouton grisé sans motif oblige à deviner ce qui manque. La raison voyage
// donc avec lui : `title` pour la souris, `aria-describedby` pour le lecteur
// d'écran — qui lit la description d'un contrôle désactivé, alors que le focus
// ne s'y pose pas. Rend `{ a: attributs, n: note }` ; les deux sont vides quand
// l'action est disponible, et le bouton reste tel quel.
function whenBlocked(id, disponible, raison) {
  if (disponible) return { a: '', n: '' };
  return {
    a: ` disabled title="${esc(raison)}" aria-describedby="${id}-why"`,
    n: `<span id="${id}-why" class="sr-only">${esc(raison)}</span>`,
  };
}

function applyTourDate(date) {
  state.draft.date = date;
  markDirtyIfSent();
  render();
}

// Tant que rien n'est parti, l'heure du premier arrêt n'est qu'une intention :
// le courtier la change encore librement, comme le reste du bac à sable. Elle
// ne devient un engagement — et ne fige donc plus le sélecteur — qu'une fois
// la demande envoyée au courtier inscripteur.
function tourStartIsFixed(draft) {
  const first = draft.stops[0];
  return !!(first && first.type === 'property' && first.sentAt && first.lockedStart);
}

/* ---------------- Rendering ---------------- */

const NAV_ITEMS = [
  { id: 'inbox', label: 'Boîte de réception', img: 'assets/menu/inbox.svg', badge: 7 },
  { id: 'sendmsg', label: 'Envoi de message', img: 'assets/menu/send.svg' },
  { id: 'waiting', label: 'Attente de réponse', img: 'assets/menu/wait.svg', badge: 3 },
  { id: 'tours', label: 'Tour de visites', img: 'assets/menu/tour.svg' },
  { id: 'properties', label: 'Mes propriétés', img: 'assets/menu/properties.svg' },
  { id: 'reports', label: 'Rapports', img: 'assets/menu/reports.svg' },
  { id: 'calendar', label: 'Calendrier', img: 'assets/menu/calendar.svg' },
  { id: 'map', label: 'Carte', img: 'assets/menu/map.svg' },
  { id: 'settings', label: 'Paramètres', img: 'assets/menu/settings.svg' },
  { id: 'help', label: 'Aide', img: 'assets/menu/help.svg' },
];

// Sections câblées dans ce prototype, au-delà du tour de visites. Une section
// câblée n'affiche plus la réserve « absente de ce prototype », qu'elle soit
// ou non l'écran courant.
const WIRED_NAV = new Set(['tours', 'properties']);

// Une seule section à la fois se dit « courante » : le tour de visites tant
// qu'on y est (liste, composition, envoi...), Mes propriétés dès qu'on y entre.
function navActiveId() {
  const inProperties = state.screen === 'properties' || state.screen === 'propertyDetail' || state.screen === 'propertyAvailability';
  return inProperties ? 'properties' : 'tours';
}

// Glyphe blanc dédié par section active, comme le veut la maquette Figma : le
// reste des icônes n'a qu'une seule teinte, pensée pour le fond clair.
const NAV_ACTIVE_ICONS = { tours: 'assets/menu/tour-white.svg', properties: 'assets/menu/properties-white.svg' };

function renderSidebarNav() {
  const el = document.getElementById('sidebar-nav');
  const activeId = navActiveId();
  el.innerHTML = NAV_ITEMS.map(item => {
    const active = item.id === activeId;
    const iconSrc = active ? (NAV_ACTIVE_ICONS[item.id] || item.img) : item.img;
    // Le décor de la plateforme reste, badges compris : c'est ce qui rend la
    // démo crédible. Mais un badge promet du contenu, et ces sections n'en ont
    // pas. La réserve se dit avant le clic, pas seulement dans le toast après.
    const hors = WIRED_NAV.has(item.id) ? '' : ' — section absente de ce prototype';
    return `
    <a href="#" class="nav-item ${active ? 'active' : ''}" data-nav="${item.id}"
      ${active ? 'aria-current="page"' : `title="${esc(item.label)}${hors}"`}
      aria-label="${esc(item.label)}${item.badge ? `, ${item.badge} en attente` : ''}${hors}">
      <span class="nav-icon"><img src="${iconSrc}" alt=""></span>
      ${esc(item.label)}
      ${item.badge ? `<span class="nav-badge" aria-hidden="true">${item.badge}</span>` : ''}
    </a>`;
  }).join('');
}

// Le titre de l'écran du tour. « Créer un tour de visites » décrit une action
// en cours : il ne vaut que tant qu'on ne sait pas quoi dire de mieux. Dès
// qu'un acheteur est connu — au bac à sable comme après l'envoi — c'est lui qui
// nomme le tour, comme dans la liste : le titre sert alors à reconnaître le
// tour sur lequel on a cliqué, ce qu'un libellé identique pour tous ne fait pas.
function builderTitle() {
  const d = state.draft;
  if (!d) return 'Créer un tour de visites';
  if (d.buyer) return `Tour de ${d.buyer.prenom} ${d.buyer.nom}`;
  const saved = currentTour();
  if (!saved || !tourSentAt(saved)) return 'Créer un tour de visites';
  // Tour parti sans acheteur : la date est le seul nom qu'il ait.
  return `Tour du ${formatDateLong(d.date)}`;
}

// Le logotype suit la plateforme choisie dans les réglages : la démo doit
// porter la marque du client à qui on la montre. Il retient le dernier preset
// cliqué (`state.brandPlatform`) plutôt que l'état exact des interrupteurs :
// affiner un flag après coup (ex. désactiver « Optimiser le tour » sous
// Touchbase) ne doit pas faire retomber le logo sur la marque par défaut.
function renderBrand() {
  const p = PLATFORMS.find(p => p.id === state.brandPlatform) || PLATFORMS[0];
  document.querySelectorAll('[data-brand-logo]').forEach(img => {
    if (img.getAttribute('src') === p.logo) return;
    img.setAttribute('src', p.logo);
    img.setAttribute('alt', p.brand);
    img.setAttribute('width', p.logoWidth);
  });
  document.title = `${p.brand} — Tour de visites`;
}

function setTopbarTitle(title) {
  document.getElementById('topbar-title').textContent = title;
  const mobileTitle = document.getElementById('mobile-nav-title');
  if (mobileTitle) mobileTitle.textContent = title;
}

function render() {
  const main = document.getElementById('main-content');
  renderBrand();
  renderSidebarNav();
  // Un créneau partagé dépend de l'ordre de la liste : on le revalide ici, seul
  // point par lequel passe toute modification du tour.
  normalizeParallel(state.draft);
  if (state.screen === 'list') { setTopbarTitle('Tour de visites'); main.innerHTML = renderListScreen(); }
  // L'écran nomme son objet — l'acheteur — et non l'envoi : on peut en repartir
  // sans avoir rien envoyé.
  else if (state.screen === 'contact') { setTopbarTitle(state.contactPurpose === 'create' ? 'Créer un tour de visites' : 'Choisir l\'acheteur'); main.innerHTML = renderContactScreen(); }
  else if (state.screen === 'builder') { setTopbarTitle(builderTitle()); main.innerHTML = renderBuilderScreen(); }
  else if (state.screen === 'report') { setTopbarTitle('Compte rendu de visite'); main.innerHTML = renderReportScreen(); }
  else if (state.screen === 'menu') { setTopbarTitle('Menu'); main.innerHTML = renderMenuScreen(); }
  else if (state.screen === 'properties') { setTopbarTitle('Mes propriétés'); main.innerHTML = renderPropertiesScreen(); }
  else if (state.screen === 'propertyDetail') { setTopbarTitle(propertyDetailTitle()); main.innerHTML = renderPropertyDetailScreen(); }
  else if (state.screen === 'propertyAvailability') { setTopbarTitle(propertyDetailTitle()); main.innerHTML = renderAvailabilityScreen(); }
  document.body.dataset.screen = state.screen;
  renderModal();
  bindEvents();
  // Après bindEvents : l'emplacement doit exister dans le DOM fraîchement rendu.
  syncTourMap();
  syncModalFocus();
}

/* ----- Screen: mobile menu grid ----- */

function renderMenuScreen() {
  const activeId = navActiveId();
  return `
    <div class="menu-grid">
      ${NAV_ITEMS.map(item => {
        const active = item.id === activeId;
        const hors = WIRED_NAV.has(item.id) ? '' : ' — section absente de ce prototype';
        return `
        <a href="#" class="menu-card ${active ? 'is-current' : ''}" data-nav="${item.id}"
          ${active ? 'aria-current="page"' : (WIRED_NAV.has(item.id) ? '' : 'title="Section absente de ce prototype"')}
          aria-label="${esc(item.label)}${item.badge ? `, ${item.badge} en attente` : ''}${hors}">
          ${item.id === 'tours' ? '<span class="menu-card-clip"><span class="menu-ribbon">Nouveau</span></span>' : ''}
          ${item.badge ? `<span class="nav-badge menu-card-badge" aria-hidden="true">${item.badge}</span>` : ''}
          <span class="menu-card-icon"><img src="${item.img}" alt=""></span>
          <span class="menu-card-label">${esc(item.label)}</span>
        </a>`;
      }).join('')}
    </div>
  `;
}

/* ----- Screen: properties ----- */

// Le catalogue MLS porte déjà un drapeau `inactive` — pensé à l'origine pour
// exclure une fiche retirée des destinations proposables dans un tour. Cette
// même distinction est exactement celle des onglets Actives/Inactives de la
// maquette : pas de second jeu de données à faire vivre en parallèle.
function renderPropertiesScreen() {
  const tab = state.propertiesTab;
  const list = MLS_POOL.filter(p => (tab === 'inactive' ? p.inactive : !p.inactive));

  const rows = list.length === 0
    ? `<div class="empty-state"><p>${tab === 'inactive' ? 'Aucune propriété inactive.' : 'Aucune propriété active.'}</p></div>`
    : `<div class="property-list">${list.map(p => `
        <div class="property-row" data-open-property="${esc(p.mls)}">
          <img class="property-row-thumb" src="${thumbFor(p.mls, p.address)}" alt="">
          <span class="property-row-address">${esc(p.address)}</span>
          <span class="property-row-chevron"><img src="assets/badge-chevron.svg" alt="" width="9" height="15"></span>
        </div>`).join('')}</div>`;

  return `
    <div class="property-tabs" role="tablist" aria-label="Filtrer mes propriétés">
      <button class="${tab === 'active' ? 'active' : ''}" data-property-tab="active" role="tab" aria-selected="${tab === 'active'}">Actives</button>
      <button class="${tab === 'inactive' ? 'active' : ''}" data-property-tab="inactive" role="tab" aria-selected="${tab === 'inactive'}">Inactives</button>
    </div>
    ${rows}
    <button class="btn btn-primary btn-block page-create-btn" id="btn-add-property">${icon('plus')} Ajouter une nouvelle propriété</button>
  `;
}

function bindPropertiesEvents() {
  document.querySelectorAll('[data-property-tab]').forEach(btn => {
    btn.onclick = () => { state.propertiesTab = btn.getAttribute('data-property-tab'); render(); };
  });
  const addBtn = document.getElementById('btn-add-property');
  if (addBtn) addBtn.onclick = () => showToast('L\'ajout d\'une propriété n\'est pas encore disponible dans ce prototype.');
  document.querySelectorAll('[data-open-property]').forEach(row => {
    row.onclick = () => {
      state.propertyDetailMls = row.getAttribute('data-open-property');
      state.screen = 'propertyDetail';
      render();
    };
  });
}

/* ----- Screen: property detail ----- */

// Chaque entrée mène à un sous-écran qui n'existe pas encore dans ce
// prototype : la réserve se dit au clic, comme partout ailleurs, plutôt que
// de laisser croire que la fiche est complète.
const PROPERTY_DETAIL_ROWS = [
  { id: 'visitParams', label: 'Paramètres pour les visites' },
  { id: 'messageSplit', label: 'Répartition des messages' },
  { id: 'notes', label: 'Notes de propriété' },
  { id: 'reviews', label: 'Envoi d\'avis' },
  { id: 'seller', label: 'Détails du vendeur' },
  { id: 'availability', label: 'Disponibilités pour visites' },
  { id: 'activities', label: 'Activités' },
  { id: 'reports', label: 'Comptes rendus' },
];

function currentPropertyDetail() {
  return MLS_POOL.find(p => p.mls === state.propertyDetailMls) || null;
}

function propertyDetailTitle() {
  const p = currentPropertyDetail();
  return p ? p.address : 'Propriété';
}

function renderPropertyDetailScreen() {
  const p = currentPropertyDetail();
  if (!p) return `<div class="empty-state"><p>Cette fiche n'existe plus.</p></div>`;
  const active = !p.inactive;

  return `
    <img class="property-detail-photo" src="${thumbFor(p.mls, p.address)}" alt="">
    <p class="property-detail-address">${esc(p.address)}</p>
    <div class="property-detail-toggle-row">
      <span>Active</span>
      <button class="property-switch ${active ? 'on' : ''}" id="btn-toggle-property-active" role="switch" aria-checked="${active}" aria-label="Propriété active">
        <span class="property-switch-thumb">${active ? icon('check') : ''}</span>
      </button>
    </div>
    <div class="property-detail-menu">
      ${PROPERTY_DETAIL_ROWS.map(row => `
        <button class="property-detail-row" data-property-menu-item="${row.id}">
          <span>${esc(row.label)}</span>
          <img src="assets/badge-chevron.svg" alt="" width="9" height="15">
        </button>`).join('')}
    </div>
    <button class="btn btn-danger-outline btn-block" id="btn-delete-property">Supprimer</button>
  `;
}

function bindPropertyDetailEvents() {
  const toggle = document.getElementById('btn-toggle-property-active');
  if (toggle) toggle.onclick = () => {
    const p = currentPropertyDetail();
    if (!p) return;
    p.inactive = !p.inactive;
    render();
  };
  document.querySelectorAll('[data-property-menu-item]').forEach(row => {
    row.onclick = () => {
      const id = row.getAttribute('data-property-menu-item');
      if (id === 'availability') {
        state.availView = 'week';
        state.availAnchor = todayPlus(0);
        state.screen = 'propertyAvailability';
        render();
        return;
      }
      showToast('Cette section n\'est pas encore disponible dans ce prototype.');
    };
  });
  const delBtn = document.getElementById('btn-delete-property');
  if (delBtn) delBtn.onclick = () => showToast('La suppression d\'une propriété n\'est pas encore disponible dans ce prototype.');
}

/* ----- Screen: property availability (Property-Management-Showingavailability, reskinné) ----- */

// 60 px l'heure : une minute vaut un pixel pile, ce qui évite tout calcul de
// conversion entre `startMinutes`/`endMinutes` et la position du bloc.
const AVAIL_ROW_HEIGHT = 60;
const AVAIL_GRID_HEIGHT = (AVAIL_HOUR_END - AVAIL_HOUR_START) * AVAIL_ROW_HEIGHT;

function formatAvailRangeLabel(days) {
  if (days.length === 1) {
    const d = new Date(days[0] + 'T00:00:00');
    return `${d.getDate()} ${capFirst(MONTHS_FR[d.getMonth()])} ${d.getFullYear()}`;
  }
  const first = new Date(days[0] + 'T00:00:00');
  const last = new Date(days[days.length - 1] + 'T00:00:00');
  const sameMonth = first.getMonth() === last.getMonth() && first.getFullYear() === last.getFullYear();
  const firstPart = sameMonth ? `${first.getDate()}` : `${first.getDate()} ${capFirst(MONTHS_FR[first.getMonth()])}`;
  return `${firstPart} – ${last.getDate()} ${capFirst(MONTHS_FR[last.getMonth()])} ${last.getFullYear()}`;
}

function renderAvailEventCard(ev) {
  const meta = availTypeMeta(ev.type);
  const top = ev.startMinutes - AVAIL_HOUR_START * 60;
  const height = Math.max(ev.endMinutes - ev.startMinutes, 20);
  const showTime = height >= 34;
  return `
    <div class="avail-event" data-avail-event="${esc(ev.id)}"
      style="top:${top}px;height:${height}px;--avail-color:${meta.color};--avail-bg:${meta.bg}">
      <span class="avail-event-type">${esc(meta.label)}</span>
      ${showTime ? `<span class="avail-event-time">${minutesToHHMM(ev.startMinutes)} – ${minutesToHHMM(ev.endMinutes)}</span>` : ''}
      <span class="avail-event-handle" data-avail-resize="${esc(ev.id)}" aria-hidden="true"></span>
    </div>`;
}

function renderAvailMiniCal() {
  const month = state.availMiniCalMonth || state.availAnchor.slice(0, 7);
  const [y, m] = month.split('-').map(Number);
  const firstDow = new Date(y, m - 1, 1).getDay();
  const daysInMonth = new Date(y, m, 0).getDate();
  const today = todayPlus(0);
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push('<span class="avail-minical-cell is-empty"></span>');
  for (let d = 1; d <= daysInMonth; d++) {
    const iso = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    cells.push(`<button class="avail-minical-cell${iso === today ? ' is-today' : ''}${iso === state.availAnchor ? ' is-selected' : ''}"
      data-avail-pick-date="${iso}">${d}</button>`);
  }
  return `
    <div class="avail-minical" role="dialog" aria-label="Choisir une date">
      <div class="avail-minical-head">
        <button class="avail-minical-nav" data-avail-minical-month="-1" aria-label="Mois précédent">${icon('chevronRight', 'icon-flip')}</button>
        <span>${capFirst(MONTHS_FR[m - 1])} ${y}</span>
        <button class="avail-minical-nav" data-avail-minical-month="1" aria-label="Mois suivant">${icon('chevronRight')}</button>
      </div>
      <div class="avail-minical-dow">${WEEKDAY_SHORT_SUN_FIRST.map(d => `<span>${d}</span>`).join('')}</div>
      <div class="avail-minical-grid">${cells.join('')}</div>
    </div>`;
}

function renderAvailabilityScreen() {
  const p = currentPropertyDetail();
  if (!p) return `<div class="empty-state"><p>Cette fiche n'existe plus.</p></div>`;
  if (!state.availAnchor) state.availAnchor = todayPlus(0);

  const days = state.availView === 'day'
    ? [state.availAnchor]
    : Array.from({ length: 7 }, (_, i) => addDaysISO(weekStartISO(state.availAnchor), i));
  const events = propertyAvailability(p.mls);
  const today = todayPlus(0);
  const colTemplate = `56px repeat(${days.length}, 1fr)`;
  // La largeur minimale ne vaut que pour la semaine : en vue Jour, une seule
  // colonne n'a aucune raison de forcer un défilement horizontal sur mobile.
  const gridMinWidth = state.availView === 'week' ? '640px' : '100%';

  const headerCells = days.map(date => {
    const d = new Date(date + 'T00:00:00');
    return `
      <div class="avail-day-header${date === today ? ' is-today' : ''}">
        <span class="avail-day-name">${WEEKDAY_SHORT_SUN_FIRST[d.getDay()]}</span>
        <span class="avail-day-num">${d.getDate()}</span>
      </div>`;
  }).join('');

  const hourLabels = Array.from({ length: AVAIL_HOUR_END - AVAIL_HOUR_START }, (_, i) =>
    `<span class="avail-hour-label" style="top:${i * AVAIL_ROW_HEIGHT}px">${AVAIL_HOUR_START + i}h</span>`).join('');

  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const showNowLine = nowMinutes >= AVAIL_HOUR_START * 60 && nowMinutes <= AVAIL_HOUR_END * 60;

  const dayCols = days.map(date => {
    const isPast = date < today;
    const cards = events.filter(e => e.date === date).map(renderAvailEventCard).join('');
    const nowLine = (showNowLine && date === today)
      ? `<div class="avail-now-line" style="top:${nowMinutes - AVAIL_HOUR_START * 60}px"></div>` : '';
    return `<div class="avail-day-col${date === today ? ' is-today' : ''}${isPast ? ' is-past' : ''}" data-avail-date="${date}">${nowLine}${cards}</div>`;
  }).join('');

  return `
    <div class="avail-toolbar">
      <div class="avail-nav">
        <button class="avail-nav-btn" id="avail-prev" aria-label="Période précédente">${icon('chevronRight', 'icon-flip')}</button>
        <button class="btn avail-today-btn" id="avail-today">Aujourd'hui</button>
        <button class="avail-nav-btn" id="avail-next" aria-label="Période suivante">${icon('chevronRight')}</button>
      </div>
      <div class="avail-date-picker">
        <button class="avail-date-btn" id="avail-minical-btn" aria-haspopup="dialog" aria-expanded="${state.availMiniCalOpen}">
          ${icon('calendar')}<span>${esc(formatAvailRangeLabel(days))}</span>
        </button>
        ${state.availMiniCalOpen ? renderAvailMiniCal() : ''}
      </div>
      <div class="avail-view-toggle" role="tablist" aria-label="Vue du calendrier">
        <button class="${state.availView === 'day' ? 'active' : ''}" data-avail-view="day" role="tab" aria-selected="${state.availView === 'day'}">Jour</button>
        <button class="${state.availView === 'week' ? 'active' : ''}" data-avail-view="week" role="tab" aria-selected="${state.availView === 'week'}">Semaine</button>
      </div>
    </div>
    <div class="avail-grid-scroll">
      <div class="avail-header-row" style="grid-template-columns:${colTemplate};min-width:${gridMinWidth}">
        <div class="avail-header-spacer"></div>
        ${headerCells}
      </div>
      <div class="avail-grid" style="grid-template-columns:${colTemplate};min-width:${gridMinWidth}">
        <div class="avail-time-col">${hourLabels}</div>
        ${dayCols}
      </div>
    </div>
    <p class="avail-hint">Cliquez un créneau vide pour l'ajouter, ou glissez pour choisir sa durée. Glissez une carte pour la déplacer, sa base pour la raccourcir ou l'allonger.</p>
  `;
}

/* --- Interactions : créer, déplacer, redimensionner --- */
// Chaque geste suit le même squelette (mousedown → mousemove document → mouseup
// document) : la position n'est jamais écrite dans `state` pendant le drag —
// seul le DOM bouge — pour ne payer un re-rendu complet qu'une fois, à la
// relâche. Un déplacement invalide (date passée, chevauchement) ne touche
// jamais la donnée : `render()` recompose alors le DOM d'origine, ce qui suffit
// à « annuler » le geste.

function clampAvailMinutes(m) { return Math.max(AVAIL_HOUR_START * 60, Math.min(m, AVAIL_HOUR_END * 60)); }
function snap15(m) { return Math.round(m / 15) * 15; }

function openAvailCreateModal(date, startMinutes, endMinutes) {
  state.modal = {
    type: 'availability', mode: 'create', propertyMls: state.propertyDetailMls,
    date, startMinutes, endMinutes,
    selectedType: null, selectedDays: [dowLabelFor(date)], recurrence: null, error: null,
  };
  render();
}
function openAvailEditModal(eventId) {
  const ev = propertyAvailability(state.propertyDetailMls).find(e => e.id === eventId);
  if (!ev) return;
  state.modal = {
    type: 'availability', mode: 'edit', propertyMls: state.propertyDetailMls, eventId,
    date: ev.date, startMinutes: ev.startMinutes, endMinutes: ev.endMinutes,
    selectedType: ev.type, error: null,
  };
  render();
}

function startAvailCreate(e, col) {
  const date = col.getAttribute('data-avail-date');
  if (date < todayPlus(0)) return; // rien à composer sur une date passée
  const rect = col.getBoundingClientRect();
  const clickMin = clampAvailMinutes(AVAIL_HOUR_START * 60 + snap15(e.clientY - rect.top));
  const startX = e.clientX, startY = e.clientY;
  let moved = false, ghost = null, start = clickMin, end = Math.min(clickMin + 60, AVAIL_HOUR_END * 60);

  const paint = () => {
    if (!ghost) { ghost = document.createElement('div'); ghost.className = 'avail-event avail-event-ghost'; col.appendChild(ghost); }
    ghost.style.top = (start - AVAIL_HOUR_START * 60) + 'px';
    ghost.style.height = Math.max(end - start, 20) + 'px';
  };
  const onMove = (me) => {
    if (!moved && Math.hypot(me.clientX - startX, me.clientY - startY) < 6) return;
    moved = true;
    const curMin = clampAvailMinutes(AVAIL_HOUR_START * 60 + snap15(me.clientY - rect.top));
    start = Math.min(clickMin, curMin);
    end = Math.max(clickMin, curMin, start + 15);
    paint();
  };
  const onUp = () => {
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
    if (ghost) ghost.remove();
    openAvailCreateModal(date, start, end);
  };
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
}

function startAvailMove(e, eventId) {
  e.preventDefault();
  const list = propertyAvailability(state.propertyDetailMls);
  const ev = list.find(x => x.id === eventId);
  if (!ev) return;
  const cardEl = document.querySelector(`.avail-event[data-avail-event="${CSS.escape(eventId)}"]`);
  const startCol = cardEl.closest('.avail-day-col');
  const duration = ev.endMinutes - ev.startMinutes;
  const grabOffsetY = e.clientY - (startCol.getBoundingClientRect().top + (ev.startMinutes - AVAIL_HOUR_START * 60));
  const startX = e.clientX, startY = e.clientY;
  const today = todayPlus(0);
  let moved = false;
  const candidate = { date: ev.date, startMinutes: ev.startMinutes, endMinutes: ev.endMinutes, valid: true };

  const onMove = (me) => {
    if (!moved && Math.hypot(me.clientX - startX, me.clientY - startY) < 6) return;
    moved = true;
    const overCol = document.elementFromPoint(me.clientX, me.clientY)?.closest('.avail-day-col') || startCol;
    const rect = overCol.getBoundingClientRect();
    let startMin = clampAvailMinutes(AVAIL_HOUR_START * 60 + snap15((me.clientY - grabOffsetY) - rect.top));
    startMin = Math.min(startMin, AVAIL_HOUR_END * 60 - duration);
    candidate.date = overCol.getAttribute('data-avail-date');
    candidate.startMinutes = startMin;
    candidate.endMinutes = startMin + duration;
    candidate.valid = candidate.date >= today && !list.some(o => o.id !== eventId && o.date === candidate.date && rangesOverlap(o, candidate));
    if (cardEl.parentElement !== overCol) overCol.appendChild(cardEl);
    cardEl.style.top = (startMin - AVAIL_HOUR_START * 60) + 'px';
    cardEl.classList.toggle('is-invalid', !candidate.valid);
  };
  const onUp = () => {
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
    if (!moved) { openAvailEditModal(eventId); return; }
    if (candidate.valid) { ev.date = candidate.date; ev.startMinutes = candidate.startMinutes; ev.endMinutes = candidate.endMinutes; }
    render();
  };
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
}

function startAvailResize(e, eventId) {
  e.preventDefault();
  e.stopPropagation();
  const list = propertyAvailability(state.propertyDetailMls);
  const ev = list.find(x => x.id === eventId);
  if (!ev) return;
  const cardEl = document.querySelector(`.avail-event[data-avail-event="${CSS.escape(eventId)}"]`);
  const col = cardEl.closest('.avail-day-col');
  const rect = col.getBoundingClientRect();
  const ceiling = Math.min(AVAIL_HOUR_END * 60, ...list.filter(o => o.id !== eventId && o.date === ev.date && o.startMinutes >= ev.startMinutes).map(o => o.startMinutes));
  let moved = false, candidateEnd = ev.endMinutes, valid = true;

  const onMove = (me) => {
    if (!moved && Math.abs(me.clientY - (rect.top + (ev.endMinutes - AVAIL_HOUR_START * 60))) < 4) return;
    moved = true;
    let end = AVAIL_HOUR_START * 60 + snap15(me.clientY - rect.top);
    end = Math.max(ev.startMinutes + 15, Math.min(end, ceiling));
    candidateEnd = end;
    valid = end > ev.startMinutes;
    cardEl.style.height = Math.max(end - ev.startMinutes, 20) + 'px';
  };
  const onUp = () => {
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onUp);
    if (moved && valid) ev.endMinutes = candidateEnd;
    render();
  };
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);
}

function onAvailGridMouseDown(e) {
  if (e.button !== 0) return;
  const resizeHandle = e.target.closest('[data-avail-resize]');
  if (resizeHandle) return startAvailResize(e, resizeHandle.getAttribute('data-avail-resize'));
  const card = e.target.closest('.avail-event');
  if (card) return startAvailMove(e, card.getAttribute('data-avail-event'));
  const col = e.target.closest('.avail-day-col');
  if (col) return startAvailCreate(e, col);
}

function closeMiniCalOnClickOutside(e) {
  if (!state.availMiniCalOpen) return;
  if (e.target.closest('.avail-date-picker')) return;
  state.availMiniCalOpen = false;
  render();
}

function bindAvailabilityEvents() {
  document.querySelectorAll('[data-avail-view]').forEach(btn => {
    btn.onclick = () => { state.availView = btn.getAttribute('data-avail-view'); state.availMiniCalOpen = false; render(); };
  });
  const step = () => state.availView === 'day' ? 1 : 7;
  const prevBtn = document.getElementById('avail-prev');
  const nextBtn = document.getElementById('avail-next');
  const todayBtn = document.getElementById('avail-today');
  if (prevBtn) prevBtn.onclick = () => { state.availAnchor = addDaysISO(state.availAnchor, -step()); render(); };
  if (nextBtn) nextBtn.onclick = () => { state.availAnchor = addDaysISO(state.availAnchor, step()); render(); };
  if (todayBtn) todayBtn.onclick = () => { state.availAnchor = todayPlus(0); render(); };

  const miniCalBtn = document.getElementById('avail-minical-btn');
  if (miniCalBtn) miniCalBtn.onclick = () => {
    state.availMiniCalOpen = !state.availMiniCalOpen;
    if (state.availMiniCalOpen) state.availMiniCalMonth = state.availAnchor.slice(0, 7);
    render();
  };
  document.querySelectorAll('[data-avail-minical-month]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const [y, m] = state.availMiniCalMonth.split('-').map(Number);
      const d = new Date(y, m - 1 + (+btn.getAttribute('data-avail-minical-month')), 1);
      state.availMiniCalMonth = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      render();
    };
  });
  document.querySelectorAll('[data-avail-pick-date]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      state.availAnchor = btn.getAttribute('data-avail-pick-date');
      state.availMiniCalOpen = false;
      render();
    };
  });
  document.addEventListener('click', closeMiniCalOnClickOutside);

  const grid = document.querySelector('.avail-grid');
  if (grid) grid.addEventListener('mousedown', onAvailGridMouseDown);
}

/* ----- Screen: list ----- */

function renderListScreen() {
  const q = state.listSearch.trim().toLowerCase();
  const inTab = state.tours.filter(t => (state.listTab === 'upcoming' ? !tourIsCompleted(t) : tourIsCompleted(t)));
  let tours = inTab;
  // La recherche porte sur un contact : un tour sans acheteur n'a rien à quoi
  // se comparer et disparaît. On le dira dans l'écran vide plutôt que de
  // laisser croire qu'il n'existe pas.
  const anonymes = inTab.filter(t => !t.buyerId).length;
  if (q) {
    tours = tours.filter(t => {
      const b = state.buyers.find(b => b.id === t.buyerId);
      return b && `${b.prenom} ${b.nom}`.toLowerCase().includes(q);
    });
  }
  tours = tours.slice().sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

  const groups = {};
  tours.forEach(t => { (groups[t.date] = groups[t.date] || []).push(t); });

  let listHtml = '';
  if (tours.length === 0) {
    listHtml = `
      <div class="empty-state">
        <p>${q ? 'Aucun tour ne correspond à votre recherche.' : (state.listTab === 'upcoming' ? 'Aucun tour de visites à venir.' : 'Aucun tour de visites passé.')}</p>
        ${''/* Le bouton existe déjà plus bas sur l'écran : on le nomme ici,
               comme le fait déjà l'état vide du constructeur, plutôt que de le
               répéter, ce qui mettrait deux fois la même action primaire à
               l'écran. */}
        <p class="empty-sub">${!q
          ? 'Utilisez « Créer un tour de visites » pour commencer.'
          : anonymes
            ? `La recherche porte sur le nom de l'acheteur. ${anonymes} tour${anonymes > 1 ? 's n\'en ont' : ' n\'en a'} pas encore : effacez la recherche pour ${anonymes > 1 ? 'les' : 'le'} retrouver.`
            : 'Essayez un autre nom.'}</p>
      </div>`;
  } else {
    listHtml = Object.keys(groups).sort().map(date => {
      const rows = groups[date].map(t => {
        const b = state.buyers.find(b => b.id === t.buyerId);
        const propCount = t.stops.filter(s => s.type === 'property').length;
        const status = tourStatus(t);
        const meta = TOUR_STATUSES[status];
        const tally = validationTally(t);
        // Le badge dit où en est le tour ; la ligne du dessous dit ce qu'il
        // reste à faire, qui est l'information que le courtier cherche.
        const detail = status === 'en_cours' && tally.toHandle
          ? `${tally.toHandle} réponse${tally.toHandle > 1 ? 's' : ''} à traiter`
          : status === 'en_cours'
            ? `${tally.confirmed}/${tally.total} confirmée${tally.confirmed > 1 ? 's' : ''}`
            : status === 'non_envoye'
              ? 'À envoyer à l\'acheteur'
              : '';
        return `
          <div class="tour-card" data-open-tour="${t.id}">
            <div class="tour-card-icon">
              ${tourIconSvg(status === 'en_cours' || status === 'brouillon' ? 'pending' : 'confirmed')}
            </div>
            <div class="tour-card-body">
              <p class="tour-card-name">${esc(b ? `${b.prenom} ${b.nom}` : 'Sans acheteur')} <span class="status-chip ${meta.tone}">${esc(meta.label)}</span></p>
              <p class="tour-card-meta">Le tour commence à <strong>${t.time.replace(':', 'h')}</strong>${detail ? ` <span class="dot">•</span> ${detail}` : ''}</p>
            </div>
            <div class="tour-card-count">${propCount}</div>
            <div class="tour-card-chevron"><img src="assets/badge-chevron.svg" alt="" width="9" height="15"></div>
          </div>`;
      }).join('');
      return `<div class="date-group-label">${formatDateGroup(date)}</div>${rows}`;
    }).join('');
  }

  return `
    <!-- L'onglet retenu se voyait, mais ne s'annonçait pas : un lecteur d'écran
         lisait « À venir, bouton » sans dire lequel des deux est actif. Ce sont
         deux boutons bascule, d'où aria-pressed — role="tab" exigerait un
         tablist et un tabpanel que ce balisage n'a pas. -->
    <div class="tabs-toggle">
      <button class="${state.listTab === 'upcoming' ? 'active' : ''}" data-tab="upcoming"
        aria-pressed="${state.listTab === 'upcoming'}">À venir</button>
      <button class="${state.listTab === 'past' ? 'active' : ''}" data-tab="past"
        aria-pressed="${state.listTab === 'past'}">Passé</button>
    </div>
    <div class="search-bar">
      <!-- Pas de libellé visible ici : la loupe et le texte d'invite suffisent
           à l'œil. Le nom accessible dit ce que la recherche compare — le nom
           de l'acheteur, pas une adresse — ce que le texte d'invite ne dit
           plus dès la première frappe. -->
      <input type="search" class="input" id="list-search" placeholder="Chercher un tour..."
        aria-label="Chercher un tour par le nom de l'acheteur" value="${esc(state.listSearch)}">
      ${icon('search')}
    </div>
    ${listHtml}
    <button class="btn btn-primary btn-block page-create-btn" id="btn-create-tour">${icon('plus')} Créer un tour de visites</button>
  `;
}

/* ----- Screen: contact ----- */

function renderContactScreen() {
  const q = state.contactSearch.trim().toLowerCase();
  const results = q ? state.buyers.filter(b => `${b.prenom} ${b.nom}`.toLowerCase().includes(q)) : [];

  const selected = state.contactSelectedBuyer;

  let searchBlock;
  if (selected) {
    searchBlock = `
      <div class="field">
        <label class="field-label" for="selected-buyer">Sélectionnez un contact :</label>
        <div class="buyer-chip">
          <input class="input" id="selected-buyer" value="${esc(selected.prenom + ' ' + selected.nom)}" readonly>
          <div class="input-actions">
            <button class="select-icon-btn help" data-edit-buyer title="Modifier" aria-label="Modifier ce contact">${icon('pencil')}</button>
            <button class="select-icon-btn remove" id="btn-remove-selected-buyer" title="Retirer" aria-label="Retirer ce contact">${icon('x')}</button>
          </div>
        </div>
      </div>`;
  } else {
    searchBlock = `
      <div class="field">
        <label class="field-label" for="contact-search">Sélectionnez un contact :</label>
        <div class="search-bar" style="margin-bottom:10px;">
          <input type="text" class="input" id="contact-search" placeholder="Chercher un acheteur..." value="${esc(state.contactSearch)}">
          ${icon('search')}
        </div>
        ${results.length ? `<div class="panel" style="padding:6px 10px;">${results.map(b => `
          <button type="button" class="result-row" data-select-buyer="${b.id}">
            <div class="result-address">${esc(b.prenom + ' ' + b.nom)}</div>
            <div class="tour-card-chevron">${icon('chevronRight')}</div>
          </button>`).join('')}</div>` : ''}
      </div>
      <button type="button" class="link-row" id="btn-toggle-buyer-form">
        <span>Créer un nouvel acheteur</span>
        ${icon('chevronRight')}
      </button>`;
  }

  const formBlock = state.showBuyerForm ? renderBuyerForm() : '';

  const canSave = selected || (state.showBuyerForm && buyerFormValid());
  const sharing = state.contactPurpose === 'share';
  const naming = state.contactPurpose === 'name';

  // Le courriel n'est exigé qu'ici, seul endroit où il serve : un acheteur
  // nommé au bac à sable peut n'avoir qu'un nom, et on ne lui réclame ses
  // coordonnées qu'au moment où le tour doit partir chez lui.
  const noEmail = sharing && selected && !(selected.email || '').trim();
  const canSend = canSave && !noEmail;
  // Deux blocages différents sur le même bouton : personne de choisi, ou
  // quelqu'un de choisi mais sans courriel. Le motif suit le cas réel — le
  // second est déjà écrit à l'écran juste dessous, on ne le répète pas.
  const choisir = 'Sélectionnez un contact dans la liste, ou remplissez la fiche d\'un nouvel acheteur.';
  const principalWhy = whenBlocked('btn-save-contact', sharing ? canSend : canSave,
    noEmail ? 'Ajoutez un courriel à ce contact pour lui envoyer le tour.' : choisir);
  const rattacheWhy = whenBlocked('btn-attach-contact', canSave, choisir);

  const emailNote = !noEmail ? '' : `
    <p class="footer-note is-warn">${esc(selected.prenom)} n'a pas encore de courriel.
      <button class="btn-inline" data-edit-buyer>Ajouter un courriel</button> pour lui envoyer le tour.</p>`;

  // En partage, l'écran rappelle ce qui va être transmis : on choisit un
  // destinataire, pas un contact dans l'abstrait.
  const recap = !sharing || !state.draft ? '' : (() => {
    const props = state.draft.stops.filter(s => s.type === 'property');
    const end = tourEndMinutes(state.draft);
    return `
      <div class="share-recap">
        <p class="share-recap-title">Tour du ${formatDateLong(state.draft.date)}</p>
        <p class="share-recap-meta">${props.length} visite${props.length > 1 ? 's' : ''} confirmée${props.length > 1 ? 's' : ''}, de ${state.draft.time.replace(':', 'h')} à ${minutesToLabel(end)}</p>
      </div>`;
  })();

  return `
    <div class="contact-pane">
      ${recap}
      ${searchBlock}
      ${formBlock}
      <div class="form-actions" style="margin-top:${state.showBuyerForm || selected ? '4px' : '0'};">
        <button class="btn btn-primary" id="btn-save-contact"${principalWhy.a}>${sharing ? 'Envoyer à l\'acheteur' : naming ? 'Enregistrer' : 'Sauvegarder'}</button>${principalWhy.n}
        ${sharing ? `<button class="btn btn-outline" id="btn-attach-contact"${rattacheWhy.a}>Enregistrer</button>${rattacheWhy.n}` : ''}
        <button class="btn btn-outline" id="btn-cancel-contact">Annuler</button>
      </div>
      ${emailNote}
      ${sharing ? `<p class="footer-note">« Enregistrer » rattache l'acheteur au tour sans le lui envoyer : le tour reste <strong>Non envoyé</strong>.</p>` : ''}
      ${naming ? `<p class="footer-note">Le tour prend le nom de l'acheteur pour que vous le retrouviez. Rien ne lui est envoyé : il reste au <strong>bac à sable</strong>.</p>` : ''}
    </div>
  `;
}

function buyerFormValid() {
  const f = state.buyerFormDraft || {};
  const named = !!(f.prenom && f.prenom.trim() && f.nom && f.nom.trim());
  // Divulgation progressive : au bac à sable le nom suffit, puisqu'il ne sert
  // qu'à étiqueter le tour. Le courriel devient obligatoire à l'étape où il
  // sert vraiment — l'envoi — et non avant.
  if (state.contactPurpose === 'name') return named;
  return named && !!(f.emails && f.emails.some(e => e.trim()));
}

function renderBuyerForm() {
  const f = state.buyerFormDraft || { prenom: '', nom: '', emails: [''], tels: [''] };
  const saved = !!state.contactSelectedBuyer && state.showBuyerForm === 'saved';
  return `
    <div class="panel" style="padding:16px;margin:0 0 20px;">
      <div class="panel-header" id="toggle-buyer-form-panel">
        <h3>Ajouter un acheteur</h3>
        ${saved ? `<span class="status-check">${icon('check')}</span>` : icon('chevronUp')}
      </div>
      <div style="height:14px;"></div>
      <div class="field-row">
        <div class="field">
          <label class="field-label" for="bf-prenom">Prénom :</label>
          <input class="input" id="bf-prenom" value="${esc(f.prenom)}" placeholder="Prénom">
        </div>
        <div class="field">
          <label class="field-label" for="bf-nom">Nom :</label>
          <input class="input" id="bf-nom" value="${esc(f.nom)}" placeholder="Nom">
        </div>
      </div>
      <div class="field">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <label class="field-label" style="margin-bottom:0;">Courriel(s)${state.contactPurpose === 'name' ? ' <span class="field-optional">facultatif pour l\'instant</span>' : ''}</label>
          <div style="display:flex;gap:6px;">
            <button class="select-icon-btn add" id="bf-add-email" title="Ajouter un courriel" aria-label="Ajouter un courriel">${icon('plus')}</button>
            <button class="select-icon-btn help" title="Courriel principal pour l'envoi des confirmations" aria-label="Aide : à quoi sert le courriel">?</button>
          </div>
        </div>
        ${f.emails.map((val, i) => `
          <div class="input-group">
            <input class="input" type="email" data-email-idx="${i}" value="${esc(val)}" placeholder="courriel@exemple.com"
              aria-label="Courriel ${i + 1}${f.emails.length > 1 ? ` sur ${f.emails.length}` : ''}">
            ${f.emails.length > 1 ? `<button class="select-icon-btn remove" data-remove-email="${i}">${icon('x')}</button>` : ''}
          </div>`).join('')}
      </div>
      <div class="field" style="margin-bottom:4px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <label class="field-label" style="margin-bottom:0;">Téléphone(s)</label>
          <div style="display:flex;gap:6px;">
            <button class="select-icon-btn add" id="bf-add-tel" title="Ajouter un téléphone" aria-label="Ajouter un téléphone">${icon('plus')}</button>
            <button class="select-icon-btn help" title="Format: (514) 000-0000" aria-label="Aide : format du numéro">?</button>
          </div>
        </div>
        ${f.tels.map((val, i) => `
          <div class="input-group">
            <input class="input" type="tel" data-tel-idx="${i}" value="${esc(val)}" placeholder="(514) 000-0000"
              aria-label="Téléphone ${i + 1}${f.tels.length > 1 ? ` sur ${f.tels.length}` : ''}">
            <select class="input select" style="width:130px;flex:none;" data-tel-type-idx="${i}"
              aria-label="Type du téléphone ${i + 1}">
              <option ${val.type === 'Cellulaire' ? 'selected' : ''}>Non défini</option>
              <option>Cellulaire</option>
              <option>Maison</option>
              <option>Travail</option>
            </select>
            ${f.tels.length > 1 ? `<button class="select-icon-btn remove" data-remove-tel="${i}">${icon('x')}</button>` : ''}
          </div>`).join('')}
      </div>
    </div>
  `;
}

/* ----- Carte d'arrêt -----
   Un seul gabarit pour les deux écrans qui l'affichent. Il en existait deux —
   celui du tour et celui de la carte — et ils avaient déjà divergé : le libellé
   « Heure de visite » avait survécu d'un côté, les pastilles de statut
   manquaient de l'autre. Une visite annulée était donc invisible sur l'écran
   où l'on réorganise justement la journée.

   `variant` ne fait varier que ce qui dépend de l'écran : les actions n'ont de
   sens que là où on peut agir. Le reste — glyphe, adresse, horaire, statut —
   décrit le même objet, donc se rend pareil (loi de similarité). */
function renderStopCard(stop, start, { variant = 'builder', sameSlot = false, isFirst = false, isLast = false } = {}) {
  const actionable = variant === 'builder';
  // Une adresse personnalisée (Point de départ, Visite, Pause, Restaurant —
  // choisis dans son propre formulaire) n'a pas de courtier inscripteur en
  // face : elle ne demande jamais d'approbation, donc aucun statut, aucune
  // disponibilité à croiser, aucun compte rendu. Son icône est celle choisie
  // à la création, pas le glyphe de statut des visites.
  const arretKind = stop.customKind ? ARRET_KINDS[stop.customKind] : null;

  // Seul équivalent tactile et clavier au glisser-déposer : masqués sur
  // desktop (où la poignée suffit), affichés à sa place en mobile.
  const moveButtons = !actionable || arretKind || !stopIsDraggable(stop) ? '' : `
        <span class="move-stop-group">
          <button class="btn-icon move-stop-btn" data-move-stop="${stop.id}" data-direction="-1" ${isFirst ? 'disabled' : ''}
            title="Monter dans le tour" aria-label="Monter ${esc(stopShortLabel(stop))} dans le tour">${icon('arrowUp')}</button>
          <button class="btn-icon move-stop-btn" data-move-stop="${stop.id}" data-direction="1" ${isLast ? 'disabled' : ''}
            title="Descendre dans le tour" aria-label="Descendre ${esc(stopShortLabel(stop))} dans le tour">${icon('arrowDown')}</button>
        </span>`;

  const st = effectiveStopStatus(stop);
  const stMeta = STOP_STATUSES[st];
  const reportPending = !!(stop.report && !stop.report.sent);

  // Les états de l'arrêt sont des pastilles autonomes, pas une phrase à
  // séparateurs. Une puce « • » est de la ponctuation : dès que la ligne se
  // casse, elle se retrouve en tête de ligne et se lit comme un marqueur de
  // liste. Une pastille, elle, se casse sans se dénaturer.
  const suffix = st === 'proposed' && stop.proposedStart ? ` — ${stop.proposedStart.replace(':', 'h')}` : '';
  const nextSt = STOP_STATUS_CYCLE[(STOP_STATUS_CYCLE.indexOf(st) + 1) % STOP_STATUS_CYCLE.length];
  // Rien à simuler tant que la demande n'est pas partie, ni sur un écran qui
  // ne branche pas le simulateur.
  const canSim = actionable && flag('simulateConfirmation') && st !== 'sandbox';
  const statusChip = arretKind || !stMeta.label ? ''
    : canSim
      ? `<button class="stop-flag tone-${stMeta.tone} is-sim" data-sim-status="${stop.id}"
          title="Simuler la réponse du courtier inscripteur — état suivant : ${esc(STOP_STATUSES[nextSt].short)}">
          ${esc(stMeta.label)}${suffix}${icon('sync')}</button>`
      : `<span class="stop-flag tone-${stMeta.tone}">${esc(stMeta.label)}${suffix}</span>`;
  // Tant que rien n'est parti, ce que dit le calendrier de disponibilité de la
  // fiche compte plus que le statut (vide) de la demande : c'est lui qui dit
  // si l'heure choisie s'envoie sans détour ou va demander un aller-retour.
  // Une fois la demande envoyée, la réponse du courtier inscripteur prend le
  // relais — les deux ne se superposent jamais sur la même carte.
  const availTag = !arretKind && actionable && !stop.sentAt ? availabilityTagFor(stop, start) : null;
  const availChip = !availTag ? '' : `<span class="stop-flag tone-${availTag.tone}">${esc(availTag.label)}</span>`;
  // Un compte rendu mis de côté ne se retrouve que si l'arrêt le dit : sans ça,
  // « Visité » couvre autant celui qui est parti chez le vendeur que celui qui
  // attend encore, et le courtier n'a rien pour trier après coup.
  const reportChip = arretKind || !stop.visited ? ''
    : reportPending
      ? `<span class="stop-flag tone-warn">${icon('star')} Compte rendu à envoyer</span>`
      : `<span class="stop-flag tone-ok">${icon('star')} Visité</span>`;
  const extChip = arretKind || !stop.external ? ''
    : `<span class="stop-flag tone-muted" title="Hors catalogue : la demande part par courriel au courtier inscripteur, sans créer de fiche.">Hors catalogue</span>`;
  // Sur la carte, seul le statut compte : on y réorganise un trajet, pas un
  // compte rendu. Mais le statut, lui, y est indispensable — c'est lui qui dit
  // quelle étape est en train de tomber.
  const flags = (actionable ? [statusChip, availChip, reportChip, extChip] : [statusChip]).filter(Boolean).join('');

  const pinnedTitle = stopIsDraggable(stop) ? '' : `title="Demande envoyée : l'heure de cet arrêt se change par « Éditer »"`;
  const reportTitle = !stop.visited ? 'Faire le compte rendu de visite'
    : reportPending ? 'Reprendre le compte rendu et l\'envoyer' : 'Voir le compte rendu de visite';

  return `
    <div class="stop-card${sameSlot ? ' same-slot' : ''}${stopIsDraggable(stop) ? '' : ' is-pinned'}" draggable="${stopIsDraggable(stop)}" data-stop-id="${stop.id}">
      <span class="drag-handle" ${pinnedTitle}>${icon('drag')}</span>
      <div class="stop-icon${arretKind ? ' arret' : ''}">${arretKind ? icon(arretKind.icon) : stopGlyph(st)}</div>
      <div class="stop-body">
        <p class="stop-address">${esc(stop.address)}</p>
        <p class="stop-meta">${minutesToLabel(start)} – ${minutesToLabel(start + stop.duration)}</p>
        ${flags ? `<div class="stop-flags">${flags}</div>` : ''}
      </div>
      ${!actionable ? '' : arretKind ? `
      <div class="stop-actions">
        <button class="btn-icon" data-edit-arret="${stop.id}" title="Modifier l'adresse" aria-label="Modifier l'adresse ${esc(stop.address)}">${icon('pencil')}</button>
        <button class="btn-icon danger" data-remove-stop="${stop.id}" title="Retirer du tour" aria-label="Retirer ${esc(stop.address)} du tour">${icon('trash')}</button>
      </div>` : `
      <div class="stop-actions">
        ${moveButtons}
        <!-- Le crochet quitte la ligne d'adresse : un contrôle logé dans un
             paragraphe lui vole son bord gauche. Son libellé est masqué en
             desktop, donc absent de l'arbre d'accessibilité — d'où l'aria-label,
             sans lequel le bouton n'aurait aucun nom sur la moitié des écrans. -->
        <button class="pick-btn${stop.buyerPick ? ' is-on' : ''}" data-toggle-pick="${stop.id}"
          aria-pressed="${stop.buyerPick ? 'true' : 'false'}"
          aria-label="Choix de l'acheteur — ${esc(stop.address)}"
          title="${stop.buyerPick ? 'Choisie par l\'acheteur — cliquez pour retirer la marque' : 'Marquer comme choisie par l\'acheteur'}">${icon('check')}<span class="pick-label">Choix de l'acheteur</span></button>
        <button class="btn-icon" data-edit-stop="${stop.id}" title="Modifier la visite" aria-label="Modifier la visite du ${esc(stop.address)}">${icon('pencil')}</button>
        <button class="btn-icon danger" data-remove-stop="${stop.id}" title="Retirer du tour" aria-label="Retirer ${esc(stop.address)} du tour">${icon('trash')}</button>
        ${st === 'sandbox'
          // Envoyer et rendre compte ne coexistent jamais dans le temps : la
          // troisième place revient à celui des deux qui a un sens ici.
          ? `<button class="btn-icon send-request" data-send-stop="${stop.id}" title="Envoyer la demande de visite à ${esc(stop.courtier || 'ce courtier inscripteur')}" aria-label="Envoyer la demande de visite du ${esc(stop.address)} à ${esc(stop.courtier || 'ce courtier inscripteur')}">${icon('send')}</button>`
          : `<button class="btn-icon toggle-visited ${!stop.visited ? '' : reportPending ? 'todo' : 'active'}" data-toggle-visited="${stop.id}" title="${reportTitle}" aria-label="${reportTitle} — ${esc(stop.address)}">${icon('star')}</button>`}
      </div>`}
    </div>`;
}

/* ----- Screen: builder ----- */

function renderBuilderScreen() {
  const draft = state.draft;
  const buyer = draft.buyer;
  const rows = computeSchedule(draft);
  const propertyCount = draft.stops.filter(s => s.type === 'property').length;
  const saved = currentTour();
  // Le statut porte sur ce qui est à l'écran — le brouillon en cours — et non
  // sur la copie enregistrée : sinon un arrêt qu'on vient de retirer
  // continuerait de bloquer le partage.
  const liveTour = {
    stops: draft.stops,
    buyerId: buyer ? buyer.id : null,
    sharedAt: saved && saved.sharedAt,
  };
  const status = tourStatus(liveTour);
  const tally = validationTally(liveTour);
  const bannerEditTitle = 'Insérer un arrêt ou une propriété à cet endroit du tour';

  /* ----- Panneau de synthèse du trajet — maquettes Figma 5551:2871 / 5551:2174 -----
     « Afficher sur la carte » cesse d'être un écran à part pour devenir le
     dépliage de ce panneau : le trajet se lit là où il se compose. Plus de
     point de départ à choisir : le tour commence à la première visite, et les
     mesures partagent la même ligne que le bouton de la carte plutôt que
     d'empiler deux rangées pour une seule idée (loi de proximité).

     Pas de panneau sans arrêt : la maquette de l'état vide n'en a pas, et il
     n'y a pas de distance à annoncer avant la première destination. */
  const firstProp = rows.find(r => r.stop.type === 'property');
  const summaryHtml = !firstProp ? '' : (() => {
    const stat = (n, l) => `<span class="stat-item"><strong>${n}</strong> ${l}</span>`;
    const stats = [
      stat(propertyCount, `arrêt${propertyCount > 1 ? 's' : ''}`),
    ];

    // Le routage se déclenche au dépliage seulement : tant que la carte est
    // fermée, les distances de repli suffisent et rien ne part sur le réseau.
    const props = draft.stops.filter(s => s.type === 'property');
    if (state.mapOpen) ensureRouteGeometry(routePoints(props));
    const routeStatus = state.mapOpen
      ? (routeGeometry.get(routeSignature(routePoints(props))) || {}).status
      : null;

    // La note de tracé prend place au bout des mesures plutôt que sous la carte :
    // elle ne décrit pas la carte, elle qualifie ces chiffres-là — approximatifs
    // tant que le service de routage n'a pas répondu.
    if (routeStatus === 'loading') stats.push('<span class="stat-note">Tracé approximatif de l\'itinéraire routier…</span>');
    if (routeStatus === 'error') stats.push('<span class="stat-note">Tracé et distances approximatifs — service de routage indisponible.</span>');

    return `
      <section class="route-summary-section${state.mapOpen ? ' is-open' : ''}">
        <div class="rss-head">
          <div class="stats-row">${stats.join('<span class="stat-sep"></span>')}</div>
          <button class="rss-toggle" id="btn-toggle-map"
            aria-expanded="${state.mapOpen}" aria-controls="rss-map">
            Afficher sur la carte ${icon(state.mapOpen ? 'chevronUp' : 'chevronRight')}
          </button>
        </div>
        ${state.mapOpen ? `<div class="rss-map" id="rss-map"><div id="map-slot"></div></div>` : ''}
      </section>`;
  })();

  const stopsHtml = draft.stops.length === 0 ? `
    <div class="empty-state tour-empty">
      <p>Aucune destination ajoutée</p>
      <p>Utilisez le bouton ci-dessous pour ajouter les propriétés à visiter. Vous pourrez ensuite organiser l'ordre du tour.</p>
    </div>
  ` : rows.map(({ stop, start, sharesSlot }, i) => {
    const prevStop = draft.stops[i - 1];
    // La proposition de créneau partagé vit dans l'intervalle entre les deux
    // cartes : c'est exactement l'écart dont il est question (loi de proximité).
    const canShareSlot = !sharesSlot && !stop.parallel && nearbyStops(prevStop, stop);
    // Les deux cartes d'un créneau portent le même liseré : le groupe se lit
    // d'un coup d'œil, bandeau compris (loi de continuité).
    const opensSlot = !!(rows[i + 1] && rows[i + 1].sharesSlot);
    // Chaque courtier plante son heure lui-même (« Modifier la visite ») : cet
    // intervalle ne porte donc plus de trajet ni d'arrivée. Il ne reste plus
    // rien à y dire quand les deux arrêts n'ont rien de particulier entre eux —
    // seule la suggestion de créneau simultané, entre deux propriétés voisines,
    // justifie encore une bulle ici.
    let travelHtml = '';
    if (prevStop && !sharesSlot && canShareSlot) {
      travelHtml = `
        <div class="travel-chip">${icon('pin')} <span class="banner-text">${formatKm(slotDistanceKm(prevStop, stop))} seulement entre les deux</span>
          <button class="btn-inline" data-share-slot="${stop.id}">Même créneau</button>
          <span class="banner-edit"><button class="banner-edit-btn" data-edit-stop="${stop.id}" title="${bannerEditTitle}" aria-label="${bannerEditTitle}">${icon('pencil')}</button></span>
        </div>`;
    }

    // Le chevauchement n'est plus une erreur à corriger mais un choix à
    // assumer : on l'annonce au courtier acheteur — seul destinataire, les
    // courtiers inscripteurs ne voient que leur propre demande — et c'est lui
    // qui le confirme (Nielsen #1 et #3).
    let slotHtml = '';
    if (sharesSlot) {
      const km = formatKm(slotDistanceKm(prevStop, stop));
      const hour = minutesToLabel(start);
      slotHtml = stop.slotAck ? `
        <div class="slot-note is-ack">${icon('layers')}
          <span class="banner-text">Créneau simultané confirmé : deux visites à ${hour}, à ${km} l'une de l'autre.</span>
          <button class="btn-inline ghost" data-split-slot="${stop.id}">Séparer</button>
        </div>` : `
        <div class="slot-note is-pending">${icon('layers')}
          <span class="banner-text"><strong>Vous avez placé deux visites à ${hour}.</strong>
            Ces propriétés sont à ${km} l'une de l'autre. Chaque courtier inscripteur reçoit une demande pour ${hour}
            et ne voit que la sienne — à vous de confirmer que vous tenez les deux.</span>
          <button class="btn-inline" data-ack-slot="${stop.id}">Je confirme ce créneau</button>
          <button class="btn-inline ghost" data-split-slot="${stop.id}">Séparer les visites</button>
        </div>`;
    }
    // La carte est la même partout ; seul ce qui se décide sous elle appartient
    // à cet écran.
    const card = renderStopCard(stop, start, { variant: 'builder', sameSlot: sharesSlot || opensSlot, isFirst: i === 0, isLast: i === draft.stops.length - 1 });
    let answerHtml = '';
    const st = effectiveStopStatus(stop);
    // Une réponse qui n'est pas « confirmée » se lit sur la pastille de
    // l'arrêt (« Autre créneau proposé — 16h15 », « Visite refusée ») :
    // l'information suffit, et « Modifier la visite » reste la porte
    // d'entrée pour agir, sans bandeau qui force un choix. Deux régimes
    // gardent un bandeau parce qu'ils perdent quelque chose de concret
    // (une confirmation acquise, une réponse) plutôt que de simplement
    // signaler un état.
    if (st === 'cancelled') {
      // L'heure était acquise : on la nomme, parce que c'est elle qui est
      // perdue et que le reste du tour a été bâti autour.
      answerHtml = `
        <div class="stop-answer danger">${icon('warning')}
          <span class="banner-text">Le courtier inscripteur a annulé cette visite${stop.lockedStart ? `, confirmée pour ${stop.lockedStart.replace(':', 'h')}` : ''}.</span>
          <button class="btn-inline" data-retry-stop="${stop.id}">Proposer un autre créneau</button>
          <button class="btn-inline ghost" data-remove-stop-inline="${stop.id}">Retirer du tour</button>
        </div>`;
    } else if (st === 'noreply') {
      answerHtml = `
        <div class="stop-answer muted">${icon('hourglass')}
          <span class="banner-text">Sans réponse depuis 48 h.</span>
          <button class="btn-inline" data-relance-stop="${stop.id}">Relancer</button>
          <button class="btn-inline ghost" data-remove-stop-inline="${stop.id}">Retirer du tour</button>
        </div>`;
    }
    return travelHtml + slotHtml + card + answerHtml;
  }).join('');

  // L'acheteur n'apparaît qu'une fois choisi, à la fin du parcours : pendant la
  // composition du tour, un champ vide n'aurait rien à dire.
  // L'acheteur nomme le tour, donc le champ existe dès le bac à sable et non
  // seulement une fois l'envoi fait : sans nom, deux brouillons se ressemblent
  // trait pour trait dans la liste, et la recherche — qui ne cherche que des
  // contacts — ne les atteint pas.
  const buyerField = buyer ? `
    <div class="field">
      <span class="field-label" id="lbl-acheteur">Nom de l'acheteur</span>
      <button type="button" class="readonly-chip" id="btn-change-buyer" aria-describedby="lbl-acheteur">
        ${esc(buyer.prenom + ' ' + buyer.nom)}
        ${icon('chevronRight')}
      </button>
    </div>` : `
    <div class="field">
      <span class="field-label" id="lbl-acheteur">Nom de l'acheteur</span>
      <button class="readonly-chip is-empty" id="btn-name-buyer" aria-describedby="lbl-acheteur">
        Pour qui est ce tour ?
        ${icon('chevronRight')}
      </button>
    </div>`;

  // Un tour daté d'hier se range tout seul dans « Passé ». Le courtier qui
  // l'ouvre doit comprendre pourquoi il a quitté sa liste courante, et pouvoir
  // le ramener sans avoir à mentir sur sa date (Nielsen #1 et #3).
  const isPast = saved && saved.date < todayPlus(0);
  const archivePanel = !isPast ? '' : (saved.reopened ? `
    <div class="archive-panel is-reopened">
      <p class="archive-text">Daté du ${formatDateLong(saved.date)}, ce tour est maintenu dans les tours à venir.</p>
      <button class="btn-inline" id="btn-archive-tour">Le reclasser dans les tours passés</button>
    </div>` : `
    <div class="archive-panel">
      <p class="archive-text">Ce tour date du ${formatDateLong(saved.date)}. Il est classé dans les tours passés.</p>
      <button class="btn-inline" id="btn-reopen-tour">Le remettre dans les tours à venir</button>
    </div>`);

  // « Partagé » entre dans la liste : un tour peut se dégrader après son envoi
  // — un courtier annule la veille — et l'acheteur détient alors un tour qui
  // n'est plus vrai. Sans panneau, ce statut ne disait plus rien après coup.
  // Le premier arrêt porte son heure : le sélecteur ne pilote plus rien et
  // affichait une valeur que le départ et la première visite contredisaient.
  // Il cède la place à la lecture de l'heure réelle, et dit d'où elle vient.
  // Tant qu'on est au bac à sable, le premier arrêt peut déjà porter sa propre
  // heure demandée (« Modifier la visite ») : c'est elle que le sélecteur doit
  // montrer et faire bouger, sinon il affiche une heure de tour que plus rien
  // ne suit réellement.
  const firstStop = draft.stops[0];
  const firstStopTime = (firstStop && firstStop.type === 'property' && firstStop.lockedStart) || draft.time;
  const timeField = !tourStartIsFixed(draft)
    ? `<select class="input select" id="builder-time">
        ${TIME_OPTIONS.map(t => `<option value="${t}" ${t === firstStopTime ? 'selected' : ''}>${t.replace(':', 'h')}</option>`).join('')}
      </select>`
    : (() => {
        const first = draft.stops[0];
        const confirmee = effectiveStopStatus(first) === 'confirmed';
        return `
          <p class="field-static">
            <strong>${minutesToLabel(rows[0].start)}</strong>
            <span class="field-static-note">${confirmee
              ? 'Heure confirmée par le courtier inscripteur'
              : 'Heure demandée au courtier inscripteur'}</span>
          </p>`;
      })();

  const panelStatuses = ['en_cours', 'confirme', 'non_envoye', 'partage'];
  const validationPanel = !panelStatuses.includes(status) ? '' : `
    <div class="validation-panel ${status}${status === 'partage' && tally.confirmed < tally.total ? ' is-stale' : ''}">
      <div class="validation-counts">
        <span class="vcount ok">${tally.confirmed} confirmée${tally.confirmed > 1 ? 's' : ''}</span>
        ${tally.waiting ? `<span class="vcount wait">${tally.waiting} en attente</span>` : ''}
        ${tally.toHandle ? `<span class="vcount act">${tally.toHandle} à traiter</span>` : ''}
        ${tally.sandbox ? `<span class="vcount todo">${tally.sandbox} à envoyer</span>` : ''}
      </div>
      <p class="validation-help">${status === 'partage'
        // Un tour partagé n'est à jour que si tout y est encore confirmé. Une
        // visite qui attend une nouvelle réponse compte autant qu'une annulée :
        // dans les deux cas l'acheteur tient un horaire qui n'est plus vrai.
        ? (tally.confirmed < tally.total
          ? `${tally.total - tally.confirmed} visite${tally.total - tally.confirmed > 1 ? 's ne sont' : ' n\'est'} plus confirmée${tally.total - tally.confirmed > 1 ? 's' : ''} depuis l'envoi${buyer ? ` à ${esc(buyer.prenom)}` : ''}. ${buyer ? `${esc(buyer.prenom)} détient` : 'L\'acheteur détient'} un tour qui n'est plus à jour : renvoyez-le-lui une fois ${tally.total - tally.confirmed > 1 ? 'les créneaux réglés' : 'le créneau réglé'}.`
          : `Le tour a été partagé${buyer ? ` avec ${esc(buyer.prenom)}` : ''}. Toutes les visites tiennent.`)
        : tally.sandbox
        ? `${tally.sandbox} propriété${tally.sandbox > 1 ? 's' : ''} ${tally.sandbox > 1 ? 'restent' : 'reste'} au bac à sable : ${tally.sandbox > 1 ? 'leurs demandes ne sont' : 'sa demande n\'est'} pas encore partie${tally.sandbox > 1 ? 's' : ''}.`
        : status === 'non_envoye'
          ? `Toutes les visites sont confirmées. ${esc(buyer.prenom)} n'a pas encore reçu le tour.`
          : status === 'confirme'
            ? 'Toutes les visites sont confirmées. Le tour peut être partagé avec un acheteur.'
            : tally.toHandle
              ? 'Des courtiers ont répondu autre chose qu\'une confirmation. Traitez ces réponses pour débloquer le partage.'
              : 'Demandes envoyées. En attente de la réponse des courtiers inscripteurs.'}</p>
    </div>`;

  return `
    ${archivePanel}
    <!-- Entête du tour d'après la maquette Figma 5239:13673. Enveloppe dédiée :
         la maquette ne couvre que cet écran, et ses mesures — champs de 40 px,
         rythme de 26 px, valeurs en Lexend — ne valent que pour lui. Les
         appliquer aux classes globales repeindrait les sept autres écrans. -->
    <div class="tour-head">
    ${buyerField}
    <div class="field-row">
      <div class="field">
        <label class="field-label" for="builder-date">Date</label>
        <div class="input-with-icon">
          <!-- La borne guide le sélecteur natif sans jamais descendre sous la
               valeur en place : un tour déjà daté d'hier — rouvert, ou
               simplement consulté — ne doit pas s'afficher en erreur pour une
               date qu'il porte légitimement. -->
          <input type="date" class="input" id="builder-date" value="${draft.date}"
            min="${draft.date < todayPlus(0) ? draft.date : todayPlus(0)}">
        </div>
      </div>
      <div class="field">
        ${tourStartIsFixed(draft)
          ? `<span class="field-label" id="lbl-heure">Heure</span>`
          : `<label class="field-label" for="builder-time">Heure</label>`}
        ${timeField}
      </div>
    </div>
    </div>

    ${validationPanel}

    ${summaryHtml}
    <div>${stopsHtml}</div>

    <!-- En mobile first, l'action suivante se retrouve près du pouce, juste
         au-dessus de l'envoi — pas en haut d'un écran qui peut défiler loin. -->
    <div class="action-row">
      <button class="btn btn-outline" id="btn-add-destination">${icon('plus')} Ajouter une destination</button>
      ${flag('tourOptimize') ? (() => {
        const optiWhy = whenBlocked('btn-optimize', propertyCount >= 2,
          'Ajoutez au moins deux propriétés pour réordonner le tour.');
        return `<button class="btn btn-outline" id="btn-optimize"${optiWhy.a}>Optimiser le tour</button>${optiWhy.n}`;
      })() : ''}
    </div>

    <div class="footer-actions">${renderFooterActions(propertyCount, status, tally)}</div>
  `;
}

// Une seule action primaire par statut : c'est le statut qui dit quoi faire
// ensuite, pas l'utilisateur qui doit le déduire de trois boutons de même poids.
function renderFooterActions(propertyCount, status, tally) {
  const del = `<button class="btn btn-danger-outline" id="btn-delete-tour">${icon('trash')} ${status === 'brouillon'
    ? 'Supprimer le tour' : 'Supprimer ce tour et annuler les demandes de visites'}</button>`;
  // L'envoi se fait sur l'écran de choix du client : ici on ne fait que s'y
  // rendre, d'où « Choisir l'acheteur » et non « Choisir et envoyer ». Quand
  // l'acheteur est déjà retenu, cet écran sert d'écran de confirmation — on y
  // relit le tour et le destinataire avant que ça parte.
  const shareLabel = state.draft.buyer ? 'Envoyer le tour à l\'acheteur' : 'Choisir l\'acheteur';

  // Étape 1 : envoyer aux courtiers est l'action attendue, enregistrer met le
  // tour de côté pour l'envoyer plus tard. Le second est en secondaire pour que
  // la sortie normale reste évidente.
  if (status === 'brouillon') {
    const envoiWhy = whenBlocked('btn-send-tour', propertyCount > 0,
      'Ajoutez au moins une propriété : une demande de visite part chez le courtier qui l\'inscrit.');
    const gardeWhy = whenBlocked('btn-save-draft', propertyCount > 0,
      'Un tour sans propriété n\'a rien à enregistrer.');
    return `
      <button class="btn btn-primary" id="btn-send-tour"${envoiWhy.a}>
        Envoyer les demandes de visites
      </button>${envoiWhy.n}
      <button class="btn btn-outline" id="btn-save-draft"${gardeWhy.a}>Enregistrer</button>${gardeWhy.n}
      ${del}
    `;
  }
  // Seul cas où enregistrer est un vrai choix : le tour est parti, on l'a
  // modifié depuis, et on décide si les courtiers doivent être prévenus.
  if (state.dirty) {
    return `
      <button class="btn btn-primary" id="btn-save-update">Envoyer une mise à jour</button>
      <button class="btn btn-outline" id="btn-save-only">Enregistrer sans prévenir</button>
      ${del}
    `;
  }
  if (status === 'partage') {
    return `
      <button class="btn btn-primary" id="btn-share-buyer">Renvoyer le tour à l'acheteur</button>
      ${del}
    `;
  }
  // Étape 2 : les visites sont confirmées. Reste à choisir le client
  // (« confirme ») puis à lui envoyer le tour (« non_envoye ») — deux gestes,
  // une seule action primaire à chaque fois.
  if (status === 'confirme' || status === 'non_envoye') {
    return `
      <button class="btn btn-primary" id="btn-share-buyer">${shareLabel}</button>
      ${del}
    `;
  }
  // Un tour engagé peut contenir des arrêts encore au bac à sable — ajoutés
  // après coup. Tant qu'il en reste, les envoyer passe avant tout le reste :
  // c'est la seule action qui fasse avancer le tour.
  if (tally.sandbox) {
    return `
      <button class="btn btn-primary" id="btn-send-tour">
        Envoyer ${tally.sandbox} demande${tally.sandbox > 1 ? 's' : ''} de visite${tally.sandbox > 1 ? 's' : ''}
      </button>
      <button class="btn btn-outline" id="btn-share-buyer">${shareLabel}</button>
      ${del}
    `;
  }
  // En attente des courtiers. Le partage n'est ouvert que si le client accepte
  // de diffuser un tour partiellement confirmé ; sinon on dit pourquoi plutôt
  // que de laisser un bouton grisé sans explication. Le décompte des réponses
  // est porté par le panneau de validation en haut de l'écran : le répéter sur
  // le bouton le transformait en indicateur alors qu'il doit nommer une action.
  const remaining = tally.waiting + tally.toHandle;
  return `
    <button class="btn btn-primary" id="btn-share-buyer">${shareLabel}</button>
    ${remaining ? `<button class="btn btn-outline" id="btn-relance">Relancer les courtiers</button>` : ''}
    ${del}
  `;
}

/* ---------------- Modal rendering ---------------- */

function renderModal() {
  const root = document.getElementById('modal-root');
  if (!state.modal) { root.innerHTML = ''; return; }

  if (state.modal.type === 'flags') { root.innerHTML = renderFlagsModal(); return; }
  if (state.modal.type === 'destination') { root.innerHTML = renderDestinationModal(); return; }
  if (state.modal.type === 'newProperty') { root.innerHTML = renderNewPropertyModal(); return; }
  if (state.modal.type === 'visitRequest') { root.innerHTML = renderVisitRequestModal(); return; }
  if (state.modal.type === 'sendRequests') { root.innerHTML = renderSendRequestsModal(); return; }
  if (state.modal.type === 'confirmSendUpdate') { root.innerHTML = renderConfirmSendUpdateModal(); return; }
  if (state.modal.type === 'confirmDeleteTour') {
    const t = currentTour();
    const wasSent = !!(t && tourSentAt(t));
    const body = wasSent
      ? 'Cette action supprimera définitivement ce tour et annulera les demandes de visites déjà envoyées aux courtiers inscripteurs. Cette action est irréversible.'
      : 'Cette action supprimera définitivement ce tour de visites. Cette action est irréversible.';
    root.innerHTML = renderConfirmModal('Supprimer le tour', body, 'btn-confirm-delete-tour');
    return;
  }
  // Nielsen #5 dit prévenir, pas interdire : réencoder un tour d'hier est un
  // besoin réel. On ne bloque donc pas la date passée — on nomme sa
  // conséquence, qui est que le tour quitte la liste où le courtier le cherche.
  if (state.modal.type === 'confirmPastDate') {
    const body = `Ce tour sera daté du <strong>${esc(formatDateLong(state.modal.date))}</strong>.
      Comme cette date est passée, il quittera « À venir » et sera rangé dans <strong>« Passé »</strong>.
      Vous pourrez l'en sortir à tout moment depuis le tour lui-même.`;
    root.innerHTML = renderConfirmModal('Dater ce tour dans le passé ?', body, 'btn-confirm-past-date', 'Dater dans le passé', 'primary');
    return;
  }
  if (state.modal.type === 'confirmLeave') { root.innerHTML = renderConfirmLeaveModal(); return; }
  if (state.modal.type === 'confirmRemoveStop') { root.innerHTML = renderConfirmRemoveStopModal(); return; }
  if (state.modal.type === 'editBuyer') { root.innerHTML = renderEditBuyerModal(); return; }
  if (state.modal.type === 'availability') { root.innerHTML = renderAvailabilityModal(); return; }
  root.innerHTML = '';
}

// Trois choix exclusifs : c'est un groupe de boutons radio, et l'ARIA le dit —
// un lecteur d'écran annonce alors « 2 sur 3 », pas trois boutons sans rapport.
// Le champ d'adresse n'apparaît que sous le choix qui l'exige : demander une
// adresse à qui part de sa position serait du bruit (divulgation progressive).
// Le modal d'édition ne remontre pas Jours/Récurrence : on modifie l'occurrence
// cliquée, pas la règle qui l'a produite — celle-ci n'a jamais existé en tant
// que telle, la récurrence n'étant qu'un générateur au moment de la création.
function renderAvailabilityModal() {
  const m = state.modal;
  const isEdit = m.mode === 'edit';
  const canSave = !!m.selectedType && (isEdit || m.selectedDays.length > 0);

  const typePills = AVAIL_TYPES.map(t => `
    <button class="avail-type-pill${m.selectedType === t.id ? ' selected' : ''}" data-avail-type="${t.id}"
      style="--avail-color:${t.color}" role="radio" aria-checked="${m.selectedType === t.id}">
      <span class="option-radio"></span>${esc(t.label)}
    </button>`).join('');

  const dayAndRecurrence = !isEdit ? `
    <div class="field">
      <label class="field-label">Jours</label>
      <div class="avail-day-pills">
        ${MODAL_DAY_ORDER.map(label => `
          <button class="avail-day-pill${m.selectedDays.includes(label) ? ' active' : ''}" data-avail-day="${label}"
            aria-pressed="${m.selectedDays.includes(label)}">${label}</button>`).join('')}
      </div>
      ${m.selectedDays.length === 0 ? `<p class="field-error">Choisissez au moins un jour.</p>` : ''}
    </div>
    <div class="field">
      <label class="field-label">Récurrence</label>
      <div class="avail-recur-pills">
        <button class="avail-recur-pill${m.recurrence === 'semaine' ? ' active' : ''}" data-avail-recur="semaine" aria-pressed="${m.recurrence === 'semaine'}">Chaque semaine</button>
        <button class="avail-recur-pill${m.recurrence === 'mois' ? ' active' : ''}" data-avail-recur="mois" aria-pressed="${m.recurrence === 'mois'}">Chaque mois</button>
      </div>
    </div>` : '';

  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal modal-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal-head"><h2 id="modal-title">Disponibilité de la propriété</h2><button class="modal-close" id="modal-close" aria-label="Fermer">${icon('x')}</button></div>
        <div class="modal-body">
          <div class="field">
            <label class="field-label">Type</label>
            <div class="avail-type-pills">${typePills}</div>
          </div>
          <div class="field-row">
            <div class="field">
              <label class="field-label" for="avail-start">Début</label>
              <input type="time" id="avail-start" class="input" value="${minutesToHHMM(m.startMinutes)}" step="900">
            </div>
            <div class="field">
              <label class="field-label" for="avail-end">Fin</label>
              <input type="time" id="avail-end" class="input" value="${minutesToHHMM(m.endMinutes)}" step="900">
            </div>
          </div>
          ${dayAndRecurrence}
          ${m.error ? `<p class="field-error">${esc(m.error)}</p>` : ''}
        </div>
        <div class="modal-footer" style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-primary" id="btn-save-availability"${canSave ? '' : ' disabled'}>Sauvegarder</button>
          ${isEdit ? `<button class="btn btn-danger-outline" id="btn-delete-availability">Supprimer</button>` : ''}
          <button class="btn btn-outline" id="modal-cancel">Annuler</button>
        </div>
      </div>
    </div>`;
}

function bindAvailabilityModalEvents() {
  document.querySelectorAll('[data-avail-type]').forEach(btn => {
    btn.onclick = () => { state.modal.selectedType = btn.getAttribute('data-avail-type'); state.modal.error = null; render(); };
  });
  document.querySelectorAll('[data-avail-day]').forEach(btn => {
    btn.onclick = () => {
      const label = btn.getAttribute('data-avail-day');
      const days = state.modal.selectedDays;
      const idx = days.indexOf(label);
      if (idx >= 0) days.splice(idx, 1); else days.push(label);
      render();
    };
  });
  document.querySelectorAll('[data-avail-recur]').forEach(btn => {
    btn.onclick = () => {
      const val = btn.getAttribute('data-avail-recur');
      state.modal.recurrence = state.modal.recurrence === val ? null : val;
      render();
    };
  });
  const startInput = document.getElementById('avail-start');
  const endInput = document.getElementById('avail-end');
  if (startInput) startInput.onchange = () => { state.modal.startMinutes = timeToMinutes(startInput.value); state.modal.error = null; };
  if (endInput) endInput.onchange = () => { state.modal.endMinutes = timeToMinutes(endInput.value); state.modal.error = null; };

  const saveBtn = document.getElementById('btn-save-availability');
  if (saveBtn) saveBtn.onclick = saveAvailabilityModal;

  const delBtn = document.getElementById('btn-delete-availability');
  if (delBtn) delBtn.onclick = () => {
    const list = propertyAvailability(state.modal.propertyMls);
    const idx = list.findIndex(e => e.id === state.modal.eventId);
    if (idx >= 0) list.splice(idx, 1);
    closeModal();
    showToast('Créneau supprimé.', 'success');
  };
}

function saveAvailabilityModal() {
  const m = state.modal;
  if (m.startMinutes >= m.endMinutes) { m.error = 'L\'heure de fin doit être après l\'heure de début.'; render(); return; }
  const list = propertyAvailability(m.propertyMls);

  if (m.mode === 'edit') {
    const conflict = list.some(e => e.id !== m.eventId && e.date === m.date && rangesOverlap(e, m));
    if (conflict) { m.error = 'Ce créneau chevauche un autre déjà enregistré ce jour-là.'; render(); return; }
    const ev = list.find(e => e.id === m.eventId);
    ev.type = m.selectedType; ev.startMinutes = m.startMinutes; ev.endMinutes = m.endMinutes;
    closeModal();
    showToast('Créneau mis à jour.', 'success');
    return;
  }

  const dates = generateAvailDates(weekStartISO(m.date), m.selectedDays, m.recurrence);
  const today = todayPlus(0);
  const validDates = dates.filter(d => d >= today);
  if (validDates.length === 0) { m.error = 'Toutes les dates choisies sont déjà passées.'; render(); return; }
  const conflictDate = validDates.find(d => list.some(e => e.date === d && rangesOverlap(e, m)));
  if (conflictDate) { m.error = `Un créneau existe déjà le ${formatDateLong(conflictDate)}.`; render(); return; }

  validDates.forEach(d => list.push({ id: uid(), type: m.selectedType, date: d, startMinutes: m.startMinutes, endMinutes: m.endMinutes }));
  closeModal();
  showToast(validDates.length > 1 ? `${validDates.length} créneaux ajoutés.` : 'Créneau ajouté.', 'success');
}

function renderEditBuyerModal() {
  const f = state.editBuyerDraft;
  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal modal-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal-head"><h2 id="modal-title">Modifier l'acheteur</h2><button class="modal-close" id="modal-close" aria-label="Fermer">${icon('x')}</button></div>
        <div class="modal-body">
          <div class="field">
            <label class="field-label" for="eb-prenom">Prénom :</label>
            <input class="input" id="eb-prenom" value="${esc(f.prenom)}" placeholder="Prénom">
          </div>
          <div class="field">
            <label class="field-label" for="eb-nom">Nom :</label>
            <input class="input" id="eb-nom" value="${esc(f.nom)}" placeholder="Nom">
          </div>
          <div class="field">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <label class="field-label" style="margin-bottom:0;">Courriel(s)</label>
              <div style="display:flex;gap:6px;">
                <button class="select-icon-btn add" id="eb-add-email" title="Ajouter un courriel" aria-label="Ajouter un courriel">${icon('plus')}</button>
                <button class="select-icon-btn help" title="Courriel principal pour l'envoi des confirmations" aria-label="Aide : à quoi sert le courriel">?</button>
              </div>
            </div>
            ${f.emails.map((val, i) => `
              <div class="input-group">
                <input class="input" type="email" data-eb-email-idx="${i}" value="${esc(val)}" placeholder="courriel@exemple.com"
                  aria-label="Courriel ${i + 1}${f.emails.length > 1 ? ` sur ${f.emails.length}` : ''}">
                ${f.emails.length > 1 ? `<button class="select-icon-btn remove" data-eb-remove-email="${i}">${icon('x')}</button>` : ''}
              </div>`).join('')}
          </div>
          <div class="field" style="margin-bottom:4px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <label class="field-label" style="margin-bottom:0;">Téléphone(s)</label>
              <div style="display:flex;gap:6px;">
                <button class="select-icon-btn add" id="eb-add-tel" title="Ajouter un téléphone" aria-label="Ajouter un téléphone">${icon('plus')}</button>
                <button class="select-icon-btn help" title="Format: (514) 000-0000" aria-label="Aide : format du numéro">?</button>
              </div>
            </div>
            ${f.tels.map((val, i) => `
              <div class="input-group">
                <input class="input" type="tel" data-eb-tel-idx="${i}" value="${esc(val)}" placeholder="(514) 000-0000"
                  aria-label="Téléphone ${i + 1}${f.tels.length > 1 ? ` sur ${f.tels.length}` : ''}">
                <select class="input select" style="width:130px;flex:none;" data-eb-tel-type-idx="${i}"
                  aria-label="Type du téléphone ${i + 1}">
                  <option>Non défini</option>
                  <option>Cellulaire</option>
                  <option>Maison</option>
                  <option>Travail</option>
                </select>
                ${f.tels.length > 1 ? `<button class="select-icon-btn remove" data-eb-remove-tel="${i}">${icon('x')}</button>` : ''}
              </div>`).join('')}
          </div>
        </div>
        <div class="modal-footer" style="display:flex;gap:10px;">
          <button class="btn btn-primary" id="btn-save-edit-buyer">Sauvegarder</button>
          <button class="btn btn-outline" id="modal-cancel">Annuler</button>
        </div>
      </div>
    </div>`;
}

// Une adresse absente du catalogue se saisit champ par champ, pas en une ligne
// libre : c'est ce qui part par courriel au courtier inscripteur, et une adresse
// approximative n'amène personne devant la bonne porte.
function renderNewPropertyModal() {
  const f = state.newProperty;
  const missing = state.newPropertyTouched ? newPropertyMissing() : [];
  const err = key => state.newPropertyTouched && !String(f[key] || '').trim() ? ' is-error' : '';

  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal-head vr-head">
          <button class="vr-back" id="np-back" title="Retour à la recherche" aria-label="Retour à la recherche">${icon('arrowLeft')}</button>
          <h2 class="vr-title" id="modal-title">Ajouter une propriété inexistante</h2>
          <span class="vr-head-spacer"></span>
        </div>
        <div class="modal-body">
          <div class="field-row">
            <div class="field" style="flex:0 0 130px;">
              <label class="field-label" for="np-num">Numéro civique <span class="req">*</span></label>
              <input class="input${err('num')}" id="np-num" value="${esc(f.num)}" inputmode="numeric" placeholder="567">
            </div>
            <div class="field">
              <label class="field-label" for="np-street">Nom de la rue <span class="req">*</span></label>
              <input class="input${err('street')}" id="np-street" value="${esc(f.street)}" placeholder="Rue des Développeurs">
            </div>
          </div>
          <div class="field">
            <label class="field-label" for="np-unit">Appartement / unité <span class="opt">(optionnel)</span></label>
            <input class="input" id="np-unit" value="${esc(f.unit)}" placeholder="204">
          </div>
          <div class="field-row">
            <div class="field">
              <label class="field-label" for="np-city">Ville <span class="req">*</span></label>
              <input class="input${err('city')}" id="np-city" value="${esc(f.city)}" placeholder="Boucherville">
            </div>
            <div class="field">
              <label class="field-label" for="np-province">Province <span class="req">*</span></label>
              <select class="input select${err('province')}" id="np-province">
                ${PROVINCES.map(([code, label]) => `<option value="${code}" ${f.province === code ? 'selected' : ''}>${label}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="field">
            <label class="field-label" for="np-postal">Code postal <span class="opt">(optionnel)</span></label>
            <input class="input" id="np-postal" value="${esc(f.postal)}" placeholder="J4B 7K1">
          </div>

          <div class="info-banner">${icon('info')}
            <span>Cette propriété n'est pas créée dans le catalogue : la demande de visite part par courriel au courtier inscripteur que vous choisirez à l'étape suivante.</span>
          </div>
          ${missing.length ? `<p class="dest-empty" id="np-error">Il manque ${missing.join(', ').replace(/, ([^,]*)$/, ' et $1')}.</p>` : ''}
        </div>
        <div class="modal-footer" style="display:flex;flex-direction:column;gap:10px;">
          <button class="btn btn-primary btn-block" id="np-save">Enregistrer</button>
          <button class="btn btn-outline btn-block" id="modal-cancel">Annuler</button>
        </div>
      </div>
    </div>`;
}

function renderVisitRequestModal() {
  const m = state.modal;
  const courtier = m.external ? m.courtier : courtierFor(m.mls);
  const fromOptions = TIME_OPTIONS.map(t => `<option value="${timeToMinutes(t)}" ${timeToMinutes(t) === m.from ? 'selected' : ''}>${t}</option>`).join('');

  // Modifier un arrêt déjà soumis, c'est renégocier avec le courtier
  // inscripteur : le bouton nomme cet envoi. Tant que rien n'est parti, il n'y a
  // rien à faire valider — on enregistre, simplement.
  const editing = !!m.editStopId;
  // Une propriété hors catalogue n'a pas de fiche : sans courtier nommé, la
  // demande n'a personne à qui partir.
  const vrWhy = whenBlocked('vr-save', !(m.external && !courtierEntry(courtier)),
    'Nommez le courtier inscripteur : sans lui, la demande n\'a pas de destinataire.');
  // C'est l'arrêt qui est engagé ou non, pas le tour : dans un tour déjà parti,
  // une propriété ajoutée depuis reste au bac à sable jusqu'à son propre envoi.
  const editedStop = editing ? state.draft.stops.find(s => s.id === m.editStopId) : null;
  const sent = !!(editedStop && editedStop.sentAt);
  // Après un refus ou une annulation, il n'y a plus de demande à modifier :
  // celle qu'on envoie est une nouvelle, et le bouton doit le dire.
  const rejected = !!(editedStop && ['refused', 'cancelled'].includes(effectiveStopStatus(editedStop)));
  const saveLabel = !editing ? 'Enregistrer'
    : rejected ? 'Envoyer une nouvelle demande'
    : sent ? 'Envoyer la modification pour validation'
    : 'Enregistrer la modification';

  // Hors catalogue, personne ne sait à qui la demande doit partir : le courtier
  // inscripteur se cherche ici dans l'annuaire ImmoContact. Une recherche plutôt
  // qu'une liste déroulante — l'annuaire est trop long pour qu'on le déroule, et
  // on cherche un nom qu'on connaît déjà (loi de Hick). Un nom absent de
  // l'annuaire n'est jamais retenu : la demande n'aurait pas de destinataire.
  const brokerHtml = !m.external ? `
    <div class="vr-broker">
      <span class="vr-broker-avatar">${esc(initialsOf(courtier))}</span>
      <div>
        <p class="vr-broker-name">${esc(courtier)}</p>
        <p class="vr-broker-agency">Courtier inscripteur, Immocontact</p>
      </div>
    </div>` : courtier ? `
    <div class="vr-broker">
      <span class="vr-broker-avatar">${esc(initialsOf(courtier))}</span>
      <div>
        <p class="vr-broker-name">${esc(courtier)}</p>
        <p class="vr-broker-agency">Courtier inscripteur, Immocontact${courtierEntry(courtier) ? ' — ' + esc(courtierEntry(courtier).bureau) : ''}</p>
      </div>
      <button class="btn-inline ghost" id="vr-courtier-clear">Changer</button>
    </div>` : (() => {
      const q = m.courtierSearch || '';
      const found = searchCourtiers(q);
      return `
    <div class="vr-broker-pick">
      <label class="field-label" for="vr-courtier-search">Courtier inscripteur <span class="req">*</span></label>
      <div class="search-bar" style="margin-bottom:0;">
        <input type="text" class="input" id="vr-courtier-search" autocomplete="off"
          placeholder="Rechercher un courtier d'Immocontact…" value="${esc(q)}">
        ${icon('search')}
      </div>
      ${!q ? `<p class="helper-text" style="margin:8px 0 0;">Tapez un nom ou un bureau. Seuls les courtiers inscrits à Immocontact peuvent recevoir une demande de visite.</p>` : found.length ? `
        <div class="courtier-results">
          ${found.map(c => `
            <button type="button" class="courtier-row" data-pick-courtier="${esc(c.nom)}">
              <span class="vr-broker-avatar">${esc(initialsOf(c.nom))}</span>
              <span class="courtier-id">
                <span class="courtier-name">${esc(c.nom)}</span>
                <span class="courtier-office">Courtier inscripteur, Immocontact — ${esc(c.bureau)}</span>
              </span>
            </button>`).join('')}
        </div>` : `
        <p class="dest-empty">Aucun courtier de ce nom à Immocontact. Vérifiez l'orthographe : la demande ne peut partir qu'à un courtier inscrit.</p>`}
    </div>`;
    })();

  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal-head vr-head">
          <button class="vr-back" id="vr-back" title="Retour" aria-label="Retour">${icon('arrowLeft')}</button>
          <h2 class="vr-title" id="modal-title">Demande de visite</h2>
          <span class="vr-head-spacer"></span>
        </div>
        <div class="modal-body">
          ${brokerHtml}
          <div class="vr-property">
            ${m.external
              ? `<span class="result-pin">${icon('mapPinOutline')}</span>`
              : `<img class="result-thumb" src="${thumbFor(m.mls, m.address)}" alt="">`}
            <span class="vr-property-address">${esc(m.address)}</span>
            ${m.external ? `<span class="ext-chip" title="Hors catalogue : la demande part par courriel, sans créer de fiche.">Hors catalogue</span>` : ''}
          </div>

          <div class="field">
            <label class="field-label" for="vr-date">Date</label>
            <input type="date" class="input vr-date" id="vr-date" value="${m.date}">
          </div>

          <div class="field-row">
            <div class="field">
              <label class="field-label" for="vr-from">De :</label>
              <select class="input select" id="vr-from">${fromOptions}</select>
            </div>
            <div class="field">
              <label class="field-label" for="vr-duration">À :</label>
              <select class="input select" id="vr-duration">
                ${[...new Set([15, 30, m.duration])].sort((a, b) => a - b).map(d => `
                  <option value="${d}" ${m.duration === d ? 'selected' : ''}>${minutesToLabel(m.from + d).replace('h', ':')}</option>`).join('')}
              </select>
            </div>
          </div>
          <p class="vr-note">La durée de visite est limitée à 30 minutes</p>

          <div class="vr-availability">Disponibilité à confirmer</div>

          <div class="field" style="margin-bottom:4px;">
            <!-- Le texte d'invite ne tenait pas lieu d'étiquette : il disparaît
                 à la première frappe, et le champ n'a alors plus de nom. -->
            <label class="field-label" for="vr-comment">Commentaires</label>
            <textarea class="input vr-comment" id="vr-comment" placeholder="Précisions pour le courtier inscripteur" maxlength="750" rows="3">${esc(m.comment)}</textarea>
            <p class="vr-charcount">Caractères : <span id="vr-charcount">${m.comment.length}</span> / 750</p>
          </div>

          <div class="field">
            <label class="field-label" for="vr-callback">Numéro de rappel</label>
            <input type="tel" class="input" id="vr-callback" value="${esc(m.callback)}" placeholder="(514) 000-0000">
          </div>
        </div>
        <div class="modal-footer"${editing ? ' style="display:flex;flex-direction:column;gap:10px;"' : ''}>
          <button class="btn btn-primary${editing ? ' btn-block' : ''}" id="vr-save" ${editing ? '' : 'style="min-width:220px;"'}${vrWhy.a}>${saveLabel}</button>${vrWhy.n}
          ${editing ? `<button class="btn btn-outline btn-block" id="modal-cancel">Annuler</button>` : ''}
          ${m.external && !courtierEntry(courtier)
            ? `<p class="helper-text" style="margin:10px 0 0;">Choisissez le courtier inscripteur : c'est lui qui recevra la demande de visite.</p>`
            : ''}
        </div>
      </div>
    </div>`;
}

// Envoi groupé. Ce n'est pas « tout ou rien » : le courtier compose souvent
// plus large qu'il n'envoie, et garde des propriétés de côté pour un second
// tour. La liste est donc cochable, tout coché par défaut — le cas courant
// reste un clic, le cas partiel reste possible.
function renderSendRequestsModal() {
  // Une adresse personnalisée n'a pas de courtier inscripteur à qui envoyer
  // une demande : elle n'apparaît jamais dans cette liste.
  const pending = state.draft.stops.filter(s => s.type === 'property' && !s.sentAt && !s.customKind);
  const chosen = state.sendSelection || [];
  const n = chosen.length;
  // Nommer l'acheteur n'est pas vouloir le prévenir. Tant qu'aucune visite
  // n'est confirmée, le tour n'a rien à lui annoncer : on refuse d'offrir un
  // courriel irréversible comme chemin de moindre résistance (Nielsen #5).
  // L'autre variante de ce bouton porte déjà le motif dans son libellé — elle
  // devient « Choisissez au moins une propriété ». Ici le libellé nomme le
  // destinataire, donc le motif passe par la description.
  const choixWhy = whenBlocked('btn-send-broker-buyer', n > 0, 'Cochez au moins une propriété à envoyer.');
  const seulWhy = whenBlocked('btn-send-broker-only', n > 0, 'Cochez au moins une propriété à envoyer.');
  const anyConfirmed = state.draft.stops.some(s => s.type === 'property' && effectiveStopStatus(s) === 'confirmed');
  const buyer = anyConfirmed ? state.draft.buyer : null;

  const rows = pending.map(s => {
    const row = computeSchedule(state.draft).find(r => r.stop.id === s.id);
    const heure = s.lockedStart ? s.lockedStart.replace(':', 'h') : (row ? minutesToLabel(row.start) : '');
    const on = chosen.includes(s.id);
    return `
      <label class="send-row${on ? ' is-on' : ''}">
        <input type="checkbox" data-send-pick="${s.id}" ${on ? 'checked' : ''}>
        ${s.external
          ? `<span class="result-pin">${icon('mapPinOutline')}</span>`
          : `<img class="result-thumb" src="${thumbFor(s.mls, s.address)}" alt="">`}
        <span class="send-row-text">
          <span class="send-row-address">${esc(s.address)}</span>
          <span class="send-row-meta">${heure}${s.courtier ? ` <span class="dot">•</span> ${esc(s.courtier)}` : ''}</span>
        </span>
      </label>`;
  }).join('');

  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal-head"><h2 id="modal-title">Envoyer les demandes de visites</h2><button class="modal-close" id="modal-close" aria-label="Fermer">${icon('x')}</button></div>
        <div class="modal-body">
          <p class="helper-text" style="margin:0 0 14px;">Chaque courtier inscripteur reçoit la demande de sa propriété, avec le créneau que vous avez retenu. Les propriétés décochées restent au bac à sable.</p>
          <div class="send-list">${rows}</div>
        </div>
        <div class="modal-footer" style="display:flex;flex-direction:column;gap:10px;">
          ${buyer ? `
            <button class="btn btn-primary btn-block" id="btn-send-broker-buyer"${choixWhy.a}>Envoyer aux courtiers et à ${esc(buyer.prenom)}</button>${choixWhy.n}
            <button class="btn btn-outline btn-block" id="btn-send-broker-only"${seulWhy.a}>Envoyer aux courtiers seulement</button>${seulWhy.n}
          ` : `
            <button class="btn btn-primary btn-block" id="btn-send-broker-only" ${n ? '' : 'disabled'}>
              ${n ? `Envoyer ${n} demande${n > 1 ? 's' : ''}` : 'Choisissez au moins une propriété'}
            </button>
          `}
          <button class="btn btn-outline btn-block" id="modal-cancel">Annuler</button>
        </div>
      </div>
    </div>`;
}

function renderConfirmSendUpdateModal() {
  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal modal-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal-body" style="padding-top:24px;">
          <h2 id="modal-title" style="font-size:17px;text-align:center;color:var(--bleu-principal);margin:0 0 18px;">Envoyer la mise à jour à</h2>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <button class="btn btn-primary btn-block" id="btn-send-update-broker-buyer">Courtier et acheteur</button>
            <button class="btn btn-primary btn-block" id="btn-send-update-broker-only">Courtier uniquement</button>
          </div>
        </div>
      </div>
    </div>`;
}

// Le bouton de confirmation nomme l'acte plutôt que d'être un « Oui » : c'est
// le dernier endroit où l'utilisateur peut se rendre compte de ce qu'il fait.
// Rouge pour ce qui détruit, principal pour ce qui range.
function renderConfirmModal(title, body, confirmId, confirmLabel = 'Supprimer', tone = 'danger') {
  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal modal-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal-head"><h2 id="modal-title">${esc(title)}</h2><button class="modal-close" id="modal-close" aria-label="Fermer">${icon('x')}</button></div>
        <div class="modal-body"><p style="font-size:14.5px;color:var(--texte-secondaire);line-height:1.5;">${body}</p></div>
        <div class="modal-footer" style="display:flex;gap:10px;">
          <button class="btn btn-${tone}" id="${confirmId}">${esc(confirmLabel)}</button>
          <button class="btn btn-outline" id="modal-cancel">Annuler</button>
        </div>
      </div>
    </div>`;
}

// Retirer une propriété annule une demande partie à une personne réelle. Le
// modal nomme la propriété — les lignes du tour se ressemblent et la corbeille
// est petite — puis dit ce que le retrait déclenche vraiment, qui dépend de ce
// que le courtier a déjà répondu.
function renderConfirmRemoveStopModal() {
  const stop = state.draft.stops.find(s => s.id === state.modal.stopId);
  if (!stop) return '';
  const st = effectiveStopStatus(stop);
  const sent = !!stop.sentAt;
  const courtier = stop.courtier;

  const consequence = !courtier
    ? 'Cet arrêt disparaît du tour. Aucune demande n\'a été envoyée pour cette adresse.'
    : st === 'refused'
      ? `${esc(courtier)} a déjà refusé cette visite. Il n'y a rien à annuler.`
      : st === 'noreply'
        ? `${esc(courtier)} n'a pas répondu. La demande de visite sera annulée.`
        : sent
          ? `La demande de visite envoyée à ${esc(courtier)} sera annulée.`
          : `La demande de visite préparée pour ${esc(courtier)} sera perdue.`;

  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal modal-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal-head"><h2 id="modal-title">Retirer cette propriété ?</h2><button class="modal-close" id="modal-close" aria-label="Fermer">${icon('x')}</button></div>
        <div class="modal-body">
          <div class="vr-property" style="padding-bottom:14px;border-bottom:1px solid var(--bordures);margin-bottom:14px;">
            <img class="result-thumb" src="${thumbFor(stop.mls, stop.address)}" alt="">
            <span class="vr-property-address">${esc(stop.address)}</span>
          </div>
          <p style="font-size:14.5px;color:var(--texte-secondaire);line-height:1.5;margin:0;">${consequence}</p>
        </div>
        <div class="modal-footer" style="display:flex;gap:10px;">
          <button class="btn btn-danger" id="btn-confirm-remove-stop">Retirer du tour</button>
          <button class="btn btn-outline" id="modal-cancel">Annuler</button>
        </div>
      </div>
    </div>`;
}

// Trois issues, dans l'ordre où on veut qu'elles soient choisies : enregistrer
// d'abord, quitter ensuite, rester en dernier. Le bouton destructeur n'est pas
// le plus accessible (Nielsen #5 — prévention de l'erreur).
function renderConfirmLeaveModal() {
  const saved = !!state.editingTourId;
  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal modal-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal-head"><h2 id="modal-title">Quitter sans enregistrer ?</h2><button class="modal-close" id="modal-close" aria-label="Fermer">${icon('x')}</button></div>
        <div class="modal-body">
          <p style="font-size:14.5px;color:var(--texte-secondaire);line-height:1.5;margin:0;">
            ${saved
              ? 'Ce tour a été modifié depuis son dernier enregistrement. Si vous quittez maintenant, ces modifications seront perdues.'
              : 'Ce tour de visites n\'a jamais été enregistré. Si vous quittez maintenant, il sera perdu.'}
          </p>
        </div>
        <div class="modal-footer" style="display:flex;flex-direction:column;gap:10px;">
          <button class="btn btn-primary" id="btn-leave-save">Enregistrer et quitter</button>
          <button class="btn btn-danger-outline" id="btn-leave-discard">Quitter sans enregistrer</button>
          <button class="btn btn-outline" id="modal-cancel">Rester sur le tour</button>
        </div>
      </div>
    </div>`;
}

function renderFlagsModal() {
  const platform = currentPlatform();
  const groups = [];
  FEATURE_FLAGS.forEach(f => {
    let g = groups.find(x => x.name === f.group);
    if (!g) { g = { name: f.group, items: [] }; groups.push(g); }
    g.items.push(f);
  });

  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal-head"><h2 id="modal-title">Feature flags</h2><button class="modal-close" id="modal-close" aria-label="Fermer">${icon('x')}</button></div>
        <div class="modal-body">
          <p class="helper-text" style="margin-top:0;">Le Buyer's Tour est développé comme une API autonome. Ces interrupteurs simulent les comportements propres à chaque plateforme sans changer de build.</p>
          <p class="section-label" style="margin-top:18px;">Plateforme</p>
          <div class="platform-switch">
            ${PLATFORMS.map(p => `
              <button class="platform-opt ${platform === p.id ? 'active' : ''}" data-platform="${p.id}" aria-pressed="${platform === p.id ? 'true' : 'false'}">
                <span class="platform-opt-label">${esc(p.label)}</span>
                <span class="platform-opt-help">${esc(p.help)}</span>
              </button>`).join('')}
          </div>
          <p class="helper-text platform-note">${platform
            ? 'Le preset n\'agit que sur les comportements déjà branchés ; ceux marqués « à venir » sont listés pour mémoire.'
            : 'Réglage personnalisé : les interrupteurs ne correspondent à aucune plateforme. Cliquez sur l\'une des deux pour y revenir.'}</p>
          ${groups.map(g => `
            <p class="section-label" style="margin-top:18px;">${esc(g.name)}</p>
            ${g.items.map(f => `
              <div class="flag-row">
                <div class="flag-row-text">
                  <p class="flag-row-label">${esc(f.label)}</p>
                  <p class="flag-row-help">${esc(f.help)}</p>
                </div>
                ${f.wired ? `
                  <button class="switch ${flag(f.id) ? 'on' : ''}" data-flag="${f.id}" role="switch" aria-checked="${flag(f.id) ? 'true' : 'false'}" aria-label="${esc(f.label)}">
                    <span class="switch-thumb"></span>
                  </button>
                ` : `<span class="flag-soon">À venir</span>`}
              </div>
            `).join('')}
          `).join('')}
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline btn-block" id="modal-cancel">Fermer</button>
        </div>
      </div>
    </div>`;
}

const DEST_TABS = [
  { id: 'nom', label: 'Nom', icon: 'search' },
  { id: 'adresse', label: 'Adresse', icon: 'mapPinOutline' },
  { id: 'mls', label: 'MLS', icon: 'doc', prefix: '#' },
  { id: 'cart', label: 'Panier', icon: 'cart' },
  { id: 'arret', label: 'Adresse personnalisée', icon: 'plus' },
];

// Le type d'une adresse personnalisée n'est qu'une étiquette pour la
// distinguer dans son propre formulaire (maquette Figma 5757:11154) : il ne
// touche pas au modèle de l'arrêt ni à son glyphe sur la carte, et ne
// ressuscite donc pas les notions de trajet ou de pause retirées ailleurs —
// « Point de départ » et « Pause » n'y sont plus qu'un nom et une icône.
const ARRET_KIND_ORDER = ['depart', 'visite', 'pause', 'restaurant'];
const ARRET_KINDS = {
  depart: { label: 'Point de départ', icon: 'mapPinOutline' },
  visite: { label: 'Visite', icon: 'home' },
  pause: { label: 'Pause', icon: 'pauseBars' },
  restaurant: { label: 'Restaurant', icon: 'restaurant' },
};

// MLS search and Panier come from the platform's MLS integration; ImmoContact
// can run the tour builder without them.
function destTabs() {
  return DEST_TABS.filter(t => flag('mlsCart') || (t.id !== 'mls' && t.id !== 'cart'));
}
function defaultDestTab() {
  return flag('mlsCart') ? 'cart' : 'nom';
}
// Une adresse personnalisée repart de zéro à chaque ouverture de l'onglet :
// rouvrir sur le type ou l'heure d'une saisie précédente, déjà abandonnée,
// serait plus surprenant qu'utile.
function resetArretForm() {
  state.destModalArretKind = null;
  state.destModalArretKindOpen = false;
  state.destModalArretFrom = null;
  state.destModalArretDuration = null;
}

function renderDestinationModal() {
  const draft = state.draft;
  const addedMls = new Set(draft.stops.filter(s => s.mls).map(s => s.mls));
  // Modifier une adresse personnalisée revient sur ce même formulaire, mais
  // seul : basculer vers « Nom » ou « Adresse » n'aurait pas de sens pour une
  // étape déjà là, donc les autres onglets disparaissent le temps de l'édition.
  const editingArret = !!state.modal.arretEditId;
  const tabs = destTabs();
  // The active tab can become hidden if the mlsCart flag is switched off while open.
  const tab = editingArret ? 'arret' : (tabs.some(t => t.id === state.destModalTab) ? state.destModalTab : tabs[0].id);
  const q = state.destModalSearch.trim().toLowerCase();

  let body = '';

  if (tab === 'nom' || tab === 'adresse' || tab === 'mls') {
    const placeholder = tab === 'mls' ? 'Entrez le numéro MLS...' : tab === 'adresse' ? 'Entrez l\'addresse...' : 'Entrez un nom de courtier...';
    let results = [];
    if (q) {
      results = MLS_POOL.filter(p => {
        if (tab === 'mls') return p.mls.includes(q);
        if (tab === 'adresse') return p.address.toLowerCase().includes(q);
        return courtierFor(p.mls).toLowerCase().includes(q);
      }).slice(0, 8);
    }
    // Recherche par adresse sur ImmoContact : le catalogue n'est pas la seule
    // source. Ce qui s'y trouve se sélectionne, le reste s'ajoute — les deux
    // groupes le disent, plutôt que de laisser croire à une liste vide.
    const suggestions = tab === 'adresse' && q && flag('customAddress') ? addressSuggestions(q) : [];
    const grouped = tab === 'adresse' && flag('customAddress');
    const nothingFound = !!q && !results.length && !suggestions.length;
    const listHtml = !q ? '' : grouped ? `
      ${results.length ? `
        <p class="result-group">Propriétés Immocontact</p>
        ${results.map(p => resultRow(p, addedMls)).join('')}` : ''}
      ${suggestions.length ? `
        <p class="result-group">Propriétés à ajouter</p>
        ${suggestions.map(sug => suggestionRow(sug)).join('')}` : ''}
      ${!results.length && !suggestions.length ? `
        <p class="dest-empty">Aucun résultat, veuillez raffiner votre recherche ou ajouter une nouvelle adresse.</p>
        <button class="btn btn-primary btn-block" data-new-property style="margin-top:14px;">${icon('plus')} Ajouter une nouvelle adresse</button>` : ''}
    ` : `
      ${results.map(p => resultRow(p, addedMls)).join('') || `
        <p class="helper-text" style="margin-top:14px;">Aucun résultat.</p>
        ${tab === 'adresse' ? `
          <div class="info-banner clickable" data-goto-arret style="margin-top:10px;">${icon('plus')} <span>Adresse introuvable ? L'ajouter comme adresse personnalisée.</span></div>
        ` : tab === 'mls' ? `
          <div class="info-banner clickable" data-goto-arret style="margin-top:10px;">${icon('plus')} <span>Numéro MLS introuvable ? Ajouter l'adresse manuellement.</span></div>
        ` : ''}`}
    `;

    body = `
      <div class="search-bar" style="margin-bottom:14px;">
        <input type="text" class="input" id="dest-search" placeholder="${placeholder}" value="${esc(state.destModalSearch)}">
        ${icon('search')}
      </div>
      ${nothingFound ? '' : `<div class="info-banner">${icon('info')} <span>Cliquez sur un résultat pour l'ajouter directement au tour.</span></div>`}
      <div style="margin-top:10px;">${listHtml}</div>
    `;
  } else if (tab === 'cart') {
    body = `
      <div class="info-banner">${icon('info')} <span>Ces propriétés proviennent de votre sélection MLS.</span></div>
      <div style="margin-top:10px;">
        ${mlsCart.map(p => resultRow(p, addedMls)).join('') || '<p class="helper-text" style="margin-top:14px;">Votre panier MLS est vide.</p>'}
      </div>
    `;
  } else if (tab === 'arret') {
    // Rien n'est présélectionné : le type comme l'heure restent au choix du
    // courtier plutôt que de lui imposer une valeur avant même qu'il ait
    // touché au formulaire (maquette Figma 5757:4515 — champs vides tant
    // qu'on ne leur a rien dit).
    const from = state.destModalArretFrom;
    const duration = state.destModalArretDuration;
    const kind = state.destModalArretKind;
    const kindOpen = state.destModalArretKindOpen;
    const kindLabel = "Choisir votre type d'adresse";
    const fromOptions = `<option value="" disabled hidden ${from === null ? 'selected' : ''}>Choisir l'heure</option>` +
      TIME_OPTIONS.map(t => `<option value="${timeToMinutes(t)}" ${timeToMinutes(t) === from ? 'selected' : ''}>${t}</option>`).join('');
    const durationOptions = `<option value="" disabled hidden ${duration === null ? 'selected' : ''}>Choisir la durée</option>` +
      [15, 30].map(d => {
        const label = from === null ? `${d} minutes` : minutesToLabel(from + d).replace('h', ':');
        return `<option value="${d}" ${d === duration ? 'selected' : ''}>${label}</option>`;
      }).join('');

    body = `
      <div class="field">
        <div class="search-bar" style="margin-bottom:0;">
          <input type="text" class="input" id="arret-address" autocomplete="off"
            placeholder="Entrez l'adresse..." value="${esc(state.destModalPrefillAddress)}">
          ${icon('search')}
        </div>
      </div>
      <div class="field">
        <div class="arret-kind-select${kindOpen ? ' is-open' : ''}">
          <button type="button" class="arret-kind-trigger${kind ? '' : ' is-placeholder'}" id="arret-kind-trigger"
            aria-haspopup="listbox" aria-expanded="${kindOpen}" aria-label="${kindLabel}">
            <span class="arret-kind-current">
              ${kind ? `<span class="arret-kind-icon">${icon(ARRET_KINDS[kind].icon)}</span> ${esc(ARRET_KINDS[kind].label)}` : kindLabel}
            </span>
            ${icon(kindOpen ? 'chevronUp' : 'chevronDown')}
          </button>
          ${!kindOpen ? '' : `
            <div class="arret-kind-options" role="listbox" aria-label="${kindLabel}">
              ${ARRET_KIND_ORDER.map(k => `
                <button type="button" role="option" aria-selected="${k === kind}"
                  class="arret-kind-option${k === kind ? ' active' : ''}" data-arret-kind="${k}">
                  <span class="arret-kind-icon">${icon(ARRET_KINDS[k].icon)}</span> ${esc(ARRET_KINDS[k].label)}
                </button>`).join('')}
            </div>`}
        </div>
      </div>
      <div class="field-row">
        <div class="field">
          <label class="field-label" for="arret-from">De :</label>
          <select class="input select${from === null ? ' is-placeholder' : ''}" id="arret-from">${fromOptions}</select>
        </div>
        <div class="field">
          <label class="field-label" for="arret-duration">À :</label>
          <select class="input select${duration === null ? ' is-placeholder' : ''}" id="arret-duration">${durationOptions}</select>
        </div>
      </div>
      <button class="btn btn-secondary btn-block" id="btn-add-custom-stop">${icon(editingArret ? 'check' : 'plus')} ${editingArret ? 'Enregistrer les modifications' : "Ajouter l'adresse"}</button>
    `;
  }

  // Insertion depuis un bandeau : on annonce le point d'insertion et on laisse
  // une sortie vers la modification de la visite suivante, qui était l'ancien
  // comportement du crayon (Nielsen #3 — contrôle et liberté). Sans objet en
  // édition d'une adresse personnalisée : il n'y a rien à insérer.
  const anchor = editingArret ? null : insertAnchor();
  const insertHint = !anchor ? '' : `
    <div class="insert-hint">${icon('info')}
      <span>La nouvelle étape sera insérée <strong>avant</strong> ${esc(stopShortLabel(anchor))}.</span>
    </div>
    ${anchor.type === 'property' ? `
      <div class="info-banner clickable" data-edit-anchor style="margin-bottom:12px;">${icon('pencil')}
        <span>Modifier plutôt l'heure de cette visite.</span>
      </div>` : ''}
  `;

  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
        <div class="modal-head"><h2 id="modal-title">${editingArret ? 'Modifier l\'adresse personnalisée' : anchor ? 'Insérer une étape' : 'Recherche par :'}</h2><button class="modal-close" id="modal-close" aria-label="Fermer">${icon('x')}</button></div>
        <div class="modal-body">
          ${editingArret ? '' : `
          <div class="dest-tabs" role="tablist">
            ${tabs.map(t => `
              <button type="button" role="tab" aria-selected="${tab === t.id}" class="dest-tab ${tab === t.id ? 'active' : ''}" data-dest-tab="${t.id}">
                ${icon(t.icon)} ${esc(t.label)}
                ${t.id === 'cart' && mlsCart.length ? `<span class="tab-badge">${mlsCart.length}</span>` : ''}
              </button>`).join('')}
          </div>`}
          ${insertHint}
          ${body}
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline btn-block" id="modal-cancel">${state.draft.stops.length > (state.modal.initialStops ?? 0) ? 'Ajouter' : 'Fermer'}</button>
        </div>
      </div>
    </div>`;
}

function resultRow(p, addedMls) {
  const already = addedMls.has(p.mls);
  // Une inscription retirée du marché reste visible — sinon le courtier la
  // cherche sans comprendre pourquoi elle a disparu — mais ne s'ajoute pas.
  if (p.inactive) {
    return `
      <div class="result-row is-inactive" title="Cette inscription n'est plus active. Elle ne peut pas être ajoutée à un tour.">
        <img class="result-thumb" src="${thumbFor(p.mls, p.address)}" alt="">
        <div class="result-address">${esc(p.address)} <span class="result-inactive-tag">(inactive)</span></div>
      </div>`;
  }
  // The whole row is the click target and toggles the selection:
  // one click adds the property to the tour, a second click removes it.
  return `
    <button type="button" class="result-row ${already ? 'is-added' : ''}" data-toggle-property="${p.mls}" aria-pressed="${already}">
      <img class="result-thumb" src="${thumbFor(p.mls, p.address)}" alt="">

      <div class="result-address">${esc(p.address)}</div>
      <span class="result-add-btn ${already ? 'added' : ''}">
        ${icon(already ? 'check' : 'plus')}
      </span>
    </button>`;
}

// Adresse hors catalogue : pas de fiche, donc pas de vignette ni de courtier
// inscripteur connu. Le « + » ajoute directement, là où le chevron d'une fiche
// mène au formulaire de demande de visite.
function suggestionRow(sug) {
  const already = state.draft.stops.some(st => st.address === sug.address);
  return `
    <div class="result-row is-suggestion ${already ? 'is-added' : ''}" ${already ? '' : `data-add-address="${esc(sug.address)}"`}>
      <span class="result-pin">${icon('mapPinOutline')}</span>
      <div class="result-address">${esc(sug.address)}</div>
      <span class="result-add-btn ${already ? 'added' : ''}">${icon(already ? 'check' : 'plus')}</span>
    </div>`;
}

function ratingStarsHtml(group, value, labelId) {
  return `
    <div class="rating-stars" data-rating-group="${group}"${labelId ? ` aria-labelledby="${labelId}"` : ''}>
      ${[1, 2, 3, 4, 5].map(n => `
        <button type="button" class="rating-star ${n <= value ? 'active' : ''}" data-rate="${group}" data-value="${n}" aria-label="${n} étoile${n > 1 ? 's' : ''}">${icon('star')}</button>
      `).join('')}
    </div>`;
}

function optionChipsHtml(group, options, value) {
  return `
    <div class="option-chip-row" data-option-group="${group}">
      ${options.map(([val, label]) => `
        <button type="button" class="option-chip ${value === val ? 'selected' : ''}" data-option="${group}" data-value="${val}">
          <span class="option-radio"></span> ${esc(label)}
        </button>
      `).join('')}
    </div>`;
}

function renderReportScreen() {
  const stop = state.draft.stops.find(s => s.id === state.reportStopId);
  const draft = state.reportDraft;
  const courtier = stop.courtier;
  const initials = courtier.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return `
    <div class="vr-broker">
      <span class="vr-broker-avatar">${esc(initials)}</span>
      <div>
        <p class="vr-broker-name">${esc(courtier)}</p>
        <p class="vr-broker-agency">Courtier inscripteur, Immocontact</p>
      </div>
    </div>
    <div class="vr-property">
      <img class="result-thumb" src="${thumbFor(stop.mls, stop.address)}" alt="">
      <div>
        <p class="vr-property-address" style="margin:0;">${esc(stop.address)}</p>
        <p class="stop-meta" style="margin:2px 0 0;">#${esc(stop.mls)}</p>
      </div>
    </div>

    <!-- Le destinataire n'apparaissait qu'après l'envoi, dans le toast. Or ce
         formulaire demande un avis sur le prix et une intention d'offre : des
         informations négociables. Qui les reçoit se dit avant la saisie, pas
         après (Nielsen #1). -->
    <div class="info-banner" style="margin-top:16px;">${icon('info')}
      <span>Ce compte rendu sera transmis à <strong>${esc(courtier)}</strong> et aux vendeurs.
      Votre acheteur ne le reçoit pas.</span>
    </div>

    <div class="field" style="margin-top:16px;">
      <span class="field-label" id="lbl-interet" style="font-weight:700;">Intérêt global</span>
      ${ratingStarsHtml('interet', draft.interet, 'lbl-interet')}
    </div>

    <p class="section-label" style="margin-top:16px;">Prix</p>
    ${optionChipsHtml('prix', [
      ['tres_satisfaisant', 'Prix très satisfaisant'],
      ['satisfaisant', 'Prix satisfaisant'],
      ['trop_eleve', 'Prix trop élevé'],
    ], draft.prix)}

    <p class="section-label" style="margin-top:22px;font-weight:700;">Rapport sur la propriété</p>

    <div class="field" style="margin-top:10px;">
      <span class="field-label" id="lbl-interieur" style="font-weight:700;">Intérieur</span>
      ${ratingStarsHtml('interieur', draft.interieur, 'lbl-interieur')}
    </div>
    <div class="field" style="margin-top:14px;">
      <span class="field-label" id="lbl-exterieur" style="font-weight:700;">Extérieur</span>
      ${ratingStarsHtml('exterieur', draft.exterieur, 'lbl-exterieur')}
    </div>

    <p class="section-label" style="margin-top:16px;">L'acheteur va faire une offre</p>
    ${optionChipsHtml('offre', [
      ['oui', 'Oui'],
      ['peut_etre', 'Peut-être'],
      ['non', 'Non'],
    ], draft.offre)}

    <div class="field" style="margin-top:16px;">
      <label class="field-label" for="report-comment">Commentaires :</label>
      <textarea class="input report-comment" id="report-comment" maxlength="750" rows="3" placeholder="Veuillez entrer votre message.">${esc(draft.comment)}</textarea>
      <!-- Même limite que la demande de visite, donc même compteur : une
           troncature silencieuse à 750 est d'autant plus rude ici que c'est le
           plus long des deux textes. La zone vocale l'annonce sans voler le
           focus. -->
      <p class="vr-charcount" aria-live="polite">Caractères : <span id="report-charcount">${draft.comment.length}</span> / 750</p>
    </div>

    <div class="field" style="margin-top:16px;">
      <span class="field-label" id="lbl-rappel">Numéro de rappel</span>
      <div class="callback-chips" role="group" aria-labelledby="lbl-rappel">
        ${draft.callbackNumbers.map((num, i) => `
          <span class="callback-chip">${esc(num)} <button type="button" data-remove-callback="${i}" aria-label="Retirer ce numéro">${icon('x')}</button></span>
        `).join('')}
      </div>
    </div>

    <div style="max-width:300px;margin-top:20px;">
      <!-- Le bouton porte le nom que le toast lui donnera : une action garde
           son nom d'un bout à l'autre du geste. -->
      <button class="btn btn-primary btn-block" id="btn-send-report">Envoyer aux vendeurs</button>
      <button class="btn btn-outline btn-block" id="btn-send-report-later" style="margin-top:15px;">Enregistrer pour plus tard</button>
    </div>

    <!-- Le destinataire est annoncé en tête, avant la saisie. Il reste ici ce
         qui porte sur le bouton d'à côté, et rien d'autre. -->
    <p class="helper-text" style="margin-top:20px;">Enregistré pour plus tard, le compte rendu reste dans le tour :
      vous l'enverrez une fois les visites terminées.</p>`;
}

// Seul point d'entrée pour modifier une propriété du tour, quel que soit le
// bouton d'où l'on vient : même formulaire, même retour en validation.
function openVisitEditor(stop) {
  const row = computeSchedule(state.draft).find(r => r.stop.id === stop.id);
  state.modal = {
    type: 'visitRequest',
    editStopId: stop.id,
    mls: stop.mls,
    address: stop.address,
    date: state.draft.date,
    from: stop.lockedStart ? timeToMinutes(stop.lockedStart) : (row ? row.start : timeToMinutes(state.draft.time)),
    duration: stop.duration,
    comment: stop.comment || '',
    callback: stop.callback || '',
    prevDestModal: null,
  };
  render();
}

// Seul point d'entrée pour modifier une adresse personnalisée : le même
// formulaire qui l'a créée, prérempli — pas la « Demande de visite », qui
// suppose un courtier inscripteur à qui répondre.
function openArretEditor(stop) {
  state.modal = { type: 'destination', initialStops: state.draft.stops.length, arretEditId: stop.id };
  state.destModalTab = 'arret';
  state.destModalSearch = '';
  state.destModalPrefillAddress = stop.address;
  state.destModalArretKind = stop.customKind || null;
  state.destModalArretKindOpen = false;
  state.destModalArretFrom = stop.lockedStart ? timeToMinutes(stop.lockedStart) : null;
  state.destModalArretDuration = stop.lockedStart ? stop.duration : null;
  render();
}

/* ---------------- Toast ---------------- */

function showToast(msg, type = 'default') {
  const root = document.getElementById('toast-root');
  root.innerHTML = `
    <div class="toast ${type}">
      <span class="toast-icon">${type === 'success' ? '✓' : 'i'}</span>
      ${esc(msg)}
    </div>`;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { root.innerHTML = ''; }, 2600);
}

/* ---------------- Events ---------------- */

function bindEvents() {
  // Sidebar nav + mobile menu grid (only "tours" is wired; others show a toast)
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.onclick = (e) => {
      e.preventDefault();
      const id = el.getAttribute('data-nav');
      if (id === 'tours') { leaveTour(() => { state.screen = 'list'; state.draft = null; }); return; }
      if (id === 'properties') { leaveTour(() => { state.screen = 'properties'; state.draft = null; }); return; }
      if (id === 'logout') { showToast('Déconnexion — hors scope du prototype.'); return; }
      showToast('Cette section n\'est pas incluse dans ce prototype.');
    };
  });

  const menuBtn = document.getElementById('mobile-menu-btn');
  if (menuBtn) menuBtn.onclick = () => leaveTour(() => { state.screen = 'menu'; state.draft = null; });

  // Revenir depuis le compte rendu reste dans le tour : rien n'est perdu. Ne
  // sont gardées que les sorties qui abandonnent le brouillon.
  const goBack = () => {
    if (state.screen === 'report') { state.screen = 'builder'; state.reportStopId = null; state.reportDraft = null; render(); return; }
    if (state.screen === 'contact' && state.contactPurpose !== 'create') { state.contactPurpose = 'create'; state.screen = 'builder'; render(); return; }
    // Sans lien avec un tour en cours : pas de leaveTour, retour direct à la liste.
    if (state.screen === 'propertyAvailability') { state.screen = 'propertyDetail'; state.availMiniCalOpen = false; render(); return; }
    if (state.screen === 'propertyDetail') { state.screen = 'properties'; state.propertyDetailMls = null; render(); return; }
    leaveTour(() => {
      if (state.screen === 'contact' || state.screen === 'builder') { state.screen = 'list'; state.draft = null; }
      else { state.screen = 'menu'; }
    });
  };
  const backBtn = document.getElementById('mobile-back-btn');
  if (backBtn) backBtn.onclick = goBack;
  const topbarBackBtn = document.getElementById('topbar-back-btn');
  if (topbarBackBtn) topbarBackBtn.onclick = goBack;

  const flagsBtn = document.getElementById('btn-flags');
  if (flagsBtn) flagsBtn.onclick = () => { state.modal = { type: 'flags' }; render(); };

  if (state.screen === 'list') bindListEvents();
  if (state.screen === 'contact') bindContactEvents();
  if (state.screen === 'builder') bindBuilderEvents();
  if (state.screen === 'report') bindReportEvents();
  if (state.screen === 'properties') bindPropertiesEvents();
  if (state.screen === 'propertyDetail') bindPropertyDetailEvents();
  if (state.screen === 'propertyAvailability') bindAvailabilityEvents();
  bindModalEvents();
}

function bindListEvents() {
  document.querySelectorAll('[data-tab]').forEach(el => {
    el.onclick = () => { state.listTab = el.getAttribute('data-tab'); render(); };
  });
  const search = document.getElementById('list-search');
  if (search) {
    search.oninput = () => { state.listSearch = search.value; render(); setTimeout(() => { const s = document.getElementById('list-search'); if (s) { s.focus(); s.selectionStart = s.selectionEnd = s.value.length; } }, 0); };
  }
  document.querySelectorAll('[data-open-tour]').forEach(el => {
    el.onclick = () => {
      const t = state.tours.find(x => x.id === el.getAttribute('data-open-tour'));
      state.editingTourId = t.id;
      const buyer = state.buyers.find(b => b.id === t.buyerId);
      state.draft = {
        buyer: buyer || null, date: t.date, time: t.time,
        stops: JSON.parse(JSON.stringify(t.stops)),
      };
      state.dirty = false;
      state.screen = 'builder';
      render();
    };
  });
  const btn = document.getElementById('btn-create-tour');
  if (btn) btn.onclick = () => {
    state.contactSearch = '';
    state.contactSelectedBuyer = null;
    state.showBuyerForm = false;
    state.buyerFormDraft = null;
    state.editingTourId = null;
    state.dirty = false;
    state.contactPurpose = 'create';
    // Le tour se construit d'abord ; le client est choisi une fois les visites
    // confirmées, à l'étape 4.
    state.draft = newDraft(null);
    state.screen = 'builder';
    render();
  };
}

// L'acheteur retenu par l'écran : celui sélectionné dans la liste, ou celui
// que le formulaire vient de décrire (créé ou mis à jour au passage).
function resolveContactBuyer() {
  if (state.contactSelectedBuyer) return state.contactSelectedBuyer;
  if (!state.showBuyerForm) return null;
  const f = state.buyerFormDraft;
  if (!f) return null;
  const buyer = { id: f.editingId || uid(), prenom: f.prenom, nom: f.nom, email: f.emails[0], tel: f.tels[0] };
  const idx = state.buyers.findIndex(b => b.id === buyer.id);
  if (idx >= 0) state.buyers[idx] = buyer; else state.buyers.push(buyer);
  return buyer;
}

function backToBuilderFromContact() {
  state.contactPurpose = 'create';
  state.screen = 'builder';
  render();
}

function bindContactEvents() {

  const search = document.getElementById('contact-search');
  if (search) {
    search.oninput = () => { state.contactSearch = search.value; render(); setTimeout(() => { const s = document.getElementById('contact-search'); if (s) { s.focus(); s.selectionStart = s.selectionEnd = s.value.length; } }, 0); };
  }
  document.querySelectorAll('[data-select-buyer]').forEach(el => {
    el.onclick = () => {
      state.contactSelectedBuyer = state.buyers.find(b => b.id === el.getAttribute('data-select-buyer'));
      state.showBuyerForm = false;
      render();
    };
  });
  const removeBuyer = document.getElementById('btn-remove-selected-buyer');
  if (removeBuyer) removeBuyer.onclick = () => { state.contactSelectedBuyer = null; state.contactSearch = ''; render(); };
  // Deux entrées, un seul geste : le crayon de la puce et le lien « Ajouter un
  // courriel » ouvrent la même fiche préremplie.
  document.querySelectorAll('[data-edit-buyer]').forEach(el => {
    el.onclick = () => {
      const b = state.contactSelectedBuyer;
      if (!b) return;
      state.buyerFormDraft = { prenom: b.prenom, nom: b.nom, emails: [b.email || ''], tels: [b.tel || ''], editingId: b.id };
      state.showBuyerForm = true;
      state.contactSelectedBuyer = null;
      state.contactSearch = '';
      render();
      setTimeout(() => document.querySelector('[data-email-idx="0"]')?.focus(), 0);
    };
  });

  const toggleForm = document.getElementById('btn-toggle-buyer-form');
  if (toggleForm) toggleForm.onclick = () => {
    state.showBuyerForm = true;
    state.buyerFormDraft = { prenom: '', nom: '', emails: [''], tels: [''] };
    render();
    setTimeout(() => document.getElementById('bf-prenom')?.focus(), 0);
  };

  bindBuyerFormEvents();

  const saveBtn = document.getElementById('btn-save-contact');
  if (saveBtn) saveBtn.onclick = () => {
    const buyer = resolveContactBuyer();
    if (!buyer) return;
    if (state.contactPurpose === 'share') {
      shareTourWithBuyer(buyer);
      backToBuilderFromContact();
      showToast(`Tour envoyé à ${buyer.prenom} ${buyer.nom}.`, 'success');
      return;
    }
    // Nommer un tour déjà ouvert : on rattache l'acheteur au brouillon en
    // cours. Surtout pas newDraft(), qui repartirait d'un tour vide.
    if (state.contactPurpose === 'name') {
      attachBuyerToTour(buyer);
      backToBuilderFromContact();
      showToast(`Ce tour s'appelle maintenant « Tour de ${buyer.prenom} ${buyer.nom} ».`);
      return;
    }
    state.draft = newDraft(buyer);
    state.screen = 'builder';
    render();
  };
  // Même écran, deux issues : envoyer le tour, ou seulement noter à qui il est
  // destiné. Le second garde le tour en « Non envoyé ».
  const attachBtn = document.getElementById('btn-attach-contact');
  if (attachBtn) attachBtn.onclick = () => {
    const buyer = resolveContactBuyer();
    if (!buyer) return;
    attachBuyerToTour(buyer);
    backToBuilderFromContact();
    showToast(`${buyer.prenom} ${buyer.nom} enregistré. Le tour ne lui a pas encore été envoyé.`);
  };
  const cancelBtn = document.getElementById('btn-cancel-contact');
  if (cancelBtn) cancelBtn.onclick = () => {
    // Annuler depuis le partage ou le nommage ramène au tour, pas à la liste :
    // le tour existe déjà, on renonce juste à le nommer ou à le partager.
    if (state.contactPurpose !== 'create') { state.contactPurpose = 'create'; state.screen = 'builder'; render(); return; }
    leaveTour(() => { state.screen = 'list'; state.draft = null; });
  };
}

function bindBuyerFormEvents() {
  const f = state.buyerFormDraft;
  if (!f) return;
  const bind = (id, key) => { const el = document.getElementById(id); if (el) el.oninput = () => { f[key] = el.value; syncSaveButton(); }; };
  bind('bf-prenom', 'prenom');
  bind('bf-nom', 'nom');
  document.querySelectorAll('[data-email-idx]').forEach(el => {
    el.oninput = () => { f.emails[+el.getAttribute('data-email-idx')] = el.value; syncSaveButton(); };
  });
  document.querySelectorAll('[data-tel-idx]').forEach(el => {
    el.oninput = () => { f.tels[+el.getAttribute('data-tel-idx')] = el.value; };
  });
  const addEmail = document.getElementById('bf-add-email');
  if (addEmail) addEmail.onclick = () => { f.emails.push(''); render(); };
  const addTel = document.getElementById('bf-add-tel');
  if (addTel) addTel.onclick = () => { f.tels.push(''); render(); };
  document.querySelectorAll('[data-remove-email]').forEach(el => {
    el.onclick = () => { f.emails.splice(+el.getAttribute('data-remove-email'), 1); render(); };
  });
  document.querySelectorAll('[data-remove-tel]').forEach(el => {
    el.onclick = () => { f.tels.splice(+el.getAttribute('data-remove-tel'), 1); render(); };
  });
}

function syncSaveButton() {
  const valid = buyerFormValid();
  ['btn-save-contact', 'btn-attach-contact'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.disabled = !valid;
  });
}

// Sortie d'un tour : sans travail en cours on part directement, sinon on
// propose les trois issues réelles — enregistrer, abandonner, rester.
function leaveTour(go) {
  if (!hasUnsavedWork()) { go(); render(); return; }
  state.pendingLeave = go;
  state.modal = { type: 'confirmLeave' };
  render();
}

/* ----- Builder events ----- */

function bindBuilderEvents() {

  // Reclassement d'un tour passé. Ce n'est pas une modification du tour à
  // renotifier aux courtiers : c'est un rangement, propre au courtier acheteur.
  const setReopened = (value, message) => {
    const t = currentTour();
    if (!t) return;
    t.reopened = value;
    render();
    showToast(message, 'success');
  };
  const reopenBtn = document.getElementById('btn-reopen-tour');
  if (reopenBtn) reopenBtn.onclick = () => setReopened(true, 'Tour remis dans les tours à venir.');
  const archiveBtn = document.getElementById('btn-archive-tour');
  if (archiveBtn) archiveBtn.onclick = () => setReopened(false, 'Tour reclassé dans les tours passés.');

  const changeBuyer = document.getElementById('btn-change-buyer');
  if (changeBuyer) changeBuyer.onclick = () => {
    const b = state.draft.buyer;
    state.editBuyerDraft = { prenom: b.prenom, nom: b.nom, emails: [b.email], tels: [b.tel] };
    state.modal = { type: 'editBuyer' };
    render();
  };

  const dateInput = document.getElementById('builder-date');
  if (dateInput) dateInput.onchange = () => {
    const valeur = dateInput.value;
    // Un champ date vidé au clavier ne veut rien dire pour un tour : on remet
    // la valeur en place plutôt que de laisser un tour sans jour.
    if (!valeur) { dateInput.value = state.draft.date; return; }
    // Dater dans le passé range le tour hors de « À venir ». C'est un choix
    // légitime — réencoder un tour d'hier — mais qui doit être fait sciemment :
    // sans confirmation, le tour quittait la liste courante sans un mot, et le
    // courtier revenait sur un écran où son travail n'était plus.
    if (valeur < todayPlus(0) && state.draft.date >= todayPlus(0)) {
      state.modal = { type: 'confirmPastDate', date: valeur };
      render();
      return;
    }
    applyTourDate(valeur);
  };
  const timeSelect = document.getElementById('builder-time');
  if (timeSelect) timeSelect.onchange = () => {
    state.draft.time = timeSelect.value;
    // Le premier arrêt, s'il en a déjà une, garde la main sur l'heure réelle du
    // tour (computeSchedule) : la faire bouger avec le sélecteur, plutôt que de
    // la laisser en désaccord avec ce qu'il affiche.
    const first = state.draft.stops[0];
    if (first && first.type === 'property' && first.lockedStart) first.lockedStart = timeSelect.value;
    markDirtyIfSent();
    render();
  };

  const openDestModal = () => {
    // Remember how many stops the tour had when the modal opened: the footer
    // button reads "Fermer" until something is added, then becomes "Ajouter".
    state.modal = { type: 'destination', initialStops: state.draft.stops.length };
    state.destModalTab = defaultDestTab();
    state.destModalSearch = '';
    resetArretForm();
    render();
  };
  const addBtn1 = document.getElementById('btn-add-destination');
  if (addBtn1) addBtn1.onclick = openDestModal;

  const optimizeBtn = document.getElementById('btn-optimize');
  if (optimizeBtn) optimizeBtn.onclick = optimizeDraftStops;

  const toggleMap = document.getElementById('btn-toggle-map');
  if (toggleMap) toggleMap.onclick = () => { state.mapOpen = !state.mapOpen; render(); };


  // Editing a property stop's own pencil reopens the "Demande de visite" form
  // pre-filled, so the requested time and message can be adjusted.
  document.querySelectorAll('.stop-card [data-edit-stop]').forEach(el => {
    el.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === el.getAttribute('data-edit-stop'));
      if (stop) openVisitEditor(stop);
    };
  });
  document.querySelectorAll('[data-edit-arret]').forEach(el => {
    el.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === el.getAttribute('data-edit-arret'));
      if (stop) openArretEditor(stop);
    };
  });
  const slotAction = (attr, fn) => document.querySelectorAll(`[${attr}]`).forEach(el => {
    el.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === el.getAttribute(attr));
      if (stop) fn(stop);
    };
  });
  slotAction('data-share-slot', groupSameSlot);
  slotAction('data-ack-slot', ackSameSlot);
  slotAction('data-split-slot', splitSameSlot);

  // Le crayon d'un bandeau porte sur l'intervalle entre deux visites, pas sur la
  // visite elle-même : il ouvre « Ajouter une destination » ancré à cet endroit,
  // pour y glisser un arrêt personnalisé ou une propriété.
  document.querySelectorAll('.banner-edit-btn[data-edit-stop]').forEach(el => {
    el.onclick = () => {
      state.insertBeforeId = el.getAttribute('data-edit-stop');
      state.modal = { type: 'destination', initialStops: state.draft.stops.length };
      state.destModalTab = defaultDestTab();
      state.destModalSearch = '';
      state.destModalPrefillAddress = '';
      resetArretForm();
      render();
    };
  });
  document.querySelectorAll('[data-remove-stop]').forEach(el => {
    el.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === el.getAttribute('data-remove-stop'));
      if (!stop) return;
      state.modal = { type: 'confirmRemoveStop', stopId: stop.id };
      render();
    };
  });
  document.querySelectorAll('[data-toggle-visited]').forEach(el => {
    el.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === el.getAttribute('data-toggle-visited'));
      if (!stop) return;
      state.reportStopId = stop.id;
      state.reportDraft = {
        interet: stop.report?.interet || 0,
        prix: stop.report?.prix || null,
        interieur: stop.report?.interieur || 0,
        exterieur: stop.report?.exterieur || 0,
        offre: stop.report?.offre || null,
        comment: stop.report?.comment || '',
        callbackNumbers: stop.report?.callbackNumbers || [courtierPhoneFor(stop.courtier)],
      };
      state.screen = 'report';
      render();
    };
  });

  // Le simulateur parcourt le cycle complet des réponses possibles, pour que la
  // démo puisse montrer le refus et la contre-proposition, pas seulement le
  // succès.
  document.querySelectorAll('[data-sim-status]').forEach(el => {
    el.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === el.getAttribute('data-sim-status'));
      if (!stop) return;
      const cur = effectiveStopStatus(stop);
      const next = STOP_STATUS_CYCLE[(STOP_STATUS_CYCLE.indexOf(cur) + 1) % STOP_STATUS_CYCLE.length];
      if (next === 'proposed') {
        const row = computeSchedule(state.draft).find(r => r.stop.id === stop.id);
        setStopStatus(stop, 'proposed');
        stop.proposedStart = minutesToLabel((row ? row.start : timeToMinutes(state.draft.time)) + 45).replace('h', ':');
      } else if (next === 'noreply') {
        // « Sans réponse » se déduit du temps écoulé : pour la démo, on recule
        // la date d'envoi au-delà du délai plutôt que d'inventer un statut.
        setStopStatus(stop, 'pending');
        stop.relancedAt = null;
        stop.sentAt = Date.now() - RELANCE_DELAY_MS - 1000;
      } else if (next === 'pending') {
        // Sortir de « Sans réponse » demande de ramener l'envoi dans le délai :
        // sans ça, « en attente » se retraduit aussitôt en « sans réponse » et
        // le simulateur tourne en rond sur ce seul état.
        setStopStatus(stop, 'pending');
        stop.sentAt = Date.now();
        stop.relancedAt = null;
      } else {
        setStopStatus(stop, next);
      }
      // Une réponse de courtier n'est pas une modification du tour par son
      // auteur : elle s'enregistre telle quelle, sans déclencher « envoyer une
      // mise à jour ».
      persistAnswer();
      render();
      const msgs = {
        pending: `Demande envoyée à ${stop.courtier}, en attente de réponse.`,
        confirmed: `Visite confirmée par ${stop.courtier}${stop.lockedStart ? ` à ${stop.lockedStart.replace(':', 'h')}` : ''}.`,
        proposed: `${stop.courtier} propose ${stop.proposedStart ? stop.proposedStart.replace(':', 'h') : 'un autre créneau'}.`,
        refused: `${stop.courtier} a refusé cette visite.`,
        noreply: `${stop.courtier} n'a pas répondu depuis 48 h.`,
      };
      showToast(msgs[next], next === 'confirmed' ? 'success' : 'default');
    };
  });

  // Arbitrages posés sous chaque arrêt qui attend une décision.
  document.querySelectorAll('[data-remove-stop-inline]').forEach(el => {
    el.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === el.getAttribute('data-remove-stop-inline'));
      if (!stop) return;
      state.modal = { type: 'confirmRemoveStop', stopId: stop.id };
      render();
    };
  });
  // Retenter après un refus : même formulaire que la modification, préréglé sur
  // le créneau refusé — c'est celui qu'on vient changer.
  document.querySelectorAll('[data-retry-stop]').forEach(el => {
    el.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === el.getAttribute('data-retry-stop'));
      if (stop) openVisitEditor(stop);
    };
  });
  document.querySelectorAll('[data-relance-stop]').forEach(el => {
    el.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === el.getAttribute('data-relance-stop'));
      if (!stop) return;
      relanceTour();
      showToast(`Relance envoyée à ${stop.courtier}.`, 'success');
    };
  });
  const relanceBtn = document.getElementById('btn-relance');
  if (relanceBtn) relanceBtn.onclick = () => {
    relanceTour();
    showToast('Relance envoyée aux courtiers qui n\'ont pas encore répondu.', 'success');
  };

  const sendBtn = document.getElementById('btn-send-tour');
  if (sendBtn) sendBtn.onclick = () => {
    // Tout est coché d'avance : envoyer l'ensemble reste un clic, choisir
    // devient possible sans devenir obligatoire.
    state.sendSelection = state.draft.stops.filter(s => s.type === 'property' && !s.sentAt && !s.customKind).map(s => s.id);
    state.modal = { type: 'sendRequests' };
    render();
  };

  // Marquer une propriété comme venant de l'acheteur. C'est une annotation
  // interne au courtier acheteur : le courtier inscripteur n'en sait rien et n'a
  // rien à revalider, donc on persiste sans marquer le tour modifié.
  document.querySelectorAll('[data-toggle-pick]').forEach(el => {
    el.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === el.getAttribute('data-toggle-pick'));
      if (!stop) return;
      stop.buyerPick = !stop.buyerPick;
      persistAnswer();
      render();
    };
  });

  // Envoi d'une seule demande, depuis l'arrêt lui-même.
  document.querySelectorAll('[data-send-stop]').forEach(el => {
    el.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === el.getAttribute('data-send-stop'));
      if (stop) sendStopRequest(stop);
    };
  });

  // Étape 4 : le partage passe par le choix du client. Quand le tour en a déjà
  // un, on repart quand même de cet écran — c'est là qu'on peut le changer.
  const goToShare = () => {
    state.contactPurpose = 'share';
    state.contactSelectedBuyer = state.draft.buyer || null;
    state.contactSearch = '';
    state.showBuyerForm = false;
    state.buyerFormDraft = null;
    state.screen = 'contact';
    render();
  };
  const shareBtn = document.getElementById('btn-share-buyer');
  if (shareBtn) shareBtn.onclick = goToShare;

  // Nommer n'est pas notifier : au bac à sable, on ne fait que poser une
  // étiquette sur le tour, rien ne part chez l'acheteur. D'où un troisième
  // usage de l'écran de contact, distinct du partage.
  const nameBuyerBtn = document.getElementById('btn-name-buyer');
  if (nameBuyerBtn) nameBuyerBtn.onclick = () => {
    state.contactPurpose = 'name';
    state.contactSelectedBuyer = null;
    state.contactSearch = '';
    state.showBuyerForm = false;
    state.buyerFormDraft = null;
    state.screen = 'contact';
    render();
  };


  const saveDraftBtn = document.getElementById('btn-save-draft');
  if (saveDraftBtn) saveDraftBtn.onclick = () => {
    saveDraftAsTour();
    state.screen = 'list';
    state.listTab = 'upcoming';
    state.draft = null;
    render();
    showToast('Tour enregistré. Vous pourrez l\'envoyer plus tard.', 'success');
  };

  const saveUpdateBtn = document.getElementById('btn-save-update');
  if (saveUpdateBtn) saveUpdateBtn.onclick = () => { state.modal = { type: 'confirmSendUpdate' }; render(); };
  const saveOnlyBtn = document.getElementById('btn-save-only');
  if (saveOnlyBtn) saveOnlyBtn.onclick = () => saveDraftToTour(false);

  const deleteBtn = document.getElementById('btn-delete-tour');
  if (deleteBtn) deleteBtn.onclick = () => { state.modal = { type: 'confirmDeleteTour' }; render(); };

  bindDragAndDrop();

  document.querySelectorAll('[data-move-stop]').forEach(el => {
    el.onclick = () => moveStop(el.getAttribute('data-move-stop'), +el.getAttribute('data-direction'));
  });
}

/* ----- Leaflet tour map -----
   Leaflet keeps its state in a DOM node, but render() replaces #main-content
   wholesale, which orphans that node. So the instance is disposed and rebuilt
   on every render of this screen. The view is carried across rebuilds as long
   as the same set of stops is displayed, so panning and zooming survive a
   reorder; changing the set of stops refits the bounds instead. */
const tourMap = { instance: null, center: null, zoom: null, sig: null };

/* ----- Hôte persistant de la carte -----
   render() remplace tout #main-content par innerHTML. Une instance Leaflet posée
   dedans serait donc détruite et reconstruite à chaque rendu — or le builder se
   rerend à chaque caractère tapé dans la recherche de destination. Reconstruire
   la carte et rejouer le routage à cette cadence dépasse largement les 400 ms au
   bout desquelles une interface cesse de paraître immédiate.

   Le conteneur vit donc dans une variable, hors du document entre deux rendus, et
   se replace dans son emplacement après coup : déplacer un nœud ne détruit pas la
   carte, il suffit de lui redonner ses dimensions. */
let mapHostEl = null;
function mapHost() {
  if (!mapHostEl) {
    mapHostEl = document.createElement('div');
    mapHostEl.id = 'leaflet-map';
    mapHostEl.className = 'tour-map';
  }
  return mapHostEl;
}

// Le trajet tracé : les propriétés dans l'ordre. Deux tours qui partagent
// cette signature partagent le même tracé et le même cadrage — inutile de
// reconstruire.
function tourMapSignature() {
  const props = state.draft ? state.draft.stops.filter(s => s.type === 'property') : [];
  return props.map(s => s.id).join(',');
}

// Appelé après chaque rendu : replace la carte dans l'emplacement du moment, la
// construit si elle n'existe pas, et ne la refait que si le trajet a changé.
function syncTourMap() {
  const slot = document.getElementById('map-slot');
  if (!slot) { destroyTourMap(); return; }
  const host = mapHost();
  if (host.parentNode !== slot) slot.appendChild(host);
  if (!tourMap.instance) { buildTourMap(); return; }
  if (tourMap.sig !== tourMapSignature()) { destroyTourMap(); buildTourMap(); return; }
  // Le nœud vient d'être rattaché : sans ça Leaflet garde les dimensions qu'il
  // avait au moment du détachement, c'est-à-dire zéro.
  tourMap.instance.invalidateSize();
}

// Each leg gets its own colour, running green → blue → navy so the direction of
// the tour reads at a glance. Leaflet draws no arrowheads without a plugin, and
// the progression does that job while staying inside the brand palette.
const ROUTE_LEG_COLORS = ['#28A745', '#0E8F8F', '#0066DC', '#3B4E9B', '#213163'];
// Un trait et un texte ne se lisent pas au même seuil : 3:1 pour un graphique,
// 4,5:1 pour du texte. Le vert et le turquoise du tracé tombent à 3,1 et 3,9
// dès qu'ils écrivent un mot. La pastille prend donc une version foncée de la
// même teinte — elle reste appariée à son segment, et devient lisible.
const ROUTE_LEG_LABEL_COLORS = ['#17792A', '#0B7373', '#0066DC', '#3B4E9B', '#213163'];
function legColorIndex(i, total) {
  if (total <= 1) return 0;
  return Math.round((i / (total - 1)) * (ROUTE_LEG_COLORS.length - 1));
}
function legColor(i, total) { return ROUTE_LEG_COLORS[legColorIndex(i, total)]; }
function legLabelColor(i, total) { return ROUTE_LEG_LABEL_COLORS[legColorIndex(i, total)]; }

// Personne ne conduit en ligne droite : sans service de routage, une ligne
// tirée à la règle entre deux adresses ne ressemble à rien. On trace donc une
// courbe plausible — un arc dont le sens vient du hash des coordonnées, donc
// stable d'un rendu à l'autre — et on la pointille pour dire qu'elle est
// approximative.
function mockRoadPath(a, b) {
  const steps = 28;
  const bow = 0.11 * ((hashStr(coordKey(a) + coordKey(b)) % 2) ? 1 : -1);
  const mLat = (a.lat + b.lat) / 2, mLng = (a.lng + b.lng) / 2;
  // Décalage perpendiculaire à la corde, corrigé de la convergence des
  // méridiens pour que l'arc soit perpendiculaire à l'écran, pas sur la sphère.
  const k = Math.cos(mLat * Math.PI / 180) || 1;
  const cLat = mLat - bow * (b.lng - a.lng) * k;
  const cLng = mLng + bow * (b.lat - a.lat) / k;
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps, u = 1 - t;
    out.push([
      u * u * a.lat + 2 * u * t * cLat + t * t * b.lat,
      u * u * a.lng + 2 * u * t * cLng + t * t * b.lng,
    ]);
  }
  return out;
}

// Point situé à une fraction de la longueur du tracé, et cap à cet endroit. La
// géométrie routière est dense dans les virages et clairsemée sur les
// autoroutes : se fier à l'index placerait les repères dans les carrefours.
function pointAtFraction(path, f) {
  if (path.length < 2) return { at: path[0], deg: 0 };
  const seg = [];
  let total = 0;
  for (let i = 1; i < path.length; i++) {
    const d = haversineKm({ lat: path[i - 1][0], lng: path[i - 1][1] }, { lat: path[i][0], lng: path[i][1] });
    total += d;
    seg.push(total);
  }
  const target = total * f;
  let i = seg.findIndex(d => d >= target);
  if (i < 0) i = seg.length - 1;
  const a = path[i], b = path[i + 1] || path[i];
  const k = Math.cos(a[0] * Math.PI / 180) || 1;
  return { at: a, deg: Math.atan2((b[1] - a[1]) * k, b[0] - a[0]) * 180 / Math.PI };
}

function destroyTourMap() {
  if (!tourMap.instance) return;
  tourMap.center = tourMap.instance.getCenter();
  tourMap.zoom = tourMap.instance.getZoom();
  tourMap.instance.remove();
  tourMap.instance = null;
}

function buildTourMap() {
  const el = document.getElementById('leaflet-map');
  if (!el || typeof L === 'undefined') return;

  const props = state.draft.stops.filter(s => s.type === 'property');
  const sig = tourMapSignature();
  const sameSet = tourMap.sig === sig && tourMap.center && tourMap.zoom != null;

  const map = L.map(el, { scrollWheelZoom: false });
  tourMap.instance = map;
  tourMap.sig = sig;

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap',
  }).addTo(map);

  const pts = routePoints(props);
  const latlngs = pts.map(s => { const c = coordsFor(s); return [c.lat, c.lng]; });

  // One polyline per leg rather than a single line, so each segment carries its
  // own colour and its travel time label is unambiguously tied to it.
  const legCount = Math.max(0, pts.length - 1);

  // Road-following geometry when OSRM has answered, tracé simulé sinon.
  const routed = routeGeometry.get(routeSignature(pts));
  const isRouted = !!(routed && routed.status === 'ok');
  const legPath = (i) => {
    if (isRouted && routed.legs[i] && routed.legs[i].length > 1) return routed.legs[i];
    return mockRoadPath(coordsFor(pts[i]), coordsFor(pts[i + 1]));
  };

  // Halo puis gainage blanc sous chaque segment : sur des tuiles chargées, une
  // ligne sans contour disparaît dans le réseau routier du fond. Tous les
  // gainages passent avant les lignes colorées, sinon un gainage recouvrirait le
  // segment précédent à la jonction.
  for (let i = 0; i < legCount; i++) {
    const path = legPath(i);
    L.polyline(path, {
      color: '#213163', weight: 14, opacity: 0.12, interactive: false, lineJoin: 'round', lineCap: 'round',
    }).addTo(map);
    L.polyline(path, {
      color: '#FFFFFF', weight: 11, opacity: 0.95, interactive: false, lineJoin: 'round', lineCap: 'round',
    }).addTo(map);
  }

  for (let i = 0; i < legCount; i++) {
    const a = coordsFor(pts[i]), b = coordsFor(pts[i + 1]);
    const color = legColor(i, legCount);
    const labelColor = legLabelColor(i, legCount);
    const path = legPath(i);
    L.polyline(path, {
      color, weight: 6, opacity: 1, lineJoin: 'round', lineCap: 'round',
      // Le pointillé dit que le tracé est estimé, pas relevé sur la route.
      dashArray: isRouted ? null : '11 9',
    }).addTo(map);

    // Deux repères de direction par segment : c'est ce qui rend lisible « les
    // visites s'enchaînent dans un seul sens », et contrairement à une
    // animation, ça survit à une capture d'écran.
    [0.32, 0.72].forEach(f => {
      const { at, deg } = pointAtFraction(path, f);
      L.marker(at, {
        interactive: false,
        icon: L.divIcon({
          className: 'route-arrow-wrap',
          html: `<svg class="route-arrow" style="transform:rotate(${deg.toFixed(1)}deg);" viewBox="0 0 24 24">
            <path d="M12 3.5l7.5 15.5L12 15l-7.5 4z" fill="${color}" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round"/></svg>`,
          iconSize: [18, 18], iconAnchor: [9, 9],
        }),
      }).addTo(map);
    });

    // Le temps de trajet est posé sur le segment auquel il appartient : le coût
    // de l'ordre choisi se lit sur la carte, pas seulement dans la liste. Placé
    // à la moitié de la distance parcourue — le milieu de la corde tombe
    // souvent loin de la route réellement suivie.
    L.marker(pointAtFraction(path, 0.5).at, {
      interactive: false,
      icon: L.divIcon({
        className: 'leg-label-wrap',
        html: `<span class="leg-label" style="color:${labelColor};border-color:${color};">${geoTravelMinutes(a, b)} min</span>`,
        iconSize: [54, 20], iconAnchor: [27, 10],
      }),
    }).addTo(map);
  }

  props.forEach((s, i) => {
    const c = coordsFor(s);
    L.marker([c.lat, c.lng], {
      title: s.address,
      icon: L.divIcon({
        className: 'tour-pin-wrap',
        html: `<span class="tour-pin">${i + 1}</span>`,
        iconSize: [28, 28], iconAnchor: [14, 14],
      }),
    }).addTo(map).bindPopup(`<strong>${esc(s.address)}</strong>`);
  });

  if (sameSet) {
    map.setView(tourMap.center, tourMap.zoom);
  } else if (latlngs.length) {
    // Cadrer sur le tracé et pas seulement sur les épingles : ni la route ni
    // l'arc simulé ne tiennent dans le rectangle des arrêts.
    const bounds = L.latLngBounds(latlngs);
    for (let i = 0; i < legCount; i++) legPath(i).forEach(pt => bounds.extend(pt));
    // Plafond à 16 : deux propriétés voisines de 400 m tenaient dans un moignon
    // de 20 px au zoom 14, alors que c'est justement le cas où le tracé compte.
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
  } else {
    map.setView([45.5019, -73.5674], 11);
  }

  map.invalidateSize();
}

function bindReportEvents() {
  document.querySelectorAll('[data-rate]').forEach(el => {
    el.onclick = () => {
      state.reportDraft[el.getAttribute('data-rate')] = +el.getAttribute('data-value');
      render();
    };
  });

  document.querySelectorAll('[data-option]').forEach(el => {
    el.onclick = () => {
      state.reportDraft[el.getAttribute('data-option')] = el.getAttribute('data-value');
      render();
    };
  });

  const comment = document.getElementById('report-comment');
  if (comment) comment.oninput = () => {
    state.reportDraft.comment = comment.value;
    // Pas de render() : réécrire l'écran à chaque frappe ferait perdre le
    // curseur. Seul le compteur bouge, on le met à jour à la main.
    const cc = document.getElementById('report-charcount');
    if (cc) cc.textContent = comment.value.length;
  };

  document.querySelectorAll('[data-remove-callback]').forEach(el => {
    el.onclick = () => {
      state.reportDraft.callbackNumbers.splice(+el.getAttribute('data-remove-callback'), 1);
      render();
    };
  });

  const finalizeReport = (sent) => {
    const stop = state.draft.stops.find(s => s.id === state.reportStopId);
    stop.report = { ...state.reportDraft, sent };
    stop.visited = true;
    markDirtyIfSent();
    state.reportStopId = null;
    state.reportDraft = null;
    state.screen = 'builder';
    render();
    showToast(sent
      ? 'Compte rendu envoyé aux vendeurs.'
      : 'Compte rendu enregistré. Rouvrez-le depuis l\'arrêt pour l\'envoyer.', 'success');
  };
  const sendBtn = document.getElementById('btn-send-report');
  if (sendBtn) sendBtn.onclick = () => finalizeReport(true);
  const sendLaterBtn = document.getElementById('btn-send-report-later');
  if (sendLaterBtn) sendLaterBtn.onclick = () => finalizeReport(false);
}

// Le glisser-déposer est l'outil du bac à sable : seul un arrêt dont la demande
// n'est pas partie se saisit. Un arrêt engagé reste en revanche une destination
// valable — son heure est épinglée par `lockedStart`, donc le contourner ne
// déplace rien de ce qui a été promis à son courtier inscripteur. Le seul
// chemin pour changer l'heure d'un arrêt engagé reste « Éditer ».
function bindDragAndDrop() {
  const stopById = (id) => state.draft.stops.find(s => s.id === id);
  document.querySelectorAll('.stop-card').forEach(card => {
    const stop = stopById(card.getAttribute('data-stop-id'));
    if (!stop) return;

    if (stopIsDraggable(stop)) {
      card.addEventListener('dragstart', () => {
        state.dragStopId = card.getAttribute('data-stop-id');
        card.classList.add('dragging');
      });
      card.addEventListener('dragend', () => {
        state.dragStopId = null;
        card.classList.remove('dragging');
        document.querySelectorAll('.stop-card').forEach(c => c.classList.remove('drag-over'));
      });
    }

    card.addEventListener('dragover', (e) => {
      if (!state.dragStopId) return;
      e.preventDefault();
      card.classList.add('drag-over');
    });
    card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
    card.addEventListener('drop', (e) => {
      e.preventDefault();
      card.classList.remove('drag-over');
      const fromId = state.dragStopId;
      const toId = card.getAttribute('data-stop-id');
      if (!fromId || fromId === toId) return;
      const stops = state.draft.stops;
      const fromIdx = stops.findIndex(s => s.id === fromId);
      const toIdx = stops.findIndex(s => s.id === toId);
      if (fromIdx < 0 || toIdx < 0) return;
      const [moved] = stops.splice(fromIdx, 1);
      stops.splice(toIdx, 0, moved);
      markDirtyIfSent();
      render();
    });
  });
}

/* ----- Modal events ----- */

/* ----- Focus des modales -----
   ESC et le clic sur le fond fermaient déjà ; il manquait le clavier. Sans
   piège, Tab sortait de la modale et parcourait la page derrière l'overlay :
   une page qu'on ne voit pas et qu'on ne peut pas actionner (WCAG 2.4.3). */
const FOCUSABLE_SEL = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function focusablesIn(root) {
  return [...root.querySelectorAll(FOCUSABLE_SEL)].filter(el => el.offsetParent !== null);
}

// L'identité de la modale ouverte. Le rendu étant intégral à chaque frappe, il
// faut distinguer « une autre modale s'ouvre » de « la même se redessine » :
// sans ça, le focus retournerait au premier champ à chaque caractère tapé.
let modalFocusKey = null;
function modalKey() {
  const m = state.modal;
  return m ? `${m.type}:${m.stopId || m.editStopId || m.mls || m.address || ''}` : null;
}

function trapModalFocus(e) {
  if (e.key !== 'Tab' || !state.modal) return;
  const modal = document.querySelector('#modal-overlay .modal');
  if (!modal) return;
  const items = focusablesIn(modal);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (!modal.contains(document.activeElement)) { e.preventDefault(); first.focus(); return; }
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

// Le focus entre dans la modale à son ouverture, et revient à son point de
// départ à la fermeture — sans quoi il repart en haut de page et le courtier
// doit refaire tout le chemin au clavier.
let modalReturnFocus = null;
function syncModalFocus() {
  const key = modalKey();
  if (key === modalFocusKey) return;
  const opening = !modalFocusKey && key;
  const closing = modalFocusKey && !key;
  modalFocusKey = key;

  if (opening) modalReturnFocus = describeFocus(document.activeElement);
  if (closing) { restoreFocus(modalReturnFocus); modalReturnFocus = null; return; }
  if (!key) return;

  const modal = document.querySelector('#modal-overlay .modal');
  if (!modal) return;
  const items = focusablesIn(modal);
  (items[0] || modal).focus();
}

// Le rendu détruit le DOM : on retient de quoi retrouver le déclencheur, pas
// le nœud lui-même.
function describeFocus(el) {
  if (!el || el === document.body) return null;
  if (el.id) return `#${CSS.escape(el.id)}`;
  for (const attr of el.getAttributeNames()) {
    if (attr.startsWith('data-')) return `[${attr}="${CSS.escape(el.getAttribute(attr))}"]`;
  }
  return null;
}

function restoreFocus(sel) {
  if (!sel) return;
  const el = document.querySelector(sel);
  if (el) el.focus();
}

function closeModal() { state.modal = null; state.insertBeforeId = null; state.pendingLeave = null; render(); }

function bindModalEvents() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.onclick = (e) => { if (e.target === overlay) closeModal(); };
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.onclick = closeModal;
  const cancelBtn = document.getElementById('modal-cancel');
  if (cancelBtn) cancelBtn.onclick = closeModal;

  document.addEventListener('keydown', escHandler);
  document.addEventListener('keydown', trapModalFocus);

  if (state.modal.type === 'flags') {
    document.querySelectorAll('[data-platform]').forEach(el => {
      el.onclick = () => {
        const id = el.getAttribute('data-platform');
        applyPlatformPreset(id);
        render();
        showToast(`Comportement ${PLATFORMS.find(p => p.id === id).label} appliqué.`, 'success');
      };
    });
    document.querySelectorAll('[data-flag]').forEach(el => {
      el.onclick = () => {
        const id = el.getAttribute('data-flag');
        state.flags[id] = !state.flags[id];
        saveFlags();
        render();
      };
    });
  }
  if (state.modal.type === 'destination') bindDestinationModalEvents();
  if (state.modal.type === 'newProperty') bindNewPropertyModalEvents();
  if (state.modal.type === 'visitRequest') bindVisitRequestModalEvents();
  if (state.modal.type === 'sendRequests') {
    document.querySelectorAll('[data-send-pick]').forEach(el => {
      el.onchange = () => {
        const id = el.getAttribute('data-send-pick');
        const sel = state.sendSelection || [];
        state.sendSelection = el.checked ? [...sel, id] : sel.filter(x => x !== id);
        render();
      };
    });
    const send = (notifyBuyer) => {
      const picked = state.sendSelection || [];
      if (!picked.length) return;
      state.sendSelection = null;
      sendTourToBrokers(notifyBuyer, picked);
    };
    const brokerOnly = document.getElementById('btn-send-broker-only');
    if (brokerOnly) brokerOnly.onclick = () => send(false);
    const brokerBuyer = document.getElementById('btn-send-broker-buyer');
    if (brokerBuyer) brokerBuyer.onclick = () => send(true);
  }
  if (state.modal.type === 'confirmSendUpdate') {
    const brokerOnly = document.getElementById('btn-send-update-broker-only');
    if (brokerOnly) brokerOnly.onclick = () => { state.modal = null; saveDraftToTour(true, false); };
    const brokerBuyer = document.getElementById('btn-send-update-broker-buyer');
    if (brokerBuyer) brokerBuyer.onclick = () => { state.modal = null; saveDraftToTour(true, true); };
  }
  if (state.modal.type === 'confirmPastDate') {
    const btn = document.getElementById('btn-confirm-past-date');
    if (btn) btn.onclick = () => {
      const date = state.modal.date;
      state.modal = null;
      applyTourDate(date);
      // Le tour vient de changer d'onglet : le dire ici évite qu'il paraisse
      // perdu quand le courtier reviendra à la liste.
      showToast('Tour daté dans le passé. Il est rangé dans « Passé ».');
    };
    // Renoncer laisse le champ afficher la date saisie : le render de fermeture
    // le repeint depuis le brouillon, qui n'a pas bougé.
  }
  if (state.modal.type === 'confirmDeleteTour') {
    const btn = document.getElementById('btn-confirm-delete-tour');
    if (btn) btn.onclick = () => {
      if (state.editingTourId) state.tours = state.tours.filter(t => t.id !== state.editingTourId);
      state.modal = null;
      state.screen = 'list';
      state.draft = null;
      render();
      showToast('Tour de visites supprimé.');
    };
  }
  if (state.modal.type === 'confirmLeave') {
    const go = state.pendingLeave;
    const leave = () => { state.pendingLeave = null; state.modal = null; state.dirty = false; if (go) go(); render(); };
    const saveBtn = document.getElementById('btn-leave-save');
    if (saveBtn) saveBtn.onclick = () => { saveDraftAsTour(); leave(); showToast('Tour enregistré. Vous pourrez l\'envoyer plus tard.', 'success'); };
    const discardBtn = document.getElementById('btn-leave-discard');
    if (discardBtn) discardBtn.onclick = leave;
  }
  if (state.modal.type === 'confirmRemoveStop') {
    const btn = document.getElementById('btn-confirm-remove-stop');
    if (btn) btn.onclick = () => {
      const stop = state.draft.stops.find(s => s.id === state.modal.stopId);
      if (!stop) { closeModal(); return; }
      state.draft.stops = state.draft.stops.filter(s => s.id !== stop.id);
      // Retirer un arrêt après l'envoi annule une demande : c'est un échange
      // avec le courtier, pas une modification à lui renotifier.
      if (stop.sentAt) persistAnswer(); else markDirtyIfSent();
      state.modal = null;
      render();
      showToast(`${stopShortLabel(stop)} retiré du tour.`);
    };
  }
  if (state.modal.type === 'availability') bindAvailabilityModalEvents();
  if (state.modal.type === 'editBuyer') bindEditBuyerModalEvents();
}

function escHandler(e) {
  if (e.key === 'Escape' && state.modal) {
    closeModal();
    document.removeEventListener('keydown', escHandler);
    document.removeEventListener('keydown', trapModalFocus);
  }
}

function bindEditBuyerModalEvents() {
  const f = state.editBuyerDraft;
  const bind = (id, key) => { const el = document.getElementById(id); if (el) el.oninput = () => { f[key] = el.value; }; };
  bind('eb-prenom', 'prenom');
  bind('eb-nom', 'nom');
  document.querySelectorAll('[data-eb-email-idx]').forEach(el => {
    el.oninput = () => { f.emails[+el.getAttribute('data-eb-email-idx')] = el.value; };
  });
  document.querySelectorAll('[data-eb-tel-idx]').forEach(el => {
    el.oninput = () => { f.tels[+el.getAttribute('data-eb-tel-idx')] = el.value; };
  });
  const addEmail = document.getElementById('eb-add-email');
  if (addEmail) addEmail.onclick = () => { f.emails.push(''); render(); };
  const addTel = document.getElementById('eb-add-tel');
  if (addTel) addTel.onclick = () => { f.tels.push(''); render(); };
  document.querySelectorAll('[data-eb-remove-email]').forEach(el => {
    el.onclick = () => { f.emails.splice(+el.getAttribute('data-eb-remove-email'), 1); render(); };
  });
  document.querySelectorAll('[data-eb-remove-tel]').forEach(el => {
    el.onclick = () => { f.tels.splice(+el.getAttribute('data-eb-remove-tel'), 1); render(); };
  });
  const saveBtn = document.getElementById('btn-save-edit-buyer');
  if (saveBtn) saveBtn.onclick = () => {
    const updated = { ...state.draft.buyer, prenom: f.prenom, nom: f.nom, email: f.emails[0], tel: f.tels[0] };
    state.draft.buyer = updated;
    const idx = state.buyers.findIndex(b => b.id === updated.id);
    if (idx >= 0) state.buyers[idx] = updated;
    state.modal = null;
    render();
  };
}

// Ouvre la demande de visite pour une propriété hors catalogue : même écran que
// pour une fiche du catalogue, au courtier inscripteur près, qui reste à choisir.
function openVisitRequestForNewProperty(address, prevDestModal) {
  const rows = computeSchedule(state.draft);
  const lastProp = rows.filter(r => r.stop.type === 'property').pop();
  // Arrondi au quart d'heure : le sélecteur « De : » ne propose que ces valeurs,
  // et une heure hors palier n'y sélectionnerait aucune option.
  const defaultStart = Math.min(ceilToSlot(
    lastProp ? lastProp.start + lastProp.stop.duration + 15 : timeToMinutes(state.draft.time)),
    20 * 60);
  state.modal = {
    type: 'visitRequest',
    mls: null,
    address,
    external: true,
    courtier: '',
    courtierSearch: '',
    date: state.draft.date,
    from: defaultStart,
    duration: 30,
    comment: '',
    callback: '',
    prevDestModal,
  };
  render();
}

function bindNewPropertyModalEvents() {
  const f = state.newProperty;
  const bind = (id, key, transform) => {
    const el = document.getElementById(id);
    if (el) el.oninput = () => { f[key] = transform ? transform(el.value) : el.value; };
  };
  bind('np-num', 'num', v => v.replace(/[^\d]/g, ''));
  bind('np-street', 'street');
  bind('np-unit', 'unit');
  bind('np-city', 'city');
  bind('np-postal', 'postal');
  const prov = document.getElementById('np-province');
  if (prov) prov.onchange = () => { f.province = prov.value; };

  const back = document.getElementById('np-back');
  if (back) back.onclick = () => { state.modal = { type: 'destination', initialStops: state.draft.stops.length }; render(); };

  const save = document.getElementById('np-save');
  if (save) save.onclick = () => {
    if (newPropertyMissing().length) {
      state.newPropertyTouched = true;
      render();
      document.getElementById('np-error').scrollIntoView({ block: 'nearest' });
      return;
    }
    state.newPropertyTouched = false;
    openVisitRequestForNewProperty(composeAddress(f), { type: 'newProperty' });
  };
}

function bindVisitRequestModalEvents() {
  const m = state.modal;

  const backBtn = document.getElementById('vr-back');
  if (backBtn) backBtn.onclick = () => { state.modal = m.prevDestModal; render(); };

  // La recherche de courtier re-rend le modal à chaque frappe : on rend le focus
  // et la position du curseur, sinon on ne peut pas taper deux lettres de suite.
  const courtierSearch = document.getElementById('vr-courtier-search');
  if (courtierSearch) courtierSearch.oninput = () => {
    m.courtierSearch = courtierSearch.value;
    render();
    setTimeout(() => {
      const el = document.getElementById('vr-courtier-search');
      if (el) { el.focus(); el.selectionStart = el.selectionEnd = el.value.length; }
    }, 0);
  };
  document.querySelectorAll('[data-pick-courtier]').forEach(el => {
    el.onclick = () => { m.courtier = el.getAttribute('data-pick-courtier'); m.courtierSearch = ''; render(); };
  });
  const courtierClear = document.getElementById('vr-courtier-clear');
  if (courtierClear) courtierClear.onclick = () => {
    m.courtier = '';
    m.courtierSearch = '';
    render();
    setTimeout(() => { const el = document.getElementById('vr-courtier-search'); if (el) el.focus(); }, 0);
  };

  const dateInput = document.getElementById('vr-date');
  if (dateInput) dateInput.onchange = () => { m.date = dateInput.value; };

  const fromSelect = document.getElementById('vr-from');
  if (fromSelect) fromSelect.onchange = () => { m.from = +fromSelect.value; render(); };

  const durSelect = document.getElementById('vr-duration');
  if (durSelect) durSelect.onchange = () => { m.duration = +durSelect.value; };

  const comment = document.getElementById('vr-comment');
  if (comment) comment.oninput = () => {
    m.comment = comment.value;
    document.getElementById('vr-charcount').textContent = comment.value.length;
  };

  const callback = document.getElementById('vr-callback');
  if (callback) callback.oninput = () => { m.callback = callback.value; };

  const saveBtn = document.getElementById('vr-save');
  if (saveBtn) saveBtn.onclick = () => {
    // Sans courtier inscrit à Immocontact, la demande n'a pas de destinataire.
    // Le bouton est déjà désactivé ; ce garde-fou couvre l'appel direct.
    if (m.external && !courtierEntry(m.courtier)) return;
    // Edit mode: update the existing stop in place; otherwise add a new one.
    const stop = m.editStopId
      ? state.draft.stops.find(s => s.id === m.editStopId)
      : makeStop(m.address, m.mls, { status: 'pending', external: m.external, courtier: m.courtier });
    if (!stop) return;
    const newStart = minutesToLabel(m.from).replace('h', ':');
    // Le créneau demandé est ce sur quoi le courtier s'est engagé. Le déplacer
    // annule cet engagement : la visite repart en attente de sa confirmation,
    // quel que soit ce qu'il avait répondu. Le commentaire et le numéro de
    // rappel, eux, ne changent pas l'heure et ne remettent rien en cause.
    // La date saisie ici ne déplace le tour que s'il n'a qu'une propriété :
    // au-delà, elle ne s'applique pas et ne remet donc rien en cause. En ajout,
    // l'arrêt courant n'est pas encore dans le tour — d'où le +1.
    const propCount = state.draft.stops.filter(s => s.type === 'property').length
      + (m.editStopId ? 0 : 1);
    const dateApplies = m.date !== state.draft.date && propCount === 1;
    const slotChanged = !!m.editStopId
      && (stop.lockedStart !== newStart || stop.duration !== m.duration || dateApplies);
    // Pin the stop to the requested slot so the schedule and conflict
    // warnings reflect what was asked to the listing broker.
    stop.locked = true;
    stop.lockedStart = newStart;
    stop.duration = m.duration;
    stop.comment = m.comment;
    stop.callback = m.callback;
    // Renvoyer après un refus repart toujours en attente, même à créneau égal :
    // c'est une nouvelle demande, pas la retouche d'une demande vivante. Le
    // compteur des 48 h redémarre avec elle, sinon la réponse serait déjà en
    // retard à la seconde où elle part.
    const retryAfterRefusal = !!m.editStopId && ['refused', 'cancelled'].includes(stop.status);
    if (slotChanged || retryAfterRefusal) {
      stop.status = 'pending';
      stop.proposedStart = null;
    }
    if (retryAfterRefusal) stop.relancedAt = Date.now();
    const insertedBefore = m.editStopId ? null : addStopToDraft(stop);
    if (dateApplies) state.draft.date = m.date;
    // Sur un tour déjà parti, ce bouton envoie : la demande est repartie chez le
    // courtier inscripteur, il n'y a plus de mise à jour à lui promettre depuis
    // le pied de page. On enregistre donc directement au lieu de marquer le tour
    // modifié — sinon l'application redemanderait d'envoyer ce qui vient de l'être.
    const sentStop = !!stop.sentAt;
    if (m.editStopId && sentStop) commitDraft();
    else markDirtyIfSent();
    // Le formulaire de saisie a fait son travail : on revient à la recherche,
    // pas à des champs déjà consommés.
    const back = m.prevDestModal;
    if (back && back.type === 'newProperty') {
      state.newProperty = null;
      state.newPropertyTouched = false;
      state.destModalSearch = '';
      state.modal = { type: 'destination', initialStops: state.draft.stops.length };
    } else {
      state.modal = back;
    }
    render();
    const destinataire = m.external ? m.courtier : courtierFor(m.mls);
    showToast(m.editStopId
      ? sentStop
        ? `Modification envoyée à ${destinataire} pour validation.${slotChanged ? ' La visite repasse en attente de sa confirmation.' : ''}`
        : 'La demande de visite a été mise à jour.'
      : insertedBefore
        ? `Propriété insérée avant ${stopShortLabel(insertedBefore)}.`
        : m.external
          ? `Demande de visite préparée pour ${m.courtier}. Elle partira par courriel.`
          : 'La propriété a été ajoutée avec succès.', 'success');
  };
}

function bindDestinationModalEvents() {
  document.querySelectorAll('[data-dest-tab]').forEach(el => {
    el.onclick = () => {
      state.destModalTab = el.getAttribute('data-dest-tab');
      state.destModalSearch = '';
      state.destModalPrefillAddress = '';
      resetArretForm();
      render();
    };
  });
  // Une adresse hors catalogue passe par la même demande de visite qu'une fiche
  // du catalogue : l'adresse est déjà complète, seul le courtier inscripteur
  // manque. Pas de formulaire de saisie à traverser pour rien.
  document.querySelectorAll('[data-add-address]').forEach(el => {
    el.onclick = () => openVisitRequestForNewProperty(
      el.getAttribute('data-add-address'),
      { type: 'destination', initialStops: state.modal.initialStops });
  });
  // « Ajouter une nouvelle adresse » : rien ne correspond, l'adresse se saisit
  // champ par champ avant de choisir le courtier.
  const gotoNew = document.querySelector('[data-new-property]');
  if (gotoNew) gotoNew.onclick = () => {
    state.newProperty = newPropertyDraft(state.destModalSearch);
    state.newPropertyTouched = false;
    state.modal = { type: 'newProperty' };
    render();
  };
  const gotoArret = document.querySelector('[data-goto-arret]');
  if (gotoArret) gotoArret.onclick = () => {
    state.destModalPrefillAddress = state.destModalTab === 'adresse' ? state.destModalSearch : '';
    state.destModalTab = 'arret';
    state.destModalSearch = '';
    resetArretForm();
    render();
  };
  const search = document.getElementById('dest-search');
  if (search) {
    search.oninput = () => { state.destModalSearch = search.value; render(); setTimeout(() => { const s = document.getElementById('dest-search'); if (s) { s.focus(); s.selectionStart = s.selectionEnd = s.value.length; } }, 0); };
  }
  document.querySelectorAll('[data-toggle-property]').forEach(el => {
    el.onclick = () => {
      const mls = el.getAttribute('data-toggle-property');
      const existing = state.draft.stops.find(s => s.mls === mls);
      if (existing) {
        // Second click deselects directly, no form needed.
        state.draft.stops = state.draft.stops.filter(s => s.id !== existing.id);
        markDirtyIfSent();
        render();
        return;
      }
      const prop = MLS_POOL.find(p => p.mls === mls) || mlsCart.find(p => p.mls === mls);
      if (!prop) return;
      // Adding a property goes through the "Demande de visite" step where the
      // tour creator picks the visit time before the request goes to the broker.
      // L'heure proposée suit l'étape qui précède le point d'insertion : la
      // dernière du tour en ajout normal, celle d'avant l'ancre en insertion.
      const anchor = insertAnchor();
      const anchorIdx = anchor ? state.draft.stops.indexOf(anchor) : state.draft.stops.length;
      const rows = computeSchedule(state.draft);
      const prevProp = rows.filter(r => r.stop.type === 'property' && state.draft.stops.indexOf(r.stop) < anchorIdx).pop();
      const defaultStart = Math.min(ceilToSlot(
        prevProp ? prevProp.start + prevProp.stop.duration + 15 : timeToMinutes(state.draft.time)), 20 * 60);
      state.modal = {
        type: 'visitRequest',
        mls: prop.mls,
        address: prop.address,
        date: state.draft.date,
        from: defaultStart,
        duration: 30,
        comment: '',
        callback: '',
        prevDestModal: { type: 'destination', initialStops: state.modal.initialStops },
      };
      render();
    };
  });
  const editAnchor = document.querySelector('[data-edit-anchor]');
  if (editAnchor) editAnchor.onclick = () => {
    const stop = state.draft.stops.find(s => s.id === state.insertBeforeId);
    state.insertBeforeId = null;
    if (stop) openVisitEditor(stop);
  };
  // Sans ce lien, ouvrir le menu du type (qui redessine tout le modal) perdrait
  // l'adresse tapée : elle n'existerait que dans le champ, pas dans l'état.
  const arretAddress = document.getElementById('arret-address');
  if (arretAddress) arretAddress.oninput = () => { state.destModalPrefillAddress = arretAddress.value; };
  const kindTrigger = document.getElementById('arret-kind-trigger');
  if (kindTrigger) kindTrigger.onclick = () => {
    state.destModalArretKindOpen = !state.destModalArretKindOpen;
    render();
  };
  document.querySelectorAll('[data-arret-kind]').forEach(el => {
    el.onclick = () => {
      state.destModalArretKind = el.getAttribute('data-arret-kind');
      state.destModalArretKindOpen = false;
      render();
    };
  });
  const arretFrom = document.getElementById('arret-from');
  if (arretFrom) arretFrom.onchange = () => { state.destModalArretFrom = +arretFrom.value; render(); };
  const arretDuration = document.getElementById('arret-duration');
  if (arretDuration) arretDuration.onchange = () => { state.destModalArretDuration = +arretDuration.value; render(); };

  const addCustom = document.getElementById('btn-add-custom-stop');
  if (addCustom) addCustom.onclick = () => {
    const address = document.getElementById('arret-address').value.trim();
    if (!address) return;
    // L'heure reste facultative : sans elle, l'arrêt prend simplement sa
    // place dans l'ordre du tour, comme n'importe quelle autre destination
    // qu'on n'a pas encore fixée.
    const from = state.destModalArretFrom;
    const fields = {
      address,
      customKind: state.destModalArretKind || 'visite',
      duration: state.destModalArretDuration ?? 30,
      locked: from !== null,
      lockedStart: from !== null ? minutesToLabel(from).replace('h', ':') : null,
    };
    const editId = state.modal.arretEditId;
    if (editId) {
      const stop = state.draft.stops.find(s => s.id === editId);
      if (stop) {
        Object.assign(stop, fields);
        markDirtyIfSent();
      }
      resetArretForm();
      closeModal();
      if (stop) showToast(`${stopShortLabel(stop)} mis à jour.`, 'success');
      return;
    }
    const inserted = addStopToDraft({
      id: uid(), type: 'property', mls: null, status: 'pending', visited: false,
      ...fields,
    });
    markDirtyIfSent();
    resetArretForm();
    closeModal();
    if (inserted) showToast(`Arrêt inséré avant ${stopShortLabel(inserted)}.`, 'success');
  };
}

/* ---------------- Init ---------------- */

render();
