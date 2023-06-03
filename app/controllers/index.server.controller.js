/*file name: index.server.controller.js
*Student name: Yu Him Jonathan Chak
*Student ID: 301273965
*Date : JUN 2 2023
*/

exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};