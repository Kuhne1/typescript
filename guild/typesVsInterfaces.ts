
//Can merge type different interfaces together, not possible with types.
const declarationMerging = () => {
    interface Song {
        artistName: string;
    };

    interface Song {
        songName: string;
    };

    const song: Song = {
        artistName: "Freddie",
        songName: "The Chain"
    };
}
