const exchangeRates = {
  USD: 1,
  CNY: 7.25,
};

const STORAGE_KEY = "seedance-price-user-entries";
const OVERRIDES_KEY = "seedance-price-preset-overrides";
const DELETED_PRESETS_KEY = "seedance-price-deleted-presets";
const SELECTED_PLANS_KEY = "seedance-price-selected-plans";

const basePricingData = [
  {
    presetId: "libtv-standard-yearly",
    provider: "LibTV",
    url: "https://libtv.gongke.net/pricing/",
    officialStatus: "unknown",
    plan: "标准版年包",
    billingType: "subscription",
    price: 569 / 12,
    priceLabel: "¥569/年",
    currency: "CNY",
    credits: 1500,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "创作会员连续包年 37 折，1500 积分/月；720p 按 27 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 27 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 27 },
    ],
  },
  {
    presetId: "libtv-plus-yearly",
    provider: "LibTV",
    url: "https://libtv.gongke.net/pricing/",
    officialStatus: "unknown",
    plan: "进阶版年包",
    billingType: "subscription",
    price: 1099 / 12,
    priceLabel: "¥1099/年",
    currency: "CNY",
    credits: 4600,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "创作会员连续包年 37 折，4600 积分/月；720p 按 27 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 27 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 27 },
    ],
  },
  {
    presetId: "libtv-advanced-yearly",
    provider: "LibTV",
    url: "https://libtv.gongke.net/pricing/",
    officialStatus: "unknown",
    plan: "高级版年包",
    billingType: "subscription",
    price: 5699 / 12,
    priceLabel: "¥5699/年",
    currency: "CNY",
    credits: 25000,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "创作会员连续包年 37 折，25000 积分/月；720p 按 27 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 27 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 27 },
    ],
  },
  {
    presetId: "libtv-luxury-yearly",
    provider: "LibTV",
    url: "https://libtv.gongke.net/pricing/",
    officialStatus: "unknown",
    plan: "豪华版年包",
    billingType: "subscription",
    price: 6399 / 12,
    priceLabel: "¥6399/年",
    currency: "CNY",
    credits: 32800,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "创作会员连续包年 37 折，32800 积分/月；720p 按 27 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 27 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 27 },
    ],
  },
  {
    presetId: "libtv-supreme-yearly",
    provider: "LibTV",
    url: "https://libtv.gongke.net/pricing/",
    officialStatus: "unknown",
    plan: "至尊版年包",
    billingType: "subscription",
    price: 8499 / 12,
    priceLabel: "¥8499/年",
    currency: "CNY",
    credits: 50500,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "创作会员连续包年 37 折，50500 积分/月；720p 按 27 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 27 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 27 },
    ],
  },
  {
    presetId: "libtv-standard-monthly",
    provider: "LibTV",
    url: "https://libtv.gongke.net/pricing/",
    officialStatus: "unknown",
    plan: "标准版月包",
    billingType: "subscription",
    price: 59,
    priceLabel: "¥59/月",
    currency: "CNY",
    credits: 1500,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "创作会员连续包月 75 折，1500 积分/月；720p 按 27 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 27 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 27 },
    ],
  },
  {
    presetId: "libtv-plus-monthly",
    provider: "LibTV",
    url: "https://libtv.gongke.net/pricing/",
    officialStatus: "unknown",
    plan: "进阶版月包",
    billingType: "subscription",
    price: 169,
    priceLabel: "¥169/月",
    currency: "CNY",
    credits: 4600,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "创作会员连续包月 75 折，4600 积分/月；720p 按 27 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 27 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 27 },
    ],
  },
  {
    presetId: "libtv-advanced-monthly",
    provider: "LibTV",
    url: "https://libtv.gongke.net/pricing/",
    officialStatus: "unknown",
    plan: "高级版月包",
    billingType: "subscription",
    price: 599,
    priceLabel: "¥599/月",
    currency: "CNY",
    credits: 16300,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "创作会员连续包月 75 折，16300 积分/月；720p 按 27 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 27 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 27 },
    ],
  },
  {
    presetId: "libtv-luxury-monthly",
    provider: "LibTV",
    url: "https://libtv.gongke.net/pricing/",
    officialStatus: "unknown",
    plan: "豪华版月包",
    billingType: "subscription",
    price: 999,
    priceLabel: "¥999/月",
    currency: "CNY",
    credits: 32800,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "创作会员连续包月 75 折，32800 积分/月；720p 按 27 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 27 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 27 },
    ],
  },
  {
    presetId: "libtv-supreme-monthly",
    provider: "LibTV",
    url: "https://libtv.gongke.net/pricing/",
    officialStatus: "unknown",
    plan: "至尊版月包",
    billingType: "subscription",
    price: 1499,
    priceLabel: "¥1499/月",
    currency: "CNY",
    credits: 50500,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "创作会员连续包月 75 折，50500 积分/月；720p 按 27 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 27 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 27 },
    ],
  },
  {
    presetId: "xiaoyunque-basic-monthly",
    provider: "小云雀",
    url: "https://www.xiaoyunque.cn/",
    officialStatus: "unknown",
    plan: "基础会员月包",
    billingType: "subscription",
    price: 79,
    priceLabel: "¥79/月",
    currency: "CNY",
    credits: 830,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "连续包月基础会员，830 积分/月；720p 按 8 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 8 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 8 },
    ],
  },
  {
    presetId: "xiaoyunque-standard-monthly",
    provider: "小云雀",
    url: "https://www.xiaoyunque.cn/",
    officialStatus: "unknown",
    plan: "标准会员月包",
    billingType: "subscription",
    price: 209,
    priceLabel: "¥209/月",
    currency: "CNY",
    credits: 2320,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "连续包月标准会员，2320 积分/月；720p 按 8 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 8 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 8 },
    ],
  },
  {
    presetId: "xiaoyunque-advanced-monthly",
    provider: "小云雀",
    url: "https://www.xiaoyunque.cn/",
    officialStatus: "unknown",
    plan: "高级会员月包",
    billingType: "subscription",
    price: 529,
    priceLabel: "¥529/月",
    currency: "CNY",
    credits: 6330,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "连续包月高级会员，6330 积分/月；720p 按 8 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 8 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 8 },
    ],
  },
  {
    presetId: "xiaoyunque-basic-yearly",
    provider: "小云雀",
    url: "https://www.xiaoyunque.cn/",
    officialStatus: "unknown",
    plan: "基础会员年包",
    billingType: "subscription",
    price: 379 / 12,
    priceLabel: "¥379/年",
    currency: "CNY",
    credits: 830,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "连续包年基础会员，830 积分/月；720p 按 8 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 8 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 8 },
    ],
  },
  {
    presetId: "xiaoyunque-standard-yearly",
    provider: "小云雀",
    url: "https://www.xiaoyunque.cn/",
    officialStatus: "unknown",
    plan: "标准会员年包",
    billingType: "subscription",
    price: 768 / 12,
    priceLabel: "¥768/年",
    currency: "CNY",
    credits: 2320,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "连续包年标准会员，2320 积分/月；720p 按 8 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 8 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 8 },
    ],
  },
  {
    presetId: "xiaoyunque-advanced-yearly",
    provider: "小云雀",
    url: "https://www.xiaoyunque.cn/",
    officialStatus: "unknown",
    plan: "高级会员年包",
    billingType: "subscription",
    price: 1999 / 12,
    priceLabel: "¥1999/年",
    currency: "CNY",
    credits: 6330,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "连续包年高级会员，6330 积分/月；720p 按 8 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 8 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 8 },
    ],
  },
  {
    presetId: "shotlab-1000-credits",
    provider: "ShotLab",
    url: "https://apps.apple.com/us/app/shotlab-%E5%A6%99%E5%87%BA%E7%89%87%E7%9A%84ai%E5%BD%B1%E5%83%8F%E5%B7%A5%E5%85%B7/id6739623069",
    officialStatus: "unknown",
    plan: "1000 积分",
    billingType: "credit_pack",
    price: 10,
    currency: "CNY",
    credits: 1000,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "截图价格：1000 积分 ¥10；积分有效期 2 年；720p 按 110 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 110 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 110 },
    ],
  },
  {
    presetId: "shotlab-10200-credits",
    provider: "ShotLab",
    url: "https://apps.apple.com/us/app/shotlab-%E5%A6%99%E5%87%BA%E7%89%87%E7%9A%84ai%E5%BD%B1%E5%83%8F%E5%B7%A5%E5%85%B7/id6739623069",
    officialStatus: "unknown",
    plan: "10200 积分",
    billingType: "credit_pack",
    price: 100,
    currency: "CNY",
    credits: 10200,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "截图价格：10200 积分 ¥100；积分有效期 2 年；720p 按 110 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 110 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 110 },
    ],
  },
  {
    presetId: "shotlab-51500-credits",
    provider: "ShotLab",
    url: "https://apps.apple.com/us/app/shotlab-%E5%A6%99%E5%87%BA%E7%89%87%E7%9A%84ai%E5%BD%B1%E5%83%8F%E5%B7%A5%E5%85%B7/id6739623069",
    officialStatus: "unknown",
    plan: "51500 积分",
    billingType: "credit_pack",
    price: 500,
    currency: "CNY",
    credits: 51500,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "截图价格：51500 积分 ¥500；积分有效期 2 年；720p 按 110 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 110 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 110 },
    ],
  },
  {
    presetId: "shotlab-105500-credits",
    provider: "ShotLab",
    url: "https://apps.apple.com/us/app/shotlab-%E5%A6%99%E5%87%BA%E7%89%87%E7%9A%84ai%E5%BD%B1%E5%83%8F%E5%B7%A5%E5%85%B7/id6739623069",
    officialStatus: "unknown",
    plan: "105500 积分",
    billingType: "credit_pack",
    price: 1000,
    currency: "CNY",
    credits: 105500,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "截图价格：105500 积分 ¥1000；积分有效期 2 年；720p 按 110 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 110 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 110 },
    ],
  },
  {
    presetId: "shotlab-213000-credits",
    provider: "ShotLab",
    url: "https://apps.apple.com/us/app/shotlab-%E5%A6%99%E5%87%BA%E7%89%87%E7%9A%84ai%E5%BD%B1%E5%83%8F%E5%B7%A5%E5%85%B7/id6739623069",
    officialStatus: "unknown",
    plan: "213000 积分",
    billingType: "credit_pack",
    price: 2000,
    currency: "CNY",
    credits: 213000,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "截图价格：213000 积分 ¥2000；积分有效期 2 年；720p 按 110 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 110 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 110 },
    ],
  },
  {
    presetId: "shotlab-540000-credits",
    provider: "ShotLab",
    url: "https://apps.apple.com/us/app/shotlab-%E5%A6%99%E5%87%BA%E7%89%87%E7%9A%84ai%E5%BD%B1%E5%83%8F%E5%B7%A5%E5%85%B7/id6739623069",
    officialStatus: "unknown",
    plan: "540000 积分",
    billingType: "credit_pack",
    price: 5000,
    currency: "CNY",
    credits: 540000,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "截图价格：540000 积分 ¥5000；积分有效期 2 年；720p 按 110 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 110 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 110 },
    ],
  },
  {
    presetId: "shotlab-1100000-credits",
    provider: "ShotLab",
    url: "https://apps.apple.com/us/app/shotlab-%E5%A6%99%E5%87%BA%E7%89%87%E7%9A%84ai%E5%BD%B1%E5%83%8F%E5%B7%A5%E5%85%B7/id6739623069",
    officialStatus: "unknown",
    plan: "1100000 积分",
    billingType: "credit_pack",
    price: 10000,
    currency: "CNY",
    credits: 1100000,
    updatedAt: "2026-06-07",
    confidence: "high",
    note: "截图价格：1100000 积分 ¥10000；积分有效期 2 年；720p 按 110 积分/秒换算。",
    rules: [
      { model: "seedance-2.0", mode: "text-to-video", resolution: "720p", creditsPerSecond: 110 },
      { model: "seedance-2.0", mode: "image-to-video", resolution: "720p", creditsPerSecond: 110 },
    ],
  },
];

