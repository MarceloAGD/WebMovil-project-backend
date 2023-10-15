import { Entity, Column, PrimaryGeneratedColumn , Unique} from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    @Unique(["email"]) // Indica que el campo debe ser único en la columna "email"
    email: string;
    
    @Column()
    password: string;

    @Column({ nullable: true })//indica que puede ser null
    access_token: string | null

    @Column({ nullable: true, unique: true })  
    recoveryPass: number;
}

export class Response {
    response: boolean;
  }



    