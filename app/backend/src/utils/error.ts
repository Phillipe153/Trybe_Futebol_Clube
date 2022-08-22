// class erroHandler {
//   status: number;
//   message: string;

//   constructor(status: number, message: string) {
//     this.status = status;
//     this.message = message;
//   }

//   erroMessage(status: number, message: string): object {
//     return {
//       status,
//       message,
//     };
//   }
// }

// export default erroHandler;

export default class ErroHandler extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}