let userPricingData = loadUserEntries();
let presetOverrides = loadPresetOverrides();
let deletedPresetIds = loadDeletedPresetIds();
let selectedPlanKeys = loadSelectedPlanKeys();
let pricingData = buildPricingData();

const pendingSources = [];

const labels = {
  "seedance-2.0": "Seedance 2.0",
  "seedance-2.0-pro": "Seedance 2.0 Pro",
  "text-to-video": "文生视频",
  "image-to-video": "图生视频",
  "720p": "720p",
  "1080p": "1080p",
  "4k": "4K",
  credit_pack: "积分包",
  subscription: "订阅",
  pay_as_you_go: "按量付费",
  high: "高",
  medium: "中",
  low: "低",
};

const controls = {
  model: document.querySelector("#modelSelect"),
  mode: document.querySelector("#modeSelect"),
  resolution: document.querySelector("#resolutionSelect"),
  duration: document.querySelector("#durationInput"),
  currency: document.querySelector("#currencySelect"),
  billing: document.querySelector("#billingSelect"),
  trustedOnly: document.querySelector("#trustedOnly"),
};

const elements = {
  bestPrice: document.querySelector("#bestPrice"),
  bestProvider: document.querySelector("#bestProvider"),
  scenarioLabel: document.querySelector("#scenarioLabel"),
  durationValue: document.querySelector("#durationValue"),
  resultCount: document.querySelector("#resultCount"),
  pricingBody: document.querySelector("#pricingBody"),
  emptyState: document.querySelector("#emptyState"),
  resetButton: document.querySelector("#resetButton"),
  exportButton: document.querySelector("#exportButton"),
  addSampleButton: document.querySelector("#addSampleButton"),
  editorPanel: document.querySelector("#editorPanel"),
  closeEditorButton: document.querySelector("#closeEditorButton"),
  providerForm: document.querySelector("#providerForm"),
  saveEntryButton: document.querySelector("#saveEntryButton"),
  notesPanel: document.querySelector("#notesPanel"),
  pendingSources: document.querySelector("#pendingSources"),
};

