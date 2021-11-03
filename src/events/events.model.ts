import { Column, Model, Table } from 'sequelize-typescript';
import { Factory } from 'nestjs-seeder';

@Table
export class Event extends Model {
  @Column
  @Factory((faker) => faker.name.findName())
  name: string;
  @Column
  @Factory(() => {
    return new Date();
  })
  date: string;
}
