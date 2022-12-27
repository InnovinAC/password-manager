import winston from "winston";
class Logger {

    logError(error: Error) {
        winston.add(
            new winston.transports.Console({
                format: winston.format.prettyPrint(),
            })
        )

        winston.log({
            level: "error",
            message: error.message,
            metadata: error,
            time: Date.now()
        })
    }

}
export default Logger;