let rows = [];

function loadUserEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn("Failed to load user entries", error);
    return [];
  }
}

function loadPresetOverrides() {
  try {
    const raw = localStorage.getItem(OVERRIDES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.warn("Failed to load preset overrides", error);
    return {};
  }
}

function loadDeletedPresetIds() {
  try {
    const raw = localStorage.getItem(DELETED_PRESETS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn("Failed to load deleted presets", error);
    return [];
  }
}

function loadSelectedPlanKeys() {
  try {
    const raw = localStorage.getItem(SELECTED_PLANS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.warn("Failed to load selected plans", error);
    return {};
  }
}

function saveUserEntries() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userPricingData));
}

function savePresetOverrides() {
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(presetOverrides));
}

function saveDeletedPresetIds() {
  localStorage.setItem(DELETED_PRESETS_KEY, JSON.stringify(deletedPresetIds));
}

function saveSelectedPlanKeys() {
  localStorage.setItem(SELECTED_PLANS_KEY, JSON.stringify(selectedPlanKeys));
}

function buildPricingData() {
  const presets = basePricingData
    .filter((item) => !deletedPresetIds.includes(item.presetId))
    .map((item) => {
      if (!presetOverrides[item.presetId]) {
        return item;
      }

      return {
        ...item,
        ...presetOverrides[item.presetId],
        presetId: item.presetId,
        isPresetOverride: true,
      };
    });

  return [...presets, ...userPricingData];
}

