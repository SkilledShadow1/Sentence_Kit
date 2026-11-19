


// This connects to the repository (AnkiPack) to allow for an easy way to the system to grab cards.
// As of right now, AnkiPack specific objects are being marked as 'any', although this will certainly be replaced by a better system.
export interface AnkiPackConnector {

  // Sets the filepath of the anki api file. Returns true on success, false otherwise.
  setAnkiAPIFilepath(path : String): bool

  // Return all available tags, plus count if possible.
  getAllTags(): any[]

  // Get a list of card object with a set list of tags.
  getCardsByTag(a : any[]): any[]

  // See how many cards exist with this tag.
  getCountOfTag(a : any[]): int

}