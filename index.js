$(document).ready(function (jQuery) {
    var commands, bgcolor = 'black';
    commands = {
        whoami: '{\
            \n\tname: "Marcos Antônio de Souza Silva",\
            \n\tresume: "I\'m a lovely by computer"\
            \n}',
        help: '[[ib;white;black;title]Welcome to Marcos\' Curriculum(][[ib;#ccc;black]version 0.1][[ib;white;black;title])]\
            \n\nType the commands:\
            \n\
            \n\t[[b;red;black]help     ]   help menu\
            \n\t[[b;red;black]ls       ]   commands list\
            \n\t[[b;red;black]portfolio]   last works list\
            \n\t[[b;red;black]whoami   ]   about me\
            \n\
            \nMade with [[b;red;black] &#10084;] and jQuery Terminal (https://github.com/jcubic/jquery.terminal)\
            \n',
        ls: 'help portfolio whoami'
    }
    jQuery(function($, undefined) {
        $('body').terminal(function(command) {
            if (command !== '') {
                if (commands.hasOwnProperty(command)) {
                    this.echo(commands[command]);
                    return;
                }
            }
            this.echo(commands.help);
        }, {
            greetings: commands.help,
            name: 'curriculum',
            prompt: '$ '
        });
    });
});
