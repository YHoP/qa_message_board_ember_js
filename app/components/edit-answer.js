import Ember from 'ember';

export default Ember.Component.extend({
  editAnswerForm: false,
  actions: {
    editAnswerShow() {
      this.set('editAnswerForm', true);
    },
    editAnswer(answer) {
      debugger;
      var today = new Date();
      var params = {
        author: this.get('author'),
        subject: this.get('subject'),
        content: this.get('content'),
        date_edited: today.toString(),
        question: this.question
      };
      this.set('editAnswerForm', false);
      this.sendAction('editAnswer', answer, params);
    }
  }
});
