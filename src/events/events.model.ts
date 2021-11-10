import { Column, Model, Table } from 'sequelize-typescript';
import { Factory } from 'nestjs-seeder';
import * as mom from 'moment';

@Table
export class Event extends Model {
  @Column
  @Factory((faker) => faker.name.findName())
  name: string;

  @Column
  @Factory((faker) => {
    const from = faker.date.recent();
    const to = faker.date.future();
    const returnValue = faker.date.between(from, to);
    return mom(returnValue).format('YYYY-MM-DD');
  })
  start: Date;
}
