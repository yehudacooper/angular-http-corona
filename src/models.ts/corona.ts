
export interface CoronaObj{
    Global: {
              NewConfirmed: number,
              TotalConfirmed: number,
              NewDeaths: number,
              TotalDeaths: number,
              NewRecovered: number,
              TotalRecovered: number
            };
    Countries: [
      {
        Country: string,
        CountryCode: string,
        Slug: string,
        NewConfirmed: number,
        TotalConfirmed: number,
        NewDeaths: number,
        TotalDeaths: number,
        NewRecovered: number,
        TotalRecovered: number,
        Date: string
      }];
    Date: string;
}