function syncPricingData() {
  pricingData = buildPricingData();
}

function toUsd(value, currency) {
  return value / exchangeRates[currency];
}

function fromUsd(value, currency) {
  return value * exchangeRates[currency];
}

function money(value, currency) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency,
    maximumFractionDigits: value < 1 ? 4 : 2,
  }).format(value);
}

function getScenario() {
  return {
    model: controls.model.value,
    mode: controls.mode.value,
    resolution: controls.resolution.value,
    duration: Number(controls.duration.value),
    currency: controls.currency.value,
    billing: controls.billing.value,
    trustedOnly: controls.trustedOnly.checked,
  };
}

function findRule(item, scenario) {
  return item.rules.find((rule) => {
    return rule.model === scenario.model
      && rule.mode === scenario.mode
      && rule.resolution === scenario.resolution;
  });
}

function getItemKey(item) {
  return item.userEntryId || item.presetId || `${item.provider}::${item.plan}`;
}

function normalizeItem(item, scenario) {
  const rule = findRule(item, scenario);

  if (!rule) {
    return null;
  }

  let costPerSecondUsd;
  let ruleLabel;

  if (typeof rule.costPerGeneration === "number") {
    const costPerGenerationUsd = toUsd(rule.costPerGeneration, item.currency);
    costPerSecondUsd = costPerGenerationUsd / scenario.duration;
    ruleLabel = `约 ${money(fromUsd(costPerGenerationUsd, scenario.currency), scenario.currency)} / 条`;
  } else if (typeof rule.costPerSecond === "number") {
    costPerSecondUsd = toUsd(rule.costPerSecond, item.currency);
    ruleLabel = `${money(fromUsd(costPerSecondUsd, scenario.currency), scenario.currency)} / 秒`;
  } else {
    const costPerCreditUsd = toUsd(item.price, item.currency) / item.credits;
    costPerSecondUsd = costPerCreditUsd * rule.creditsPerSecond;
    ruleLabel = `${rule.creditsPerSecond} 积分 / 秒`;
  }

  const costPerSecond = fromUsd(costPerSecondUsd, scenario.currency);
  const costPerGeneration = costPerSecond * scenario.duration;

  return {
    ...item,
    itemKey: getItemKey(item),
    rule,
    ruleLabel,
    costPerSecond,
    costPerGeneration,
    originalPrice: item.priceLabel || money(item.price, item.currency),
  };
}

