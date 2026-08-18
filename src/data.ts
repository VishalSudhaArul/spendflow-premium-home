export type Period = 'this' | 'last';

export interface Txn {
  name: string;
  detail: string;
  amount: number;
  date?: string;
  icon: 'utensils' | 'car' | 'shopping' | 'zap';
}

export interface CategorySlice {
  label: string;
  amount: number;
  tone: 'accent' | 'ink' | 'muted' | 'line';
}

export interface TrendPoint {
  label: string;
  weekName: string;
  amount: number;
  heightPct: number;
  change?: string;
}

export interface PeriodData {
  total: number;
  budget: number;
  trend: number[];
  trendPoints: TrendPoint[];
  categories: CategorySlice[];
  txns: Txn[];
}

export const CURRENCY = (n: number) =>
  '₹' + n.toLocaleString('en-IN');

export const PERIODS: Record<Period, PeriodData> = {
  this: {
    total: 42680,
    budget: 60000,
    trend: [38, 52, 41, 63, 48, 71, 58],
    trendPoints: [
      { label: 'W1', weekName: 'Week 1 (Nov 1–7)', amount: 4560, heightPct: 38, change: '-4%' },
      { label: 'W2', weekName: 'Week 2 (Nov 8–14)', amount: 6240, heightPct: 52, change: '+36.8%' },
      { label: 'W3', weekName: 'Week 3 (Nov 15–21)', amount: 4920, heightPct: 41, change: '-21.1%' },
      { label: 'W4', weekName: 'Week 4 (Nov 22–28)', amount: 7560, heightPct: 63, change: '+53.6%' },
      { label: 'W5', weekName: 'Week 5 (Nov 29–Dec 5)', amount: 5760, heightPct: 48, change: '-23.8%' },
      { label: 'W6', weekName: 'Week 6 (Dec 6–12)', amount: 8520, heightPct: 71, change: '+47.9%' },
      { label: 'W7', weekName: 'Week 7 (Dec 13–19)', amount: 6960, heightPct: 58, change: '-18.3%' },
    ],
    categories: [
      { label: 'Food', amount: 8420, tone: 'accent' },
      { label: 'Transport', amount: 5240, tone: 'ink' },
      { label: 'Shopping', amount: 14600, tone: 'muted' },
      { label: 'Bills', amount: 14420, tone: 'line' },
    ],
    txns: [
      { name: 'Swiggy', detail: 'Food delivery', date: 'Today, 2:15 PM', amount: 420, icon: 'utensils' },
      { name: 'Uber', detail: 'Commute', date: 'Yesterday, 6:40 PM', amount: 280, icon: 'car' },
      { name: 'Amazon', detail: 'Shopping', date: '24 Nov, 11:30 AM', amount: 1299, icon: 'shopping' },
      { name: 'Electricity', detail: 'Utility bill', date: '20 Nov, 9:15 AM', amount: 1840, icon: 'zap' },
    ],
  },
  last: {
    total: 38120,
    budget: 60000,
    trend: [44, 39, 55, 47, 60, 42, 50],
    trendPoints: [
      { label: 'W1', weekName: 'Week 1 (Oct 1–7)', amount: 5280, heightPct: 44, change: '+8%' },
      { label: 'W2', weekName: 'Week 2 (Oct 8–14)', amount: 4680, heightPct: 39, change: '-11.3%' },
      { label: 'W3', weekName: 'Week 3 (Oct 15–21)', amount: 6600, heightPct: 55, change: '+41.0%' },
      { label: 'W4', weekName: 'Week 4 (Oct 22–28)', amount: 5640, heightPct: 47, change: '-14.5%' },
      { label: 'W5', weekName: 'Week 5 (Oct 29–Nov 4)', amount: 7200, heightPct: 60, change: '+27.6%' },
      { label: 'W6', weekName: 'Week 6 (Nov 5–11)', amount: 5040, heightPct: 42, change: '-30.0%' },
      { label: 'W7', weekName: 'Week 7 (Nov 12–18)', amount: 6000, heightPct: 50, change: '+19.0%' },
    ],
    categories: [
      { label: 'Food', amount: 7140, tone: 'accent' },
      { label: 'Transport', amount: 4980, tone: 'ink' },
      { label: 'Shopping', amount: 11200, tone: 'muted' },
      { label: 'Bills', amount: 14800, tone: 'line' },
    ],
    txns: [
      { name: 'Swiggy', detail: 'Food delivery', date: '28 Oct, 1:20 PM', amount: 310, icon: 'utensils' },
      { name: 'Uber', detail: 'Commute', date: '26 Oct, 8:15 AM', amount: 245, icon: 'car' },
      { name: 'Amazon', detail: 'Shopping', date: '22 Oct, 4:50 PM', amount: 899, icon: 'shopping' },
      { name: 'Electricity', detail: 'Utility bill', date: '18 Oct, 10:00 AM', amount: 1620, icon: 'zap' },
    ],
  },
};

export const TREND_LABELS = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

