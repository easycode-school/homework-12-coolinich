// export interface OnLoginAnswer {
//   error: boolean;
//   message: string;
//   id?: string;
//   token?: string;
// }


export interface OnLoginAnswer {
  error: boolean;
  auth: boolean;
  id?: string;
  token?: string;
}