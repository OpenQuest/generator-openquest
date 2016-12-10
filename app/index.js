var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    initializing: function() {},
    prompting: function() {
        this.log('Welcome to OpenQuest!');
        var props = [{
            type: 'input',
            name: 'packageName',
            message: 'Your project name',
            default: this.appname
        }, {
            type: 'input',
            name: 'packageDesc',
            message: 'Your project description',
            default: 'Here is descriptions'
        }, {
            type: 'input',
            name: 'packageVersion',
            message: 'Your project version',
            default: '1.0.0'
        }, {
            type: 'input',
            name: 'packageKeyword',
            message: 'Your project keywords'
        }];

        return this.prompt(props).then(function(answers) {
            this.packageName = answers.packageName;
            this.packageDesc = answers.packageDesc;
            this.packageVersion = answers.packageVersion;
            this.packageKeyword = answers.packageKeyword;
            this.year = (new Date()).getFullYear();
        }.bind(this));
    },
    configuring: function() {
        var words = this.packageKeyword.trim();
        if (words.length) {
            words = words.split(',');
        } else {
            words = [];
        }


        words.push('OpenQuest');
        this.packageKeyword = words.map(function(item) {
            return '"' + item + '"';
        });
    },
    default: function() {},
    writing: function() {
        this.template('_README.md', 'README.md');
        this.template('_package.json', 'package.json');
        this.copy('._gitignore', '.gitignore');
        this.copy('_gulpfile.js', 'gulpfile.js');
        this.copy('_index_comment.js', 'index_comment.js');
        this.template('_LICENSE', 'LICENSE');
        this.copy('_test.js', 'test.js');
    },
    conflicts: function() {},
    install: function() {},
    end: function() {
        this.log('Finished! Well Done!');
        this.log('run: sudo cnpm install')
    }
});