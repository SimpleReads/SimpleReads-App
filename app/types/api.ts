export type ApiRes<T> = {
  status: number;
  ok: boolean;
  data?: T;
  error?: string;
};

export type ApiBufferRes = {
  status: number;
  ok: boolean;
  data?: Buffer;
  error?: string;
};
