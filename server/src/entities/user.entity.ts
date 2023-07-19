import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'users',
})
export default class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    name: 'mail',
    nullable: false,
  })
  public mail: string;

  @Column({
    name: 'password',
    nullable: false,
  })
  public password: string;

  @Column({
    name: 'login',
    nullable: false,
  })
  public login: string;

  @Column({
    name: 'full_name',
    nullable: false,
  })
  public fullName: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    name: 'last_update',
  })
  public lastUpdate: string;

  @Column({
    name: 'enabled',
    default: true,
    nullable: false,
  })
  public enabled: boolean;
}

export type UserSessionType = Omit<UserEntity, 'password'>;
