/**
 * TicketController
 *
 * @description :: Server-side logic for managing Tickets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /* Return the count of positive, negative and neutral votes of a ticket */
  votes: function (req, res) {
    var ticketId = req.param('id');

    Ticket
      .findOne({id: ticketId})
      .then(function (record){
        if(record == undefined) return res.json(404);
        record.results(function(error, result){
            if (error) return res.serverError(error);
            return res.json(200, result);
        });
      })
      .catch(function (err) { return res.serverError(err); });
  }
};
