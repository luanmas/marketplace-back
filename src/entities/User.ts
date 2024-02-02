import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: "varchar", length: 100, nullable: false })
    name: string

    @Column({ type: "varchar", length: 100, nullable: false })
    email: string

    @Column({ type: "varchar", length: 100, nullable: false })
    password: string
}
