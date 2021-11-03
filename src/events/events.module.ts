import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './events.model';
import { EventsController } from './events.controller';
import { EventService } from './events.service';

@Module({
  imports: [SequelizeModule.forFeature([Event])],
  providers: [EventService],
  controllers: [EventsController],
})
export class EventsModule {}
