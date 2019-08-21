import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column(
        "varchar",
        {
            length: 191
        }
    )
    name: string;

    @Column(
        "varchar",
        {
            length: 191
        }
    )
    email: string;

    @Column()
    mobile_number: number;

    @Column({name: 'birthday'})
    birthday: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}