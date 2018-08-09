// create Comment class here
// Build the following on the comment class model (Use ES6 syntax)
'use strict'

class Comment {
  //`new Comment(comment, imageId)`
  //should initialize with an id, image object (findImage) and commentContent (the actual text of the comment)
  //should save new comment to Comment.all property
  constructor (comment, imageId) {
    this.id = this.constructor.all.length;
    this.image = this.findImage(imageId)
    this.commentContent = comment
    this.constructor.all.push(this)
  }
  // + `Comment.prototype.findImage(imageId)`
  //   + given an `int` for an image id, returns the image object with that id
  //   + before return - adds current comment to image's comments property
  findImage (imageId) {
    const foundImage = Image.all[imageId]
    let aComment =  {id: this.id, content: this.commentContent}
    foundImage.comments.push(aComment)
    console.log(foundImage.comments)
    return foundImage
  }
  // + `Comment.prototype.commentEl()`
  //   + returns a string of html
  //     + html has an `li` tag with an `id` field and shows the comment
  commentEl () {
      return `<li id='${this.id}'>
        <div>${this.commentContent}</div>
      </li>`
  }
}

// + `Comment.all`
//   + should return all of the comment objects in an array
//   + a property of the Comment class
Comment.all = []
