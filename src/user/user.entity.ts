import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ObjectIdColumn,
} from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: string;

    @Column({ unique: true })
    email: string;
}