function getComparableItems() {
  const scenario = getScenario();

  return pricingData
    .filter((item) => scenario.billing === "all" || item.billingType === scenario.billing)
    .filter((item) => !scenario.trustedOnly || item.confidence === "high")
    .map((item) => normalizeItem(item, scenario))
    .filter(Boolean)
    .sort((a, b) => a.costPerSecond - b.costPerSecond);
}

function getRows() {
  const items = getComparableItems();
  const groups = new Map();

  items.forEach((item) => {
    if (!groups.has(item.provider)) {
      groups.set(item.provider, []);
    }

    groups.get(item.provider).push(item);
  });

  return Array.from(groups.values())
    .map((alternatives) => {
      alternatives.sort((a, b) => a.costPerSecond - b.costPerSecond);
      const selectedKey = selectedPlanKeys[alternatives[0].provider];
      const selected = alternatives.find((item) => item.itemKey === selectedKey) || alternatives[0];

      return {
        ...selected,
        alternatives,
      };
    })
    .sort((a, b) => a.costPerSecond - b.costPerSecond);
}

function confidenceClass(confidence) {
  return `pill confidence-${confidence}`;
}

function renderRows() {
  const scenario = getScenario();
  rows = getRows();

  elements.durationValue.textContent = `${scenario.duration} 秒`;
  elements.scenarioLabel.textContent = `${labels[scenario.resolution]} · ${scenario.duration} 秒`;
  const planCount = rows.reduce((count, row) => count + row.alternatives.length, 0);
  elements.resultCount.textContent = `${rows.length} 个平台 · ${planCount} 个套餐`;
  elements.emptyState.hidden = rows.length > 0;

  if (rows.length === 0) {
    elements.bestPrice.textContent = "-";
    elements.bestProvider.textContent = "-";
    elements.pricingBody.innerHTML = "";
    return;
  }

  const best = rows[0];
  elements.bestPrice.textContent = `${money(best.costPerSecond, scenario.currency)} / 秒`;
  elements.bestProvider.textContent = best.provider;

  elements.pricingBody.innerHTML = rows.map((row, index) => {
    const bestBadge = index === 0 ? "<span class=\"best-badge\">最低</span>" : "";
    const status = row.officialStatus === "official" ? "官方" : "第三方/未知";
    const providerName = row.url && row.url !== "#"
      ? `<a class="provider-link" href="${row.url}" target="_blank" rel="noreferrer">${row.provider}</a>`
      : `<span class="provider-name">${row.provider}</span>`;
    const entryId = row.userEntryId || row.presetId;
    const entryType = row.userEntryId ? "user" : "preset";
    const planControl = row.alternatives.length > 1
      ? `<select class="plan-select" data-provider="${row.provider}">
          ${row.alternatives.map((option) => `
            <option value="${option.itemKey}" ${option.itemKey === row.itemKey ? "selected" : ""}>
              ${option.plan} · ${money(option.costPerSecond, scenario.currency)} / 秒
            </option>
          `).join("")}
        </select>`
      : row.plan;
    const resetAction = row.presetId && row.isPresetOverride
      ? `<button class="row-action" type="button" data-action="reset" data-type="preset" data-id="${entryId}">恢复</button>`
      : "";
    const deleteAction = `<button class="row-action danger" type="button" data-action="delete" data-type="${entryType}" data-id="${entryId}">删除</button>`;
    const actions = `
      <button class="row-action" type="button" data-action="edit" data-type="${entryType}" data-id="${entryId}">编辑</button>
      <button class="row-action" type="button" data-action="add-plan" data-type="${entryType}" data-id="${entryId}">添加套餐</button>
      ${resetAction}
      ${deleteAction}
    `;

    return `
      <tr>
        <td>
          ${providerName}
          ${bestBadge}
          <small>${status}</small>
        </td>
        <td>
          ${planControl}
          <small>${labels[row.billingType]}</small>
          ${row.note ? `<small>${row.note}</small>` : ""}
        </td>
        <td>${row.originalPrice}</td>
        <td>${row.ruleLabel}</td>
        <td><strong>${money(row.costPerSecond, scenario.currency)}</strong></td>
        <td>${money(row.costPerGeneration, scenario.currency)}</td>
        <td><span class="${confidenceClass(row.confidence)}">${labels[row.confidence]}</span></td>
        <td>${row.updatedAt}</td>
        <td class="actions-cell">${actions}</td>
      </tr>
    `;
  }).join("");
}

