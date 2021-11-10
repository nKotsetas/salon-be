import { seeder } from 'nestjs-seeder';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './events/events.model';
import { EventsSeeder } from './events/events.seed';
import { EventService } from './events/events.service';

seeder({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'default',
      password: 'secret',
      database: 'default',
      models: [Event],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Event]),
  ],
  providers: [EventService],
}).run([EventsSeeder]);
