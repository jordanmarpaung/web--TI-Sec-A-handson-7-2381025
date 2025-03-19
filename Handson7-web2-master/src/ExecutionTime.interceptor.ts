import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class ExecutionTimeInterceptor implements NestInterceptor {
    private readonly logger = new Logger(ExecutionTimeInterceptor.name);

    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> {
        const handler = context.getHandler();
        const methodName = handler.name;
        const className = context.getClass().name;

        this.logger.log(`Before... calling ${className}.${methodName}`);
        const startTime = Date.now();

        return next.handle().pipe(
            tap(() => {
                const endTime = Date.now();
                const executionTime = endTime - startTime;
                this.logger.log(`After... ${className}.${methodName} - Execution Time: ${executionTime}ms`);
            })
        );
    }
}
