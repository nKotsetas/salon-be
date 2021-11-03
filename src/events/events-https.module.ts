import { Module } from '@nestjs/common';
import { EventsModule } from './events.module';
import { EventService } from './events.service';
import { EventsController } from './events.controller';

@Module({
  imports: [EventsModule],
  providers: [EventService],
  controllers: [EventsController],
})
export class UserHttpModule {}
