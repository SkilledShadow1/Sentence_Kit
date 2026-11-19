
abstract class Component {
  
  public name : string
  public readonly tags : any[]



  constructor(name : string, tags : any[]) {
    this.name = name;
    this.tags = tags;
  }

  // Adds a tag to the list of tags.
  public addTag(a: any) {

  }

  // Removes a tag.
  public removeTag(a : any) {

  }


  // Generate a flashcard from the anki API that corresponds to the tags on this component.
  // This should return whatever a card element is to that API.
  public getFlashcard() : any {

  }

  
}