
class erroHandler {
    status: number
    message: string

    constructor(status: number, message: string) {
        this.status = status;
        this.message = message;
    }

    erroMessage(status: number, message: string) {
        return {
            status,
            message,
        }
    }

}

export default erroHandler;

