import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from '../account/account.entity';
import { IsNotEmpty, Length } from 'class-validator';

@Entity('apikey')
export class Apikey {
  @PrimaryColumn({
    type: 'varchar',
    length: 50,
    unique: true,
    nullable: false,
  })
  apikey: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  @IsNotEmpty()
  account: Account;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 14,
    default: '20210101000000',
  })
  @Length(14, 14)
  end_datetime: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 14,
    default: '99991231235959',
  })
  @Length(14, 14)
  begin_datetime: string;
}