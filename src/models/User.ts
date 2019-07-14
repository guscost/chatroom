import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, Unique} from "typeorm";
import {Message} from './Message';

@Entity()
@Unique( "Email", ["email"] )
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    age: number;

    @OneToMany(type => Message, message => message.user)
    messages: Message[];
}
