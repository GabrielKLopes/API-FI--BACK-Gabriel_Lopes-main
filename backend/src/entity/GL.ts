import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class GL {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    telefone: string;
    
    @Column()
    email: string;
    
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

}