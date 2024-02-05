export type IResDate_1<T> = {
  code: number,
  msg: string,
  data: T
}

export type IResDate_2<T> = {
  code: number,
  mas: string,
  data: {
    rows: T[],
    total: number,
    msg: string
  }
}
