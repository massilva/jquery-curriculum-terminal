/*global $, document, jQuery */
$(document).ready(function (jQuery) {
    'use strict';
    var commands, cmd_list, helpCommandsList, name, skills;

    name = '[[ib;blue;black]\
    \n::::    ::::      :::     :::::::::   ::::::::   ::::::::   ::::::::  ::: \
    \n+:+:+: :+:+:+   :+: :+:   :+:    :+: :+:    :+: :+:    :+: :+:    :+: :+  \
    \n+:+ +:+:+ +:+  +:+   +:+  +:+    +:+ +:+        +:+    +:+ +:+            \
    \n+#+  +:+  +#+ +#++:++#++: +#++:++#:  +#+        +#+    +:+ +#++:++#++     \
    \n+#+       +#+ +#+     +#+ +#+    +#+ +#+        +#+    +#+        +#+     \
    \n#+#       #+# #+#     #+# #+#    #+# #+#    #+# #+#    #+# #+#    #+#     \
    \n###       ### ###     ### ###    ###  ########   ########   ########      \
    \n]';

    skills = [
        'Java: [[b;yellow;black]&#9733; &#9733; &#9733;] [[b;white;black]&#9734; &#9734;]',
        'Javascript: [[b;yellow;black]&#9733; &#9733; &#9733; &#9733;] [[b;white;black]&#9734;]'
    ];

    commands = {
        clear: {
            description: 'Clear the terminal screen'
        },
        ls: {
            description: 'List of available commands'
        },
        help: {
            description: 'Help menu'
        },
        home: {
            description: 'Welcome menu'
        },
        skills: {
            description: 'List of Skills',
            content: skills.join(',\n')
        },
        whoami: {
            description: 'About me',
            content: '[[b;white;black]{]\
                \n\t[[b;yellow;black]name]: "Marcos Antônio de Souza Silva",\
                \n\t[[b;yellow;black]resume]: "I’m a full-stack developer who is passionate about computers.\
                \n\t\tI enjoy working on creative and challenging projects that help people in their daily lives.\
                \n\t\tAs a programmer, I’m constantly research for algorithm optimization, \
                \n\t\tbest practices and also willing to try new technologies, programming languages, tools, etc.\
                \n\t\tI like to exchange knowledge and to collaborate with teams that have good interpersonal skills.",\
                \n\t[[b;yellow;black]from]: "Salvador/Bahia - Brazil",\
                \n\t[[b;yellow;black]skills]:{\
                \n\t\t' + skills.join(',\n\t\t') + '\
                \n\t}\
                \n[[b;white;black]}]'
        }
    };
    //Store the label and description commands' list
    helpCommandsList = '';
    //List of commands separeted by white space
    cmd_list = Object.keys(commands).map(function (cmd) {
        helpCommandsList += '\n\t[[b;red;black]' + cmd + '] - ' + commands[cmd].description;
        return cmd;
    }).join(' ');
    commands.help.content = '\n\
        \nAvailable commands:\
        \n' + helpCommandsList + '\n';
    //Add content of help command
    commands.home.content = '[[ib;white;black;title]Welcome to] \
        \n' + name + '\
        \n                                             [[ib;white;black;title]Curriculum] [[ib;#ccc;black]v.0.3]\
        ' + commands.help.content + '\
        \nMade with [[b;red;black] &#10084;] and jQuery Terminal (https://github.com/jcubic/jquery.terminal)\
        \n';
    // Add list of commands available
    commands.ls.content = cmd_list;
    $('body').terminal(
        function (command) {
            if (command !== '') {
                if (commands.hasOwnProperty(command)) {
                    this.echo(commands[command].content);
                    return;
                }
            }
            this.echo(commands.help.content);
        }, {
            greetings: commands.home.content,
            name: 'curriculum',
            prompt: '$ '
        }
    );
});
