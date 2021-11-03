import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    const events = [];
    for (let i = 0; i < 50; i++) {
      events.push({
        name: 'Stelios Kitziris',
        start: 1635866053,
      });
    }
    return events;
  }
}
