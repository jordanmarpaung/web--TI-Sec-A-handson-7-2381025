import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  AppService,
  ],
})
export class AppModule implements NestModule{
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(loggerMiddleware).forRoutes('songs';)
  }
}
