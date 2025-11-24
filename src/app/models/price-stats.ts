type LatestPriceStats = {
  high: number;
  highTime: number;
  low: number;
  lowTime: number;
};

type FiveMinutePriceStats = {
  avgHighPrice: number;
  highPriceVolume: number;
  avgLowPrice: number;
  lowPriceVolume: number;
};

type ResponseData<T> = {
  data: {
    [id: string]: T;
  };
};
