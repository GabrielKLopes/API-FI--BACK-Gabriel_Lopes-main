import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class UserGL{


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    razaoSocial: string;
    
    @Column()
    nfe: string;
    
    @Column()
    valor:String;
    
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

}


