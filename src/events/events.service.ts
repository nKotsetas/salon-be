import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FactoryValue } from 'nestjs-seeder';
import { Event } from './events.model';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event)
    private eventModel: typeof Event,
  ) {}

  async findAll(): Promise<Event[]> {
    return this.eventModel.findAll();
  }

  async createMany(event: Record<string, FactoryValue>[]): Promise<Event[]> {
    return this.eventModel.bulkCreate(event);
  }

  async deleteMany(): Promise<number> {
    return this.eventModel.destroy<Event>();
  }

  findOne(id: string): Promise<Event> {
    return this.eventModel.findOne<Event>({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const Event = await this.findOne(id);
    await Event.destroy();
  }
}
