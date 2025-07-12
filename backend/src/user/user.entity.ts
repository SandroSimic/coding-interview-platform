import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  CANDIDATE = 'CANDIDATE',
  INTERVIEWER = 'INTERVIEWER',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.CANDIDATE })
  role: UserRole;
}