function renderPendingSources() {
  elements.notesPanel.hidden = pendingSources.length === 0;
  elements.pendingSources.innerHTML = pendingSources.map((source) => `
    <article class="note-card">
      <a href="${source.url}" target="_blank" rel="noreferrer">${source.provider}</a>
      <p>${source.status}</p>
    </article>
  `).join("");
}

function resetControls() {
  controls.model.value = "seedance-2.0";
  controls.mode.value = "text-to-video";
  controls.resolution.value = "720p";
  controls.duration.value = "5";
  controls.currency.value = "USD";
  controls.billing.value = "all";
  controls.trustedOnly.checked = false;
  renderRows();
}

function exportCsv() {
  const scenario = getScenario();
  const header = ["平台", "套餐", "原始价格", "消耗规则", "每秒成本", "单条成本", "可信度", "更新时间", "链接"];
  const body = rows.map((row) => [
    row.provider,
    row.plan,
    row.originalPrice,
    row.ruleLabel,
    money(row.costPerSecond, scenario.currency),
    money(row.costPerGeneration, scenario.currency),
    labels[row.confidence],
    row.updatedAt,
    row.url,
  ]);

  const csv = [header, ...body]
    .map((line) => line.map((value) => `"${String(value).replaceAll("\"", "\"\"")}"`).join(","))
    .join("\n");

  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `seedance-price-${Date.now()}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function handlePlanChange(event) {
  const select = event.target.closest(".plan-select");

  if (!select) {
    return;
  }

  selectedPlanKeys[select.dataset.provider] = select.value;
  saveSelectedPlanKeys();
  renderRows();
}

function addProvider(event) {
  event.preventDefault();
  const formData = new FormData(elements.providerForm);
  const entryId = formData.get("entryId");
  const entryType = formData.get("entryType") || "user";
  const price = Number(formData.get("price"));
  const credits = Number(formData.get("credits"));
  const creditsPerSecond = Number(formData.get("creditsPerSecond"));
  const costPerGeneration = Number(formData.get("costPerGeneration"));
  const rule = {
    model: controls.model.value,
    mode: controls.mode.value,
    resolution: controls.resolution.value,
  };

  if (credits > 0 && creditsPerSecond > 0) {
    rule.creditsPerSecond = creditsPerSecond;
  } else if (costPerGeneration > 0) {
    rule.costPerGeneration = costPerGeneration;
  } else {
    alert("请填写「套餐积分 + 每秒消耗积分」，或填写「单条成本」。");
    return;
  }

  const entry = {
    userEntryId: entryType === "user" ? (entryId || crypto.randomUUID()) : undefined,
    provider: formData.get("provider").trim(),
    url: formData.get("url").trim(),
    officialStatus: "unknown",
    plan: formData.get("plan").trim(),
    billingType: "credit_pack",
    price,
    currency: formData.get("currency"),
    credits: credits > 0 ? credits : undefined,
    updatedAt: new Date().toISOString().slice(0, 10),
    confidence: "medium",
    note: formData.get("note").trim(),
    rules: [rule],
  };

  if (entryType === "preset") {
    const base = basePricingData.find((item) => item.presetId === entryId);
    const override = {
      provider: entry.provider,
      url: entry.url,
      plan: entry.plan,
      price: entry.price,
      priceLabel: undefined,
      currency: entry.currency,
      credits: entry.credits,
      updatedAt: entry.updatedAt,
      confidence: entry.confidence,
      note: entry.note,
      rules: entry.rules,
    };

    if (base) {
      presetOverrides[entryId] = override;
      savePresetOverrides();
    }
  } else if (entryId) {
    userPricingData = userPricingData.map((item) => item.userEntryId === entryId ? entry : item);
  } else {
    userPricingData.push(entry);
  }

  saveUserEntries();
  syncPricingData();
  elements.providerForm.reset();
  elements.providerForm.elements.entryId.value = "";
  elements.providerForm.elements.entryType.value = "user";
  elements.saveEntryButton.textContent = "加入比较";
  elements.editorPanel.hidden = true;
  renderRows();
}

function fillEditor(entry, entryType) {
  elements.editorPanel.hidden = false;
  elements.providerForm.elements.entryId.value = entry.userEntryId || entry.presetId;
  elements.providerForm.elements.entryType.value = entryType;
  elements.providerForm.elements.provider.value = entry.provider;
  elements.providerForm.elements.plan.value = entry.plan;
  elements.providerForm.elements.price.value = entry.price;
  elements.providerForm.elements.currency.value = entry.currency;
  elements.providerForm.elements.credits.value = entry.credits || "";
  elements.providerForm.elements.creditsPerSecond.value = entry.rules[0].creditsPerSecond || "";
  elements.providerForm.elements.costPerGeneration.value = entry.rules[0].costPerGeneration || "";
  elements.providerForm.elements.url.value = entry.url || "";
  elements.providerForm.elements.note.value = entry.note || "";
  controls.model.value = entry.rules[0].model;
  controls.mode.value = entry.rules[0].mode;
  controls.resolution.value = entry.rules[0].resolution;
  elements.saveEntryButton.textContent = "保存修改";
  elements.editorPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function fillPlanCreator(entry) {
  elements.providerForm.reset();
  elements.editorPanel.hidden = false;
  elements.providerForm.elements.entryId.value = "";
  elements.providerForm.elements.entryType.value = "user";
  elements.providerForm.elements.provider.value = entry.provider;
  elements.providerForm.elements.plan.value = "";
  elements.providerForm.elements.price.value = "";
  elements.providerForm.elements.currency.value = entry.currency || controls.currency.value;
  elements.providerForm.elements.credits.value = "";
  elements.providerForm.elements.creditsPerSecond.value = "";
  elements.providerForm.elements.costPerGeneration.value = "";
  elements.providerForm.elements.url.value = entry.url || "";
  elements.providerForm.elements.note.value = "";
  controls.model.value = entry.rule?.model || entry.rules?.[0]?.model || controls.model.value;
  controls.mode.value = entry.rule?.mode || entry.rules?.[0]?.mode || controls.mode.value;
  controls.resolution.value = entry.rule?.resolution || entry.rules?.[0]?.resolution || controls.resolution.value;
  elements.saveEntryButton.textContent = "添加套餐";
  elements.editorPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleRowAction(event) {
  const button = event.target.closest("[data-action]");

  if (!button) {
    return;
  }

  const entry = button.dataset.type === "preset"
    ? pricingData.find((item) => item.presetId === button.dataset.id)
    : userPricingData.find((item) => item.userEntryId === button.dataset.id);

  if (!entry) {
    return;
  }

  if (button.dataset.action === "edit") {
    fillEditor(entry, button.dataset.type);
    return;
  }

  if (button.dataset.action === "add-plan") {
    fillPlanCreator(entry);
    return;
  }

  if (button.dataset.action === "reset" && button.dataset.type === "preset") {
    const confirmed = window.confirm(`确定恢复「${entry.provider}」为默认预设吗？`);

    if (!confirmed) {
      return;
    }

    delete presetOverrides[entry.presetId];
    savePresetOverrides();
    syncPricingData();
    renderRows();
    return;
  }

  if (button.dataset.action === "delete") {
    const confirmed = window.confirm(`确定删除「${entry.provider}」吗？`);

    if (!confirmed) {
      return;
    }

    if (button.dataset.type === "preset") {
      deletedPresetIds = Array.from(new Set([...deletedPresetIds, entry.presetId]));
      delete presetOverrides[entry.presetId];
      delete selectedPlanKeys[entry.provider];
      saveDeletedPresetIds();
      savePresetOverrides();
      saveSelectedPlanKeys();
    } else {
      userPricingData = userPricingData.filter((item) => item.userEntryId !== entry.userEntryId);
      delete selectedPlanKeys[entry.provider];
      saveUserEntries();
      saveSelectedPlanKeys();
    }

    syncPricingData();
    renderRows();
  }
}

Object.values(controls).forEach((control) => {
  control.addEventListener("input", renderRows);
  control.addEventListener("change", renderRows);
});

elements.resetButton.addEventListener("click", resetControls);
elements.exportButton.addEventListener("click", exportCsv);
elements.addSampleButton.addEventListener("click", () => {
  elements.providerForm.reset();
  elements.providerForm.elements.entryId.value = "";
  elements.providerForm.elements.entryType.value = "user";
  elements.saveEntryButton.textContent = "加入比较";
  elements.editorPanel.hidden = false;
  elements.editorPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});
elements.closeEditorButton.addEventListener("click", () => {
  elements.editorPanel.hidden = true;
});
elements.providerForm.addEventListener("submit", addProvider);
elements.pricingBody.addEventListener("click", handleRowAction);
elements.pricingBody.addEventListener("change", handlePlanChange);

renderRows();
renderPendingSources();
