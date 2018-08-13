// Build out the following methods on the `CommentsController` class (Use ES6 syntax)

class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    // create comment form listener code here

    // + `CommentsController.prototype.addCommentFormListener()`
    //   + iterates through each comment form and adds an eventlistener to trigger a function on form submit

    let self = this

    for(let i = 0; i < this.$addCommentForm.length; i++) {
      this.$addCommentForm[i].addEventListener('submit', function (event) {
        event.preventDefault()

  // + function should grab the imageId + comment and create a new Comment with those arguments
        let imageId = parseInt($(this).data('id'))
        let comment = $(`#comment-description-${imageId}`).val()
        let newComment = new Comment (comment, imageId)
        self.render(newComment)

        $(`#comment-description-${imageId}`).val('')
      })
    }
  }
  // + `CommentsController.prototype.render(commentObject)`
  //   + selects the appropriate `ul` for this comment to be added to
  //   + appends the new comment element to this `ul`
  render (newComment) {
    $(`#comments-${newComment.image.id}`).append(newComment.commentEl())
  }
}
