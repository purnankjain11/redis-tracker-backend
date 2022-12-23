import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientSocketGateway } from './gateway/client-socket.gateway';
import { TrackerModule } from './modules/tracker/tracker.module';

@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        url: 'redis://localhost:6379',
      },
    }),
    TrackerModule,
  ],
  controllers: [AppController],
  providers: [AppService, ClientSocketGateway],
})
export class AppModule {}
