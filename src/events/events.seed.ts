import { EventService } from './events.service';
import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
import { Event } from './events.model';
import { Seeder, DataFactory, FactoryValue } from 'nestjs-seeder';

@Injectable()
export class EventsSeeder implements Seeder {
  constructor(private readonly eventService: EventService) {}

  async seed(): Promise<any> {
    // Generate 10 users.
    const events: Record<string, FactoryValue>[] =
      DataFactory.createForClass(Event).generate(10);
    return this.eventService.createMany(events);
  }

  async drop(): Promise<any> {
    return this.eventService.deleteMany();
  }
}
