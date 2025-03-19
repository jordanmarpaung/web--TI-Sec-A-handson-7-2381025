import { NestMiddleware } from '@nestjs/common' ;

export class loggerMiddleware implements nestmiddleware {
    private readonly logger = new Logger(Loggermiddleware.name);
    use(req: request, res: any, next: (error?: any) => void) {
        switch(req.method) {
            case 'post':
            case 'put':
                this.logger.log(
                    'LoggerMiddle ware | request [${req.method}] | Request Body ${JSON.stringify(req.body)}',
                );
                break;
            case 'Get':
            case 'Delete':
                this.logger.log('LoggerMiddleware | Request [${req.method}]');
                break;
                default:
                this.logger.log()
                    'LoggerMiddleware | Request [${req.method}] default logging',
                ):

        }
    }
}