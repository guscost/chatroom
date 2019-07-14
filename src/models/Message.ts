import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from './User';

@Entity()
export class Message extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne(type => User, user => user.messages, { nullable: false })
    user: User;
}
