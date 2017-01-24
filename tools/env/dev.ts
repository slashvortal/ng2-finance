import { ConfigInterface } from './config.interface';

const DevConfig: ConfigInterface = {
  env: 'DEV',
  paths: {
    charts: './assets/json/chart.json',
    news: './assets/json/news.json',
    proxy: 'http://www.marinpetkov.com/proxy.php',
    search: './assets/json/search.json',
    stocks: './assets/json/stocks.json',
  }
};

export = DevConfig;
