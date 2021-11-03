import { Controller, Get } from '@nestjs/common';
import { EventService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  getAllEvents() {
    return this.eventService.findAll();
  }
}
