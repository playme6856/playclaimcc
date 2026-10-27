// promotions-data.js
//
// Promotion card data extracted directly from the provided HTML.
//
// Fields per card:
//   badge        - badge text shown on the card
//   badgeVariant - badge style variant
//   title        - card title
//   subtitle     - optional inline subtitle
//   description  - card description shown below the title
//   image        - original image URL
//   href         - destination URL
//
// IMPORTANT:
// - Image URLs use the original source asset, without the HTML's
//   ?w=146&h=146&fit=min&auto=format optimization parameters.
// - href values are kept as absolute Stake URLs to match the
//   existing data structure.
// - No overlay is included because the provided HTML does not
//   contain an overlay/background gradient for these cards.

window.PROMOTIONS = [
  {
    badge: "Only on Stake",
    badgeVariant: "oos-promotion",
    title: "Spin Reaper Winsafe",
    subtitle: "Every Grave Hides a Little Mystery",
    description: "",
    image: "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/54eedbd54abf4298e48776aced91b262528461ed-1080x1080.png",
    href: "https://stake.com/casino/games/twist-gaming-spin-reaper-winsafe"
  },
  {
    badge: "Promotion",
    badgeVariant: "neutral-strong",
    title: "2x VIP Progress",
    subtitle: "Boosted VIP progress on Only on Stake Games",
    description: "",
    image: "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/36be0228883223bfdb374afe786551e0eb87dce2-400x400.png",
    href: "https://stake.com/casino/group/only-on-stake"
  },
  {
    badge: "Promotion",
    badgeVariant: "neutral-strong",
    title: "Daily Races",
    subtitle: "Race to the top for a share in $100,000",
    description: "",
    image: "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/67840b0454939cbd8c575498adc862ea4a70f02d-400x400.png",
    href: "https://stake.com/promotions/promotion/stake-races"
  },
  {
    badge: "Promotion",
    badgeVariant: "neutral-strong",
    title: "Weekly Raffle",
    subtitle: "Earn raffle tickets for a chance to share in $75,000",
    description: "",
    image: "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/43ff1d995fb37f0136932145c21ebff17654bd75-400x400.png",
    href: "https://stake.com/promotions/promotion/weekly-giveaway"
  },
  {
    badge: "Promotion",
    badgeVariant: "neutral-strong",
    title: "Stake vs Eddie",
    subtitle: "Hit or beat the target multiplier to share in $50,000",
    description: "",
    image: "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/9c2b0435d5a6a3b6d409e59aa86515b201b30e5f-400x400.png",
    href: "https://stake.com/promotions/promotion/stake-versus-eddie"
  },
  {
    badge: "Promotion",
    badgeVariant: "neutral-strong",
    title: "Conquer the Casino",
    subtitle: "Hit the Big Win or Lucky Win for a share in $75,000",
    description: "",
    image: "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/ccbe2319e6a71726c160d4d60e3f27cb60253888-400x400.png",
    href: "https://stake.com/promotions/promotion/conquer-the-casino"
  },
  {
    badge: "Promotion",
    badgeVariant: "neutral-strong",
    title: "JAQKpot!",
    subtitle: "Win up to $1M!",
    description: "",
    image: "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/d259681b54b7200c74eda08c3a965c6c5e52299d-400x400.png",
    href: "https://stake.com/promotions/promotion/jaqkpot-poker"
  },
  {
    badge: "Promotion",
    badgeVariant: "neutral-strong",
    title: "All in or Fold Jackpot",
    subtitle: "$500,000 In Prizes! in our AoF Tables.",
    description: "",
    image: "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/9075efd8dc1372901b0f56bfef43a7e96955db2d-400x400.png",
    href: "https://stake.com/promotions/promotion/all-in-or-fold-jackpot"
  },
  {
    badge: "Promotion",
    badgeVariant: "neutral-strong",
    title: "Bad Beat Jackpot",
    subtitle: "Win your share of the $1,000,000 Jackpot",
    description: "",
    image: "https://cdn.sanity.io/images/tdrhge4k/stake-com-production/fbbab02dac8258f2fb4cba26063bb6f5802ce7cf-400x400.png",
    href: "https://stake.com/promotions/promotion/bad-beat-jackpot"
  }
];
