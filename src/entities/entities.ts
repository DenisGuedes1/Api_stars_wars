import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Movie")
class Movie {
    @PrimaryColumn({ type: "integer", generated: "increment" })
    id: number;

    @Column({ length: 45, unique: true })
    title: string;

    @Column({ type: "text" })
    type: string;

    @Column({ type: "text" })
    gender: string;

    @Column({ type: "text" })
    synopsy: string;

    @Column({ type: "text" })
    cast: string;

    @Column({ type: "text" })
    photo: string;

    @Column({ type: "text" })
    year_release: string;

    @Column({ type: "text" })
    play_button: string;
}
export { Movie };
