import { Module } from '@nestjs/common';
import { EventsController } from './events/events.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'default',
      password: 'secret',
      database: 'default',
    }),
  ],
  controllers: [EventsController],
  providers: [AppService],
})
export class AppModule {}
